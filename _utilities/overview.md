---
permalink: /utilities/
layout: styleguide
title: Utilities
category: Utilities
lead: Utilities are simple HTML classes typically scoped to a single CSS property, like `border-style` or `background-color`. Utilities can be used additively to style an object from scratch or to override a style defined in component CSS.
type: docs
subnav:
- text: Latest updates
  href: '#changelog'
---

## Introducing utilities

Utilities are simple HTML classes typically scoped to a single CSS property, like `border-style` or `background-color`. Utilities can be used additively to style an object from scratch or to override a style defined in component CSS. Utilities allow designers and developers to build and test new designs and components without abstracting their work into traditional semantic names or altering production CSS.

They also make it possible to create element-specific overrides without writing high-specificity variants into component CSS.

## Utility naming

Most USWDS utilities are built to assign a single CSS property a single value. Our utilities are named `.[base]-[value]`, where `[base]` is often the name of the CSS property the utility targets and the parts of the utility name are separated by a hyphen. For example, `margin-top-2`. Our utility classes are designed to make sense at a glance to anyone familiar with standard CSS properties.

For a complete list of the utilities and their bases, see each utility's documentation page, or [the Modules table, below](#modules).

The utility values are drawn from your project theme-settings tokens but can be extended to include additional values drawn from our palette of common units (like px, em, ch, and percentages) as well as the broader USWDS system palette of colors, grid spacing, and font scale. (Each utility's **Advanced settings** section provides more information on customization.)

<div class="site-table-wrapper maxw-tablet-lg">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">USWDS utility</th>
        <th scope="col">Sass</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      <tr>
        <th scope="row" data-title="Utility">
          <span class="text-normal">.bg-primary-darker</span>
        </th>
        <td data-title="Sass">
          background-color: color('primary-darker')
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Utility">
          <span class="text-normal">.bg-red-50v</span>
        </th>
        <td data-title="Sass">
          background-color: color('red-50v')
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Utility">
          <span class="text-normal">.text-underline</span>
        </th>
        <td data-title="Sass">
          text-decoration: underline
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Utility">
          <span class="text-normal">.margin-x-auto</span>
        </th>
        <td data-title="Sass">
          <span>margin-left: auto;</span><br/>
          <span>margin-right: auto;</span><br/>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Utility">
          <span class="text-normal">.padding-bottom-1</span>
        </th>
        <td data-title="Sass">
          padding-bottom: units(1)
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Utilities package, modules, and settings
USWDS provides a useful default set of utilities that developers can extend and modify in their project's settings to suit their project's needs and their development preferences.

{% assign packages = site.data.packages %}
{% assign utilities = packages | find: "name", "uswds-utilities" %}
Utilities are included by default as part of the `uswds` bundle package that most projects use. ([Read more about packages here.]({{ site.baseurl }}{% link pages/ui-components/packages.md %}))

If you unbundle your project's packages, include utilities with the `uswds-utilities` package. This package includes all of the USWDS utilities available to the design system. Each utility is configured differently — some have responsive and state variants enabled. Each utility's default output is documented on its documentation page.

The entire package is {{ utilities.fullSize }} KB uncompressed.

Include the `uswds-utilities` package in your project's Sass entry point with a module forward:

  ```scss
@forward "uswds-utilities";
  ```

### Settings
You can further customize utility output with USWDS settings. Add settings from the table below to your `uswds-core` module initialization. For more information on configuring USWDS settings, visit the [settings page]( {{ site.baseurl }}/documentation/settings#configuring-settings-maps). Here's an example:

  {:.margin-bottom-4}
  ```scss
@use "uswds-core" with (
  $utilities-use-important: true,
  $output-these-utilities:(
    "background-color",
    "color",
    "display",
    "margin",
    "padding",
  ),
  $theme-utility-breakpoints: (
    "mobile-lg": false,
  ),
  $color-settings: (
    "hover": false,
  ),
  $color-palettes: (
    "palette-color-theme"
  ),
);
  ```

{% assign settings = site.data.settings.utilities.contents %}

{% include settings-table.html
  settings=settings
%}


### Modules
Each utility module referenced in [the settings section, above](#settings), can accept one of the utility module names outlined in the following table. The more utilities your project uses, the larger the utilities CSS will be.

The size of each module will change based on its module settings. For instance, if a module is set to output responsive classes and state variants, it will be much larger than if it includes only the base classes and no variants.

{% include utilities-module-table.html %}
