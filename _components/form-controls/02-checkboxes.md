---
title: Checkbox
parent: Form controls
order: 02
lead: Checkboxes allow users to select one or more options from a visible list.
---

<p>Checkboxes are an easily understandable way to indicate that users can select one or more answers to a question or items from a list. They’re always followed by a label or instructions that clearly indicate what checking the box represents. </p>

<p>Each checkbox has two different states: selected or unselected, which are similar to an on and off switch. If a checkbox label says “Yes, send me an email,” it’s clear what checking that box (or not checking it) will accomplish. </p>

<p>Checkboxes also visibly show users what’s been selected and makes it easy for them to “uncheck” an option, which can be difficult with other selection methods on a form (such as radio buttons or dropdown boxes). It’s common to include “check all that apply” instructions with checkboxes to let users know it’s okay to select more than one option at a time. </p>

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
        <strong>To display multiple answers.</strong> When a user can select any number of choices from a list.
      </li>
      <li>
        <strong>To allow users to toggle answers.</strong> When a user needs to acknowledge acceptance of something (like terms of service) or switch between two opposite states, such as unchecked = “no” and checked = “yes.” 
      </li>
    </ul>
    <h4>When to consider something different</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Single-select only.</strong> If a user can only select one option from a list of many, use <a href="#radio-buttons">radio buttons</a> instead.
      </li>
    </ul>
    <h4>Usability guidelines</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Make the label selectable.</strong> Users should be able to select either the text label or the checkbox to select or deselect an option.
      </li>
      <li>
        <strong>List options vertically.</strong> Horizontal listings can make it difficult to tell which label pertains to which checkbox.
      </li>
      <li>
        <strong>Use positive statements.</strong> Negative language in labels can be counterintuitive. For example, use “I want to receive a promotional email” instead of “I don’t want to receive a promotional email.”
      </li>
      <li>
        <strong>Use logical labels.</strong> Make sure that the label makes both states — checked and unchecked — clear to the user. If that’s not possible, consider using a <a href="#radio-buttons">radio button</a> with two individual options instead. Then both states can have their own clearly marked label.
      </li>
      <li>
        <strong>Use adequate touch targets.</strong> Make sure selections are adequately spaced for touch screens. Consider using the tile variant for larger touch targets.
      </li>
      <li>
        <strong>Don’t mix default and tile variants.</strong> Pick one implementation and stick with it. When mixed, tiles can appear to indicate a bias or preference toward that option.
      </li>
      <li>
        <strong>Use a logical order.</strong> Make sure the selection options are organized in a meaningful way, like alphabetical or most-frequent to least-frequent. This helps users easily find the option they’re looking for.
      </li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Customize accessibly.</strong> If you customize the text inputs, ensure they continue to meet the accessibility requirements that apply to all form controls.
      </li>
      <li>
        <strong>Use a fieldset and legend for a checkbox group.</strong>
        Surround a related set of checkboxes with a <code>&lt;fieldset&gt;</code>.
        The <code>&lt;legend&gt;</code> provides context for the grouping. Don’t use fieldset and legend for a single check.
      </li>
      <li>
        <strong>These custom checkboxes are accessible.</strong> The custom checkboxes here are accessible to screen readers because the default checkboxes are moved off-screen with <code>position: absolute; left: -999em</code>.
      </li>
      <li>
        <strong>Use semantic tags.</strong> Each input should have a semantic tag for the <code>id</code> attribute, and its corresponding label should have the same value in it’s <code>for</code> attribute. 
      </li>
    </ul>
    <h4 class="usa-heading">Implementation</h4>
    <h5 id="component-settings-checkbox">Checkbox settings</h5>
    {% assign settings = site.data.settings.components.checkbox %}
    {% include settings-table-simple.html
      settings=settings.contents
    %}
    <h5 id="component-variants-checkbox">Checkbox variants</h5>
    <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants-checkbox">
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
                Input tiles provide a larger interaction area and neatly group the label with the form control for readability. They’re useful in application forms and questionnaires, but may not be recommended when they create clutter on the page. 
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
