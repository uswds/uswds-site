var gulp = require("gulp");
var dutil = require("./doc-util");
var task = "images";
const webp = require('gulp-webp');

function copyDocImages() {
  dutil.logMessage(task, "Copying images from img/");

  var stream = gulp.src("./img/**/*").pipe(gulp.dest("assets/img"));

  return stream;
}

function logImages(done) {
  dutil.logMessage(task, "Copying images Sass");
  done();
}

function convertWebP() {
  return gulp
    .src('img/**/*.{png,jpg,jpeg}')
    .pipe(
      webp({
        quality: 90
      })
    )
  .pipe(gulp.dest('img/webp'));
}

exports.default = gulp.series(convertWebP, logImages, copyDocImages);
