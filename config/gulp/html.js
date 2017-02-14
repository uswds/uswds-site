var gulp = require('gulp');

gulp.task('html', function () {

  return gulp.src([
      './node_modules/uswds/src/html/**/*.html',
      '!./node_modules/uswds/src/html/address-form.html',
      '_includes/code/examples/**/*.html',
    ])
    .pipe(gulp.dest('_includes/code/components'));

});
