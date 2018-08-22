---
permalink: /utilities/flex/
layout: styleguide
type: utility
title: Flex
category: Utilities
lead: Set an item’s flexbox properties.
subnav:
- text: Flex
  href: '#utility-flex'
- text: Flex direction
  href: '#utility-flex-direction'
- text: Flex wrap
  href: '#utility-flex-wrap'
- text: Flex align
  href: '#utility-flex-align'
- text: Flex justify
  href: '#utility-flex-justify'
- text: Order
  href: '#utility-order'
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

values:
  flex:
  - token: 1
    value: '1 0 0'
  - token: 2
    value: '2 0 0'
  - token: 3
    value: '3 0 0'
  - token: 4
    value: '4 0 0'
  - token: 5
    value: '5 0 0'
  - token: 6
    value: '6 0 0'
  - token: 7
    value: '7 0 0'
  - token: 8
    value: '8 0 0'
  - token: 9
    value: '9 0 0'
  - token: 10
    value: '10 0 0'
  - token: 11
    value: '11 0 0'
  - token: 12
    value: '12 0 0'
  - token: auto
    value: auto
  - token: fill
    value: '1 0 0'

  flex_direction:
  - token: column
    value: 'column'
  - token: row
    value: 'row'

  flex_wrap:
  - token: wrap
    value: 'wrap'
  - token: no-wrap
    value: 'nowrap'

  flex_align:
  - token: start
    value: 'flex-start'
  - token: center
    value: 'center'
  - token: end
    value: 'flex-end'
  - token: stretch
    value: 'stretch'

  flex_justify:
  - token: justify
    value: 'space-between'
  - token: justify-start
    value: 'flex-start'
  - token: justify-center
    value: 'center'
  - token: justify-end
    value: 'flex-end'

  order:
  - token: first
    value: '-1'
  - token: last
    value: '999'
  - token: initial
    value: 'initial'
  - token: 0
    value: '0'
  - token: 1
    value: '1'
  - token: 2
    value: '2'
  - token: 3
    value: '3'
  - token: 4
    value: '4'
  - token: 5
    value: '5'
  - token: 6
    value: '6'
  - token: 7
    value: '7'
  - token: 8
    value: '8'
  - token: 9
    value: '9'
  - token: 10
    value: '10'
  - token: 11
    value: '11'

utilities:
- base:         flex
  var:          flex
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         flex
  var:          flex-direction
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         flex
  var:          flex-wrap
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         flex-align
  var:          align-items
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         flex-justify
  var:          justify-content
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         order
  var:          order
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        false
  visited:      false

---

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="token utilities-property">align-items</span>
    <span class="token utilities-property">flex</span>
    <span class="token utilities-property">flex-direction</span>
    <span class="token utilities-property">flex-wrap</span>
    <span class="token utilities-property">justify-content</span>
    <span class="token utilities-property">order</span>
  </div>
</div>

<section class="utilities-section">
  <div class="grid-row utilities-section-title-bar">
    <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-ink text-no-wrap">advanced settings</a>.</p>
  </div>

  <section class="utility" id="utility-flex">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Flex</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">flex</span></p>
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

    {% for value in page.values.flex %}
      <div class="grid-row grid-gap-sm margin-bottom-1">
        <div class="grid-col flex-{{ value.token }}">
          <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center padding-x-105">
            <span class="utility-class text-no-wrap">.flex-{{ value.token }}</span>
          </div>
        </div>
        <div class="grid-col flex-1">
          <div class="height-6 width-full display-flex flex-align-center border border-base-dark flex-justify-center">
            {% if forloop.first %}<span class="utility-class">.flex-1</span>{% endif %}
          </div>
        </div>
        <div class="grid-col flex-1">
          <div class="height-6 width-full display-flex flex-align-center border border-base-dark flex-justify-center">
            {% if forloop.first %}<span class="utility-class">.flex-1</span>{% endif %}
          </div>
        </div>
        <div class="grid-col flex-1">
          <div class="height-6 width-full display-flex flex-align-center border border-base-dark flex-justify-center">
            {% if forloop.first %}<span class="utility-class">.flex-1</span>{% endif %}
          </div>
        </div>
      </div>
      {% endfor %}

      <div class="usa-accordion-bordered usa-code-sample margin-top-4 margin-bottom-1">
        <button class="usa-accordion-button" aria-controls="code-flex" aria-expanded="true">Code</button>
        <div id="code-flex" class="usa-accordion-content">
<div markdown="1" class="font-mono-xs">
```html
<div class="grid-row">
  <div class="grid-col flex-1"></div>
  <div class="grid-col flex-1"></div>
  <div class="grid-col flex-1"></div>
  <div class="grid-col flex-1"></div>
</div>
<div class="grid-row">
  <div class="grid-col flex-2"></div>
  <div class="grid-col flex-1"></div>
  <div class="grid-col flex-1"></div>
  <div class="grid-col flex-1"></div>
</div>
<div class="grid-row">
  <div class="grid-col flex-3"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-4"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-5"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-6"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-7"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-8"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-9"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-10"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-11"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-12"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-auto"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-fill"></div>
  ...
</div>
```
</div><!-- markdown -->
        </div><!-- code-content -->
      </div><!-- code-sample -->

    </section><!-- examples -->
  </section><!-- utility -->

  <section class="utility" id="utility-flex-direction">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Flex direction</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">flex-direction</span></p>
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

    {% for value in page.values.flex_direction %}
      <div class="border padding-1 radius-md{% if forloop.first %} margin-bottom-2{% endif %}">
        <span class="utility-class">.flex-{{ value.token }}</span>
        <div class="grid-row flex-{{ value.token }} margin-top-2">
          <div class="grid-col flex-1 padding-1px">
            <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
            </div>
          </div>
          <div class="grid-col flex-1 padding-1px">
            <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
            </div>
          </div>
          <div class="grid-col flex-1 padding-1px">
            <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
            </div>
          </div>
          <div class="grid-col flex-1 padding-1px">
            <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
            </div>
          </div>
        </div>
      </div>
    {% endfor %}

    <div class="usa-accordion-bordered usa-code-sample margin-top-4 margin-bottom-1">
      <button class="usa-accordion-button" aria-controls="code-flex-direction" aria-expanded="true">Code</button>
      <div id="code-flex-direction" class="usa-accordion-content">
<div markdown="1" class="font-mono-xs">
```html
<div class="grid-row flex-column">
  <div class="grid-col"></div>
  <div class="grid-col"></div>
  <div class="grid-col"></div>
  <div class="grid-col"></div>
</div>
<div class="grid-row flex-row">
  <div class="grid-col"></div>
  <div class="grid-col"></div>
  <div class="grid-col"></div>
  <div class="grid-col"></div>
</div>
```
</div><!-- markdown -->
        </div><!-- code-content -->
      </div><!-- code-sample -->

    </section><!-- examples -->
  </section><!-- utility -->

  <section class="utility" id="utility-flex-wrap">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Flex wrap</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">flex-wrap</span></p>
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

    {% for value in page.values.flex_wrap %}
      <div class="border padding-1 radius-md{% if forloop.first %} margin-bottom-2{% endif %}">
        <span class="utility-class">.flex-{{ value.token }}</span>
        <div class="grid-row flex-{{ value.token }} margin-top-2">
          <div class="grid-col-4 padding-1px">
            <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
              <span class="utility-class">.grid-col-4</span>
            </div>
          </div>
          <div class="grid-col-4 padding-1px">
            <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
              <span class="utility-class">.grid-col-4</span>
            </div>
          </div>
          <div class="grid-col-4 padding-1px">
            <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
              <span class="utility-class">.grid-col-4</span>
            </div>
          </div>
          <div class="grid-col-4 padding-1px">
            <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
              <span class="utility-class">.grid-col-4</span>
            </div>
          </div>
        </div>
      </div>
    {% endfor %}

    <div class="usa-accordion-bordered usa-code-sample margin-top-4 margin-bottom-1">
      <button class="usa-accordion-button" aria-controls="code-flex-wrap" aria-expanded="true">Code</button>
      <div id="code-flex-wrap" class="usa-accordion-content">
<div markdown="1" class="font-mono-xs">
```html
<div class="grid-row flex-wrap">
  <div class="grid-col-4"></div>
  <div class="grid-col-4"></div>
  <div class="grid-col-4"></div>
  <div class="grid-col-4"></div>
</div>
<div class="grid-row flex-no-wrap">
  <div class="grid-col-4"></div>
  <div class="grid-col-4"></div>
  <div class="grid-col-4"></div>
  <div class="grid-col-4"></div>
</div>
```
</div><!-- markdown -->
        </div><!-- code-content -->
      </div><!-- code-sample -->

    </section><!-- examples -->
  </section><!-- utility -->

  <section class="utility" id="utility-flex-align">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Flex align</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">align-items</span></p>
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

    {% for direction in page.values.flex_direction %}
      <div class="border padding-1 radius-md{% if forloop.first %} margin-bottom-2{% endif %}">
        <div class="padding-bottom-4 border-bottom margin-bottom-2">
          <span class="utility-class">.flex-{{ direction.token }}</span>
        </div>
      {% for align in page.values.flex_align %}
        <span class="utility-class">.flex-align-{{ align.token }}</span>
          <div class="grid-row flex-{{ direction.token }} flex-align-{{ align.token }} margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2">
            <div class="grid-auto padding-1px">
              <div class="height-full minh-7 minw-7 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
              </div>
            </div>
            <div class="grid-auto padding-1px">
              <div class="height-full minh-8 minw-8 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
              </div>
            </div>
            <div class="grid-auto padding-1px">
              <div class="height-full minh-9 minw-9 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
              </div>
            </div>
            <div class="grid-auto padding-1px">
              <div class="height-full minh-10 minw-10 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
              </div>
            </div>
          </div>
      {% endfor %}
        </div>
    {% endfor %}

    <div class="usa-accordion-bordered usa-code-sample margin-top-4 margin-bottom-1">
      <button class="usa-accordion-button" aria-controls="code-flex-align" aria-expanded="true">Code</button>
      <div id="code-flex-align" class="usa-accordion-content">
<div markdown="1" class="font-mono-xs">
```html
<div class="display-flex flex-column">
  <div class="flex-align-start"></div>
  <div class="flex-align-center"></div>
  <div class="flex-align-end"></div>
  <div class="flex-align-stretch"></div>
</div>
<div class="display-flex flex-row">
  <div class="flex-align-start"></div>
  <div class="flex-align-center"></div>
  <div class="flex-align-end"></div>
  <div class="flex-align-stretch"></div>
</div>
```
</div><!-- markdown -->
        </div><!-- code-content -->
      </div><!-- code-sample -->

    </section><!-- examples -->
  </section><!-- utility -->

  <section class="utility" id="utility-flex-justify">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Flex justify</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">justify-content</span></p>
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

      <div class="border padding-1 radius-md margin-bottom-2">
        <div class="padding-bottom-4 border-bottom margin-bottom-2">
          <span class="utility-class">.flex-row</span>
        </div>
        {% for justify in page.values.flex_justify %}
          <span class="utility-class">.flex-{{ justify.token }}</span>
            <div class="grid-row flex-{{ direction.token }} flex-{{ justify.token }} margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2">
              <div class="grid-auto padding-1px">
                <div class="height-full minh-7 minw-7 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
                </div>
              </div>
              <div class="grid-auto padding-1px">
                <div class="height-full minh-8 minw-8 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
                </div>
              </div>
              <div class="grid-auto padding-1px">
                <div class="height-full minh-9 minw-9 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
                </div>
              </div>
              <div class="grid-auto padding-1px">
                <div class="height-full minh-10 minw-10 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
                </div>
              </div>
            </div>
        {% endfor %}
        </div>

    <div class="usa-accordion-bordered usa-code-sample margin-top-4 margin-bottom-1">
      <button class="usa-accordion-button" aria-controls="code-flex-justify" aria-expanded="true">Code</button>
      <div id="code-flex-justify" class="usa-accordion-content">
<div markdown="1" class="font-mono-xs">
```html
<div class="display-flex flex-row">
  <div class="flex-align-start"></div>
  <div class="flex-align-center"></div>
  <div class="flex-align-end"></div>
  <div class="flex-align-stretch"></div>
</div>
```
</div><!-- markdown -->
        </div><!-- code-content -->
      </div><!-- code-sample -->

    </section><!-- examples -->
  </section><!-- utility -->

  <section class="utility" id="utility-order">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Order</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">order</span></p>
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

    <div class="grid-row grid-gap-sm">
      {% for value in page.values.order reversed %}
        <div class="grid-col-auto order-{{ value.token }}">
          <div class="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
            <span class="font-sans-3xs text-red-warm-50v margin-bottom-2">intital: {{ forloop.index }}</span>
            <span class="utility-class">.order-{{ value.token }}</span>
          </div>
        </div>
      {% endfor %}
    </div>

    <div class="usa-accordion-bordered usa-code-sample margin-top-4 margin-bottom-1">
      <button class="usa-accordion-button" aria-controls="code-order" aria-expanded="true">Code</button>
      <div id="code-order" class="usa-accordion-content">
<div markdown="1" class="font-mono-xs">
```html
<div class="grid-row">
  <div class="grid-col order-11"></div>
  <div class="grid-col order-10"></div>
  <div class="grid-col order-9"></div>
  <div class="grid-col order-8"></div>
  <div class="grid-col order-7"></div>
  <div class="grid-col order-6"></div>
  <div class="grid-col order-5"></div>
  <div class="grid-col order-4"></div>
  <div class="grid-col order-3"></div>
  <div class="grid-col order-2"></div>
  <div class="grid-col order-1"></div>
  <div class="grid-col order-0"></div>
  <div class="grid-col order-initial"></div>
  <div class="grid-col order-last"></div>
  <div class="grid-col order-first"></div>
</div>
```
</div><!-- markdown -->
        </div><!-- code-content -->
      </div><!-- code-sample -->

    </section><!-- examples -->
  </section><!-- utility -->

  <section class="utilities-section">
    <h2 class="utilities-section-title">Default output</h2>
    <div class="grid-row font-sans-1 text-bold border-bottom padding-bottom-05 margin-top-2 border-base-light">
      <div class="grid-col-4">Utility</div>
      <div class="grid-col-6">Output SCSS</div>
      <div class="grid-col-2">Default variable value</div>
    </div>
    <dl class="output-list">

      {% assign utility_base = 'flex' %}
      {% assign utility_modifiers = 'none' | split: ' ,' %}
      {% assign utility_values = page.values.flex %}
      {% assign utility_properties = 'flex' | split: ', ' %}
      {% assign utility_additional_rules = 'none' | split: ', ' %}
      {% include utilities/output-utilities-loop.html %}

      {% assign utility_base = 'flex' %}
      {% assign utility_modifiers = 'none' | split: ' ,' %}
      {% assign utility_values = page.values.flex_direction %}
      {% assign utility_properties = 'flex-direction' | split: ', ' %}
      {% assign utility_additional_rules = 'none' | split: ', ' %}
      {% include utilities/output-utilities-loop.html %}

      {% assign utility_base = 'flex' %}
      {% assign utility_modifiers = 'none' | split: ' ,' %}
      {% assign utility_values = page.values.flex_wrap %}
      {% assign utility_properties = 'flex-wrap' | split: ', ' %}
      {% assign utility_additional_rules = 'none' | split: ', ' %}
      {% include utilities/output-utilities-loop.html %}

      {% assign utility_base = 'flex-align' %}
      {% assign utility_modifiers = 'none' | split: ' ,' %}
      {% assign utility_values = page.values.flex_align %}
      {% assign utility_properties = 'align-items' | split: ', ' %}
      {% assign utility_additional_rules = 'none' | split: ', ' %}
      {% include utilities/output-utilities-loop.html %}

      {% assign utility_base = 'flex' %}
      {% assign utility_modifiers = 'none' | split: ' ,' %}
      {% assign utility_values = page.values.flex_justify %}
      {% assign utility_properties = 'justify-content' | split: ', ' %}
      {% assign utility_additional_rules = 'none' | split: ', ' %}
      {% include utilities/output-utilities-loop.html %}

      {% assign utility_base = 'order' %}
      {% assign utility_modifiers = 'none' | split: ' ,' %}
      {% assign utility_values = page.values.order %}
      {% assign utility_properties = 'order' | split: ', ' %}
      {% assign utility_additional_rules = 'none' | split: ', ' %}
      {% include utilities/output-utilities-loop.html %}

    </dl>
  </section>

</section><!-- utilities -->

<section id="utility-mixins" class="padding-top-4">
  <h2 class="margin-y-0">Utility mixins</h2>
  {% include utilities/utility-mixin-intro.html %}

  <div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-3">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-4">Mixin</div>
    <div class="grid-col-4">Example</div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">
      <span class="display-block">.flex-<code>value</code></span>
    </div>
    <div class="grid-col-4">u-flex(<code>value</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-flex('fill')</span>
      <span class="display-block margin-top-1">u-flex('auto')</span>
      <span class="display-block margin-top-1">u-flex(3)</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">
      <span class="display-block">.flex-<code>direction</code></span>
    </div>
    <div class="grid-col-4">u-flex(<code>direction</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-flex('row')</span>
      <span class="display-block margin-top-1">u-flex('column')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">
      <span class="display-block">.flex-<code>wrap</code></span>
    </div>
    <div class="grid-col-4">u-flex(<code>wrap</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-flex('wrap')</span>
      <span class="display-block margin-top-1">u-flex('no-wrap')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">
      <span class="display-block">.flex-<code>align</code></span>
    </div>
    <div class="grid-col-4">u-flex(<code>align</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-flex('align-start')</span>
      <span class="display-block margin-top-1">u-flex('align-stretch')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">
      <span class="display-block">.flex-<code>justify</code></span>
    </div>
    <div class="grid-col-4">u-flex(<code>justify</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-flex('justify')</span>
      <span class="display-block margin-top-1">u-flex('justify-left')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">
      <span class="display-block">.order-<code>value</code></span>
    </div>
    <div class="grid-col-4">u-order(<code>value</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-order('last')</span>
      <span class="display-block margin-top-1">u-order('auto')</span>
      <span class="display-block margin-top-1">u-order(2)</span>
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
    {% include utilities/values-no-palettes.html %}
  </section>
</section>
