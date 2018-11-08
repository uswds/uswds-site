---
permalink: /utilities/height-and-width/
layout: styleguide
type: utility
title: Height and width
category: Utilities
lead: Set the dimensions of an item.
subnav:
- text: Height
  href: '#height'
- text: Width
  href: '#width'
- text: Maximum height
  href: '#maxh'
- text: Maximum width
  href: '#maxw'
- text: Minimum height
  href: '#minh'
- text: Minimum width
  href: '#minw'
- text: Aspect ratio
  href: '#aspect'
- text: Circle
  href: '#circle'
- text: Square
  href: '#square'
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         height
  var:          height
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         width
  var:          width
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         maxh
  var:          max-height
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         maxw
  var:          max-width
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         minh
  var:          min-height
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         minw
  var:          min-width
  output:       true,
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         add-aspect
  var:          add-aspect
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         circle
  var:          circle
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         square
  var:          square
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
---

{% assign height_values = site.data.tokens.special.auto_auto
  | concat: site.data.tokens.special.zero_zero
  | concat: site.data.tokens.spacing.positive.smaller
  | concat: site.data.tokens.spacing.positive.small
  | concat: site.data.tokens.spacing.positive.medium
  | concat: site.data.tokens.spacing.positive.large
  | concat: site.data.tokens.special.full_percent
  | concat: site.data.tokens.special.full_viewport_height
%}

{% assign width_values = site.data.tokens.special.auto_auto
  | concat: site.data.tokens.special.zero_zero
  | concat: site.data.tokens.spacing.positive.smaller
  | concat: site.data.tokens.spacing.positive.small
  | concat: site.data.tokens.spacing.positive.medium
  | concat: site.data.tokens.spacing.positive.large
  | concat: site.data.tokens.spacing.positive.larger
  | concat: site.data.tokens.spacing.positive.largest
  | concat: site.data.tokens.special.full_percent
%}

{% assign maxh_values = site.data.tokens.special.none_none
  | concat: site.data.tokens.spacing.positive.small
  | concat: site.data.tokens.spacing.positive.medium
  | concat: site.data.tokens.spacing.positive.large
  | concat: site.data.tokens.spacing.positive.larger
  | concat: site.data.tokens.special.full_viewport_height
%}

{% assign maxw_values = site.data.tokens.special.none_none
  | concat: site.data.tokens.spacing.positive.small
  | concat: site.data.tokens.spacing.positive.medium
  | concat: site.data.tokens.spacing.positive.large
  | concat: site.data.tokens.spacing.positive.larger
  | concat: site.data.tokens.spacing.positive.largest
  | concat: site.data.tokens.special.full_percent
%}

{% assign minh_values = site.data.tokens.special.none_none
  | concat: site.data.tokens.special.zero_zero
  | concat: site.data.tokens.spacing.positive.small
  | concat: site.data.tokens.spacing.positive.medium
  | concat: site.data.tokens.spacing.positive.large
  | concat: site.data.tokens.spacing.positive.larger
  | concat: site.data.tokens.special.full_percent
  | concat: site.data.tokens.special.full_viewport_height
%}

{% assign minw_values = site.data.tokens.special.none_none
  | concat: site.data.tokens.spacing.positive.small
  | concat: site.data.tokens.spacing.positive.medium
%}

{% assign circle_values = site.data.tokens.spacing.positive.smaller
  | concat: site.data.tokens.spacing.positive.small
  | concat: site.data.tokens.spacing.positive.medium
  | concat: site.data.tokens.spacing.positive.large
%}

{% assign square_values = site.data.tokens.spacing.positive.smaller
  | concat: site.data.tokens.spacing.positive.small
  | concat: site.data.tokens.spacing.positive.medium
  | concat: site.data.tokens.spacing.positive.large
%}

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="property utilities-property">height</span>
    <span class="property utilities-property">max-height</span>
    <span class="property utilities-property">max-width</span>
    <span class="property utilities-property">min-height</span>
    <span class="property utilities-property">min-width</span>
    <span class="property utilities-property">width</span>
  </div>
</div>

<section class="utilities-section">
  <div class="grid-row utilities-section-title-bar">
    <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#advanced-settings" class="text-ink text-no-wrap">advanced settings</a>.</p>
  </div>

  <section class="utility" id="height">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Height</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">height</span></p>
        </div>
        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section><!-- .utility-title-bar -->
    <section class="utility-examples">
      <div class="grid-row grid gap">
        {% for item in height_values %}
          <div class="grid-col-{% if forloop.last %}fill{% else %}2{% endif %} utility-example-container display-flex flex-column flex-justify-end">
              <div class="width-4 bg-secondary-light height-{{ item.token }}"></div>
              <div class="display-flex flex-column flex-align-start padding-top-2">
                <span class="utility-class">.height-{{ item.token }}</span>
                <span class="utility-value">{{ item.value }}</span>
              </div>
          </div>
        {% endfor %}
      </div>
    </section><!-- .utility-examples -->
  </section><!-- .utility#height -->

  <section class="utility" id="width">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Width</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">width</span></p>
        </div>
        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section><!-- .utility-title-bar -->
    <section class="utility-examples">
      <div class="grid-row grid gap">
        {% for item in width_values %}
          <div class="grid-col-12 utility-example-container-condensed grid-row flex-align-center {% if forloop.last %} border-0{% endif %}">
              <div class="grid-col-3 display-flex flex-column flex-align-start">
                <span class="utility-class">.width-{{ item.token }}</span>
                <span class="utility-value">{{ item.value }}</span>
              </div>
              <div class="grid-col-9 padding-left-2">
                <div class="height-4 bg-secondary-light width-{{ item.token }} maxw-full grid-col-auto"></div>
              </div>
          </div>
        {% endfor %}
      </div>
    </section><!-- .utility-examples -->
  </section><!-- .utility#width -->

  <section class="utility" id="maxh">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Maximum height</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">max-height</span></p>
        </div>
        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section><!-- .utility-title-bar -->
    <section class="utility-examples">
      {% for item in maxh_values %}
        <p class="utility-example-container-condensed {% if forloop.last %}border-0{% endif %}">
          <span class="utility-class">.maxh-{{ item.token }}</span>
          <span class="utility-value margin-left-2px">{{ item.value }}</span>
        </p>
      {% endfor %}
    </section><!-- .utility-examples -->
  </section><!-- .utility#maxh -->

  <section class="utility" id="maxw">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Maximum width</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">max-width</span></p>
        </div>
        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section><!-- .utility-title-bar -->
    <section class="utility-examples">
      {% for item in maxw_values %}
        <p class="utility-example-container-condensed {% if forloop.last %}border-0{% endif %}">
          <span class="utility-class">.maxw-{{ item.token }}</span>
          <span class="utility-value margin-left-2px">{{ item.value }}</span>
        </p>
      {% endfor %}
    </section><!-- .utility-examples -->
  </section><!-- .utility#maxw -->

  <section class="utility" id="minh">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Minimum height</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">min-height</span></p>
        </div>
        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section><!-- .utility-title-bar -->
    <section class="utility-examples">
      {% for item in minh_values %}
        <p class="utility-example-container-condensed {% if forloop.last %}border-0{% endif %}">
          <span class="utility-class">.minh-{{ item.token }}</span>
          <span class="utility-value margin-left-2px">{{ item.value }}</span>
        </p>
      {% endfor %}
    </section><!-- .utility-examples -->
  </section><!-- .utility#minh -->

  <section class="utility" id="minw">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Minimum width</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">min-width</span></p>
        </div>
        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section><!-- .utility-title-bar -->
    <section class="utility-examples">
      {% for item in minw_values %}
        <p class="utility-example-container-condensed {% if forloop.last %}border-0{% endif %}">
          <span class="utility-class">.minw-{{ item.token }}</span>
          <span class="utility-value margin-left-2px">{{ item.value }}</span>
        </p>
      {% endfor %}
    </section><!-- .utility-examples -->
  </section><!-- .utility#minw -->

  <section class="utility" id="aspect">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Aspect ratio</h3>
        </div>
        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section><!-- .utility-title-bar -->
    <section class="utility-examples">
      <div class="grid-row grid-gap">
        <div class="grid-col utility-example-container-condensed display-flex flex-column flex-justify">
          <div class="width-full add-aspect-9x16 bg-secondary-light"></div>
          <div class="display-flex flex-column flex-align-start margin-top-2">
            <span class="utility-class">.add-aspect-9x16</span>
          </div>
        </div>
        <div class="grid-col utility-example-container-condensed display-flex flex-column flex-justify">
          <div class="width-full add-aspect-1x1 bg-secondary-light"></div>
          <div class="display-flex flex-column flex-align-start margin-top-2">
            <span class="utility-class">.add-aspect-1x1</span>
          </div>
        </div>
        <div class="grid-col utility-example-container-condensed display-flex flex-column flex-justify">
          <div class="width-full add-aspect-4x3 bg-secondary-light"></div>
          <div class="display-flex flex-column flex-align-start margin-top-2">
            <span class="utility-class">.add-aspect-4x3</span>
          </div>
        </div>
        <div class="grid-col utility-example-container-condensed display-flex flex-column flex-justify">
          <div class="width-full add-aspect-16x9 bg-secondary-light"></div>
          <div class="display-flex flex-column flex-align-start margin-top-2">
            <span class="utility-class">.add-aspect-16x9</span>
          </div>
        </div>
        <div class="grid-col utility-example-container-condensed display-flex flex-column flex-justify">
          <div class="width-full add-aspect-2x1 bg-secondary-light"></div>
          <div class="display-flex flex-column flex-align-start margin-top-2">
            <span class="utility-class">.add-aspect-2x1</span>
          </div>
        </div>
      </div>
    </section><!-- .utility-examples -->
  </section><!-- .utility#aspect -->

  <section class="utility" id="circle">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Circle</h3>
        </div>
        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section><!-- .utility-title-bar -->
    <section class="utility-examples">
      <div class="grid-row grid-gap">
        {% for item in circle_values %}
          {% if forloop.index > 1 %}
            <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.index > 13 and forloop.last == false %} grid-col-6{% elsif forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
              <div class="circle-{{ item.token }} bg-secondary-light"></div>
              <div class="display-flex flex-column flex-align-start margin-top-2">
                <span class="utility-class">.circle-{{ item.token }}</span>
                <span class="utility-value margin-left-2px">{{ item.value }}</span>
              </div>
            </div>
          {% endif %}
        {% endfor %}
      </div>
    </section><!-- .utility-examples -->
  </section><!-- .utility#circle -->

  <section class="utility" id="square">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Square</h3>
        </div>
        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section><!-- .utility-title-bar -->
    <section class="utility-examples">
      <div class="grid-row grid-gap">
        {% for item in square_values %}
          {% if forloop.index > 1 %}
            <div class="utility-example-container display-flex flex-column flex-justify{% if forloop.index > 13 and forloop.last == false %} grid-col-6{% elsif forloop.last %} grid-col-fill{% else %} grid-col-3{% endif %}">
              <div class="square-{{ item.token }} bg-secondary-light"></div>
              <div class="display-flex flex-column flex-align-start margin-top-2">
                <span class="utility-class">.square-{{ item.token }}</span>
                <span class="utility-value margin-left-2px">{{ item.value }}</span>
              </div>
            </div>
          {% endif %}
        {% endfor %}
      </div>
    </section><!-- .utility-examples -->
  </section><!-- .utility#square -->
</section>

<section id="utility-mixins" class="padding-top-4">
  <h2 class="site-h2 margin-y-0">Utility mixins</h2>
  {% include utilities/utility-mixin-intro.html %}

  <table class="usa-table-borderless site-table-responsive site-table-simple">
    <thead>
      <tr>
        <th scope="col" class="tablet:maxw-card-lg">Utility</th>
        <th scope="col">Mixin</th>
        <th scope="col">Example</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .height-<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">unit</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-height(<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">unit</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-height('card')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .width-<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">unit</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-width(<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">unit</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-width('auto')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .maxh-<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">unit</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-maxh(<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">unit</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-maxh('screen')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .maxw-<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">unit</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-maxw(<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">unit</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-maxw('card-lg')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .minh-<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">unit</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-minh(<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">unit</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-minh('screen')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .minw-<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">unit</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-minw(<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">unit</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-minw('auto')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .add-aspect-<code>ratio</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            add-aspect(<code>ratio</code>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include add-aspect('16x9')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .circle-<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">unit</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-circle(<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">unit</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-circle('05')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .square-<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">unit</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-square(<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">unit</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-square('05')
          </span>
        </td>
      </tr>
    </tbody>
  </table>

  {% include utilities/utility-mixin-using.html %}
</section>

<section id="advanced-settings" class="padding-top-4">
  <h2 class="site-h2 margin-y-0">Advanced settings</h2>

  {% include utilities/responsive-variants.html %}

  {% include utilities/state-variants.html %}

  {% include utilities/output-control.html %}

  <section class="utilities-section margin-top-6">
    {% include utilities/values-intro.html %}

    <aside class="example border-left-05 border-secondary-light padding-left-105 margin-top-2">
      <h4 class="font-sans-2xs margin-top-0 margin-bottom-05">Example</h4>
<pre class="font-mono-xs margin-0 padding-0 bg-transparent">
$width-palettes: (
  $palette-spacing-uswds-large // note: no trailing comma
);
</pre>
    <h4 class="font-sans-2xs margin-top-2 margin-bottom-05">Output</h4>
<pre class=" font-mono-xs margin-0 padding-0 bg-transparent">
.width-card { width: 10rem; }
.width-card-lg { width: 15rem; }
.width-mobile { width: 20rem; }
</pre>
    </aside>

    {% include utilities/standard-palettes.html %}
    {% include utilities/spacing-palettes.html %}

  </section>
</section>
