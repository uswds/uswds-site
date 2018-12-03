---
permalink: /utilities/margin-and-padding/
layout: styleguide
type: utility
title: Margin and padding
category: Utilities
lead: Change the spacing around an item and inside an item.
subnav:
- text: Margin
  href: '#margin'
- text: Padding
  href: '#padding'
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'
vals_positive:
  - token: 0
    value: 0
  - token: 1px
    value: 1px
  - token: 2px
    value: 2px
  - token: '05'
    value: 4px
  - token: 1
    value: 8px
  - token: 105
    value: 12px
  - token: 2
    value: 16px
  - token: 205
    value: 20px
  - token: 3
    value: 24px
  - token: 4
    value: 32px
  - token: 5
    value: 40px
  - token: 6
    value: 48px
  - token: 7
    value: 56px
  - token: 8
    value: 64px
  - token: 9
    value: 72px
vals_negative:
  - token: neg-1px
    value: -1px
    equiv: 1px
  - token: neg-2px
    value: -2px
    equiv: 2px
  - token: neg-05
    value: -4px
    equiv: '05'
  - token: neg-1
    value: -8px
    equiv: 1
  - token: neg-105
    value: -12px
    equiv: 105
  - token: neg-2
    value: -16px
    equiv: 2
  - token: neg-205
    value: -20px
    equiv: 205
  - token: neg-3
    value: -24px
    equiv: 3

utilities:
  - base:         margin
    var:          margin
    output:       true
    responsive:   true
    active:       false
    focus:        false
    hover:        false
    visited:      false
  - base:         padding
    var:          padding
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
    <span class="property utilities-property">margin</span>
    <span class="property utilities-property">padding</span>
  </div>
</div>

<section class="utilities-section">

  {% include utilities/utilities-section-title-bar.html %}

  <section class="utility" id="margin">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Margin</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">margin</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-active"><a href="#responsive-variants">responsive</a></li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section><!-- utility-title-bar -->

    <section class="utility-examples">
      <h4 class="utility-examples-title margin-bottom-3">Margin on all sides</h4>
      <div class="grid-row">
        {% for item in page.vals_positive %}
          {% if forloop.last %}
          <div class="utility-example-container grid-col-6 text-center display-flex flex-column flex-justify flex-align-start">
          {% else %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          {% endif %}
            <div class="bg-secondary-light display-inline-block">
              <div class="square-4 border-1px bg-white margin-{{ item.token }}"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.margin-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
      </div>


      <h4 class="utility-examples-title margin-bottom-3">Margin bottom</h4>

      <div class="grid-row">
        {% for item in page.vals_negative reversed %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
            <div class="position-relative square-4 border-1px bg-white">
              <div class="bg-secondary-light pin-bottom height-{{ item.equiv }}"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.margin-bottom-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
        {% for item in page.vals_positive %}
          {% if forloop.last %}
          <div class="utility-example-container grid-col-6 text-center display-flex flex-column flex-justify flex-align-start">
          {% else %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          {% endif %}
            <div class="bg-secondary-light display-inline-block">
              <div class="square-4 border-1px bg-white margin-bottom-{{ item.token }}"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.margin-bottom-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
      </div>

      <h4 class="utility-examples-title margin-bottom-3">Margin top</h4>
      <div class="grid-row">
        {% for item in page.vals_negative reversed %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
            <div class="position-relative square-4 border-1px bg-white">
              <div class="bg-secondary-light pin-top width-full height-{{ item.equiv }}"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.margin-top-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
        {% for item in page.vals_positive %}
          {% if forloop.last %}
          <div class="utility-example-container grid-col-6 text-center display-flex flex-column flex-justify flex-align-start">
          {% else %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          {% endif %}
            <div class="bg-secondary-light display-inline-block">
              <div class="square-4 border-1px bg-white margin-top-{{ item.token }}"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.margin-top-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
      </div>

      <h4 class="utility-examples-title margin-bottom-3">Margin left</h4>
      <div class="grid-row">
        {% for item in page.vals_negative reversed %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
            <div class="position-relative square-4 border-1px bg-white">
              <div class="bg-secondary-light pin-left height-full width-{{ item.equiv }}"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.margin-left-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
        {% for item in page.vals_positive %}
          {% if forloop.last %}
          <div class="utility-example-container grid-col-6 text-center display-flex flex-column flex-justify flex-align-start">
          {% else %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          {% endif %}
            <div class="bg-secondary-light display-inline-block">
              <div class="square-4 border-1px bg-white margin-left-{{ item.token }}"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.margin-left-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
        <div class="grid-col-12 text-center display-flex flex-column flex-justify flex-align-start utility-example-container">
          <div class="bg-secondary-light display-inline-block width-full">
            <div class="square-4 border-1px bg-white margin-left-auto"></div>
          </div>
          <div class="display-flex flex-column flex-align-start">
            <p class="utility-class margin-top-2">.margin-left-auto</p>
            <p class="utility-value">auto</p>
          </div>
        </div>
      </div>

      <h4 class="utility-examples-title margin-bottom-3">Margin right</h4>
      <div class="grid-row">
        {% for item in page.vals_negative reversed %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
            <div class="position-relative square-4 border-1px bg-white">
              <div class="bg-secondary-light pin-right height-full width-{{ item.equiv }}"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.margin-right-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
        {% for item in page.vals_positive %}
          {% if forloop.last %}
          <div class="utility-example-container grid-col-6 text-center display-flex flex-column flex-justify flex-align-start">
          {% else %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          {% endif %}
            <div class="bg-secondary-light display-inline-block">
              <div class="square-4 border-1px bg-white margin-right-{{ item.token }}"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.margin-right-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
        <div class="grid-col-12 text-center display-flex flex-column flex-justify flex-align-start utility-example-container">
          <div class="bg-secondary-light display-inline-block width-full">
            <div class="square-4 border-1px bg-white margin-right-auto"></div>
          </div>
          <div class="display-flex flex-column flex-align-start">
            <p class="utility-class margin-top-2">.margin-right-auto</p>
            <p class="utility-value">auto</p>
          </div>
        </div>
      </div>

      <h4 class="utility-examples-title margin-bottom-3">Margin left and right</h4>
      <div class="grid-row">
        {% for item in page.vals_negative reversed %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
            <div class="position-relative height-4 width-9 border-1px bg-white">
              <div class="bg-secondary-light pin-right height-full width-{{ item.equiv }}"></div>
              <div class="bg-secondary-light pin-left height-full width-{{ item.equiv }}"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.margin-x-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
        {% for item in page.vals_positive %}
          {% if forloop.last %}
          <div class="utility-example-container grid-col-6 text-center display-flex flex-column flex-justify flex-align-start">
          {% else %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          {% endif %}
            <div class="bg-secondary-light display-inline-block">
              <div class="square-4 border-1px bg-white margin-x-{{ item.token }}"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.margin-x-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
        <div class="grid-col-12 text-center display-flex flex-column flex-justify flex-align-start utility-example-container">
          <div class="bg-secondary-light display-inline-block width-full">
            <div class="square-4 border-1px bg-white margin-x-auto"></div>
          </div>
          <div class="display-flex flex-column flex-align-start">
            <p class="utility-class margin-top-2">.margin-x-auto</p>
            <p class="utility-value">auto</p>
          </div>
        </div>
      </div>

      <h4 class="utility-examples-title margin-bottom-3">Margin bottom and top</h4>
      <div class="grid-row">
        {% for item in page.vals_negative reversed %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
            <div class="position-relative width-4 height-9 border-1px bg-white">
              <div class="bg-secondary-light pin-bottom height-{{ item.equiv }}"></div>
              <div class="bg-secondary-light pin-top width-full height-{{ item.equiv }}"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.margin-y-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
        {% for item in page.vals_positive %}
          {% if forloop.last %}
          <div class="utility-example-container grid-col-6 text-center display-flex flex-column flex-justify flex-align-start">
          {% else %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          {% endif %}
            <div class="bg-secondary-light display-inline-block">
              <div class="square-4 border-1px bg-white margin-y-{{ item.token }}"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.margin-y-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
      </div>
    </section><!-- utility-examples -->
  </section><!-- #margin -->

  <section class="utility" id="padding">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Padding</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">padding</span></p>
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
      <h4 class="utility-examples-title margin-bottom-3">Padding on all sides</h4>
      <div class="grid-row">
        {% for item in page.vals_positive %}
          {% if forloop.last %}
          <div class="utility-example-container grid-col-6 text-center display-flex flex-column flex-justify flex-align-start">
          {% else %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          {% endif %}
            <div class="square-card border-1px bg-primary-lighter margin-0 display-inline-block padding-{{ item.token }}">
              <div class="bg-white add-aspect-1x1"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.padding-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
      </div>

      <h4 class="utility-examples-title margin-bottom-3">Padding bottom</h4>
      <div class="grid-row">
        {% for item in page.vals_positive %}
          {% if forloop.last %}
          <div class="utility-example-container grid-col-6 text-center display-flex flex-column flex-justify flex-align-start">
            <div class="position-relative square-9 border-1px margin-0 bg-primary-lighter">
            </div>
          {% else %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
            <div class="position-relative square-9 border-1px margin-0 bg-white">
              <div class="bg-primary-lighter pin-bottom pin-x height-{{ item.token }}"></div>
            </div>
          {% endif %}
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.padding-bottom-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
      </div>

      <h4 class="utility-examples-title margin-bottom-3">Padding top</h4>
      <div class="grid-row">
        {% for item in page.vals_positive %}
          {% if forloop.last %}
          <div class="utility-example-container grid-col-6 text-center display-flex flex-column flex-justify flex-align-start">
            <div class="position-relative square-9 border-1px margin-0 bg-primary-lighter">
            </div>
          {% else %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
            <div class="position-relative square-9 border-1px margin-0 bg-white">
              <div class="bg-primary-lighter pin-top pin-x height-{{ item.token }}"></div>
            </div>
          {% endif %}
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.padding-top-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
      </div>

      <h4 class="utility-examples-title margin-bottom-3">Padding left</h4>
      <div class="grid-row">
        {% for item in page.vals_positive %}
          {% if forloop.last %}
          <div class="utility-example-container grid-col-6 text-center display-flex flex-column flex-justify flex-align-start">
            <div class="position-relative square-9 border-1px margin-0 bg-primary-lighter">
            </div>
          {% else %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
            <div class="position-relative square-9 border-1px margin-0 bg-white">
              <div class="bg-primary-lighter pin-left pin-y width-{{ item.token }}"></div>
            </div>
          {% endif %}
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.padding-left-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
      </div>

      <h4 class="utility-examples-title margin-bottom-3">Padding right</h4>
      <div class="grid-row">
        {% for item in page.vals_positive %}
          {% if forloop.last %}
          <div class="utility-example-container grid-col-6 text-center display-flex flex-column flex-justify flex-align-start">
            <div class="position-relative square-9 border-1px margin-0 bg-primary-lighter">
            </div>
          {% else %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
            <div class="position-relative square-9 border-1px margin-0 bg-white">
              <div class="bg-primary-lighter pin-right pin-y width-{{ item.token }}"></div>
            </div>
          {% endif %}
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.padding-right-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
      </div>

      <h4 class="utility-examples-title margin-bottom-3">Padding left and right</h4>
      <div class="grid-row">
        {% for item in page.vals_positive %}
          {% if forloop.last %}
          <div class="utility-example-container grid-col-6 text-center display-flex flex-column flex-justify flex-align-start">
          {% else %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          {% endif %}
            <div class="position-relative height-9 width-card border-1px bg-white margin-0 display-inline-block padding-top-0">
              <div class="bg-primary-lighter pin-right pin-y width-{{ item.token }}"></div>
              <div class="bg-primary-lighter pin-left pin-y width-{{ item.token }}"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.padding-x-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
      </div>

      <h4 class="utility-examples-title margin-bottom-3">Padding bottom and top</h4>
      <div class="grid-row">
        {% for item in page.vals_positive %}
          {% if forloop.last %}
          <div class="utility-example-container grid-col-6 text-center display-flex flex-column flex-justify flex-align-start">
          {% else %}
          <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          {% endif %}
            <div class="position-relative height-card width-9 border-1px bg-white margin-0 display-inline-block padding-top-0">
              <div class="bg-primary-lighter pin-top pin-x height-{{ item.token }}"></div>
              <div class="bg-primary-lighter pin-bottom pin-x height-{{ item.token }}"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.padding-y-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
      </div>
    </section><!-- utility-examples -->
  </section><!-- #padding -->
</section><!-- utilities -->

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
            .margin-<code>modifier</code>-<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-margin-<code>modifier</code>(<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-margin-x(-0.5)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .padding-<code>modifier</code>-<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-padding-<code>modifier</code>(<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-padding(1)
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
$margin-palettes: (
  'palette-units-positive-smaller',
  'palette-units-negative-smaller', // note: no trailing comma
);
</pre>
    <h4 class="font-sans-2xs margin-top-2 margin-bottom-05">Output</h4>
<pre class=" font-mono-xs margin-0 padding-0 bg-transparent">
.margin-1px { margin: 1px; }
.margin-2px { margin: 2px; }
.margin-neg-1px { margin: -1px; }
.margin-neg-2px { margin: -2px; }
</pre>
    </aside>

    {% include utilities/standard-palettes.html %}
    {% include utilities/spacing-palettes.html %}

  </section>
</section>
