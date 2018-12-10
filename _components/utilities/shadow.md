---
permalink: /utilities/shadow/
layout: styleguide
type: utility
title: Shadow
category: Utilities
lead: Set size of an item’s drop shadow
subnav:
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         shadow
  var:          box-shadow
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        true
  visited:      false
---

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="property utilities-property">box-shadow</span>
  </div>
</div>

<section class="utilities-section">
  {% include utilities/utilities-section-title-bar.html %}

  <section class="utility" id="box-shadow">
    {% include utilities/utility-title-bar.html
      title="Shadow"
      property="box-shadow"
    %}
    <section class="utility-examples">
      <div class="grid-row">
        <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          <div class="bg-secondary-light display-inline-block">
            <div class="square-9 bg-white shadow-none"></div>
          </div>
          <p class="utility-class margin-top-3">.shadow-none</p>
        </div>
        <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          <div class="bg-secondary-light display-inline-block">
            <div class="square-9 bg-white shadow-1"></div>
          </div>
          <p class="utility-class margin-top-3">.shadow-1</p>
        </div>
        <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          <div class="bg-secondary-light display-inline-block">
            <div class="square-9 bg-white shadow-2"></div>
          </div>
          <p class="utility-class margin-top-3">.shadow-2</p>
        </div>
        <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          <div class="bg-secondary-light display-inline-block">
            <div class="square-9 bg-white shadow-3"></div>
          </div>
          <p class="utility-class margin-top-3">.shadow-3</p>
        </div>
        <div class="utility-example-container grid-col-3 text-center display-flex flex-column flex-justify flex-align-start">
          <div class="bg-secondary-light display-inline-block">
            <div class="square-9 bg-white shadow-4"></div>
          </div>
          <p class="utility-class margin-top-3">.shadow-4</p>
        </div>
        <div class="utility-example-container grid-col-fill text-center display-flex flex-column flex-justify flex-align-start">
          <div class="bg-secondary-light display-inline-block">
            <div class="square-9 bg-white shadow-5"></div>
          </div>
          <p class="utility-class margin-top-3">.shadow-5</p>
        </div>
      </div>
    </section><!-- utility-examples -->
  </section><!-- utility -->
</section><!-- utilities-section -->

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
            .shadow-<a href="{{ site.baseurl }}/design-tokens/shadow/" class="token">shadow</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-shadow(<a href="{{ site.baseurl }}/design-tokens/shadow/" class="token">shadow</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-shadow(2)
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
    {% include utilities/values-no-palettes.html %}
  </section>
</section>
