---
category: Components
component:
  status: ready
  package: usa-in-page-navigation
  references: true
  dependencies:
  image: /assets/img/components/in-page-navigation/in-page-navigation.jpg
  imageUtilities: width-tablet maxw-full
  alt: "An in-page navigation component in the three states: default, hover, and focus. In the active state, the nav link is underlined. In the focus state, the nav link is underlined and has a focus border surrounding it."
  demo: components-in-page-navigation--default
lead: "The in-page navigation allows navigation to specific sections on a lengthy content page"
permalink: /components/in-page-navigation/
redirect_from:
- /in-page-nav/
- /components/in-page-nav/
subnav:
- text: Preview
  href: '#in-page-navigation-preview'
- text: Code
  href: '#in-page-navigation-code'
- text: Guidance
  href: '#in-page-navigation-guidance'
- text: When to use
  href: '#when-to-use-the-in-page-navigation'
- text: When to consider something else
  href: '#when-to-consider-something-else-in-page-navigation'
- text: Usability guidance
  href: '#usability-guidance-in-page-navigation'
- text: Accessibility
  href: '#accessibility-in-page-navigation'
- text: Package
  href: '#in-page-navigation-package'
- text: References
  href: '#references'
- text: Latest updates
  href: '#changelog'
tags:
  - in-page
  - nav
implementation:
  initProps:
    - property: "`data-heading-elements`"
      description: The list of header levels that should be included in the link list.
      default: '`h2 h3`'
    - property: "`data-main-content-selector`"
      description: The element the component pulls headers from.
      default: '`<main>`'
    - property: "`data-title-heading-level`"
      description: The heading level of the navigation title header.
      default: '`h4`'
    - property: "`data-title-text`"
      description: The text of the navigation title header.
      default: '"On this page"'
    - property: "`data-scroll-offset`"
      description: Number of pixels scroll should offset from the top of the parent element.
      default: "0"
    - property: '`data-root-margin`'
      description: Observable margin around the observed root used for calculating the current active section. Use values similar to CSS margin.
      default: '`0px 0px 0px 0px`'
    - property: "`data-threshold`"
      description: Percentage of the scrolling section that must be in the observed area before the current section is triggered. Use a value between 0 and 1.
      default: "1"
title: In-page navigation
type: component
changelog:
  key: component-in-page-navigation
---
In-page navigation helps users understand the contents of a page and navigate to the section they need to read. This component is most suited for lengthy pages. The component is displayed alongside the main content in a sticky container that remains fixed when the user scrolls. When a user clicks an item on the in-page navigation, the page smoothly scrolls to the target section.

The USWDS in-page navigation component generates its content automatically, based on the content of the `main` element of the page. It utilizes the Intersection Observer API which provides a performant, future-proof way of assuring that the navigation highlights the current section visible in the viewport.
