---
permalink: /style-tokens/typesetting/font-family/
layout: styleguide
title: Font family
category: Style tokens
lead: USWDS font family tokens allow designers and developers to set font family either by the type of font or the role the font plays in the design.
type: docs
subnav:
- text: Type-based tokens
  href: '#type-based-tokens'
- text: Role-based tokens
  href: '#role-based-tokens'
- text: Available font families
  href: '#available-font-families'
- text: Customizing family tokens
  href: '#customizing-family-tokens'
- text: Using family tokens
  href: '#using-typescale-in-utilities-settings-and-component-sass'
---

{:.bg-gold-20v.padding-2.radius-md}
Please see the [Typesetting]({{ site.baseurl }}/style-tokens/typesetting){:.text-ink.text-bold} section for more about font size normalization and how USWDS uses `size` and `family` tokens for typesetting.

## Type-based tokens
Type based tokens set the font family value based on the _type_ of the requested font: **monospaced**, **sans-serif**, **serif**, and **condensed** families.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Token</div>
    <div class="grid-col-4 text-700 font-sans-1">Description</div>
    <div class="grid-col-fill text-700 font-sans-1">Settings variable</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 font-sans-3"><code>'mono'</code></div>
    <div class="grid-col-4 font-sans-3">project monospace typeface</div>
    <div class="grid-col-fill font-mono-3">$theme-font-mono</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 font-sans-3"><code>'sans'</code></div>
    <div class="grid-col-4 font-sans-3">project sans-serif typeface</div>
    <div class="grid-col-fill font-mono-3">$theme-font-sans</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 font-sans-3"><code>'serif'</code></div>
    <div class="grid-col-4 font-sans-3">project serif typeface</div>
    <div class="grid-col-fill font-mono-3">$theme-font-serif</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2">
    <div class="grid-col-2 font-sans-3"><code>'cond'</code></div>
    <div class="grid-col-4 font-sans-3">project condensed typeface</div>
    <div class="grid-col-fill font-mono-3">$theme-font-cond</div>
  </div>
</div>

{:.bg-gold-20v.padding-2.radius-md}
**Note:** The `icon` family type is coming in a later release of the USWDS 2.0 Beta — sometime in November 2018.

## Role-based tokens
Role-based tokens set the font family value based on the _role_ the face plays in the project: **heading**, **body**, **ui**, **code**, and **alternate**.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Token</div>
    <div class="grid-col-4 text-700 font-sans-1">Description</div>
    <div class="grid-col-fill text-700 font-sans-1">Settings variable</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 font-sans-3"><code>'heading'</code></div>
    <div class="grid-col-4 font-sans-3">project heading typeface</div>
    <div class="grid-col-fill font-mono-3">$theme-font-heading</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 font-sans-3"><code>'body'</code></div>
    <div class="grid-col-4 font-sans-3">project body typeface</div>
    <div class="grid-col-fill font-mono-3">$theme-font-body</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 font-sans-3"><code>'ui'</code></div>
    <div class="grid-col-4 font-sans-3">project interface typeface</div>
    <div class="grid-col-fill font-mono-3">$theme-font-ui</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 font-sans-3"><code>'code'</code></div>
    <div class="grid-col-4 font-sans-3">project code typeface</div>
    <div class="grid-col-fill font-mono-3">$theme-font-code</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2">
    <div class="grid-col-2 font-sans-3"><code>'alt'</code></div>
    <div class="grid-col-4 font-sans-3">alternate project typeface</div>
    <div class="grid-col-fill font-mono-3">$theme-font-alt</div>
  </div>
</div>

{:.margin-top-6}
## Available fonts
The following fonts have normalization metadata in the design system, and are available to settings variables as tokens:

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-3 text-700 font-sans-1">Token</div>
    <div class="grid-col-fill text-700 font-sans-1">Font stack</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10 margin-top-2">
    <div class="grid-col-3 font-sans-3"><code>'system'</code></div>
    <div class="grid-col-fill font-mono-3">-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10 margin-top-2">
    <div class="grid-col-3 font-sans-3"><code>'public-sans'</code></div>
    <div class="grid-col-fill font-mono-3">'Public Sans Web', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10 margin-top-2">
    <div class="grid-col-3 font-sans-3"><code>'source-sans-pro'</code></div>
    <div class="grid-col-fill font-mono-3">'Source Sans Pro','Helvetica Neue', 'Helvetica', 'Roboto', 'Arial', sans-serif</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10 margin-top-2">
    <div class="grid-col-3 font-sans-3"><code>'helvetica'</code></div>
    <div class="grid-col-fill font-mono-3">'Helvetica Neue', 'Helvetica', 'Roboto', 'Arial', sans-serif</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10 margin-top-2">
    <div class="grid-col-3 font-sans-3"><code>'georgia'</code></div>
    <div class="grid-col-fill font-mono-3">'Georgia', 'Cambria', 'Times New Roman', 'Times', serif</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10 margin-top-2">
    <div class="grid-col-3 font-sans-3"><code>'merriweather'</code></div>
    <div class="grid-col-fill font-mono-3">'Merriweather Web', 'Georgia', 'Cambria', 'Times New Roman', 'Times', serif</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10 margin-top-2">
    <div class="grid-col-3 font-sans-3"><code>'roboto-mono'</code></div>
    <div class="grid-col-fill font-mono-3">'Roboto Mono Web', 'Bitstream Vera Sans Mono', 'Consolas', 'Courier', monospace</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-top-2">
    <div class="grid-col-3 font-sans-3"><code>'tahoma'</code></div>
    <div class="grid-col-fill font-mono-3">'Tahoma', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'</div>
  </div>
</div>

{:.bg-gold-20v.padding-2.radius-md}
**Note:** It is possible to add custom font metadata in the design system settings. This documentation is coming in November 2018.

## Customizing family tokens
Customize [type](#0){:.token} and [role](#0){:.token} family tokens in your project's theme settings with available [font](#0){:.token} tokens. All typography-related settings are in `_uswds-theme-typography.scss`.

**First, use [font](#0){:.token} tokens to set the [type](#0){:.token} family tokens.** Set any unused types to `false`.

{:.margin-bottom-4}
```sass
$theme-font-mono:   'roboto-mono';
$theme-font-sans:   'source-sans-pro';
$theme-font-serif:  'merriweather';
$theme-font-cond:   false;
```

**Then use the type variables you just set to set the [role](#0){:.token} family tokens.** Set any unused types to `false`.

```sass
$theme-font-ui:       $theme-font-sans;
$theme-font-heading:  $theme-font-serif;
$theme-font-body:     $theme-font-sans;
$theme-font-code:     $theme-font-mono;
$theme-font-alt:      $theme-font-serif;
```

## Using family tokens
Your context and coding style determine how you access USWDS family tokens in code.


<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Context</div>
    <div class="grid-col-5 text-700 font-sans-1">Usage</div>
    <div class="grid-col-5 text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">function
    </div>
    <div class="grid-col-5">family(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>)</div>
    <div class="grid-col-5">font-family: family(<code>'body'</code>);</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">
      mixin<br/>
      <span class="text-normal">font-family</span>
    </div>
    <div class="grid-col-5">u-font-family(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>)</div>
    <div class="grid-col-5">@include u-font-family(<code>'sans'</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">
      mixin<br/>
      <span class="text-normal">font-family</span><br/>
      <span class="text-normal">font-size</span>
    </div>
    <div class="grid-col-5">u-font(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>)</div>
    <div class="grid-col-5">@include u-font(<code>'body'</code>, <code>'2xl'</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">setting</div>
    <div class="grid-col-5"><a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a></div>
    <div class="grid-col-5">$theme-prose-font-family: <code>'body'</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility<br/>
      <span class="text-normal">font-family</span>
    </div>
    <div class="grid-col-5">.font-family-<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a></div>
    <div class="grid-col-5">.font-family-<code>body</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility<br/>
      <span class="text-normal">font-family</span><br/>
      <span class="text-normal">font-size</span>
    </div>
    <div class="grid-col-5">.font-<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>-<a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a></div>
    <div class="grid-col-5">.font-<code>body</code>-<code>2xl</code>;</div>
  </div>
</div>
