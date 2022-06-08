// Bring in individual Gulp configurations
//

require( './config/gulp/fonts' );
require( './config/gulp/images' );
require( './config/gulp/javascript' );
require( './config/gulp/sass' );
require( './config/gulp/build' );

const gulp  = require( 'gulp' );
const dutil = require( './config/gulp/doc-util' );

const uswds = require("@uswds/compile");

uswds.settings.version = 3;
// uswds.settings.sprite.projectIconsOnly = true;
// uswds.paths.src.projectIcons = "./img/test-usa-icons";

uswds.paths.dist.theme = "./css";
uswds.paths.dist.img = "./assets/img";
uswds.paths.dist.fonts = "./assets/fonts";
uswds.paths.dist.js = "./assets/js/vendor";
uswds.paths.dist.css = "./assets/css";

/**
 * USWDS Compile tasks
 */
exports.init = uswds.init;
exports.watch = uswds.watch;

exports.copyAssets = uswds.copyAssets;

exports.compile = uswds.compile;
exports.compileSass = uswds.compileSass;
exports.compileIcons = uswds.compileIcons;
