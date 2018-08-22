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
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'
utilities:
- base:         bg
  var:          background-color
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        true
  visited:      false
- base:         text
  var:          color
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        true
  visited:      false
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
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#advanced-settings" class="text-ink text-no-wrap">advanced settings</a>.</p>
  </div>

  <section class="utility" id="text-color">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Text color</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">color</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-active"><a href="#responsive-variants">responsive</a></li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-active"><a href="#state-variants">hover</a></li>
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
          <li class="utility-scope-button-active"><a href="#state-variants">hover</a></li>
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

<section class="utilities-section margin-top-6">
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

<section id="utility-mixins" class="padding-top-4">
  <h2 class="margin-y-0">Utility mixins</h2>
  {% include utilities/utility-mixin-intro.html %}

  <div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-3">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-4">Mixin</div>
    <div class="grid-col-4">Example</div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-<code>color</code></div>
    <div class="grid-col-4">u-text(<code>color</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('primary-light')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.bg-<code>color</code></div>
    <div class="grid-col-4">u-bg(<code>color</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-bg('red-50v')</span>
      <span class="display-block margin-top-1">u-bg('red', 50, 'vivid')</span>
    </div>
  </div>

  {% include utilities/utility-mixin-using.html %}
</section>

<section id="advanced-settings" class="padding-top-4">
<h2 class="margin-y-0">Advanced settings</h2>

  {% include utilities/responsive-variants.html %}

  {% include utilities/state-variants.html %}

  {% include utilities/output-control.html %}

  <section class="utilities-section margin-top-6">
    {% include utilities/values-intro.html %}

    <aside class="example border-left-05 border-secondary-light padding-left-105">
      <h4 class="font-sans-2xs margin-top-0 margin-bottom-05">Example</h4>
<pre class="font-mono-xs margin-0 padding-0 bg-transparent">
$background-color-palettes: (
  $palette-red-medium,
  $palette-red-medium-vivid // note: no trailing comma
);
</pre>
    <h4 class="font-sans-2xs margin-top-2 margin-bottom-05">Output</h4>
<pre class=" font-mono-xs margin-0 padding-0 bg-transparent">
.bg-red-40 { background-color: #ed6b61; }
.bg-red-50 { background-color: #d83731; }
.bg-red-60 { background-color: #ab3a3a; }
.bg-red-40v { background-color: #ff5c48; }
.bg-red-50v { background-color: #e82207; }
.bg-red-60v { background-color: #c31f0a; }
</pre>
    </aside>

    <h4 class="font-sans-2xs margin-top-4 margin-bottom-0">Global color palettes</h4>
    <p class="utility-text margin-top-05">Any palette added to the <code>$global-color-palettes</code> list in <code>_project-utilities-settings.scss</code> will output in the background color, text color, border color, and text decoration color utilities.</p>

    {% include utilities/color-palettes.html %}

  </section>
</section>
