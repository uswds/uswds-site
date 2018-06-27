---
permalink: /utilities/clearfix/
layout: styleguide
type: utility
title: Clearfix
category: Utilities
lead: Clear any floated elements
---

<section class="utilities-section">
  <div class="grid-row utilities-section-title-bar">
    <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-ink text-no-wrap">advanced settings</a>.</p>
  </div>

  <section class="utility" id="utility-clearfix">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Clearfix</h3>
        </div>
        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section><!-- .utility-title-bar -->

    <section class="utility-examples">
      <div class="clearfix border-1px">
        <p class="float-left bg-secondary-light padding-2">.float-left</p>
        <p class="float-right bg-secondary-light padding-2">.float-right</p>
      </div>
      <div class="usa-accordion-bordered usa-code-sample margin-top-4">
        <button class="usa-accordion-button" aria-controls="code-clearfix" aria-expanded="true">Code</button>
        <div id="code-clearfix" class="usa-accordion-content margin-bottom-1">
<div markdown="1">
```html
<div class="clearfix">
  <p class="float-left">.float-left</p>
  <p class="float-right">.float-right</p>
</div>
```
</div>
        </div>
      </div>
    </section><!-- .utility-examples -->
  </section><!-- .utility#clearfix -->
</section><!-- .utilities -->

{% include utilities/responsive-variants.html %}

{% include utilities/state-variants.html %}

<section class="utilities-section">
  <h2 class="utilities-section-title">Default output</h2>
  <div class="grid-row font-sans-1 text-bold border-bottom padding-bottom-05 margin-top-2 border-base-light">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-6">Output SCSS</div>
    <div class="grid-col-2">Default variable value</div>
  </div>
  <dl class="output-list">
    <dt class="output-utility">.clearfix</dt>
    <dd class="output-css">
      ::after {<br>
      &nbsp;&nbsp;clear: both;<br>
      &nbsp;&nbsp;content: "";<br>
      &nbsp;&nbsp;display: block;<br>
      }
    </dd>
    <dd class="output-variable">—</dd>
  </dl>
</section>

{% include utilities/advanced-settings.html %}
