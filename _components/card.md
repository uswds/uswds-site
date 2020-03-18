---
permalink: /components/card/
redirect_from:
- /cards/
- /components/cards/
layout: styleguide
type: component
title: Card
category: Components
lead: A card component.
---

{% include code/preview.html component="card" %}
<section class="site-component-section">
  {% include code/accordion.html component="card" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="alert-docs">
      Guidance
    </button>
    <div id="alert-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the card component</h4>
      <ul class="usa-content-list">
        <li><strong>A strong message.</strong> Work on getting prose.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>Something here too.</strong> Plain language</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Multiple rows of results.</strong> Make sure that a user can tab to each section.</li>
      </ul>
      <h4>Accessibility</h4>
      <ul class="usa-content-list">
        <li><strong>Consider using `aria-labelledby`.</strong> This will ensure the card shows up in VoiceOver rotor</li>
      </ul>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-card</code>
        </li>
        <li>
          <div class="usa-alert usa-alert--warning usa-alert--slim">
            <div class="usa-alert__body">
              <h3 class="usa-alert__heading">@TODO</h3>
              <p class="usa-alert__text">Get package requirements</p>
            </div>
          </div>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
