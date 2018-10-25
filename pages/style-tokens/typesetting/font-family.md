---
permalink: /style-tokens/typesetting/font-family/
layout: styleguide
title: Font family
category: Style tokens
lead: USWDS font family tokens allow designers and developers to set font family either by the type of font or the role the font plays in the design.
type: docs
subnav:
- text: Available font families
  href: '#available-font-families'
- text: Type-based tokens
  href: '#type-based-tokens'
- text: Role-based tokens
  href: '#role-based-tokens'
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
    <div class="grid-col-2 text-300 font-sans-3"><code>'mono'</code></div>
    <div class="grid-col-4 text-300 font-sans-3">project monospace typeface</div>
    <div class="grid-col-fill text-300 font-mono-3">$theme-font-mono</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>'sans'</code></div>
    <div class="grid-col-4 text-300 font-sans-3">project sans-serif typeface</div>
    <div class="grid-col-fill text-300 font-mono-3">$theme-font-sans</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>'serif'</code></div>
    <div class="grid-col-4 text-300 font-sans-3">project serif typeface</div>
    <div class="grid-col-fill text-300 font-mono-3">$theme-font-serif</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2">
    <div class="grid-col-2 text-300 font-sans-3"><code>'cond'</code></div>
    <div class="grid-col-4 text-300 font-sans-3">project condensed typeface</div>
    <div class="grid-col-fill text-300 font-mono-3">$theme-font-cond</div>
  </div>
</div>

{:.bg-gold-20v.padding-2.radius-md}
**Note:** The `icon` family type is coming in a later release of the USWDS 2.0 Beta — sometime in November 2018.

## Role-based tokens
Role-based tokens set the font family value based on the _role_ the face plays in the project: **heading**, **body**, **ui**, **code**, and **alternate**.

<div class="grid-row flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px margin-top-2 text-bold">
  <div class="grid-col-2 text-700 font-sans-1">token</div>
  <div class="grid-col-4 text-700 font-sans-1">description</div>
  <div class="grid-col-fill text-700 font-sans-1">settings variable</div>
</div>
<div class="grid-row flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>'heading'</code></div>
  <div class="grid-col-4 text-300 font-sans-3">project heading typeface</div>
  <div class="grid-col-fill text-300 font-mono-3">$theme-font-heading</div>
</div>
<div class="grid-row flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>'body'</code></div>
  <div class="grid-col-4 text-300 font-sans-3">project body typeface</div>
  <div class="grid-col-fill text-300 font-mono-3">$theme-font-body</div>
</div>
<div class="grid-row flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>'code'</code></div>
  <div class="grid-col-4 text-300 font-sans-3">project code typeface</div>
  <div class="grid-col-fill text-300 font-mono-3">$theme-font-code</div>
</div>
<div class="grid-row flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>'alt'</code></div>
  <div class="grid-col-4 text-300 font-sans-3">alternate project typeface</div>
  <div class="grid-col-fill text-300 font-mono-3">$theme-font-alt</div>
</div>

{:.margin-top-6}
## Available font families
The following typefaces have normalization metadata in the design system, and are available to settings variables:

<div class="grid-row flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px margin-top-2 text-bold">
  <div class="grid-col-3 text-700 font-sans-1">token</div>
  <div class="grid-col-fill text-700 font-sans-1">font stack</div>
</div>
<div class="grid-row flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10 margin-top-2">
  <div class="grid-col-3 text-300 font-sans-3"><code>'system'</code></div>
  <div class="grid-col-fill text-300 font-mono-3">-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'</div>
</div>
<div class="grid-row flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10 margin-top-2">
  <div class="grid-col-3 text-300 font-sans-3"><code>'public-sans'</code></div>
  <div class="grid-col-fill text-300 font-mono-3">'Public Sans Web', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'</div>
</div>
<div class="grid-row flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10 margin-top-2">
  <div class="grid-col-3 text-300 font-sans-3"><code>'source-sans-pro'</code></div>
  <div class="grid-col-fill text-300 font-mono-3">'Source Sans Pro','Helvetica Neue', 'Helvetica', 'Roboto', 'Arial', sans-serif</div>
</div>
<div class="grid-row flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10 margin-top-2">
  <div class="grid-col-3 text-300 font-sans-3"><code>'helvetica'</code></div>
  <div class="grid-col-fill text-300 font-mono-3">'Helvetica Neue', 'Helvetica', 'Roboto', 'Arial', sans-serif</div>
</div>
<div class="grid-row flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10 margin-top-2">
  <div class="grid-col-3 text-300 font-sans-3"><code>'georgia'</code></div>
  <div class="grid-col-fill text-300 font-mono-3">'Georgia', 'Cambria', 'Times New Roman', 'Times', serif</div>
</div>
<div class="grid-row flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10 margin-top-2">
  <div class="grid-col-3 text-300 font-sans-3"><code>'merriweather'</code></div>
  <div class="grid-col-fill text-300 font-mono-3">'Merriweather Web', 'Georgia', 'Cambria', 'Times New Roman', 'Times', serif</div>
</div>
<div class="grid-row flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10 margin-top-2">
  <div class="grid-col-3 text-300 font-sans-3"><code>'roboto-mono'</code></div>
  <div class="grid-col-fill text-300 font-mono-3">'Roboto Mono Web', 'Bitstream Vera Sans Mono', 'Consolas', 'Courier', monospace</div>
</div>
<div class="grid-row flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10 margin-top-2">
  <div class="grid-col-3 text-300 font-sans-3"><code>'tahoma'</code></div>
  <div class="grid-col-fill text-300 font-mono-3">'Tahoma', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'</div>
</div>

{:.maxw-mobile-lg}
```
$theme-font-heading:  $theme-font-serif;
$theme-font-ui:       $theme-font-serif;
$theme-font-body:     $theme-font-sans;
$theme-font-code:     $theme-font-mono;
$theme-font-alt:      $theme-font-sans;
```

## Using typescale in utilities, settings, and component Sass
You'll access USWDS typecale units using a few different techniques, depending on your situation and coding style.

{:.margin-bottom-0}
### Settings

{:.margin-top-05}
Use the scale token when assigning a typescale unit to a settings variable.

{:.maxw-mobile-lg}
```
$theme-type-scale-3xs:      1;
$theme-type-scale-2xs:      3;
$theme-type-scale-xs:       5;
$theme-type-scale-sm:       6;
$theme-type-scale-md:       7;
$theme-type-scale-lg:       10;
$theme-type-scale-xl:       12;
$theme-type-scale-2xl:      14;
$theme-type-scale-3xl:      16;
$theme-h1-font-size:        '2xl';
```

{:.margin-bottom-0.margin-top-4}
### Utilities

{:.margin-top-05}
The `font` utility requires both an unquoted family token and an unquoted scale token in the form `font-[family]-[size]`.

_The `font` utilities set both the font size and family._

{:.maxw-mobile-lg}
```
.font-sans-3xs
.font-body-md
.font-sans-micro
.font-mono-sm
```

{:.margin-bottom-0.margin-top-4}
### Functions

{:.margin-top-05}
Use the `font-size()` function to set the font size. The function requires both a  family token and a scale token in the form `font-size([family], [scale])`.

_The `scale()` function is only for font-size._

{:.maxw-mobile-lg}
```
font-size: font-size('mono', 'sm');
font-size: font-size('body', 8);
```

{:.margin-bottom-0.margin-top-4}
### Utility mixins

{:.margin-top-05}
Use the `u-font()` mixin to set both the font size and the font family. The mixin requires both a family token and a scale token in the form `@include u-font([family], [scale])`.

Use the `u-font-size()` mixin to set the font size only. The mixin requires both a  family token and a scale token in the form `@include u-font-size([family], [scale])`.

Use the `u-font-family()` mixin to set the font family only. The mixin requires a  family token in the form `@include u-font-family([family])`.

_Use `u-font()` instead of using both `u-font-family()` and `u-font-size()` on a single selector, but avoid using it unneccessarily to avoid duplicate code._


{:.maxw-mobile-lg}
```
@include u-font('heading', 'xl')

@include u-font-family('sans')
@include u-font-size('sans', 12)

@include u-font-family('body')
@include u-font-size('body', 'sm')
```

{:.maxw-mobile-lg}
```
$theme-font-mono:   'roboto-mono';
$theme-font-sans:   'source-sans-pro';
$theme-font-serif:  'merriweather';
$theme-font-cond:   false;
```
