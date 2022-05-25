const gulp        = require('gulp');
const log       = require('fancy-log');
const dutil       = require('./doc-util');
const browserify  = require('browserify');
const buffer      = require('vinyl-buffer');
const source      = require('vinyl-source-stream');
const uglify      = require('gulp-uglify');
const sourcemaps  = require('gulp-sourcemaps');
const rename      = require('gulp-rename');
const linter      = require('gulp-eslint');
const task        = 'javascript';

function eslint() {
  return gulp.src([
    './js/**/*.js',
    '!./js/vendor/**/*.js'])
    .pipe(linter('.eslintrc'))
    .pipe(linter.format());
};


function buildJS(done) {
  dutil.logMessage(task, 'Compiling JavaScript');

      var minifiedStream = browserify({
        entries: 'js/start.js',
        debug: true,
      });

      return minifiedStream.bundle()
        .pipe(source('start.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
          .pipe(uglify())
          .on('error', log)
          .pipe(rename({
            basename: 'styleguide',
          }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/js'));
}

exports.lint = eslint;
exports.build = buildJS;
