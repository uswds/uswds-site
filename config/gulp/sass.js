const concat = require("gulp-concat");
const csso = require("postcss-csso");
const gulp = require("gulp");
const stylelint = require("stylelint");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");

const postcssPlugins = {
  prod: [csso({ forceMediaMerge: false })],
};

const entrypoints = {
  css: {
    components: "./assets/css/uswds-components.css",
    custom: "./assets/css/uswds-custom.css",
    fonts: "./assets/css/uswds-fonts.css",
    utilities: "./assets/css/uswds-utilities.css",
    next: "./assets/css/uswds-next.css",
    together: "./assets/css/uswds-together.css",
  },
};

/**
 * Processes multiple CSS files (everything except Next) and minifies for production for main site.
 * @param {*} cssEntrypoints - array of CSS entrypoints
 * @param {*} outputName - string of output file name
 * @returns - outputName.css
 */
function compileProdCSS(cssEntrypoints, outputName = "styles.css") {
  return gulp
    .src(cssEntrypoints)
    .pipe(
      sourcemaps.init({
        largeFile: true,
        loadMaps: true,
      })
    )
    .pipe(concat(outputName))
    .pipe(postcss(postcssPlugins.prod))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/css"))
    .pipe(gulp.dest("_site/assets/css"));
}

// Compiles everything **except** next styles
function compileProdStyles() {
  const cssEntrypoints = [
    entrypoints.css.components,
    entrypoints.css.custom,
    entrypoints.css.fonts,
    entrypoints.css.utilities,
  ];

  return compileProdCSS(cssEntrypoints, "styles.css");
}

/**
 * Uses compileProdStyles() function to compile **all** CSS for Next Report
 */
function compileProdNextStyles() {
  // Object.values returns an array of values from our entrypoints.css object
  const allCSSEntrypoints = Object.values(entrypoints.css);

  return compileProdCSS(allCSSEntrypoints, "styles-next.css");
}

async function lint(done) {
  const { errored, output } = await stylelint.lint({
    files: [`./css/**/*.scss`],
    formatter: "string",
  });

  done(errored ? new Error(output) : null);
}

/**
 * Tasks for compiling Site & Next report styles; both dev & prod
 */
const prodStyles = compileProdStyles;
const prodNextStyles = compileProdNextStyles;

module.exports = {
  prodStyles,
  prodNextStyles,
  lint,
};
