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
  var hashLocation  = $(this).attr('href').split('#')[ 1 ];
  var scrollTopPos  = calculateAnchorPosition(hashLocation);

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
      var link    = $(e.target);
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

function ready(fn) {
  document.addEventListener('DOMContentLoaded', fn, false);
}

ready(() => {
  const motionQuery = window.matchMedia('(prefers-reduced-motion)');

  const TableOfContents = {
    container: document.querySelector('.in-page-navigation'),
    links: null,
    headings: null,
    intersectionOptions: {
      rootMargin: '0px',
      threshold: 1,
    },

    previousSection: null,
    observer: null,

    init() {
      this.handleObserver = this.handleObserver.bind(this);

      this.setUpObserver();
      this.findLinksAndHeadings();
      this.observeSections();

      this.links.forEach((link) => {
        link.addEventListener('click', this.handleLinkClick.bind(this));
      });
    },

    handleLinkClick(evt) {
      evt.preventDefault();
      let id = evt.target.getAttribute('href').replace('#', '');

      let section = this.headings.find((heading) => {
        return heading.getAttribute('id') === id;
      });

      section.setAttribute('tabindex', -1);
      section.focus();

      window.scroll({
        behavior: motionQuery.matches ? 'instant' : 'smooth',
        top: section.offsetTop + 140,
        block: 'start',
      });

      if (this.container.classList.contains('usa-current')) {
        this.container.classList.remove('usa-current');
      }
    },

    handleObserver(entries, observer) {
      entries.forEach((entry) => {
        let href = `#${entry.target.getAttribute('id')}`,
          link = this.links.find((l) => l.getAttribute('href') === href);

        if (entry.isIntersecting && entry.intersectionRatio >= 1) {
          link.classList.add('is-visible');
          this.previousSection = entry.target.getAttribute('id');
        } else {
          link.classList.remove('is-visible');
        }

        this.highlightFirstActive();
      });
    },

    highlightFirstActive() {
      let firstVisibleLink = this.container.querySelector('.is-visible');

      this.links.forEach((link) => {
        link.classList.remove('usa-current');
      });

      if (firstVisibleLink) {
        firstVisibleLink.classList.add('usa-current');
      }

      if (!firstVisibleLink && this.previousSection) {
        this.container
          .querySelector(`a[href="#${this.previousSection}"]`)
          .classList.add('usa-current');
      }
    },

    observeSections() {
      this.headings.forEach((heading) => {
        this.observer.observe(heading);
      });
    },

    setUpObserver() {
      this.observer = new IntersectionObserver(this.handleObserver, this.intersectionOptions);
    },

    findLinksAndHeadings() {
      this.links = [...this.container.querySelectorAll('a')];
      this.headings = this.links.map((link) => {
        let id = link.getAttribute('href');
        return document.querySelector(id);
      });
    },
  };

  TableOfContents.init();
});
