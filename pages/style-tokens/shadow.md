---
permalink: /style-tokens/shadow/
layout: styleguide
title: Shadow
category: Style tokens
lead: Often used to indicate elevation, shadow tokens determine the size of a drop shadow (or `box-shadow`) around an item.
type: docs
subnav:
- text: Shadow tokens
  href: '#shadow-tokens'
- text: Using shadow tokens
  href: '#using-shadow-tokens'
---

## Shadow tokens
Output values are shown in `px` below but are output in `rem` in the final CSS, based on the base font size in your project settings.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px font-mono-3">
  <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Token</div>
    <div class="grid-col-5 text-700 font-sans-1">Example</div>
    <div class="grid-col-fill text-700 font-sans-1">Output</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>0</code></div>
    <div class="grid-col-5">
      <div class="height-4 radius-md bg-white shadow-0 border border-base-lighter"></div>
    </div>
    <div class="grid-col-fill font-mono-3">0</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>1</code></div>
    <div class="grid-col-5">
      <div class="height-4 radius-md bg-white shadow-1 border border-base-lighter"></div>
    </div>
    <div class="grid-col-fill font-mono-3">0 1px 4px 0 rgba(0, 0, 0, 0.1) </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>2</code></div>
    <div class="grid-col-5">
      <div class="height-4 radius-md bg-white shadow-2 border border-base-lighter"></div>
    </div>
    <div class="grid-col-fill font-mono-3">0 4px 8px 0 rgba(0, 0, 0, 0.1)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>3</code></div>
    <div class="grid-col-5">
      <div class="height-4 radius-md bg-white shadow-3 border border-base-lighter"></div>
    </div>
    <div class="grid-col-fill font-mono-3">0 8px 16px 0 rgba(0, 0, 0, 0.1)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>4</code></div>
    <div class="grid-col-5">
      <div class="height-4 radius-md bg-white shadow-4 border border-base-lighter"></div>
    </div>
    <div class="grid-col-fill font-mono-3">0 12px 24px 0 rgba(0, 0, 0, 0.1)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>5</code></div>
    <div class="grid-col-5">
      <div class="height-4 radius-md bg-white shadow-5 border border-base-lighter"></div>
    </div>
    <div class="grid-col-fill font-mono-3">0 16px 32px 0 rgba(0, 0, 0, 0.1)</div>
  </div>
</div>

## Using shadow tokens
Your context and coding style determine how you access USWDS shadow tokens in code.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Context</div>
    <div class="grid-col-5 text-700 font-sans-1">Usage</div>
    <div class="grid-col-5 text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">function
    </div>
    <div class="grid-col-5">box-shadow: shadow(<a href="{{ site.baseurl }}/style-tokens/shadow/" class="token">shadow</a>)</div>
    <div class="grid-col-5">
      box-shadow: shadow(<code>2</code>);
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">
      mixin
    </div>
    <div class="grid-col-5">@include u-shadow(<a href="{{ site.baseurl }}/style-tokens/shadow/" class="token">shadow</a>)</div>
    <div class="grid-col-5">@include u-shadow(<code>2</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">setting</div>
    <div class="grid-col-5">$theme-variable: <a href="{{ site.baseurl }}/style-tokens/shadow/" class="token">shadow</a></div>
    <div class="grid-col-5">$theme-subnav-shadow: <code>2</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility
    </div>
    <div class="grid-col-5">.shadow-<a href="{{ site.baseurl }}/style-tokens/shadow/" class="token">shadow</a></div>
    <div class="grid-col-5">.shadow-<code>2</code>;</div>
  </div>
</div>
