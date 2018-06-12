---
permalink: /utilities/display/
layout: styleguide
type: utility
title: Display
category: Utilities
lead: Control the position and display characteristics of an item
subnav:
- text: Display
  href: '#utility-display'
- text: Opacity
  href: '#opacity'
- text: Overflow
  href: '#overflow'
- text: Position
  href: '#position'
- text: Z-index
  href: '#z-index'

---

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="token utilities-property">bottom</span>
    <span class="token utilities-property">display</span>
    <span class="token utilities-property">left</span>
    <span class="token utilities-property">opacity</span>
    <span class="token utilities-property">overflow</span>
    <span class="token utilities-property">position</span>
    <span class="token utilities-property">right</span>
    <span class="token utilities-property">top</span>
    <span class="token utilities-property">z-index</span>
  </div>
</div>

<section class="utilities-section">
  <div class="grid-row utilities-section-title-bar">
    <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-ink text-no-wrap">advanced settings</a>.</p>
  </div>

  <section class="utility" id="utility-display">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Display</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">display</span></p>
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
      <div class="display-block border-1px padding-2 margin-bottom-05"><span class="utility-class">.display-block</span></div>
      <div class="display-flex border-1px padding-2 margin-bottom-05"><span class="utility-class">.display-flex</span></div>
      <div class="display-inline border-1px padding-2 margin-bottom-05"><span class="utility-class">.display-inline</span></div>
      <div class="display-inline-block border-1px padding-2 margin-bottom-05"><span class="utility-class">.display-inline-block</span></div>
      <div class="display-inline-flex border-1px padding-2 margin-bottom-05"><span class="utility-class">.display-inline-flex</span></div>
      <div class="display-none border-1px padding-2 margin-bottom-05"><span class="utility-class">.display-inline</span></div>
      <div class="display-table">
        <div class="display-table-row">
          <div class="display-table-cell border-1px padding-2"><span class="utility-class">.display-table-cell</span></div>
          <div class="display-table-cell border-1px padding-2"><span class="utility-class">.display-table-cell</span></div>
        </div>
      </div>

      <h3 class="utility-examples-title">Markup</h3>

<pre class="utility-code-sample"><code>&lt;div class="display-block border-1px ..."&gt;.display-block&lt;/div&gt;
&lt;div class="display-flex border-1px ..."&gt;.display-flex&lt;/div&gt;
&lt;div class="display-inline border-1px ..."&gt;.display-inline&lt;/div&gt;
&lt;div class="display-inline-block border-1px ..."&gt;.display-inline-block&lt;/div&gt;
&lt;div class="display-inline-flex border-1px ..."&gt;.display-inline-flex&lt;/div&gt;
&lt;div class="display-none border-1px ..."&gt;.display-inline&lt;/div&gt;
&lt;div class="display-table"&gt;
&lt;div class="display-table-row"&gt;
  &lt;div class="display-table-cell border-1px ..."&gt;.display-table-cell&lt;/div&gt;
  &lt;div class="display-table-cell border-1px ..."&gt;.display-table-cell&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>

    </section><!-- utility-examples -->
  </section><!-- utility -->

  <section class="utility" id="opacity">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Opacity</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">opacity</span></p>
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
      <div class="bg-primary padding-3 radius-md margin-bottom-2">
        <div class="grid-row flex-align-center margin-bottom-05">
          <div class="grid-col-3">
            <span class="utility-class">.opacity-0</span>
            <span class="utility-value margin-0">0</span>
          </div>
          <div class="grid-col opacity-0 bg-white height-4"></div>
          <div class="grid-col opacity-0 bg-black height-4"></div>
        </div>
        <div class="grid-row flex-align-center margin-bottom-05">
          <div class="grid-col-3">
            <span class="utility-class">.opacity-10</span>
            <span class="utility-value margin-0">0.1</span>
          </div>
          <div class="grid-col opacity-10 bg-white height-4"></div>
          <div class="grid-col opacity-10 bg-black height-4"></div>
        </div>
        <div class="grid-row flex-align-center margin-bottom-05">
          <div class="grid-col-3">
            <span class="utility-class">.opacity-20</span>
            <span class="utility-value margin-0">0.2</span>
          </div>
          <div class="grid-col opacity-20 bg-white height-4"></div>
          <div class="grid-col opacity-20 bg-black height-4"></div>
        </div>
        <div class="grid-row flex-align-center margin-bottom-05">
          <div class="grid-col-3">
            <span class="utility-class">.opacity-30</span>
            <span class="utility-value margin-0">0.3</span>
          </div>
          <div class="grid-col opacity-30 bg-white height-4"></div>
          <div class="grid-col opacity-30 bg-black height-4"></div>
        </div>
        <div class="grid-row flex-align-center margin-bottom-05">
          <div class="grid-col-3">
            <span class="utility-class">.opacity-40</span>
            <span class="utility-value margin-0">0.4</span>
          </div>
          <div class="grid-col opacity-40 bg-white height-4"></div>
          <div class="grid-col opacity-40 bg-black height-4"></div>
        </div>
        <div class="grid-row flex-align-center margin-bottom-05">
          <div class="grid-col-3">
            <span class="utility-class">.opacity-50</span>
            <span class="utility-value margin-0">0.5</span>
          </div>
          <div class="grid-col opacity-50 bg-white height-4"></div>
          <div class="grid-col opacity-50 bg-black height-4"></div>
        </div>
        <div class="grid-row flex-align-center margin-bottom-05">
          <div class="grid-col-3">
            <span class="utility-class">.opacity-60</span>
            <span class="utility-value margin-0">0.6</span>
          </div>
          <div class="grid-col opacity-60 bg-white height-4"></div>
          <div class="grid-col opacity-60 bg-black height-4"></div>
        </div>
        <div class="grid-row flex-align-center margin-bottom-05">
          <div class="grid-col-3">
            <span class="utility-class">.opacity-70</span>
            <span class="utility-value margin-0">0.7</span>
          </div>
          <div class="grid-col opacity-70 bg-white height-4"></div>
          <div class="grid-col opacity-70 bg-black height-4"></div>
        </div>
        <div class="grid-row flex-align-center margin-bottom-05">
          <div class="grid-col-3">
            <span class="utility-class">.opacity-80</span>
            <span class="utility-value margin-0">0.8</span>
          </div>
          <div class="grid-col opacity-80 bg-white height-4"></div>
          <div class="grid-col opacity-80 bg-black height-4"></div>
        </div>
        <div class="grid-row flex-align-center margin-bottom-05">
          <div class="grid-col-3">
            <span class="utility-class">.opacity-90</span>
            <span class="utility-value margin-0">0.9</span>
          </div>
          <div class="grid-col opacity-90 bg-white height-4"></div>
          <div class="grid-col opacity-90 bg-black height-4"></div>
        </div>
        <div class="grid-row flex-align-center margin-bottom-05">
          <div class="grid-col-3">
            <span class="utility-class">.opacity-100</span>
            <span class="utility-value margin-0">1</span>
          </div>
          <div class="grid-col opacity-100 bg-white height-4"></div>
          <div class="grid-col opacity-100 bg-black height-4"></div>
        </div>
      </div>
    </section>
  </section>

  <section class="utility" id="overflow">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Overflow</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">overflow</span></p>
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

      <p class="font-sans-2xs line-height-sans-5 measure-none margin-bottom-5 padding-bottom-2 border-bottom-1px border-base-lighter"><strong>Note:</strong> <a href="http://www.w3.org/TR/css3-box/#overflow-x">Per the W3C overflow spec:</a> The computed values of ‘overflow-x’ and ‘overflow-y’ are the same as their specified values, except that some combinations with ‘visible’ are not possible: if one is specified as ‘visible’ and the other is ‘scroll’ or ‘auto’, then ‘visible’ is set to ‘auto’. The computed value of ‘overflow’ is equal to the computed value of ‘overflow-x’ if ‘overflow-y’ is the same; otherwise it is the pair of computed values of ‘overflow-x’ and ‘overflow-y’.</p>

      <div class="grid-row">
        <div class="utility-example-container grid-col-4 display-flex flex-column flex-align-start flex-justify">
          <span class="utility-class">.overflow-visible</span>
          <div class="overflow-visible square-card border-1px border-secondary-light padding-2 margin-y-1">
            <div class="square-card bg-primary-lighter"></div>
          </div>
        </div>
        <div class="utility-example-container grid-col-4 display-flex flex-column flex-align-start flex-justify">
          <span class="utility-class">.overflow-x-visible</span>
          <div class="overflow-x-visible square-card border-1px border-secondary-light padding-2 margin-y-1">
            <div class="square-card bg-primary-lighter"></div>
          </div>
        </div>
        <div class="utility-example-container grid-col-4 display-flex flex-column flex-align-start flex-justify">
          <span class="utility-class">.overflow-y-visible</span>
          <div class="overflow-y-visible square-card border-1px border-secondary-light padding-2 margin-y-1">
            <div class="square-card bg-primary-lighter"></div>
          </div>
        </div>

        <div class="utility-example-container grid-col-4 display-flex flex-column flex-align-start flex-justify">
          <span class="utility-class">.overflow-hidden</span>
          <div class="overflow-hidden square-card border-1px border-secondary-light padding-2 margin-y-1">
            <div class="square-card bg-primary-lighter"></div>
          </div>
        </div>
        <div class="utility-example-container grid-col-4 display-flex flex-column flex-align-start flex-justify">
          <span class="utility-class">.overflow-x-hidden</span>
          <div class="overflow-x-hidden square-card border-1px border-secondary-light padding-2 margin-y-1">
            <div class="square-card bg-primary-lighter"></div>
          </div>
        </div>
        <div class="utility-example-container grid-col-4 display-flex flex-column flex-align-start flex-justify">
          <span class="utility-class">.overflow-y-hidden</span>
          <div class="overflow-y-hidden square-card border-1px border-secondary-light padding-2 margin-y-1">
            <div class="square-card bg-primary-lighter"></div>
          </div>
        </div>

        <div class="utility-example-container grid-col-4 display-flex flex-column flex-align-start flex-justify">
          <span class="utility-class">.overflow-scroll</span>
          <div class="overflow-scroll square-card border-1px border-secondary-light padding-2 margin-y-1">
            <div class="square-card bg-primary-lighter"></div>
          </div>
        </div>
        <div class="utility-example-container grid-col-4 display-flex flex-column flex-align-start flex-justify">
          <span class="utility-class">.overflow-x-scroll</span>
          <div class="overflow-x-scroll square-card border-1px border-secondary-light padding-2 margin-y-1">
            <div class="square-card bg-primary-lighter"></div>
          </div>
        </div>
        <div class="utility-example-container grid-col-4 display-flex flex-column flex-align-start flex-justify">
          <span class="utility-class">.overflow-y-scroll</span>
          <div class="overflow-y-scroll square-card border-1px border-secondary-light padding-2 margin-y-1">
            <div class="square-card bg-primary-lighter"></div>
          </div>
        </div>

        <div class="utility-example-container grid-col-4 display-flex flex-column flex-align-start flex-justify">
          <span class="utility-class">.overflow-auto</span>
          <div class="overflow-auto square-card border-1px border-secondary-light padding-2 margin-y-1">
            <div class="square-card bg-primary-lighter"></div>
          </div>
        </div>
        <div class="utility-example-container grid-col-4 display-flex flex-column flex-align-start flex-justify">
          <span class="utility-class">.overflow-x-auto</span>
          <div class="overflow-x-auto square-card border-1px border-secondary-light padding-2 margin-y-1">
            <div class="square-card bg-primary-lighter"></div>
          </div>
        </div>
        <div class="utility-example-container grid-col-4 display-flex flex-column flex-align-start flex-justify">
          <span class="utility-class">.overflow-y-auto</span>
          <div class="overflow-y-auto square-card border-1px border-secondary-light padding-2 margin-y-1">
            <div class="square-card bg-primary-lighter"></div>
          </div>
        </div>
      </div>
    </section>
  </section>

  <section class="utility" id="position">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Position and pinning</h3>
          <p class="utility-property">CSS properties: <span class="utility-property-code">position, top, bottom, left, right</span></p>
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
      <h3 class="utility-examples-title">Position</h3>
      <div class="grid-row grid-gap">

        <div class="grid-col-12">
          <div class="utility-example-container-condensed">
            <p class="margin-0 font-sans-2xs"><span class="utility-class">.position-absolute</span></p>
          </div>
        </div>
        <div class="grid-col-12">
          <div class="utility-example-container-condensed">
            <p class="margin-0 font-sans-2xs"><span class="utility-class">.position-fixed</span></p>
          </div>
        </div>
        <div class="grid-col-12">
          <div class="utility-example-container-condensed">
            <p class="margin-0 font-sans-2xs"><span class="utility-class">.position-relative</span></p>
          </div>
        </div>
        <div class="grid-col-12">
          <div class="utility-example-container-condensed">
            <p class="margin-0 font-sans-2xs"><span class="utility-class">.position-static</span></p>
          </div>
        </div>
        <div class="grid-col-12">
          <div class="utility-example-container-condensed">
            <p class="margin-0 font-sans-2xs"><span class="utility-class">.position-sticky</span></p>
          </div>
        </div>

        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 margin-bottom-2">
            <div class="position-static height-card border-1px border-secondary-light padding-2 text-ink"><p class="margin-0 font-sans-2xs text-ink"> parent: <span class="utility-class text-ink">.position-static</span></p>
              <div class="position-absolute bottom-0 left-0 bg-secondary-light padding-2 text-ink is-inverse">
                <p class="margin-0 font-sans-2xs"> child: <span class="utility-class">.position-absolute</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 margin-bottom-2">
            <div class="position-relative height-card border-1px border-secondary-light padding-2 text-ink"><p class="margin-0 font-sans-2xs text-ink">parent: <span class="utility-class text-ink">.position-relative</span></p>
              <div class="position-absolute bottom-0 left-0 bg-secondary-light padding-2 text-ink is-inverse">
                <p class="margin-0 font-sans-2xs">child: <span class="utility-class">.position-absolute</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 class="utility-examples-title">Relative positioning</h3>
      {% assign spacing_tokens = site.data.uswds_tokens.spacing %}
      {% assign neg_reversed = spacing_tokens.negative.smaller
        | concat: spacing_tokens.negative.small
        | reverse %}
      {% assign rp_spacing =
        site.data.uswds_tokens.special.auto_auto
        | concat: neg_reversed
        | concat: site.data.uswds_tokens.special.zero_zero
        | concat: spacing_tokens.positive.smaller
        | concat: spacing_tokens.positive.small %}
      <div class="grid-row grid-gap">
        <div class="grid-col-3">
          {% for item in rp_spacing %}
            <p class="utility-example-container-condensed font-sans-2xs"><span class="utility-class">.bottom-{{ item.token }}</span><span class="utility-value margin-left-05">{{ item.value }}</span></p>
          {% endfor %}
        </div>
        <div class="grid-col-3">
          {% for item in rp_spacing %}
            <p class="utility-example-container-condensed font-sans-2xs"><span class="utility-class">.bottom-{{ item.token }}</span><span class="utility-value margin-left-05">{{ item.value }}</span></p>
          {% endfor %}
        </div>
        <div class="grid-col-3">
          {% for item in rp_spacing %}
            <p class="utility-example-container-condensed font-sans-2xs"><span class="utility-class">.bottom-{{ item.token }}</span><span class="utility-value margin-left-05">{{ item.value }}</span></p>
          {% endfor %}
        </div>
        <div class="grid-col-3">
          {% for item in rp_spacing %}
            <p class="utility-example-container-condensed font-sans-2xs"><span class="utility-class">.bottom-{{ item.token }}</span><span class="utility-value margin-left-05">{{ item.value }}</span></p>
          {% endfor %}
        </div>
      </div>
      <div class="grid-row grid-gap">
        <div class="grid-col-3">
          <div class="position-relative border-1px border-secondary-light maxw-square-lg add-aspect-1x1 margin-bottom-2">
            <div class="bg-secondary-light padding-2 text-ink is-inverse position-absolute top-0">
              <div class="margin-0 font-sans-2xs"><span class="utility-class">.top-0.left-0</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-3">
          <div class="position-relative border-1px border-secondary-light maxw-square-lg add-aspect-1x1 margin-bottom-2">
            <div class="bg-secondary-light padding-2 text-ink is-inverse position-absolute top-0 right-0">
              <div class="margin-0 font-sans-2xs"><span class="utility-class">.top-0.right-0</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-3">
          <div class="position-relative border-1px border-secondary-light maxw-square-lg add-aspect-1x1 margin-bottom-2">
            <div class="bg-secondary-light padding-2 text-ink is-inverse position-absolute bottom-0 right-0">
              <div class="margin-0 font-sans-2xs"><span class="utility-class">.bottom-0.right-0</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-3">
          <div class="position-relative border-1px border-secondary-light maxw-square-lg add-aspect-1x1 margin-bottom-2">
            <div class="bg-secondary-light padding-2 text-ink is-inverse position-absolute bottom-0 left-0">
              <div class="margin-0 font-sans-2xs"><span class="utility-class">.bottom-0.left-0</span></div>
            </div>
          </div>
        </div>

      </div>

      <h3 class="utility-examples-title">Pinning</h3>
      <div class="grid-row grid-gap">

        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="add-pin-top bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-sans-2xs"><span class="utility-class">.add-pin-top</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="add-pin-bottom bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-sans-2xs"><span class="utility-class">.add-pin-bottom</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="add-pin-left bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-sans-2xs"><span class="utility-class">.add-pin-left</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="add-pin-right bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-sans-2xs"><span class="utility-class">.add-pin-right</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="add-pin-all bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-sans-2xs"><span class="utility-class">.add-pin-all</span></div>
            </div>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="position-relative border-1px border-secondary-light padding-2 height-card margin-bottom-2">
            <div class="add-pin-none bg-secondary-light padding-2 text-ink is-inverse">
              <div class="margin-0 font-sans-2xs"><span class="utility-class">.add-pin-none</span></div>
            </div>
          </div>
        </div>

      </div>
    </section>

  </section>

  <section class="utility" id="z-index">
    <section class="utility-title-bar">
      <div class="grid-row">
        <h3 class="grid-col-auto size-sans-6 margin-top-0 margin-bottom-105">Z-index</h3>
        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>
    <div class="position-relative" style="height:120px">
      <div class="z-top position-absolute margin-left-0 margin-top-0 bg-gray-30 height-9 width-9 padding-2">.z-top</div>
      <div class="z-500 position-absolute margin-left-1 margin-top-1 bg-gray-40 height-9 width-9 padding-2">.z-500</div>
      <div class="z-400 position-absolute margin-left-2 margin-top-2 bg-gray-50 height-9 width-9 padding-2">.z-400</div>
      <div class="z-300 position-absolute margin-left-3 margin-top-3 bg-gray-60 height-9 width-9 padding-2">.z-300</div>
      <div class="z-200 position-absolute margin-left-4 margin-top-4 bg-gray-70 height-9 width-9 padding-2">.z-200</div>
      <div class="z-100 position-absolute margin-left-5 margin-top-5 bg-gray-80 height-9 width-9 padding-2">.z-100</div>
      <div class="z-0 position-absolute margin-left-6 margin-top-6 bg-gray-90 height-9 width-9 padding-2">.z-0</div>
      <div class="z-bottom position-absolute margin-left-7 margin-top-7 bg-black height-9 width-9 padding-2">.z-bottom</div>
    </div>
    <section class="border-top-1px padding-top-1 margin-top-4 margin-bottom-2">
      <h3 class="utility-examples-title">Markup</h3>
    </section>
<pre class="utility-code-sample"><code>&lt;div class="z-top position-absolute ..."&gt;.z-top&lt;/div&gt;
&lt;div class="z-500 position-absolute ..."&gt;.z-500&lt;/div&gt;
&lt;div class="z-400 position-absolute ..."&gt;.z-400&lt;/div&gt;
&lt;div class="z-300 position-absolute ..."&gt;.z-300&lt;/div&gt;
&lt;div class="z-200 position-absolute ..."&gt;.z-200&lt;/div&gt;
&lt;div class="z-100 position-absolute ..."&gt;.z-100&lt;/div&gt;
&lt;div class="z-0 position-absolute ..."&gt;.z-0&lt;/div&gt;
&lt;div class="z-bottom position-absolute ..."&gt;.z-bottom&lt;/div&gt;</code></pre>
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
    {% for utility in site.data.utilities.display %}
      <dt class="output-utility">{{ utility.class }}</dt>
      <dd class="output-css">{{ utility.value }}</dd>
      <dd class="output-variable">—</dd>
    {% endfor %}
  </dl>
</section>

{% include utilities/advanced-settings.html %}
