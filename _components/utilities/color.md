---
permalink: /utilities/color/
layout: styleguide
type: utility
title: Color
category: Utilities
lead: Change the color of text and the background color of an item.
subnav:
- text: Text color
  href: '#text-color'
- text: Background color
  href: '#background-color'
---

{% assign theme_colors = site.data.uswds_tokens.colors.project_theme %}
{% assign grayscale_colors = site.data.uswds_tokens.colors.grayscale %}
{% assign basic_colors = site.data.uswds_tokens.colors.basic %}
{% assign all_colors = theme_colors
  | concat: grayscale_colors
  | concat: basic_colors
  %}

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="token utilities-property">background-color</span>
    <span class="token utilities-property">color</span>
  </div>
</div>

<section class="utilities-section">

  <div class="grid-row utilities-section-title-bar">
    <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-ink text-no-wrap">advanced settings</a>.</p>
  </div>

  <section class="utility" id="text-color">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Text color</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">color</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-active"><a href="#0">responsive</a></li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-active"><a href="#0">hover</a></li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>

    <section class="utility-examples">
      <h4 class="utility-examples-title">Project theme colors <a class="utility-examples-helper" href="#0">Read more about project theme colors</a></h4>

      <div class="grid-row">
        {% for color in theme_colors %}
          <div class="utility-example-container-condensed grid-col-12 font-sans-xs display-flex flex-align-center flex-justify">
            <span class="radius-md padding-05 text-{{ color.token }}{% if color.reverse %} bg-gray-90 is-inverse{% endif %}">.text-{{ color.token }}</span>
            <span class="flex-auto utility-value-color">
              <span class="utility-value-color-chip bg-{{ color.token }}"></span>
              {{ color.value }}
            </span>
          </div>
        {% endfor %}
      </div>

      <h3 class="font-sans-6 margin-top-4 padding-bottom-1 margin-bottom-1 border-gray-10 border-bottom-1px">Grayscale palette <a class="utility-examples-helper" href="#0">Read more about the USWDS grayscale palette</a></h3>

      <div class="grid-row">
        {% for color in grayscale_colors %}
          <div class="utility-example-container-condensed grid-col-12 font-sans-xs display-flex flex-align-center flex-justify">
            <span class="radius-md padding-05 text-{{ color.token }}{% if color.reverse %} bg-gray-90 is-inverse{% endif %}">.text-{{ color.token }}</span>
            <span class="flex-auto utility-value-color">
              <span class="utility-value-color-chip bg-{{ color.token }}"></span>
              {{ color.value }}
            </span>
          </div>
        {% endfor %}
      </div>

      <h3 class="font-sans-6 margin-top-4 padding-bottom-1 margin-bottom-1 border-gray-10 border-bottom-1px">Basic palette <a class="utility-examples-helper" href="#0">Read more about the USWDS basic palette</a></h3>

      <div class="grid-row">
        {% for color in basic_colors %}
          <div class="utility-example-container-condensed grid-col-12 font-sans-xs display-flex flex-align-center flex-justify">
            <span class="radius-md padding-05 text-{{ color.token }}{% if color.reverse %} bg-gray-90 is-inverse{% endif %}">.text-{{ color.token }}</span>
            <span class="flex-auto utility-value-color">
              <span class="utility-value-color-chip bg-{{ color.token }}"></span>
              {{ color.value }}
            </span>
          </div>
        {% endfor %}
      </div>
    </section>
  </section>

  <section class="utility" id="background-color">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Background color</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">background-color</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-active"><a href="#0">hover</a></li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>

    <section class="utility-examples">
      <h3 class="font-sans-4 margin-top-0 padding-bottom-1 margin-bottom-1 border-gray-10 border-bottom-1px">Project theme colors <a class="utility-examples-helper" href="#0">Read more about project theme colors</a></h3>
      <div class="grid-row">
        {% for color in theme_colors %}
          <p class="utility-example-container-condensed grid-col-12 display-flex flex-align-center">
            <span class="flex-fill">
              <span class="square-4 radius-sm display-inline-block text-middle margin-right-1 bg-{{ color.token }}"></span>
              <span class="utility-class">.bg-{{ color.token }}</span>
            </span>
            <span class="flex-auto utility-value-color">
              <span class="utility-value-color-chip bg-{{ color.token }}"></span>
              {{ color.value }}
            </span>
          </p>
        {% endfor %}
      </div>
    </section>

    <section class="utility-examples">
      <h3 class="font-sans-4 margin-top-4 padding-bottom-1 margin-bottom-1 border-gray-10 border-bottom-1px">Grayscale palette <a class="utility-examples-helper" href="#0">Read more about the USWDS grayscale palette</a></h3>
      <div class="grid-row">
        {% for color in grayscale_colors %}
          <p class="utility-example-container-condensed grid-col-12 display-flex flex-align-center">
            <span class="flex-fill">
              <span class="square-4 radius-sm display-inline-block text-middle margin-right-1 bg-{{ color.token }}"></span>
              <span class="utility-class">.bg-{{ color.token }}</span>
            </span>
            <span class="flex-auto utility-value-color">
              <span class="utility-value-color-chip bg-{{ color.token }}"></span>
              {{ color.value }}
            </span>
          </p>
        {% endfor %}
      </div>
    </section>

    <section class="utility-examples">
      <h3 class="font-sans-4 margin-top-4 padding-bottom-1 margin-bottom-1 border-gray-10 border-bottom-1px">Basic palette <a class="utility-examples-helper" href="#0">Read more about the USWDS basic palette</a></h3>
      <div class="grid-row">
        {% for color in basic_colors %}
          <p class="utility-example-container-condensed grid-col-12 display-flex flex-align-center">
            <span class="flex-fill">
              <span class="square-4 radius-sm display-inline-block text-middle margin-right-1 bg-{{ color.token }}"></span>
              <span class="utility-class">.bg-{{ color.token }}</span>
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
</section>

{% include utilities/responsive-variants.html %}

{% include utilities/state-variants.html %}

<section class="utilities-section">
  <h2 class="utilities-section-title">Default output</h2>
  <div class="grid-row font-sans-1 text-bold border-bottom padding-bottom-05 margin-top-2 border-base-light">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-6">Output SCSS</div>
    <div class="grid-col-2">Default variable value</div>
  </div>
  <dl class="output-list">
    {% for color in all_colors %}
      <dt class="output-utility">.text-{{ color.token }}</dt>
      <dd class="output-css">color: <span class="output-token">{% if color.var %}{{ color.var }}{% else %}{{ color.token }}{% endif %}</span></dd>
      <dd class="output-variable">
        <span class="display-inline-block bg-{{ color.token }} circle-105 text-baseline margin-right-05"></span>
        {{ color.value }}
      </dd>
    {% endfor %}
    {% for color in all_colors %}
      <dt class="output-utility">.bg-{{ color.token }}</dt>
      <dd class="output-css">background-color: <span class="output-token">{% if color.var %}{{ color.var }}{% else %}{{ color.token }}{% endif %}</span></dd>
      <dd class="output-variable">
        <span class="display-inline-block bg-{{ color.token }} circle-105 text-baseline margin-right-05"></span>
        {{ color.value }}
      </dd>
    {% endfor %}
  </dl>
</section>

{% include utilities/advanced-settings.html %}
