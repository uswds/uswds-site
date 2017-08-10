var fs            = require('fs');
var path          = require('path');
var child_process = require('child_process');
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

// We might be using USWDS from a git repository instead of npm, in
// which case it might not have the pre-built assets we need. If that's
// the case, we'll want to build those assets.
gulp.task('build-uswds-if-needed', function () {
  const rootDir = path.normalize(path.join(__dirname, '..', '..'));
  const uswdsDir = path.join(rootDir, 'node_modules', 'uswds');
  const fractalIndex = path.join(uswdsDir, 'build', 'index.html');
  const gulpfile = path.join(uswdsDir, 'gulpfile.js');

  if (fs.existsSync(fractalIndex)) {
    dutil.logMessage('build-uswds-if-needed', 'USWDS is already built.');
    return Promise.resolve();
  } else {
    dutil.logMessage('build-uswds-if-needed', 'Building USWDS...');

    if (!fs.existsSync(gulpfile)) {
      return Promise.reject(new Error(
        `${gulpfile} does not exist! You need a newer version of USWDS; ` +
        `specifically, one that includes the following PR: ` +
        `https://github.com/18F/web-design-standards/pull/2050`
      ));
    }

    const sharedOpts = { stdio: 'inherit', cwd: uswdsDir };
    return spawnP('npm', [ 'run', 'federalist' ], sharedOpts);
  }
});

gulp.task('build', function (done) {

  dutil.logIntroduction();
  dutil.logMessage(
    'build'
  );

  runSequence(
    'clean-assets',
    'build-uswds-if-needed',
    [
      'fonts',
      'images',
      'javascript',
      'sass',
    ],
    done
  );

});
