var gulp        = require('gulp');
var gutil       = require('gulp-util');
var dutil       = require('./doc-util');
var browserify  = require('browserify');
var buffer      = require('vinyl-buffer');
var source      = require('vinyl-source-stream');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var rename      = require('gulp-rename');
var linter      = require('gulp-eslint');
var task        = 'javascript';

gulp.task('eslint', function (done) {

  if (!cFlags.test) {
    dutil.logMessage('eslint', 'Skipping linting of JavaScript files.');
    return done();
  }

  return gulp.src( './js/**/*.js')
    .pipe(linter('.eslintrc'))
    .pipe(linter.format());

});

gulp.task('copy-uswds-javascript', function (done) {

  dutil.logMessage(task, 'Copying JS from uswds');

  var stream = gulp.src('./node_modules/uswds/dist/js/**/*')
    .pipe(gulp.dest('assets/js/vendor'));

  return stream;

});

gulp.task(task, [ 'copy-uswds-javascript', 'eslint' ], function (done) {

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
      .on('error', gutil.log)
      .pipe(rename({
        basename: 'styleguide',
      }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/js'));

});
