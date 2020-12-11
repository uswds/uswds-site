---
permalink: /components/icon-list/
layout: styleguide
type: component
title: Icon list
category: Components
lead: A process list displays the steps or stages of important instructions or processes.
---

{% include code/preview.html component="icon-list" %}

<section class="site-component-section">
  {% include code/accordion.html component="icon-list" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="icon-list-docs">
      Guidance
    </button>
    <div id="icon-list-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h3>When to use the process list component</h3>
      <ul class="usa-content-list">
        <li><strong>Displaying high-level sequential steps.</strong> Use process lists to create a clear hierarchy and help users easily differentiate between individual steps or stages in a process.</li>
      </ul>
      <h3>When to consider something else</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Multi-page forms or wizards.</strong> Use the <a href="{{ site.baseurl }}/components/step-indicator">step indicator</a> component to help users work through a form or process that spans several different pages.
        </li>
        <li>
          <strong>When showing current status or progress.</strong> Use the <a href="{{ site.baseurl }}/components/step-indicator">step indicator</a> component to show the user the current step in a multi-step process.
        </li>
        <li>
          <strong>In-page navigation.</strong> Use the <a href="{{ site.baseurl }}/components/sidenav">side navigation</a> component to display the “sub-navigation” within a section or page of the website.
        </li>
        <li>
          <strong>The steps are non-sequential.</strong> Use <a href="{{ site.baseurl }}/typography/03-lists">unordered lists</a>, graphic lists (coming soon), or icon lists (coming soon) to display text that doesn’t have a clear, logical order to it.
        </li>
        <li>
          <strong>The listed content is meant to improve readability of a complex sentence.</strong> Use the <a href="{{ site.baseurl }}/typography/03-lists">ordered and unordered list</a> components to break up sentences and paragraphs with lists. These lists are part of the general content of the page and don’t need the typographical hierarchy or visual impact of the process list.
        </li>
      </ul>
      <h3>Usability guidance</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Be thoughtful about the number steps.</strong> A process list should include between 3 and 10 steps to prevent it from getting too unwieldy or confusing.
        </li>
        <li>
          <strong>Use consistent headings.</strong> Headings should be written with a parallel structure (e.g., all start with an action verb, etc.), including consistent end punctuation, and should be short enough to fit on one line, if possible.
        </li>
        <li>
          <strong>Add other types of content as needed.</strong> The body of each list item can be used to display additional rich text content including HTML, images, and other components like buttons, images, simple lists, links, and tables.
        </li>
      </ul>
      <h3 class="usa-heading">Accessibility</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Use semantic heading levels.</strong> Though our default code uses an <code>&lt;h4&gt;</code>, use the correct heading level with the class name <code>usa-icon-list__heading</code> in your own implementation.
        </li>
      </ul>
      <h3 class="usa-heading">Implementation</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Use counters to reinforce step progression. </strong> The counter pattern (step numbers in a circle) attracts more attention to the indicator bar, but more strongly communicates step-by-step progression. Use counters when you want to reinforce step progression. Omit them if testing proves that this reinforcement is unnecessary for your audience.
        </li>
        <li>
          <strong>Omit labels with verbose content.</strong> Aim for clear and crisp labels. Omit labels to save space or if the step names are too long to comfortably fit in the step indicator.
        </li>
        <li>
          <strong>Use the centered variant with centered content and headings.</strong> The centered variant is designed to complement centered content and headings. If you have left-aligned content and headings, use the default alignment.
        </li>
        <li>
          <strong>Center the heading with utilities.</strong> Use the <code>flex-justify-center</code> utility on <code>usa-step-indicator__header to center</code> the heading.
        </li>
        <li>
          <strong>Centered counters need narrower gaps and a thinner segment.</strong>  If you use a centered variant with counters, you should use a narrower gap (2px is a good starting point) to increase the continuity between segments. A narrower counter gap (again, 2px is a good starting point) can also improve legibility. Centered counters can also benefit from a  thinner segment, as the centered variant focusses emphasis on the counter instead of the segment.
        </li>
        <li>
          <strong>Pending text should use gray.</strong> Pending text should use the gray family that complements the background and the pending segment colors. Use warm grays with warm backgrounds and segments, and cool grays with cool backgrounds and segments.
        </li>
        <li>
          <strong>Pending segments can use gray or complete family.</strong> Pending segments can use gray, just as with pending text, but they can also use a light grade of the complete color family.
        </li>
        <li>
          <strong>The current color can be a contrast color.</strong> The current color can be in the same family as the complete color or it can be a contrast color that distinguishes itself from the complete color.
        </li>
        <li>
          <strong>Thicker segments use wider counter gaps.</strong> It can be distracting to use a thick segment with a narrow counter gap. Use a gap of at least 0.5 units on a 1 unit segment.
        </li>
        <li>
          <strong>Avoid wide counter gaps.</strong> Counter gaps cap improve legibility of the counters, but wide counter gaps hurt the overall continuity between the counters and the segments.
        </li>
      </ul>
      <h4 id="component-settings">Process list settings</h4>
      {% assign settings = site.data.settings.components.icon-list %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-icon-list</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>


