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
---

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="token utilities-property">height</span>
    <span class="token utilities-property">max-height</span>
    <span class="token utilities-property">max-width</span>
    <span class="token utilities-property">min-height</span>
    <span class="token utilities-property">min-width</span>
    <span class="token utilities-property">width</span>
  </div>
</div>

<section class="utilities-section">
  <div class="grid-row utilities-section-title-bar">
    <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-ink text-no-wrap">advanced settings</a>.</p>
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
      {% assign height_values = site.data.uswds_tokens.special.auto_auto
        | concat: site.data.uswds_tokens.special.zero_zero
        | concat: site.data.uswds_tokens.spacing.positive.smaller
        | concat: site.data.uswds_tokens.spacing.positive.small
        | concat: site.data.uswds_tokens.spacing.positive.medium
        | concat: site.data.uswds_tokens.spacing.positive.large
        | concat: site.data.uswds_tokens.special.full_percent
        | concat: site.data.uswds_tokens.special.full_viewport_height
      %}
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
      {% assign width_values = site.data.uswds_tokens.special.auto_auto
        | concat: site.data.uswds_tokens.special.zero_zero
        | concat: site.data.uswds_tokens.spacing.positive.smaller
        | concat: site.data.uswds_tokens.spacing.positive.small
        | concat: site.data.uswds_tokens.spacing.positive.medium
        | concat: site.data.uswds_tokens.spacing.positive.large
        | concat: site.data.uswds_tokens.spacing.positive.larger
        | concat: site.data.uswds_tokens.spacing.positive.largest
        | concat: site.data.uswds_tokens.special.full_percent
      %}
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
      {% assign maxh_values = site.data.uswds_tokens.special.none_none
        | concat: site.data.uswds_tokens.spacing.positive.small
        | concat: site.data.uswds_tokens.spacing.positive.medium
        | concat: site.data.uswds_tokens.spacing.positive.large
        | concat: site.data.uswds_tokens.spacing.positive.larger
        | concat: site.data.uswds_tokens.special.full_viewport_height
      %}
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
      {% assign maxw_values = site.data.uswds_tokens.special.none_none
        | concat: site.data.uswds_tokens.spacing.positive.small
        | concat: site.data.uswds_tokens.spacing.positive.medium
        | concat: site.data.uswds_tokens.spacing.positive.large
        | concat: site.data.uswds_tokens.spacing.positive.larger
        | concat: site.data.uswds_tokens.spacing.positive.largest
        | concat: site.data.uswds_tokens.special.full_percent
      %}
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
      {% assign minh_values = site.data.uswds_tokens.special.none_none
        | concat: site.data.uswds_tokens.special.zero_zero
        | concat: site.data.uswds_tokens.spacing.positive.small
        | concat: site.data.uswds_tokens.spacing.positive.medium
        | concat: site.data.uswds_tokens.spacing.positive.large
        | concat: site.data.uswds_tokens.spacing.positive.larger
        | concat: site.data.uswds_tokens.special.full_percent
        | concat: site.data.uswds_tokens.special.full_viewport_height
      %}
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
      {% assign minw_values = site.data.uswds_tokens.special.none_none
        | concat: site.data.uswds_tokens.spacing.positive.small
        | concat: site.data.uswds_tokens.spacing.positive.medium
      %}
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
        {% assign circle_values = site.data.uswds_tokens.spacing.positive.smaller
          | concat: site.data.uswds_tokens.spacing.positive.small
          | concat: site.data.uswds_tokens.spacing.positive.medium
          | concat: site.data.uswds_tokens.spacing.positive.large
        %}
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
        {% assign square_values = site.data.uswds_tokens.spacing.positive.smaller
          | concat: site.data.uswds_tokens.spacing.positive.small
          | concat: site.data.uswds_tokens.spacing.positive.medium
          | concat: site.data.uswds_tokens.spacing.positive.large
        %}
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

  <section class="utilities-section">
    <h2 class="utilities-section-title">Responsive variants</h2>
  </section>

  <section class="utilities-section">
    <h2 class="utilities-section-title">Default output</h2>
    <div class="grid-row font-sans-1 text-bold border-bottom-1px padding-bottom-05 margin-top-2 border-gray-20">
      <div class="grid-col-4">Utility</div>
      <div class="grid-col-6">Output SCSS</div>
      <div class="grid-col-2">Default variable value</div>
    </div>
    <dl class="output-list">
      {% for color in all_colors %}
        <dt class="output-utility">.text-{{ color.token }}</dt>
        <dd class="output-css">color: <span class="output-token">${% if color.var %}{{ color.token }}{% else %}{{ color.token }}{% endif %}</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-{{ color.token }} circle-105 text-baseline margin-right-05"></span>
          {{ color.value }}
        </dd>
      {% endfor %}
      {% for color in all_colors %}
        <dt class="output-utility">.bg-{{ color.token }}</dt>
        <dd class="output-css">background-color: <span class="output-token">${% if color.var %}{{ color.var }}{% else %}{{ color.token }}{% endif %}</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-{{ color.token }} circle-105 text-baseline margin-right-05"></span>
          {{ color.value }}
        </dd>
      {% endfor %}
    </dl>
  </section>

  <section class="utilities-section">
    <h2 class="utilities-section-title">Advanced settings</h2>
  </section>

</section><!-- .utilities-section -->
