const chroma = require('chroma-js');
const yaml = require('yamljs');
const fs = require('fs');
const path = require('path');
const jsonFormat = require('json-format');
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

const SWITCHES = {
  LUMINANCE: 'l',
  CONTRAST: 'c',
  FAMILY: 'f',
};

const uswdsTokens = yaml.load(path.join(
  __dirname,
  '../',
  '_data',
  '/uswds_tokens.yml'
));
const systemColors = uswdsTokens.colors.system;

class Color {
  constructor({ grade, value }) {
    this.grade = grade;
    this.value = value;
  }
}

class ColorFamily {
  constructor({ name, colors = [] }) {
    this.name = name;
    this.colors = colors;
  }
}

class ContrastResult {
  constructor({ ratio, base, contrast }) {
    this.ratio = ratio,
    this.base = base;
    this.contrast = contrast;
  }
}

const COLORS = Object.keys(systemColors)
  .reduce((memo, colorName) => {
    const colorFamily = systemColors[colorName];
    const safeColors = colorFamily
      .filter(color => color.value)
      .reduce((memo, { utility, value }) => {
        const colorMagicNumber = /(\d+)/.exec(utility)[0];
        
        return [...memo, new Color({ grade: colorMagicNumber, value })];
      }, []);

    return {
      ...memo,
      [colorName]: new ColorFamily({
        name: colorName,
        colors: safeColors
      }),
    };
  }, {});

const WHITE = '#ffffff';
const BLACK = '#000000';
const MIN_CONTRAST_AA = 4;
const MIN_CONTRAST_AA_LARGE = 3;

const formatColorName = (family, grade) => `${family}-${grade}`;

const colorFamilyContrast = (colors, familyName) => {
  const colorFamily = colors[familyName];
  const grades = Object.keys(colorFamily);
  const colorValues = Object.values(colorFamily);
  const length = grades.length;
  const output = [];

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const compare = colorValues[i];
      const comparedTo = colorValues[j];
      const compareGrade = grades[i];
      const comparedToGrade = grades[j];
      const ratio = chroma.contrast(compare, comparedTo);

      output.push([ `${familyName}-${compareGrade}`, `${familyName}-${comparedToGrade}`, ratio ]);
    }
  }

  return output;
}

const contrastBetween = (colorA, colorB) => {
  return chroma.contrast(colorA, colorB);
};

/**
 * Contrast color grades (filtered by predicate function) against a single color
 * 
 * @param {String} familyName the name of the color family, e.g., 'red'
 * @param {String} contrastingColor hex code of the color you want to constrast with
 * @param {Function} predicate filter for grades we want to constrast
 * 
 * @returns Array of color names and their ratios with the constrating color
 */
const familyContrastWithColor = (familyName, contrastingColor, predicate) => {
  const family = COLORS[familyName];
  const grades = Object.keys(family);
  const gradesToCompare = grades.reduce((memo, grade) => {
    if (predicate(grade)) {
      memo.push(grade);
    }

    return memo;
  }, []);

  return gradesToCompare.map(function (grade) {
    return [
      formatColorName(familyName, grade),
      chroma.contrast(family[grade], contrastingColor),
    ];
  })
};

const isAALargeCompliant = (contrastObj) => contrastObj.ratio >= MIN_CONTRAST_AA_LARGE;
const isAACompliant = (contrastObj) => contrastObj.ratio >= MIN_CONTRAST_AA;

//console.log(COLORS);
//console.log(familyContrastWithColor('blue_vivid', WHITE, (grade) => grade < 50));


const checkContrast = () => {
  const families = Object.values(COLORS);
  const output = [];

  for (let b = 0; b < families.length; b++) {
    for (let c = b + 1; c < families.length; c++) {
      const { colors: baseFamily, name: baseName } = families[b];
      const { colors: contrastFamiliy, name: contrastName } = families[c];
      const shortestLen = Math.min(baseFamily.length, contrastFamiliy.length);

      for (let i = 0; i < shortestLen; i++) {
        for (let j = i + 1; j < shortestLen; j++) {
          const base = baseFamily[i];
          const contrast = contrastFamiliy[j];
          const gradeDiff = Math.abs(base.grade - contrast.grade);

          // there is no expectation that two colors with a grade
          // difference of 30 or less will have a compliant contrast
          if (gradeDiff < 40) {
            continue;
          }

          const ratio = chroma.contrast(base.value, contrast.value);

          output.push(new ContrastResult({
            ratio,
            base: formatColorName(baseName, base.grade),
            contrast: formatColorName(contrastName, contrast.grade),
          }));
        }
      }
    }
  }

  return output;
};

const luminanceForFamily = (colors) => {
  return colors.map((color) => {
    return chroma(color.value).luminance();
  });
};

const contrastForFamily = (colorFamily) => {
  const { colors, name } = colorFamily
  const output = [];

  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    const { grade, value } = color;
    let adjustedGrade = Number(grade);

    if (grade < 40) {
      continue;
    }
    
    adjustedGrade -= 40;

    while (adjustedGrade >= 0) {
      if (adjustedGrade === 0) {
        output.push(new ContrastResult({
          ratio: chroma.contrast(color.value, WHITE),
          base: formatColorName(name, grade),
          contrast: 'white'
        }));
      } else {
        const nextColor = colors.find((color) => color.grade === String(adjustedGrade));

        if (!nextColor) {
          break;
        }

        output.push(new ContrastResult({
          ratio: contrastBetween(color.value, nextColor.value),
          base: formatColorName(name, grade),
          contrast: formatColorName(name, adjustedGrade),
        }));
      }


      adjustedGrade -= 10;
    }
    
    while(adjustedGrade <= 100) {
      const nextColor = colors.find((color) => color.grade === String(adjustedGrade));

      if (!nextColor) {
        // we have hit the end of our colors?
        break;
      }

      if (adjustedGrade === 100) {
        output.push(
          new ContrastResult({
            ratio: contrastBetween(color.value, 'black'),
            base: formatColorName(name, color.grade),
            contrast: 'black',
          })
        );
      } else {
        output.push(
          new ContrastResult({
            ratio: contrastBetween(color.value, nextColor.value),
            base: formatColorName(name, color.grade),
            contrast: formatColorName(name, nextColor.grade),
          })
        );
      }

      adjustedGrade += 10;
    }
  }

  return output;
}

if (args[SWITCHES.LUMINANCE]) {
  const family = COLORS[args[SWITCHES.FAMILY]];

  if (!family) {
    console.log('Luminance command requires a valid color family name!');
    process.exit(1);
  }

  console.log(luminanceForFamily(family.colors));
  process.exit();
} else if (args[SWITCHES.CONTRAST]) {
  const family = COLORS[args[SWITCHES.FAMILY]];

  if (!family) {
    // do a dump of all the constrasts and report errors
    const allContrasts = checkContrast();
    let errorReport = {
      notAALarge: allContrasts.filter(obj => obj.ratio < MIN_CONTRAST_AA_LARGE),
      notAA: allContrasts.filter(obj => obj.ratio < MIN_CONTRAST_AA), 
    };

    fs.writeFileSync('contrast-report.json', jsonFormat(errorReport));
  } else {
    console.log(jsonFormat(contrastForFamily(family)));
  }

  process.exit();
}
