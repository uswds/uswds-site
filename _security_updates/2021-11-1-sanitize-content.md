---
title: Automatic sanitizing
excerpt: "As of USWDS 2.12.2, the design system automatically sanitizes content in elements we compose with JavaScript."
category: About
tags:
- security
---

The design system now automatically sanitizes content in elements we compose with JavaScript. This means that components like Combo Box, Tooltip, File Input, and Date Picker will sanitize any content passed to them. This helps protect any design system implementation against malicious XSS attacks through these components.

## When we made this change
Fixed in [USWDS 2.12.2]({{ site.baseurl }}/about/releases/#version-uswds-2122).

## Who should update
Consider updating if you use any of the following components/versions:

- **Combo Box:** USWDS 2.7.0 - 2.12.1
- **Character Count:** USWDS 2.7.0 - 2.12.1
- **Date Picker Box:** USWDS 2.7.0 - 2.12.1
- **Tooltip:** USWDS 2.8.0 - 2.12.1
- **File Input:** USWDS 2.8.0 - 2.12.1
- **Sortable Table:** USWDS 2.11.0 - 2.12.1


## Updating to USWDS 2.12.2

The following are potentially breaking changes updating to 2.12.2.

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
