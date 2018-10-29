---
permalink: /style-tokens/typesetting/letterspacing/
layout: styleguide
title: Letterspacing
category: Style tokens
lead: USWDS has 6 letterspacing tokens to control the amount of space between individual letterforms.
type: docs
subnav:
- text: Letterspacing tokens
  href: '#letterspacing-tokens'
- text: Using letterspacing tokens
  href: '#using-letterspacing-tokens'
---

## Letterspacing tokens

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px font-mono-3">
  <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-3 text-700 font-sans-1">Token</div>
    <div class="grid-col-6 text-700 font-sans-1">Example</div>
    <div class="grid-col-fill text-700 font-sans-1">Output</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>-3</code>, <code>'neg-3'</code></div>
    <div class="grid-col-6 font-sans-12 text-ls-neg-3">Tallahassee</div>
    <div class="grid-col-fill font-mono-3">-.03em</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>-2</code>, <code>'neg-2'</code></div>
    <div class="grid-col-6 font-sans-12 text-ls-neg-2">Tallahassee</div>
    <div class="grid-col-fill font-mono-3">-.02em</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>-1</code>, <code>'neg-1'</code></div>
    <div class="grid-col-6 font-sans-12 text-ls-neg-1">Tallahassee</div>
    <div class="grid-col-fill font-mono-3">-.01em</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'auto'</code></div>
    <div class="grid-col-6 font-sans-12 text-ls-auto">Tallahassee</div>
    <div class="grid-col-fill font-mono-3">auto</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>1</code></div>
    <div class="grid-col-6 font-sans-12 text-ls-1">Tallahassee</div>
    <div class="grid-col-fill font-mono-3">0.05em</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>2</code></div>
    <div class="grid-col-6 font-sans-12 text-ls-2">Tallahassee</div>
    <div class="grid-col-fill font-mono-3">0.1em</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2">
    <div class="grid-col-3"><code>3</code></div>
    <div class="grid-col-6 font-sans-12 text-ls-3">Tallahassee</div>
    <div class="grid-col-fill font-mono-3">0.15em</div>
  </div>
</div>

## Using letterspacing tokens
Your context and coding style determine how you access USWDS letterspacing tokens in code.

{:.bg-gold-20v.padding-2.radius-md}
**Note:** The `text()` mixin and the utilities require using the string token format with a `ls-`prefix (example: `'ls-neg-2'` instead of `-2`).

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Context</div>
    <div class="grid-col-5 text-700 font-sans-1">Usage</div>
    <div class="grid-col-5 text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">function
    </div>
    <div class="grid-col-5">letter-spacing: letter-spacing(<a href="{{ site.baseurl }}/style-tokens/typesetting/letterspacing/" class="token">letterspacing</a>)</div>
    <div class="grid-col-5">
      letter-spacing: letter-spacing(<code>-2</code>);<br/>
      letter-spacing: ls(<code>-2</code>);<br/>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">
      mixin
    </div>
    <div class="grid-col-5">@include u-text('ls-<a href="{{ site.baseurl }}/style-tokens/typesetting/letterspacing/" class="token">letterspacing</a>')</div>
    <div class="grid-col-5">@include u-text(<code>'ls-neg-2'</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">setting</div>
    <div class="grid-col-5">$theme-variable: <a href="{{ site.baseurl }}/style-tokens/typesetting/letterspacing/" class="token">letterspacing</a></div>
    <div class="grid-col-5">$theme-heading-letterspacing: <code>-2</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility
    </div>
    <div class="grid-col-5">.text-ls-<a href="{{ site.baseurl }}/style-tokens/typesetting/letterspacing/" class="token">letterspacing</a></div>
    <div class="grid-col-5">.text-ls-<code>neg-2</code>;</div>
  </div>
</div>
