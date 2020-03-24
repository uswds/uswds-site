---
permalink: /components/button-groups/
layout: styleguide
title: Button groups
category: Components
lead: Use buttons groups to organize similar or related actions together
component_url: 'https://components.designsystem.digital.gov/components/detail/buttons.html'
---

<section class="site-component-section">

  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="accordion-bordered-docs">
      Guidance
    </button>
    <div id="accordion-bordered-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the button groups</h4>
      <ul class="usa-content-list">
        <li><strong>If button actions are related.</strong> Use button groups to create emphasis on a relationship between different actions.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>If button actions are not related.</strong> Consider how placement and alternative structure of unrelated actions can improve usability over placing all actions in a group.</li>
        <li><strong>If there are too many actions.</strong> Be mindful of how a long list of buttons might appear on small screens.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Do not use button groups for hyperlinks or navigation.</strong> Though buttons can be used for links, buttons in a group should be actions.</li>
        <li>Use the default button group to space out multiple buttons</li>
        <li>Use the segmented button group when button actions are categorically linked</li>
      </ul>
      <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li>If not using a list element, give the parent element <code>role="group"</code> in order to convey to screen readers that actions are part of a group.</li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>
      <ul class="usa-content-list">
        <li>Buttons in button groups follow the same guidelines as buttons, and can use any style or size. Do not mix differently-sized buttons in the same group.</li>
        <li>Group buttons logically into sets</li>
      </ul>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-button</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>