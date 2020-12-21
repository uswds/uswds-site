document.addEventListener('DOMContentLoaded', function (){

  var anchorLink = document.querySelectorAll('a[href^="#"]');

  anchorLink.forEach(function (elm) {
    elm.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
});
