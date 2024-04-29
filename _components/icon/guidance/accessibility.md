- **Hide decorative icons from screen readers.** Icons are decorative if they don’t provide meaningful information to the user. Usually, decorative icons are accompanied by text. Announcing a decorative icon is redundant and can be annoying. Use the `aria-hidden="true"` and `role="img"`, as in the following code:


  ```html
  <a href="https://twitter.com/uswds">
    <svg class="usa-icon" aria-hidden="true" role="img">
      <use xlink:href="/assets/img/sprite.svg#arrow_forward"></use>
    </svg>
    USWDS' Twitter account
  </a>
  ```

- **Provide descriptive text if a standalone icon has meaning or provides functionality.** If an icon provides information or functionality that people cannot understand from accompanying text, you need to make the icon perceivable to people who use screen readers. Remove the `aria-hidden="true"` attribute and add an `aria-labelledby` attribute with a value that matches the `id` of a `<title>` element added inside the SVG, as in the following code:

  ```html
  <a href="https://twitter.com/uswds">
    <svg aria-labelledby="twitter-title" role="img">
      <title id="twitter-title">USWDS' Twitter account</title>
      <use xlink:href="/path/to/sprite.svg#twitter"></use>
    </svg>
  </a>
  ```
- **Check for good color contrast.** Make sure that the icon has a minimum contrast ratio of 3:1 against its background. See the [USWDS color and accessibility page]({{ site.baseurl }}/design-tokens/color/overview/#accessible-color-pairings) as well as [WCAG 2.1 Techniques: Ensuring that a contrast ratio of 3:1 is provided for icons](https://www.w3.org/WAI/WCAG21/Techniques/general/G207) for more information.
- **Place icons inside links.** If icons accompany a text link, place the icon inside the link to prevent screen readers from announcing the link twice.
