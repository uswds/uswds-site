const chroma = require('chroma-js');
const yaml = require('yamljs');
const fs = require('fs');
const path = require('path');
const jsonFormat = require('json-format');
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));
const colors = require('colors');

const debug = (enabled) => {
  if (enabled) {
    return (message) => {
      console.log(message);
    };
  }

  return function () {};
};

let logger;

const SWITCHES = {
  LUMINANCE: 'l',
  APPLY_LUM: 'al',
  CONTRAST: 'c',
  FAMILY: 'f',
  DEBUG: 'd',
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
    this._grade = grade;
    this.value = value;
  }

  get grade() {
    return Number(this._grade);
  }

  set grade(grade) {
    this._grade = grade;
  }
}

class ColorFamily {
  constructor({ name, colors = [] }) {
    this.name = name;
    this.colors = colors;
  }

  findByGrade(grade) {
    return this.colors.find((color) => color.grade === grade);
  }
}

class ContrastResult {
  constructor({ ratio, base, contrast }) {
    this.ratio = ratio,
    this.base = base;
    this.contrast = contrast;
  }

  toString() {
    // format me in an aethetically appealing way
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
const MIN_CONTRAST_AA = 4.5;
const MIN_CONTRAST_AA_LARGE = 3;
// const AA_CONTRAST_DISTANCE = 50;
// const COLOR_GRADE_INCREMENT = 10;

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

/**
 * Get luminance values for a list of Color objects
 * @param {Array} colors
 * @returns Array of luminance values for the color values
 *          for each grade in a given color family
 */
const luminanceForFamily = (family) => {
  return family.colors.map((color) => {
    return {
      colorName: formatColorName(family.name, color.grade),
      relativeLum: chroma(color.value).luminance(),
    }
  });
};

/**
 * Apply luminence values for gray grades to each matching grade
 * in the supplied color family
 * @param {ColorFamily} family
 *  
 */
const applyLuminance = (colorFamily) => {
  const gray = COLORS.gray;

  return gray.colors.reduce((memo, color) => {
    const targetColor = colorFamily.findByGrade(color.grade);

    if (targetColor) {
      const nextHex = chroma(targetColor.value)
        .luminance(chroma(color.value)
        .luminance())
        .hex();

      memo = [...memo, { grade: targetColor.grade, value: nextHex }];
    }

    return memo;
  },[]);
};

const contrastForFamily = (colorFamily) => {
  const { colors, name } = colorFamily
  const output = [];
  
  console.log(`\nChecking contrast for color family ${name}.`);
  
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    const { grade, value } = color;
    let adjustedGrade = grade;
    let ratio;
    let contrast;

    if (grade < 40) {
      continue;
    }
    
    adjustedGrade -= 40;

    while (adjustedGrade >= 0) {
      if (adjustedGrade === 0) {
        logger(`Comparing color grade ${formatColorName(name, grade)} with white.`);
        ratio = contrastBetween(color.value, WHITE);
        contrast = 'white';
      } else {
        const nextColor = colors.find((color) => color.grade === adjustedGrade);

        if (!nextColor) {
          break;
        }
        
        logger(`Comparing color grade ${formatColorName(name, grade)} with ${formatColorName(name, adjustedGrade)}`);
        ratio = contrastBetween(color.value, nextColor.value);
        contrast = formatColorName(name, adjustedGrade);
      }

      const contrastResult = new ContrastResult({
        ratio,
        base: formatColorName(name, grade),
        contrast,
      });

      if (grade - adjustedGrade >= 50) {
        if (!isAACompliant(contrastResult)) {
          output.push(contrastResult);
        }
      } else if (!isAALargeCompliant(contrastResult)) {
        output.push(contrastResult);
      }

      adjustedGrade -= 10;
    }

    adjustedGrade = grade + 40;


    while (adjustedGrade <= 100) {
      if (adjustedGrade === 100) {
        logger(`Comparing color grade ${formatColorName(name, grade)} with black.`);
        ratio = contrastBetween(color.value, BLACK);
        contrast = 'black';
      } else {
        const nextColor = colors.find((color) => color.grade === adjustedGrade);
  
        if (!nextColor) {
          break;
        }
        
        logger(`Comparing color grade ${formatColorName(name, grade)} with ${formatColorName(name, adjustedGrade)}`);
        ratio = contrastBetween(color.value, nextColor.value);
        contrast = formatColorName(name, nextColor.grade);
      }

      const contrastResult = new ContrastResult({
        ratio,
        base: formatColorName(name, color.grade),
        contrast,
      });

      if (grade - adjustedGrade >= 50) {
        if (!isAACompliant(contrastResult)) {
          output.push(contrastResult);
        }
      } else if (!isAALargeCompliant(contrastResult)) {
        output.push(contrastResult);
      }

      adjustedGrade += 10;
    }
  }

  return output;
}

/**
 * Helper function that takes a color family, validates contrasts,
 * and reports any errors
 * @private
 * @param {ColorFamily} colorFamily 
 */
const reportContrastErrors = (colorFamily) => {
  const contrastErrors = contrastForFamily(colorFamily);

  if (contrastErrors.length) {
    console.error(`Errors found in color family ${colorFamily.name}!\n`.red);
    console.error(jsonFormat(contrastErrors));
  } else {
    console.log(`No contrast errors found for color family ${colorFamily.name}!\n`.green);
  }
}

logger = debug(args[SWITCHES.DEBUG]);

if (args[SWITCHES.APPLY_LUM]) {
  const family = COLORS[args[SWITCHES.FAMILY]];

  if (!family) {
    console.log('Command requires a valid color family name to apply luminance to!'.red);
    process.exit();
  }

  console.log(applyLuminence(family));
} else if (args[SWITCHES.LUMINANCE]) {
  const family = COLORS[args[SWITCHES.FAMILY]];

  if (!family) {
    console.log('Luminance command requires a valid color family name!'.red);
    process.exit();
  }

  console.log(luminanceForFamily(family));
} else if (args[SWITCHES.CONTRAST]) {
  const family = COLORS[args[SWITCHES.FAMILY]];

  if (!family) {
    Object.keys(COLORS).forEach((familyName) => {
      const colorFamily = COLORS[familyName];

      reportContrastErrors(colorFamily);
    });
  } else {
    reportContrastErrors(family);
  }
}

process.exit();



/**
 *     // do a dump of all the constrasts and report errors
    const allContrasts = checkContrast();
    let errorReport = {
      notAALarge: allContrasts.filter(obj => obj.ratio < MIN_CONTRAST_AA_LARGE),
      notAA: allContrasts.filter(obj => obj.ratio < MIN_CONTRAST_AA), 
    };

    fs.writeFileSync('contrast-report.json', jsonFormat(errorReport));
 */
