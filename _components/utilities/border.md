---
permalink: /utilities/border/
layout: styleguide
type: utility
title: Border
category: Utilities
lead: Set a solid border of a specific thickness
---

<div class="usa-accordion-bordered">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="table-docs">
    Documentation
  </button>
  <div id="table-docs" aria-hidden="false" class="usa-accordion-content">
    <p><b>output</b> | responsive scope | state scope</p>
    <table class="usa-table-borderless">
      <caption></caption>
<!--       <thead>
        <tr>
          <th scope="col">1</th>
          <th scope="col">2</th>
          <th scope="col">3</th>
        </tr>
      </thead> -->
      <tbody>
        <tr>
          <th scope="row"><b>base</b></th>
          <td>border</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row"><b>example</b></th>
          <td>
            u-border-x-2px<br>
            u-border
          </td>
        </tr>
        <tr>
          <th scope="row"><b>modifiers</b></th>
          <td>
            [null]<br>
            -top<br>
            -right<br>
            -bottom<br>
            -left<br>
            -x<br>
            -y
          </td>
          <td>
            all sides<br>
            top<br>
            right<br>
            bottom<br>
            left<br>
            left and right<br>
            top and bottom
          </td>
        </tr>
        <tr>
          <th scope="row"><b>values</b></th>
          <td>
            <b>default values</b><br>
            [null]<br>
            0<br>
            1px<br>
            2px<br>
            p5<br>
            1<br>
            1p5<br>
            base<br>
            3
          </td>
          <td>
            <b>sass equivalent</b><br>
            1px<br>
            u-border[-modifier](0)<br>
            u-border[-modifier](1px)<br>
            u-border[-modifier](2px)<br>
            u-border[-modifier](p5)<br>
            u-border[-modifier](1)<br>
            u-border[-modifier](1p5)<br>
            u-border[-modifier](base)<br>
            u-border[-modifier](3)
          </td>
        </tr>
      </tbody>
    </table>
    <h4>Examples</h4>
    <p><code>u-border-top-0</code> → <code>border-top: 0;</code></p>
    <p><code>u-border-x-2px</code> → <code>border: spacing(2px) solid;</code></p>
    <p><code>u-border</code> → <code>border: spacing(1px) solid;</code></p>
  </div>
</div>
