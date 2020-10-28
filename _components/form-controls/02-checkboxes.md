---
title: Checkbox
parent: Form controls
order: 02
lead: Checkboxes allow users to select one or more options from a visible list.
---

{% include code/preview.html component="checkboxes" %}
{% include code/accordion.html component="checkboxes" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="checkbox-docs">
    Guidance
  </button>
  <div id="checkbox-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use the checkbox component</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Multi-select.</strong> When a user can select any number of
        choices from a set list.
      </li>
      <li>
        <strong>Toggles.</strong> When a user needs to choose “yes” or “no” on
        only one option (use a stand-alone checkbox). For example, to toggle a
        setting on or off.
      </li>
      <li>
        <strong>Visibility of options.</strong> When users need to see all the
        available options at a glance.
      </li>
    </ul>
    <h4>When to consider something different</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Too many options.</strong> If there are too many options to
        display on a mobile screen.
      </li>
      <li>
        <strong>Single-select only.</strong> If a user can only select one
        option from a list (use radio buttons instead).
      </li>
    </ul>
    <h4>Usability guidelines</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Make the label selectable.</strong> Users should be able to tap
        on or click on either the text label or the checkbox to select or deselect an option.
      </li>
      <li>
        <strong>List options vertically.</strong> Horizontal listings can make it
        difficult to tell which label pertains to which checkbox.
      </li>
      <li>
        <strong>Use positive statements.</strong> Negative language in labels can
        be counterintuitive. For example, use “I want to receive a promotional
        email” instead of “I don’t want to receive promotional email.”
      </li>
      <li>
        <strong>Use adequate touch targets.</strong> If you customize, make sure
        selections are adequately spaced for touch screens.
      </li>
      <li>
        <strong>Don’t mix default and tile variants.</strong> While tiles provide a better interaction affordance, they can appear to indicate preference when mixed.
      </li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Customize accessibly.</strong> If you customize the text inputs,
        ensure they continue to meet the the
        <a href="{{ site.baseurl }}/form-controls/">
          accessibility requirements that apply to all form controls.
        </a>
      </li>
      <li>
        <strong>Use a fieldset and legend for a checkbox group.</strong>
        Surround a related set of checkboxes with a <code>&lt;fieldset&gt;</code>.
        The <code>&lt;legend&gt;</code> provides context for the grouping.
        Do not use fieldset and legend for a single check.
      </li>
      <li>
        <strong>These custom checkboxes are accessible.</strong> The custom
        checkboxes here are accessible to screen readers because the default
        checkboxes are moved off-screen with <code>position: absolute; left: -999em</code>.
      </li>
      <li>
        <strong>Use semantic ids.</strong> Each input should have a semantic
        <code>id</code> attribute, and its corresponding label should have the
        same value in it’s <code>for</code> attribute.
      </li>
      <li>
        The <code>title</code> attribute can replace <code>&lt;label&gt;</code>.
      </li>
    </ul>
    <h4 class="usa-heading">Implementation</h4>
    <h5 id="component-settings-checkbox">Checkbox settings</h5>
    {% assign settings = site.data.settings.components.checkbox %}
    {% include settings-table-simple.html
      settings=settings.contents
    %}
    <h5 id="component-variants-checkbox">Checkbox variants</h5>
    <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
        <thead>
          <tr>
            <th scope="col" class="flex-6">Variant</th>
            <th scope="col" class="flex-6">Description</th>
          </tr>
        </thead>
        <tbody class="font-mono-2xs">
          <tr>
            <td data-title="Variant" class="flex-6">usa-checkbox__input--tile</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">
                Checkbox tiles provide a better interaction affordance and neatly group the label with the form control. They are useful in benefit applications and questionnaires, but should not be used in instances such as list filtering or for terms of service acceptance.
              </span>
            </td>
          </tr>
        </tbody>
      </table>
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
