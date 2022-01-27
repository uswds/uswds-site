---
permalink: /utilities/
layout: styleguide
title: Utilities
category: Utilities
lead: Utilities are simple HTML classes typically scoped to a single CSS property, like `border-style` or `background-color`. Utilities can be used additively to style an object from scratch or to override a style defined in component CSS.
type: docs
---

## Introducing utilities

Utilities allow designers and developers to build and test new designs and components without abstracting their work into traditional semantic names or altering production CSS.

They also make it possible to create element-specific overrides without writing high-specificity variants into component CSS.

USWDS provides a useful default set of utilities that developers can extend and modify in their project's `_uswds-theme-utilities.scss` file (see Utility settings) to suit their projects' needs and development preferences.

## Utility naming

Most USWDS utilities are built to assign a single CSS property a single value. Our utilities are named `.[base]-[value]`, where `[base]` is almost always the name of the CSS property the utility targets and the parts of the utility name are separated by a hyphen. Our utility classes are designed to make sense at a glance to anyone familiar with standard CSS properties.

The utility values are drawn from your project theme-settings tokens but can be extended to include additional values drawn from our palette of common units (like px, em, ch, and percentages) as well as the broader USWDS system palette of colors, grid spacing, and font scale. (Each utility's **Advanced settings** section provides more information on customization.)

<div class="site-table-wrapper maxw-tablet-lg">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col" class="display-inline-flex">USWDS utility</th>
        <th scope="col" class="display-inline-flex">Sass</th>
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
