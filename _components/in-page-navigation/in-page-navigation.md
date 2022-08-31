---
category: Components
component:
  status: ready
  package: usa-in-page-navigation
  references: true
  dependencies:
  image: /assets/img/components/in-page-navigation/in-page-navigation.png
  demo: in-page-navigation
lead: "Hierarchical, in-page navigation to place at the side of a page."
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
- text: Using the in-page navigation component
  href: '#using-the-in-page-navigation-component'
- text: Package
  href: '#in-page-navigation-package'
- text: References
  href: '#in-page-navigation-references'
tags:
  - in-page
  - nav
title: In-page navigation
type: component
---
In-page navigation (or table of contents) provides a way to rapidly traverse a page by providing a clickable outline for the user. This component is best used on lengthy pages that benefit from the ability to quickly navigate to specific sections of the page rather than scrolling. The component appears by default to the right of the content in a sticky container that remains fixed when the user scrolls. When a user clicks an item on the in-page navigation, the page smoothly scrolls to the target section.

In-page navigation utilizes the Intersection Observer API which provides a performant, future-proof way of observing elements on the page, and switching the in-page navigation items that coincide with what is visible in the viewport on and off. In other words, adding and removing the .usa-current class to the navigation items current in focus.