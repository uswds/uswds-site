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
lead: Cards contain content and actions about a single subject.
---

A **card** is often a subset or summary of a larger idea. It acts as an entry point to more detailed information. This summary can contain a variety of content types, such as text, images and multimedia, or buttons and links.

An individual card is typically **a member of a collection** of similar cards, not a single card in isolation. A card is distinguished from others in its collection by its content, and cards are distinguished from the broader page context in form — usually with a border or a shadow.

{:.margin-bottom-4}

Finally, a card is **modular**. This means that you can vary the order of cards in a collection without destroying any individual card’s meaning.

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
            <strong>Collections of related content.</strong> When you need to present a collection of related groups of content, like articles or sections of a website.
        </li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Tabular data.</strong> Don't use a card as a substitute for a table row.
        </li>
        <li>
          <strong>Simple calls to action.</strong> Use a button instead.
        </li>
        <li>
          <strong>Standalone content.</strong> Consider an <code>aside</code> or another standalone element.
        </li>
        <li>
          <strong>Sequential, continuous text.</strong> Cards should be self-contained and modular. If the reader is meant to read from card to card, consider a list or simple body text and headings.
        </li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Make cards actionable.</strong> Since cards are used as a summary of more detailed information, any individual card should link out to that information.
        </li>
        <li>
          <strong>Don't use the card component only for decoration.</strong> Use the card component for cards, not for any type of content that's designed to have a border around it.
        </li>
        <li>
          <strong>Include non-redundant content.</strong> Don't repeat images or content common to all or most cards in a collection. Repeated information (like using the same image for each card in a collection) makes it more difficult to distinguish cards from one another.
        </li>
        <li>
          <strong>Make sure images are properly sized.</strong> Cards often change size depending on the device. Make sure you use an image that works well on any device at any size.
        </li>
        <li>
          <strong>Use simple styling.</strong> Avoid distracting skeumorphism. Don't include any card styling that calls too much attention to the metaphor of a paper card, like folds, bent edges, or paper texture.
        </li>
      </ul>
      <h4>Accessibility</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Consider using <code>aria-label</code> or <code>aria-labelledby</code>.</strong> ARIA labels can help screen readers summarize the cards purpose when you're listing repeated content or when using it outside of a landmark role.
        </li>
        <li>
          <strong>Use the appropriate heading level for your page.</strong> Update heading level based on the content of your page to make sure card headings are in the correct logical outline order.
        </li>
      </ul>
      <h4>Implementation</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Equal height cards.</strong> Use the <code>usa-card--equal-height</code> class or include the
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
