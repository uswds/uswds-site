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

A good way to get started with USWDS settings is to copy the `dist/theme` directory out of the `uswds` package and into the same directory where you keep your project Sass files. Then use the `@forward` directive in Sass to include these settings **before including the main USWDS Sass**. You can use the `styles.scss` example file in the `dist/theme` directory as a starting point for your own Sass entry point:

```scss
@forward 'uswds-theme';
@forward 'uswds';
@forward 'uswds-theme-custom-styles';
```

Add only the settings you wish to modify before importing `uswds`, either in a separate file (`_uswds-theme.scss`), or directly in your Sass entry point. Either way you do it, you'll use the format `@use "uswds-core" with ()` including a list of your changed USWDS settings variables inside the parentheses.

If you use the `_uswds-theme.scss` file, it would look something like this:

```scss
/* _uswds-theme.scss */
@use "uswds-core" with (
  $theme-show-compile-warnings: false,
  $theme-show-notifications: false,
);
```

```scss
/* styles.scss */
@forward 'uswds-theme';
@forward 'uswds';
@forward 'uswds-theme-custom-styles';
```

If you include settings right in your Sass entry point, it would look something like this:

```scss
/* styles.scss */
@use "uswds-core" with (
  $theme-show-compile-warnings: false,
  $theme-show-notifications: false,
);

@forward 'uswds';
@forward 'uswds-theme-custom-styles';
```

In general, when including settings and custom code, you just need to follow this order of operations:
1. **Include settings:** Tell the design system how to build.
1. **Include `uswds`:** Build the design system.
1. **Include custom styles:** Build on top of the design system.

{: .site-note }
**Note:** the `@use "uswds-core" with ()` configuration accepts only current USWDS settings variables. If you receive the error `This module was already loaded, so it can't be configured using "with"`, confirm that all your declared variables exist in the list below and try compiling again.

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

<h2 id="utility-modules">Utility modules</h2>
{% include utilities-module-table.html %}
