---
permalink: /components/card/
redirect_from:
- /cards/
- /card/
- /components/cards/
layout: styleguide
type: component
title: Card
category: Components
lead: A card component.
subnav:
- text: Default card
  href: '#card-title--default'
- text: Raised card
  href: '#card-title--media'
- text: Media card
  href: '#card-title--raised'
- text: Flag card
  href: '#card-title--flag'
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
        <li><strong>Consider responsive images.</strong> Responsive images help
        with site performance. As well as making sure your image looks good across all
        screen sizes.</li>
        <li><strong>Multiple rows of results.</strong> Make sure that a user can tab to each section.</li>
      </ul>
      <h4>Accessibility</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Consider using <code>aria-label</code> or <code>aria-labelledby</code>.</strong>
          To briefly summarize the cards purpose when you're listing repeated content or when using it outside of a landmark role.
        </li>
        <li>
          <strong>Use the appropriate sized header.</strong>
          Update heading size based on the content of your page to make sure
          headers are in a logical order.
        </li>
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
