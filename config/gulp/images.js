var gulp  = require('gulp');
var dutil = require('./doc-util');
var task  = /([\w\d-_]+)\.js$/.exec(__filename)[ 1 ];

gulp.task(task, function (done) {

  dutil.logMessage(task, 'Copying images from uswds');

  var stream = gulp.src('./node_modules/uswds/src/img/**/*')
    .pipe(gulp.dest('assets/img'));

  return stream;

});
