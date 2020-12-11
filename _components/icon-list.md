---
permalink: /components/icon-list/
layout: styleguide
type: component
title: Icon list
category: Components
lead: An icon list displays a static unordered list of significant importance.
---

{% include code/preview.html component="icon-list" %}

<section class="site-component-section">
  {% include code/accordion.html component="icon-list" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="icon-list-docs">
      Guidance
    </button>
    <div id="icon-list-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h3>When to use the icon list component</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Static lists that require special prominence.</strong> Use an icon list to give more weight or prominence to an unordered list, especially when the content relates to the meaning of the icon (for instance, using check and block icons to create do's and don'ts lists).
        </li>
        <li>
          <strong>Nonlinear processes.</strong> On pages highlighting processes that can be completed in any order, use an icon list to create a clear informational hierarchy and help users easily distinguish different steps in the process while retaining the flexibility to communicate the steps without a particular order.
        </li>
        <li>
          <strong>Required actions or verification lists.</strong> Use an icon list to display required actions or items that users can reference to verify they've completed necessary tasks.
        </li>
        <li>
          <strong>Formatting for print.</strong> Users may wish to print a page and use it as a manual checklist. The icon list provides additional customization usually only available in flat document file types (ie. pdf, jpg, .gif).  Use this component to ensure the page can be printed from the browser and maintain the desired format and design.
        </li>
      </ul>
      <h3>When to consider something else</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Multi-step forms or wizards.</strong> The <a href="{{ site.baseurl }}/components/step-indicator">step indicator</a> is best for communicating progress through a form or process that spans several different pages.
        </li>
        <li>
          <strong>Sequential steps.</strong> Use a standard ordered list or <a href="{{ site.baseurl }}/components/step-indicator">process list</a> if the items must be completed sequentially.
        </li>
        <li>
          <strong>Using complex iconography or graphics.</strong> Use the graphic list if you plan on using different large, complex, or multicolored images with each list item.
        </li>
        <li>
          <strong>Improving readability of running text.</strong> The standard <a href="{{ site.baseurl }}/typography/03-lists">unordered list</a> is best for displaying simple lists that are part of running text.
        </li>
      </ul>
      <h3>Usability guidance</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Use consistent headings.</strong> Headings should be written with parallel structure.  For instance, all start with an action verb.  When possible, keep headings short enough to fit on one or two lines.
        </li>
        <li>
          <strong>Add rich content sparingly.</strong> Each list item can display rich text content like HTML, images, and even other components. Be succinct. Too much complexity distracts from the impact of an icon list.
        </li>
        <li>
          <strong>Use similar icons.</strong> Use the same icon for each list item unless variation is meaningful (ie. ✔︎ vs. ✗’s).  Icons should come from the same icon library and have a similar look and feel.
        </li>
      </ul>
      <h3 class="usa-heading">Accessibility</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Don't rely on the icons alone to convey meaning.</strong> Use text and context to establish the meaning of your list, and use the icon as an additional way to emphasize that meaning.
        </li>
        <li>
          <strong>Use colors with accessible contrast.</strong> While the icons in an icon list might be considered decorative progressive enhancement, always aim for accessible AA contrast. This assures legibility with printed pages as well.
        </li>
      </ul>
      <h3 class="usa-heading">Implementation</h3>
      <h4 id="component-settings">Icon list settings</h4>
      {% assign settings = site.data.settings.components.icon-list %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h4 id="component-variants">Icon list variants</h5>
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
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-icon-list</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>


