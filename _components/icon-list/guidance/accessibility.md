- **Don't rely on the icons alone to convey meaning.** Use text and context to establish the meaning of your list, and use the icon as an additional way to emphasize that meaning.
- **Use colors with accessible contrast.** While the icons in an icon list might be considered decorative progressive enhancement, always aim for accessible AA contrast. This assures legibility with printed pages as well.
- **Icons are hidden from screen readers.** This component uses the `aria-hidden="true"` and `role=”img”` because the icon is redundant and used solely as visual progressive enhancement.
- **If you wish to expose icons to screen readers**
  - Provide descriptive text for each icon.
  - Remove the `aria-hidden="true"` attribute and add a `aria-labelledby` attribute with a value that matches the `id` of a title element added inside the svg.
  ```
  <a href="https://twitter.com/uswds">
    <svg aria-labelledby="twitter-title" role="img">
      <title id="twitter-title">USWDS' Twitter account</title>
      <use xlink:href="/path/to/sprite.svg#twitter"></use>
    </svg>
  </a>
  ```