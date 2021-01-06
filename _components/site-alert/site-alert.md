---
permalink: /components/site-alert/
redirect_from:
- /site-alert/
- /components/site-alerts/
layout: styleguide
type: component
title: Site alert
category: Components
lead: A site alert communicates urgent sitewide information.
---

When your agency has urgent information to share with the public, it’s essential that it stands out from other content on the site. A site alert prominently displays critical, time-sensitive warnings or directions across every page so that users see it whenever they visit the site. Using the same site alert treatment across agencies helps create a consistent and predictable way for users to find urgent information across all government websites.

{% include code/preview.html component="site-alert" %}

<section class="site-component-section">
  {% include code/accordion.html component="site-alert" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="alert-docs">
      Guidance
    </button>
    <div id="alert-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the site alert component</h4>
      <ul class="usa-content-list">
        <li><strong>Critical system notifications.</strong> Use a site alert to deliver a static system status update, such as notices about unavailable services or content. Site alerts should appear by default and not in response to an action.</li>
        <li><strong>Messages that should be displayed on every page.</strong> A site alert makes critical information obvious and findable on every page.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>Responding to user actions.</strong> Use the <a href="{{ site.baseurl }}/components/alert/">alert</a> component for page-level validation messages (like error messages on a form) or to inform a user that a task was completed successfully.</li>
        <li><strong>Validating form input.</strong> On most forms, especially longer forms, validation messages should appear inline with error messages at the top of the form.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Place prominently.</strong> Use a full-width site alert positioned near the top of the page so it's one of the first things users see.</li>
        <li><strong>Avoid stacking multiple site alerts.</strong> If you need to convey more than one message, provide a list of links within a single site alert instead of multiple, stacked alerts.</li>
        <li><strong>Avoid overwhelming use of color.</strong> It may be tempting to make heavy use of bright red or orange to draw attention to an emergency-related site alert. However, these colors can produce strong negative emotional reactions such as fear or panic. Positioning the banner at the top of the screen provides enough weight that such strong colors may not be necessary.</li>
      </ul>
      <h4>Accessibility</h4>
      <ul class="usa-content-list">
        <li><strong>Don’t visually hide alert messages and then make them visible when they are needed.</strong> Users of older assistive technologies may still be able to perceive hidden alert messages. Fully remove alert messages when they’re not needed.</li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>
      <h5 id="component-settings">Site Alert settings</h5>
      {% assign settings = site.data.settings.components.site-alert %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h5 id="component-variants">Site Alert variants</h5>
      <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
        <thead>
          <tr>
            <th scope="col" class="flex-6">Variant</th>
            <th scope="col" class="flex-6">Description</th>
          </tr>
        </thead>
        <tbody class="font-mono-2xs">
          <tr>
            <td data-title="Variant" class="flex-6">usa-site-alert--info</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Display an informational status site alert</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-site-alert--emergency</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Display an emergency status site alert</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-site-alert--slim</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Display a slimmer version of the site alert</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-site-alert--no-icon</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Display an site alert without an icon</span>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-site-alert</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
