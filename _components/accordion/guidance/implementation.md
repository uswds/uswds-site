- **Multiselectable accordion groups.** Add the `aria-multiselectable="true"` attribute to any usa-accordion to create a multiselectable accordion group.
- **Default an accordion button to open.** Add the `aria-expanded="true"` attribute to any `usa-accordion__button` to have that section open by default at page load.
- **Accordion icon position.** The expand/collapse icon defaults to the right. Set `$theme-accordion-icon-position: "left"` in your `uswds-core` settings to change the project default. Use `usa-accordion--icon-left` or `usa-accordion--icon-right` on the accordion root to override the theme for a single accordion. Modifiers can be combined with other accordion variants (for example, `usa-accordion usa-accordion--bordered usa-accordion--icon-left`).

  Set a global default of icon on the left:

  ```scss
  @use "uswds-core" with (
    $theme-accordion-icon-position: "left"
  );
  ```
