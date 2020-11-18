---
permalink: /components/featured-content/
redirect_from:
- /featured-content/
- /components/featured-contents/
layout: styleguide
type: component
title: Featured Content
category: Components
lead: A featured content contains critical, time-sensitive warnings or directions that are important to call out separately from regular site content and carry a higher importance or urgency. They’re generally displayed on every page of the site.
---

{% include code/preview.html component="featured-content" %}
<section class="site-component-section">
  {% include code/accordion.html component="featured-content" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="alert-docs">
      Guidance
    </button>
    <div id="alert-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the featured content component</h4>
      <ul class="usa-content-list">
        <li><strong>Critical system notifications.</strong> Site alerts can be used to deliver a passive status about the system, such as notices about services or content being unavailable. They should appear by default and not in response to the user taking an action—which is what the <a href="https://designsystem.digital.gov/components/alert/">alerts</a> are for.</li>
        <li><strong>Messages that should be displayed on every page.</strong> If the message is important and should appear on every page, a well-positioned featured content makes the information obvious and accessible as the user navigates around the site.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>Responding to user actions.</strong> Rather than using a site alert, the <a href="https://designsystem.digital.gov/components/alert/">alert</a> component is useful for validation messages or informing a user that a task was completed successfully.</li>
        <li><strong>Validating form input.</strong> On most forms (especially longer forms), validation messages should appear inline and error messages at the top of the form.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Place prominently.</strong> The featured content should be full-width and positioned near the top of the page so that users read the message immediately upon viewing the site.</li>
        <li><strong>Avoid stacking multiple site alerts.</strong> If there’s more than one message to convey, provide a list of links within a single featured content component to display multiple, simultaneous messages.</li>
        <li><strong>Avoid overwhelming use of color.</strong> It may be tempting to make heavy use of red or orange to draw attention to the emergency alert banner. However, these colors <a href="https://www.alexandria.unisg.ch/248784/1/ECIS%202802.pdf">can produce emotional reactions</a> such as fear or panic. Positioning the banner at the top of the screen provides enough dominance that such strong colors may not be necessary. </li>
      </ul>
      <h4>Accessibility</h4>
      <ul class="usa-content-list">
        <li><strong>Use the proper ARIA role.</strong> If the message is not interactive, use the ARIA <code>role=<wbr>"alert"</code> to inform assistive technologies of a time-sensitive and important message. If the message is interactive, use the use the ARIA <code>role=<wbr>"alertdialog"</code> instead.</li>
        <li><strong>Don’t visually hide alert messages and then make them visible when they are needed.</strong> Users of older assistive technologies may still be able to perceive the alert messages even if they are not currently applicable.</li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>     
      <h5 id="component-variants">Featured Content variants</h5>
      <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
        <thead>
          <tr>
            <th scope="col" class="flex-6">Variant</th>
            <th scope="col" class="flex-6">Description</th>
          </tr>
        </thead>
        <tbody class="font-mono-2xs">
          <tr>
            <td data-title="Variant" class="flex-6">usa-featured-content--info</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Display an informational status site alert.</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-featured-content--emergency</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Display an emergency status site alert</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-featured-content--slim</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Display a slimmer version of the site alert</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-featured-content--no-icon</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Display an featured content without an icon</span>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-featured-content</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
