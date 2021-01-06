---
component:
  status: ready
  package: usa-tk
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
---

<div class="site-note"><strong>Note:</strong> If you are a building a form with multiple controls, also consider the <a href="{{ site.baseurl }}/form-templates/">accessibility guidelines in the “Form Templates” section</a>.</div>

{% include accessibility.html %}
<div id="settings" class="site-component-section">
  <h3>Form settings</h3>
  {% assign settings = site.data.settings.components.form %}
  {% include settings-table-simple.html
    settings=settings.contents
  %}
</div>