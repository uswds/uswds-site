---
permalink: /style-tokens/typesetting/font-size/
layout: styleguide
title: Font size
category: Style tokens
lead: Font size tokens determine how big or small the referenced text will appear on the screen. The USWDS typescale includes nine regularized theme tokens drawn from 21 system tokens.
type: docs
subnav:
- text: Theme tokens
  href: '#theme-tokens'
- text: System tokens
  href: '#system-tokens'
- text: Using size tokens
  href: '#using-typescale-in-utilities-settings-and-component-sass'
---

{:.bg-gold-20v.padding-2.radius-md}
Please see the [Typesetting]({{ site.baseurl }}/style-tokens/typesetting){:.text-ink.text-bold} section for more about font size normalization and how USWDS uses tokens for typesetting. The documentation below displays a "target size" in pixels, rather than the final output, which will be normalized depending on the typeface and output in `rem` customized to your project settings.

## Theme tokens
The following chart shows the USWDS default settings for the nine theme size tokens. Customize the output to your project needs in `$uswds-theme-typography.scss` following the example [below](#customizing-theme-tokens). If your project requires more than nine sizes, use [system size tokens](#system-tokens) as needed.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">

  <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Theme token</div>
    <div class="grid-col-2 text-700 font-sans-1">System token</div>
    <div class="grid-col-2 text-700 font-sans-1">Target size (px)</div>
    <div class="grid-col-6 text-700 font-sans-1">Example</div>
  </div>

  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>'3xs'</code></div>
    <div class="grid-col-2 text-300 font-sans-3">1</div>
    <div class="grid-col-2 text-300 font-sans-3">12px</div>
    <div class="grid-col-6">
      <span class="font-sans-3xs">Tallahassee</span>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>'2xs'</code></div>
    <div class="grid-col-2 text-300 font-sans-3">3</div>
    <div class="grid-col-2 text-300 font-sans-3">14px</div>
    <div class="grid-col-6">
      <span class="font-sans-2xs">Tallahassee</span>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>'xs'</code></div>
    <div class="grid-col-2 text-300 font-sans-3">5</div>
    <div class="grid-col-2 text-300 font-sans-3">16px</div>
    <div class="grid-col-6">
      <span class="font-sans-xs">Tallahassee</span>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>'sm'</code></div>
    <div class="grid-col-2 text-300 font-sans-3">6</div>
    <div class="grid-col-2 text-300 font-sans-3">17px</div>
    <div class="grid-col-6">
      <span class="font-sans-sm">Tallahassee</span>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>'md'</code></div>
    <div class="grid-col-2 text-300 font-sans-3">7</div>
    <div class="grid-col-2 text-300 font-sans-3">18px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-md">Tallahassee</span>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>'lg'</code></div>
    <div class="grid-col-2 text-300 font-sans-3">10</div>
    <div class="grid-col-2 text-300 font-sans-3">24px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-lg">Tallahassee</span>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>'xl'</code></div>
    <div class="grid-col-2 text-300 font-sans-3">12</div>
    <div class="grid-col-2 text-300 font-sans-3">32px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-xl">Tallahassee</span>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>'2xl'</code></div>
    <div class="grid-col-2 text-300 font-sans-3">14</div>
    <div class="grid-col-2 text-300 font-sans-3">40px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-2xl">Tallahassee</span>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>'3xl'</code></div>
    <div class="grid-col-2 text-300 font-sans-3">16</div>
    <div class="grid-col-2 text-300 font-sans-3">56px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-3xl">Tallahassee</span>
    </div>
  </div>
</div>

### Customizing theme tokens
Customize the output of your project's theme tokens in `_uswds-theme-typography.scss`. Assign [system size tokens](#system-tokens) to the following variables, then recompile your project CSS.

```
$theme-type-scale-3xs:      2;
$theme-type-scale-2xs:      3;
$theme-type-scale-xs:       4;
$theme-type-scale-sm:       5;
$theme-type-scale-md:       6;
$theme-type-scale-lg:       9;
$theme-type-scale-xl:       12;
$theme-type-scale-2xl:      14;
$theme-type-scale-3xl:      15;
```


{:.margin-top-6}
## System tokens

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">System token</div>
    <div class="grid-col-2 text-700 font-sans-1">Target size (px)</div>
    <div class="grid-col-fill text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>'micro'</code></div>
    <div class="grid-col-2 text-300 font-sans-3">10px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-micro">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>1</code></div>
    <div class="grid-col-2 text-300 font-sans-3">12px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-1">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>2</code></div>
    <div class="grid-col-2 text-300 font-sans-3">13px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-2">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>3</code></div>
    <div class="grid-col-2 text-300 font-sans-3">14px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-3">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>4</code></div>
    <div class="grid-col-2 text-300 font-sans-3">15px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-4">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>5</code></div>
    <div class="grid-col-2 text-300 font-sans-3">16px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-5">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>6</code></div>
    <div class="grid-col-2 text-300 font-sans-3">17px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-6">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>7</code></div>
    <div class="grid-col-2 text-300 font-sans-3">18px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-7">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>8</code></div>
    <div class="grid-col-2 text-300 font-sans-3">20px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-8">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>9</code></div>
    <div class="grid-col-2 text-300 font-sans-3">22px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-9">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>10</code></div>
    <div class="grid-col-2 text-300 font-sans-3">24px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-10">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>11</code></div>
    <div class="grid-col-2 text-300 font-sans-3">28px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-11">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>12</code></div>
    <div class="grid-col-2 text-300 font-sans-3">32px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-12">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>13</code></div>
    <div class="grid-col-2 text-300 font-sans-3">36px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-13">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>14</code></div>
    <div class="grid-col-2 text-300 font-sans-3">40px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-14">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>15</code></div>
    <div class="grid-col-2 text-300 font-sans-3">48px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-15">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>16</code></div>
    <div class="grid-col-2 text-300 font-sans-3">56px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-16">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>17</code></div>
    <div class="grid-col-2 text-300 font-sans-3">64px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-17">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>18</code></div>
    <div class="grid-col-2 text-300 font-sans-3">80px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-18">Tallahassee</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>19</code></div>
    <div class="grid-col-2 text-300 font-sans-3">120px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-19">Utica</span>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-gray-10">
    <div class="grid-col-2 text-300 font-sans-3"><code>20</code></div>
    <div class="grid-col-2 text-300 font-sans-3">140px</div>
    <div class="grid-col-fill line-height-sans-1">
      <span class="font-sans-20">Utica</span>
    </div>
  </div>
</div>

## Using size tokens
Your context and coding style determine how you access USWDS font size tokens in code. Because of [font size normalization]({{ site.baseurl }}/style-tokens/typesetting/), font size functions, utilities, amd mixins also require a [family]({{ site.baseurl }}/style-tokens/typesetting/font-family/){:.token} token.


<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Context</div>
    <div class="grid-col-5 text-700 font-sans-1">Usage</div>
    <div class="grid-col-5 text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">function<br/>
      <span class="text-normal">font-size</span>
    </div>
    <div class="grid-col-5">font-size: size(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>)</div>
    <div class="grid-col-5">font-size: size(<code>'body'</code>, <code>'2xl'</code>);</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">
      mixin<br/>
      <span class="text-normal">font-size</span>
    </div>
    <div class="grid-col-5">@include u-font-size(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>)</div>
    <div class="grid-col-5">@include u-font-size(<code>'body'</code>, <code>'2xl'</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">
      mixin<br/>
      <span class="text-normal">font-family</span><br/>
      <span class="text-normal">font-size</span>
    </div>
    <div class="grid-col-5">@include u-font(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>)</div>
    <div class="grid-col-5">@include u-font(<code>'body'</code>, <code>'2xl'</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">setting</div>
    <div class="grid-col-5">$theme-variable: <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a></div>
    <div class="grid-col-5">$theme-h1-font-size: <code>'2xl'</code>;</div>
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
