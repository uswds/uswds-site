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
  return del([
    'assets/js/vendor/uswds.js',
    'assets/js/vendor/uswds.min.js',
    'assets/js/vendor/uswds.min.js.map',
    'assets/js/styleguide.js',
    'assets/js/styleguide.js.map'
  ]);
});

gulp.task('clean-styles', function () {
  return del('assets/css/');
});

gulp.task('clean-assets', function (done) {
  runSequence(
    [
      'clean-fonts',
      'clean-images',
      'clean-javascript',
      'clean-styles',
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
