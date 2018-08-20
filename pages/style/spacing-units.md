---
permalink: /style/spacing-units/
layout: styleguide
title: Spacing units
category: Style
lead: USWDS spacing units are based on multiples of 8px, with additional spacing units at small sizes
type: docs
subnav:
- text: Using spacing units
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

Any spacing value in utilities or component CSS should use the following USWDS spacing units. These values are common to all USWDS projects and are based on multiples of 8px. They are the only values we use to build official components. Any components we accept back into the system need to be built with these system spacing units.

Values above `2px` are output as the eqivalent value in rem. For instance, a value of 2 units would be output as `1.6rem` with `$theme-base-font-size` set to `10px` and would be output as `1rem` with `$theme-base-font-size` set to `16px` or with `$theme-respect-user-font-size` set to `true`.

<div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px margin-top-6 text-bold">
  <div class="grid-col-1 text-700 font-sans-1">units</div>
  <div class="grid-col-1 text-700 font-sans-1">px</div>
  <div class="grid-col-2 text-700 font-sans-1">token</div>
  <div class="grid-col-fill text-700 font-sans-1">example</div>
</div>

<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">—</div>
  <div class="grid-col-1 text-300 font-sans-3">1px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">1px</code></div>
  <div class="grid-col-fill">
    <span class="display-block width-full height-1px bg-blue-60v"></span>
  </div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">—</div>
  <div class="grid-col-1 text-300 font-sans-3">2px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">2px</code></div>
  <div class="grid-col-fill">
    <span class="display-block width-full height-2px bg-blue-60v"></span>
  </div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">0.5</div>
  <div class="grid-col-1 text-300 font-sans-3">4px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'05'</code></div>
  <div class="grid-col-fill">
    <span class="display-block width-full height-05 bg-blue-60v"></span>
  </div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">1</div>
  <div class="grid-col-1 text-300 font-sans-3">8px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">1</code></div>
  <div class="grid-col-fill">
    <span class="display-block width-full height-1 bg-blue-60v"></span>
  </div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">1.5</div>
  <div class="grid-col-1 text-300 font-sans-3">12px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'105'</code></div>
  <div class="grid-col-fill">
    <span class="display-block width-full height-105 bg-blue-60v"></span>
  </div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">2</div>
  <div class="grid-col-1 text-300 font-sans-3">16px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">2</code></div>
  <div class="grid-col-fill">
    <span class="display-block width-full height-2 bg-blue-60v"></span>
  </div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">2.5</div>
  <div class="grid-col-1 text-300 font-sans-3">20px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'205'</code></div>
  <div class="grid-col-fill">
    <span class="display-block width-full height-205 bg-blue-60v"></span>
  </div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">3</div>
  <div class="grid-col-1 text-300 font-sans-3">24px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">3</code></div>
  <div class="grid-col-fill">
    <span class="display-block width-full height-3 bg-blue-60v"></span>
  </div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">4</div>
  <div class="grid-col-1 text-300 font-sans-3">32px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">4</code></div>
  <div class="grid-col-fill">
    <span class="display-block width-full height-4 bg-blue-60v"></span>
  </div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">5</div>
  <div class="grid-col-1 text-300 font-sans-3">40px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">5</code></div>
  <div class="grid-col-fill">
    <span class="display-block width-full height-5 bg-blue-60v"></span>
  </div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">6</div>
  <div class="grid-col-1 text-300 font-sans-3">48px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">6</code></div>
  <div class="grid-col-fill">
    <span class="display-block width-full height-6 bg-blue-60v"></span>
  </div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">7</div>
  <div class="grid-col-1 text-300 font-sans-3">56px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">7</code></div>
  <div class="grid-col-fill">
    <span class="display-block width-full height-7 bg-blue-60v"></span>
  </div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">8</div>
  <div class="grid-col-1 text-300 font-sans-3">64px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">8</code></div>
  <div class="grid-col-fill">
    <span class="display-block width-full height-8 bg-blue-60v"></span>
  </div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">9</div>
  <div class="grid-col-1 text-300 font-sans-3">72px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">9</code></div>
  <div class="grid-col-fill">
    <span class="display-block width-full height-9 bg-blue-60v"></span>
  </div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">10</div>
  <div class="grid-col-1 text-300 font-sans-3">80px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">10</code></div>
  <div class="grid-col-fill">
    <span class="display-block width-full height-10 bg-blue-60v"></span>
  </div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">15</div>
  <div class="grid-col-1 text-300 font-sans-3">120px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">15</code></div>
  <div class="grid-col-fill">
    <span class="display-block width-full height-15 bg-blue-60v"></span>
  </div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">20</div>
  <div class="grid-col-1 text-300 font-sans-3">160px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'card'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">30</div>
  <div class="grid-col-1 text-300 font-sans-3">240px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'card-lg'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">40</div>
  <div class="grid-col-1 text-300 font-sans-3">320px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'mobile'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">60</div>
  <div class="grid-col-1 text-300 font-sans-3">480px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'mobile-lg'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">80</div>
  <div class="grid-col-1 text-300 font-sans-3">640px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'tablet'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">110</div>
  <div class="grid-col-1 text-300 font-sans-3">880px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'tablet-lg'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">128</div>
  <div class="grid-col-1 text-300 font-sans-3">1024px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'desktop'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">150</div>
  <div class="grid-col-1 text-300 font-sans-3">1200px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'desktop-lg'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">175</div>
  <div class="grid-col-1 text-300 font-sans-3">1400px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'widescreen'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">—</div>
  <div class="grid-col-1 text-300 font-sans-3">-1px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'neg-1px'</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">—</div>
  <div class="grid-col-1 text-300 font-sans-3">-2px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'neg-2px'</code></div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">-0.5</div>
  <div class="grid-col-1 text-300 font-sans-3">-4px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'neg-05'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">-1</div>
  <div class="grid-col-1 text-300 font-sans-3">-8px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'neg-1'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">-1.5</div>
  <div class="grid-col-1 text-300 font-sans-3">-12px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'neg-105'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">-2</div>
  <div class="grid-col-1 text-300 font-sans-3">-16px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'neg-2'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">-2.5</div>
  <div class="grid-col-1 text-300 font-sans-3">-20px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'neg-205'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">-3</div>
  <div class="grid-col-1 text-300 font-sans-3">-24px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'neg-3'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">-4</div>
  <div class="grid-col-1 text-300 font-sans-3">-32px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'neg-4'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">-5</div>
  <div class="grid-col-1 text-300 font-sans-3">-40px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'neg-5'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">-6</div>
  <div class="grid-col-1 text-300 font-sans-3">-48px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'neg-6'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">-7</div>
  <div class="grid-col-1 text-300 font-sans-3">-56px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'neg-7'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">-8</div>
  <div class="grid-col-1 text-300 font-sans-3">-64px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'neg-8'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">-9</div>
  <div class="grid-col-1 text-300 font-sans-3">-72px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'neg-9'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">-10</div>
  <div class="grid-col-1 text-300 font-sans-3">-80px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'neg-10'</code></div>
  <div class="grid-col-fill">—</div>
</div>
<div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
  <div class="grid-col-1 text-300 font-sans-3">-15</div>
  <div class="grid-col-1 text-300 font-sans-3">-120px</div>
  <div class="grid-col-2 text-300 font-mono-3"><code class="text-300">'neg-15'</code></div>
  <div class="grid-col-fill">—</div>
</div>

{:.margin-top-6}
## Using spacing units in utilities, settings, and component Sass
You'll access USWDS spacing units using a few different techniques, depending on your situation and coding style.

{:.margin-bottom-0}
### Settings

{:.margin-top-05}
Use the spacing unit token when assigning a spacing unit to a settings variable.

Tokens `'05'`, `'105'`, and `'205'` and any `neg-` token may also use their unquoted numeric equivalent: `0.5`, `1.5`, `2.5`, `-0.5`, `-1`, etc. _You cannot use variables, functions, or mixins in theme settings._

{:.maxw-mobile-lg}
```
$theme-nav-width:        'desktop';
$theme-site-margins:     4;
$theme-column-gap-small: 2px;
$theme-column-gap-small: '05';
$theme-column-gap-small: 0.5;
$theme-column-gap:       2;
```

{:.margin-bottom-0.margin-top-4}
### Utilities

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
### Variables

{:.margin-top-05}
Add the unquoted spacing unit token as a suffix to the `$units-` variable.

{:.maxw-mobile-lg}
```
margin-left: $units-neg-1;
max-width: $units-tablet;
padding-top: $units-05;
```

{:.margin-bottom-0.margin-top-4}
### Functions

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
### Utility mixins

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
