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
---

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="token utilities-property">margin</span>
    <span class="token utilities-property">padding</span>
  </div>
</div>

<section class="utilities-section">

  <div class="grid-row flex-align-center margin-bottom-2">
    <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-ink text-no-wrap">advanced settings</a>.</p>
  </div>

  <section class="utility" id="margin">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Margin</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">margin</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-active"><a href="#0">responsive</a></li>
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
              <div class="bg-secondary-light pin-top height-{{ item.equiv }}"></div>
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
              <div class="bg-secondary-light pin-left width-{{ item.equiv }}"></div>
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
              <div class="bg-secondary-light pin-right width-{{ item.equiv }}"></div>
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
              <div class="bg-secondary-light pin-right width-{{ item.equiv }}"></div>
              <div class="bg-secondary-light pin-left width-{{ item.equiv }}"></div>
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
              <div class="bg-secondary-light pin-top height-{{ item.equiv }}"></div>
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
          <li class="utility-scope-button-active"><a href="#0">responsive</a></li>
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
              <div class="bg-primary-lighter pin-bottom height-{{ item.token }}"></div>
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
              <div class="bg-primary-lighter pin-top height-{{ item.token }}"></div>
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
              <div class="bg-primary-lighter pin-left width-{{ item.token }}"></div>
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
              <div class="bg-primary-lighter pin-right width-{{ item.token }}"></div>
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
              <div class="bg-primary-lighter pin-right width-{{ item.token }}"></div>
              <div class="bg-primary-lighter pin-left width-{{ item.token }}"></div>
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
              <div class="bg-primary-lighter pin-top height-{{ item.token }}"></div>
              <div class="bg-primary-lighter pin-bottom height-{{ item.token }}"></div>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">.padding-x-{{ item.token }}</p>
              <p class="utility-value">{{ item.value }}</p>
            </div>
          </div>
        {% endfor %}
      </div>
    </section><!-- utility-examples -->
  </section><!-- #padding -->
</section><!-- utilities -->

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
    <dt class="output-utility">.margin-0</dt>
    <dd class="output-css">
      <span class="output-rule">margin: 0</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-1px</dt>
    <dd class="output-css">
      <span class="output-rule">margin: 1px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-2px</dt>
    <dd class="output-css">
      <span class="output-rule">margin: 2px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-05</dt>
    <dd class="output-css">
      <span class="output-rule">margin: <span class="output-token">spacing(.5)</span></span>
    </dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.margin-1</dt>
    <dd class="output-css">
      <span class="output-rule">margin: <span class="output-token">spacing(1)</span></span>
    </dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.margin-105</dt>
    <dd class="output-css">
      <span class="output-rule">margin: <span class="output-token">spacing(1.5)</span></span>
    </dd>
    <dd class="output-variable">12px</dd>

    <dt class="output-utility">.margin-2</dt>
    <dd class="output-css">
      <span class="output-rule">margin: <span class="output-token">spacing(2)</span></span>
    </dd>
    <dd class="output-variable">16px</dd>

    <dt class="output-utility">.margin-205</dt>
    <dd class="output-css">
      <span class="output-rule">margin: <span class="output-token">spacing(2.5)</span></span>
    </dd>
    <dd class="output-variable">20px</dd>

    <dt class="output-utility">.margin-3</dt>
    <dd class="output-css">
      <span class="output-rule">margin: <span class="output-token">spacing(3)</span></span>
    </dd>
    <dd class="output-variable">24px</dd>

    <dt class="output-utility">.margin-4</dt>
    <dd class="output-css">
      <span class="output-rule">margin: <span class="output-token">spacing(4)</span></span>
    </dd>
    <dd class="output-variable">32px</dd>

    <dt class="output-utility">.margin-5</dt>
    <dd class="output-css">
      <span class="output-rule">margin: <span class="output-token">spacing(5)</span></span>
    </dd>
    <dd class="output-variable">40px</dd>

    <dt class="output-utility">.margin-6</dt>
    <dd class="output-css">
      <span class="output-rule">margin: <span class="output-token">spacing(6)</span></span>
    </dd>
    <dd class="output-variable">48px</dd>

    <dt class="output-utility">.margin-7</dt>
    <dd class="output-css">
      <span class="output-rule">margin: <span class="output-token">spacing(7)</span></span>
    </dd>
    <dd class="output-variable">56px</dd>

    <dt class="output-utility">.margin-8</dt>
    <dd class="output-css">
      <span class="output-rule">margin: <span class="output-token">spacing(8)</span></span>
    </dd>
    <dd class="output-variable">64px</dd>

    <dt class="output-utility">.margin-9</dt>
    <dd class="output-css">
      <span class="output-rule">margin: <span class="output-token">spacing(9)</span></span>
    </dd>
    <dd class="output-variable">72px</dd>

    <dt class="output-utility">.margin-bottom-neg-3</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(-3)</span></span>
    </dd>
    <dd class="output-variable">-24px</dd>

    <dt class="output-utility">.margin-bottom-neg-205</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(-2)</span></span>
    </dd>
    <dd class="output-variable">-20px</dd>

    <dt class="output-utility">.margin-bottom-neg-2</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(-2)</span></span>
    </dd>
    <dd class="output-variable">-16px</dd>

    <dt class="output-utility">.margin-bottom-neg-105</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(-1.5)</span></span>
    </dd>
    <dd class="output-variable">-12px</dd>

    <dt class="output-utility">.margin-bottom-neg-1</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(-1)</span></span>
    </dd>
    <dd class="output-variable">-8px</dd>

    <dt class="output-utility">.margin-bottom-neg-05</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(-.5)</span></span>
    </dd>
    <dd class="output-variable">-4px</dd>

    <dt class="output-utility">.margin-bottom-neg-2px</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: -2px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-bottom-neg-1px</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: -1px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-bottom-0</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: 0</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-bottom-1px</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: 1px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-bottom-2px</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: 2px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-bottom-05</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(.5)</span></span>
    </dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.margin-bottom-1</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(1)</span></span>
    </dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.margin-bottom-105</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(1.5)</span></span>
    </dd>
    <dd class="output-variable">12px</dd>

    <dt class="output-utility">.margin-bottom-2</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(2)</span></span>
    </dd>
    <dd class="output-variable">16px</dd>

    <dt class="output-utility">.margin-bottom-205</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(2.5)</span></span>
    </dd>
    <dd class="output-variable">20px</dd>

    <dt class="output-utility">.margin-bottom-3</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(3)</span></span>
    </dd>
    <dd class="output-variable">24px</dd>

    <dt class="output-utility">.margin-bottom-4</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(4)</span></span>
    </dd>
    <dd class="output-variable">32px</dd>

    <dt class="output-utility">.margin-bottom-5</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(5)</span></span>
    </dd>
    <dd class="output-variable">40px</dd>

    <dt class="output-utility">.margin-bottom-6</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(6)</span></span>
    </dd>
    <dd class="output-variable">48px</dd>

    <dt class="output-utility">.margin-bottom-7</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(7)</span></span>
    </dd>
    <dd class="output-variable">56px</dd>

    <dt class="output-utility">.margin-bottom-8</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(8)</span></span>
    </dd>
    <dd class="output-variable">64px</dd>

    <dt class="output-utility">.margin-bottom-9</dt>
    <dd class="output-css">
      <span class="output-rule">margin-bottom: <span class="output-token">spacing(9)</span></span>
    </dd>
    <dd class="output-variable">72px</dd>

    <dt class="output-utility">.margin-top-neg-3</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(-3)</span></span>
    </dd>
    <dd class="output-variable">-24px</dd>

    <dt class="output-utility">.margin-top-neg-205</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(-2)</span></span>
    </dd>
    <dd class="output-variable">-20px</dd>

    <dt class="output-utility">.margin-top-neg-2</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(-2)</span></span>
    </dd>
    <dd class="output-variable">-16px</dd>

    <dt class="output-utility">.margin-top-neg-105</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(-1.5)</span></span>
    </dd>
    <dd class="output-variable">-12px</dd>

    <dt class="output-utility">.margin-top-neg-1</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(-1)</span></span>
    </dd>
    <dd class="output-variable">-8px</dd>

    <dt class="output-utility">.margin-top-neg-05</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(-.5)</span></span>
    </dd>
    <dd class="output-variable">-4px</dd>

    <dt class="output-utility">.margin-top-neg-2px</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: -2px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-top-neg-1px</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: -1px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-top-0</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: 0</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-top-1px</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: 1px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-top-2px</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: 2px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-top-05</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(.5)</span></span>
    </dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.margin-top-1</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(1)</span></span>
    </dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.margin-top-105</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(1.5)</span></span>
    </dd>
    <dd class="output-variable">12px</dd>

    <dt class="output-utility">.margin-top-2</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(2)</span></span>
    </dd>
    <dd class="output-variable">16px</dd>

    <dt class="output-utility">.margin-top-205</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(2.5)</span></span>
    </dd>
    <dd class="output-variable">20px</dd>

    <dt class="output-utility">.margin-top-3</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(3)</span></span>
    </dd>
    <dd class="output-variable">24px</dd>

    <dt class="output-utility">.margin-top-4</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(4)</span></span>
    </dd>
    <dd class="output-variable">32px</dd>

    <dt class="output-utility">.margin-top-5</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(5)</span></span>
    </dd>
    <dd class="output-variable">40px</dd>

    <dt class="output-utility">.margin-top-6</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(6)</span></span>
    </dd>
    <dd class="output-variable">48px</dd>

    <dt class="output-utility">.margin-top-7</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(7)</span></span>
    </dd>
    <dd class="output-variable">56px</dd>

    <dt class="output-utility">.margin-top-8</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(8)</span></span>
    </dd>
    <dd class="output-variable">64px</dd>

    <dt class="output-utility">.margin-top-9</dt>
    <dd class="output-css">
      <span class="output-rule">margin-top: <span class="output-token">spacing(9)</span></span>
    </dd>
    <dd class="output-variable">72px</dd>

    <dt class="output-utility">.margin-left-neg-3</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(-3)</span></span>
    </dd>
    <dd class="output-variable">-24px</dd>

    <dt class="output-utility">.margin-left-neg-205</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(-2)</span></span>
    </dd>
    <dd class="output-variable">-20px</dd>

    <dt class="output-utility">.margin-left-neg-2</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(-2)</span></span>
    </dd>
    <dd class="output-variable">-16px</dd>

    <dt class="output-utility">.margin-left-neg-105</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(-1.5)</span></span>
    </dd>
    <dd class="output-variable">-12px</dd>

    <dt class="output-utility">.margin-left-neg-1</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(-1)</span></span>
    </dd>
    <dd class="output-variable">-8px</dd>

    <dt class="output-utility">.margin-left-neg-05</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(-.5)</span></span>
    </dd>
    <dd class="output-variable">-4px</dd>

    <dt class="output-utility">.margin-left-neg-2px</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: -2px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-left-neg-1px</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: -1px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-left-0</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: 0</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-left-1px</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: 1px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-left-2px</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: 2px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-left-05</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(.5)</span></span>
    </dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.margin-left-1</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(1)</span></span>
    </dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.margin-left-105</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(1.5)</span></span>
    </dd>
    <dd class="output-variable">12px</dd>

    <dt class="output-utility">.margin-left-2</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(2)</span></span>
    </dd>
    <dd class="output-variable">16px</dd>

    <dt class="output-utility">.margin-left-205</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(2.5)</span></span>
    </dd>
    <dd class="output-variable">20px</dd>

    <dt class="output-utility">.margin-left-3</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(3)</span></span>
    </dd>
    <dd class="output-variable">24px</dd>

    <dt class="output-utility">.margin-left-4</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(4)</span></span>
    </dd>
    <dd class="output-variable">32px</dd>

    <dt class="output-utility">.margin-left-5</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(5)</span></span>
    </dd>
    <dd class="output-variable">40px</dd>

    <dt class="output-utility">.margin-left-6</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(6)</span></span>
    </dd>
    <dd class="output-variable">48px</dd>

    <dt class="output-utility">.margin-left-7</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(7)</span></span>
    </dd>
    <dd class="output-variable">56px</dd>

    <dt class="output-utility">.margin-left-8</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(8)</span></span>
    </dd>
    <dd class="output-variable">64px</dd>

    <dt class="output-utility">.margin-left-9</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: <span class="output-token">spacing(9)</span></span>
    </dd>
    <dd class="output-variable">72px</dd>

    <dt class="output-utility">.margin-left-auto</dt>
    <dd class="output-css">
      <span class="output-rule">margin-left: auto</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-right-neg-3</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(-3)</span></span>
    </dd>
    <dd class="output-variable">-24px</dd>

    <dt class="output-utility">.margin-right-neg-205</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(-2)</span></span>
    </dd>
    <dd class="output-variable">-20px</dd>

    <dt class="output-utility">.margin-right-neg-2</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(-2)</span></span>
    </dd>
    <dd class="output-variable">-16px</dd>

    <dt class="output-utility">.margin-right-neg-105</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(-1.5)</span></span>
    </dd>
    <dd class="output-variable">-12px</dd>

    <dt class="output-utility">.margin-right-neg-1</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(-1)</span></span>
    </dd>
    <dd class="output-variable">-8px</dd>

    <dt class="output-utility">.margin-right-neg-05</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(-.5)</span></span>
    </dd>
    <dd class="output-variable">-4px</dd>

    <dt class="output-utility">.margin-right-neg-2px</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: -2px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-right-neg-1px</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: -1px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-right-0</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: 0</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-right-1px</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: 1px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-right-2px</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: 2px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-right-05</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(.5)</span></span>
    </dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.margin-right-1</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(1)</span></span>
    </dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.margin-right-105</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(1.5)</span></span>
    </dd>
    <dd class="output-variable">12px</dd>

    <dt class="output-utility">.margin-right-2</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(2)</span></span>
    </dd>
    <dd class="output-variable">16px</dd>

    <dt class="output-utility">.margin-right-205</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(2.5)</span></span>
    </dd>
    <dd class="output-variable">20px</dd>

    <dt class="output-utility">.margin-right-3</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(3)</span></span>
    </dd>
    <dd class="output-variable">24px</dd>

    <dt class="output-utility">.margin-right-4</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(4)</span></span>
    </dd>
    <dd class="output-variable">32px</dd>

    <dt class="output-utility">.margin-right-5</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(5)</span></span>
    </dd>
    <dd class="output-variable">40px</dd>

    <dt class="output-utility">.margin-right-6</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(6)</span></span>
    </dd>
    <dd class="output-variable">48px</dd>

    <dt class="output-utility">.margin-right-7</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(7)</span></span>
    </dd>
    <dd class="output-variable">56px</dd>

    <dt class="output-utility">.margin-right-8</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(8)</span></span>
    </dd>
    <dd class="output-variable">64px</dd>

    <dt class="output-utility">.margin-right-9</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: <span class="output-token">spacing(9)</span></span>
    </dd>
    <dd class="output-variable">72px</dd>

    <dt class="output-utility">.margin-right-auto</dt>
    <dd class="output-css">
      <span class="output-rule">margin-right: auto</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-x-neg-3</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(-3)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(-3)</span></span>
      </span>
    </dd>
    <dd class="output-variable">-24px</dd>

    <dt class="output-utility">.margin-x-neg-205</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(-2)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(-2)</span></span>
      </span>
    </dd>
    <dd class="output-variable">-20px</dd>

    <dt class="output-utility">.margin-x-neg-2</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(-2)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(-2)</span></span>
      </span>
    </dd>
    <dd class="output-variable">-16px</dd>

    <dt class="output-utility">.margin-x-neg-105</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(-1.5)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(-1.5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">-12px</dd>

    <dt class="output-utility">.margin-x-neg-1</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(-1)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(-1)</span></span>
      </span>
    </dd>
    <dd class="output-variable">-8px</dd>

    <dt class="output-utility">.margin-x-neg-05</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(-.5)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(-.5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">-4px</dd>

    <dt class="output-utility">.margin-x-neg-2px</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: -2px</span>
        <span class="output-rule">margin-right: -2px</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-x-neg-1px</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: -1px</span>
        <span class="output-rule">margin-right: -1px</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-x-0</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: 0</span>
        <span class="output-rule">margin-right: 0</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-x-1px</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: 1px</span>
        <span class="output-rule">margin-right: 1px</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-x-2px</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: 2px</span>
        <span class="output-rule">margin-right: 2px</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-x-05</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(.5)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(.5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.margin-x-1</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(1)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(1)</span></span>
      </span>
    </dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.margin-x-105</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(1.5)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(1.5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">12px</dd>

    <dt class="output-utility">.margin-x-2</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(2)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(2)</span></span>
      </span>
    </dd>
    <dd class="output-variable">16px</dd>

    <dt class="output-utility">.margin-x-205</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(2.5)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(2.5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">20px</dd>

    <dt class="output-utility">.margin-x-3</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(3)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(3)</span></span>
      </span>
    </dd>
    <dd class="output-variable">24px</dd>

    <dt class="output-utility">.margin-x-4</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(4)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(4)</span></span>
      </span>
    </dd>
    <dd class="output-variable">32px</dd>

    <dt class="output-utility">.margin-x-5</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(5)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">40px</dd>

    <dt class="output-utility">.margin-x-6</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(6)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(6)</span></span>
      </span>
    </dd>
    <dd class="output-variable">48px</dd>

    <dt class="output-utility">.margin-x-7</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(7)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(7)</span></span>
      </span>
    </dd>
    <dd class="output-variable">56px</dd>

    <dt class="output-utility">.margin-x-8</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(8)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(8)</span></span>
      </span>
    </dd>
    <dd class="output-variable">64px</dd>

    <dt class="output-utility">.margin-x-9</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: <span class="output-token">spacing(9)</span></span>
        <span class="output-rule">margin-right: <span class="output-token">spacing(9)</span></span>
      </span>
    </dd>
    <dd class="output-variable">72px</dd>

    <dt class="output-utility">.margin-x-auto</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-left: auto</span>
        <span class="output-rule">margin-right: auto</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-y-neg-3</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(-3)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(-3)</span></span>
      </span>
    </dd>
    <dd class="output-variable">-24px</dd>

    <dt class="output-utility">.margin-y-neg-205</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(-2)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(-2)</span></span>
      </span>
    </dd>
    <dd class="output-variable">-20px</dd>

    <dt class="output-utility">.margin-y-neg-2</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(-2)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(-2)</span></span>
      </span>
    </dd>
    <dd class="output-variable">-16px</dd>

    <dt class="output-utility">.margin-y-neg-105</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(-1.5)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(-1.5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">-12px</dd>

    <dt class="output-utility">.margin-y-neg-1</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(-1)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(-1)</span></span>
      </span>
    </dd>
    <dd class="output-variable">-8px</dd>

    <dt class="output-utility">.margin-y-neg-05</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(-.5)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(-.5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">-4px</dd>

    <dt class="output-utility">.margin-y-neg-2px</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: -2px</span>
        <span class="output-rule">margin-top: -2px</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-y-neg-1px</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: -1px</span>
        <span class="output-rule">margin-top: -1px</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-y-0</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: 0</span>
        <span class="output-rule">margin-top: 0</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-y-1px</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: 1px</span>
        <span class="output-rule">margin-top: 1px</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-y-2px</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: 2px</span>
        <span class="output-rule">margin-top: 2px</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.margin-y-05</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(.5)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(.5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.margin-y-1</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(1)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(1)</span></span>
      </span>
    </dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.margin-y-105</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(1.5)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(1.5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">12px</dd>

    <dt class="output-utility">.margin-y-2</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(2)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(2)</span></span>
      </span>
    </dd>
    <dd class="output-variable">16px</dd>

    <dt class="output-utility">.margin-y-205</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(2.5)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(2.5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">20px</dd>

    <dt class="output-utility">.margin-y-3</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(3)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(3)</span></span>
      </span>
    </dd>
    <dd class="output-variable">24px</dd>

    <dt class="output-utility">.margin-y-4</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(4)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(4)</span></span>
      </span>
    </dd>
    <dd class="output-variable">32px</dd>

    <dt class="output-utility">.margin-y-5</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(5)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">40px</dd>

    <dt class="output-utility">.margin-y-6</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(6)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(6)</span></span>
      </span>
    </dd>
    <dd class="output-variable">48px</dd>

    <dt class="output-utility">.margin-y-7</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(7)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(7)</span></span>
      </span>
    </dd>
    <dd class="output-variable">56px</dd>

    <dt class="output-utility">.margin-y-8</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(8)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(8)</span></span>
      </span>
    </dd>
    <dd class="output-variable">64px</dd>

    <dt class="output-utility">.margin-y-9</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">margin-bottom: <span class="output-token">spacing(9)</span></span>
        <span class="output-rule">margin-top: <span class="output-token">spacing(9)</span></span>
      </span>
    </dd>
    <dd class="output-variable">72px</dd>

    <dt class="output-utility">.padding-0</dt>
    <dd class="output-css">
      <span class="output-rule">padding: 0</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-1px</dt>
    <dd class="output-css">
      <span class="output-rule">padding: 1px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-2px</dt>
    <dd class="output-css">
      <span class="output-rule">padding: 2px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-05</dt>
    <dd class="output-css">
      <span class="output-rule">padding: <span class="output-token">spacing(.5)</span></span>
    </dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.padding-1</dt>
    <dd class="output-css">
      <span class="output-rule">padding: <span class="output-token">spacing(1)</span></span>
    </dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.padding-105</dt>
    <dd class="output-css">
      <span class="output-rule">padding: <span class="output-token">spacing(1.5)</span></span>
    </dd>
    <dd class="output-variable">12px</dd>

    <dt class="output-utility">.padding-2</dt>
    <dd class="output-css">
      <span class="output-rule">padding: <span class="output-token">spacing(2)</span></span>
    </dd>
    <dd class="output-variable">16px</dd>

    <dt class="output-utility">.padding-205</dt>
    <dd class="output-css">
      <span class="output-rule">padding: <span class="output-token">spacing(2.5)</span></span>
    </dd>
    <dd class="output-variable">20px</dd>

    <dt class="output-utility">.padding-3</dt>
    <dd class="output-css">
      <span class="output-rule">padding: <span class="output-token">spacing(3)</span></span>
    </dd>
    <dd class="output-variable">24px</dd>

    <dt class="output-utility">.padding-4</dt>
    <dd class="output-css">
      <span class="output-rule">padding: <span class="output-token">spacing(4)</span></span>
    </dd>
    <dd class="output-variable">32px</dd>

    <dt class="output-utility">.padding-5</dt>
    <dd class="output-css">
      <span class="output-rule">padding: <span class="output-token">spacing(5)</span></span>
    </dd>
    <dd class="output-variable">40px</dd>

    <dt class="output-utility">.padding-6</dt>
    <dd class="output-css">
      <span class="output-rule">padding: <span class="output-token">spacing(6)</span></span>
    </dd>
    <dd class="output-variable">48px</dd>

    <dt class="output-utility">.padding-7</dt>
    <dd class="output-css">
      <span class="output-rule">padding: <span class="output-token">spacing(7)</span></span>
    </dd>
    <dd class="output-variable">56px</dd>

    <dt class="output-utility">.padding-8</dt>
    <dd class="output-css">
      <span class="output-rule">padding: <span class="output-token">spacing(8)</span></span>
    </dd>
    <dd class="output-variable">64px</dd>

    <dt class="output-utility">.padding-9</dt>
    <dd class="output-css">
      <span class="output-rule">padding: <span class="output-token">spacing(9)</span></span>
    </dd>
    <dd class="output-variable">72px</dd>

    <dt class="output-utility">.padding-bottom-0</dt>
    <dd class="output-css">
      <span class="output-rule">padding-bottom: 0</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-bottom-1px</dt>
    <dd class="output-css">
      <span class="output-rule">padding-bottom: 1px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-bottom-2px</dt>
    <dd class="output-css">
      <span class="output-rule">padding-bottom: 2px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-bottom-05</dt>
    <dd class="output-css">
      <span class="output-rule">padding-bottom: <span class="output-token">spacing(.5)</span></span>
    </dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.padding-bottom-1</dt>
    <dd class="output-css">
      <span class="output-rule">padding-bottom: <span class="output-token">spacing(1)</span></span>
    </dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.padding-bottom-105</dt>
    <dd class="output-css">
      <span class="output-rule">padding-bottom: <span class="output-token">spacing(1.5)</span></span>
    </dd>
    <dd class="output-variable">12px</dd>

    <dt class="output-utility">.padding-bottom-2</dt>
    <dd class="output-css">
      <span class="output-rule">padding-bottom: <span class="output-token">spacing(2)</span></span>
    </dd>
    <dd class="output-variable">16px</dd>

    <dt class="output-utility">.padding-bottom-205</dt>
    <dd class="output-css">
      <span class="output-rule">padding-bottom: <span class="output-token">spacing(2.5)</span></span>
    </dd>
    <dd class="output-variable">20px</dd>

    <dt class="output-utility">.padding-bottom-3</dt>
    <dd class="output-css">
      <span class="output-rule">padding-bottom: <span class="output-token">spacing(3)</span></span>
    </dd>
    <dd class="output-variable">24px</dd>

    <dt class="output-utility">.padding-bottom-4</dt>
    <dd class="output-css">
      <span class="output-rule">padding-bottom: <span class="output-token">spacing(4)</span></span>
    </dd>
    <dd class="output-variable">32px</dd>

    <dt class="output-utility">.padding-bottom-5</dt>
    <dd class="output-css">
      <span class="output-rule">padding-bottom: <span class="output-token">spacing(5)</span></span>
    </dd>
    <dd class="output-variable">40px</dd>

    <dt class="output-utility">.padding-bottom-6</dt>
    <dd class="output-css">
      <span class="output-rule">padding-bottom: <span class="output-token">spacing(6)</span></span>
    </dd>
    <dd class="output-variable">48px</dd>

    <dt class="output-utility">.padding-bottom-7</dt>
    <dd class="output-css">
      <span class="output-rule">padding-bottom: <span class="output-token">spacing(7)</span></span>
    </dd>
    <dd class="output-variable">56px</dd>

    <dt class="output-utility">.padding-bottom-8</dt>
    <dd class="output-css">
      <span class="output-rule">padding-bottom: <span class="output-token">spacing(8)</span></span>
    </dd>
    <dd class="output-variable">64px</dd>

    <dt class="output-utility">.padding-bottom-9</dt>
    <dd class="output-css">
      <span class="output-rule">padding-bottom: <span class="output-token">spacing(9)</span></span>
    </dd>
    <dd class="output-variable">72px</dd>

    <dt class="output-utility">.padding-top-0</dt>
    <dd class="output-css">
      <span class="output-rule">padding-top: 0</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-top-1px</dt>
    <dd class="output-css">
      <span class="output-rule">padding-top: 1px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-top-2px</dt>
    <dd class="output-css">
      <span class="output-rule">padding-top: 2px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-top-05</dt>
    <dd class="output-css">
      <span class="output-rule">padding-top: <span class="output-token">spacing(.5)</span></span>
    </dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.padding-top-1</dt>
    <dd class="output-css">
      <span class="output-rule">padding-top: <span class="output-token">spacing(1)</span></span>
    </dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.padding-top-105</dt>
    <dd class="output-css">
      <span class="output-rule">padding-top: <span class="output-token">spacing(1.5)</span></span>
    </dd>
    <dd class="output-variable">12px</dd>

    <dt class="output-utility">.padding-top-2</dt>
    <dd class="output-css">
      <span class="output-rule">padding-top: <span class="output-token">spacing(2)</span></span>
    </dd>
    <dd class="output-variable">16px</dd>

    <dt class="output-utility">.padding-top-205</dt>
    <dd class="output-css">
      <span class="output-rule">padding-top: <span class="output-token">spacing(2.5)</span></span>
    </dd>
    <dd class="output-variable">20px</dd>

    <dt class="output-utility">.padding-top-3</dt>
    <dd class="output-css">
      <span class="output-rule">padding-top: <span class="output-token">spacing(3)</span></span>
    </dd>
    <dd class="output-variable">24px</dd>

    <dt class="output-utility">.padding-top-4</dt>
    <dd class="output-css">
      <span class="output-rule">padding-top: <span class="output-token">spacing(4)</span></span>
    </dd>
    <dd class="output-variable">32px</dd>

    <dt class="output-utility">.padding-top-5</dt>
    <dd class="output-css">
      <span class="output-rule">padding-top: <span class="output-token">spacing(5)</span></span>
    </dd>
    <dd class="output-variable">40px</dd>

    <dt class="output-utility">.padding-top-6</dt>
    <dd class="output-css">
      <span class="output-rule">padding-top: <span class="output-token">spacing(6)</span></span>
    </dd>
    <dd class="output-variable">48px</dd>

    <dt class="output-utility">.padding-top-7</dt>
    <dd class="output-css">
      <span class="output-rule">padding-top: <span class="output-token">spacing(7)</span></span>
    </dd>
    <dd class="output-variable">56px</dd>

    <dt class="output-utility">.padding-top-8</dt>
    <dd class="output-css">
      <span class="output-rule">padding-top: <span class="output-token">spacing(8)</span></span>
    </dd>
    <dd class="output-variable">64px</dd>

    <dt class="output-utility">.padding-top-9</dt>
    <dd class="output-css">
      <span class="output-rule">padding-top: <span class="output-token">spacing(9)</span></span>
    </dd>
    <dd class="output-variable">72px</dd>

    <dt class="output-utility">.padding-left-0</dt>
    <dd class="output-css">
      <span class="output-rule">padding-left: 0</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-left-1px</dt>
    <dd class="output-css">
      <span class="output-rule">padding-left: 1px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-left-2px</dt>
    <dd class="output-css">
      <span class="output-rule">padding-left: 2px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-left-05</dt>
    <dd class="output-css">
      <span class="output-rule">padding-left: <span class="output-token">spacing(.5)</span></span>
    </dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.padding-left-1</dt>
    <dd class="output-css">
      <span class="output-rule">padding-left: <span class="output-token">spacing(1)</span></span>
    </dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.padding-left-105</dt>
    <dd class="output-css">
      <span class="output-rule">padding-left: <span class="output-token">spacing(1.5)</span></span>
    </dd>
    <dd class="output-variable">12px</dd>

    <dt class="output-utility">.padding-left-2</dt>
    <dd class="output-css">
      <span class="output-rule">padding-left: <span class="output-token">spacing(2)</span></span>
    </dd>
    <dd class="output-variable">16px</dd>

    <dt class="output-utility">.padding-left-205</dt>
    <dd class="output-css">
      <span class="output-rule">padding-left: <span class="output-token">spacing(2.5)</span></span>
    </dd>
    <dd class="output-variable">20px</dd>

    <dt class="output-utility">.padding-left-3</dt>
    <dd class="output-css">
      <span class="output-rule">padding-left: <span class="output-token">spacing(3)</span></span>
    </dd>
    <dd class="output-variable">24px</dd>

    <dt class="output-utility">.padding-left-4</dt>
    <dd class="output-css">
      <span class="output-rule">padding-left: <span class="output-token">spacing(4)</span></span>
    </dd>
    <dd class="output-variable">32px</dd>

    <dt class="output-utility">.padding-left-5</dt>
    <dd class="output-css">
      <span class="output-rule">padding-left: <span class="output-token">spacing(5)</span></span>
    </dd>
    <dd class="output-variable">40px</dd>

    <dt class="output-utility">.padding-left-6</dt>
    <dd class="output-css">
      <span class="output-rule">padding-left: <span class="output-token">spacing(6)</span></span>
    </dd>
    <dd class="output-variable">48px</dd>

    <dt class="output-utility">.padding-left-7</dt>
    <dd class="output-css">
      <span class="output-rule">padding-left: <span class="output-token">spacing(7)</span></span>
    </dd>
    <dd class="output-variable">56px</dd>

    <dt class="output-utility">.padding-left-8</dt>
    <dd class="output-css">
      <span class="output-rule">padding-left: <span class="output-token">spacing(8)</span></span>
    </dd>
    <dd class="output-variable">64px</dd>

    <dt class="output-utility">.padding-left-9</dt>
    <dd class="output-css">
      <span class="output-rule">padding-left: <span class="output-token">spacing(9)</span></span>
    </dd>
    <dd class="output-variable">72px</dd>

    <dt class="output-utility">.padding-left-auto</dt>
    <dd class="output-css">
      <span class="output-rule">padding-left: auto</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-right-0</dt>
    <dd class="output-css">
      <span class="output-rule">padding-right: 0</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-right-1px</dt>
    <dd class="output-css">
      <span class="output-rule">padding-right: 1px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-right-2px</dt>
    <dd class="output-css">
      <span class="output-rule">padding-right: 2px</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-right-05</dt>
    <dd class="output-css">
      <span class="output-rule">padding-right: <span class="output-token">spacing(.5)</span></span>
    </dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.padding-right-1</dt>
    <dd class="output-css">
      <span class="output-rule">padding-right: <span class="output-token">spacing(1)</span></span>
    </dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.padding-right-105</dt>
    <dd class="output-css">
      <span class="output-rule">padding-right: <span class="output-token">spacing(1.5)</span></span>
    </dd>
    <dd class="output-variable">12px</dd>

    <dt class="output-utility">.padding-right-2</dt>
    <dd class="output-css">
      <span class="output-rule">padding-right: <span class="output-token">spacing(2)</span></span>
    </dd>
    <dd class="output-variable">16px</dd>

    <dt class="output-utility">.padding-right-205</dt>
    <dd class="output-css">
      <span class="output-rule">padding-right: <span class="output-token">spacing(2.5)</span></span>
    </dd>
    <dd class="output-variable">20px</dd>

    <dt class="output-utility">.padding-right-3</dt>
    <dd class="output-css">
      <span class="output-rule">padding-right: <span class="output-token">spacing(3)</span></span>
    </dd>
    <dd class="output-variable">24px</dd>

    <dt class="output-utility">.padding-right-4</dt>
    <dd class="output-css">
      <span class="output-rule">padding-right: <span class="output-token">spacing(4)</span></span>
    </dd>
    <dd class="output-variable">32px</dd>

    <dt class="output-utility">.padding-right-5</dt>
    <dd class="output-css">
      <span class="output-rule">padding-right: <span class="output-token">spacing(5)</span></span>
    </dd>
    <dd class="output-variable">40px</dd>

    <dt class="output-utility">.padding-right-6</dt>
    <dd class="output-css">
      <span class="output-rule">padding-right: <span class="output-token">spacing(6)</span></span>
    </dd>
    <dd class="output-variable">48px</dd>

    <dt class="output-utility">.padding-right-7</dt>
    <dd class="output-css">
      <span class="output-rule">padding-right: <span class="output-token">spacing(7)</span></span>
    </dd>
    <dd class="output-variable">56px</dd>

    <dt class="output-utility">.padding-right-8</dt>
    <dd class="output-css">
      <span class="output-rule">padding-right: <span class="output-token">spacing(8)</span></span>
    </dd>
    <dd class="output-variable">64px</dd>

    <dt class="output-utility">.padding-right-9</dt>
    <dd class="output-css">
      <span class="output-rule">padding-right: <span class="output-token">spacing(9)</span></span>
    </dd>
    <dd class="output-variable">72px</dd>

    <dt class="output-utility">.padding-right-auto</dt>
    <dd class="output-css">
      <span class="output-rule">padding-right: auto</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-x-0</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-left: 0</span>
        <span class="output-rule">padding-right: 0</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-x-1px</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-left: 1px</span>
        <span class="output-rule">padding-right: 1px</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-x-2px</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-left: 2px</span>
        <span class="output-rule">padding-right: 2px</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-x-05</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-left: <span class="output-token">spacing(.5)</span></span>
        <span class="output-rule">padding-right: <span class="output-token">spacing(.5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.padding-x-1</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-left: <span class="output-token">spacing(1)</span></span>
        <span class="output-rule">padding-right: <span class="output-token">spacing(1)</span></span>
      </span>
    </dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.padding-x-105</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-left: <span class="output-token">spacing(1.5)</span></span>
        <span class="output-rule">padding-right: <span class="output-token">spacing(1.5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">12px</dd>

    <dt class="output-utility">.padding-x-2</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-left: <span class="output-token">spacing(2)</span></span>
        <span class="output-rule">padding-right: <span class="output-token">spacing(2)</span></span>
      </span>
    </dd>
    <dd class="output-variable">16px</dd>

    <dt class="output-utility">.padding-x-205</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-left: <span class="output-token">spacing(2.5)</span></span>
        <span class="output-rule">padding-right: <span class="output-token">spacing(2.5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">20px</dd>

    <dt class="output-utility">.padding-x-3</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-left: <span class="output-token">spacing(3)</span></span>
        <span class="output-rule">padding-right: <span class="output-token">spacing(3)</span></span>
      </span>
    </dd>
    <dd class="output-variable">24px</dd>

    <dt class="output-utility">.padding-x-4</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-left: <span class="output-token">spacing(4)</span></span>
        <span class="output-rule">padding-right: <span class="output-token">spacing(4)</span></span>
      </span>
    </dd>
    <dd class="output-variable">32px</dd>

    <dt class="output-utility">.padding-x-5</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-left: <span class="output-token">spacing(5)</span></span>
        <span class="output-rule">padding-right: <span class="output-token">spacing(5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">40px</dd>

    <dt class="output-utility">.padding-x-6</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-left: <span class="output-token">spacing(6)</span></span>
        <span class="output-rule">padding-right: <span class="output-token">spacing(6)</span></span>
      </span>
    </dd>
    <dd class="output-variable">48px</dd>

    <dt class="output-utility">.padding-x-7</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-left: <span class="output-token">spacing(7)</span></span>
        <span class="output-rule">padding-right: <span class="output-token">spacing(7)</span></span>
      </span>
    </dd>
    <dd class="output-variable">56px</dd>

    <dt class="output-utility">.padding-x-8</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-left: <span class="output-token">spacing(8)</span></span>
        <span class="output-rule">padding-right: <span class="output-token">spacing(8)</span></span>
      </span>
    </dd>
    <dd class="output-variable">64px</dd>

    <dt class="output-utility">.padding-x-9</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-left: <span class="output-token">spacing(9)</span></span>
        <span class="output-rule">padding-right: <span class="output-token">spacing(9)</span></span>
      </span>
    </dd>
    <dd class="output-variable">72px</dd>

    <dt class="output-utility">.padding-y-0</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-bottom: 0</span>
        <span class="output-rule">padding-top: 0</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-y-1px</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-bottom: 1px</span>
        <span class="output-rule">padding-top: 1px</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-y-2px</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-bottom: 2px</span>
        <span class="output-rule">padding-top: 2px</span>
      </span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.padding-y-05</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-bottom: <span class="output-token">spacing(.5)</span></span>
        <span class="output-rule">padding-top: <span class="output-token">spacing(.5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.padding-y-1</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-bottom: <span class="output-token">spacing(1)</span></span>
        <span class="output-rule">padding-top: <span class="output-token">spacing(1)</span></span>
      </span>
    </dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.padding-y-105</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-bottom: <span class="output-token">spacing(1.5)</span></span>
        <span class="output-rule">padding-top: <span class="output-token">spacing(1.5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">12px</dd>

    <dt class="output-utility">.padding-y-2</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-bottom: <span class="output-token">spacing(2)</span></span>
        <span class="output-rule">padding-top: <span class="output-token">spacing(2)</span></span>
      </span>
    </dd>
    <dd class="output-variable">16px</dd>

    <dt class="output-utility">.padding-y-205</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-bottom: <span class="output-token">spacing(2.5)</span></span>
        <span class="output-rule">padding-top: <span class="output-token">spacing(2.5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">20px</dd>

    <dt class="output-utility">.padding-y-3</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-bottom: <span class="output-token">spacing(3)</span></span>
        <span class="output-rule">padding-top: <span class="output-token">spacing(3)</span></span>
      </span>
    </dd>
    <dd class="output-variable">24px</dd>

    <dt class="output-utility">.padding-y-4</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-bottom: <span class="output-token">spacing(4)</span></span>
        <span class="output-rule">padding-top: <span class="output-token">spacing(4)</span></span>
      </span>
    </dd>
    <dd class="output-variable">32px</dd>

    <dt class="output-utility">.padding-y-5</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-bottom: <span class="output-token">spacing(5)</span></span>
        <span class="output-rule">padding-top: <span class="output-token">spacing(5)</span></span>
      </span>
    </dd>
    <dd class="output-variable">40px</dd>

    <dt class="output-utility">.padding-y-6</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-bottom: <span class="output-token">spacing(6)</span></span>
        <span class="output-rule">padding-top: <span class="output-token">spacing(6)</span></span>
      </span>
    </dd>
    <dd class="output-variable">48px</dd>

    <dt class="output-utility">.padding-y-7</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-bottom: <span class="output-token">spacing(7)</span></span>
        <span class="output-rule">padding-top: <span class="output-token">spacing(7)</span></span>
      </span>
    </dd>
    <dd class="output-variable">56px</dd>

    <dt class="output-utility">.padding-y-8</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-bottom: <span class="output-token">spacing(8)</span></span>
        <span class="output-rule">padding-top: <span class="output-token">spacing(8)</span></span>
      </span>
    </dd>
    <dd class="output-variable">64px</dd>

    <dt class="output-utility">.padding-y-9</dt>
    <dd class="output-css">
      <span>
        <span class="output-rule">padding-bottom: <span class="output-token">spacing(9)</span></span>
        <span class="output-rule">padding-top: <span class="output-token">spacing(9)</span></span>
      </span>
    </dd>
    <dd class="output-variable">72px</dd>

  </dl>
</section>

{% include utilities/output-control.html %}

<section class="utilities-section margin-top-6">
  {% include utilities/values-intro.html %}
</section>
