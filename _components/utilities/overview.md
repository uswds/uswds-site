---
permalink: /utilities/
layout: styleguide
title: Utilities
category: Utilities
lead: Utilities are simple HTML classes typically scoped to a single CSS property like `border-style` or `background-color`. Utilities can be used additively to style an object from scratch or to override a style defined in component CSS.
---

## Introducing utilities

Utilities allow designers and developers to build and test new designs and components without the necessity of abstracting their work into traditional semantic names or altering production CSS.

They also make it possible to make element-specific overrides without writing high specificity variants into component CSS.

USWDS provides useful default set of utilities that developers can extended and modify in their project's `_project-utilities-settings.scss` file (see Utility settings) to suit your project's needs and their development preferences.

## Utility naming

Most USWDS utilities are built to assign a single CSS property a single value. Our utilities are named `.[base]-[value]` where `[base]` is almost always the name of the CSS property the utility targets, with the parts separated by a hyphen. Our utility classes are designed to make sense at a glance to anyone familiar with standard CSS selectors.

The utility values are drawn from your project theme's settings tokens, but can be extended to include additional values drawn from our palette of common units (like px, em, ch, and percentages) as well as the broader USWDS system palette of colors, grid spacing, and font scale. (See Utility settings for more on customization.)

### Examples

USWDS utility | CSS
--- | ---
`.background-color-primary-darker` | `{ background-color: $color-primary-darker; }`
`.background-color-red-50v` | `{ background-color: $color-red-50v }`
`.text-decoration-underline` | `{ text-decoration: underline; }`
`.margin-x-auto` | `{ margin-left: auto; margin-right: auto; }`
`.padding-bottom-1` | `{ padding-bottom: 8px }`
{: .usa-table-borderless}
