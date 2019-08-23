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

gulp.task('eslint', function (done) {

  if (!cFlags.test) {
    dutil.logMessage('eslint', 'Skipping linting of JavaScript files.');
    return done();
  }

  return gulp.src([
    './js/**/*.js',
    '!./js/vendor/**/*.js'])
    .pipe(linter('.eslintrc'))
    .pipe(linter.format());

});

gulp.task('copy-uswds-javascript', function (done) {

  dutil.logMessage(task, 'Copying JS from uswds');

  var stream = gulp.src('./node_modules/uswds/dist/js/**/*')
    .pipe(gulp.dest('assets/js/vendor'));

  return stream;

});

gulp.task(task,
  gulp.series(
    gulp.parallel(
      'copy-uswds-javascript',
      'eslint'
    ),
    function(done) {
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
  )
);
