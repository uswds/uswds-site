---
permalink: /components/preview-list/
redirect_from:
- /preview-list/
- /components/preview-lists/
layout: styleguide
type: component
title: Preview List
category: Components
lead: The preview list component provides a short list of recently posted or relevant articles or content pages.
---

{% include code/preview.html component="preview-list" %}
<section class="site-component-section">
  {% include code/accordion.html component="preview-list" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="alert-docs">
      Guidance
    </button>
    <div id="alert-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the preview list component</h4>
      <ul class="usa-content-list">
        <li><strong>Displaying links and excerpts from recently posted articles.</strong> Preview list can point users to the most recently posted articles in a blog or content site, ideally no more than 10.</li>
        <li><strong>Grouping links of related content together.</strong> Preview list can provide links to articles from a trusted source, popular guides and resources, or a collection of pages that cover different aspects of a single topic.</li>
        <li><strong>Teaser content When just a few links will do.</strong> Preview list gives access to a compact set of selected articles and can serve as a gateway to a more robust catalog of content on a dedicated page.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>Providing a searchable archive of articles or pages.</strong> Consider using a separate index or archive page to allow users to search the entire content catalog.</li>
        <li><strong>When you want to use a more visual way to display articles including a larger image or other media.</strong> Consider using the <a href="https://designsystem.digital.gov/components/card/">card</a> component, which provides more flexibility with size and media options.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Use thumbnail images consistently.</strong> If you use a thumbnail on one article, use a similar kind of image (photo, illustration, etc.) on every article. Ensure icons or illustrations have clear meaning that add value or context to the content. </li>
        <li><strong>Use a consistent width for media.</strong> Thumbnail images should be presented with consistent width so the list aligns vertically for easy scanability.</li>
        <li><strong>Avoid ambiguous, generic article links such as “read more.”</strong> The heading for each article links to the full article. Ensure each heading is clear, concise, and unique so users can quickly understand what the article is about. Don’t include additional links that take users to the same place.</li>
        <li><strong>Provide a button or link to load more articles.</strong> Users may need access to an index or archive where they can find more articles than those listed in the component.</li>
        <li><strong>Provide a strong “<a href="https://www.nngroup.com/articles/information-scent/">information scent</a>” for each article.</strong> Use headings, teaser text, a thumbnail image, and meta information effectively to help users understand the value of each article and choose which ones to visit.</li>
        <li><strong>Indicate to the user if they will navigate to another website.</strong> Add the <a href="https://designsystem.digital.gov/components/typography/#links">external link class</a> to the heading if the link takes you away from the current site.</li>
      </ul>
      <h4>Accessibility</h4>
      <ul class="usa-content-list">
        <li><strong>Use the proper ARIA role.</strong> Use unordered lists and list items. Use a <code>ul</code> for a card group and an <code>li</code> for each card. This allows screen readers to enumerate the items in the card group and allows shortcuts between list items.</li>
        <li><strong>Use the appropriate heading level for your page.</strong> Update heading levels based on the content of your page to make sure preview list headings are in the correct logical outline order.</li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>     
      <h5 id="component-variants">Preview List variants</h5>
      <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
        <thead>
          <tr>
            <th scope="col" class="flex-6">Variant</th>
            <th scope="col" class="flex-6">Description</th>
          </tr>
        </thead>
        <tbody class="font-mono-2xs">
          <tr>
            <td data-title="Variant" class="flex-6"></td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Display a thumbnail image</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6"></td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Display a teaser text paragraph</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6"></td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Display meta information about the article (e.g. date, time, tags, attribution)</span>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-preview-list</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
