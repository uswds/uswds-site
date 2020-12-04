---
title: Radio buttons
parent: Form controls
order: 09
lead: Radio buttons allow users to select exactly one choice from a group.
---

<p>Radio buttons are a common way to let users know to make a single selection from a list of options. Only one radio button can be selected at a time within the same group. They also spell out each possible choice as its own item, with its own label (whereas <a href="#checkbox">checkboxes</a> show a single label and the checking/unchecking of that item means opposite things). For example, if the question was, “Do you prefer blue or red?” the radio button options would be “blue” or “red.” </p>

<p>Users can’t “unselect” a radio button after they’ve selected it. One way to remedy this is to add a “none of the above” option to a radio button group, which essentially allows users to “unselect” a radio button they’ve already clicked on.</p>

{% include code/preview.html component="radio-buttons" %}
{% include code/accordion.html component="radio-buttons" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="radio-docs">
    Guidance
  </button>
  <div id="radio-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use the radio button component</h4>
    <ul class="usa-content-list">
      <li>
        <strong>To display a single selection.</strong> When users need to select only one option from a set of mutually exclusive choices.
      </li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Multiple selections.</strong>  If users need to select more than one option or if there’s only one item to select, use <a href="#checkbox">checkboxes</a> instead. 
      </li>
      <li>
        <strong>Limited space.</strong> Consider a <a href="#dropdown">dropdown</a> if you don’t have enough space to list out all available options.
      </li>
      <li>
        <strong>Selecting none.</strong> If users should be able to select zero of the options or change their mind and unselect an option, consider using checkboxes. You can also choose to add a “none of the above” option to the radio button group instead.
      </li>
    </ul>
    <h4>Usability guidance</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Use the label as a target.</strong> Users should be able to select either the text label or the radio button to select or deselect an option.
      </li>
      <li>
        <strong>List items vertically.</strong> Vertically-listed options are easier to read than those that are listed horizontally. A horizontal layout can make it difficult to tell which label belongs to which radio button.
      </li>
      <li>
        <strong>Use adequate spacing.</strong> Make sure selections are adequately spaced for touch screens. Consider using the tile variant for larger touch targets.
      </li>
      <li>
        <strong>Set default values with caution.</strong> Setting a default value can bias a decision, seem pushy, or alienate users who don’t fit your assumptions. Only use a default selection if you have data to back it up.
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
        <strong>Customize accessibly.</strong> If you customize the radio buttons, ensure they continue to meet the accessibility requirements that apply to all form controls.
      </li>
      <li>
        <strong>Use fieldset and legend.</strong> Group related radio buttons together with <code>&lt;fieldset></code> and describe the group with <code>&lt;legend&gt;</code>.
      </li>
      <li>
        <strong>Use proper labels and attributes.</strong> Each radio button should have a  <code>&lt;label&gt;</code>. Associate the two by matching the <code>&lt;label&gt;</code>’s <code>for</code> attribute to the
        <code>&lt;input&gt;</code>’s <code>id</code> attribute.
      </li>
    </ul>
    <h4 class="usa-heading">Implementation</h4>
    <h5 id="radio-buttons-settings">Radio buttons settings</h5>
    {% assign settings = site.data.settings.components.radio %}
    {% include settings-table-simple.html
      settings=settings.contents
    %}
    <h5 id="radio-buttons-variants">Radio buttons variants</h5>
    <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="radio-buttons-variants">
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
