---
permalink: /utilities/clearfix/
layout: styleguide
type: utility
title: Clearfix
category: Utilities
lead: Clear any floated elements
---

<div class="size-sans-4 weight-300">

  <h3 class="grid-col size-sans-micro text-normal text-medium text-uppercase text-ls-1 margin-y-0 margin-left-2px">CSS properties</h3>
  <div class="margin-top-1">
    <span class="token display-inline-block text-no-uppercase text-ls-auto padding-05 margin-top-05">clear</span>
  </div>

  <section class="border-top-1px padding-top-1 margin-top-4">
    <div class="grid-row flex-align-center margin-bottom-2">
      <h2 class="grid-col-auto margin-0 text-light size-sans-8">Examples and usage</h2>
      <p class="grid-col-fill text-right size-sans-1 text-normal margin-y-0 margin-left-2px text-gray-60">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-text text-no-wrap">advanced settings</a>.</p>
    </div>
    <section class="bg-white padding-2 radius-md margin-y-2 border-1px border-gray-10">
      <section class="margin-x-neg-2 margin-bottom-2 padding-x-2 padding-bottom-105 border-bottom-1px border-gray-10">
        <div class="grid-row">
          <h3 class="grid-col-auto size-sans-6 margin-top-0 margin-bottom-105">Clearfix</h3>
          <ul class="grid-col-fill text-right add-list-reset display-inline">
            <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">responsive</li>
            <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">active</li>
            <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">hover</li>
            <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">focus</li>
            <li class="display-inline-block padding-y-05 padding-x-105 border-1px text-gray-20 radius-md margin-right-05 is-inverse text-strike">visited</li>
          </ul>
        </div>
      </section>
      <div class="clearfix border-1px">
        <p class="float-left bg-base-lighter padding-2">.float-left</p>
        <p class="float-right bg-base-lighter padding-2">.float-right</p>
      </div>
      <section class="border-top-1px padding-top-1 margin-top-4 margin-bottom-2">
        <h3 class="margin-0 text-light size-sans-6">Markup</h3>
      </section>
<pre class="margin-0 text-pre-wrap"><code>&lt;div class="clearfix border-1px"&gt;
  &lt;p class="float-left bg-base-lighter padding-2"&gt;.float-left&lt;/p&gt;
  &lt;p class="float-right bg-base-lighter padding-2"&gt;.float-right&lt;/p&gt;
&lt;/div&gt;</code></pre>
    </section>
  </section>

  <section class="border-top-1px padding-top-1 margin-top-4">
    <h2 class="margin-0 text-light size-sans-8">Responsive variants</h2>
  </section>

  <section class="border-top-1px padding-top-1 margin-top-4">
    <h2 class="margin-0 text-light size-sans-8"><span class="size-mono-6 padding-x-05 padding-y-2px border-1px display-inline-block radius-md margin-right-2px">hover</span>, <span class="size-mono-6 padding-x-05 padding-y-2px border-1px display-inline-block radius-md margin-right-2px">active</span>, <span class="size-mono-6 padding-x-05 padding-y-2px border-1px display-inline-block radius-md margin-right-2px">focus</span>, and <span class="size-mono-6 padding-x-05 padding-y-2px border-1px display-inline-block radius-md margin-right-2px">visited</span> variants</h2>
  </section>

  <section class="border-top-1px padding-top-1 margin-top-4">
    <h2 class="margin-0 text-light size-sans-8">Default output</h2>
    <div class="grid-row size-sans-1 text-bold border-bottom-1px padding-bottom-05 margin-top-2 border-gray-20">
      <div class="grid-col-4">Utility</div>
      <div class="grid-col-6">Output SCSS</div>
      <div class="grid-col-2">Default variable value</div>
    </div>
    <dl class="output-list">
      <dt class="output-utility">.clearfix</dt>
      <dd class="output-css">
        u-clearfix::after {<br>
        &nbsp;&nbsp;clear: both;<br>
        &nbsp;&nbsp;content: "";<br>
        &nbsp;&nbsp;display: block;<br>
        }
      </dd>
      <dd class="output-variable">—</dd>
    </dl>
  </section>

  <section class="border-top-1px padding-top-1 margin-top-4">
    <h2 class="margin-0 text-light size-sans-8">Advanced settings</h2>
  </section>
</div>
