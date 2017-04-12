// Bring in individual Gulp configurations
//
require( './config/gulp/build' );
require( './config/gulp/flags' );
require( './config/gulp/fonts' );
require( './config/gulp/images' );
require( './config/gulp/javascript' );
require( './config/gulp/sass' );

var gulp  = require( 'gulp' );
var dutil = require( './config/gulp/doc-util' );

gulp.task( 'default', function ( done ) {

  dutil.logIntroduction();

  dutil.logHelp(
    'gulp',
    'This task will output the currently supported automation tasks. ( e.g. This help message. )'
  );

  dutil.logHelp(
    'gulp build',
    'This task is an alias for running `gulp clean-assets javascript images sass fonts` and is the recommended task to build all assets.'
  );

  dutil.logCommand(
    'gulp sass',
    'This task will compile all the Sass files into the assets directory.'
  );

  dutil.logCommand(
    'gulp javascript',
    'This task will compile all the JavaScript files into the assets directory.'
  );

  dutil.logCommand(
    'gulp images',
    'This task will copy all the image files into the assets directory.'
  );

  dutil.logCommand(
    'gulp fonts',
    'This task will copy all the font files into the assets directory.'
  );

  dutil.logCommand(
    'gulp html',
    'This task generates the code snippets based off of uswds package html files.'
  );

  done();

} );
