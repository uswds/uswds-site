'use-strict';

document.addEventListener('DOMContentLoaded', function (){
  
  var internalNav = document.getElementById('internal-nav');

  if (typeof(internalNav) != 'undefined' && internalNav != null) {

    var internalNavLinks = internalNav.querySelectorAll('.next-internal-nav__link');
    var CURRENT_CLASS = 'current';
    var internalNavHeight = internalNav.clientHeight;

    window.addEventListener('scroll', function handleScroll (e) {
      var scrollPos = window.pageYOffset;

      for (var i = 0; i < internalNavLinks.length; i += 1) {
        var currentLink = internalNavLinks[ i ];
        var referenceElement = document.getElementById(currentLink.hash.replace('#', ''));

        if (referenceElement && referenceElement.offsetTop <= (scrollPos + internalNavHeight)) {
          internalNavLinks.forEach(function (el){
            el.classList.remove(CURRENT_CLASS);
          });
          currentLink.classList.add(CURRENT_CLASS);
        }
        else {
          currentLink.classList.remove(CURRENT_CLASS);
        }
      }
    });

    // Click events
    for (var i = 0; i < internalNavLinks.length; i += 1) {
      internalNavLinks[ i ].addEventListener('click', function ( ) {
        var currentLink = this;
        this.classList.remove(CURRENT_CLASS);
        currentLink.classList.add(CURRENT_CLASS);
      });
    }
  }
});