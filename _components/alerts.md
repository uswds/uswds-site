---
permalink: /components/alerts/
redirect_from:
- /alerts/
layout: styleguide
type: component
title: Alerts
category: Components
lead: Alerts keep users informed of important and sometimes time-sensitive changes.
---

{% include code/preview.html component="alerts" %}
{% include code/accordion.html component="alerts" %}
<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="alert-docs">
    Usage
  </button>
  <div id="alert-docs" aria-hidden="false" class="usa-accordion__content usa-prose site-prose">
    <h4>When to use the alert component</h4>
    <ul class="usa-content-list">
      <li><strong>System status messages.</strong> As a notification that keeps people informed of the status of the system and which may or may not require the user to respond. This includes errors, warnings, and general updates.</li>
      <li><strong>Validation messages.</strong> As a validation message that alerts someone that they just did something that needs to be corrected or as confirmation that a task was completed successfully.</li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li><strong>Long forms.</strong> On long forms, always include in-line validation in addition to any error messages that appear at the top of the form. </li>
      <li><strong>Destructive actions.</strong> If an action will result in destroying a user’s work (for example, deleting an application) use a more intrusive pattern, such as a confirmation modal dialogue, to allow the user to confirm that this is what they want.</li>
    </ul>
    <h4>Usability guidance</h4>
    <ul class="usa-content-list">
      <li>When the user is required to do something in response to an alert, let them know what they need to do and make that task as easy as possible. Think about how much context to provide with your message. For example, a notification of a system change may require more contextual information than a validation message. Write the message in concise, human readable language; avoid jargon and computer code.</li>
      <li>Be polite in error messages — don’t place blame on the user.</li>
      <li>Users will read a message that helps them resolve an error even if they generally won’t read documentation; include some educational material in your error message.</li>
      <li>But don’t overdo it — too many notifications will either overwhelm or annoy the user and are likely to be ignored.</li>
      <li>Allow a user to dismiss a notification wherever appropriate.</li>
      <li>Don’t include notifications that aren’t related to the user’s current goal.</li>
    </ul>
    <h4>Accessibility</h4>
    <ul class="usa-content-list">
      <li>If the message is not interactive, use the ARIA <code>role=<wbr>"alert"</code> to inform assistive technologies of a time-sensitive and important message. If the message is interactive, use the use the ARIA <code>role=<wbr>"alertdialog"</code> instead.</li>
      <li>Do not visually hide alert messages on the page and then make them visible when they are needed. Users of older assistive technologies may still be able to perceive the alert messages even if they are not currently applicable.</li>
    </ul>
  </div>
</div>
