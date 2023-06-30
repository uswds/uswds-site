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

- **Place icons inside links.** If icons accompany a text link, place the icon inside the link to prevent the screen reader from announcing the link twice.
