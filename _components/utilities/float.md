---
permalink: /utilities/float/
layout: styleguide
type: utility
title: Float
category: Utilities
lead: Float an item within a layout flow.

subnav:
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         float
  var:          float
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
---

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="property utilities-property">float</span>
  </div>
</div>

<section class="utilities-section">

  <div class="grid-row flex-align-center margin-bottom-2">
    <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#advanced-settings" class="text-ink text-no-wrap">advanced settings</a>.</p>
  </div>

  <section class="utility" id="utility-float">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Float</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">float</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>

    <section class="utility-examples">
      <div class="clearfix">
        <p class="float-none bg-base-lighter padding-2"><span class="utility-class">.float-none</span></p>
      </div>
      <div class="clearfix">
        <p class="float-left bg-base-lighter padding-2"><span class="utility-class">.float-left</span></p>
      </div>
      <div class="clearfix">
        <p class="float-right bg-base-lighter padding-2"><span class="utility-class">.float-right</span></p>
      </div>
    </section>
  </section>
</section>

<section class="utilities-section">
  <h2 class="utilities-section-title">Default output</h2>
  <div class="grid-row font-sans-1 text-bold border-bottom-1px padding-bottom-05 margin-top-2 border-base-light">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-6">Output SCSS</div>
    <div class="grid-col-2">Default variable value</div>
  </div>
  <dl class="output-list">
    <dt class="output-utility">.float-none</dt>
    <dd class="output-css">float: none</dd>
    <dd class="output-variable">—</dd>
    <dt class="output-utility">.float-left</dt>
    <dd class="output-css">float: left</dd>
    <dd class="output-variable">—</dd>
    <dt class="output-utility">.float-right</dt>
    <dd class="output-css">float: right</dd>
    <dd class="output-variable">—</dd>
  </dl>
</section>

<section id="utility-mixins" class="padding-top-4">
  <h2 class="site-h2 margin-y-0">Utility mixins</h2>
  {% include utilities/utility-mixin-intro.html %}

  <div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2 margin-top-3">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-4">Mixin</div>
    <div class="grid-col-4">Example</div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.float-<code>value</code></div>
    <div class="grid-col-4">u-float(<code>value</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-float('left')</span>
      <span class="display-block margin-top-1">u-float('none')</span>
    </div>
  </div>

  {% include utilities/utility-mixin-using.html %}
</section>

<section id="advanced-settings" class="padding-top-4">
<h2 class="site-h2 margin-y-0">Advanced settings</h2>

  {% include utilities/responsive-variants.html %}

  {% include utilities/state-variants.html %}

  {% include utilities/output-control.html %}

  <section class="utilities-section margin-top-6">
    {% include utilities/values-intro.html %}
    {% include utilities/values-no-palettes.html %}
  </section>
</section>
