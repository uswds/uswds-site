---
permalink: /utilities/outline/
layout: styleguide
type: utility
title: Outline
category: Utilities
lead: Set width and color of an item’s outline
subnav:
- text: Outline
  href: '#utility-outline'
- text: Outline color
  href: '#utility-outline-color'
---

{% assign outline_widths =
  site.data.uswds_tokens.special.zero_zero
  | concat: site.data.uswds_tokens.spacing.positive.smaller
  | concat: site.data.uswds_tokens.special.spacing_05
  %}

{% assign outline_colors = site.data.uswds_tokens.colors.required %}

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="token utilities-property">outline</span>
    <span class="token utilities-property">outline-color</span>
  </div>
</div>

<section class="utilities-section">

  <div class="grid-row utilities-section-title-bar">
    <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-ink text-no-wrap">advanced settings</a>.</p>
  </div>

  <section class="utility" id="utility-outline">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Outline</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">outline</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>

    <section class="utility-examples">
      <p class="utility-note"><strong>Note: </strong> The <code>outline</code> utilities apply a solid outline of specified width.</p>

      <div class="grid-row">
        {% for width in outline_widths %}
          <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
            <div class="outline-{{ width.token }} square-9 bg-base-lightest"></div>
            <div class="display-flex flex-column flex-align-start margin-top-2">
              <span class="utility-class">.outline-{{ width.token }}</span>
              <span class="utility-value margin-top-2px">{{ width.value }}</span>
            </div>
          </div>
        {% endfor %}
      </div>
    </section><!-- exanples -->
  </section><!-- utility -->

  <section class="utility" id="utility-outline-color">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Outline color</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">outline-color</span></p>
        </div>
        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>
    <section class="utility-examples">
      <div class="grid-row">
        {% for color in outline_colors %}
          <p class="utility-example-container-condensed grid-col-12 display-flex flex-align-center">
            <span class="flex-fill">
              <span class="square-4 radius-sm text-middle padding-05 display-inline-block margin-right-1 bg-white ">
                <span class="square-3 radius-sm display-block outline-1px outline-{{ color.token }}"></span>
              </span>
              <span class="square-4 radius-sm text-middle padding-05 display-inline-block margin-right-1 bg-ink">
                <span class="square-3 radius-sm display-block outline-1px outline-{{ color.token }}"></span>
              </span>
              <span class="utility-class"><span class="text-light">.outline-1px</span>.outline-{{ color.token }}</span>
            </span>
            <span class="flex-auto utility-value-color">
              <span class="utility-value-color-chip bg-{{ color.token }}"></span>
              {{ color.value }}
            </span>
          </p>
        {% endfor %}
      </div>
    </section>
  </section>

  {% include utilities/responsive-variants.html %}

  {% include utilities/state-variants.html %}

  <section class="utilities-section">
    <h2 class="utilities-section-title">Default output</h2>
    <div class="grid-row font-sans-1 text-bold border-bottom-1px padding-bottom-05 margin-top-2 border-gray-20">
      <div class="grid-col-4">Utility</div>
      <div class="grid-col-6">Output SCSS</div>
      <div class="grid-col-2">Default variable value</div>
    </div>
    <dl class="output-list">
      {% for item in outline_widths %}
        <dt class="output-utility">.outline-{{ item.token }}</dt>
        <dd class="output-css">
          <span class="output-rule">outline: {% if item.scss %}<span class="output-token">{{ item.scss }}</span>{% else %}{{ item.value }}{% endif %} solid</span>
        </dd>
        <dd class="output-variable">{% if item.scss %}{{ item.value }}{% else %}—{% endif %}</dd>
      {% endfor %}

      {% for color in outline_colors %}
        <dt class="output-utility">.outline-{{ color.token }}</dt>
        <dd class="output-css">
          <span class="output-rule">outline-color: {% if color.var %}<span class="output-token">{{ color.var }}</span>{% else %}{{ color.token }}{% endif %}</span>
        </dd>
        <dd class="output-variable">
          {% if color.var %}
            <span class="display-inline-block bg-{{ color.token }} circle-105 text-baseline margin-right-05"></span>
            {{ color.value }}
          {% else %}
            —
          {% endif %}
        </dd>
      {% endfor %}
    </dl>
  </section>

  {% include utilities/advanced-settings.html %}
