---
permalink: /style/color/system-palette-adjust/
layout: styleguide
title: System palette adjustments
category: Style
lead: Use this page as a reference for luminance based adjustments
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
  - text: Gray warm
    href: '#gray-warm'
  - text: Gray
    href: '#gray'
  - text: Gray cool
    href: '#gray-cool'
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

<div class="padding-top-3 text-normal maxw-tablet-lg">
  {% for family in page.families %}
    {% capture last %}{{ family | split: '_' | last }}{% endcapture %}
    {% capture this_title %}{{ family | replace: '_', ' ' | capitalize }}{% endcapture %}
    {% if last == 'vivid' %}
      {% capture this_title %}{{ family | replace: '_', ' ' | replace: ' vivid', '' | capitalize }}<span class="text-normal"> vivid</span>{% endcapture %}
    {% endif%}
    <div class="bg-white padding-y-2 padding-x-3 radius-md border border-base-light margin-bottom-2">
      <h2 class="font-sans-10 margin-top-0 margin-bottom-1 text-ink" id="{{ family | replace: '_', '-' }}">{{ this_title }}</h2>

      <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px margin-top-2 text-bold font-sans-1">
        <div class="grid-col-2">color</div>
        <div class="grid-col-2">family</div>
        <div class="grid-col-1">grade</div>
        <div class="grid-col-2">variant</div>
        <div class="grid-col-3">variable</div>
        <div class="grid-col-fill text-right">hex</div>
      </div>

      {% for color in system_colors[family] %}
        {% include style/swatch-condensed.html %}
      {% endfor %}
    </div>
    {% endfor %}
</div>
