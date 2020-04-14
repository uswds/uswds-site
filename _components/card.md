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
lead: Cards serve as containers that can exist individually or as part of a collection.
---

The card component acts as an entry point to more detailed information and
can contain elements such as multimedia, text, links, graphs, and captions.

Card is typically a member of a collection of similar cards as well as a
subset or summary of a parent record. A card is distinct from its collection
peers in content. A card is distinct from its page context in form.

A card is modular in the sense that you can vary the order of its peers
without destroying the card’s meaning.

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
        <li>
            When you need to present a collection of content that is easily
            browseable and scannable for differences. Some example use cases
            include catalogs and dashboards.
        </li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li>
          <strong>If you have dense and scannable content.</strong>
          Use a list if the content is brief and can't stand on its own.
        </li>
        <li>
          <strong>Never use a card as decoration.</strong>
          The styling of a card is not simple ornamentation.
          The card must have content that is meaningful to the page.
        </li>
        <li>
          <strong>Using cards to present a continuous sequential flow.</strong>
          Cards can hold a variety of things, but they should be brief and summarize content.
        </li>
        <li>
          <strong>
            Do not repeat information common to all or most peers
            (i.e. use the same main image).
          </strong>
          Repeated information will make it more difficult to distinguish cards
          from one another. This will reduce the information scent for different
          cards and increase confusion.
        </li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Include at least one actionable element.</strong>
          In addition to its content, a card will include at least one actionable element.
        </li>
        <li>
          <strong>Consider resizing with images or graphic elements.</strong>
          If using images or other graphic elements like video, make sure to
          account for resizing.
        </li>
        <li>
          <strong>Multiple rows of results.</strong>
          Make sure that a user can tab to each section.
        </li>
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
      <h4>Implementation</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Equal height.</strong>
          Use the <code>usa-card--equal-height</code> class or include the
          <code>card-equal-height</code> mixin on each card.
        </li>
      </ul>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-card</code>
        </li>
        <li>
          <strong>Requires:</strong>
          <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
