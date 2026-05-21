---
title: Sanitized Combo Box content
excerpt: "As of USWDS 2.12.1, the design system automatically sanitizes content passed into the Combo Box."
category: About
permalink: /security_updates/santized-combo-box-content/
tags:
- security
---

As of USWDS 2.12.1, the design system automatically sanitizes content passed into the Combo Box.

## When we made this change
Fixed in [USWDS 2.12.1](https://github.com/uswds/uswds/releases/tag/v2.12.1).

## Who should update
You should update if you use Combo Box in versions 2.7.0 to 2.12.0.

## Updating to USWDS 2.12.1

The following are potentially breaking changes updating to 2.12.1.

{:.usa-content-list}
- **2.9.0:** We updated the formatting of `usa-legend` to make it smaller. Use the `usa-legend--large` class modifier to restore the previous formatting.

- **2.10.1:** We introduced new Link color settings.

    {:.usa-table}
    New or ⚠️ changed setting             | Default                                                                                                                           | Description
    --------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------
    $theme-body-background-color          | `"white"`                                                                                                                          | Background for the page body
    $theme-text-color                     | `"ink"`                                                                                                                            | Page text color
    $theme-text-reverse-color             | `"white"`                                                                                                                          | Text color with dark backgrounds
    $theme-alert-text-color               | `default` (uses whatever is set for `$theme-text-color`)                                                                           | Text color for light-background alerts
    $theme-alert-text-reverse-color       | `default` (uses whatever is set for `$theme-text-reverse-color`)                                                                   | Text color for dark-background alerts
    $theme-alert-link-color               | `default` (uses whatever is set for `$theme-link-color`)                                                                           | Link color for light-background alerts
    $theme-alert-link-reverse-color       | `default` (uses whatever is set for `$theme-link-reverse-color`)                                                                   | Link color for dark-background alerts
    ⚠️ $theme-breadcrumb-background-color | `default` (uses whatever is set for `$theme-body-background-color`)                                                               | Background color for the breadcrumb
    $theme-identifier-primary-link-color  | `default` (system picks between `$theme-alert-link-color` and `$theme-alert-link-reverse-color` depending on the background color) | Color of the links in the identifier masthead
