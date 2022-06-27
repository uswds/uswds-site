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

// Convert png and jpg images into WebP format
// WIP: Currently converts only images in home/showcase
// Todo: When ready to convert all images, update src glob to 'img/**/*.{png,jpg,jpeg}' and dest to 'img/webp'
function convertWebP() {
  return gulp
    .src('img/home/showcase/*.{png,jpg,jpeg}')
    .pipe(
      webp({
        quality: 90
      })
    )
  .pipe(gulp.dest('img/webp/home/showcase'));
}

exports.default = gulp.series(logImages, copyDocImages);
exports.convert = gulp.series(convertWebP);
