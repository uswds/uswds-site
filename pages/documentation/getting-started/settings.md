---
permalink: /documentation/settings/
layout: styleguide
title: Settings
category: How to use USWDS
lead: USWDS settings variables tell the design system how to build.
subnav:
- text: General settings
  href: '#general-settings'
- text: Color settings
  href: '#color-settings'
- text: Component settings
  href: '#component-settings'
- text: Spacing settings
  href: '#spacing-settings'
- text: Typography settings
  href: '#typography-settings'
- text: Utilities settings
  href: '#utilities-settings'
---

A good way to get started with USWDS settings is to copy the `dist/scss/theme` directory out of the `uswds` package and into the same directory where you keep your project Sass files. Then use the `@import` directive in Sass to import these settings **before importing the main USWDS Sass**. You can use the `styles.scss` example file in the `dist/scss/theme` directory as a starting point for your own Sass entry point:

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

{% assign settings = site.data.settings | sort %}

{%- for section_hash in settings -%}
  {%- assign section = section_hash[1] -%}
  {%- if section.name -%}
    <h2 id="{{ section.name | slugify }}">{{ section.name }}</h2>
    {% include settings-table.html
      settings=section.contents
    %}
  {%- else -%}
    <h2 id="component-settings">Component settings</h2>
    {%- assign sorted_components = section | sort -%}
    {%- for component_hash in sorted_components -%}
    {%- assign component = component_hash[1] -%}
      <h3 id="{{ component.name | slugify }}" class="border-bottom-2px padding-bottom-05 text-normal">{{ component.name }}</h3>
      {% include settings-table.html
        settings=component.contents
      %}
    {%- endfor -%}
  {%- endif -%}
{%- endfor -%}
