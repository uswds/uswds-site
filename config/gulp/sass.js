const concat = require("gulp-concat");
const csso = require("postcss-csso");
const dutil = require("./doc-util");
const gulp = require("gulp");
const gulpStylelint = require("gulp-stylelint");
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
    next: "./assets/css/uswds-next.css",
    utilities: "./assets/css/uswds-utilities.css",
  },
};

const handleError = (error) => {
  dutil.logError.bind(this)(error);
  this.emit("end");
};

/**
 * Processes multiple CSS files (everything except Next) and minifies for production for main site.
 * @param {*} cssEntrypoints - array of CSS entrypoints
 * @param {*} outputName - string of output file name
 * @returns - outputName.css
 */
function compileProdStyles(
  cssEntrypoints,
  outputName = "styles.css"
) {
  // Entry points for main site (everything except Next)
  cssEntrypoints = [
    entrypoints.css.components,
    entrypoints.css.custom,
    entrypoints.css.fonts,
    entrypoints.css.utilities
  ];

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

/**
 * Uses compileProdStyles() function to compile **all** CSS for Next Report
 */
function compileProdNextStyles() {
  // Object.values returns an array of values from our entrypoints.css object
  const allCSSEntrypoints = Object.values(entrypoints.css);

  return compileProdStyles(allCSSEntrypoints, "styles-next.css");
}

function lint() {
  return gulp.src(["./css/**/*.scss"]).pipe(
    gulpStylelint({
      reporters: [{ formatter: "string", console: true }],
    })
  );
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
