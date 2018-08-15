---
permalink: /style/typescale/
layout: styleguide
title: Typescale
category: Style
lead: USWDS typescale consists of nine regularized theme settings drawn from a 21-step common scale
type: docs
subnav:
- text: Using type scale
  href: '#using-spacing-units-in-utilities-settings-and-component-sass'
- text: Settings
  href: '#settings'
- text: Utilities
  href: '#utilities'
- text: Variables
  href: '#variables'
- text: Functions
  href: '#functions'
- text: Utility mixins
  href: '#utility-mixins'
---

The USWDS type scale is designed to display type at a consistent size regardless of the typeface. Project themes use a nine-step palette drawn from a 21-step common palette. These type scale values are the only values we use to build official components. Any components we accept back into the system need to be built with this type scale.

Font size is output in `rem`. If you have `$theme-respect-user-font-size` set to `true` in your theme settings, the root font size is set to `100%` and is calculated based on `16px`. If `$theme-respect-user-font-size` set to `false`, the root font size is calculated based on the value of `theme-root-font-size`.

To make different typefaces appear the same size at each step of the scale, the absolute size of each step in the typescale varies from typeface to typeface. Each supported typeface is regularized to a target value set by the the size of common system fonts — specifically Apple's typeface San Francisco and  Google's typeface Roboto. Optically smaller faces like Source Sans Pro will have a relatively larger rem value at each step in the scale, and optically larger faces like Merriweather will have a relatively smaller rem value. The USWDS typeface Public Sans is developed to be optically similar to system fonts.

Since both the `rem` and absolute `px` values change depending on the theme settings and the typeface, the following table displays only the `px` value of the target.

### Theme typescale
The nine-step theme typescale should be sufficient for most project needs. First, try to use the theme typescale. If your projects needs require more than nine steps of typescale, use steps from the common typescale as nedded.

<div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px margin-top-4 text-bold">
  <div class="grid-col-2 text-700 font-sans-1">token</div>
  <div class="grid-col-2 text-700 font-sans-1">common scale</div>
  <div class="grid-col-1 text-700 font-sans-1">px</div>
  <div class="grid-col-fill text-700 font-sans-1">example</div>
</div>

<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>3xs</code></div>
  <div class="grid-col-2 text-300 font-sans-3">1</div>
  <div class="grid-col-1 text-300 font-sans-3">12px</div>
  <div class="grid-col-fill">
    <span class="font-sans-3xs">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-3xs</code></div>
</div>

<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>2xs</code></div>
  <div class="grid-col-2 text-300 font-sans-3">3</div>
  <div class="grid-col-1 text-300 font-sans-3">14px</div>
  <div class="grid-col-fill">
    <span class="font-sans-2xs">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-2xs</code></div>
</div>

<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>xs</code></div>
  <div class="grid-col-2 text-300 font-sans-3">5</div>
  <div class="grid-col-1 text-300 font-sans-3">16px</div>
  <div class="grid-col-fill">
    <span class="font-sans-xs">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-xs</code></div>
</div>

<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>sm</code></div>
  <div class="grid-col-2 text-300 font-sans-3">6</div>
  <div class="grid-col-1 text-300 font-sans-3">17px</div>
  <div class="grid-col-fill">
    <span class="font-sans-sm">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-sm</code></div>
</div>

<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>md</code></div>
  <div class="grid-col-2 text-300 font-sans-3">7</div>
  <div class="grid-col-1 text-300 font-sans-3">18px</div>
  <div class="grid-col-fill">
    <span class="font-sans-md">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-md</code></div>
</div>

<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>lg</code></div>
  <div class="grid-col-2 text-300 font-sans-3">10</div>
  <div class="grid-col-1 text-300 font-sans-3">24px</div>
  <div class="grid-col-fill">
    <span class="font-sans-lg">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-lg</code></div>
</div>

<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>xl</code></div>
  <div class="grid-col-2 text-300 font-sans-3">12</div>
  <div class="grid-col-1 text-300 font-sans-3">32px</div>
  <div class="grid-col-fill">
    <span class="font-sans-xl">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-xl</code></div>
</div>

<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>2xl</code></div>
  <div class="grid-col-2 text-300 font-sans-3">14</div>
  <div class="grid-col-1 text-300 font-sans-3">40px</div>
  <div class="grid-col-fill">
    <span class="font-sans-2xl">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-2xl</code></div>
</div>

<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>3xl</code></div>
  <div class="grid-col-2 text-300 font-sans-3">16</div>
  <div class="grid-col-1 text-300 font-sans-3">56px</div>
  <div class="grid-col-fill">
    <span class="font-sans-3xl">Utica</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-3xl</code></div>
</div>

{:.margin-top-6}
### Common typescale

<div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px margin-top-1 text-bold">
  <div class="grid-col-2 text-700 font-sans-1">token</div>
  <div class="grid-col-1 text-700 font-sans-1">px</div>
  <div class="grid-col-fill text-700 font-sans-1">example</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>micro</code></div>
  <div class="grid-col-1 text-300 font-sans-3">10px</div>
  <div class="grid-col-fill">
    <span class="font-sans-micro">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-micro</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>1</code></div>
  <div class="grid-col-1 text-300 font-sans-3">12px</div>
  <div class="grid-col-fill">
    <span class="font-sans-1">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-1</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>2</code></div>
  <div class="grid-col-1 text-300 font-sans-3">13px</div>
  <div class="grid-col-fill">
    <span class="font-sans-2">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-2</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>3</code></div>
  <div class="grid-col-1 text-300 font-sans-3">14px</div>
  <div class="grid-col-fill">
    <span class="font-sans-3">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-3</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>4</code></div>
  <div class="grid-col-1 text-300 font-sans-3">15px</div>
  <div class="grid-col-fill">
    <span class="font-sans-4">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-4</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>5</code></div>
  <div class="grid-col-1 text-300 font-sans-3">16px</div>
  <div class="grid-col-fill">
    <span class="font-sans-5">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-5</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>6</code></div>
  <div class="grid-col-1 text-300 font-sans-3">17px</div>
  <div class="grid-col-fill">
    <span class="font-sans-6">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-6</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>7</code></div>
  <div class="grid-col-1 text-300 font-sans-3">18px</div>
  <div class="grid-col-fill">
    <span class="font-sans-7">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-7</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>8</code></div>
  <div class="grid-col-1 text-300 font-sans-3">20px</div>
  <div class="grid-col-fill">
    <span class="font-sans-8">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-8</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>9</code></div>
  <div class="grid-col-1 text-300 font-sans-3">22px</div>
  <div class="grid-col-fill">
    <span class="font-sans-9">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-9</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>10</code></div>
  <div class="grid-col-1 text-300 font-sans-3">24px</div>
  <div class="grid-col-fill">
    <span class="font-sans-10">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-10</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>11</code></div>
  <div class="grid-col-1 text-300 font-sans-3">28px</div>
  <div class="grid-col-fill">
    <span class="font-sans-11">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-11</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>12</code></div>
  <div class="grid-col-1 text-300 font-sans-3">32px</div>
  <div class="grid-col-fill">
    <span class="font-sans-12">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-12</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>13</code></div>
  <div class="grid-col-1 text-300 font-sans-3">36px</div>
  <div class="grid-col-fill">
    <span class="font-sans-13">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-13</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>14</code></div>
  <div class="grid-col-1 text-300 font-sans-3">40px</div>
  <div class="grid-col-fill">
    <span class="font-sans-14">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-14</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>15</code></div>
  <div class="grid-col-1 text-300 font-sans-3">48px</div>
  <div class="grid-col-fill">
    <span class="font-sans-15">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-15</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>16</code></div>
  <div class="grid-col-1 text-300 font-sans-3">56px</div>
  <div class="grid-col-fill">
    <span class="font-sans-16">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-16</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>17</code></div>
  <div class="grid-col-1 text-300 font-sans-3">64px</div>
  <div class="grid-col-fill">
    <span class="font-sans-17">Tallahassee</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-17</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>18</code></div>
  <div class="grid-col-1 text-300 font-sans-3">80px</div>
  <div class="grid-col-fill">
    <span class="font-sans-18">Utica</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-18</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>19</code></div>
  <div class="grid-col-1 text-300 font-sans-3">120px</div>
  <div class="grid-col-fill">
    <span class="font-sans-19">Utica</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-19</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-2 text-300 font-sans-3"><code>20</code></div>
  <div class="grid-col-1 text-300 font-sans-3">140px</div>
  <div class="grid-col-fill">
    <span class="font-sans-20">Utica</span>
  </div>
  <div class="grid-col-3 text-300 font-sans-2 text-right"><code>font-sans-20</code></div>
</div>



{:.margin-top-6}
### Using spacing units in utilities, settings, and component Sass
You'll access USWDS typecale units using a few different techniques, depending on your situation and coding style.

{:.margin-bottom-0}
#### Settings

{:.margin-top-05}
Use the spacing unit token when assigning a spacing unit to a settings variable.

{:.maxw-mobile-lg}
```
$theme-type-scale-micro:         1;
$theme-type-scale-smallest:      3;
$theme-type-scale-smaller:       5;
$theme-type-scale-small:         6;
$theme-type-scale-base:          7;
$theme-type-scale-large:         10;
$theme-type-scale-larger:        12;
$theme-type-scale-largest:       14;
$theme-type-scale-mega:          16;
```

{:.margin-bottom-0.margin-top-4}
#### Utilities

{:.margin-top-05}
Use the unquoted spacing unit token as a suffix in utilities.

{:.maxw-mobile-lg}
```
.margin-x-neg-1
.maxw-tablet
.padding-top-2px
.padding-y-05
```

{:.margin-bottom-0.margin-top-4}
#### Variables

{:.margin-top-05}
Add the unquoted spacing unit token as a suffix to the `$units-` variable.

{:.maxw-mobile-lg}
```
margin-left: $units-neg-1;
max-width: $units-tablet;
padding-top: $units-05;
```

{:.margin-bottom-0.margin-top-4}
#### Functions

{:.margin-top-05}
Use the `units()` function with spacing unit tokens.

Tokens `'05'`, `'105'`, and `'205'` and any `neg-` token may also use their unquoted numeric equivalent: `0.5`, `1.5`, `2.5`, `-0.5`, `-1`, etc.

{:.maxw-mobile-lg}
```
margin-left: units('neg-1');
margin-left: units(-1);
padding-top: units('05');
padding-top: units(0.5);
max-width: units('tablet');
```

{:.margin-bottom-0.margin-top-4}
#### Utility mixins

{:.margin-top-05}
Utility mixins accept spacing unit tokens.

Tokens `'05'`, `'105'`, and `'205'` and any `neg-` token may also use their numeric equivalents: `0.5`, `1.5`, `2.5`, `-0.5`, `-1`, etc.

{:.maxw-mobile-lg}
```
@include u-border-top('05', $primary-darker);
@include u-margin-x('neg-1');
@include u-margin-x(-1);
@include u-maxw('tablet');
@include u-padding-top('05');
@include u-padding-top(0.5);
@include u-padding-y(2);
```
