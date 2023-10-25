---
title: Automatic sanitizing for all JavaScript components
excerpt: "As of USWDS 2.12.2, the design system automatically sanitizes content in all components we compose with JavaScript."
category: About
permalink: /security_updates/automatic-sanitizing-for-all-javascript-components/
tags:
- security
---

The design system now automatically sanitizes content in all components we compose with JavaScript. This means that components like Combo Box, Tooltip, File Input, and Date Picker will sanitize any content passed to them. This helps protect any design system implementation against malicious XSS attacks through these components.

## When we made this change
Fixed in [USWDS 2.12.2](https://github.com/uswds/uswds/releases/tag/v2.13.2).

## Who should update
Consider updating if you use any of the following components/versions:

- **Combo Box:** USWDS 2.7.0 - 2.12.0
- **Character Count:** USWDS 2.7.0 - 2.12.1
- **Date Picker Box:** USWDS 2.7.0 - 2.12.1
- **Tooltip:** USWDS 2.8.0 - 2.12.1
- **File Input:** USWDS 2.8.0 - 2.12.1
- **Sortable Table:** USWDS 2.11.0 - 2.12.1


## Updating to USWDS 2.12.2

The following are potentially breaking changes updating to 2.12.2.

{:.usa-content-list}
- **2.8.0:** The banner code requires Autoprefixer to work properly. See [https://designsystem.digital.gov/documentation/developers/#sass-compilation-requirements](https://designsystem.digital.gov/documentation/developers/#sass-compilation-requirements)

- **2.8.0:** We introduced new Link and Banner settings.

    {:.usa-table}
    Setting | Accepts | Default | Usage
    ------- | ------- | ------- | ---------
    $theme-link-reverse-color | color token | `"base-lighter"` | Default link color for reverse (dark) backgrounds
    $theme-link-reverse-hover-color | color token | `"base-lightest"`| Default link hover color for reverse (dark) backgrounds
    $theme-link-reverse-active-color | color token | `"white"`| Default link hover color for reverse (dark) backgrounds
    $theme-banner-background-color | color token | `"base-lightest"` | Banner background color
    $theme-banner-link-color | color token or `default` | `default` | Banner link color. `default` uses the value in `$theme-link-color. The system will calculate hover, active, and visited states.



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
