---
permalink: /documentation/settings/
layout: styleguide
title: Settings
category: How to use USWDS
lead: Theme settings variables control the appearance of USWDS components and the values of USWDS theme tokens.
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

Copy the `dist/src/stylesheets/theme` directory out of the USWDS package and use its contents to control the appearance of USWDS components and the values of USWDS theme tokens.

Use the `@import` directive in Sass to import these settings files before importing the main USWDS Sass with `@import uswds`. You can use the `styles.scss` file in the directory as a starting place:

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

{% assign settings = site.data.variables %}

{%- for section in settings -%}
  <h2 id="{{ section.name | slugify }}">{{ section.name }}</h2>
  {% include settings-table.html
    settings=section.contents
  %}
{%- endfor -%}
