---
permalink: /style-tokens/typesetting/overview/
layout: styleguide
title: Using type
category: Style tokens
lead: Typesetting in USWDS means understanding the relationship between font family, font size, and line height.
type: docs
redirect_from:
  - /style-tokens/typesetting/
subnav:
  - text: Normalization
    href: '#normalization'
  - text: Typesetting with tokens
    href: '#typesetting-with-tokens'
---

## Normalization
Typefaces vary in optical size. This means that at any specific pixel value, an optically small typeface like Source Sans Pro will appear smaller than an optically large typeface like Merriweather. Optical size is a function of internal font metrics and typeface design choices like x-height.

{:.font-sans-md}
### Fonts at native size
![optical size of typefaces]({{ site.baseurl }}/assets/img/style-tokens/font-comparison.svg)

USWDS 2.0 is designed so each size token outputs a consistent optical size regardless of the typeface. This makes our guidance more reliable and our theming more flexible.

{:.font-sans-md}
### Fonts at normalized size

{:.padding-bottom-2}
![normalized typefaces]({{ site.baseurl }}/assets/img/style-tokens/font-comparison-normalized.svg)

To make different typefaces appear the same size (here called the _target size_) at each step of the scale (here we see the output of size token `10`), the absolute size of each token's output varies depending on the font family.

Each <code>supported typeface</code>(#setting-theme-typeface-families) is normalized to a target value determined by the optical size of common system fonts — specifically Apple's typeface San Francisco and Google's typeface Roboto.

<div class="measure-3 bg-white radius-md border padding-x-2 padding-top-2">
  <div class="line-height-mono-1 font-mono-2 grid-row">
    <div class="grid-col-auto padding-05 bg-ink text-white radius-sm">Size token: 10
    </div>
    <div class="grid-col-auto padding-05 bg-secondary-lighter radius-sm margin-left-1">target size: 24px
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px margin-top-2 text-bold">
    <div class="grid-col-6 text-700 font-sans-1">Supported typeface</div>
    <div class="grid-col-3 text-700 font-sans-1">Multiplier</div>
    <div class="grid-col-3 text-700 font-sans-1">Final output (px)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-6 text-300">Georgia</div>
    <div class="grid-col-3 text-300">1.05</div>
    <div class="grid-col-3 text-300">25.2px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-6 text-300">Helvetica</div>
    <div class="grid-col-3 text-300">1.01</div>
    <div class="grid-col-3 text-300">24.2px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-6 text-300">Merriweather</div>
    <div class="grid-col-3 text-300">0.94</div>
    <div class="grid-col-3 text-300">22.6px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-6 text-300">Open Sans</div>
    <div class="grid-col-3 text-300">1.01</div>
    <div class="grid-col-3 text-300">24.2px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-6 text-300">Public Sans</div>
    <div class="grid-col-3 text-300">1.00</div>
    <div class="grid-col-3 text-300">24px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-6 text-300">Roboto Mono</div>
    <div class="grid-col-3 text-300">0.95</div>
    <div class="grid-col-3 text-300">22.8px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-6 text-300">Source Sans Pro</div>
    <div class="grid-col-3 text-300">1.06</div>
    <div class="grid-col-3 text-300">25.6px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-6 text-300">System fonts</div>
    <div class="grid-col-3 text-300">1.00</div>
    <div class="grid-col-3 text-300">24px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-6 text-300">Tahoma</div>
    <div class="grid-col-3 text-300">1.00</div>
    <div class="grid-col-3 text-300">24px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 border-gray-10 font-mono-3">
    <div class="grid-col-6 text-300">Verdana</div>
    <div class="grid-col-3 text-300">0.99</div>
    <div class="grid-col-3 text-300">23.8px</div>
  </div>
</div>

### Rem-based font sizing
In USWDS, the final font size is output not in pixels but in `rem` (a proportion of the page's root font size). If you have `$theme-respect-user-font-size` set to `true` in your theme settings, the root font size is set to `100%` and typescale is calculated based on `16px`. If `$theme-respect-user-font-size` set to `false`, the root font size is set to the value of `$theme-root-font-size` and typescale is calculated based on that root.

Since both the `rem` and absolute `px` values change depending on the theme settings and the typeface, our documentation displays only the `px` value of the target.

### Normalization and line height
USWDS has six target line heights in its <code>line height token system</code>(#0). These targets are unitless numbers, multipliers of the font size of the affected text. For example, if the target line height were `2` in text with a target font size of `16px`, the final line height would be the `target line height * target font size` or `2 * 16px` or `32px`.

Since we use normalization on font sizing, we must also normalize line height to hit the target line height:

<div class="bg-white radius-md border padding-x-2 padding-top-2">
  <div class="line-height-mono-1 font-mono-2 grid-row">
    <div class="grid-col-auto padding-05 bg-ink text-white radius-sm">Size token: 10
    </div>
    <div class="grid-col-auto padding-05 bg-secondary-lighter radius-sm margin-left-1">target size: 24px
    </div>
  </div>
  <div class="line-height-mono-1 font-mono-2 grid-row margin-top-05">
    <div class="grid-col-auto padding-05 bg-ink text-white radius-sm">Line height token: 3
    </div>
    <div class="grid-col-auto padding-05 bg-secondary-lighter radius-sm margin-left-1">target line height: 1.35 (32.4px)
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px margin-top-2 text-bold">
    <div class="grid-col-4 text-700 font-sans-1">Supported typeface</div>
    <div class="grid-col-2 text-700 font-sans-1">Normalization value</div>
    <div class="grid-col-2 text-700 font-sans-1">Final size (px)</div>
    <div class="grid-col-2 text-700 font-sans-1">Final line height</div>
    <div class="grid-col-2 text-700 font-sans-1">Final line height (px)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-4 text-300">Georgia</div>
    <div class="grid-col-2 text-300">1.05</div>
    <div class="grid-col-2 text-300">25.2px</div>
    <div class="grid-col-2 text-300">1.29</div>
    <div class="grid-col-2 text-300">32.5px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-4 text-300">Helvetica</div>
    <div class="grid-col-2 text-300">1.01</div>
    <div class="grid-col-2 text-300">24.2px</div>
    <div class="grid-col-2 text-300">1.34</div>
    <div class="grid-col-2 text-300">32.4px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-4 text-300">Merriweather</div>
    <div class="grid-col-2 text-300">0.94</div>
    <div class="grid-col-2 text-300">22.6px</div>
    <div class="grid-col-2 text-300">1.44</div>
    <div class="grid-col-2 text-300">32.5px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-4 text-300">Open Sans</div>
    <div class="grid-col-2 text-300">1.01</div>
    <div class="grid-col-2 text-300">24.2px</div>
    <div class="grid-col-2 text-300">1.34</div>
    <div class="grid-col-2 text-300">32.4px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-4 text-300">Public Sans</div>
    <div class="grid-col-2 text-300">1.00</div>
    <div class="grid-col-2 text-300">24px</div>
    <div class="grid-col-2 text-300">1.35</div>
    <div class="grid-col-2 text-300">32.4px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-4 text-300">Roboto Mono</div>
    <div class="grid-col-2 text-300">0.95</div>
    <div class="grid-col-2 text-300">22.8px</div>
    <div class="grid-col-2 text-300">1.42</div>
    <div class="grid-col-2 text-300">32.4px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-4 text-300">Source Sans Pro</div>
    <div class="grid-col-2 text-300">1.06</div>
    <div class="grid-col-2 text-300">25.6px</div>
    <div class="grid-col-2 text-300">1.27</div>
    <div class="grid-col-2 text-300">32.5px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-4 text-300">System fonts</div>
    <div class="grid-col-2 text-300">1.00</div>
    <div class="grid-col-2 text-300">24px</div>
    <div class="grid-col-2 text-300">1.35</div>
    <div class="grid-col-2 text-300">32.4px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-4 text-300">Tahoma</div>
    <div class="grid-col-2 text-300">1.00</div>
    <div class="grid-col-2 text-300">24px</div>
    <div class="grid-col-2 text-300">1.35</div>
    <div class="grid-col-2 text-300">32.4px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 border-gray-10 font-mono-3">
    <div class="grid-col-4 text-300">Verdana</div>
    <div class="grid-col-2 text-300">0.99</div>
    <div class="grid-col-2 text-300">23.8px</div>
    <div class="grid-col-2 text-300">1.36</div>
    <div class="grid-col-2 text-300">32.4px</div>
  </div>
</div>

## Typesetting with tokens
USWDS uses **functions**, **mixins**, and **utility classes** to style its components with style tokens. Because we use normalized values, as described above, font size and line height functions, mixins, and utility classes differ from many others in the system by requiring _two_ tokens: a [family](#0){:.token} token and either a [size](#0){:.token} or a [line-height](#0){:.token} token.

The individual style token sections go into this in more detail, but here's a summary:

### Font family
<div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2">
  <div class="grid-col-2">Token</div>
  <div class="grid-col-3">Function</div>
  <div class="grid-col-3">Mixin</div>
  <div class="grid-col-4">Utility class</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2"><a href="#0" class="token">family</a></div>
  <div class="grid-col-3">family(<a href="#0" class="token">family</a>)</div>
  <div class="grid-col-3">u-font-family(<a href="#0" class="token">family</a>)</div>
  <div class="grid-col-4">.font-family-<a href="#0" class="token">family</a></div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'body'</div>
  <div class="grid-col-3">family('body')</div>
  <div class="grid-col-3">u-font-family('body')</div>
  <div class="grid-col-4">.font-family-body</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'sans'</div>
  <div class="grid-col-3">family('sans')</div>
  <div class="grid-col-3">u-font-family('sans')</div>
  <div class="grid-col-4">.font-family-sans</div>
</div>

### Font size
<div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2">
  <div class="grid-col-2">Tokens</div>
  <div class="grid-col-3">Function</div>
  <div class="grid-col-3">Mixin</div>
  <div class="grid-col-4">Utility class</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2"><a href="#0" class="token">family</a>, <a href="#0" class="token">size</a></div>
  <div class="grid-col-3">size(<a href="#0" class="token">family</a>, <a href="#0" class="token">size</a>)</div>
  <div class="grid-col-3">u-font-size(<a href="#0" class="token">family</a>, <a href="#0" class="token">size</a>)</div>
  <div class="grid-col-4">.font-size-<a href="#0" class="token">family</a>-<a href="#0" class="token">size</a></div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'ui', 'micro'</div>
  <div class="grid-col-3">size('ui', 'micro')</div>
  <div class="grid-col-3">u-font-size('ui', 'micro')</div>
  <div class="grid-col-4">.font-size-ui-micro</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'sans', 6</div>
  <div class="grid-col-3">size('sans', 6)</div>
  <div class="grid-col-3">u-font-size('sans', 6)</div>
  <div class="grid-col-4">.font-size-sans-6</div>
</div>

### Family and size together
<div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2">
  <div class="grid-col-2">Tokens</div>
  <div class="grid-col-3">Function</div>
  <div class="grid-col-3">Mixin</div>
  <div class="grid-col-4">Utility class</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2"><a href="#0" class="token">family</a>, <a href="#0" class="token">size</a></div>
  <div class="grid-col-3">—</div>
  <div class="grid-col-3">u-font(<a href="#0" class="token">family</a>, <a href="#0" class="token">size</a>)</div>
  <div class="grid-col-4">.font-<a href="#0" class="token">family</a>-<a href="#0" class="token">size</a></div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'ui', 'micro'</div>
  <div class="grid-col-3">—</div>
  <div class="grid-col-3">u-font('ui', 'micro')</div>
  <div class="grid-col-4">.font-ui-micro</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'sans', 6</div>
  <div class="grid-col-3">—</div>
  <div class="grid-col-3">u-font('sans', 6)</div>
  <div class="grid-col-4">.font-sans-6</div>
</div>

### Line height
<div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2">
  <div class="grid-col-2">Tokens</div>
  <div class="grid-col-3">Function</div>
  <div class="grid-col-3">Mixin</div>
  <div class="grid-col-4">Utility class</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light line-height-code-6">
  <div class="grid-col-2"><a href="#0" class="token">family</a>, <br/><a href="#0" class="token">line-height</a></div>
  <div class="grid-col-3">line-height(<a href="#0" class="token">family</a>, <br/><a href="#0" class="token">line-height</a>)</div>
  <div class="grid-col-3">u-line-height(<a href="#0" class="token">family</a>, <br/><a href="#0" class="token">line-height</a>)</div>
  <div class="grid-col-4">.line-height-<a href="#0" class="token">family</a>-<a href="#0" class="token">line-height</a></div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'ui', 1</div>
  <div class="grid-col-3">line-height('ui', 1)</div>
  <div class="grid-col-3">u-line-height('ui', 1)</div>
  <div class="grid-col-4">.line-height-ui-1</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'sans', 3</div>
  <div class="grid-col-3">line-height('sans', 3)</div>
  <div class="grid-col-3">u-line-height('sans', 3)</div>
  <div class="grid-col-4">.line-height-sans-3</div>
</div>

### Family, size, and line height together
The `typeset()` mixin outlined below accepts the tokens listed as well as a special `null` value. If either of the three properties get `null` instead of a token, the system will use a default value from `$uswds-theme-typography`: either `$theme-body-font-family`, `$theme-body-font-size`, or `$theme-body-line-height` depending on the property passed the `null` value.

We use the `typeset()` mixin on all our components to get the effect of default `<body>` element styling without having to explicitly style the `<body>` element.

<div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2">
  <div class="grid-col-4">Tokens</div>
  <div class="grid-col-1">Function</div>
  <div class="grid-col-5">Mixin</div>
  <div class="grid-col-2">Utility class</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-4"><a href="#0" class="token">family</a>, <a href="#0" class="token">size</a>, <a href="#0" class="token">line-height</a></div>
  <div class="grid-col-1">—</div>
  <div class="grid-col-5">typeset(<a href="#0" class="token">family</a>, <a href="#0" class="token">size</a>, <a href="#0" class="token">line-height</a>)</div>
  <div class="grid-col-2">—</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-4">'ui', 'micro', 1</div>
  <div class="grid-col-1">—</div>
  <div class="grid-col-5">typeset('ui', 'micro', 1)</div>
  <div class="grid-col-2">—</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-4">'ui', null, 3</div>
  <div class="grid-col-1">—</div>
  <div class="grid-col-5">typeset('ui', null, 3)</div>
  <div class="grid-col-2">—</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-4">'ui', xs, null</div>
  <div class="grid-col-1">—</div>
  <div class="grid-col-5">typeset('ui', xs)</div>
  <div class="grid-col-2">—</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-4">'ui', null, null</div>
  <div class="grid-col-1">—</div>
  <div class="grid-col-5">typeset('ui')</div>
  <div class="grid-col-2">—</div>
</div>

{:.margin-top-4}
#### Example: Settings and typesetting

```css
// in _uswds-theme-typography:

$theme-respect-user-font-size: true;
$theme-font-sans:              'public-sans';
$theme-font-ui:                $theme-font-sans;
$theme-type-scale-sm:          5;
$theme-body-font-size:         'sm';
$theme-body-line-height:       5;

// in component code:

.usa-component {
  @include typeset('ui');
}

// is the equivalent of:

.usa-component {
  font-family: family('ui');
  font-size: size('ui', $theme-body-font-size);
  line-height: line-height('ui', $theme-body-line-height);
}

// compiles as:

.usa-component {
  font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1rem;
  line-height: 1.62;
}

```
