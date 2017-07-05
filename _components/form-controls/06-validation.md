---
title: Validation
parent: Form controls
maturity: alpha
order: 06
lead: Stating validation requirements up front, with live feedback, means users won't be left guessing.
---

{% include code/preview.html component="validation" %}
{% include code/accordion.html component="validation" %}
<div class="usa-accordion-bordered">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="validation-docs">
    Documentation
  </button>
  <div id="validation-docs" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Guidance</h4>
    <ul class="usa-content-list">
      <li>Input fields which have custom validation logic can automatically
        provide helpful feedback to users if they are assigned a
        <code>data-validation-element</code> attribute set to a
        CSS selector that uniquely identifies a <code>.usa-checklist</code>,
        e.g. <code>data-validation-element="#validate-code"</code>.</li>
      <li>
        For each kind of validation you'd like to provide feedback on:
        <ol>
          <li>Come up with a name for the validator, e.g.
            <code>uppercase</code>. It shouldn't have any spaces in it.</li>
          <li>On one of the list elements in the <code>.usa-checklist</code>,
            set the <code>data-validator</code> attribute to the
            name of the validator, e.g. <code>data-validator="uppercase"</code>.
            This is the list item that will appear "checked" when the
            validator's condition is met.</li>
          <li>On the input field, add a field called
            <code>data-validate-<em>validator name</em></code> and set
            its value to a <a href="https://regexone.com/">regular
            expression</a> that represents whether the validator's
            condition is met, e.g. <code>data-validate-uppercase="[A-Z]"</code>.</li>
        </ol>
      </li>
    </ul>
  </div>
</div>
