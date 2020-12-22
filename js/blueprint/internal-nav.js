'use-strict';

document.addEventListener('DOMContentLoaded', function (){
  
  var internalNav = document.getElementById('internal-nav');
  var sectionBlock = document.getElementsByClassName('blueprint-section');

  if (typeof(internalNav) != 'undefined' && internalNav != null) {

    var internalNavLinks = internalNav.querySelectorAll('.blueprint-internal-nav__link');
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

    // We need click events to handle keyboard navigation
    for (var i = 0; i < internalNavLinks.length; i += 1) {
      // Set tabindex = -1 so we can focus


      // Now we focus on the section so the user can keyboard interact with that content
      internalNavLinks[ i ].addEventListener('click', function ( ) {
        var currentLink = this;
        var currentSection = document.getElementById(this.getAttribute('href').replace('#', ''));
        currentSection.setAttribute('tabindex', '-1');
        
        // Timeout prevents collisions with smooth scrolling.
        setTimeout(function (){
          currentSection.focus();
          internalNavLinks.forEach(function (el){
            el.classList.remove(CURRENT_CLASS);
          });
          currentLink.classList.add(CURRENT_CLASS);
        }, 750);
      });
    }
    
    // Removes tabindex on blur to prevent click to focus sections
    sectionBlock.addEventListener('blur', function () {
      this.removeAttribute('tabindex');
    });
  }
});