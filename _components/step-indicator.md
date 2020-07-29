---
permalink: /components/step-indicator/
layout: styleguide
type: component
title: Step Indicator
category: Components
lead: A step indicator tells users how many steps there are in a form or process and in which step they are currently participating.
---

{% include code/preview.html component="step-indicator" %}

<section class="site-component-section">
  {% include code/accordion.html component="step-indicator" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="sidenav-docs">
      Guidance
    </button>
    <div id="sidenav-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h3>When to use the side step indicator</h3>
      <ul class="usa-content-list">
        <li><strong>Multiple steps and screens.</strong> When the user is working through a form or process that will span several different pages that can be organized into three or more high-level steps or chapters. This helps users see the “light at the end of the tunnel” when completing long forms, and it helps reduce uncertainty as they complete each screen.</li>
      </ul>
      <h3>When to consider something else</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Complex forms with conditional logic.</strong>If the number of steps might change due to user input, this might not be the component you’re looking for. (Or, you may want to consider simplifying your form.)
        </li>
        <li>
          <strong>Very short forms.</strong> Don’t use a step indicator when there’s no need to break up a short form into chapters.
        </li>
      </ul>
      <h3>Usability guidance</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Use single-word labels.</strong> If placing labels below the step indicators, stick to very short 
        </li>
        <li>
          <strong>Provide navigation separately.</strong> <a href="{{ site.baseurl }}/components/button-groups">Button group</a> can allow users to step forward and backward through a form. Do not make the segments interactive, as the segments are not a large enough click/touch target.
        </li>
        <li>
          <strong>Place a heading directly below the step indicator. </strong> The step lines (even with labels) do not sufficiently serve as a heading for a screen or a form.
        </li>
        <li>
          <strong>Use “1 of X” left of the heading.</strong> This reinforces the number of total steps when there are many steps, and helps users keep track of where they are in the process.
        </li>
        <li>
          <strong>Indicate where a user is in the process. </strong> Use the same color for all steps before and after the user’s current step. Use a different color with sufficient contrast for the current step line.
        </li>
      </ul>
      <h3 class="usa-heading">Accessibility</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Use semantic heading levels</strong> Though the example above uses an <code>&lt;h2&gt;</code>, use the correct heading level and avoid improper nesting.
        </li>
        <li>
          <strong>Use <code>aria-label="progress"</code></strong> Placing this <code>aria-label</code> on the element with the class <code>usa-step-indicator</code> helps provide important context to screen readers.
        </li>
        <li>
          <strong>Use visually hidden text on labels</strong> Hidden text helps convey whether steps are completed or not completed. 
        </li>
        <li>
          <strong>Indicate the current step</strong> When using labeled segments, use <code>aria-current="true"</code> on the the list item representing the current step
        </li>
        <li>
          <strong>Hide unlabeled segments</strong> There is no content inside the segments when labels are not used, so it is safe to add <code>aria-hidden="true"</code> to the element with the class name <code>usa-step-indicator__segments</code>.
        </li>
      </ul>
      <h3 class="usa-heading">Implementation</h3>
      <ul class="usa-content-list">
        <li>
          <strong>No labeled segments if more than four steps.</strong> This component can’t accommodate more than four labels on mobile screens. If you have more than four steps, use the version without labeled segments.
        </li>
        <li>
          <strong>Pay attention to visually hidden text.</strong> Step indicator uses visual elements to convey information. Don’t forget to include text for screen readers.
        </li>
      </ul>
      <h4 id="component-settings">Step Inidcator settings</h4>
      {% assign settings = site.data.settings.components.step-indicator %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h4 id="component-variants">Side navigation variants</h4>
      <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
        <thead>
          <tr>
            <th scope="col" class="flex-6">Variant</th>
            <th scope="col" class="flex-6">Description</th>
          </tr>
        </thead>
        <tbody class="font-mono-2xs">
          <tr>
            <td data-title="Variable" class="flex-6">Labeled segments</td>
            <td data-title="Description" class="flex-6">
              <p class="font-lang-3xs">
                In each segement, place <code>&lt;span class="usa-step-indicator__segment-label"&gt;LABEL&lt;/span&gt;</code>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-step-indicator</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>


