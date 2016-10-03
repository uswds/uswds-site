var $ = require('jquery');
var calculateAnchorPosition = require('./calculate-anchor-position');

var $nav = $('.js-sticky-nav');
var $header = $('.site-header');
var bannerHeight = $header.outerHeight(true);
var STICKY_CLASS_NAME = 'is-scrolled';
var MAX_MOBILE_WIDTH = 850;

module.exports = function stickyNav (event) {
  if ($nav.length === 0 || $header.length === 0) {
    return;
  }

  bannerHeight = $header.outerHeight(true) || bannerHeight;
  var originalNavigationHeight = $nav.outerHeight(true);
  var scrollY = $(window).scrollTop();
  var scrollPositionY = scrollY + originalNavigationHeight;

  if (window.innerWidth > MAX_MOBILE_WIDTH
      && scrollPositionY > bannerHeight) {
    $nav.addClass(STICKY_CLASS_NAME);
    $header.addClass(STICKY_CLASS_NAME);
    $('.usa-banner').addClass(STICKY_CLASS_NAME);
    $('.site-header-navbar').addClass(STICKY_CLASS_NAME);
    $('.site-nav-secondary').addClass(STICKY_CLASS_NAME);
    $('.sidenav').addClass(STICKY_CLASS_NAME);
    $('.main-content').addClass(STICKY_CLASS_NAME);
    $('body').css('paddingTop', bannerHeight);
  } else {
    $nav.removeClass(STICKY_CLASS_NAME);
    $header.removeClass(STICKY_CLASS_NAME);
    $('.usa-banner').removeClass(STICKY_CLASS_NAME);
    $('.site-header-navbar').removeClass(STICKY_CLASS_NAME);
    $('.site-nav-secondary').removeClass(STICKY_CLASS_NAME);
    $('.sidenav').removeClass(STICKY_CLASS_NAME);
    $('.main-content').removeClass(STICKY_CLASS_NAME);
    $('body').css('paddingTop', 0);
  }

};
