---
permalink: /design-tokens/color/system-tokens/
layout: styleguide
title: System color tokens
category: Design tokens
lead: USWDS system color tokens are the complete palette of color tokens from which any project can build a theme palette.
type: docs
redirect_from:
  - /components/colors/system/
  - /colors/system/
  - /color/system/
subnav:
  - text: Red cool
    href: '#red-cool'
  - text: Red
    href: '#red'
  - text: Red warm
    href: '#red-warm'
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
  - text: Blue cool
    href: '#blue-cool'
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
  - red-cool
  - red-cool-vivid
  - red
  - red-warm
  - red-warm-vivid
  - red-vivid
  - orange-warm
  - orange-warm-vivid
  - orange
  - orange-vivid
  - gold
  - gold-vivid
  - yellow
  - yellow-vivid
  - green-warm
  - green-warm-vivid
  - green
  - green-vivid
  - green-cool
  - green-cool-vivid
  - mint
  - mint-vivid
  - mint-cool
  - mint-cool-vivid
  - cyan
  - cyan-vivid
  - blue-cool
  - blue-cool-vivid
  - blue
  - blue-vivid
  - blue-warm
  - blue-warm-vivid
  - indigo-cool
  - indigo-cool-vivid
  - indigo
  - indigo-vivid
  - indigo-warm
  - indigo-warm-vivid
  - violet
  - violet-vivid
  - violet-warm
  - violet-warm-vivid
  - magenta
  - magenta-vivid
  - gray-cool
  - gray
  - gray-warm
---

{% assign system_colors = site.data.tokens.color.system %}

<div class="padding-top-1 tablet:padding-top-3 maxw-tablet-lg">

  {% for family in page.families %}
    {% capture last %}{{ family | split: '-' | last }}{% endcapture %}
    {% capture this_title %}{{ family | replace: '-', ' ' | capitalize }}{% endcapture %}
    {% if last == 'vivid' %}
      {% capture this_title %}{{ family | replace: '-', ' ' | replace: ' vivid', '' | capitalize }}<span class="text-normal"> vivid</span>{% endcapture %}
    {% endif%}
    <div class="site-table-wrapper">
      <table class="usa-table--borderless site-table-responsive">
        <caption class="site-caption-swatches" id="{{ family }}">{{ this_title }}</caption>
        <thead>
          <tr>
            <th scope="col">Color</th>
            <th scope="col">Token</th>
            <th scope="col">Family</th>
            <th scope="col">Grade</th>
            <th scope="col">Variant</th>
            <th scope="col" class="text-right">Hex</th>
          </tr>
        </thead>
        <tbody class="font-mono-2xs">
          {% for item in system_colors[family] %}
            {% include style/swatch-condensed.html %}
          {% endfor %}
        </tbody>
      </table>
    </div>
  {% endfor %}
</div>

## Using color tokens
Your context and coding style determine how you access USWDS color tokens in code.

<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Context</th>
        <th scope="col">Usage</th>
        <th scope="col">Example</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">function</span>
        </th>
        <td data-title="Description">
          <span>
            color: color(<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            color: color(<code>'red-50v'</code>)
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>mixin</span><br/>
            <span class="text-normal">background-color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            @include u-bg(<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-bg(<code>'red-50v'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>mixin</span><br/>
            <span class="text-normal">color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            @include u-text(<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>)<br/>
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-text(<code>'red-50v'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>mixin</span><br/>
            <span class="text-normal">border-color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            @include u-border(<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-border(<code>'red-50v'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>mixin</span><br/>
            <span class="text-normal">text-decoration-color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            @include u-underline(<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-underline(<code>'red-50v'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span>
            <span class="font-lang-3">setting</span><br/>
          </span>
        </th>
        <td data-title="Description">
          <span>
            $theme-variable: <a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            $theme-color-warning: <code>'red-50v'</code>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>mixin</span><br/>
            <span class="text-normal">text-decoration-color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            @include u-underline(<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-underline(<code>'red-50v'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>utility</span><br/>
            <span class="text-normal">background-color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            .bg-<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .bg-<code>red-50v</code>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>utility</span><br/>
            <span class="text-normal">border-color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            .border-<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .border-<code>red-50v</code>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>utility</span><br/>
            <span class="text-normal">color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            .text-<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .text-<code>red-50v</code>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>utility</span><br/>
            <span class="text-normal">outline-color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            .outline-<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .outline-<code>red-50v</code>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>utility</span><br/>
            <span class="text-normal">text-decoration-color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            .underline-<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .underline-<code>red-50v</code>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
