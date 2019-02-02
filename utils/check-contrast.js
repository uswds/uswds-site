const chroma = require('chroma-js');
const yaml = require('yamljs');
const fs = require('fs');
const path = require('path');
const jsonFormat = require('json-format');
const args = require('minimist')(process.argv.slice(2));
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
  CONTRAST_ALL: 'ca',
  FAMILY: 'f',
  DEBUG: 'd',
};

const uswdsTokens = yaml.load(path.join(
  __dirname,
  '../',
  '_data',
  '/tokens',
  '/color.yml'
));
const systemColors = uswdsTokens.system;

class Color {
  constructor({ grade, value, name = null }) {
    this._grade = grade;
    this.value = value;
    this.name = name;
  }

  get grade() {
    return Number(this._grade);
  }

  set grade(grade) {
    this._grade = grade;
  }

  contrastBetween(color) {
    return chroma.contrast(this.value, color.value);
  }

  toString() {
    return formatColorName(this.name, this.grade);
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

  toJSON() {
    return {
      ratio: this.ratio,
      base: this.base,
      contrast: this.contrast,
    };
  }

  isCompliant() {
    let result = true;

    if (this.base - this.contrast >= 50) {
      if (!isAACompliant(this)) {
        result = false;
      }
    } else if (!isAALargeCompliant(this)) {
      result = false;
    }

    return result;
  }
}

const COLORS = Object.keys(systemColors)
  .reduce((memo, colorName) => {
    const colorFamily = systemColors[colorName];
    const safeColors = colorFamily
      .filter(color => color.value)
      .reduce((memo, { token, value }) => {
        const colorMagicNumber = /(\d+)/.exec(token)[0];

        return [...memo, new Color({ grade: colorMagicNumber, value, name: colorName })];
      }, []);

    return {
      ...memo,
      [colorName]: new ColorFamily({
        name: colorName,
        colors: safeColors
      }),
    };
  }, {});

const WHITE = new Color({ grade: 0, value: '#ffffff', name: 'white' });
const BLACK = new Color({ grade: 100, value: '#000000', name: 'black' });
const MIN_CONTRAST_AA = 4.5;
const MIN_CONTRAST_AA_LARGE = 3;

const formatColorName = (family, grade) => `${family}-${grade}`;

/**
 * Given two hex values, return the WCAG contrast ratio between them
 * @param {String} colorA hex value of a color
 * @param {String} colorB hex value of a color
 */
const contrastBetween = (colorA, colorB) => {
  return chroma.contrast(colorA, colorB);
};

const isAALargeCompliant = (contrastObj) => contrastObj.ratio >= MIN_CONTRAST_AA_LARGE;
const isAACompliant = (contrastObj) => contrastObj.ratio >= MIN_CONTRAST_AA;

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

/**
 * Given two color objects, get the contrast between them and return
 * a contrast result
 *
 * @private
 * @param {Color} baseColor
 * @param {Color} contrastColor
 * @param {String} name the name of the color family
 * @returns new ContrastResult
 */
const contrastResultFactory = (baseColor, contrastColor) =>
  new ContrastResult({
    ratio: baseColor.contrastBetween(contrastColor),
    base: baseColor.toString(),
    contrast: contrastColor.toString(),
  });

const contrastForFamily = (colorFamily, familyB = null) => {
  const { name } = colorFamily
  const nextColorFamily = familyB ? familyB : colorFamily;
  const output = [];

  console.log(`\nChecking contrast for color family ${name}.`);

  for (let i = 0; i < colorFamily.colors.length; i++) {
    const color = colorFamily.colors[i];
    const { grade } = color;
    let adjustedGrade = grade;
    let ratio;
    let contrast;
    let contrastResult;

    if (grade < 40) {
      continue;
    }

    adjustedGrade -= 40;

    while (adjustedGrade >= 0) {
      if (adjustedGrade === 0) {
        logger(`Comparing color grade ${formatColorName(name, grade)} with white.`);
        contrastResult = contrastResultFactory(color, WHITE);
      } else {
        const nextColor = nextColorFamily.findByGrade(adjustedGrade);

        if (!nextColor) {
          break;
        }

        logger(`Comparing color grade ${color.toString()} with ${nextColor.toString()}`);
        contrastResult = contrastResultFactory(color, nextColor);
      }

      if (!contrastResult.isCompliant()) {
        output.push(contrastResult);
      }

      adjustedGrade -= 10;
    }

    adjustedGrade = grade + 40;

    while (adjustedGrade <= 100) {
      if (adjustedGrade === 100) {
        logger(`Comparing color grade ${color.toString()} with black.`);
        contrastResult = contrastResultFactory(color, BLACK);
      } else {
        const nextColor = nextColorFamily.findByGrade(adjustedGrade);

        if (!nextColor) {
          break;
        }

        logger(`Comparing color grade ${color.toString()} with ${nextColor.toString()}`);
        contrastResult = contrastResultFactory(color, nextColor);
      }

      if (!contrastResult.isCompliant()) {
        output.push(contrastResult);
      }

      adjustedGrade += 10;
    }
  }

  return output;
};

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

if (args[SWITCHES.CONTRAST_ALL]) {
  const familyNames = Object.keys(COLORS);
  const totalFamilies = familyNames.length;
  let totalErrors = [];

  for (let i = 0; i < totalFamilies; i++) {
    for (let j = i + 1; j < totalFamilies; j++) {
      const familyA = COLORS[familyNames[i]];
      const familyB = COLORS[familyNames[j]];

      totalErrors = totalErrors.concat(contrastForFamily(familyA, familyB));
    }
  }
  console.log(totalErrors);
} else if (args[SWITCHES.APPLY_LUM]) {
  const family = COLORS[args[SWITCHES.FAMILY]];

  if (!family) {
    console.log('Command requires a valid color family name to apply luminance to!'.red);
    process.exit();
  }

  console.log(applyLuminance(family));
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
