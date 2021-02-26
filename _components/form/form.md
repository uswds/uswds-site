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
- text: Preview
  href: '#tk-preview'
- text: Code
  href: '#tk-code'
- text: Guidance
  href: '#tk-guidance'
- text: Package
  href: '#tk-package'
---

<div class="site-note"><strong>Note:</strong> If you are a building a form with multiple controls, also consider the <a href="{{ site.baseurl }}/form-templates/">accessibility guidelines in the “Form Templates” section</a>.</div>

{% include accessibility.html %}
<div id="settings" class="usa-prose site-prose margin-top-5">
  <h3 class="usa-heading heading-margin-alt">Form settings</h3>
  {% assign settings = site.data.settings.components.form %}
  {% include settings-table-simple.html
    settings=settings.contents
  %}
</div>