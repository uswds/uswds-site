---
component:
  status: ready
  package: usa-form
  dependencies:
permalink: /components/form/
redirect_from:
- /form-controls/
- /components/form-controls/
layout: styleguide
type: component
title: Form
category: Components
lead: A form allows users to enter information into a page.
subnav:
- text: General accessibility guidance for forms
  href: '#general-accessibility-guidance-for-forms'
- text: Known issues with screen readers
  href: '#known-issues-with-screen-readers'
- text: Latest updates
  href: '#changelog'
changelog:
  key: component-form
---

<div class="site-note"><strong>Note:</strong> If you are a building a form with multiple controls, also consider the <a href="{{ site.baseurl }}/form-templates/">accessibility guidelines on the “Form Templates” page</a>.</div>

{% include forms-guidance.html %}

<div id="settings" class="usa-prose site-prose margin-top-5">
  <h3 class="usa-heading heading-margin-alt">Form settings</h3>
  {% assign settings = site.data.settings.components.form %}
  {% include settings-table-simple.html
    settings=settings.contents
  %}
</div>
