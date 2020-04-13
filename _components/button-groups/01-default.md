---
title: Default button group
parent: Button groups
order: 01
lead: The default button group arranges each button as a separate element with a gap between them. On mobile devices, the buttons are arranged vertically.
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
      <h4>When to use the default button groups</h4>
      <ul class="usa-content-list">
        <li><strong>Actions have a contextual relationship.</strong> For example, the default button group can be used when a form has both a primary and alternative action.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>If actions are not related.</strong> Consider how placement and alternative structure of unrelated actions can improve usability over placing all actions in a group.</li>
        <li><strong>When mixing destructive and non-destructive actions.</strong> This can lead to making mistakes.</li>
        <li><strong>Navigational links.</strong> Though buttons can be used for links, buttons in a group should relate to actions.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Avoid burden of choice.</strong> Try not to present the user with too many options from which to choose.</li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>
      <ul class="usa-content-list">
        <li>Because the button group uses <code>flexbox</code>, there are several ways modify how the default button group is displayed.
        <ul>
          <li>The default button group will display as a column on smaller screen sizes. To override this behavior and display buttons in a row for all screen sizes, use the <a href="{{ site.baseurl }}/utilities/flex/#utility-flex-direction">flex-row</a> utility.</li>
          <li>On smaller screens, the first button in the source order will appear at the top of column. You can change this behavior using the <a href="{{ site.baseurl }}/utilities/flex/#utility-order">order</a> utility. The order utility includes <a href="{{ site.baseurl }}/utilities/flex/#advanced-settings">advanced settings</a> that allow it modified across different screen sizes.</li>
          <li>Instead of each button appearing on the left-hand side on larger screens (or if you used <code>flex-row</code>), you can use <a href="{{ site.baseurl }}/utilities/flex/#utility-flex-justify">flex-justify</a> to justify the buttons</li>
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
