---
permalink: /documentation/settings/
layout: styleguide
title: Settings
category: How to use USWDS
lead: USWDS settings variables tell the design system how to build.
subnav:
- text: General
  href: '#general'
- text: Color
  href: '#color'
- text: Components
  href: '#components'
- text: Spacing
  href: '#spacing'
- text: Typography
  href: '#typography'
- text: Utilities
  href: '#utilities'
---

A good way to get started with custom settings is to copy the `dist/src/stylesheets/theme` directory out of the USWDS package and into your project files. Then use the `@import` directive in Sass to import these settings **before importing the main USWDS Sass** with `@import uswds`. You can use the `styles.scss` file in the `dist/src/stylesheets/theme` directory as a starting point:

```scss
// -------------------------------------
// Import individual theme settings

@import 'uswds-theme-general';
@import 'uswds-theme-typography';
@import 'uswds-theme-spacing';
@import 'uswds-theme-color';
@import 'uswds-theme-utilities';

// -------------------------------------
// Import individual USWDS modules...

// @import 'uswds-fonts';
// @import 'uswds-layout-grid';
// @import 'uswds-components';
// @import 'uswds-utilities';

// -------------------------------------
// ...or import all USWDS modules

@import 'uswds';

// -------------------------------------
// Import theme custom styles

@import 'uswds-theme-custom-styles';
```

You can also add only the settings you wish to modify before importing `uswds`, either in a separate file, or directly in your Sass entry point:

```scss
$theme-show-compile-warnings: false;
$theme-show-notifications: false;

@import 'uswds';
@import 'uswds-theme-custom-styles';
```

In general, when importing settings and custom code, you just need to follow this order of operations:
1. **Import settings:** Tell the design system how to build.
1. **Import `uswds`:** Build the design system.
1. **Import custom styles:** Build on top of the design system.

{% assign settings = site.data.variables %}

{%- for section in settings -%}
  <h2 id="{{ section.name | slugify }}">{{ section.name }}</h2>
  {% include settings-table.html
    settings=section.contents
  %}
{%- endfor -%}
