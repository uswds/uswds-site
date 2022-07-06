'use strict';

var $ = require('jquery');
var calculateAnchorPosition = require('./calculate-anchor-position');

/* Firefox needs html, others need body */
var root = $('body, html');

// capture that the enter key was used to "click"
$('.sidenav').on('keydown', 'a', function (e) {
  var ENTER = 13;
  if (e.which === ENTER) {
    $(this).data('keypress', true);
  }
});

$('.sidenav').on('click', 'a', function (e) {
  // long url splitting
  var hashLocation = $(this).attr('href').split('#')[1];
  var scrollTopPos = calculateAnchorPosition(hashLocation);

  //if anchor doesn't exist on the page, or calc fails
  //then exit gracefully
  if (scrollTopPos === 0) {
    return true;
  }

  e.preventDefault();

  root.animate({
    scrollTop: scrollTopPos,
  }, {
    duration: 200,
    start: function () {
      var newHash = '#' + hashLocation;

      // using pushState is easiest way to prevent double jumps
      if (history && history.pushState && window.location.hash !== newHash) {
        history.pushState(null, null, newHash);
      } else if (window.location.hash !== newHash) {
        window.location.hash = newHash;
      }
    },
    done: function () {
      // if keyboard was used, update keyboard focus to section
      var link = $(e.target);
      var section = $('#' + hashLocation);

      if (link.data('keypress') === true) {
        link.removeData('keypress');
        section.attr('tabindex', '-1');
        section.focus();
      }
    },
  });
});

// In-page navigation

document.addEventListener('DOMContentLoaded', () => {
  const headings = document.querySelectorAll('#main-content h2');
  const headings3 = document.querySelectorAll('#main-content h3');
  if (headings && headings.length) {
    let tableOfContentInner = '';
    headings.forEach((heading, i) => {
      // generate an 'li' element that includes a link to the appropriate section
      tableOfContentInner += `<li class="usa-in-page-navigation__item"><a href="#section_${i}">${heading.textContent}</a></li>`;
      const originalHeadingContent = heading.innerHTML;
      const anchor = `<a class="offset-anchor" id="section_${i}"></a>`;
      // add the anchor to the <h3> tag
      heading.innerHTML = anchor + originalHeadingContent;





      /* if (headings3 && headings3.length) {
        let tableOfContentInner3 = '';
        headings3.forEach((heading3, i) => {
          tableOfContentInner3 += `<li class="usa-in-page-navigation__item"><a href="#section_${i}">${heading3.textContent}</a></li>`;
          const originalHeadingContent3 = heading3.innerHTML;
          const anchor3 = `<a class="offset-anchor" id="section_${i}"></a>`;
          // add the anchor to the <h3> tag
          heading3.innerHTML = anchor3 + originalHeadingContent3;
        });

        const tableOfContent3 = `<ul id="subnav" class="usa-in-page-navigation__sublist">${tableOfContentInner3}</ul>`;
        // add the generated table of content to the dive
        
        
        document.querySelector('#in-page-navigation').innerHTML += tableOfContent3;
      } */









    });

    const tableOfContent = `<ul class="usa-in-page-navigation usa-sidenav">${tableOfContentInner}</ul>`;
    // add the generated table of content to the dive
    document.querySelector('#in-page-navigation').innerHTML += tableOfContent;

    // automatically go to the correct section on load
    if (location.hash) {
      const target = location.hash;
      const offsetY = document.querySelector(target).offsetTop;
      window.scrollTo(0, offsetY);
    }
  }
});