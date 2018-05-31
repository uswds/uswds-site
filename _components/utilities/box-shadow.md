---
permalink: /utilities/box-shadow/
layout: styleguide
type: utility
title: Box shadow
category: Utilities
lead: Set the box shadow
---

<div class="size-sans-4 weight-300">

  <h3 class="grid-col size-sans-micro text-normal text-medium text-uppercase text-ls-1 margin-y-0 margin-left-2px">CSS properties</h3>
  <div class="margin-top-1">
    <span class="token display-inline-block text-no-uppercase text-ls-auto padding-05 margin-top-05">box-shadow</span>
  </div>

  <section class="border-top-1px padding-top-1 margin-top-4">
    <div class="grid-row flex-align-center margin-bottom-2">
      <h2 class="grid-col-auto margin-0 text-light size-sans-8">Examples and usage</h2>
      <p class="grid-col-fill text-right size-sans-1 text-normal margin-y-0 margin-left-2px text-gray-60">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-text text-no-wrap">advanced settings</a>.</p>
    </div>

    <section class="text-color">
      <section class="bg-white padding-2 radius-md margin-y-2 border-1px border-gray-10">
        <section class="margin-x-neg-2 margin-bottom-2 padding-x-2 padding-bottom-105 border-bottom-1px border-gray-10">
          <div class="grid-row">
          <h3 class="grid-col-auto size-sans-6 margin-top-0 margin-bottom-105">Box shadow</h3>

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
          <div class="grid-col-3 text-center display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
            <div class="bg-secondary-light display-inline-block">
              <div class="square-9 border-1px bg-white shadow-none"></div>
            </div>
            <p class="text-center margin-top-105 margin-bottom-05">.shadow-none</p>
          </div>
          <div class="grid-col-3 text-center display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
            <div class="bg-secondary-light display-inline-block">
              <div class="square-9 bg-white shadow-1"></div>
            </div>
            <p class="text-center margin-top-105 margin-bottom-05">.shadow-1</p>
          </div>
          <div class="grid-col-3 text-center display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
            <div class="bg-secondary-light display-inline-block">
              <div class="square-9 bg-white shadow-2"></div>
            </div>
            <p class="text-center margin-top-105 margin-bottom-05">.shadow-2</p>
          </div>
          <div class="grid-col-3 text-center display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
            <div class="bg-secondary-light display-inline-block">
              <div class="square-9 bg-white shadow-3"></div>
            </div>
            <p class="text-center margin-top-105 margin-bottom-05">.shadow-3</p>
          </div>
          <div class="grid-col-3 text-center display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
            <div class="bg-secondary-light display-inline-block">
              <div class="square-9 bg-white shadow-4"></div>
            </div>
            <p class="text-center margin-top-105 margin-bottom-05">.shadow-4</p>
          </div>
          <div class="grid-col-3 text-center display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
            <div class="bg-secondary-light display-inline-block">
              <div class="square-9 bg-white shadow-5"></div>
            </div>
            <p class="text-center margin-top-105 margin-bottom-05">.shadow-5</p>
          </div>
        </div>
      </section>
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

  <section class="border-top-1px padding-top-1 margin-top-4">
    <h2 class="margin-0 text-light size-sans-8">Advanced settings</h2>
  </section>
</div>