---
permalink: /style-tokens/spacing-units/
layout: styleguide
title: Spacing units
category: Style tokens
lead: USWDS spacing unit tokens are based on multiples of 8px, with additional tokens for small sizes, named tokens for large sizes, and a more limited selection of negative tokens.
type: docs
subnav:
- text: Spacing unit tokens
  href: '#spacing-unit-tokens'
- text: Using spacing unit tokens
  href: '#using-spacing-unit-tokens'
---

Any spacing value in utilities or component CSS should use the following spacing unit tokens, based on multiples of 8px. The documentation below displays a target size in pixels, but the final output for tokens above `2px` and below `-2px` is the eqivalent value in `rem`, which will vary depending on your project settings.

## Spacing unit tokens

{:.bg-gold-20v.padding-2.radius-md}
**Note:** Some tokens have both a **numeric value** (like `0.5` or `-2`) and a **string value** (like `'05'` or `'neg-2'`). _Utility classes use string values exclusively when they exist_ (like `.margin-x-neg-2`). Mixins and function usually accept either, and we will note any exceptions.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px font-mono-3 margin-top-4">
  <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-3 text-700 font-sans-1">Token</div>
    <div class="grid-col-1 text-700 font-sans-1">Multiple</div>
    <div class="grid-col-1 text-700 font-sans-1">Pixels</div>
    <div class="grid-col-fill text-700 font-sans-1">Example</div>
  </div>

  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-3"><code>1px</code></div>
    <div class="grid-col-1">—</div>
    <div class="grid-col-1">1px</div>
    <div class="grid-col-fill">
      <span class="display-block width-full height-1px bg-blue-60v"></span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>2px</code></div>
    <div class="grid-col-1">—</div>
    <div class="grid-col-1">2px</div>
    <div class="grid-col-fill">
      <span class="display-block width-full height-2px bg-blue-60v"></span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>0.5</code>, <code>'05'</code></div>
    <div class="grid-col-1">0.5</div>
    <div class="grid-col-1">4px</div>
    <div class="grid-col-fill">
      <span class="display-block width-full height-05 bg-blue-60v"></span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>1</code></div>
    <div class="grid-col-1">1</div>
    <div class="grid-col-1">8px</div>
    <div class="grid-col-fill">
      <span class="display-block width-full height-1 bg-blue-60v"></span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>1.5</code>, <code>'105'</code></div>
    <div class="grid-col-1">1.5</div>
    <div class="grid-col-1">12px</div>
    <div class="grid-col-fill">
      <span class="display-block width-full height-105 bg-blue-60v"></span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>2</code></div>
    <div class="grid-col-1">2</div>
    <div class="grid-col-1">16px</div>
    <div class="grid-col-fill">
      <span class="display-block width-full height-2 bg-blue-60v"></span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>2.5</code>, <code>'205'</code></div>
    <div class="grid-col-1">2.5</div>
    <div class="grid-col-1">20px</div>
    <div class="grid-col-fill">
      <span class="display-block width-full height-205 bg-blue-60v"></span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>3</code></div>
    <div class="grid-col-1">3</div>
    <div class="grid-col-1">24px</div>
    <div class="grid-col-fill">
      <span class="display-block width-full height-3 bg-blue-60v"></span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>4</code></div>
    <div class="grid-col-1">4</div>
    <div class="grid-col-1">32px</div>
    <div class="grid-col-fill">
      <span class="display-block width-full height-4 bg-blue-60v"></span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>5</code></div>
    <div class="grid-col-1">5</div>
    <div class="grid-col-1">40px</div>
    <div class="grid-col-fill">
      <span class="display-block width-full height-5 bg-blue-60v"></span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>6</code></div>
    <div class="grid-col-1">6</div>
    <div class="grid-col-1">48px</div>
    <div class="grid-col-fill">
      <span class="display-block width-full height-6 bg-blue-60v"></span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>7</code></div>
    <div class="grid-col-1">7</div>
    <div class="grid-col-1">56px</div>
    <div class="grid-col-fill">
      <span class="display-block width-full height-7 bg-blue-60v"></span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>8</code></div>
    <div class="grid-col-1">8</div>
    <div class="grid-col-1">64px</div>
    <div class="grid-col-fill">
      <span class="display-block width-full height-8 bg-blue-60v"></span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>9</code></div>
    <div class="grid-col-1">9</div>
    <div class="grid-col-1">72px</div>
    <div class="grid-col-fill">
      <span class="display-block width-full height-9 bg-blue-60v"></span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>10</code></div>
    <div class="grid-col-1">10</div>
    <div class="grid-col-1">80px</div>
    <div class="grid-col-fill">
      <span class="display-block width-full height-10 bg-blue-60v"></span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>15</code></div>
    <div class="grid-col-1">15</div>
    <div class="grid-col-1">120px</div>
    <div class="grid-col-fill">
      <span class="display-block width-full height-15 bg-blue-60v"></span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'card'</code></div>
    <div class="grid-col-1">20</div>
    <div class="grid-col-1">160px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'card-lg'</code></div>
    <div class="grid-col-1">30</div>
    <div class="grid-col-1">240px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'mobile'</code></div>
    <div class="grid-col-1">40</div>
    <div class="grid-col-1">320px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'mobile-lg'</code></div>
    <div class="grid-col-1">60</div>
    <div class="grid-col-1">480px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'tablet'</code></div>
    <div class="grid-col-1">80</div>
    <div class="grid-col-1">640px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'tablet-lg'</code></div>
    <div class="grid-col-1">110</div>
    <div class="grid-col-1">880px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'desktop'</code></div>
    <div class="grid-col-1">128</div>
    <div class="grid-col-1">1024px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'desktop-lg'</code></div>
    <div class="grid-col-1">150</div>
    <div class="grid-col-1">1200px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'widescreen'</code></div>
    <div class="grid-col-1">175</div>
    <div class="grid-col-1">1400px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'neg-1px'</code></div>
    <div class="grid-col-1">—</div>
    <div class="grid-col-1">-1px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'neg-2px'</code></div>
    <div class="grid-col-1">—</div>
    <div class="grid-col-1">-2px</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>-0.5</code>, <code>'neg-05'</code></div>
    <div class="grid-col-1">-0.5</div>
    <div class="grid-col-1">-4px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'neg-1'</code></div>
    <div class="grid-col-1">-1</div>
    <div class="grid-col-1">-8px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'neg-105'</code></div>
    <div class="grid-col-1">-1.5</div>
    <div class="grid-col-1">-12px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'neg-2'</code></div>
    <div class="grid-col-1">-2</div>
    <div class="grid-col-1">-16px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'neg-205'</code></div>
    <div class="grid-col-1">-2.5</div>
    <div class="grid-col-1">-20px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'neg-3'</code></div>
    <div class="grid-col-1">-3</div>
    <div class="grid-col-1">-24px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'neg-4'</code></div>
    <div class="grid-col-1">-4</div>
    <div class="grid-col-1">-32px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'neg-5'</code></div>
    <div class="grid-col-1">-5</div>
    <div class="grid-col-1">-40px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'neg-6'</code></div>
    <div class="grid-col-1">-6</div>
    <div class="grid-col-1">-48px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'neg-7'</code></div>
    <div class="grid-col-1">-7</div>
    <div class="grid-col-1">-56px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'neg-8'</code></div>
    <div class="grid-col-1">-8</div>
    <div class="grid-col-1">-64px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'neg-9'</code></div>
    <div class="grid-col-1">-9</div>
    <div class="grid-col-1">-72px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-3"><code>'neg-10'</code></div>
    <div class="grid-col-1">-10</div>
    <div class="grid-col-1">-80px</div>
    <div class="grid-col-fill">—</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2">
    <div class="grid-col-3"><code>'neg-15'</code></div>
    <div class="grid-col-1">-15</div>
    <div class="grid-col-1">-120px</div>
    <div class="grid-col-fill">—</div>
  </div>
</div>

## Using spacing unit tokens
Your context and coding style determine how you access USWDS spacing unit tokens in code.

Many mixins and utilities accept spacing unit tokens. See the [utilities section]({{ site.baseurl }}/utilities/) for more on individual utilities and their matching mixins. We show only a few representative examples below.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Context</div>
    <div class="grid-col-5 text-700 font-sans-1">Usage</div>
    <div class="grid-col-5 text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">function
    </div>
    <div class="grid-col-5">units(<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">units</a>)</div>
    <div class="grid-col-5">
      padding-top: units(<code>3</code>);<br/>
      margin-left: units(<code>-2px</code>);<br/>
      border-radius: units(<code>0.5</code>);<br/>
      min-height: units(<code>'card'</code>);<br/>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">
      mixin
    </div>
    <div class="grid-col-5">@include at-media(<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">units</a>)</div>
    <div class="grid-col-5">@include at-media(<code>'mobile-lg'</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">setting</div>
    <div class="grid-col-5">$theme-variable: <a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">units</a></div>
    <div class="grid-col-5">$theme-site-margin-mobile: <code>2</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility
    </div>
    <div class="grid-col-5">
      .padding-x-<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">units</a><br/>
      .margin-x-<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">units</a>
    </div>
    <div class="grid-col-5">
      .padding-x-<code>2</code>;<br/>
      .margin-x-<code>neg-2</code>;<br/>
    </div>
  </div>
</div>
