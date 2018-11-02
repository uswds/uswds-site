---
permalink: /style-tokens/color/system-tokens/
layout: styleguide
title: System color tokens
category: Style tokens
lead: USWDS system color tokens are the complete palette of color tokens from which any project can build a theme palette
type: docs
subnav:
  - text: Red warm
    href: '#red-warm'
  - text: Red
    href: '#red'
  - text: Orange warm
    href: '#orange-warm'
  - text: Orange
    href: '#orange'
  - text: Gold
    href: '#gold'
  - text: Yellow
    href: '#yellow'
  - text: Green warm
    href: '#green-warm'
  - text: Green
    href: '#green'
  - text: Green cool
    href: '#green-cool'
  - text: Mint
    href: '#mint'
  - text: Mint cool
    href: '#mint-cool'
  - text: Cyan
    href: '#cyan'
  - text: Blue
    href: '#blue'
  - text: Blue warm
    href: '#blue-warm'
  - text: Indigo cool
    href: '#indigo-cool'
  - text: Indigo
    href: '#indigo'
  - text: Indigo warm
    href: '#indigo-warm'
  - text: Violet
    href: '#violet'
  - text: Violet warm
    href: '#violet-warm'
  - text: Magenta
    href: '#magenta'
  - text: Gray cool
    href: '#gray-cool'
  - text: Gray
    href: '#gray'
  - text: Gray warm
    href: '#gray-warm'
  - text: Using color tokens
    href: '#using-color-tokens'
families:
  - red_warm
  - red_warm_vivid
  - red
  - red_vivid
  - orange_warm
  - orange_warm_vivid
  - orange
  - orange_vivid
  - gold
  - gold_vivid
  - yellow
  - yellow_vivid
  - green_warm
  - green_warm_vivid
  - green
  - green_vivid
  - green_cool
  - green_cool_vivid
  - mint
  - mint_vivid
  - mint_cool
  - mint_cool_vivid
  - cyan
  - cyan_vivid
  - blue
  - blue_vivid
  - blue_warm
  - blue_warm_vivid
  - indigo_cool
  - indigo_cool_vivid
  - indigo
  - indigo_vivid
  - indigo_warm
  - indigo_warm_vivid
  - violet
  - violet_vivid
  - violet_warm
  - violet_warm_vivid
  - magenta
  - magenta_vivid
  - gray_cool
  - gray
  - gray_warm
---

{% assign system_colors = site.data.uswds_tokens.colors.system %}

<div class="padding-top-1 tablet:padding-top-3 maxw-tablet-lg">

  {% for family in page.families %}
    {% capture last %}{{ family | split: '_' | last }}{% endcapture %}
    {% capture this_title %}{{ family | replace: '_', ' ' | capitalize }}{% endcapture %}
    {% if last == 'vivid' %}
      {% capture this_title %}{{ family | replace: '_', ' ' | replace: ' vivid', '' | capitalize }}<span class="text-normal"> vivid</span>{% endcapture %}
    {% endif%}
    <div class="site-table-wrapper">
      <table class="usa-table-borderless site-table-responsive">
        <caption class="site-caption-swatches" id="{{ family | replace: '_', '-' }}">{{ this_title }}</caption>
        <thead>
          <tr>
            <th scope="col">Color</th>
            <th scope="col">Family</th>
            <th scope="col">Grade</th>
            <th scope="col">Variant</th>
            <th scope="col">System token</th>
            <th scope="col" class="text-right">Hex</th>
          </tr>
        </thead>
        <tbody>
          {% for color in system_colors[family] %}
            {% include style/swatch-condensed.html %}
          {% endfor %}
        </tbody>
      </table>
    </div>
  {% endfor %}
</div>

## Using color tokens
Your context and coding style determine how you access USWDS color tokens in code.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Context</div>
    <div class="grid-col-5 text-700 font-sans-1">Usage</div>
    <div class="grid-col-5 text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3 line-height-mono-6">
    <div class="grid-col-2 text-bold font-sans-3">function</div>
    <div class="grid-col-5">color: color(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)</div>
    <div class="grid-col-5">color: color(<code>'primary-vivid'</code>);</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3 line-height-mono-6">
    <div class="grid-col-2 text-bold font-sans-3 line-height-mono-2">
      mixin<br/>
      <span class="text-normal">background-color</span>
    </div>
    <div class="grid-col-5">
      @include u-bg(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)
    </div>
    <div class="grid-col-5">
      @include u-bg(<code>'red-50v'</code>)<br/>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3 line-height-mono-6">
    <div class="grid-col-2 text-bold font-sans-3 line-height-mono-2">
      mixin<br/>
      <span class="text-normal">color</span>
    </div>
    <div class="grid-col-5">
      @include u-text(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)
    </div>
    <div class="grid-col-5">
      @include u-text(<code>'red-50v'</code>)<br/>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3 line-height-mono-6">
    <div class="grid-col-2 text-bold font-sans-3 line-height-mono-2">
      mixin<br/>
      <span class="text-normal">border-color</span>
    </div>
    <div class="grid-col-5">
      @include u-border(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)
    </div>
    <div class="grid-col-5">
      @include u-border(<code>'red-50v'</code>)<br/>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3 line-height-mono-6">
    <div class="grid-col-2 text-bold font-sans-3 line-height-mono-2">
      mixin<br/>
      <span class="text-normal">outline-color</span>
    </div>
    <div class="grid-col-5">
      @include u-outline(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)
    </div>
    <div class="grid-col-5">
      @include u-outline(<code>'red-50v'</code>)<br/>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3 line-height-mono-6">
    <div class="grid-col-2 text-bold font-sans-3 line-height-mono-2">
      mixin<br/>
      <span class="text-normal">text-decoration-color</span>
    </div>
    <div class="grid-col-5">
      @include u-underline(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)
    </div>
    <div class="grid-col-5">
      @include u-underline(<code>'red-50v'</code>)<br/>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">setting</div>
    <div class="grid-col-5">$theme-variable: <a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">$theme-color-accent-warm: <code>'orange-40'</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility<br/>
      <span class="text-normal">background-color</span>
    </div>
    <div class="grid-col-5">.bg-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">.bg-<code>primary-vivid</code></div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility<br/>
      <span class="text-normal">border-color</span>
    </div>
    <div class="grid-col-5">.border-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">.border-<code>primary-vivid</code></div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility<br/>
      <span class="text-normal">color</span>
    </div>
    <div class="grid-col-5">.text-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">.text-<code>primary-vivid</code></div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility<br/>
      <span class="text-normal">outline-color</span>
    </div>
    <div class="grid-col-5">.text-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">.text-<code>primary-vivid</code></div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3 line-height-mono-2">utility<br/>
      <span class="text-normal">text-decoration-color</span>
    </div>
    <div class="grid-col-5">.underline-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">.underline-<code>primary-vivid</code></div>
  </div>
</div>
