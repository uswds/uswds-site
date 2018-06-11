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
      <h3 class="utility-examples-title">Project theme colors <a class="utility-examples-helper" href="#0">Read more about project theme colors</a></h3>

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
      <dt class="output-utility">.text-base-lightest</dt>
        <dd class="output-css">color: $base-lightest</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-base-lightest circle-105 text-baseline margin-right-05"></span>
          #FCFCFC
        </dd>
      <dt class="output-utility">.text-base-lighter</dt>
        <dd class="output-css">color: $base-lighter</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-base-lighter circle-105 text-top margin-right-05"></span>
          #F0F0F0
        </dd>
      <dt class="output-utility">.text-base-light</dt>
        <dd class="output-css">color: $base-light</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-base-light circle-105 text-top margin-right-05"></span>
          #E6E6E6
        </dd>
      <dt class="output-utility">.text-base</dt>
        <dd class="output-css">color: $base</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-base circle-105 text-middle margin-right-05"></span>
          #ADADAD
        </dd>
      <dt class="output-utility">.text-base-dark</dt>
        <dd class="output-css">color: $base-dark</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-base-dark circle-105 text-middle margin-right-05"></span>
          #757575
        </dd>
      <dt class="output-utility">.text-base-darker</dt>
        <dd class="output-css">color: $base-darker</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-base-darker circle-105 text-middle margin-right-05"></span>
          #454545
        </dd>
      <dt class="output-utility">.text-base-darkest</dt>
        <dd class="output-css">color: $base-darkest</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-base-darkest circle-105 text-middle margin-right-05"></span>
          #171717
        </dd>

      <dt class="output-utility">.text-primary-lighter</dt>
        <dd class="output-css">color: $primary-lighter</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-primary-lighter circle-105 text-middle margin-right-05"></span>
          #DAE9F6
        </dd>
      <dt class="output-utility">.text-primary-light</dt>
        <dd class="output-css">color: $primary-light</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-primary-light circle-105 text-middle margin-right-05"></span>
          #7CBDF0
        </dd>
      <dt class="output-utility">.text-primary</dt>
        <dd class="output-css">color: $primary</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-primary circle-105 text-middle margin-right-05"></span>
          #0F6BB2
        </dd>
      <dt class="output-utility">.text-primary-vivid</dt>
        <dd class="output-css">color: $primary-vivid</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-primary-vivid circle-105 text-middle margin-right-05"></span>
          #0E57DA
        </dd>
      <dt class="output-utility">.text-primary-dark</dt>
        <dd class="output-css">color: $primary-dark</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-primary-dark circle-105 text-middle margin-right-05"></span>
          #215192
        </dd>
      <dt class="output-utility">.text-primary-darker</dt>
        <dd class="output-css">color: $primary-darker</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-primary-darker circle-105 text-middle margin-right-05"></span>
          #122B4C
        </dd>

      <dt class="output-utility">.text-secondary-light</dt>
        <dd class="output-css">color: $secondary-light</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-secondary-light circle-105 text-middle margin-right-05"></span>
          #122B4C
        </dd>
      <dt class="output-utility">.text-secondary</dt>
        <dd class="output-css">color: $secondary</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-secondary circle-105 text-middle margin-right-05"></span>
          #122B4C
        </dd>
      <dt class="output-utility">.text-secondary-vivid</dt>
        <dd class="output-css">color: $secondary-vivid</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-secondary-vivid circle-105 text-middle margin-right-05"></span>
          #E6251B
        </dd>
      <dt class="output-utility">.text-secondary-dark</dt>
        <dd class="output-css">color: $secondary-dark</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-secondary-dark circle-105 text-middle margin-right-05"></span>
          #3B2523
        </dd>

      <dt class="output-utility">.text-accent-warm</dt>
        <dd class="output-css">color: $accent-warm</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-accent-warm circle-105 text-middle margin-right-05"></span>
          #FD974C
        </dd>
      <dt class="output-utility">.text-accent-warm-dark</dt>
        <dd class="output-css">color: $accent-warm-dark</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-accent-warm-dark circle-105 text-middle margin-right-05"></span>
          #FD7B28
        </dd>

      <dt class="output-utility">.text-accent-cool</dt>
        <dd class="output-css">color: $accent-cool</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-accent-cool circle-105 text-middle margin-right-05"></span>
          #21C2E6
        </dd>
      <dt class="output-utility">.text-accent-cool-dark</dt>
        <dd class="output-css">color: $accent-cool-dark</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-accent-cool-dark circle-105 text-middle margin-right-05"></span>
          #1BABCF
        </dd>

      <dt class="output-utility">.text-white</dt>
        <dd class="output-css">color: white</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-white circle-105 text-middle margin-right-05"></span>
          white
        </dd>
      <dt class="output-utility">.text-gray-5</dt>
        <dd class="output-css">color: $gray-5</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-gray-5 circle-105 text-middle margin-right-05"></span>
          #F0F0F0
        </dd>
      <dt class="output-utility">.text-gray-10</dt>
        <dd class="output-css">color: $gray-10</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-gray-10 circle-105 text-middle margin-right-05"></span>
          #E6E6E6
        </dd>
      <dt class="output-utility">.text-gray-30</dt>
        <dd class="output-css">color: $gray-30</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-gray-30 circle-105 text-middle margin-right-05"></span>
          #ADADAD
        </dd>
      <dt class="output-utility">.text-gray-50</dt>
        <dd class="output-css">color: $gray-50</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-gray-50 circle-105 text-middle margin-right-05"></span>
          #757575
        </dd>
      <dt class="output-utility">.text-gray-70</dt>
        <dd class="output-css">color: $gray-70</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-gray-70 circle-105 text-middle margin-right-05"></span>
          #454545
        </dd>
      <dt class="output-utility">.text-gray-90</dt>
        <dd class="output-css">color: $gray-90</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-gray-90 circle-105 text-middle margin-right-05"></span>
          #171717
        </dd>
      <dt class="output-utility">.text-black</dt>
        <dd class="output-css">color: $black</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-black circle-105 text-middle margin-right-05"></span>
          black
        </dd>
      <dt class="output-utility">.text-red</dt>
        <dd class="output-css">color: $red-50v</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-red circle-105 text-middle margin-right-05"></span>
          #E6251B
        </dd>
      <dt class="output-utility">.text-orange</dt>
        <dd class="output-css">color: $orange-40v</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-orange circle-105 text-middle margin-right-05"></span>
          #FD7B28
        </dd>
      <dt class="output-utility">.text-gold</dt>
        <dd class="output-css">color: $gold-30v</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-gold circle-105 text-middle margin-right-05"></span>
          #F8AE29
        </dd>
      <dt class="output-utility">.text-yellow</dt>
        <dd class="output-css">color: $yellow-20v</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-yellow circle-105 text-middle margin-right-05"></span>
          #FCD344
        </dd>
      <dt class="output-utility">.text-green</dt>
        <dd class="output-css">color: $green-40v</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-green circle-105 text-middle margin-right-05"></span>
          #548114
        </dd>
      <dt class="output-utility">.text-mint</dt>
        <dd class="output-css">color: $mint-40v</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-mint circle-105 text-middle margin-right-05"></span>
          #20C688
        </dd>
      <dt class="output-utility">.text-cyan</dt>
        <dd class="output-css">color: $cyan-30v</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-cyan circle-105 text-middle margin-right-05"></span>
          #1BABCF
        </dd>
      <dt class="output-utility">.text-blue</dt>
        <dd class="output-css">color: $blue-50</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-blue circle-105 text-middle margin-right-05"></span>
          #137CDB
        </dd>
      <dt class="output-utility">.text-indigo</dt>
        <dd class="output-css">color: $indigo-40</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-indigo circle-105 text-middle margin-right-05"></span>
          #6970C7
        </dd>
      <dt class="output-utility">.text-violet</dt>
        <dd class="output-css">color: $violet-40v</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-violet circle-105 text-middle margin-right-05"></span>
          #836BB3
        </dd>
      <dt class="output-utility">.text-magenta</dt>
        <dd class="output-css">color: $magenta-50</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-magenta circle-105 text-middle margin-right-05"></span>
          #DF2D7A
        </dd>

      <dt class="output-utility">.bg-base-lightest</dt>
        <dd class="output-css">background-color: <span class="output-token">$base-lightest</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-base-lightest circle-105 text-baseline margin-right-05"></span>
          #FCFCFC
        </dd>
      <dt class="output-utility">.bg-base-lighter</dt>
        <dd class="output-css">background-color: <span class="output-token">$base-lighter</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-base-lighter circle-105 text-top margin-right-05"></span>
          #F0F0F0
        </dd>
      <dt class="output-utility">.bg-base-light</dt>
        <dd class="output-css">background-color: <span class="output-token">$base-light</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-base-light circle-105 text-top margin-right-05"></span>
          #E6E6E6
        </dd>
      <dt class="output-utility">.bg-base</dt>
        <dd class="output-css">background-color: <span class="output-token">$base</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-base circle-105 text-middle margin-right-05"></span>
          #ADADAD
        </dd>
      <dt class="output-utility">.bg-base-dark</dt>
        <dd class="output-css">background-color: <span class="output-token">$base-dark</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-base-dark circle-105 text-middle margin-right-05"></span>
          #757575
        </dd>
      <dt class="output-utility">.bg-base-darker</dt>
        <dd class="output-css">background-color: <span class="output-token">$base-darker</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-base-darker circle-105 text-middle margin-right-05"></span>
          #454545
        </dd>
      <dt class="output-utility">.bg-base-darkest</dt>
        <dd class="output-css">background-color: <span class="output-token">$base-darkest</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-base-darkest circle-105 text-middle margin-right-05"></span>
          #171717
        </dd>

      <dt class="output-utility">.bg-primary-lighter</dt>
        <dd class="output-css">background-color: <span class="output-token">$primary-lighter</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-primary-lighter circle-105 text-middle margin-right-05"></span>
          #DAE9F6
        </dd>
      <dt class="output-utility">.bg-primary-light</dt>
        <dd class="output-css">background-color: <span class="output-token">$primary-light</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-primary-light circle-105 text-middle margin-right-05"></span>
          #7CBDF0
        </dd>
      <dt class="output-utility">.bg-primary</dt>
        <dd class="output-css">background-color: <span class="output-token">$primary</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-primary circle-105 text-middle margin-right-05"></span>
          #0F6BB2
        </dd>
      <dt class="output-utility">.bg-primary-vivid</dt>
        <dd class="output-css">background-color: <span class="output-token">$primary-vivid</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-primary-vivid circle-105 text-middle margin-right-05"></span>
          #0E57DA
        </dd>
      <dt class="output-utility">.bg-primary-dark</dt>
        <dd class="output-css">background-color: <span class="output-token">$primary-dark</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-primary-dark circle-105 text-middle margin-right-05"></span>
          #215192
        </dd>
      <dt class="output-utility">.bg-primary-darker</dt>
        <dd class="output-css">background-color: <span class="output-token">$primary-darker</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-primary-darker circle-105 text-middle margin-right-05"></span>
          #122B4C
        </dd>

      <dt class="output-utility">.bg-secondary-light</dt>
        <dd class="output-css">background-color: <span class="output-token">$secondary-light</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-secondary-light circle-105 text-middle margin-right-05"></span>
          #122B4C
        </dd>
      <dt class="output-utility">.bg-secondary</dt>
        <dd class="output-css">background-color: <span class="output-token">$secondary</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-secondary circle-105 text-middle margin-right-05"></span>
          #122B4C
        </dd>
      <dt class="output-utility">.bg-secondary-vivid</dt>
        <dd class="output-css">background-color: <span class="output-token">$secondary-vivid</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-secondary-vivid circle-105 text-middle margin-right-05"></span>
          #E6251B
        </dd>
      <dt class="output-utility">.bg-secondary-dark</dt>
        <dd class="output-css">background-color: <span class="output-token">$secondary-dark</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-secondary-dark circle-105 text-middle margin-right-05"></span>
          #3B2523
        </dd>

      <dt class="output-utility">.bg-accent-warm</dt>
        <dd class="output-css">background-color: <span class="output-token">$accent-warm</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-accent-warm circle-105 text-middle margin-right-05"></span>
          #FD974C
        </dd>
      <dt class="output-utility">.bg-accent-warm-dark</dt>
        <dd class="output-css">background-color: <span class="output-token">$accent-warm-dark</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-accent-warm-dark circle-105 text-middle margin-right-05"></span>
          #FD7B28
        </dd>

      <dt class="output-utility">.bg-accent-cool</dt>
        <dd class="output-css">background-color: <span class="output-token">$accent-cool</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-accent-cool circle-105 text-middle margin-right-05"></span>
          #21C2E6
        </dd>
      <dt class="output-utility">.bg-accent-cool-dark</dt>
        <dd class="output-css">background-color: <span class="output-token">$accent-cool-dark</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-accent-cool-dark circle-105 text-middle margin-right-05"></span>
          #1BABCF
        </dd>

      <dt class="output-utility">.bg-white</dt>
        <dd class="output-css">background-color: white</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-white circle-105 text-middle margin-right-05"></span>
          white
        </dd>
      <dt class="output-utility">.bg-gray-5</dt>
        <dd class="output-css">background-color: <span class="output-token">$gray-5</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-gray-5 circle-105 text-middle margin-right-05"></span>
          #F0F0F0
        </dd>
      <dt class="output-utility">.bg-gray-10</dt>
        <dd class="output-css">background-color: <span class="output-token">$gray-10</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-gray-10 circle-105 text-middle margin-right-05"></span>
          #E6E6E6
        </dd>
      <dt class="output-utility">.bg-gray-30</dt>
        <dd class="output-css">background-color: <span class="output-token">$gray-30</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-gray-30 circle-105 text-middle margin-right-05"></span>
          #ADADAD
        </dd>
      <dt class="output-utility">.bg-gray-50</dt>
        <dd class="output-css">background-color: <span class="output-token">$gray-50</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-gray-50 circle-105 text-middle margin-right-05"></span>
          #757575
        </dd>
      <dt class="output-utility">.bg-gray-70</dt>
        <dd class="output-css">background-color: <span class="output-token">$gray-70</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-gray-70 circle-105 text-middle margin-right-05"></span>
          #454545
        </dd>
      <dt class="output-utility">.bg-gray-90</dt>
        <dd class="output-css">background-color: <span class="output-token">$gray-90</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-gray-90 circle-105 text-middle margin-right-05"></span>
          #171717
        </dd>
      <dt class="output-utility">.bg-black</dt>
        <dd class="output-css">background-color: black</dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-black circle-105 text-middle margin-right-05"></span>
          black
        </dd>
      <dt class="output-utility">.bg-red</dt>
        <dd class="output-css">background-color: <span class="output-token">$red-50v</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-red circle-105 text-middle margin-right-05"></span>
          #E6251B
        </dd>
      <dt class="output-utility">.bg-orange</dt>
        <dd class="output-css">background-color: <span class="output-token">$orange-40v</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-orange circle-105 text-middle margin-right-05"></span>
          #FD7B28
        </dd>
      <dt class="output-utility">.bg-gold</dt>
        <dd class="output-css">background-color: <span class="output-token">$gold-30v</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-gold circle-105 text-middle margin-right-05"></span>
          #F8AE29
        </dd>
      <dt class="output-utility">.bg-yellow</dt>
        <dd class="output-css">background-color: <span class="output-token">$yellow-20v</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-yellow circle-105 text-middle margin-right-05"></span>
          #FCD344
        </dd>
      <dt class="output-utility">.bg-green</dt>
        <dd class="output-css">background-color: <span class="output-token">$green-40v</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-green circle-105 text-middle margin-right-05"></span>
          #548114
        </dd>
      <dt class="output-utility">.bg-mint</dt>
        <dd class="output-css">background-color: <span class="output-token">$mint-40v</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-mint circle-105 text-middle margin-right-05"></span>
          #20C688
        </dd>
      <dt class="output-utility">.bg-cyan</dt>
        <dd class="output-css">background-color: <span class="output-token">$cyan-30v</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-cyan circle-105 text-middle margin-right-05"></span>
          #1BABCF
        </dd>
      <dt class="output-utility">.bg-blue</dt>
        <dd class="output-css">background-color: <span class="output-token">$blue-50</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-blue circle-105 text-middle margin-right-05"></span>
          #137CDB
        </dd>
      <dt class="output-utility">.bg-indigo</dt>
        <dd class="output-css">background-color: <span class="output-token">$indigo-40</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-indigo circle-105 text-middle margin-right-05"></span>
          #6970C7
        </dd>
      <dt class="output-utility">.bg-violet</dt>
        <dd class="output-css">background-color: <span class="output-token">$violet-40v</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-violet circle-105 text-middle margin-right-05"></span>
          #836BB3
        </dd>
      <dt class="output-utility">.bg-magenta</dt>
        <dd class="output-css">background-color: <span class="output-token">$magenta-50</span></dd>
        <dd class="output-variable">
          <span class="display-inline-block bg-magenta circle-105 text-middle margin-right-05"></span>
          #DF2D7A
        </dd>
    </dl>
  </section>

  <section class="utilities-section">
    <h2 class="utilities-section-title">Advanced settings</h2>
  </section>
</section>
