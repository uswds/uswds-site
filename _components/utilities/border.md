---
permalink: /utilities/border/
layout: styleguide
type: utility
title: Border
category: Utilities
lead: Set width, color, style, and radius of an item’s borders
subnav:
- text: Border
  href: '#utility-border'
- text: Border style
  href: '#utility-border-style'
- text: Border width
  href: '#utility-border-width'
- text: Border color
  href: '#utility-border-color'
- text: Border radius
  href: '#utility-radius'
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         border
  var:          border
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        true
  visited:      false
- base:         border
  var:          border-style
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         border
  var:          border-width
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         border
  var:          border-color
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        true
  visited:      false
- base:         radius
  var:          border-radius
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        false
  visited:      false
---

{% assign border_modifiers = ", -top, -bottom, -left, -right, -x, -y" | split: ", " %}
{% assign border_modifiers_simple = ", -top, -bottom, -left, -right" | split: ", " %}


{% assign border_widths =
  site.data.uswds_tokens.special.noValue
  | concat: site.data.uswds_tokens.special.zero_zero
  | concat: site.data.uswds_tokens.spacing.positive.smaller
  | concat: site.data.uswds_tokens.spacing.positive.small
  %}

{% assign noValue_value = '1px' %}

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
    <span class="property utilities-property">border</span>
    <span class="property utilities-property">border-style</span>
    <span class="property utilities-property">border-width</span>
    <span class="property utilities-property">border-color</span>
    <span class="property utilities-property">border-radius</span>
  </div>
</div>

<section class="utilities-section">

  <div class="grid-row utilities-section-title-bar">
    <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#advanced-settings" class="text-ink text-no-wrap">advanced settings</a>.</p>
  </div>

  <section class="utility" id="utility-border">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Border</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">border, border-bottom, border-left, border-right, border-top</span></p>
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
      <p class="utility-note"><strong>Note: </strong> The <code>border</code> utilities apply a solid border of specified width. If no width is specified, the utilities apply a solid <code>1px</code> border.</p>

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

      <h4 class="utility-examples-title margin-bottom-2">Border on all sides</h4>
      <div class="grid-row">
        {% for border in border_widths %}
          <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
            {% if border.token == 'noValue' %}
              <div class="border square-9 bg-base-lightest"></div>
              <div class="display-flex flex-column flex-align-start margin-top-2">
                <span class="utility-class">.border</span>
                <span class="utility-value margin-top-2px">1px</span>
              </div>
            {% else %}
              <div class="border-{{ border.token }} square-9 bg-base-lightest"></div>
              <div class="display-flex flex-column flex-align-start margin-top-2">
                <span class="utility-class">.border-{{ border.token }}</span>
                <span class="utility-value margin-top-2px">{{ border.value }}</span>
              </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>

      <!-- Border top -->
      <h4 class="utility-examples-title margin-bottom-2">Border on the top</h4>
      <div class="grid-row">
        {% for border in border_widths %}
          <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
            {% if border.token == 'noValue' %}
              <div class="border-top square-9 bg-base-lightest"></div>
              <div class="display-flex flex-column flex-align-start margin-top-2">
                <span class="utility-class">.border-top</span>
                <span class="utility-value margin-top-2px">1px</span>
              </div>
            {% else %}
              <div class="border-top-{{ border.token }} square-9 bg-base-lightest"></div>
              <div class="display-flex flex-column flex-align-start margin-top-2">
                <span class="utility-class">.border-top-{{ border.token }}</span>
                <span class="utility-value margin-top-2px">{{ border.value }}</span>
              </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>

      <!-- Border bottom -->
      <h4 class="utility-examples-title margin-bottom-2">Border on the bottom</h4>
      <div class="grid-row">
        {% for border in border_widths %}
          <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
            {% if border.token == 'noValue' %}
              <div class="border-bottom square-9 bg-base-lightest"></div>
              <div class="display-flex flex-column flex-align-start margin-top-2">
                <span class="utility-class">.border-bottom</span>
                <span class="utility-value margin-top-2px">1px</span>
              </div>
            {% else %}
              <div class="border-bottom-{{ border.token }} square-9 bg-base-lightest"></div>
              <div class="display-flex flex-column flex-align-start margin-top-2">
                <span class="utility-class">.border-bottom-{{ border.token }}</span>
                <span class="utility-value margin-top-2px">{{ border.value }}</span>
              </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>

      <!-- Border left -->
      <h4 class="utility-examples-title margin-bottom-2">Border on the left</h4>
      <div class="grid-row">
        {% for border in border_widths %}
          <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
            {% if border.token == 'noValue' %}
              <div class="border-left square-9 bg-base-lightest"></div>
              <div class="display-flex flex-column flex-align-start margin-top-2">
                <span class="utility-class">.border-left</span>
                <span class="utility-value margin-top-2px">1px</span>
              </div>
            {% else %}
              <div class="border-left-{{ border.token }} square-9 bg-base-lightest"></div>
              <div class="display-flex flex-column flex-align-start margin-top-2">
                <span class="utility-class">.border-left-{{ border.token }}</span>
                <span class="utility-value margin-top-2px">{{ border.value }}</span>
              </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>

      <!-- Border right -->
      <h4 class="utility-examples-title margin-bottom-2">Border on the right</h4>
      <div class="grid-row">
        {% for border in border_widths %}
          <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
            {% if border.token == 'noValue' %}
              <div class="border-right square-9 bg-base-lightest"></div>
              <div class="display-flex flex-column flex-align-start margin-top-2">
                <span class="utility-class">.border-right</span>
                <span class="utility-value margin-top-2px">1px</span>
              </div>
            {% else %}
              <div class="border-right-{{ border.token }} square-9 bg-base-lightest"></div>
              <div class="display-flex flex-column flex-align-start margin-top-2">
                <span class="utility-class">.border-right-{{ border.token }}</span>
                <span class="utility-value margin-top-2px">{{ border.value }}</span>
              </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>

      <!-- Border x -->
      <h4 class="utility-examples-title margin-bottom-2">Border on the left and right</h4>
      <div class="grid-row">
        {% for border in border_widths %}
          <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
            {% if border.token == 'noValue' %}
              <div class="border-x square-9 bg-base-lightest"></div>
              <div class="display-flex flex-column flex-align-start margin-top-2">
                <span class="utility-class">.border-x</span>
                <span class="utility-value margin-top-2px">1px</span>
              </div>
            {% else %}
              <div class="border-x-{{ border.token }} square-9 bg-base-lightest"></div>
              <div class="display-flex flex-column flex-align-start margin-top-2">
                <span class="utility-class">.border-x-{{ border.token }}</span>
                <span class="utility-value margin-top-2px">{{ border.value }}</span>
              </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>

      <!-- Border y -->
      <h4 class="utility-examples-title margin-bottom-2">Border on the top and bottom</h4>
      <div class="grid-row">
        {% for border in border_widths %}
          <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
            {% if border.token == 'noValue' %}
              <div class="border-y square-9 bg-base-lightest"></div>
              <div class="display-flex flex-column flex-align-start margin-top-2">
                <span class="utility-class">.border-y</span>
                <span class="utility-value margin-top-2px">1px</span>
              </div>
            {% else %}
              <div class="border-y-{{ border.token }} square-9 bg-base-lightest"></div>
              <div class="display-flex flex-column flex-align-start margin-top-2">
                <span class="utility-class">.border-y-{{ border.token }}</span>
                <span class="utility-value margin-top-2px">{{ border.value }}</span>
              </div>
            {% endif %}
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
          <li class="utility-scope-button-active"><a href="#responsive-variants">responsive</a></li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-active"><a href="#state-variants">hover</a></li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>
    <section class="utility-examples">
      <div class="grid-row">
        <div class="utility-example-container grid-col-4 display-flex flex-column flex-justify">
          <div class="border border-solid square-9 bg-base-lightest"></div>
          <div class="display-flex flex-column flex-align-start margin-top-2">
            <span class="utility-class"><span class="text-light">.border</span>.border-solid</span>
          </div>
        </div>
        <div class="utility-example-container grid-col-4 display-flex flex-column flex-justify">
          <div class="border-1px border-dashed square-9 bg-base-lightest"></div>
          <div class="display-flex flex-column flex-align-start margin-top-2">
            <span class="utility-class"><span class="text-light">.border</span>.border-dashed</span>
          </div>
        </div>
        <div class="utility-example-container grid-col-fill display-flex flex-column flex-justify">
          <div class="border border-dotted square-9 bg-base-lightest"></div>
          <div class="display-flex flex-column flex-align-start margin-top-2">
            <span class="utility-class"><span class="text-light">.border</span>.border-dotted</span>
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
          <li class="utility-scope-button-active"><a href="#responsive-variants">responsive</a></li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>

    <section class="utility-examples">
      <p class="utility-note"><strong>Note: </strong> The <code>border-width</code> utilities apply only the <code>border-width</code> property to an item.</p>

      <!-- Border all -->
      <div class="grid-row">
        {% for border in border_widths %}
          {% if border.token != 'noValue' %}
            <div class="utility-example-container-condensed grid-col-12">
              <div class="display-flex flex-justify">
                <span class="utility-class">.border-width-{{ border.token }}</span>
                <span class="utility-value margin-left-2px">{{ border.value }}</span>
              </div>
            </div>
          {% endif %}
        {% endfor %}
        {% for border in border_widths %}
          {% if border.token != 'noValue' %}
            <div class="utility-example-container-condensed grid-col-12">
              <div class="display-flex flex-justify">
                <span class="utility-class">.border-top-width-{{ border.token }}</span>
                <span class="utility-value margin-left-2px">{{ border.value }}</span>
              </div>
            </div>
          {% endif %}
        {% endfor %}
        {% for border in border_widths %}
          {% if border.token != 'noValue' %}
            <div class="utility-example-container-condensed grid-col-12">
              <div class="display-flex flex-justify">
                <span class="utility-class">.border-bottom-width-{{ border.token }}</span>
                <span class="utility-value margin-left-2px">{{ border.value }}</span>
              </div>
            </div>
          {% endif %}
        {% endfor %}
        {% for border in border_widths %}
          {% if border.token != 'noValue' %}
            <div class="utility-example-container-condensed grid-col-12">
              <div class="display-flex flex-justify">
                <span class="utility-class">.border-left-width-{{ border.token }}</span>
                <span class="utility-value margin-left-2px">{{ border.value }}</span>
              </div>
            </div>
          {% endif %}
        {% endfor %}
        {% for border in border_widths %}
          {% if border.token != 'noValue' %}
            <div class="utility-example-container-condensed grid-col-12">
              <div class="display-flex flex-justify">
                <span class="utility-class">.border-right-width-{{ border.token }}</span>
                <span class="utility-value margin-left-2px">{{ border.value }}</span>
              </div>
            </div>
          {% endif %}
        {% endfor %}
        {% for border in border_widths %}
          {% if border.token != 'noValue' %}
            <div class="utility-example-container-condensed grid-col-12">
              <div class="display-flex flex-justify">
                <span class="utility-class">.border-x-width-{{ border.token }}</span>
                <span class="utility-value margin-left-2px">{{ border.value }}</span>
              </div>
            </div>
          {% endif %}
        {% endfor %}
        {% for border in border_widths %}
          {% if border.token != 'noValue' %}
            <div class="utility-example-container-condensed grid-col-12">
              <div class="display-flex flex-justify">
                <span class="utility-class">.border-y-width-{{ border.token }}</span>
                <span class="utility-value margin-left-2px">{{ border.value }}</span>
              </div>
            </div>
          {% endif %}
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
          <li class="utility-scope-button-active"><a href="#responsive-variants">responsive</a></li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-active"><a href="#state-variants">hover</a></li>
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
          <li class="utility-scope-button-active"><a href="#responsive-variants">responsive</a></li>
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
</section>

<section class="utilities-section">
  <h2 class="utilities-section-title">Default output</h2>
  <div class="grid-row font-sans-1 text-bold border-bottom padding-bottom-05 margin-top-2 border-base-light">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-6">Output SCSS</div>
    <div class="grid-col-2">Default variable value</div>
  </div>
  <dl class="output-list">
    {% for modifier in border_modifiers %}
      {% for item in border_widths %}
        {% if item.token == 'noValue' %}
          <dt class="output-utility">.border{{ modifier }}</dt>
          <dd class="output-css">
            {% if modifier == '-x' %}
            <span>
              <span class="output-rule">border-left: {{ noValue_value }} solid</span>
              <span class="output-rule">border-right: {{ noValue_value }} solid</span>
            </span>
            {% elsif modifier == '-y' %}
            <span>
              <span class="output-rule">border-bottom: {{ noValue_value }} solid</span>
              <span class="output-rule">border-top: {{ noValue_value }} solid</span>
            </span>
            {% else %}
            <span class="output-rule">border{{ modifier }}: {{ noValue_value }}  solid</span>
            {% endif %}
          </dd>
          <dd class="output-variable">{% if item.scss %}{{ item.value }}{% else %}—{% endif %}</dd>
        {% else %}
          <dt class="output-utility">.border{{ modifier }}-{{ item.token }}</dt>
          <dd class="output-css">
            {% if modifier == '-x' %}
            <span>
              <span class="output-rule">border-left: {% if item.scss %}<span class="output-token">{{ item.scss }}</span>{% else %}{{ item.value }}{% endif %} solid</span>
              <span class="output-rule">border-right: {% if item.scss %}<span class="output-token">{{ item.scss }}</span>{% else %}{{ item.value }}{% endif %} solid</span>
            </span>
            {% elsif modifier == '-y' %}
            <span>
              <span class="output-rule">border-bottom: {% if item.scss %}<span class="output-token">{{ item.scss }}</span>{% else %}{{ item.value }}{% endif %} solid</span>
              <span class="output-rule">border-top: {% if item.scss %}<span class="output-token">{{ item.scss }}</span>{% else %}{{ item.value }}{% endif %} solid</span>
            </span>
            {% else %}
            <span class="output-rule">border{{ modifier }}: {% if item.scss %}<span class="output-token">{{ item.scss }}</span>{% else %}{{ item.value }}{% endif %} solid</span>
            {% endif %}
          </dd>
          <dd class="output-variable">{% if item.scss %}{{ item.value }}{% else %}—{% endif %}</dd>
        {% endif %}
      {% endfor %}
    {% endfor %}
    <dt class="output-utility">.border-dashed</dt>
    <dd class="output-css">border-style: dashed</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.border-dotted</dt>
    <dd class="output-css">border-style: dotted</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.border-solid</dt>
    <dd class="output-css">border-style: solid</dd>
    <dd class="output-variable">—</dd>
    {% for modifier in border_modifiers %}
      {% for item in border_widths %}
        {% if item.token != 'noValue' %}
          <dt class="output-utility">.border{{ modifier }}-width-{{ item.token }}</dt>
          <dd class="output-css">
            {% if modifier == '-x' %}
            <span>
              <span class="output-rule">border-left-width: {% if item.scss %}<span class="output-token">{{ item.scss }}</span>{% else %}{{ item.value }}{% endif %}</span>
              <span class="output-rule">border-right-width: {% if item.scss %}<span class="output-token">{{ item.scss }}</span>{% else %}{{ item.value }}{% endif %}</span>
            </span>
            {% elsif modifier == '-y' %}
            <span>
              <span class="output-rule">border-bottom-width: {% if item.scss %}<span class="output-token">{{ item.scss }}</span>{% else %}{{ item.value }}{% endif %}</span>
              <span class="output-rule">border-top-width: {% if item.scss %}<span class="output-token">{{ item.scss }}</span>{% else %}{{ item.value }}{% endif %}</span>
            </span>
            {% else %}
            <span class="output-rule">border{{ modifier }}-width: {% if item.scss %}<span class="output-token">{{ item.scss }}</span>{% else %}{{ item.value }}{% endif %}</span>
            {% endif %}
          </dd>
          <dd class="output-variable">{% if item.scss %}{{ item.value }}{% else %}—{% endif %}</dd>
        {% endif %}
      {% endfor %}
    {% endfor %}
    {% for color in all_colors %}
      <dt class="output-utility">.border-{{ color.token }}</dt>
      <dd class="output-css">
        <span class="output-rule">border-color: <span class="output-token">color('{{ color.token }}')</span></span>
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

    <dt class="output-utility">.radius-0</dt>
    <dd class="output-css">border-radius: 0</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.radius-sm</dt>
    <dd class="output-css"><span>border-radius: <span class="output-token">units($theme-border-radius-sm)</span></span></dd>
    <dd class="output-variable">2px</dd>

    <dt class="output-utility">.radius-md</dt>
    <dd class="output-css"><span>border-radius: <span class="output-token">units($theme-border-radius-md)</span></span></dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.radius-lg</dt>
    <dd class="output-css"><span>border-radius: <span class="output-token">units($theme-border-radius-lg)</span></span></dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.radius-pill</dt>
    <dd class="output-css"><span>border-radius: <span class="output-token">units(pill)</span></span></dd>
    <dd class="output-variable">9999em</dd>

    <dt class="output-utility">.radius-top-0</dt>
    <dd class="output-css">border-top-radius: 0</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.radius-top-sm</dt>
    <dd class="output-css"><span>border-top-radius: <span class="output-token">units($theme-border-radius-sm)</span></span></dd>
    <dd class="output-variable">2px</dd>

    <dt class="output-utility">.radius-top-md</dt>
    <dd class="output-css"><span>border-top-radius: <span class="output-token">units($theme-border-radius-md)</span></span></dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.radius-top-lg</dt>
    <dd class="output-css"><span>border-top-radius: <span class="output-token">units($theme-border-radius-lg)</span></span></dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.radius-top-pill</dt>
    <dd class="output-css"><span>border-top-radius: <span class="output-token">units(pill)</span></span></dd>
    <dd class="output-variable">9999em</dd>

    <dt class="output-utility">.radius-bottom-0</dt>
    <dd class="output-css">border-bottom-radius: 0</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.radius-bottom-sm</dt>
    <dd class="output-css"><span>border-bottom-radius: <span class="output-token">units($theme-border-radius-sm)</span></span></dd>
    <dd class="output-variable">2px</dd>

    <dt class="output-utility">.radius-bottom-md</dt>
    <dd class="output-css"><span>border-bottom-radius: <span class="output-token">units($theme-border-radius-md)</span></span></dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.radius-bottom-lg</dt>
    <dd class="output-css"><span>border-bottom-radius: <span class="output-token">units($theme-border-radius-lg)</span></span></dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.radius-bottom-pill</dt>
    <dd class="output-css"><span>border-bottom-radius: <span class="output-token">units(pill)</span></span></dd>
    <dd class="output-variable">9999em</dd>

    <dt class="output-utility">.radius-left-0</dt>
    <dd class="output-css">border-left-radius: 0</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.radius-left-sm</dt>
    <dd class="output-css"><span>border-left-radius: <span class="output-token">units($theme-border-radius-sm)</span></span></dd>
    <dd class="output-variable">2px</dd>

    <dt class="output-utility">.radius-left-md</dt>
    <dd class="output-css"><span>border-left-radius: <span class="output-token">units($theme-border-radius-md)</span></span></dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.radius-left-lg</dt>
    <dd class="output-css"><span>border-left-radius: <span class="output-token">units($theme-border-radius-lg)</span></span></dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.radius-left-pill</dt>
    <dd class="output-css"><span>border-left-radius: <span class="output-token">units(pill)</span></span></dd>
    <dd class="output-variable">9999em</dd>

    <dt class="output-utility">.radius-right-0</dt>
    <dd class="output-css">border-right-radius: 0</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.radius-right-sm</dt>
    <dd class="output-css"><span>border-right-radius: <span class="output-token">units($theme-border-radius-sm)</span></span></dd>
    <dd class="output-variable">2px</dd>

    <dt class="output-utility">.radius-right-md</dt>
    <dd class="output-css"><span>border-right-radius: <span class="output-token">units($theme-border-radius-md)</span></span></dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.radius-right-lg</dt>
    <dd class="output-css"><span>border-right-radius: <span class="output-token">units($theme-border-radius-lg)</span></span></dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.radius-right-pill</dt>
    <dd class="output-css"><span>border-right-radius: <span class="output-token">units(pill)</span></span></dd>
    <dd class="output-variable">9999em</dd>

  </dl>
</section>

<section id="utility-mixins" class="padding-top-4">
  <h2 class="margin-y-0">Utility mixins</h2>
  {% include utilities/utility-mixin-intro.html %}

  <div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2 margin-top-3">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-4">Mixin</div>
    <div class="grid-col-4">Example</div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.border-<code>units</code></div>
    <div class="grid-col-4">u-border(<code>units</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-border(1px)</span>
      <span class="display-block margin-top-1">u-border('05')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.border-<code>side</code>-<code>units</code></div>
    <div class="grid-col-4">u-border-<code>side</code>(<code>units</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-border-top(1px)</span>
      <span class="display-block margin-top-1">u-border-y('05')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.border-<code>color</code></div>
    <div class="grid-col-4">u-border(<code>color</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-border('accent-warm-light')</span>
      <span class="display-block margin-top-1">u-border('red-50v')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.border-<code>style</code></div>
    <div class="grid-col-4">u-border(<code>style</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-border('dotted')</span>
      <span class="display-block margin-top-1">u-border('solid')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.radius-<code>units</code></div>
    <div class="grid-col-4">u-radius(<code>units</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-radius('md')</span>
      <span class="display-block margin-top-1">u-radius('05')</span>
      <span class="display-block margin-top-1">u-radius(0.5)</span>
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

    <aside class="example border-left-05 border-secondary-light padding-left-105 margin-top-2">
      <h4 class="font-sans-2xs margin-top-0 margin-bottom-05">Example</h4>
<pre class="font-mono-xs margin-0 padding-0 bg-transparent">
$border-color-palettes: (
  $palette-blue-warm-medium-vivid // note: no trailing comma
);
</pre>
    <h4 class="font-sans-2xs margin-top-2 margin-bottom-05">Output</h4>
<pre class=" font-mono-xs margin-0 padding-0 bg-transparent">
.border-blue-warm-40v { border-color: #5E99FF; }
.border-blue-warm-50v { border-color: #2673DF; }
.border-blue-warm-60v { border-color: #0052DE; }
</pre>
    </aside>

    {% include utilities/standard-palettes.html %}
    {% include utilities/spacing-palettes.html %}
    {% include utilities/color-palettes.html %}

  </section>
</section>
