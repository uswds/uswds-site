const autoprefixer = require("autoprefixer");
const concat = require("gulp-concat");
const csso = require("postcss-csso");
const dutil = require("./doc-util");
const gulp = require("gulp");
const gulpStylelint = require("gulp-stylelint");
const postcss = require("gulp-postcss");
const sass = require("gulp-dart-scss");
const sourcemaps = require("gulp-sourcemaps");

const postcssPlugins = {
  dev: [autoprefixer({ cascade: false })],
  prod: [csso({ forceMediaMerge: false })]
}

const uswds_required_paths = [
  "./node_modules/@uswds",
  "./node_modules/@uswds/uswds/packages",
];

const uswds_site_paths = "./css/settings";

const entrypoints = {
  sass: {
    fonts: "./css/uswds-fonts.scss",
    components: "./css/uswds-components.scss",
    custom: "./css/uswds-custom.scss",
    next: "./css/uswds-next.scss",
    utilities: "./css/uswds-utilities.scss",
  },
  css: {
    fonts: "./assets/css/uswds-fonts.css",
    components: "./assets/css/uswds-components.css",
    custom: "./assets/css/uswds-custom.css",
    next: "./assets/css/uswds-next.css",
    utilities: "./assets/css/uswds-utilities.css",
  },
};

const sass_include_paths = uswds_required_paths.concat([uswds_site_paths]);

const handleError = (error) => {
  dutil.logError.bind(this)(error);
  this.emit("end");
};

/**
 * SASS compile that uses standard plugins and output.
 * Takes a single SASS entrypoint. Example:
 *
 * const fonts = () => compileSass("./css/uswds-fonts.scss");
 *
 * @param {string} entrypoint - single SASS entrypoint
 * @returns
 */
function compileSass(entrypoint) {
  dutil.logMessage(`Compiling SASS from: ${entrypoint}`);

  return gulp
    .src(entrypoint)
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(
      sass({
        includePaths: sass_include_paths,
        outputStyle: "expanded",
      }).on("error", handleError)
    )
    .pipe(postcss(postcssPlugins.dev))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/css"))
    .pipe(gulp.dest("_site/assets/css"));
}

/**
 * Processes multiple CSS files and minifies for production.
 * @param {*} entrypoints - array of entrypoints
 * @param {*} outputName - string of output file name
 * @returns - outputName.css
 */
function compileProdStyles(
  entrypoints = [
    entrypoints.css.fonts,
    entrypoints.css.components,
    entrypoints.css.utilities,
    entrypoints.css.custom,
  ],
  outputName = "styles.css"
) {
  return gulp
    .src(entrypoints)
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

function prodNextStyles() {
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
 * Individual SASS file compilation
 */
const fonts = () => compileSass(entrypoints.sass.fonts);
const components = () => compileSass(entrypoints.sass.components);
const custom = () => compileSass(entrypoints.sass.custom);
const next = () => compileSass(entrypoints.sass.next);
const utils = () => compileSass(entrypoints.sass.utilities);

/**
 * Tasks for compiling Site & Next report styles; both dev & prod
 */
const devStyles = gulp.parallel(fonts, components, custom, utils);
const devNextStyles = gulp.parallel(devStyles, next);
const prodStyles = compileProdStyles;
const buildSass = gulp.series(
  devStyles,
  devNextStyles,
  prodStyles,
  prodNextStyles
);

module.exports = {
  fonts,
  components,
  custom,
  next,
  devStyles,
  devNextStyles,
  prodStyles,
  prodNextStyles,
  buildSass,
  lint,
};
