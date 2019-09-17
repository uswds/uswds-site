---
permalink: /components/banner/
redirect_from:
- /banner/
- /components/banners/
layout: styleguide
type: element
title: Banner
category: Components
lead: The banner identifies your site as an official website of the United States government and helps visitors understand how to tell that it is official.
---

{% include code/preview.html component="banner" %}
<section class="site-component-section">
  {% include code/accordion.html component="banner" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="table-docs">
      Usage
    </button>
    <div id="table-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the table component</h4>
      <ul class="usa-content-list">
        <li><strong>Tabular data.</strong> When you need tabular information, such as statistical data.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>Non-tabular data.</strong> Depending on the type of content, consider using other presentation formats such as definition lists or hierarchical lists. </li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Keep it simple.</strong> Tables are great at displaying tabular data. Minimal visual styling helps surface this information more easily.</li>
      </ul>
      <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li>Simple tables can have two levels of headers. Each header cell should have <code>scope=<wbr>"col"</code> or <code>scope=<wbr>"row"</code>.</li>
        <li>Complex tables are tables with more than two levels of headers. Each header should be given a unique <code>id</code> and each data cell should have a <code>headers</code> attribute with each related header cell’s <code>id</code> listed.</li>
        <li>When adding a title to a table, include it in a <code>&lt;caption&gt;</code> tag inside of the <code>&lt;table&gt;</code> element.</li>
      </ul>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-table</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
