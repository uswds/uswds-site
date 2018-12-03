---
permalink: /utilities/list-reset/
layout: styleguide
type: utility
title: List reset
category: Utilities
lead: Reset default list styling

subnav:
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         add-list-reset
  var:          add-list-reset
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
---

<div class="font-sans-4 weight-300">

  <section class="utilities-section">
    {% include utilities/utilities-section-title-bar.html %}

    <section class="utility">
      <section class="utility-title-bar">
        <div class="grid-row">
          <div class="grid-col-fill">
            <h3 class="grid-col-auto utility-title">List reset</h3>
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
        <div class="grid-row">
          <div class="utility-example-container-condensed grid-col display-flex flex-column flex-justify flex-align-start border-0">
            <div class="bg-secondary-light">
              <ul class="bg-white">
                <li>Red apples</li>
                <li>Yellow bananas</li>
                <li>Purple eggplants</li>
              </ul>
            </div>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">default ul</p>
              <p class="utility-value">margin-y: 1em</p>
              <p class="utility-value">padding-left: 1.94em</p>
            </div>
          </div>
          <div class="utility-example-container-condensed grid-col display-flex flex-column flex-justify flex-align-start border-0">
            <ul class="add-list-reset">
              <li>Red apples</li>
              <li>Yellow bananas</li>
              <li>Purple eggplants</li>
            </ul>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class margin-top-2">ul.add-list-reset</p>
              <p class="utility-value">margin-y: 0</p>
              <p class="utility-value">padding-left: 0</p>
              <p class="utility-value">list-style: none</p>
            </div>
          </div>
        </div>
      </section>
    </section>
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
              .add-list-reset
            </span>
          </td>
          <td data-title="Mixin">
            <span>
              add-list-reset
            </span>
          </td>
          <td data-title="Example">
            <span>
              @include add-list-reset
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

    {% include utilities/values-no-custom-values.html %}
  </section>
