---
permalink: /utilities/border-and-outline/
layout: styleguide
type: utility
title: Border and outline
category: Utilities
lead: Set a solid border and its thickness and color
subnav:
- text: Borders
  href: '#borders'
- text: Border styles
  href: '#border-styles'
- text: Border widths
  href: '#border-widths'
- text: Border colors
  href: '#border-colors'
- text: Border radius
  href: '#border-radius'
---

The border utility class sets the `border-color` and `border-size`, with support for the following sizes: `0`, `1px`, `2px`, `05` (4px), `1` (8px), `2` (16px), `3` (24px).
{: .measure-3}

**Format:** `border-[LOCATION]-[SIZE]`

**Format (full):** `border-[top|right|bottom|left|x|y]-[0|1px|2px|05|1|2|3]`

<div class="font-sans-4 weight-300">
  <h3 class="grid-col font-sans-micro text-normal text-medium text-uppercase text-ls-1 margin-y-0 margin-left-2px">CSS properties</h3>
  <div class="margin-top-1">
    <span class="token display-inline-block text-no-uppercase text-ls-auto padding-05 margin-top-05">border</span>
    <span class="token display-inline-block text-no-uppercase text-ls-auto padding-05 margin-top-05">border-style</span>
    <span class="token display-inline-block text-no-uppercase text-ls-auto padding-05 margin-top-05">border-width</span>
    <span class="token display-inline-block text-no-uppercase text-ls-auto padding-05 margin-top-05">border-color</span>
    <span class="token display-inline-block text-no-uppercase text-ls-auto padding-05 margin-top-05">border-radius</span>
  </div>

  <section class="border-top-1px padding-top-1 margin-top-4">
    <div class="grid-row flex-align-center margin-bottom-2">
      <h2 class="grid-col-auto margin-0 text-light font-sans-8">Examples and usage</h2>
      <p class="grid-col-fill text-right font-sans-1 text-normal margin-y-0 margin-left-2px text-gray-60">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-text text-no-wrap">advanced settings</a>.</p>
    </div>
    <section class="bg-white padding-2 radius-md margin-y-2 border-1px border-gray-10 text-color" id="borders">
      <section class="margin-x-neg-2 margin-bottom-2 padding-x-2 padding-bottom-105 border-bottom-1px border-gray-10">
        <div class="grid-row">
        <h3 class="grid-col-auto font-sans-6 margin-top-0 margin-bottom-105">Borders</h3>
          <ul class="grid-col-fill text-right add-list-reset display-inline">
            <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">responsive</li>
            <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">active</li>
            <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">hover</li>
            <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">focus</li>
            <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">visited</li>
          </ul>
        </div>
      </section>
<div class="border-1px width-mobile bg-base-lighter padding-2 margin-bottom-2">.border-1px</div>
<div class="border-top-1px width-mobile bg-base-lighter padding-2 margin-bottom-2">.border-top-1px</div>
<div class="border-right-1px width-mobile bg-base-lighter padding-2 margin-bottom-2">.border-right-1px</div>
<div class="border-bottom-1px width-mobile bg-base-lighter padding-2 margin-bottom-2">.border-bottom-1px</div>
<div class="border-left-1px width-mobile bg-base-lighter padding-2 margin-bottom-2">.border-left-1px</div>
<div class="border-0 width-mobile bg-base-lighter padding-2 margin-bottom-2">.border-0</div>
    </section>
  </section>

  <section class="bg-white padding-2 radius-md margin-y-2 border-1px border-gray-10 text-color" id="border-styles">
    <section class="margin-x-neg-2 margin-bottom-2 padding-x-2 padding-bottom-105 border-bottom-1px border-gray-10">
      <div class="grid-row">
      <h3 class="grid-col-auto font-sans-6 margin-top-0 margin-bottom-105">Border styles</h3>
        <ul class="grid-col-fill text-right add-list-reset display-inline">
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">responsive</li>
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">active</li>
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">hover</li>
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">focus</li>
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">visited</li>
        </ul>
      </div>
    </section>
<div class="border-1px border-dashed width-mobile bg-base-lighter padding-2 margin-bottom-2">.border-dashed.border-1px</div>
<div class="border-1px border-dotted width-mobile bg-base-lighter padding-2 margin-bottom-2">.border-dotted.border-1px</div>
<div class="border-1px border-solid width-mobile bg-base-lighter padding-2 margin-bottom-2">.border-dotted.border-1px</div>
  </section>


  
  <section class="bg-white padding-2 radius-md margin-y-2 border-1px border-gray-10 text-color" id="border-widths">
    <section class="margin-x-neg-2 margin-bottom-2 padding-x-2 padding-bottom-105 border-bottom-1px border-gray-10">
      <div class="grid-row">
      <h3 class="grid-col-auto font-sans-6 margin-top-0 margin-bottom-105">Border widths</h3>
        <ul class="grid-col-fill text-right add-list-reset display-inline">
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">responsive</li>
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">active</li>
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">hover</li>
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">focus</li>
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">visited</li>
        </ul>
      </div>
    </section>
<!-- Border top -->
<h4>Border top widths</h4>
<div class="border-top-0 width-mobile bg-base-lighter margin-bottom-4">.border-top-0</div>
<div class="border-top-1px width-mobile bg-base-lighter margin-bottom-4">.border-top-1px</div>
<div class="border-top-2px width-mobile bg-base-lighter margin-bottom-4">.border-top-2px</div>
<div class="border-top-05 width-mobile bg-base-lighter margin-bottom-4">.border-top-05</div>
<div class="border-top-1 width-mobile bg-base-lighter margin-bottom-4">.border-top-1</div>
<div class="border-top-105 width-mobile bg-base-lighter margin-bottom-4">.border-top-105</div>
<div class="border-top-2 width-mobile bg-base-lighter margin-bottom-4">.border-top-2</div>
<div class="border-top-205 width-mobile bg-base-lighter margin-bottom-4">.border-top-205</div>
<div class="border-top-3 width-mobile bg-base-lighter margin-bottom-4">.border-top-3</div>

<!-- Border bottom -->
<h4>Border bottom widths</h4>
<div class="border-bottom-0 width-mobile bg-base-lighter margin-bottom-4">.border-bottom-0</div>
<div class="border-bottom-1px width-mobile bg-base-lighter margin-bottom-4">.border-bottom-1px</div>
<div class="border-bottom-2px width-mobile bg-base-lighter margin-bottom-4">.border-bottom-2px</div>
<div class="border-bottom-05 width-mobile bg-base-lighter margin-bottom-4">.border-bottom-05</div>
<div class="border-bottom-1 width-mobile bg-base-lighter margin-bottom-4">.border-bottom-1</div>
<div class="border-bottom-105 width-mobile bg-base-lighter margin-bottom-4">.border-bottom-105</div>
<div class="border-bottom-2 width-mobile bg-base-lighter margin-bottom-4">.border-bottom-2</div>
<div class="border-bottom-205 width-mobile bg-base-lighter margin-bottom-4">.border-bottom-205</div>
<div class="border-bottom-3 width-mobile bg-base-lighter margin-bottom-4">.border-bottom-3</div>

<!-- Border left -->
<h4>Border left widths</h4>
<div class="border-left-0 width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-left-0</div>
<div class="border-left-1px width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-left-1px</div>
<div class="border-left-2px width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-left-2px</div>
<div class="border-left-05 width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-left-05</div>
<div class="border-left-1 width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-left-1</div>
<div class="border-left-105 width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-left-105</div>
<div class="border-left-2 width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-left-2</div>
<div class="border-left-205 width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-left-205</div>
<div class="border-left-3 width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-left-3</div>

<!-- Border right -->
<h4>Border right widths</h4>
<div class="border-right-0 width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-right-0</div>
<div class="border-right-1px width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-right-1px</div>
<div class="border-right-2px width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-right-2px</div>
<div class="border-right-05 width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-right-05</div>
<div class="border-right-1 width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-right-1</div>
<div class="border-right-105 width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-right-105</div>
<div class="border-right-2 width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-right-2</div>
<div class="border-right-205 width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-right-205</div>
<div class="border-right-3 width-mobile bg-base-lighter margin-bottom-2 padding-2">.border-right-3</div>
  </section>

{% capture border_color %}
<div class="grid-row">
<div class="border-top-1px border-transparent width-mobile padding-y-1 margin-bottom-2">.border-transparent</div>
<div class="border-top-1px border-base-lightest width-mobile padding-y-1 margin-bottom-2">.border-base-lightest</div>
<div class="border-top-1px border-base-light border-base-lighter width-mobile padding-y-1 margin-bottom-2">.border-base-lighter</div>
<div class="border-top-1px border-base-light width-mobile padding-y-1 margin-bottom-2">.border-base-light</div>
<div class="border-top-1px border-base width-mobile padding-y-1 margin-bottom-2">.border-base</div>
<div class="border-top-1px border-base-dark width-mobile padding-y-1 margin-bottom-2">.border-base-dark</div>
<div class="border-top-1px border-base-darker width-mobile padding-y-1 margin-bottom-2">.border-base-darker</div>
<div class="border-top-1px border-base-darkest width-mobile padding-y-1 margin-bottom-2">.border-base-darkest</div>
<div class="border-top-1px border-primary-lighter width-mobile padding-y-1 margin-bottom-2">.border-primary-lighter</div>
<div class="border-top-1px border-primary-light width-mobile padding-y-1 margin-bottom-2">.border-primary-light</div>
<div class="border-top-1px border-primary width-mobile padding-y-1 margin-bottom-2">.border-primary</div>
<div class="border-top-1px border-primary-vivid width-mobile padding-y-1 margin-bottom-2">.border-primary-vivid</div>
<div class="border-top-1px border-primary-dark width-mobile padding-y-1 margin-bottom-2">.border-primary-dark</div>
<div class="border-top-1px border-primary-darker width-mobile padding-y-1 margin-bottom-2">.border-primary-darker</div>
<div class="border-top-1px border-secondary-light width-mobile padding-y-1 margin-bottom-2">.border-secondary-light</div>
<div class="border-top-1px border-secondary width-mobile padding-y-1 margin-bottom-2">.border-secondary</div>
<div class="border-top-1px border-secondary-vivid width-mobile padding-y-1 margin-bottom-2">.border-secondary-vivid</div>
<div class="border-top-1px border-secondary-dark width-mobile padding-y-1 margin-bottom-2">.border-secondary-dark</div>
<div class="border-top-1px border-accent-warm width-mobile padding-y-1 margin-bottom-2">.border-accent-warm</div>
<div class="border-top-1px border-accent-warm-dark width-mobile padding-y-1 margin-bottom-2">.border-accent-warm-dark</div>
<div class="border-top-1px border-accent-cool width-mobile padding-y-1 margin-bottom-2">.border-accent-cool</div>
<div class="border-top-1px border-accent-cool-dark width-mobile padding-y-1 margin-bottom-2">.border-accent-cool-dark</div>
<div class="border-top-1px border-black width-mobile padding-y-1 margin-bottom-2">.border-black</div>
<div class="border-top-1px border-white width-mobile padding-y-1 margin-bottom-2">.border-white</div>
<div class="border-top-1px border-gray-1 width-mobile padding-y-1 margin-bottom-2">.border-gray-1</div>
<div class="border-top-1px border-gray-5 width-mobile padding-y-1 margin-bottom-2">.border-gray-5</div>
<div class="border-top-1px border-gray-10 width-mobile padding-y-1 margin-bottom-2">.border-gray-10</div>
<div class="border-top-1px border-gray-30 width-mobile padding-y-1 margin-bottom-2">.border-gray-30</div>
<div class="border-top-1px border-gray-50 width-mobile padding-y-1 margin-bottom-2">.border-gray-50</div>
<div class="border-top-1px border-gray-70 width-mobile padding-y-1 margin-bottom-2">.border-gray-70</div>
<div class="border-top-1px border-gray-90 width-mobile padding-y-1 margin-bottom-2">.border-gray-90</div>
<div class="border-top-1px border-red width-mobile padding-y-1 margin-bottom-2">.border-red</div>
<div class="border-top-1px border-orange width-mobile padding-y-1 margin-bottom-2">.border-orange</div>
<div class="border-top-1px border-gold width-mobile padding-y-1 margin-bottom-2">.border-gold</div>
<div class="border-top-1px border-yellow width-mobile padding-y-1 margin-bottom-2">.border-yellow</div>
<div class="border-top-1px border-green width-mobile padding-y-1 margin-bottom-2">.border-green</div>
<div class="border-top-1px border-mint width-mobile padding-y-1 margin-bottom-2">.border-mint</div>
<div class="border-top-1px border-cyan width-mobile padding-y-1 margin-bottom-2">.border-cyan</div>
<div class="border-top-1px border-blue width-mobile padding-y-1 margin-bottom-2">.border-blue</div>
<div class="border-top-1px border-indigo width-mobile padding-y-1 margin-bottom-2">.border-indigo</div>
<div class="border-top-1px border-violet border-violet width-mobile padding-y-1 margin-bottom-2">.border-violet</div>
<div class="border-top-1px border-magenta border-magenta width-mobile padding-y-1 margin-bottom-2">.border-magenta</div>
</div>
{% endcapture %}

  <section class="bg-white padding-2 radius-md margin-y-2 border-1px border-gray-10 text-color" id="border-colors">
    <section class="margin-x-neg-2 margin-bottom-2 padding-x-2 padding-bottom-105 border-bottom-1px border-gray-10">
      <div class="grid-row">
      <h3 class="grid-col-auto font-sans-6 margin-top-0 margin-bottom-105">Border colors</h3>
        <ul class="grid-col-fill text-right add-list-reset display-inline">
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">responsive</li>
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">active</li>
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">hover</li>
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">focus</li>
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">visited</li>
        </ul>
      </div>
    </section>
<div class="grid-row">
  <div class="grid-col-6 padding-top-2">
    {{ border_color }}
  </div>
  <div class="grid-col-6 bg-black text-gray-10 padding-top-2 padding-left-3">
    {{ border_color }}
  </div>
</div>
  </section>

  
  <section class="bg-white padding-2 radius-md margin-y-2 border-1px border-gray-10 text-color" id="border-radius">
    <section class="margin-x-neg-2 margin-bottom-2 padding-x-2 padding-bottom-105 border-bottom-1px border-gray-10">
      <div class="grid-row">
      <h3 class="grid-col-auto font-sans-6 margin-top-0 margin-bottom-105">Border radius</h3>
        <ul class="grid-col-fill text-right add-list-reset display-inline">
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">responsive</li>
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">active</li>
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">hover</li>
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">focus</li>
          <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">visited</li>
        </ul>
      </div>
    </section>
<div class="border-1px radius-0 width-card padding-2 margin-bottom-4 margin-right-1 display-inline-block">radius-0</div>
<div class="border-1px radius-sm width-card padding-2 margin-bottom-4 margin-right-1 display-inline-block">radius-sm</div>
<div class="border-1px radius-md width-card padding-2 margin-bottom-4 margin-right-1 display-inline-block">radius-md</div>
<div class="border-1px radius-lg width-card padding-2 margin-bottom-4 margin-right-1 display-inline-block">radius-lg</div>
<div class="border-1px radius-pill width-card padding-2 margin-bottom-4 margin-right-1 display-inline-block">radius-pill</div>

<div class="border-1px radius-top-lg width-card padding-2 margin-bottom-4 margin-right-1 display-inline-block">radius-top-lg</div>
<div class="border-1px radius-right-lg width-card padding-2 margin-bottom-4 margin-right-1 display-inline-block">radius-right-lg</div>
<div class="border-1px radius-bottom-lg width-card padding-2 margin-bottom-4 margin-right-1 display-inline-block">radius-bottom-lg</div>
<div class="border-1px radius-left-lg width-card padding-2 margin-bottom-4 margin-right-1 display-inline-block">radius-left-lg</div>
  </section>

  <section class="border-top-1px padding-top-1 margin-top-4">
    <h2 class="margin-0 text-light font-sans-8">Responsive variants</h2>
  </section>
  <section class="border-top-1px padding-top-1 margin-top-4">
    <h2 class="margin-0 text-light font-sans-8"><span class="font-mono-6 padding-x-05 padding-y-2px border-1px display-inline-block radius-md margin-right-2px">hover</span>, <span class="font-mono-6 padding-x-05 padding-y-2px border-1px display-inline-block radius-md margin-right-2px">active</span>, <span class="font-mono-6 padding-x-05 padding-y-2px border-1px display-inline-block radius-md margin-right-2px">focus</span>, and <span class="font-mono-6 padding-x-05 padding-y-2px border-1px display-inline-block radius-md margin-right-2px">visited</span> variants</h2>
  </section>
  <section class="border-top-1px padding-top-1 margin-top-4">
    <h2 class="margin-0 text-light font-sans-8">Default output</h2>
    <div class="grid-row font-sans-1 text-bold border-bottom-1px padding-bottom-05 margin-top-2 border-gray-20">
      <div class="grid-col-4">Utility</div>
      <div class="grid-col-6">Output SCSS</div>
      <div class="grid-col-2">Default variable value</div>
    </div>
    <dl class="output-list">
      <dt class="output-utility">.shadow-none</dt>
      <dd class="output-css">box-shadow: none</dd>
      <dd class="output-variable">—</dd>
    </dl>
  </section>

  <section class="border-top-1px padding-top-1 margin-top-4">
    <h2 class="margin-0 text-light font-sans-8">Advanced settings</h2>
  </section>
</div>
