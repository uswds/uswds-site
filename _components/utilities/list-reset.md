---
permalink: /utilities/list-reset/
layout: styleguide
type: utility
title: List reset
category: Utilities
lead: Reset default list styling
---

<div class="font-sans-4 weight-300">

  <section class="utilities-section">
    <div class="grid-row flex-align-center margin-bottom-2">
      <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
      <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-ink text-no-wrap">advanced settings</a>.</p>
    </div>

    <section class="utility">
      <section class="utility-title-bar">
        <div class="grid-row">
          <div class="grid-col-fill">
            <h3 class="grid-col-auto utility-title">List reset</h3>
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
        <div class="grid-row">
          <div class="utility-example-container-condensed grid-col display-flex flex-column flex-justify flex-align-start border-0">
            <div class="bg-secondary-light">
              <ul class="bg-white">
                <li>Red apples</li>
                <li>Yellow bananas</li>
                <li>Purple eggplants</li>
              </ul>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">default ul</p>
              <p class="utility-value">margin-y: 1em</p>
              <p class="utility-value">padding-left: 1.94em</p>
            </div>
          </div>
          <div class="utility-example-container-condensed grid-col display-flex flex-column flex-justify flex-align-start border-0">
            <ul class="add-list-reset">
              <li>Red apples</li>
              <li>Yellow bananas</li>
              <li>Purple eggplants</li>
            </ul>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">ul.add-list-reset</p>
              <p class="utility-value">margin-y: 0</p>
              <p class="utility-value">padding-left: 0</p>
              <p class="utility-value">list-style: none</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>

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
      <dt class="output-utility">.add-list-reset</dt>
      <dd class="output-css">
        <span>
          <span class="output-rule">list-style: none</span>
          <span class="output-rule">margin-bottom: 0</span>
          <span class="output-rule">margin-top: 0</span>
          <span class="output-rule">padding-left: 0</span>
        </span>
      </dd>
      <dd class="output-variable">—</dd>
    </dl>
  </section>

  {% include utilities/advanced-settings.html %}
