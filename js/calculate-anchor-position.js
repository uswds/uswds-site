/* Calculates what scrollTop should be in order to
 * show an anchor properly under the header
 * and lined up with the nav like the H1
 */
const calculateAnchorPosition = function (hash) {
  const anchor = document.getElementById(hash);
  let topOffset = 0;
  if (!anchor) {
    return topOffset;
  }

  const sidenav = document.querySelector(".sidenav");
  const navPadding = sidenav ? parseInt(getComputedStyle(sidenav).paddingTop, 10) : 0;
  const anchorPadding = parseInt(getComputedStyle(anchor).paddingTop, 10);

  //start with the height of the sticky nav
  const stickyNav = document.querySelector(".site-nav.sticky");
  topOffset = stickyNav ? stickyNav.offsetHeight : 0;

  //subtract the diffence in padding between nav top and anchor
  topOffset = topOffset - (anchorPadding - navPadding);

  //anchor should now align with first item inside nav
  return anchor.getBoundingClientRect().top + window.scrollY - topOffset;
};

module.exports = calculateAnchorPosition;
