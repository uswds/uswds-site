---
permalink: /components/grids/
redirect_from:
- /grids/
layout: styleguide
title: Grids
category: UI components
lead: This 12-column, responsive grid provides structure for website content.
---

{% include code/preview.html component="grids" %}
{% include code/accordion.html component="grids" %}
<div class="usa-accordion-bordered">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="grid-docs">
    Documentation
  </button>
  <div id="grid-docs" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Implementation</h4>
    <p>To use the grid, wrap each grid row in a <code>&lt;div&gt;</code> with the <code>usa-grid</code> class. To use a grid without padding on the right and left, use the <code>usa-grid-full</code> class instead.</p>
    <p>Each grid item is written semantically by its width. For example: <code>usa-width-one-half</code> = 1/2 grid item, <code>usa-width-two-thirds</code> = 2/3 grid item.</p>
    <p>Medium breakpoints are used for 1/6 and 1/12 grid items, which both transform into a 1/3 grid item at medium screen sizes.</p>
    <p>All grid items are full-width at small screen sizes.</p>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>Low-vision users should be able to increase the size of the text by up to 200 percent without breaking the layout.</li>
    </ul>
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Almost always use a grid layout — visitors can read more quickly on pages that use grids. Choose a single grid system for your entire site.</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>Avoid mixing this grid and other grid systems.</li>
    </ul>
    <h5>Guidance</h5>
    <ul class="usa-content-list">
      <li>Choose a 12-column grid with flexible column widths and fixed gutters. The width of the padding on the left and right edge of the grid depends on device size.</li>
      <li>Avoid text lines longer than 75 characters. Place text in narrower grid boxes to keep text lines from becoming too wide.</li>
    </ul>
  </div>
</div>
