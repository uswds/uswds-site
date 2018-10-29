---
permalink: /style-tokens/typesetting/font-weight/
layout: styleguide
title: Font weight
category: Style tokens
lead: USWDS has up to seven font weight theme tokens drawn from nine system tokens.
type: docs
subnav:
- text: Theme tokens
  href: '#theme-tokens'
- text: System tokens
  href: '#system-tokens'
- text: Customizing tokens
  href: '#customizing-tokens'
- text: Using weight tokens
  href: '#using-font-weight-tokens'
---

## Theme tokens
Font weight theme tokens use common names. Most projects will use only 2-4 of these tokens, with the majority set to `false`.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px font-mono-3">
  <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Token</div>
    <div class="grid-col-4 text-700 font-sans-1">Example</div>
    <div class="grid-col-2 text-700 font-sans-1">Default</div>
    <div class="grid-col-fill text-700 font-sans-1">Settings variable</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>'thin'</code></div>
    <div class="grid-col-4 font-sans-8 text-100">Tallahassee</div>
    <div class="grid-col-2">false</div>
    <div class="grid-col-fill font-mono-3">$theme-font-weight-thin</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>'light'</code></div>
    <div class="grid-col-4 font-sans-8 text-300">Tallahassee</div>
    <div class="grid-col-2"><code>300</code></div>
    <div class="grid-col-fill font-mono-3">$theme-font-weight-light</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 font-sans-3"><code>'normal'</code></div>
    <div class="grid-col-4 text-400 font-sans-3 font-sans-8">Tallahassee</div>
    <div class="grid-col-2"><code>400</code></div>
    <div class="grid-col-fill font-mono-3">$theme-font-weight-normal</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 font-sans-3"><code>'medium'</code></div>
    <div class="grid-col-4 text-500 font-sans-3 font-sans-8">Tallahassee</div>
    <div class="grid-col-2">false</div>
    <div class="grid-col-fill font-mono-3">$theme-font-weight-medium</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 font-sans-3"><code>'semibold'</code></div>
    <div class="grid-col-4 text-600 font-sans-3 font-sans-8">Tallahassee</div>
    <div class="grid-col-2">false</div>
    <div class="grid-col-fill font-mono-3">$theme-font-weight-semibold</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 font-sans-3"><code>'bold'</code></div>
    <div class="grid-col-4 text-700 font-sans-3 font-sans-8">Tallahassee</div>
    <div class="grid-col-2"><code>700</code></div>
    <div class="grid-col-fill font-mono-3">$theme-font-weight-bold</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2">
    <div class="grid-col-2 font-sans-3"><code>'heavy'</code></div>
    <div class="grid-col-4 text-900 font-sans-3 font-sans-8">Tallahassee</div>
    <div class="grid-col-2">false</div>
    <div class="grid-col-fill font-mono-3">$theme-font-weight-heavy</div>
  </div>
</div>

## System tokens
Font weight system tokens use numbers from `100`-`900` in increments of 100, with `100` as the lightest and `900` the heaviest, the same numerical system of grades used by most common typefaces.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px font-mono-3">
  <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Token</div>
    <div class="grid-col-fill text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>100</code></div>
    <div class="grid-col-fill font-sans-8 text-100">Tallahassee</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>200</code></div>
    <div class="grid-col-fill font-sans-8 text-200">Tallahassee</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>300</code></div>
    <div class="grid-col-fill font-sans-8 text-300">Tallahassee</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>400</code></div>
    <div class="grid-col-fill font-sans-8 text-400">Tallahassee</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>500</code></div>
    <div class="grid-col-fill font-sans-8 text-500">Tallahassee</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>600</code></div>
    <div class="grid-col-fill font-sans-8 text-600">Tallahassee</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>700</code></div>
    <div class="grid-col-fill font-sans-8 text-700">Tallahassee</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>800</code></div>
    <div class="grid-col-fill font-sans-8 text-800">Tallahassee</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2">
    <div class="grid-col-2"><code>900</code></div>
    <div class="grid-col-fill font-sans-8 text-900">Tallahassee</div>
  </div>
</div>

## Customizing tokens
Customize [theme](#theme-tokens){:.token} font weight tokens in your project's theme settings with available [system](#system-tokens){:.token} font weight tokens. All typography-related settings are in `_uswds-theme-typography.scss`.

{:.margin-bottom-4}
```sass
$theme-font-weight-thin:          false;
$theme-font-weight-light:         300;
$theme-font-weight-normal:        400;
$theme-font-weight-medium:        false;
$theme-font-weight-semibold:      false;
$theme-font-weight-bold:          700;
$theme-font-weight-heavy:         false;
```

## Using weight tokens
Your context and coding style determine how you access USWDS font weight tokens in code.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Context</div>
    <div class="grid-col-5 text-700 font-sans-1">Usage</div>
    <div class="grid-col-5 text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">function
    </div>
    <div class="grid-col-5">font-weight: weight(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-weight/" class="token">weight</a>)</div>
    <div class="grid-col-5">font-weight: weight(<code>'bold'</code>);</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">
      mixin
    </div>
    <div class="grid-col-5">@include u-text(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-weight/" class="token">weight</a>)</div>
    <div class="grid-col-5">@include u-text(<code>'light'</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">setting</div>
    <div class="grid-col-5">$theme-variable: <a href="{{ site.baseurl }}/style-tokens/typesetting/font-weight/" class="token">weight</a></div>
    <div class="grid-col-5">$theme-heading-font-weight: <code>'heavy'</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility
    </div>
    <div class="grid-col-5">.text-<a href="{{ site.baseurl }}/style-tokens/typesetting/font-weight/" class="token">weight</a></div>
    <div class="grid-col-5">.text-<code>light</code>;</div>
  </div>
</div>
