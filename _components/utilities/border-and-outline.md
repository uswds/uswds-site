---
permalink: /utilities/border-and-outline/
layout: styleguide
type: utility
title: Border and outline
category: Utilities
lead: Set width, color, style, and radius of an item’s borders
subnav:
- text: Borders
  href: '#utility-border'
- text: Border styles
  href: '#utility-border-style'
- text: Border widths
  href: '#utility-border-width'
- text: Border colors
  href: '#utility-border-color'
- text: Border radius
  href: '#utility-radius'
---

{% assign border_modifiers = ", -top, -bottom, -left, -right, -x, -y" | split: ", " %}
{% assign border_modifiers_simple = ", -top, -bottom, -left, -right" | split: ", " %}


{% assign border_widths =
  site.data.uswds_tokens.special.zero_zero
  | concat: site.data.uswds_tokens.spacing.positive.smaller
  | concat: site.data.uswds_tokens.spacing.positive.small
  %}

{% assign theme_colors = site.data.uswds_tokens.colors.project_theme %}
{% assign grayscale_colors = site.data.uswds_tokens.colors.grayscale %}
{% assign basic_colors = site.data.uswds_tokens.colors.basic %}
{% assign transparent = site.data.uswds_tokens.colors.transparent %}
{% assign all_colors = transparent
  | concat: theme_colors
  | concat: grayscale_colors
  | concat: basic_colors
  %}

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="token utilities-property">border</span>
    <span class="token utilities-property">border-style</span>
    <span class="token utilities-property">border-width</span>
    <span class="token utilities-property">border-color</span>
    <span class="token utilities-property">border-radius</span>
  </div>
</div>

<section class="utilities-section">

  <div class="grid-row utilities-section-title-bar">
    <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-ink text-no-wrap">advanced settings</a>.</p>
  </div>

  <section class="utility" id="utility-border">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Border</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">border, border-bottom, border-left, border-right, border-top</span></p>
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
      <div class="grid-row">
        {% for modifier in border_modifiers %}
          <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
            <div class="border{{ modifier }} square-9 bg-base-lightest"></div>
            <div class="display-flex flex-column flex-align-start margin-top-2">
              <span class="utility-class">.border{{ modifier }}</span>
            </div>
          </div>
        {% endfor %}
      </div>
    </section><!-- exanples -->
  </section><!-- utility -->

  <section class="utility" id="utility-border-style">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Border style</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">border-style</span></p>
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
      <div class="grid-row">
        <div class="utility-example-container grid-col-3 display-flex flex-column flex-justify">
          <div class="border-1px border-solid square-9 bg-base-lightest"></div>
          <div class="display-flex flex-column flex-align-start margin-top-2">
            <span class="utility-class">.border-solid</span>
            <span class="utility-class margin-top-05">.border-1px</span>
          </div>
        </div>
        <div class="utility-example-container grid-col-3 display-flex flex-column flex-justify">
          <div class="border-1px border-dashed square-9 bg-base-lightest"></div>
          <div class="display-flex flex-column flex-align-start margin-top-2">
            <span class="utility-class">.border-dashed</span>
            <span class="utility-class margin-top-05">.border-1px</span>
          </div>
        </div>
        <div class="utility-example-container grid-col-fill display-flex flex-column flex-justify">
          <div class="border-1px border-dotted square-9 bg-base-lightest"></div>
          <div class="display-flex flex-column flex-align-start margin-top-2">
            <span class="utility-class">.border-dotted</span>
            <span class="utility-class margin-top-05">.border-1px</span>
          </div>
        </div>
      </div>
    </section>
  </section>

  <section class="utility" id="utility-border-width">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Border width</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">border-width</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-active"><a href="#0">responsive</a></li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>

    <section class="utility-examples">

      <!-- Border all -->
      <h3 class="utility-examples-title margin-bottom-2">Border width on all sides</h3>
      <div class="grid-row">
        {% for border in border_widths %}
          <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
            <div class="border-{{ border.token }} square-9 bg-base-lightest"></div>
            <div class="display-flex flex-column flex-align-start margin-top-2">
              <span class="utility-class">.border-{{ border.token }}</span>
              <span class="utility-value margin-top-2px">{{ border.value }}</span>
            </div>
          </div>
        {% endfor %}
      </div>

      <!-- Border top -->
      <h3 class="utility-examples-title margin-bottom-2">Border top width</h3>
      <div class="grid-row">
        {% for border in border_widths %}
          <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
            <div class="border-top-{{ border.token }} square-9 bg-base-lightest"></div>
            <div class="display-flex flex-column flex-align-start margin-top-2">
              <span class="utility-class">.border-top-{{ border.token }}</span>
              <span class="utility-value margin-top-2px">{{ border.value }}</span>
            </div>
          </div>
        {% endfor %}
      </div>

      <!-- Border bottom -->
      <h3 class="utility-examples-title margin-bottom-2">Border bottom width</h3>
      <div class="grid-row">
        {% for border in border_widths %}
          <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
            <div class="border-bottom-{{ border.token }} square-9 bg-base-lightest"></div>
            <div class="display-flex flex-column flex-align-start margin-top-2">
              <span class="utility-class">.border-bottom-{{ border.token }}</span>
              <span class="utility-value margin-top-2px">{{ border.value }}</span>
            </div>
          </div>
        {% endfor %}
      </div>

      <!-- Border left -->
      <h3 class="utility-examples-title margin-bottom-2">Border left width</h3>
      <div class="grid-row">
        {% for border in border_widths %}
          <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
            <div class="border-left-{{ border.token }} square-9 bg-base-lightest"></div>
            <div class="display-flex flex-column flex-align-start margin-top-2">
              <span class="utility-class">.border-left-{{ border.token }}</span>
              <span class="utility-value margin-top-2px">{{ border.value }}</span>
            </div>
          </div>
        {% endfor %}
      </div>

      <!-- Border right -->
      <h3 class="utility-examples-title margin-bottom-2">Border right width</h3>
      <div class="grid-row">
        {% for border in border_widths %}
          <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
            <div class="border-right-1px border-right-width-{{ border.token }} square-9 bg-base-lightest"></div>
            <div class="display-flex flex-column flex-align-start margin-top-2">
              <span class="utility-class">.border-right-width-{{ border.token }}</span>
              <span class="utility-class">.border-right</span>
              <span class="utility-value margin-top-2px">{{ border.value }}</span>
            </div>
          </div>
        {% endfor %}
      </div>

      <!-- Border x -->
      <h3 class="utility-examples-title margin-bottom-2">Border left and right widths</h3>
      <div class="grid-row">
        {% for border in border_widths %}
          <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
            <div class="border-x-{{ border.token }} square-9 bg-base-lightest"></div>
            <div class="display-flex flex-column flex-align-start margin-top-2">
              <span class="utility-class">.border-x-{{ border.token }}</span>
              <span class="utility-value margin-top-2px">{{ border.value }}</span>
            </div>
          </div>
        {% endfor %}
      </div>

      <!-- Border y -->
      <h3 class="utility-examples-title margin-bottom-2">Border top and bottom widths</h3>
      <div class="grid-row">
        {% for border in border_widths %}
          <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
            <div class="border-y-{{ border.token }} square-9 bg-base-lightest"></div>
            <div class="display-flex flex-column flex-align-start margin-top-2">
              <span class="utility-class">.border-y-{{ border.token }}</span>
              <span class="utility-value margin-top-2px">{{ border.value }}</span>
            </div>
          </div>
        {% endfor %}
      </div>
    </section>
  </section>

  <section class="utility" id="utility-border-color">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Border color</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">border-color</span></p>
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
      <div class="grid-row">
        {% for color in all_colors %}
          <p class="utility-example-container-condensed grid-col-12 display-flex flex-align-center">
            <span class="flex-fill">
              <span class="square-4 radius-sm text-middle padding-05 display-inline-block margin-right-1 bg-white ">
                <span class="square-3 radius-sm display-block border-1px border-{{ color.token }}"></span>
              </span>
              <span class="square-4 radius-sm text-middle padding-05 display-inline-block margin-right-1 bg-ink ">
                <span class="square-3 radius-sm display-block border-1px border-{{ color.token }}"></span>
              </span>
              <span class="utility-class">.border-{{ color.token }}</span>
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



  <section class="utility" id="utility-radius">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Border radius</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">border-radius</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-active"><a href="#0">responsive</a></li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>

    <section class="utility-examples">

      {% for modifier in border_modifiers_simple %}
        <div class="grid-row">
          <div class="utility-example-container display-flex flex-column flex-justify grid-col">
            <div class="bg-secondary-light height-9 width-15 radius{{ modifier }}-0"></div>
            <div class="display-flex flex-column flex-align-start margin-top-2">
              <span class="utility-class">.radius{{ modifier }}-0</span>
              <span class="utility-value margin-top-2px">0</span>
            </div>
          </div>
          <div class="utility-example-container display-flex flex-column flex-justify grid-col">
            <div class="bg-secondary-light height-9 width-15 radius{{ modifier }}-sm"></div>
            <div class="display-flex flex-column flex-align-start margin-top-2">
              <span class="utility-class">.radius{{ modifier }}-sm</span>
              <span class="utility-value margin-top-2px">2px</span>
            </div>
          </div>
          <div class="utility-example-container display-flex flex-column flex-justify grid-col">
            <div class="bg-secondary-light height-9 width-15 radius{{ modifier }}-md"></div>
            <div class="display-flex flex-column flex-align-start margin-top-2">
              <span class="utility-class">.radius{{ modifier }}-md</span>
              <span class="utility-value margin-top-2px">4px</span>
            </div>
          </div>
          <div class="utility-example-container display-flex flex-column flex-justify grid-col">
            <div class="bg-secondary-light height-9 width-15 radius{{ modifier }}-lg"></div>
            <div class="display-flex flex-column flex-align-start margin-top-2">
              <span class="utility-class">.radius{{ modifier }}-lg</span>
              <span class="utility-value margin-top-2px">8px</span>
            </div>
          </div>
          <div class="utility-example-container display-flex flex-column flex-justify grid-col">
            <div class="bg-secondary-light height-9 width-15 radius{{ modifier }}-pill"></div>
            <div class="display-flex flex-column flex-align-start margin-top-2">
              <span class="utility-class">.radius{{ modifier }}-pill</span>
              <span class="utility-value margin-top-2px">9999em</span>
            </div>
          </div>
        </div>
      {% endfor %}
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
      <dt class="output-utility">.shadow-none</dt>
      <dd class="output-css">box-shadow: none</dd>
      <dd class="output-variable">—</dd>
    </dl>
  </section>

  {% include utilities/advanced-settings.html %}
