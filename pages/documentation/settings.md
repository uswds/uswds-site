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

## Introducing USWDS settings
USWDS is built using a suite of customizable settings that allow you to configure the design system to fit your project's needs. These settings are Sass variables that begin with the `$theme-` prefix and are typically defined with [USWDS design tokens]({{ site.baseurl }}/design-tokens). The full list of USWDS settings and their default values can be found in the [tables below](#general-settings).

## Configuring USWDS settings
All USWDS settings are defined in the `uswds-core` package and can be configured using Sass' [`@use..with()`](https://sass-lang.com/documentation/at-rules/use#configuration) rule. To create a custom configuration of USWDS, add the variables you wish to update with their new values inside the parentheses of this statement.

An example configuration is shown below:

```scss
@use "uswds-core" with (
  $theme-show-compile-warnings: false,
  $theme-show-notifications: false,
  $theme-image-path: "../uswds/img",
  $theme-show-compile-warnings: true,
  $theme-banner-background-color: "ink",
  $theme-banner-link-color: "primary-light",
  $theme-input-tile-border-color: "base",
);
```
Note that the settings variables in this module inform both general and component customizations.

### What to include in your configuration
Include only USWDS settings that you wish to modify in this configuration. These items should be comma-separated and given values of the appropriate type.

Please note that this configuration accepts only current USWDS settings variables &mdash; adding anything else here will result in an error.

### Where to include your configuration
Full instructions for setting up Sass files for USWDS can be found in [Phase 2 of the Getting Started for Developers]({{ site.baseurl }}/documentation/getting-started/developers/phase-two-compile/#step-1-set-up-your-projects-sass-entry-point) guide.

The important thing to note is that your settings configuration must be loaded **before including the main USWDS Sass**. Some example setups are provided below:

#### Example 1
If you configure settings in a separate file, your setup would look something like this:

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

#### Example 2

If you prefer to configure your settings directly inside your Sass entry point, it would look something like this:

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
