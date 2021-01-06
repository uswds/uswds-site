---
component:
  status: ready
  package: usa-tk
  dependencies:
permalink: /components/summary-box/
layout: styleguide
type: component
title: Summary box
category: Components
lead: A summary box highlights key information from a longer page or displays next steps.
subnav:
- text: Preview
  href: '#tk-preview'
- text: Code
  href: '#tk-code'
- text: Guidance
  href: '#tk-guidance'
- text: Package
  href: '#tk-package'
---

{% include code/preview.html component="summary-box" %}

<section class="site-component-section">
  {% include code/accordion.html component="summary-box" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="summary-box-docs">
      Guidance
    </button>
    <div id="summary-box-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h3>When to use this component</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Summarize dense content.</strong> If your page contains a lot of information, use the summary box to call out 3-5 key details that readers shouldn't miss.
        </li>
        <li>
          <strong>Highlight a short, actionable list.</strong> If the page content describes a few steps or a checklist of items to remember, collect them in a summary box. Use five bullet points or less.
        </li>
      </ul>
      <h3>When to consider something else</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Internal page navigation.</strong> Don't use a summary box as a table of contents. If you’re listing headings for internal page navigation, use a simple unordered list of jump links or side navigation.
        </li>
        <li>
          <strong>Your page is short.</strong> The summary box gives users quick access to the most important information on a long page. If your page isn’t that long, a recap may feel redundant.
        </li>
        <li>
          <strong>Your list needs more detail.</strong> Summary boxes should be short. Use a process list, graphic list, or icon list in the body of the article when:
            <ul>
              <li>There are more than five bullet points;</li>
              <li>Bullet points are longer than 20 words; or</li>
              <li>Bullet points require a header, image, or button.</li>
            </ul>
        </li>
        <li>
          <strong>Alerts or callouts.</strong> If you’re highlighting something new, rather than surfacing details from further down the page, use the <a href="{{ site.baseurl }}/components/alert">alert</a> component, such as the <a href="{{ site.baseurl }}/components/alert">informative status alert</a>.
        </li>
      </ul>
      <h3>Usability guidance</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Select, split, and sequence to prioritize critical information.</strong> First, select the most important information from the page. Then, split up the information into logical parts. Finally, sequence the parts in an order that makes sense to the reader.
        </li>
        <li>
          <strong>Link to more information.</strong> We suggest linking to further reading on the same page using an anchor link. To do this without confusing your readers, do your best to explain where the link will take them in the hyperlinked text and reiterate it with the subsequent heading.
        </li>
        <li>
          <strong>Use smooth scrolling.</strong> Show the reader that they haven’t left the page with smooth scrolling. If you opt for smooth scrolling, ensure the focus state is transferred appropriately.
        </li>
        <li>
          <strong>Give the user a way to get back.</strong> Provide a “back to top” link or sticky internal navigation.
        </li>
      </ul>
      <h3 class="usa-heading">Accessibility</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Write for your audience.</strong> The summary box is meant to make it easier to understand page content. Don't leave readers without access to critical information. Check your writing level to ensure it’s easy to read. Search for "readability level tool" to find tools that assess reading level.
        </li>
      </ul>
      <h3 class="usa-heading">Implementation</h3>
      <h4 id="component-settings">Summary box settings</h4>
      {% assign settings = site.data.settings.components.summary-box %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-summary-box</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>


