---
permalink: /components/link/accessibility-tests/
layout: accessibility-test
component:
  name: link
title: Link accessibility tests
category: Components
lead: Any USWDS link should pass these manual accessibility tests.
changelog:
  key: 'component-link-accessibility'
component_status: pass
test_items:
# General items
  - summary: Color is not the only method used to indicate links.
    summary_additional: |
      When you view the link and determine what your link's location is,
      you can tell where the link is without relying on color.
    test_status: pass
    test_type: general
    version_tested: 3.5.0
    wcag_criterion: 1.4.1
  - summary: Both the purpose and destination of the link are clearly indicated by the text.
    summary_additional: |
      When viewing the link,
      you can determine the link's purpose and where the link will take you.
    test_status: conditional
    test_type: general
    version_tested: 3.5.0
    wcag_criterion: 1.3.1
# Zoom/screen magnification items
# Keyboard navigation items
  - summary: The link is operable using the enter and spacebar keys.
    summary_additional: |
      When you use your tab key for navigation and press `enter` or `spacebar` for interaction,
      the link gets selected.
    test_status: pass
    test_type: keyboard
    version_tested: 3.5.0
    wcag_criterion: 2.1.1
  - summary: Focus indicator is clearly visible on links.
    summary_additional: |
      When using the tab key and navigating between links,
      a focus indicator appears around each link that gets selected.
    test_status: pass
    test_type: keyboard
    version_tested: 3.5.0
    wcag_criterion: 2.4.7
# Screen reader items
---
