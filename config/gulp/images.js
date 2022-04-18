var gulp = require("gulp");
var del = require("del");
var svgSprite = require("gulp-svg-sprite");
var rename = require("gulp-rename");
var dutil = require("./doc-util");
var task = "images";

var IMG_DEST = "./assets/img";
var SPRITE_DEST = "./img";

gulp.task("copy-doc-images", function (done) {
  dutil.logMessage(task, "Copying images from img/");

  var stream = gulp.src("./img/**/*").pipe(gulp.dest("assets/img"));

  return stream;
});

gulp.task("copy-uswds-images", function (done) {
  dutil.logMessage(task, "Copying images from uswds");

  var stream = gulp
    .src("./node_modules/uswds/dist/img/**/*")
    .pipe(gulp.dest(IMG_DEST));

  return stream;
});

// SVG sprite configuration
config = {
  shape: {
    dimension: {
      // Set maximum dimensions
      maxWidth: 24,
      maxHeight: 24,
    },
    id: {
      separator: "-",
    },
    spacing: {
      // Add padding
      padding: 0,
    },
  },
  mode: {
    symbol: true, // Activate the «symbol» mode
  },
};

gulp.task("build-sprite", function (done) {
  gulp
    .src(`${IMG_DEST}/usa-icons/**/*.svg`, {
      allowEmpty: true,
    })
    .pipe(svgSprite(config))
    .on("error", function (error) {
      console.log("There was an error");
    })
    .pipe(gulp.dest(`${SPRITE_DEST}`))
    .on("end", function () {
      done();
    });
});

gulp.task("rename-sprite", function (done) {
  gulp
    .src(`${SPRITE_DEST}/symbol/svg/sprite.symbol.svg`, {
      allowEmpty: true,
    })
    .pipe(rename(`${SPRITE_DEST}/site-sprite.svg`))
    .pipe(gulp.dest(`./`))
    .on("end", function () {
      done();
    });
});

gulp.task("clean-sprite", function (cb) {
  cb();
  return del.sync(`${SPRITE_DEST}/symbol`);
});

gulp.task(
  "svg-sprite",
  gulp.series("build-sprite", "rename-sprite", "clean-sprite")
);

gulp.task(
  task,
  gulp.series(function (done) {
    dutil.logMessage(task, "Copying images Sass");
    done();
  }, gulp.parallel("copy-doc-images", "copy-uswds-images"))
);
