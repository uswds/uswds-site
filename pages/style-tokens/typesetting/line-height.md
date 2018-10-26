---
permalink: /style-tokens/typesetting/line-height/
layout: styleguide
title: Line height
category: Style tokens
lead: USWDS has 6 normalized line height tokens to control the amount of space between lines in a block of text.
type: docs
subnav:
- text: Line height tokens
  href: '#line-height-tokens'
- text: Using line-height tokens
  href: '#using-line-height-tokens'
---

{:.bg-gold-20v.padding-2.radius-md}
Please see the [Typesetting]({{ site.baseurl }}/style-tokens/typesetting){:.text-ink.text-bold} section for more about font size normalization and how USWDS uses tokens for typesetting. Setting line height requires both a [line height](#0){:.token} token and a [family]({{ site.baseurl }}/style-tokens/typesetting/font-family){:.token} token. The documentation below displays a "target line-height" rather than the final output, which will be normalized depending on the targeted font family.

## Line height tokens

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px font-mono-3">
  <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-3 text-700 font-sans-1">Token</div>
    <div class="grid-col-6 text-700 font-sans-1">Example</div>
    <div class="grid-col-fill text-700 font-sans-1">Output</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>1</code></div>
    <div class="grid-col-6 font-sans-6 line-height-sans-1">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</div>
    <div class="grid-col-fill font-mono-3">1</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>2</code></div>
    <div class="grid-col-6 font-sans-6 line-height-sans-2">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</div>
    <div class="grid-col-fill font-mono-3">1.15</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>3</code></div>
    <div class="grid-col-6 font-sans-6 line-height-sans-3">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</div>
    <div class="grid-col-fill font-mono-3">1.35</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>5</code></div>
    <div class="grid-col-6 font-sans-6 line-height-sans-5">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</div>
    <div class="grid-col-fill font-mono-3">1.5</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>5</code></div>
    <div class="grid-col-6 font-sans-6 line-height-sans-5">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</div>
    <div class="grid-col-fill font-mono-3">1.62</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2">
    <div class="grid-col-3"><code>6</code></div>
    <div class="grid-col-6 font-sans-6 line-height-sans-6">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</div>
    <div class="grid-col-fill font-mono-3">1.75</div>
  </div>
</div>

## Using line height tokens
Your context and coding style determine how you access USWDS line height tokens in code.

{:.bg-gold-20v.padding-2.radius-md}
**Note:** Because line height is affected by [font size normalization]({{ site.baseurl }}/style-tokens/typesetting/){:.text-ink} all [letter spacing]({{ site.baseurl }}/style-tokens/typesetting/letterspacing){:.token} tokens also require a [family]({{ site.baseurl }}/style-tokens/typesetting/font-family){:.token} token.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Context</div>
    <div class="grid-col-5 text-700 font-sans-1">Usage</div>
    <div class="grid-col-5 text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">function
    </div>
    <div class="grid-col-5">line-height: line-height(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/line-height/" class="token">line-height</a>)</div>
    <div class="grid-col-5">
      line-height: line-height(<code>'heading'</code>, <code>2</code>);<br/>
      line-height: lh(<code>'heading'</code>, <code>2</code>);<br/>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">
      mixin
    </div>
    <div class="grid-col-5">@include u-line-height(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/line-height/" class="token">line-height</a>)</div>
    <div class="grid-col-5">@include u-line-height(<code>'body'</code>, <code>6</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">setting</div>
    <div class="grid-col-5">$theme-variable: <a href="{{ site.baseurl }}/style-tokens/typesetting/line-height/" class="token">line height</a></div>
    <div class="grid-col-5">$theme-heading-line-height: <code>2</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility
    </div>
    <div class="grid-col-5">.line-height-<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>-<a href="{{ site.baseurl }}/style-tokens/typesetting/letterspacing/" class="token">line height</a></div>
    <div class="grid-col-5">.line-height-<code>sans</code>-<code>3</code>;</div>
  </div>
</div>
