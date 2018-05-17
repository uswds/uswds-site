---
permalink: /utilities/border/
layout: styleguide
type: utility
title: Border
category: Utilities
lead: Set a solid border of a specific thickness and color
---

The border utility class sets the `border-color` and `border-size`, with support for the following sizes: `0`, `1px`, `2px`, `05` (4px), `1` (8px), `2` (16px), `3` (24px).

**Format:** `border-[LOCATION]-[SIZE]`

**Format (full):** `border-[top|right|bottom|left|x|y]-[0|1px|2px|05|1|2|3]`

<div class="usa-accordion-bordered">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="border-docs">
    Documentation
  </button>
  <div id="border-docs" aria-hidden="false" class="usa-accordion-content">
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
            border-x-2px<br>
            border
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
<!--         <tr>
          <th scope="row"><b>values</b></th>
          <td>
            [null]<br>
            0<br>
            1px<br>
            2px<br>
            05<br>
            1<br>
            105<br>
            2<br>
            3
          </td>
          <td>
            1px<br>
            border[-modifier](0)<br>
            border[-modifier](1px)<br>
            border[-modifier](2px)<br>
            border[-modifier](0.5)<br>
            border[-modifier](1)<br>
            border[-modifier](1.5)<br>
            border[-modifier](2)<br>
            border[-modifier](3)
          </td>
        </tr> -->
        <tr>
          <th scope="row"><b>examples</b></th>
          <td>
            .border<br>
            .border-0<br>
            .border-1px<br>
            .border-2px<br>
            .border-05<br>
            .border-1<br>
            .border-105<br>
            .border-2<br>
            .border-3
          </td>
          <td>
            1px solid<br>
            0<br>
            1px solid<br>
            2px solid<br>
            4px solid<br>
            8px solid<br>
            12px solid<br>
            16px solid<br>
            24px solid
           </td>
          </tr> 
      </tbody>
    </table>
<!--     <h4>Examples</h4>
    <p><code>u-border-top-0</code> → <code>border-top: 0;</code></p>
    <p><code>u-border-x-2px</code> → <code>border: spacing(2px) solid;</code></p>
    <p><code>u-border</code> → <code>border: spacing(1px) solid;</code></p> -->
  </div>
</div>

## Border color
{: .usa-heading}

**Format:** `border-[COLOR NAME]`


<div class="usa-accordion-bordered">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="border-color-docs">
    Documentation
  </button>
  <div id="border-color-docs" aria-hidden="false" class="usa-accordion-content">
  </div>
</div>


