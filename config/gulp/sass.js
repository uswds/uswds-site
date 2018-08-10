var gulp      = require('gulp');
var dutil     = require('./doc-util');
var combineMq = require('gulp-combine-mq');
var sass      = require('gulp-sass');
var linter    = require('gulp-scss-lint');
var strip     = require('gulp-strip-css-comments');
var task      = 'sass';

gulp.task('build-sass', function () {

  return gulp.src('./css/**/*.scss')
    .pipe(sass({
      includePaths: [ './node_modules' ],
      outputStyle: 'compressed',
    }).on('error', sass.logError))
    .pipe(strip())
    .pipe(
      combineMq({
        beautify: true,
      })
    )
    .pipe(gulp.dest('assets/css'))
    .pipe(gulp.dest('_site/assets/css'));
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

gulp.task(task,
  gulp.series(
    'build-sass'
  )
);
