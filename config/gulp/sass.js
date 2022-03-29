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
  "./node_modules",
  "./node_modules/@uswds/uswds/packages",
];

const uswds_site_paths = "./css/settings";

const sass_include_paths = uswds_required_paths.concat([uswds_site_paths]);

const handleError = (error) => {
  dutil.logError.bind(this)(error);
  this.emit("end");
};

gulp.task("build-sass-fonts", () => {
  return gulp
    .src("./css/uswds-fonts.scss")
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

gulp.task("build-sass-components", () => {
  return gulp
    .src("./css/uswds-components.scss")
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

gulp.task("build-sass-custom", () => {
  return gulp
    .src("./css/uswds-custom.scss")
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

gulp.task("build-next-sass", () => {
  return gulp
    .src("./css/uswds-next.scss")
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

gulp.task("scss-lint", (done) => {
  if (!cFlags.test) {
    dutil.logMessage("scss-lint", "Skipping linting of Sass files.");
    return done();
  }

  return gulp
    .src(["./css/**/*.scss"])
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});

gulp.task(task, gulp.series("build-sass"));
