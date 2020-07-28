---
title: Time picker
parent: Form controls
order: 12
lead: A time picker helps users select a specific time.
initProps:
  - property: "`data-min-time`"
    element: .usa-time-picker
    description: The start time that would be used for the time picker combo-box options. Given in `hh:mm` 24 hour format. The default is `00:00`.
  - property: "`data-max-time`"
    element: .usa-time-picker
    description: The end time that would be used for the time picker combo-box options. Given in `hh:mm` 24 hour format. The default is `23:59`.
  - property: "`data-step`"
    element: .usa-time-picker
    description: The number of minutes between options. The minimum is 1 minute. The default is 30 minutes.
---

{% include code/preview.html component="time-picker" %}
{% include code/accordion.html component="time-picker" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="time-picker-docs">
    Guidance
  </button>
  <div id="time-picker-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use the time picker component</h4>
    <ul class="usa-content-list">
      <li><strong>Scheduling.</strong> Use the time picker when a specific time needs to be scheduled, such as planning a meeting time.</li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li><strong>Exact time.</strong> Though minute increments are possible using the <code>data-step</code> attribute it may be more advantageous to use a plain text input when it is an exact know time.</li>
    </ul>
    <h4>Usability guidance</h4>
    <ul class="usa-content-list">
      <li><strong>See combo-box.</strong> This transforms into a combo box instance, please reference <a href="{{ site.baseurl }}/form-controls/#combo-box">combo box</a> for more information.</li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li><strong>See combo-box.</strong> This transforms into a combo box instance, please reference <a href="{{ site.baseurl }}/form-controls/#combo-box">combo box</a> for more information.</li>
    </ul>
    <h4 class="usa-heading">Implementation</h4>
<div class="usa-prose site-prose" markdown="1">

{:.usa-content-list}

- **Initialization properties.** The following properties update the component during initialization. These properties must be set before the component is initialized in order to have an effect. These are specific to time picker but this also transforms into a <a href="{{ site.baseurl }}/form-controls/#combo-box">combo box</a> instance. Reference the combo box documentation for more information.

{% include settings-table-flex.html
  content=page.initProps
  cols="flex-1, flex-1, flex-2"
%}

</div>
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
