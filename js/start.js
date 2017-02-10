'use strict';

require('./vendor/politespace');
require('./vendor/stickyfill.min.js');
require('./scroll-to-top-for-hash');
require('./search');
require('./sidenav');


// Initialize sticky fill
var stickyElements = document.getElementsByClassName('sticky');

for (var i = stickyElements.length - 1; i >= 0; i--) {
  Stickyfill.add(stickyElements[ i ]);
}