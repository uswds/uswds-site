var autoprefixer  = require('autoprefixer');
var combineMq     = require('gulp-combine-mq');
var concat        = require('gulp-concat');
var cssnano       = require('cssnano');
var dutil         = require('./doc-util');
var gulp          = require('gulp');
var linter        = require('gulp-scss-lint');
var packCSS       = require('css-mqpacker');
var postcss       = require('gulp-postcss');
var sass          = require('gulp-dart-sass');
var sourcemaps    = require('gulp-sourcemaps');
var strip         = require('gulp-strip-css-comments');
var task          = 'sass';

var dev_plugins = [
  autoprefixer({ browsers: ['> 2%','Last 2 versions','IE 11'], cascade: false, }),
  packCSS({ sort: true })
];

var prod_plugins = [
  packCSS({ sort: true }),
  cssnano({ autoprefixer: { browsers: '> 2%, Last 2 versions, IE 11' }})
];

gulp.task('build-sass-fonts', function () {
  return gulp.src('./css/uswds-fonts.scss')
    .pipe(sourcemaps.init({largeFile: true}))
    .pipe(
      sass({
        includePaths: [
          './node_modules/uswds/dist/scss',
          './css/settings',
        ],
        outputStyle: 'expanded',
      })
        .on('error', function(error) {
          sass.logError.bind(this)(error);

          if (process.env.NODE_ENV !== 'development') {
            process.exit(1);
          }
        })
    )
    .pipe(postcss(dev_plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
    .pipe(gulp.dest('_site/assets/css'))
});

gulp.task('build-sass-components', function () {
  return gulp.src('./css/uswds-components.scss')
    .pipe(sourcemaps.init({largeFile: true}))
    .pipe(
      sass({
        includePaths: [
          './node_modules/uswds/dist/scss',
          './css/settings',
        ],
        outputStyle: 'expanded',
      })
        .on('error', function(error) {
          sass.logError.bind(this)(error);

          if (process.env.NODE_ENV !== 'development') {
            process.exit(1);
          }
        })
    )
    .pipe(postcss(dev_plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
    .pipe(gulp.dest('_site/assets/css'))
});

gulp.task('build-sass-layout-grid', function () {
  return gulp.src('./css/uswds-layout-grid.scss')
    .pipe(sourcemaps.init({largeFile: true}))
    .pipe(
      sass({
        includePaths: [
          './node_modules/uswds/dist/scss',
          './css/settings',
        ],
        outputStyle: 'expanded',
      })
        .on('error', function(error) {
          sass.logError.bind(this)(error);

          if (process.env.NODE_ENV !== 'development') {
            process.exit(1);
          }
        })
    )
    .pipe(postcss(dev_plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
    .pipe(gulp.dest('_site/assets/css'))
});

gulp.task('build-sass-custom', function () {
  return gulp.src('./css/uswds-custom.scss')
    .pipe(sourcemaps.init({largeFile: true}))
    .pipe(
      sass({
        includePaths: [
          './node_modules/uswds/dist/scss',
          './css/settings',
        ],
        outputStyle: 'expanded',
      })
        .on('error', function(error) {
          sass.logError.bind(this)(error);

          if (process.env.NODE_ENV !== 'development') {
            process.exit(1);
          }
        })
    )
    .pipe(postcss(dev_plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
    .pipe(gulp.dest('_site/assets/css'))
});

gulp.task('build-sass-utilities', function () {
  return gulp.src('./css/uswds-utilities.scss')
    .pipe(sourcemaps.init({largeFile: true}))
    .pipe(
      sass({
        includePaths: [
          './node_modules/uswds/dist/scss',
          './css/settings',
        ],
        outputStyle: 'expanded',
      })
        .on('error', function(error) {
          sass.logError.bind(this)(error);

          if (process.env.NODE_ENV !== 'development') {
            process.exit(1);
          }
        })
    )
    .pipe(postcss(dev_plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
    .pipe(gulp.dest('_site/assets/css'))
});

gulp.task('build-sass-dev',
  gulp.parallel(
    'build-sass-fonts',
    'build-sass-components',
    'build-sass-layout-grid',
    'build-sass-custom',
    'build-sass-utilities',
  )
);

gulp.task('build-sass-prod', function () {
  return gulp.src([
    './assets/css/uswds-fonts.css',
    './assets/css/uswds-components.css',
    './assets/css/uswds-layout-grid.css',
    './assets/css/uswds-custom.css',
    './assets/css/uswds-utilities.css'
  ])
    .pipe(sourcemaps.init({
        largeFile: true,
        loadMaps: true
      }))
    .pipe(concat('styles.css'))
    .pipe(postcss(prod_plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
    .pipe(gulp.dest('_site/assets/css'))
});

gulp.task('build-sass',
  gulp.series(
    'build-sass-dev',
    'build-sass-prod'
  )
);

gulp.task('scss-lint', function (done) {
  if (!cFlags.test) {
    dutil.logMessage('scss-lint', 'Skipping linting of Sass files.');
    return done();
  }

  return gulp.src([
    './css/**/*.scss'
    ])
    .pipe(linter({
      config: '.scss-lint.yml',
    }))
    .pipe(linter.failReporter('E'));

});

gulp.task(task,
  gulp.series(
    'build-sass'
  )
);
