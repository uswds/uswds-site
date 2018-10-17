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
    href: '#introduction'
  - text: Theme font tokens
    href: '#theme-typescale'
  - text: System font tokens
    href: '#system-typescale'
  - text: Setting theme typefaces
    href: '#setting-theme-typeface-families'
---

## Normalization
Typefaces vary in optical size. This means that at any fixed pixel value, an optically small typeface like Source Sans Pro will appear smaller than an optically large typeface like Merriweather. Optical size is a function of internal font metrics and typeface design choices like x-height.

{:.font-sans-md}
### Fonts at native size
![continuous and tokenized values]({{ site.baseurl }}/assets/img/style-tokens/font-comparison.svg)

USWDS is designed so each typescale token outputs a consistent optical size regardless of the typeface to make our guidance more reliable and our theming more flexible.

{:.font-sans-md}
### Fonts at normalized size

{:.padding-bottom-2}
![continuous and tokenized values]({{ site.baseurl }}/assets/img/style-tokens/font-comparison-normalized.svg)

To make different typefaces appear the same size (here called the _target size_) at each step of the scale (here we see the output of size token `10`), the absolute size of each token's output varies from depending on the font family.

Each [supported typeface](#setting-theme-typeface-families) is normalized to a target value set by the the size of common system fonts — specifically Apple's typeface San Francisco and Google's typeface Roboto.

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
USWDS has six target line heights in its [line height token system](#0). These targets are unitless numbers, multipliers of the font size of the affected text. For example, if the target line height were `2` in text with a target font size of `16px`, the final line height would be the `target line height * target font size` or `2 * 16px` or `32px`.

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
