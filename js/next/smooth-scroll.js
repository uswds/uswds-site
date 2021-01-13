document.addEventListener('DOMContentLoaded', function (){

  var anchorLink = document.querySelectorAll('a[href^="#"]');

  anchorLink.forEach(function (elm) {
    elm.addEventListener('click', function (e) {
      var anchorSection = document.getElementById(this.getAttribute('href').replace('#', ''));

      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });

      anchorSection.setAttribute('tabindex', '-1');

      // Timeout prevents collisions with smooth scrolling.
      setTimeout(function (){
        anchorSection.focus();
      }, 750);
      
      anchorSection.addEventListener('blur', function () {
        this.removeAttribute('tabindex');
      });
    });
  });
});
