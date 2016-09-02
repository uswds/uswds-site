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
var task        = /([\w\d-_]+)\.js$/.exec(__filename)[ 1 ];

gulp.task('eslint', function (done) {

  if (!cFlags.test) {
    dutil.logMessage('eslint', 'Skipping linting of JavaScript files.');
    return done();
  }

  return gulp.src([ 
    'assets/js/src/**/*.js', 
    '!assets/js/vendor/**/*.js', 
    '!assets/js/styleguide.js'
    ])
    .pipe(linter('.eslintrc'))
    .pipe(linter.format());

});

gulp.task('copy-docs-javascript', function (done) {

  dutil.logMessage(task, 'Copying JS from js/');

  var stream = gulp.src('./js/**/*')
    .pipe(gulp.dest('assets/js/'));

  return stream;

});

gulp.task('copy-jquery-javascript', function (done) {

  dutil.logMessage(task, 'Copying JS from jQuery');

  var stream = gulp.src('./node_modules/jquery/dist/jquery.min.*')
    .pipe(gulp.dest('assets/js/vendor/jquery/'));

  return stream;

});

/* TODO: Remove this build step *and* its invocation in the main task
   once build-time syntax colouring is restored
*/
gulp.task('copy-prismjs-javascript', function (done) {

  dutil.logMessage(task, 'Copying JS from PrismJS');

  var stream = gulp.src('./node_modules/prismjs/prism.js')
    .pipe(gulp.dest('assets/js/vendor/prismjs/'));

  return stream;

});

gulp.task('copy-uswds-javascript', function (done) {

  dutil.logMessage(task, 'Copying JS from uswds');

  var stream = gulp.src('./node_modules/uswds/dist/js/**/*')
    .pipe(gulp.dest('assets/js/vendor'));

  return stream;

});

gulp.task(task, [ 'copy-docs-javascript', 'copy-uswds-javascript',
                  'copy-jquery-javascript', 'copy-prismjs-javascript',
                  'eslint' ], function (done) {

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
    .pipe(sourcemaps.write('.', { addComment: false }))
    .pipe(gulp.dest('assets/js'));

});
