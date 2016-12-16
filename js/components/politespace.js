'use strict';
var $ = require('jquery');

// for Politespace
window.jQuery = $;

window.Politespace = require('politespace/src/politespace').Politespace;
require('politespace/src/politespace-init');

/**
 * XXX Politespace waits for an "enhance" event to fire to do its
 * initialization. We do it for Politespace.
 */
$(function autoEnhance () {
  $(document).trigger('enhance');
});
