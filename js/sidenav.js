"use strict";

const calculateAnchorPosition = require("./calculate-anchor-position");

// Track which links were activated via Enter keypress (for focus management)
const keypressedLinks = new WeakSet();

// Determine scroll behavior based on user's motion preference
function getScrollBehavior() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

// Handle keydown to track Enter key usage
function handleKeydown(e) {
  const link = e.target.closest("a");
  if (!link) return;

  const ENTER = 13;
  if (e.which === ENTER || e.keyCode === ENTER) {
    keypressedLinks.add(link);
  }
}

// Handle click on sidenav links
function handleClick(e) {
  const link = e.target.closest("a");
  if (!link) return;

  // long url splitting
  const hashLocation = link.getAttribute("href").split("#")[ 1 ];
  const scrollTopPos = calculateAnchorPosition(hashLocation);

  //if anchor doesn't exist on the page, or calc fails
  //then exit gracefully
  if (scrollTopPos === 0) {
    return true;
  }

  e.preventDefault();

  const newHash = "#" + hashLocation;

  // using pushState is easiest way to prevent double jumps
  if (history && history.pushState && window.location.hash !== newHash) {
    history.pushState(null, null, newHash);
  } else if (window.location.hash !== newHash) {
    window.location.hash = newHash;
  }

  // Perform the scroll
  window.scrollTo({
    top: scrollTopPos,
    behavior: getScrollBehavior(),
  });

  // if keyboard was used, update keyboard focus to section
  if (keypressedLinks.has(link)) {
    keypressedLinks.delete(link);
    const section = document.getElementById(hashLocation);
    if (section) {
      section.setAttribute("tabindex", "-1");
      section.focus({ preventScroll: true });
    }
  }
}

// Initialize event listeners on all sidenav elements
const sidenavs = document.querySelectorAll(".sidenav");
sidenavs.forEach(function (sidenav) {
  sidenav.addEventListener("keydown", handleKeydown);
  sidenav.addEventListener("click", handleClick);
});
