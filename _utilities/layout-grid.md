---
permalink: /utilities/layout-grid/
layout: styleguide
type: utility
title: Layout grid
category: Utilities
lead: Use our flexible grid system to structure website content. The grid is mobile-first, powered by flexbox, and based on a 12-column system.
redirect_from:
  - /components/grids/
  - /components/grid/
  - /grids/
  - /grid/
subnav:
- text: How it works
  href: '#how-it-works'
- text: Auto layout columns
  href: '#auto-layout-columns'
- text: Responsive classes
  href: '#responsive-classes'
- text: Offsetting columns
  href: '#offsetting-columns'
- text: Column wrapping
  href: '#column-wrapping'
- text: Gutters
  href: '#gutters'
- text: Theme settings
  href: '#theme-settings'
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'
- text: Latest updates
  href: '#changelog'

changelog:
  key: utilities-layout-grid
---

<h2 id="how-it-works">How it works</h2>

<p>The grid system uses a series of containers, rows, and columns to lay out and align content. The following row and corresponding code are an example of and  in-depth look at how the grid comes together.</p>
<div class="docs-grid-example">
{% capture grid-1 %}
<div class="grid-container">
  <div class="grid-row">
    <div class="tablet:grid-col">tablet:grid-col</div>
    <div class="tablet:grid-col">tablet:grid-col</div>
    <div class="tablet:grid-col">tablet:grid-col</div>
  </div>
</div>
{% endcapture %}
{{ grid-1 }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button type="button" class="usa-accordion__button" aria-controls="code-sticky" aria-expanded="true">Code</button>
  <div id="code-sticky" class="usa-accordion__content copy-code">
<div markdown="1">
{% highlight html %}
{{ grid-1 | strip }}
{% endhighlight %}
</div>
  </div>
</div>

This example code creates three equal-width columns on tablet, desktop, and widescreen devices by using our predefined grid classes. Those columns are centered in the page with the parent `grid-container` container.

The following sections break the layout grid down and describe how it works.

### Containers, rows, and columns

{:.usa-content-list}
- **Containers:** `grid-container` centers the container and gives it a maximum width of `desktop` (1024px). If you would like the grid to span the full width of the page, do not use `grid-container`.
  - `grid-container` can also accept any breakpoint width, like `tablet-lg` or `widescreen`. Set the default max width with `$theme-grid-container-max-width` in your [USWDS settings configuration]({{ site.baseurl }}/documentation/settings) using [unit tokens]({{ site.baseurl }}/design-tokens/spacing-units/).
  - By default, `grid-container` has a `padding-x` of [2 units]({{ site.baseurl }}/design-tokens/spacing-units/){:.token} at narrow widths, and a padding-x of [4 units]({{ site.baseurl }}/design-tokens/spacing-units/){:.token} at `desktop` and wider. Control these values by customizing `$theme-site-margins-mobile-width`, `$theme-site-margins-width` and `$theme-site-margins-breakpoint` in your [USWDS settings configuration]({{ site.baseurl }}/documentation/settings) using [unit tokens]({{ site.baseurl }}/design-tokens/spacing-units/).
- **Rows:** Columns must have a `grid-row` as a parent.
- **Columns:** `grid-col-[1-12]` indicates the number of columns the item spans out of a possible 12 per row. So, if you want three equal-width columns across, use `grid-col-4` for each item.

### Additional functionality

{:.usa-content-list}
- **Equal-width columns:** With flexbox, grid columns without a specified width will display as equal-width columns. For example, four instances of `grid-col` will display as one-quarter-width columns across all sizes. Refer to the [auto-layout columns](#auto-layout-columns) section for more examples.
- **Gutters:** Rows and columns don't have any gutters by default, but gutters can be added by including `grid-gap-sm`, `grid-gap`, or `grid-gap-lg` at the row level. Refer to [gutters](#gutters) for more info.
- **Media queries:** Grid breakpoints are based on minimum-width media queries, meaning they apply to that specific width and all greater widths (e.g., `tablet:col-4` applies to tablet, desktop, and widescreen devices but not at `mobile-lg` or any width below the tablet breakpoint). Refer to [responsive variants](#responsive-variants) for a full list.
- **Sass mixins:** You can use predefined grid classes (like `grid-col-4`) for presentational markup or [Sass utility mixins](#utility-mixins) for more semantic markup.

<h2 id="auto-layout-columns">Auto layout columns</h2>
<h3>Variable-width content</h3>
<p><code>.grid-col-auto</code> items fit the natural width of their content.</p>
<p><code>.grid-col</code> and <code>.grid-col-fill</code> items flex to fill the available space as illustrated in the following example row and code.</p>


<div class="docs-grid-example">
{% capture grid-auto %}
<div class="grid-container">
  <div class="grid-row">
    <div class="grid-col-auto">.grid-col-auto</div>
    <div class="grid-col-fill">.grid-col</div>
    <div class="grid-col-fill">.grid-col</div>
    <div class="grid-col-auto">.grid-col-auto</div>
  </div>
</div>
{% endcapture %}
{{ grid-auto }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button type="button" class="usa-accordion__button" aria-controls="code-auto" aria-expanded="true">Code</button>
  <div id="code-auto" class="usa-accordion__content copy-code">
<div markdown="1">
{% highlight html %}
{{ grid-auto | strip }}
{% endhighlight %}
</div>
  </div>
</div>

<h2 id="responsive-classes">Responsive classes</h2>
<h3>Same at all breakpoints</h3>
<p>For columns that should maintain the same proportion at any viewport width, use the <code>.grid-col</code> and <code>.grid-col-*</code> classes. Specify a numbered class when you need a column of a specific width; otherwise, use <code>.grid-col</code>.</p>
<p><code>.grid-col-[1-12]</code> sets a fixed width of [n] grid columns in a 12-column grid.</p>

{% capture grid-markers %}
<div class="grid-row margin-top-3 font-sans-1 border-left border-secondary-light">
  {% for i in (1..12) %}
  <div class="grid-col-1 border-right border-secondary-light">
    <div class="text-center padding-x-05">{{ i }}</div>
  </div>
  {% endfor %}
</div>
{% endcapture %}
{{ grid-markers }}

<div class="docs-grid-example">
{% capture grid-responsive %}
<div class="grid-row">
  <div class="grid-col-1">.grid-col-1</div>
  <div class="grid-col-2">.grid-col-2</div>
  <div class="grid-col-3">.grid-col-3</div>
  <div class="grid-col-4">.grid-col-4</div>
  <div class="grid-col-2">.grid-col-2</div>
</div>

<div class="grid-row">
  <div class="grid-col-8">.grid-col-8</div>
  <div class="grid-col-2">.grid-col-2</div>
  <div class="grid-col-2">.grid-col-2</div>
</div>
{% endcapture %}
{{ grid-responsive }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button type="button" class="usa-accordion__button" aria-controls="code-responsive" aria-expanded="true">Code</button>
  <div id="code-responsive" class="usa-accordion__content copy-code">
<div markdown="1">
{% highlight html %}
{{ grid-responsive | strip }}
{% endhighlight %}
</div>
  </div>
</div>

<h3>Stacked columns at narrow widths</h3>
<p>Columns are full-width until the narrowest breakpoint specified in a <code>.grid-col</code> class. For instance, using a single set of <code>tablet:grid-col-*</code> classes, you can create a basic grid system that starts out stacked before displaying as columns at the tablet breakpoint (<code>tablet:</code>) as illustrated in the following rows and corresponding code.</p>

<div class="docs-grid-example">
{% capture grid-stacked %}
<div class="grid-row">
  <div class="tablet:grid-col">.tablet:grid-col</div>
  <div class="tablet:grid-col">.tablet:grid-col</div>
  <div class="tablet:grid-col">.tablet:grid-col</div>
</div>

<div class="grid-row">
  <div class="tablet:grid-col-4">.tablet:grid-col-4</div>
  <div class="tablet:grid-col-8">.tablet:grid-col-8</div>
</div>
{% endcapture %}
{{ grid-stacked }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button type="button" class="usa-accordion__button" aria-controls="code-stacked" aria-expanded="true">Code</button>
  <div id="code-stacked" class="usa-accordion__content copy-code">
<div markdown="1">
{% highlight html %}
{{ grid-stacked | strip }}
{% endhighlight %}
</div>
  </div>
</div>

<h3>Mix and match</h3>
<p>Don’t want your columns to simply stack in some breakpoints? Use a combination of different classes for each breakpoint as needed. See the following example rows and corresponding code for a better idea of how it all works.</p>
<div class="docs-grid-example">
{% capture grid-mix %}
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="grid-row">
  <div class="tablet:grid-col-8">.tablet:grid-col-8</div>
  <div class="grid-col-6 tablet:grid-col-4">.col-6 .tablet:grid-col-4</div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="grid-row">
  <div class="grid-col-6 tablet:grid-col-4">.col-6 .tablet:grid-col-4</div>
  <div class="grid-col-6 tablet:grid-col-4">.col-6 .tablet:grid-col-4</div>
  <div class="grid-col-6 tablet:grid-col-4">.col-6 .tablet:grid-col-4</div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="grid-row">
  <div class="grid-col-6">.col-6</div>
  <div class="grid-col-6">.col-6</div>
</div>
{% endcapture %}
{{ grid-mix }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button type="button" class="usa-accordion__button" aria-controls="code-mix" aria-expanded="true">Code</button>
  <div id="code-mix" class="usa-accordion__content copy-code">
<div markdown="1">
{% highlight html %}
{{ grid-mix | strip }}
{% endhighlight %}
</div>
  </div>
</div>

<h2 id="offsetting-columns">Offsetting columns</h2>
<p><code>.grid-offset-[1-12]</code> offsets an item by the specified number of grid columns as shown in the following example.</p>
{{ grid-markers }}

<div class="docs-grid-example">
{% capture grid-offsets %}
<div class="grid-row">
  <div class="grid-col-8 grid-offset-4">.grid-col-8.grid-offset-4</div>
</div>
{% endcapture %}
{{ grid-offsets }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button type="button" class="usa-accordion__button" aria-controls="code-offsets" aria-expanded="true">Code</button>
  <div id="code-offsets" class="usa-accordion__content copy-code">
<div markdown="1">
{% highlight html %}
{{ grid-offsets | strip }}
{% endhighlight %}
</div>
  </div>
</div>

<h2 id="column-wrapping">Column wrapping</h2>
<p>Items wrap when the sum of the grid columns is more than 12 as shown in the following example.</p>
{{ grid-markers }}

<div class="docs-grid-example">
{% capture grid-wrapping %}
<div class="grid-row">
  <div class="grid-col-8">.grid-col-8</div>
  <div class="grid-col-3">.grid-col-3</div>
  <div class="grid-col-5">.grid-col-5</div>
</div>
{% endcapture %}
{{ grid-wrapping }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button type="button" class="usa-accordion__button" aria-controls="code-wrapping" aria-expanded="true">Code</button>
  <div id="code-wrapping" class="usa-accordion__content copy-code">
<div markdown="1">
{% highlight html %}
{{ grid-wrapping | strip }}
{% endhighlight %}
</div>
  </div>
</div>

<h2 id="gutters">Gutters</h2>

### Default gutter
Add `grid-gap` to a grid row to add a gap (or gutter) between each column in the row. The default gap width is 2 units and 4 units at `desktop` and higher. Customize the width of the gap by adjusting the value of `$theme-column-gap` in project settings as shown in the following example.

{{ grid-markers }}
<div class="docs-grid-example margin-top-2">
{% capture grid-gutters %}
<div class="grid-row grid-gap">
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
</div>
{% endcapture %}
{{ grid-gutters }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button type="button" class="usa-accordion__button" aria-controls="code-gutters" aria-expanded="true">Code</button>
  <div id="code-gutters" class="usa-accordion__content copy-code">

{% highlight html %}
{{ grid-gutters | strip }}
{% endhighlight %}

  </div>
</div>

<h3>Large gutter</h3>
<p><code>grid-gap-lg</code> adds a larger gap (or gutter) between each column in a row than `grid-gap`. The default large-gap width is 32px (4 spacing units). Customize the width of the large gap by adjusting the value of <code>$theme-column-gap-lg</code> in project settings. There is also a <code>.grid-gap-sm</code> (2px) set with <code>$theme-column-gap-sm</code>. Also, you can add the following system values with <code>grid-gap</code>:</p>
<div markdown="1">
- `grid-gap-2px`
- `grid-gap-05`
- `grid-gap-1`
- `grid-gap-2`
- `grid-gap-3`
- `grid-gap-4`
- `grid-gap-5`
- `grid-gap-6`
</div>

<p>The following example row and code illustrate large gutters.</p>
{{ grid-markers }}


<div class="docs-grid-example">
{% capture grid-gutters-lg %}
<div class="grid-row grid-gap-lg">
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
</div>
{% endcapture %}
{{ grid-gutters-lg }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button type="button" class="usa-accordion__button" aria-controls="code-gutters-lg" aria-expanded="true">Code</button>
  <div id="code-gutters-lg" class="usa-accordion__content copy-code">

{% highlight html %}
{{ grid-gutters-lg | strip }}
{% endhighlight %}

  </div>
</div>

## Theme settings
You can redefine column gap token sizes, set the grid container max width, and update site margin by defining the relevant theme setting in your [USWDS settings configuration]({{ site.baseurl }}/documentation/settings#configuring-custom-uswds-settings).

Find a full list of the available [grid settings]({{ site.baseurl }}/documentation/settings#spacing-settings) on the settings page.

<section id="utility-mixins" class="padding-top-4">
  <h2 class="site-h2 margin-y-0">Utility mixins</h2>
  {% include utilities/utility-mixin-intro.html %}

  <table class="usa-table--borderless site-table-responsive site-table-simple">
    <thead>
      <tr>
        <th scope="col" class="tablet:maxw-card-lg display-inline-flex flex-2">Utility</th>
        <th scope="col" class="display-inline-flex flex-2">Mixin</th>
        <th scope="col" class="display-inline-flex flex-1">Accepted values</th>
        <th scope="col" class="display-inline-flex flex-2">Example</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      <tr>
        <td data-title="Utility" class="tablet:maxw-card-lg flex-2">
          <span>
            .grid-container <br />
            .grid-container-<code>container size</code>
          </span>
        </td>
        <td data-title="Mixin" class="display-inline-flex flex-2">
          <span>
            grid-container(<code>container size</code>)
          </span>
        </td>
        <td data-title="Accepted values" class="display-inline-flex flex-1">
          <span>
            card, card-lg, mobile, mobile-lg, tablet, tablet-lg, desktop, desktop-lg, or widescreen
          </span>
        </td>
        <td data-title="Example" class="display-inline-flex flex-2">
          <span>
            @include grid-container; <br/>
            @include grid-container("tablet");
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Utility" class="tablet:maxw-card-lg display-inline-flex flex-2">
          <span class="text-normal">
            .grid-row
          </span>
        </th>
        <td data-title="Mixin" class="display-inline-flex flex-2">
          <span>
            grid-row
          </span>
        </td>
        <td data-title="Accepted values" class="display-inline-flex flex-1">
          <span>
            -
          </span>
        </td>
        <td data-title="Example" class="display-inline-flex flex-2">
          <span>
            @include grid-row
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Utility" class="tablet:maxw-card-lg display-inline-flex flex-2">
          <span class="text-normal">
            .grid-col <br />
            .grid-col-<code>column count</code>
          </span>
        </th>
        <td data-title="Mixin" class="display-inline-flex flex-2">
          <span>
            grid-col(<code>column count</code>)
          </span>
        </td>
        <td data-title="Accepted values" class="display-inline-flex flex-1">
          <span>
            auto, fill, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
          </span>
        </td>
        <td data-title="Example" class="display-inline-flex flex-2">
          <span>
            @include grid-col <br/>
            @include grid-col(6) <br/>
            @include grid-col("auto")
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Utility" class="tablet:maxw-card-lg display-inline-flex flex-2">
          <span class="text-normal">
            .grid-gap <br />
            .grid-gap-<code>gap size</code>
          </span>
        </th>
        <td data-title="Mixin" class="display-inline-flex flex-2">
          <span>
            grid-gap(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Accepted values" class="display-inline-flex flex-1">
          <span>
            sm, md, lg, 0, 2px, 05, 1, 2, 3, 4, 6
          </span>
        </td>
        <td data-title="Example" class="display-inline-flex flex-2">
          <span>
            @include grid-gap <br />
            @include grid-gap("lg")
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Utility" class="tablet:maxw-card-lg display-inline-flex flex-2">
          <span class="text-normal">
            .grid-offset-<code>column count</code>
          </span>
        </th>
        <td data-title="Mixin" class="display-inline-flex flex-2">
          <span>
            grid-offset(<code>column count</code>)
          </span>
        </td>
        <td data-title="Accepted values" class="display-inline-flex flex-1">
          <span>
            none, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
          </span>
        </td>
        <td data-title="Example" class="display-inline-flex flex-2">
          <span>
            @include grid-offset(4)
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Utility" class="tablet:maxw-card-lg display-inline-flex flex-2">
          <span class="text-normal">
            .order-<code>column position</code>
          </span>
        </th>
        <td data-title="Mixin" class="display-inline-flex flex-2">
          <span>
            u-order(<code>column position</code>)
          </span>
        </td>
        <td data-title="Accepted values" class="display-inline-flex flex-1">
          <span>
            first, last, initial, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
          </span>
        </td>
        <td data-title="Example" class="display-inline-flex flex-2">
          <span>
            @include u-order(4)
            @include u-order("first")
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

</section>
