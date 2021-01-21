---
permalink: /components/icon-list/
layout: styleguide
type: component
title: Icon list
category: Components
lead: An icon list displays a static unordered list of significant importance.
---

{% include code/preview.html component="icon-list" %}
{% include code/accordion.html component="icon-list" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="icon-list-docs">
    Guidance
  </button>
<div id="icon-list-docs" aria-hidden="false" class="usa-accordion__content site-component-usage" markdown="1">

### When to use the icon list component

{:.usa-content-list}

- **Static lists that require special prominence.** Use an icon list to give more weight or prominence to an unordered list, especially when the content relates to the meaning of the icon (for instance, using check and block icons to create do's and don'ts lists).
- **Nonlinear processes.** On pages highlighting processes that can be completed in any order, use an icon list to create a clear informational hierarchy and help users easily distinguish different steps in the process while retaining the flexibility to communicate the steps without a particular order.
- **Required actions or verification lists.** Use an icon list to display required actions or items that users can reference to verify they've completed necessary tasks.
- **Formatting for print.** Users may wish to print a page and use it as a manual checklist. The icon list provides additional customization usually only available in flat document file types (e.g., pdf, jpg, .gif).  Use this component to ensure the page can be printed from the browser and maintain the desired format and design.
### When to consider something else

{:.usa-content-list}

- **Multi-step forms or wizards.** The <a href="{{ site.baseurl }}/components/step-indicator">step indicator</a> is best for communicating progress through a form or process that spans several different pages.
- **Sequential steps.** Use a standard ordered list or <a href="{{ site.baseurl }}/components/process-list">process list</a> if the items must be completed sequentially.
- **Using complex iconography or graphics.** Use the graphic list if you plan on using different large, complex, or multicolored images with each list item.
- **Improving readability of running text.** The standard <a href="{{ site.baseurl }}/typography/03-lists">unordered list</a> is best for displaying simple lists that are part of running text.

### Usability guidance

{:.usa-content-list}

- **Use consistent headings.** Headings should be written with parallel structure.  For instance, all start with an action verb.  When possible, keep headings short enough to fit on one or two lines.
- **Add rich content sparingly.** Each list item can display rich text content like HTML, images, and even other components. Be succinct. Too much complexity distracts from the impact of an icon list.
- **Use similar icons.** Use the same icon for each list item unless variation is meaningful (e.g., ✔︎ vs. ✗’s).  Icons should come from the same icon library and have a similar look and feel.

### Accessibility

{:.usa-content-list}

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

### Implementation

<h5 id="component-settings">Icon list settings</h5>
{% assign settings = site.data.settings.components.icon-list %}
{% include settings-table-simple.html
  settings=settings.contents
%}

<h5 id="component-variants">Icon list variants</h5>
<table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
  <thead>
    <tr>
      <th scope="col" class="flex-6">Variant</th>
      <th scope="col" class="flex-6">Description</th>
    </tr>
  </thead>
  <tbody class="font-mono-2xs">
    <tr>
      <td data-title="Variant" class="flex-6">usa-icon-list--[color]</td>
      <td data-title="Description" class="flex-6">
        <span class="font-lang-3xs">Change the color of an icon by updating [color] to any one of the project colors listed on the <a href="{{ site.baseurl }}/utilities/color">color utilities</a> page</span>
      </td>
    </tr>
    <tr>
      <td data-title="Variant" class="flex-6">usa-icon-list--size-[size]</td>
      <td data-title="Description" class="flex-6">
        <span class="font-lang-3xs">Change the size of an icon by updating [size] to 3, 4, 5, 6, 7, 8, or 9 as detailed on the icons component page (coming soon)</span>
      </td>
    </tr>
  </tbody>
</table>

### Package information

{:.usa-content-list}

- **Package usage:** `@import usa-icon-list`
- **Requires:** `required`, `global`
