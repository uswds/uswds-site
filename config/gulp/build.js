var fs            = require('fs');
var path          = require('path');
var child_process = require('child_process');
var gulp          = require('gulp');
var dutil         = require('./doc-util');
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

gulp.task('clean-assets',
  gulp.parallel(
    'clean-fonts',
    'clean-images',
    'clean-javascript',
    'clean-styles',
    'remove-assets-folder'
  )
);

function spawnP(cmd, args, opts) {
  return new Promise((resolve, reject) => {
    console.log(`running ${cmd} ${args}`);
    child_process.spawn(
        cmd,
        args,
        opts
      )
      .on('error', err => {
        reject(new Error(err));
      })
      .on('exit', code => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error("Building USWDS failed!"));
        }
      });
  });
}

gulp.task('build',
  gulp.series(
    function(done) {
      dutil.logIntroduction();
      dutil.logMessage(
        'build'
      );
      done();
    },
    'clean-assets',
    gulp.parallel(
      'fonts',
      'images',
      'javascript',
      'sass',
    )
  )
);
