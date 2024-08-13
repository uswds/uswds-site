const gulp = require("gulp");
const uswds = require("@uswds/compile");

// Bring in individual Gulp configurations
//
const build = require("./config/gulp/build");
const images = require("./config/gulp/images");
const js = require("./config/gulp/javascript");
const sass = require("./config/gulp/sass");

/**
 * USWDS Compile Settings
 */
uswds.settings.version = 3;

uswds.paths.src.projectIcons = "./img/site-sprite";

uswds.paths.dist.theme = "./css";
uswds.paths.dist.img = "./assets/img";
uswds.paths.dist.fonts = "./assets/fonts";
uswds.paths.dist.js = "./assets/js/vendor";
uswds.paths.dist.css = "./assets/css";

/**
 * USWDS Compile tasks
 */
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.compileIcons = uswds.compileIcons;
exports.copyFonts = uswds.copyFonts;
exports.copyAssets = uswds.copyAssets;
exports.compileSass = uswds.compileSass;
exports.watchSass = uswds.watch;

/**
 * Custom tasks
 */
exports.cleanAssets = build.cleanAssets;
exports.copyDocImages = images.default;

exports.js = gulp.series(js.lint, js.build);
exports.lintJS = js.lint;
exports.watchJS = js.watch;

exports.sassProd = sass.prodStyles;
exports.sassProdNext = sass.prodNextStyles;
exports.sassProdStyles = gulp.parallel(this.sassProd, this.sassProdNext);
exports.sass = gulp.series(sass.lint, uswds.compileSass, this.sassProdStyles);

exports.lintSass = sass.lint;

exports.buildUSWDSComponents = build.buildUSWDSComponents;

exports.build = gulp.series(
  build.cleanAssets,
  build.buildUSWDSComponents,
  uswds.copyAssets,
  uswds.compile,
  this.js,
  this.copyDocImages,
  this.sassProdStyles
);

exports.watch = gulp.parallel(this.watchSass, this.watchJS);
