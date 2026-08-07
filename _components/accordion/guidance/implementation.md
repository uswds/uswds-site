- **Multiselectable accordion groups.** Add the `aria-multiselectable="true"` attribute to any usa-accordion to create a multiselectable accordion group.
- **Default an accordion button to open.** Add the `aria-expanded="true"` attribute to any `usa-accordion__button` to have that section open by default at page load.
- **Accordion icon position.** The expand/collapse icon defaults to the **start** side (left in left-to-right layouts, right in right-to-left layouts). Icon placement and button label alignment use logical properties (`padding-inline-*`, `text-align: start`), so start and end flip correctly when `dir="rtl"` is set on the document or a parent element.
- **Per-accordion modifiers.** Use `usa-accordion--icon-start` or `usa-accordion--icon-end` on the accordion root to override the theme for a single accordion. Modifiers can be combined with other accordion variants (for example, `usa-accordion usa-accordion--bordered usa-accordion--icon-end`).
- **Previous behavior (migration).** In earlier versions, the icon defaulted to the end side (right in LTR). After upgrading, restore that look project-wide with `$theme-accordion-icon-position: "end"`, or add `usa-accordion--icon-end` to individual accordions.

  Restore the previous project-wide default:

  ```scss
  @use "uswds-core" with (
    $theme-accordion-icon-position: "end"
  );
  ```
