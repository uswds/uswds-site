---
title: Character count
parent: Form controls
order: 08
lead: Character count helps users know how much text they can enter when there is a limit on the number of characters.


---

{% include code/preview.html component="character-count" %}
{% include code/accordion.html component="character-count" %}
<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="character-count-docs">
    Guidance
  </button>
  <div id="character-count-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use the character count component</h4>
    <ul class="usa-content-list">
      <li><strong>Long response expected.</strong> When users are likely to enter more information than they need to.</li>
      <li><strong>Legal requirement.</strong> When there is a legal reason where an entry must be under a certain number of characters.</li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li><strong>Backend limitations.</strong> If your users keep hitting the character limit imposed by the backend of your service then try to increase the limit rather than use a character count.</li>
      <li><strong>Already Implied.</strong> If the character length is apparent or implied by the data type. (i.e. phone number, zip code) </li>
      <li><strong>Short response expected.</strong> If the response will likely by shorter than the limit using normal validation may suffice. (i.e. an address with a 250 chatacter limit) </li>
    </ul>
     <h4>Usability guidance</h4>
    <ul class="usa-content-list">
      <li><strong>Account for a lack of javascript</strong> Have a default message.</li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Associate the count message.</strong> Use <code>aria-describedby</code> on the input to allow for the updated message to be cast to those using screen readers.
      </li>
      <li>
        <strong>Use aria-live polite on character count message.</strong> Use <code>aria-live=<wbr>"polite"</code>. 
      </li>
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
