---
permalink: /design-tokens/z-index/
layout: styleguide
title: Z-index
category: Design tokens
lead: Z-index tokens determine an item's position in the stacking order.
type: docs
subnav:
- text: Z-index tokens
  href: '#z-index-tokens'
- text: Using z-index tokens
  href: '#using-z-index-tokens'
- text: Latest updates
  href: '#changelog'
changelog:
  key: tokens-zindex
---

## Z-index tokens
<div class="position-relative z-0">
  <div class="bg-white radius-md border padding-x-1 tablet:padding-x-2 padding-top-1 padding-bottom-2 font-mono-3 position-relative z-bottom">
    <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px text-bold">
      <div class="grid-col-fill text-700 font-lang-1">Token</div>
      <div class="grid-col-auto text-700 font-lang-1">Value</div>
    </div>
    <section class="position-relative">
      <div class="bg-white border border-ink radius-lg padding-2  minh-10 margin-left-0 display-flex flex-justify flex-align-start z-auto">
        <code class="">'auto'</code>
        <span class="utility-value">auto</span>
      </div>
      <div class="bg-white border border-ink radius-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 z-top position-relative z-index-3">
        <code class="">'top'</code>
        <span class="utility-value">99999</span>
      </div>
      <div class="bg-gray-1 border border-ink radius-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 z-500 position-relative z-index-3">
        <code class="">500</code>
        <span class="utility-value">500</span>
      </div>
      <div class="bg-gray-10 border border-ink radius-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 z-400 position-relative z-index-3">
        <code class="">400</code>
        <span class="utility-value">400</span>
      </div>
      <div class="bg-gray-30 border border-ink radius-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 z-300 position-relative z-index-3">
        <code class="bg-white">300</code>
        <span class="utility-value">300</span>
      </div>
      <div class="bg-gray-50 border border-ink radius-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 z-200 position-relative z-index-3">
        <code class="bg-white">200</code>
        <span class="utility-value">200</span>
      </div>
      <div class="bg-gray-70 border border-ink radius-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 z-100 position-relative z-index-3">
        <code class="bg-white">100</code>
        <span class="utility-value">100</span>
      </div>
      <div class="bg-gray-90 border border-ink radius-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 z-0 position-relative z-index-3">
        <code class="bg-white">0</code>
        <span class="utility-value">0</span>
      </div>
      <div class="bg-black border border-ink radius-lg padding-2 padding-top-5 minh-10 margin-left-0 display-flex flex-justify flex-align-start margin-top-neg-3 z-bottom position-relative z-index-3">
        <code class="bg-white">'bottom'</code>
        <span class="utility-value">-100</span>
      </div>
    </section>
  </div>
</div>

## Using z-index tokens
Your context and coding style determine how you access USWDS z-index tokens in code.

<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Context</th>
        <th scope="col">Usage</th>
        <th scope="col">Example</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">function</span>
        </th>
        <td data-title="Description">
          <span>
            z-index(<a href="{{ site.baseurl }}/design-tokens/z-index/" class="token">z-index</a>)<br/>
            z(<a href="{{ site.baseurl }}/design-tokens/z-index/" class="token">z-index</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            z-index: z-index(<code>'bottom'</code>)<br/>
            z-index: z(<code>'bottom'</code>)
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            mixin
          </span>
        </th>
        <td data-title="Description">
          <span>
            u-z(<a href="{{ site.baseurl }}/design-tokens/z-index/" class="token">z-index</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-z(<code>'bottom'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            utility
          </span>
        </th>
        <td data-title="Description">
          <span>
            .z-<a href="{{ site.baseurl }}/design-tokens/z-index/" class="token">z-index</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .z-<code>top</code>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
