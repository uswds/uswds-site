- **Multiselectable accordion groups.** Add the `data-allow-multiple` attribute to any `usa-accordion` to create a multiselectable accordion group.
- **Default an accordion button to open.** Add the `aria-expanded="true"` attribute to any `usa-accordion__button` to have that section open by default at page load. When the accordion is initialized, the JavaScript will automatically add `aria-expanded="false"` attribute to all other accordion buttons.
- **Accordion icon position.** The expand/collapse icon now defaults to the start side of the accordion button. Start is the side where reading begins (typically the left in English layouts). This is a visual change: in earlier USWDS versions, the icon defaulted to the end side. USWDS uses logical start and end sides so placement can follow the document reading direction when needed.
- **Set icon position.** Control placement project-wide with the `$theme-accordion-icon-position` setting (`"start"` or `"end"`). For a single accordion, add `usa-accordion--icon-start` or `usa-accordion--icon-end` to the accordion root. Modifiers can be combined with other accordion variants (for example, `usa-accordion usa-accordion--bordered usa-accordion--icon-end`).
- **Keep the previous look after upgrading.** If your design relied on the icon on the end side, set the theme to `"end"` project-wide or add `usa-accordion--icon-end` to affected accordions.

  Restore the previous project-wide default:

  ```scss
  @use "uswds-core" with (
    $theme-accordion-icon-position: "end"
  );
  ```
