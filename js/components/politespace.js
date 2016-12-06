var jquery = require('jquery');

window.jQuery = jquery;

// README: This is necessary because politespace doesn't properly
// export anything in its package.json.
// TODO: Let's open a PR related to this so we can fix it there.
var Politespace = require('politespace/src/politespace').Politespace;

var componentName = 'politespace';
var enhancedAttr = 'data-enhanced';
var initSelector = '[data-' + componentName + ']:not([' + enhancedAttr + '])';

$.fn[ componentName ] = function (){
  return this.each(function (){
    var polite = new Politespace(this);
    if(polite.type === 'number') {
      polite.createProxy();
    }

    $(this)
      .bind('input keydown', function () {
        polite.updateProxy();
      })
      .bind('blur', function () {
        $(this).closest('.politespace-proxy').addClass('active');
        polite.update();
        polite.updateProxy();
      })
      .bind('focus', function () {
        $(this).closest('.politespace-proxy').removeClass('active');
        polite.reset();
      })
      .data(componentName, polite);

    polite.update();
  });
};

// auto-init on enhance (which is called on domready)
$(function () {
  $('[data-' + componentName + ']').politespace();
});
