---
permalink: /utilities/shadow/
layout: styleguide
type: utility
title: Shadow
category: Utilities
lead: Set size of an item’s drop shadow
subnav:
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         shadow
  var:          box-shadow
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        true
  visited:      false
---

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="token utilities-property">box-shadow</span>
  </div>
</div>

<section class="utilities-section">
  <div class="grid-row flex-align-center margin-bottom-2">
    <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#advanced-settings" class="text-ink text-no-wrap">advanced settings</a>.</p>
  </div>

  <section class="utility" id="box-shadow">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Shadow</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">box-shadow</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section><!-- utility-title-bar -->

    <section class="utility-examples">
      <div class="grid-row">
        <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          <div class="bg-secondary-light display-inline-block">
            <div class="square-9 bg-white shadow-none"></div>
          </div>
          <p class="utility-class margin-top-3">.shadow-none</p>
        </div>
        <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          <div class="bg-secondary-light display-inline-block">
            <div class="square-9 bg-white shadow-1"></div>
          </div>
          <p class="utility-class margin-top-3">.shadow-1</p>
        </div>
        <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          <div class="bg-secondary-light display-inline-block">
            <div class="square-9 bg-white shadow-2"></div>
          </div>
          <p class="utility-class margin-top-3">.shadow-2</p>
        </div>
        <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          <div class="bg-secondary-light display-inline-block">
            <div class="square-9 bg-white shadow-3"></div>
          </div>
          <p class="utility-class margin-top-3">.shadow-3</p>
        </div>
        <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          <div class="bg-secondary-light display-inline-block">
            <div class="square-9 bg-white shadow-4"></div>
          </div>
          <p class="utility-class margin-top-3">.shadow-4</p>
        </div>
        <div class="utility-example-container grid-col-fill text-center display-flex flex-column flex-justify flex-align-start">
          <div class="bg-secondary-light display-inline-block">
            <div class="square-9 bg-white shadow-5"></div>
          </div>
          <p class="utility-class margin-top-3">.shadow-5</p>
        </div>
      </div>
    </section><!-- utility-examples -->
  </section><!-- utility -->
</section><!-- utilities-section -->

<section class="utilities-section">
  <h2 class="utilities-section-title">Default output</h2>
  <div class="grid-row font-sans-1 text-bold border-bottom padding-bottom-05 margin-top-2 border-base-light">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-6">Output SCSS</div>
    <div class="grid-col-2">Default variable value</div>
  </div>
  <dl class="output-list">
    <dt class="output-utility">.shadow-none</dt>
    <dd class="output-css">box-shadow: none</dd>
    <dd class="output-variable">—</dd>
    <dt class="output-utility">.shadow-1</dt>
    <dd class="output-css">box-shadow: <span class="output-token">box-shadow(1)</span></dd>
    <dd class="output-variable">0 1px units(0.5) 0 rgba(0, 0, 0, 0.1)</dd>
    <dt class="output-utility">.shadow-2</dt>
    <dd class="output-css">box-shadow: <span class="output-token">box-shadow(2)</span></dd>
    <dd class="output-variable">0 units(0.5) units(1) 0 rgba(0, 0, 0, 0.1)</dd>
    <dt class="output-utility">.shadow-3</dt>
    <dd class="output-css">box-shadow: <span class="output-token">box-shadow(3)</span></dd>
    <dd class="output-variable">0 units(1) units(2) 0 rgba(0, 0, 0, 0.1)</dd>
    <dt class="output-utility">.shadow-4</dt>
    <dd class="output-css">box-shadow: <span class="output-token">box-shadow(4)</span></dd>
    <dd class="output-variable">0 units(1.5) units(3) 0 rgba(0, 0, 0, 0.1)</dd>
    <dt class="output-utility">.shadow-5</dt>
    <dd class="output-css">box-shadow: <span class="output-token">box-shadow(5)</span></dd>
    <dd class="output-variable">0 units(2) units(4) 0 rgba(0, 0, 0, 0.1)</dd>
  </dl>
</section>

<section id="utility-mixins" class="padding-top-4">
  <h2 class="margin-y-0">Utility mixins</h2>
  {% include utilities/utility-mixin-intro.html %}

  <div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2 margin-top-3">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-4">Mixin</div>
    <div class="grid-col-4">Example</div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.shadow-<code>value</code></div>
    <div class="grid-col-4">u-shadow(<code>value</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-shadow(1)</span>
      <span class="display-block margin-top-1">u-shadow('none')</span>
    </div>
  </div>

  {% include utilities/utility-mixin-using.html %}
</section>

<section id="advanced-settings" class="padding-top-4">
<h2 class="margin-y-0">Advanced settings</h2>

  {% include utilities/responsive-variants.html %}

  {% include utilities/state-variants.html %}


  {% include utilities/output-control.html %}

  <section class="utilities-section margin-top-6">
    {% include utilities/values-intro.html %}
    {% include utilities/values-no-palettes.html %}
  </section>
</section>
