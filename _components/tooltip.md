---
permalink: /components/tooltip/
layout: styleguide
title: Tooltip
type: component
category: Components
lead: Tooltips are short messages containing additional information that appear when a user hovers or focuses on an element.
component_url: 'https://components.designsystem.digital.gov/components/detail/tooltips--default.html'
---

<section class="site-component-section">
  {% include code/preview.html component="tooltip" %}
  {% include code/accordion.html component="tooltip" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="tooltip-docs">
      Guidance
    </button>
    <div id="tooltip-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the tooltip component</h4>
      <ul class="usa-content-list">
        <li><strong>Helpful, but not critical information.</strong></li>
        <li><strong>Enhance confidence.</strong> Tooltips can be used to increase certainty about an interaction.</li>
        <li><strong>Brief descriptions.</strong> Tooltips can be a good choice when the the helper text is only a few words long.</li>
        <li><strong>Lack of space.</strong> Tooltips can be helpful when your UI can be short on space. All other options should be exhausted for keeping content visible on the page.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>Lengthy descriptions.</strong> Tooltips are micro-content, they should be brief. If you need a lot of text, consider an alternative approach.</li>
        <li><strong>Vital information.</strong> Information that is important for completing a task should never be hidden behind an interaction.</li>
        <li><strong>Redundant content.</strong> Do not use where the information is repetitive or usability is obvious.</li>
        <li><strong>Sufficient space.</strong> If your UI can fit the content you like to put inside of a tooltip, consider not using a tooltip.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Use affordances.</strong> Make it clear that an element can be interacted with when using tooltips.</li>
        <li><strong>Avoid collisions.</strong> Be careful not introduce conflicting hover or focus events.</li>
        <li><strong>Use consistently.</strong> If using tooltips in one context, use in all similar contexts.</li>
        <li><strong>Do not block content.</strong> Use the <code>data-position</code> attribute to prevent the tooltip from covering elements in way that distracts the user.</li>
      </ul>
      <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li><strong>Use as title attribute.</strong> Tooltips are essentially a progressive enhancement for a title attribute, and will gracefully degrade to it if the component does not intialize.</li>
        <li><strong>Keyboard accessibility</strong> Tooltips make title attributes keyboard accessible.</li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>
      <ul class="usa-content-list">
        <li>Any element given the class name <code>usa-tooltip</code> and a <code>title</code> attribute will become a tooltip.</li>
        <li>Place tooltips on elements that contain little or no child elements</li>
        <li>Elements or text that show a tooltip when hovered or focused will be prevented wrapping onto a new line and will be given <code>tabindex="0"</code> for keyboard interaction.</li>
        <li>By default, tooltips will appear on top of the element that triggers them</li>
        <li>Use the <code>data-position</code> attribute to indicate where tooltip appears in relation to the element that makes it appear:
          <ul>
            <li><code>data-position="top"</code>: On top, horizontally centered. If the <code>data-position</code> attribute is omitted, the tooltip will appear on top by default.</li>
            <li><code>data-position="bottom"</code>: Below, horizontally centered</li>
            <li><code>data-position="right"</code>: To the right, vertically centered</li>
            <li><code>data-position="left"</code>: To the left, vertically centered</li>
          </ul>
        </li>
        <li>Tooltips are protected from clipped by the viewport. If clipping is detected, the tooltip is positioned to the opposite side indicated in the <code>data-position</code> attribute. If the tooltip is still clipped, it placed on top of the element, with its width constrained to the width of the triggering element. Only then does the tooltip wrap to multiple lines.</li>
        <li>Most of the tooltip’s elements are generated on the page by JavaScript. In order to apply <a href="{{ site.baseurl }}/utilities/">utility classes</a> to the tooltip’s wrapping element, place them inside a <code>data-classes</code> attribute, separated by spaces.</li>
      </ul>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-tooltip</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
