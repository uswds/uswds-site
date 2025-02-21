var gulp = require("gulp");
var dutil = require("./doc-util");
var task = "images";

function copyDocImages() {
  dutil.logMessage(task, "Copying images from img/");

  var stream = gulp
    .src("./img/**/*", {
      encoding: false,
    })
    .pipe(gulp.dest("assets/img"));

  return stream;
}

function logImages(done) {
  dutil.logMessage(task, "Copying images Sass");
  done();
}

exports.default = gulp.series(logImages, copyDocImages);
