- **Hide decorative icons from screen readers.** Use the `aria-hidden="true"` and `role="img"` attributes if the icon is redundant and used solely as visual progressive enhancement as in the following code:

  ```html
  <a href="https://twitter.com/uswds">
    <svg class="usa-icon" aria-hidden="true" role="img">
      <use xlink:href="/assets/img/sprite.svg#arrow_forward"></use>
    </svg>
    USWDS' Twitter account
  </a>
  ```

- **Provide descriptive text if a standalone icon has semantic meaning.** If you need to expose an icon to screen readers, remove the `aria-hidden="true"` attribute and add an `aria-labelledby` attribute with a value that matches the `id` of a `<title>` element added inside the SVG as in the following code:

  ```html
  <a href="https://twitter.com/uswds">
    <svg aria-labelledby="twitter-title" role="img">
      <title id="twitter-title">USWDS' Twitter account</title>
      <use xlink:href="/path/to/sprite.svg#twitter"></use>
    </svg>
  </a>
  ```
- **Check for good color contrast.** Make sure that the icon has a minimum contrast ratio of 3:1 against its background. See [WCAG 2.1 Techniques: Ensuring that a contrast ratio of 3:1 is provided for icons](https://www.w3.org/WAI/WCAG21/Techniques/general/G207) for more information.
- **Place icons inside links.** If icons accompany a text link, place the icon inside the link to prevent the screen reader from announcing the link twice.
