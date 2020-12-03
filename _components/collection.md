---
permalink: /components/collection/
redirect_from:
- /collection/
- /components/collections/
layout: styleguide
type: component
title: Collection
category: Components
lead: A collection displays a compact list of multiple related items like articles or events. The list links each item to its original source.
---

The collection component offers users a way to view short descriptions of related content, providing a simple way to access the original source to learn more. It’s useful when you want to highlight information like articles, events, or documents that appear elsewhere on your website or from other sources. 

Each item in the collection includes a headline that links to another page and (optionally) a small image, descriptive text, and metadata such as date, time, byline, and tags. 

Items in a collection should be related. This could be by publication date (for instance, all the content was posted in the last week), by content type (all articles, events, or blog posts), or by subject (all items relate to the same topic or theme). Be selective about what content you show in each collection. Consider limiting the number of items in each collection to six or fewer. 

{% include code/preview.html component="collection" %}

<section class="site-component-section">
  {% include code/accordion.html component="collection" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="alert-docs">
      Guidance
    </button>
    <div id="alert-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the collection component</h4>
      <ul class="usa-content-list">
        <li><strong>To feature content with its metadata.</strong> The collection component is a good option when displaying content that should be accompanied by limited metadata like tags, date/time, or source and attribution.</li>
        <li><strong>To group related content together.</strong> The collection component can provide links to articles from a trusted source, popular guides and resources, or a collection of pages that cover different aspects of a single topic.</li>
        <li><strong>To collect items from multiple sources.</strong> Use collections when you want to guide users to additional resources available elsewhere. Collections introduce themes that help users find what they’re looking for, including when it's not on your site.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>Providing an archive of articles or pages.</strong> Consider limiting the number of items in each collection to six or fewer. If you need to allow users to search or browse a larger content catalog, consider using a separate index or archive page.</li>
        <li><strong>When you want to display large images or other media.</strong> Collections are meant to be compact. If you need something with large images or other media, consider using the <a href="https://designsystem.digital.gov/components/card/">card</a> component. The card has a bigger footprint and provides more flexibility with large images and other media.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Use thumbnail images consistently.</strong> If you use a thumbnail image on one item, use a similar kind of image (photo, illustration, etc.) on every item in the collection. Ensure icons or illustrations have clear meaning that add value or context to the content. Avoid repeating placeholder images.</li>
        <li><strong>Use a consistent width for images.</strong> Display item images with a consistent width. This promotes consistent alignment and easy scannability.</li>
        <li><strong>Avoid ambiguous, generic article links like “read more.”</strong> The heading for each item should link to the full content. Ensure each heading is clear, concise, and unique so users can quickly understand what the content is about. Don’t include additional links that take users to the same place.</li>
        <li><strong>Use a descriptive title.</strong> The collection's title should make the collection's theme clear — for example, “Recent posts,” “How-to videos,” or “Resources about flu shots.”</li>
        <li><strong>Link to additional related content, if applicable.</strong> Collections may not include every piece of content related to its theme. If there's a location that collects more comprehensive results related to the theme, add a link to that location.</li>
        <li><strong>Provide a button or link to where more articles can be found.</strong> Users may need access to an index or archive where they can find more articles than those listed in the component.</li>
        <li><strong>Provide a strong "information scent" for each article.</strong> Use headings, teaser text, a thumbnail image, and meta information effectively to help users understand the value of each item and choose which ones to visit.</li>
        <li><strong>Indicate to the user if they'll navigate to another website.</strong> A common way to do this is to add the <a href="https://designsystem.digital.gov/components/typography/#links">external link class</a> to the heading if the link takes you away from the current site.</li>
        <li><strong>Don’t force in-page scrolling.</strong> Display all collection items in a flexible container so it displays without forcing the user to scroll within a component container. You can help prevent this by limiting the number of items in the collection to six or fewer.</li>
      </ul>
      <h4>Accessibility</h4>
      <ul class="usa-content-list">
        <li><strong>Use unordered lists and list items.</strong> Use a <code>ul</code> for a collection and an <code>li</code> for each item. This allows screen readers to enumerate the items in the collection and allows shortcuts between list items.</li>
        <li><strong>Use the appropriate heading level for your page.</strong> Update heading levels based on the content of your page to make sure collection headings are in the correct logical outline order.</li>
        <li><strong>Each link should have a unique name.</strong> Those using assistive technology may collect all page links together. Unique names not only help these users distinguish between links, but help all users scan the page. Favor using link text itself to provide a unique name. Using a `title` attribute or `aria-label` to provide a unique name helps users of assistive technology, but doesn't promote scannability in standard browsers.</li>
      </ul>
      
      <h4 class="usa-heading">Implementation</h4>     
      Here are examples of additional content you can add:
      <ul class="usa-list">
        <li>Thumbnail image</li>
        <li>Teaser text (preview text)</li>
        <li>Meta information
          <ul class="usa-list">
            <li>Date</li>
            <li>Time</li>
            <li>Byline</li>
            <li>Tags</li>
          </ul>
        </li>
      </ul>

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
