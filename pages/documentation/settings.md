---
permalink: /documentation/settings/
layout: styleguide
title: Settings
category: How to use USWDS
lead: USWDS settings variables tell the design system how to build.
subnav:
- text: Configuring custom USWDS settings
  href: '#configuring-custom-uswds-settings'
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
- text: Latest updates
  href: '#changelog'
changelog:
  key: docs-settings
in_page_nav: false
---

## Introducing USWDS settings
USWDS is built using a suite of customizable settings that allows you to configure the Design System to fit your project's needs. These settings are Sass variables that begin with the `$theme-` prefix and are typically defined with [USWDS design tokens]({{ site.baseurl }}/design-tokens). You can find the full list of USWDS settings and their default values in the [USWDS settings tables](#general-settings).

## Configuring custom USWDS settings
With the introduction of [Sass modules](https://sass-lang.com/blog/the-module-system-is-launched) in USWDS 3, you can now create a custom configuration of USWDS by loading a single [`@use...with()`](https://sass-lang.com/documentation/at-rules/use#configuration) rule into your [Sass entry point]({{ site.baseurl }}/documentation/getting-started/developers/phase-two-compile/#about-sass-entry-points).

All USWDS settings are defined in the `uswds-core` module, which means the USWDS settings configuration rule is `@use "uswds-core" with ()`.

To create your custom configuration, add the USWDS settings variables that you wish to modify inside the parentheses of this statement, as shown in this example:

```scss
  @use "uswds-core" with (
    $theme-image-path: "../uswds/img",
    $theme-show-compile-warnings: true,
    $theme-show-notifications: false,
    $theme-banner-background-color: "ink",
    $theme-banner-link-color: "primary-light",
    $theme-banner-max-width: "widescreen",
    $theme-checkbox-border-radius: "md",
  )
```
Note that the settings variables in this module inform both general theme and component customizations.

### Configuring settings maps
Similar to single-value settings, when configuring Sass settings maps in USWDS, you will only need to include the map items you wish to customize. Any item that is not defined in your configuration will keep its default value.

For example, if you wanted to customize the `$background-color-settings` defaults to output focus styles and remove hover styles, you would configure the setting like this:

```scss
@use "uswds-core" with (
  $background-color-settings: (
    focus: true,
    hover: false,
  )
);
```

This will generate the same output as configuring the setting with default values for all other map items:

```scss
@use "uswds-core" with (
  $background-color-settings: (
    output: true, // default value
    responsive: false, // default value
    active: false, // default value
    focus: true,
    hover: false,
    visited: false, // default value
  )
);
```

### What to include in your configuration
Include only USWDS settings that you wish to modify in this configuration. These items should be comma-separated and given values of the appropriate type, as identified in the tables below.

Please note that this configuration accepts only current USWDS settings variables &mdash; adding anything else here will result in an error.

### Where to include your configuration
Add your settings configuration to your Sass entry point. You can choose to set up the settings configuration either directly in your entry point or in its own file.

Whatever path you choose, it is important to note that **your settings configuration must be included _above_ `@forward 'uswds'`**  in your Sass entry point. (To learn more about why this matters, read our guide for [setting up your Sass entry point]({{ site.baseurl }}/documentation/getting-started/developers/phase-two-compile/#about-sass-entry-points).)

We’ve created some example setups to give you an idea of how this works:


#### Configure USWDS settings in a separate file

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
#### Configure USWDS settings in your Sass entry point


```scss
/* styles.scss */

@use "uswds-core" with (
  $theme-show-compile-warnings: false,
  $theme-show-notifications: false,
);

@forward 'uswds';
@forward 'uswds-theme-custom-styles';
```

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
