---
permalink: /components/icon/accessibility-tests/
layout: accessibility-test
component:
  name: icon
title: Icon accessibility tests
category: Components
lead: Any USWDS icon should pass these manual accessibility tests.
changelog:
  key: 'component-icon-accessibility'
component_status: pass
test_items:
# General items
  - summary: Color is not the only method used to convey icon information.
    summary_additional: |
      When you view an icon paired with text,
      the text, and never color alone, conveys the icon's meaning.
    test_status: conditional
    test_type: general
    version_tested: 3.7.1
    wcag_criterion: 1.4.1
  - summary: Icons meet color contrast requirements.
    summary_additional: |
      When you view the icon on a page
      and use ANDI or color contrast analyzer to look at the hex colors,
      contrast between the icon and background is at least 3:1.
    test_status: conditional
    test_type: general
    version_tested: 3.7.1
    wcag_criterion: 1.4.11
  - summary: Each icon has a consistent meaning across pages.
    summary_additional: |
      When you use a screen reader or view the page,
      the icon's meaning, and the way it is announced, is the same across all pages.
    test_status: conditional
    test_type: general
    version_tested:
    wcag_criterion: 3.2.4
# Zoom/screen magnification items
# Keyboard navigation items
  - summary: Focus indicators are clearly visible on interactive icons.
    summary_additional: |
      When you use a keyboard to tab into an interactive icon,
      you see a visible indicator around the icon.
    test_status: conditional
    test_type: keyboard
    version_tested:
    wcag_criterion: 2.4.7
# Screen reader items
  - summary: Icons provide a text alternative for screen readers when needed.
    summary_additional: |
      When you use a screen reader and navigate to a non-decorative icon,
      you hear an appropriate description of the icon.
      If the icon is purely decorative, you should not hear a description.
    test_status: conditional
    test_type: screen_reader
    version_tested:
    wcag_criterion: 1.1.1
---
