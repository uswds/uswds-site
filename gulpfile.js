// Bring in individual Gulp configurations
//

require( './config/gulp/flags' );
require( './config/gulp/fonts' );
require( './config/gulp/images' );
require( './config/gulp/javascript' );
require( './config/gulp/sass' );
require( './config/gulp/build' );

var gulp  = require( 'gulp' );
var dutil = require( './config/gulp/doc-util' );
