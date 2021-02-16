---
permalink: /components/printer-friendly/
layout: styleguide
type: component
title: Printer friendly
category: Components
lead: A good print style sheet enhances the user experience and addresses many issues people face when printing from the web.
---

<h6>Printer friendly</h6>

<p>Printing from the web is arguably one of the most overlooked areas of the online user experience; however, a <a href="https://varn.co.uk/01/26/varn-original-research-how-many-of-us-print-out-web-pages/" target="_blank">Varn.co.uk</a> study found that nearly half of all internet users print at least one page from websites they visit. While the number of people printing from the web skews higher for the 35 and up age group, the survey found that even in the 18-24 age group, users occasionally printed anything from recipes to receipts. In other words, the importance of having clearly presented, well formatted print outs of your web pages can’t be understated.</p>

<section class="site-component-section">
  {% include code/accordion.html component="printer-friendly" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="printer-friendly-docs">
      Guidance
    </button>
    <div id="printer-friendly-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h3>When to use the printer friendly component</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Always.</strong> The printer friendly component, or print style sheet, is an essential element of every website and should be a part of your global CSS implementation.
        </li>
      </ul>
      <h3>When to consider something else</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Not applicable.</strong> Every website should provide at least a basic layout for print. 
        </li>
      </ul>
      <h3>Usability guidance</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Reset the styles of your site.</strong> The printer friendly component provides a clean reset of all the basic styles of your site. This includes making all text black and all background colors transparent which is a core recommendation for making your site printer friendly.
        </li>
        <li>
          <strong>Place your print styles wherever is convenient.</strong> Your print styles can be included as a separate print.css file or included in any existing css file.
        </li>
        <li>
          <strong>Append URLs to link text.</strong> Making your site printer friendly includes revealing the hidden URL to the user on the printed page. The printer friendly CSS code does that by automatically extracting the URL from the <code>href</code> attribute and appending it to the link text inside parenthesis. And since this is inside the <code>@media print {}</code> rule, it only appears if the user decides to print.
        </li>
        <li>
          <strong>Use the CSS at-rule @media print.</strong> Print styles encapsulated in the <code>@media print {}</code> rule are not rendered to the screen and are only used when the user chooses to print.
        </li>
      </ul>
      <h3 class="usa-heading">Accessibility</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Lorem ipsum.</strong> Lorem ipsum.
        </li>
      </ul>
      <h3 class="usa-heading">Implementation</h3>
      <h4 id="component-settings">Printer-friendly settings</h4>
      {% assign settings = site.data.settings.components.printer-friendly %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-printer-friendly</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>


