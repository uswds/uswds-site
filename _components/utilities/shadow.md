---
permalink: /utilities/shadow/
layout: styleguide
type: utility
title: Shadow
category: Utilities
lead: Set size of an item’s drop shadow
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
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-ink text-no-wrap">advanced settings</a>.</p>
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
    <dt class="output-utility">.shadow-none</dt>
    <dd class="output-css">box-shadow: none</dd>
    <dd class="output-variable">—</dd>
    <dt class="output-utility">.shadow-1</dt>
    <dd class="output-css">box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1)</dd>
    <dd class="output-variable">—</dd>
    <dt class="output-utility">.shadow-2</dt>
    <dd class="output-css">box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1)</dd>
    <dd class="output-variable">—</dd>
    <dt class="output-utility">.shadow-3</dt>
    <dd class="output-css">box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1)</dd>
    <dd class="output-variable">—</dd>
    <dt class="output-utility">.shadow-4</dt>
    <dd class="output-css">box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1)</dd>
    <dd class="output-variable">—</dd>
    <dt class="output-utility">.shadow-5</dt>
    <dd class="output-css">box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1)</dd>
    <dd class="output-variable">—</dd>
  </dl>
</section>

{% include utilities/output-control.html %}

<section class="utilities-section margin-top-6">
  {% include utilities/values-intro.html %}
</section>
