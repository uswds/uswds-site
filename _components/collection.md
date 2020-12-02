---
permalink: /components/collection/
redirect_from:
- /collection/
- /components/collections/
layout: styleguide
type: component
title: Collection
category: Components
lead: A collection displays a compact list of multiple related items (like articles or events) that links each item to its original source.
---

{% include code/preview.html component="collection" %}
<section class="site-component-section">
  {% include code/accordion.html component="collection" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="alert-docs">
      Guidance
    </button>
    <div id="alert-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>Why use the collection component</h4>
      <p>The collection component offers users a way to view short descriptions of related content, providing a simple way for them to access the original source to learn more. It’s useful when you want to highlight information like articles, events, or documents that appear elsewhere on your website or from other sources.</p>
      <p>Each item in the collection includes a headline that links to another page and (optionally) a small image, descriptive text, and metadata such as date, time, byline, and tags.</p>
      <p>Items in a collection should be related. This could be by publication date (for instance, all the content was posted in the last week), by content type (all are articles, all are events, all are blog posts, etc), or by subject (all relate to the same topic or theme). Be selective about what content you show in each collection. Consider limiting the number of items in each collection to six or fewer.</p>
      <h4>When to use the collection component</h4>
      <ul class="usa-content-list">
        <li><strong>To feature content that includes metadata.</strong> The collection component is a good option when displaying content that should be accompanied by limited metadata like tags, date/time, or source and attribution.</li>
        <li><strong>Grouping related content together.</strong> The collection component can provide links to articles from a trusted source, popular guides and resources, or a collection of pages that cover different aspects of a single topic. </li>
        <li><strong>Collecting items from multiple sources.</strong> Use collections when you want to guide users to additional resources available elsewhere. Collections introduce themes that help users find what they’re looking for, even if it's not on your own site.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>Providing a searchable archive of articles or pages.</strong> Consider using a separate index or archive page to allow users to search the entire content catalog.</li>
        <li><strong>When you want to display large images or other media.</strong> Collections are meant to be compact. If you need something with a bigger footprint, consider using the <a href="https://designsystem.digital.gov/components/card/">card</a> component, which is bigger and provides more flexibility with large images and other media.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Use thumbnail images consistently.</strong> If you use a thumbnail on one article, use a similar kind of image (photo, illustration, etc.) on every article. Ensure icons or illustrations have clear meaning that add value or context to the content. </li>
        <li><strong>Use a consistent width for media.</strong> Thumbnail images should be presented with consistent width so the list aligns vertically for easy scannability.</li>
        <li><strong>Avoid ambiguous, generic article links such as “read more.”</strong> The heading for each article links to the full article. Ensure each heading is clear, concise, and unique so users can quickly understand what the article is about. Don’t include additional links that take users to the same place.</li>
        <li><strong>Provide a button or link to where more articles can be found.</strong> Users may need access to an index or archive where they can find more articles than those listed in the component.</li>
        <li><strong>Provide a strong "<a href="https://www.nngroup.com/articles/information-scent/">information scent</a>" for each article.</strong> Use headings, teaser text, a thumbnail image, and meta information effectively to help users understand the value of each article and choose which ones to visit.</li>
        <li><strong>Indicate to the user if they will navigate to another website.</strong> Add the <a href="https://designsystem.digital.gov/components/typography/#links">external link class</a> to the heading if the link takes you away from the current site.</li>
        <li><strong>Don’t force in-page scrolling.</strong> Display all collection items in a flexible container so it displays without forcing the user to scroll within a component container.</li>
      </ul>
      <h4>Accessibility</h4>
      <ul class="usa-content-list">
        <li><strong>Use unordered lists and list items.</strong> Use a <code>ul</code> for a collection and an <code>li</code> for each item. This allows screen readers to enumerate the items in the collection and allows shortcuts between list items.</li>
        <li><strong>Use the appropriate heading level for your page.</strong> Update heading levels based on the content of your page to make sure collection headings are in the correct logical outline order.</li>
        <li><strong>Each link should have a unique name.</strong> Those using assistive technology may collect all page links together. Unique names not only help these users distinguish between links, but help all users scan the page. Favor using link text itself to provide a unique name. Using a `title` attribute or `aria-label` to provide a unique name helps users of assistive technology, but doesn't promote scannability in standard browsers.</li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>     
      <h5 id="component-variants">Collection variants</h5>
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
          <strong>Package usage:</strong> <code>@import usa-collection</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
