var gulp      = require('gulp');
var dutil     = require('./doc-util');
var linter    = require('gulp-scss-lint');
var runSequence   = require('run-sequence');

gulp.task('copy-doc-styles', function (done) {

  dutil.logMessage('copy-doc-styles', 'Copying Sass files from css/');

  var stream = gulp.src('./css/**/*')
    .pipe(gulp.dest('assets/css/'));

  return stream;

});

gulp.task('copy-uswds-styles', function (done) {

  dutil.logMessage('copy-uswds-styles', 'Copying Sass files from uswds');

  var stream = gulp.src('./node_modules/uswds/src/stylesheets/**/*')
    .pipe(gulp.dest('assets/css/vendor/uswds'));

  return stream;

});

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

gulp.task('sass', ['copy-doc-styles', 'copy-uswds-styles']);
