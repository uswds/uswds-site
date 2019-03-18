---
permalink: /components/labels/
redirect_from:
- /labels/
layout: styleguide
type: element
title: Labels
category: Components
lead: Labels draw attention to new or categorized content elements.
---

{% include code/preview.html component="labels" %}
<section class="site-component-section">
  {% include code/accordion.html component="labels" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="label-docs">
      Usage
    </button>
    <div id="label-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the label component</h4>
      <ul class="usa-content-list">
        <li><strong>To draw attention to new, important content.</strong> Labels can focus attention on important content on that might otherwise be missed.</li>
        <li><strong>To filter results with one or more tags.</strong></li>
        <li><strong>To indicate the number of new or unread items within a container.</strong> For example, to indicate the number of unread emails within a person’s inbox.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li>When users are likely to confuse a static label with a button. For example, when the label appears in the same area of the page as buttons.</li>
        <li>To call attention to new or updated content, consider changing the background color of the object itself or experiment with changing the font weight.</li>
        <li>When users already expect content to be updated frequently. For example, on a site dedicated to breaking news. In this case placing the new content at the top may be enough.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Users frequently confuse labels as buttons.</strong> Always conduct usability testing to make sure your particular implementation is not causing frustration.</li>
        <li><strong>If your labels aren’t interactive, disable hover, focus, and active styles.</strong></li>
        <li><strong>Don’t mix interactive and static labels.</strong> Once you establish a pattern for how labels behave on your site, users will expect that behavior every time.</li>
        <li><strong>Don’t overdo it.</strong> If everything on a page is called out as important, nothing commands unique attention.</li>
      </ul>
      <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li>When labels are used to call out new content that is dynamically loaded onto a page, be sure to use ARIA live regions to alert screen readers of the change.</li>
      </ul>
    </div>
  </div>
</section>
