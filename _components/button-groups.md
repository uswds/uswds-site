---
permalink: /components/button-groups/
layout: styleguide
title: Button groups
category: Components
lead: Use buttons groups to organize similar or related actions together
component_url: 'https://components.designsystem.digital.gov/components/detail/button-groups--default.html'
---

{% include code/preview.html component="button-groups" %}

<section class="site-component-section">
    {% include code/accordion.html component="button-groups" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="accordion-bordered-docs">
      Guidance
    </button>
    <div id="accordion-bordered-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the button groups</h4>
      <ul class="usa-content-list">
        <li><strong>Actions are related.</strong> Use button groups to create emphasis on a relationship between different actions.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>If actions are not related.</strong> Consider how placement and alternative structure of unrelated actions can improve usability over placing all actions in a group.</li>
        <li><strong>If there are too many actions in a segmented button group.</strong> Be mindful of how a long list of buttons might appear on small screens.</li>
        <li><strong>When using destructive and non-destructive actions.</strong> In some cases you may need to use the default button group with destructive and non-destructive actions, but do not place them inside the segmented variant.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Do not use button groups for hyperlinks or navigation outside of a form.</strong> Though buttons can be used for links, buttons in a group should be actions.</li>
        <li><strong>Use the default button group to space out multiple buttons.</strong></li>
        <li><strong>Use the segmented button group when button actions are categorically linked.</strong></li>
      </ul>
      <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li><strong>Convey relationship.</strong> If not using a list element, give the parent element <code>role="group"</code> in order to convey to screen readers that actions are part of a group. If using as part of a toolbar, use <code>role="toolbar"</code>.</li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>
      <ul class="usa-content-list">
        <li>Buttons inside of a button group follow the same guidelines as the <a href="{{ site.baseurl }}/components/button/">button component</a>.</li>
        <li>Button groups support any style and size.</li>
        <li>Do not mix differently-sized buttons in the same group.</li>
        <li>The default button group will display as a column on smaller screen sizes, with the first button in the source order appearing at the top. Because the button group uses <code>flexbox</code>, you can override both of these properties with the <a href="{{ site.baseurl }}/utilities/flex/#utility-flex-direction">flex-direction</a> and <a href="{{ site.baseurl }}/utilities/flex/#utility-order">order</a> utilities, respectively.</li>
        <li>To use the segmented style button group, add the variant to <code>usa-button-group</code>:
          <ul>
            <li><code>usa-button-group--segmented</code></li>
          </ul>
        </li>
      </ul>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-button-group</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>