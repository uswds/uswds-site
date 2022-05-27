const { formatters } = require("stylelint");
const autoprefixer = require("autoprefixer");
const concat = require("gulp-concat");
const csso = require("postcss-csso");
const dutil = require("./doc-util");
const gulp = require("gulp");
const gulpStylelint = require("gulp-stylelint");
const postcss = require("gulp-postcss");
const sass = require("gulp-dart-scss");
const sourcemaps = require("gulp-sourcemaps");
const task = "sass";

const dev_plugins = [autoprefixer({ cascade: false })];

const prod_plugins = [csso({ forceMediaMerge: false })];

const uswds_required_paths = [
  "./node_modules/@uswds",
  "./node_modules/@uswds/uswds/packages",
];

const uswds_site_paths = "./css/settings";

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
        outputStyle: "expanded"
      })
      .on("error", handleError)
    )
    .pipe(postcss(dev_plugins))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/css"))
    .pipe(gulp.dest("_site/assets/css"));
}

const fonts = () => compileSass("./css/uswds-fonts.scss");
const components = () => compileSass("./css/uswds-components.scss");
const custom = () => compileSass("./css/uswds-custom.scss");
const next = () => compileSass("./css/uswds-next.scss");
const utils = () => compileSass("./css/uswds-utilities.scss");
const devStyles = gulp.parallel(fonts, components, custom, next, utils);

module.exports = {
  fonts,
  components,
  custom,
  next,
  devStyles
}

gulp.task("build-sass-utilities", () => {
  return gulp
    .src("./css/uswds-utilities.scss")
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(
      sass({
        includePaths: sass_include_paths,
        outputStyle: "expanded"
      })
      .on("error", handleError)
    )
    .pipe(postcss(dev_plugins))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/css"))
    .pipe(gulp.dest("_site/assets/css"));
});

gulp.task(
  "build-sass-dev",
  gulp.parallel(
    "build-sass-fonts",
    "build-sass-components",
    "build-sass-custom",
    "build-sass-utilities"
  )
);

gulp.task(
  "build-next-dev",
  gulp.parallel(
    "build-sass-fonts",
    "build-sass-components",
    "build-next-sass",
    "build-sass-utilities"
  )
);

gulp.task("build-sass-prod", () => {
  return gulp
    .src([
      "./assets/css/uswds-fonts.css",
      "./assets/css/uswds-components.css",
      "./assets/css/uswds-custom.css",
      "./assets/css/uswds-utilities.css",
    ])
    .pipe(
      sourcemaps.init({
        largeFile: true,
        loadMaps: true,
      })
    )
    .pipe(concat("styles.css"))
    .pipe(postcss(prod_plugins))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/css"))
    .pipe(gulp.dest("_site/assets/css"));
});

gulp.task("build-next-prod", () => {
  return gulp
    .src([
      "./assets/css/uswds-fonts.css",
      "./assets/css/uswds-components.css",
      "./assets/css/uswds-custom.css",
      "./assets/css/uswds-utilities.css",
      "./assets/css/uswds-next.css",
    ])
    .pipe(
      sourcemaps.init({
        largeFile: true,
        loadMaps: true,
      })
    )
    .pipe(concat("styles-next.css"))
    .pipe(postcss(prod_plugins))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/css"))
    .pipe(gulp.dest("_site/assets/css"));
});

gulp.task(
  "build-sass",
  gulp.series(
    "build-sass-dev",
    "build-next-dev",
    "build-sass-prod",
    "build-next-prod"
  )
);

gulp.task("scss-lint", () => {
  return gulp
    .src(["./css/**/*.scss"])
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});

gulp.task(task, gulp.series("build-sass"));
