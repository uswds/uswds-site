var gulp          = require('gulp');
var dutil         = require('./doc-util');
var runSequence   = require('run-sequence');
var clean         = require('gulp-clean');
var del           = require('del');


gulp.task('clean-fonts', function () {
  return del('assets/fonts/');
});

gulp.task('clean-images', function () {
  return del('assets/img/');
});

gulp.task('clean-javascript', function () {
  return del('assets/js/');
});

gulp.task('clean-styles', function () {
  return del('assets/css/');
});

gulp.task('remove-assets-folder', function () {
  return del('assets/');
});

gulp.task('clean-assets', function (done) {
  runSequence(
    [
      'clean-fonts',
      'clean-images',
      'clean-javascript',
      'clean-styles',
      'remove-assets-folder',
    ],
    done
  );
});

gulp.task('build', function (done) {

  dutil.logIntroduction();
  dutil.logMessage(
    'build'
  );

  runSequence(
    'clean-assets',
    [
      'fonts',
      'images',
      'javascript',
      'sass',
    ],
    done
  );

});
