---
title: Date input
parent: Form controls
maturity: alpha
order: 05
lead: Three text fields are the easiest way for users to enter most dates.
---

{% include code/preview.html component="date-input" %}
{% include code/accordion.html component="date-input" %}
<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="date-input-docs">
    Guidance
  </button>
  <div id="date-input-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use the date input component</h4>
    <ul class="usa-content-list">
      <li><strong>Appropriate for most dates.</strong> Use this format for most dates, particularly memorized dates.</li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li><strong>Consider a calendar picker for scheduling.</strong> If users are trying to schedule something, a calendar picker might make more sense. Be sure to also provide an option for text entry as well.</li>
    </ul>
    <h4>Usability guidelines</h4>
    <ul class="usa-content-list">
      <li><strong>Label each field.</strong> Be sure each field is properly labeled — some countries enter dates in day, month, year order.</li>
      <li><strong>Avoid dropdowns.</strong> It may be tempting to switch all or some of these text fields to dropdowns, but these tend to be more difficult to use than text boxes.</li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li><strong>Follow input guidance.</strong> These text fields should follow the <a href="{{ site.baseurl }}/form-controls/#text-inputs"> accessibility guidelines for all text inputs.</a></li>
      <li><strong>Don’t auto-advance focus.</strong> Do not use JavaScript to auto advance the focus from one field to the next. This makes it difficult for keyboard-only users to navigate and correct mistakes.</li>
    </ul>
    <h4 class="usa-heading">Implementation</h4>
      <ul class="usa-content-list">
        <li>Currently, the max limit for the year input is set to 2000, but it should be changed depending on the context of the form.</li>
      </ul>
    <h4 class="usa-heading">Package information</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Package usage:</strong> <code>@import form-controls</code>
      </li>
      <li>
        <strong>Requires:</strong> <code>required</code>, <code>global</code>
      </li>
    </ul>
  </div>
</div>
