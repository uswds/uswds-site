---
category: Components
component:
  status: ready
  package: usa-in-page-navigation
  references: true
  dependencies:
  image: /assets/img/components/in-page-navigation/in-page-navigation.png
  demo: in-page-navigation
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
tags:
  - in-page
  - nav
title: In-page navigation
type: component
---
In-page navigation helps users understand the contents of a page and navigate to the section they need to read. This component is most suited for lengthy pages. The component is displayed to the right of the main content, in a sticky container that remains fixed when the user scrolls. When a user clicks an item on the in-page navigation, the page smoothly scrolls to the target section.

The USWDS in-page navigation component generates its content automatically, based on the content of the `main` element of the page. It utilizes the Intersection Observer API which provides a performant, future-proof way of assuring that the navigation highlights the current section visible in the viewport.