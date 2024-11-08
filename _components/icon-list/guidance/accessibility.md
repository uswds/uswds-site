- **Don't rely on the icons alone to convey meaning.** Use text and context to establish the meaning of your list, and use the icon to reinforce that meaning as a progressive enhancement.
- **Use colors with accessible contrast.** While the icons in an icon list might be considered decorative progressive enhancement, aim for accessible AA contrast. This assures legibility on printed pages as well.
- **Hide most icons from screen readers.** This component uses the `aria-hidden="true"` and `role=”img”` because the icon used solely as visual progressive enhancement. It's meaning should be redundant with the list content.
- **If you wish to expose icons to screen readers:**
  - Provide descriptive text for each icon that conveys meaning.
  - Remove the `aria-hidden="true"` attribute and add a `aria-labelledby` attribute with a value that matches the `id` of a title element added inside the svg.
  ```
  <a href="https://twitter.com/uswds">
    <svg aria-labelledby="twitter-title" role="img">
      <title id="twitter-title">The USWDS Twitter account</title>
      <use xlink:href="/path/to/sprite.svg#twitter"></use>
    </svg>
  </a>
  ```