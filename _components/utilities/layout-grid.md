---
permalink: /utilities/layout-grid/
layout: styleguide
type: utility
title: Layout grid
category: Utilities
lead: Use our flexible grid system to structure website content. The grid is mobile-first, powered by flexbox, and based on a twelve-column system.
subnav:
- text: How it works
  href: '#how-it-works'
- text: Responsive variants
  href: '#responsive-variants'
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
- text: Sass mixins
  href: '#sass-mixins'
---

<div class="font-mono-4 weight-300">
<h2 id="how-it-works">How it works</h2>
<!-- <p class="font-sans-6 measure-3"><strong>Note:</strong> <code class="docs-inline-code">.grid-container</code>, <code class="docs-inline-code">.grid-gap</code>, and <code class="docs-inline-code">.grid-col</code> all have mobile-first responsive variants. Only the first example shows them.</p> -->

<p class="font-sans-6 measure-3">The grid system uses a series of containers, rows, and columns to lay out and align content. Below is an example and an in-depth look at how the grid comes together.</p>
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

<div class="usa-accordion-bordered usa-code-sample margin-top-4">
  <button class="usa-accordion-button" aria-controls="code-sticky" aria-expanded="true">Code</button>
  <div id="code-sticky" class="usa-accordion-content">
<div markdown="1">
```html
{{ grid-1 | strip }}
```
</div>
  </div>
</div>

<div markdown="1" class="font-sans-6 measure-3">
The above example creates three equal-width columns on tablet, desktop, and widescreen devices using our predefined grid classes. Those columns are centered in the page with the parent `.grid-container` container.

Breaking it down, here's how it works:

- **Containers** `.grid-container` centers the container and gives it a maximum width of 1024px. If you would like the grid to span the full width of the page, do not use `.grid-container`. `grid-container` can also accept any breakpoint width like `grid-container-tablet-lg` or `grid-container-widescreen`. 
- **Rows** Columns must have a `.grid-row` as a parent.
- **Columns** `.grid-col-[1-12]` indicates the number of columns the item spans out of a possible 12 per row. So, if you want three equal-width columns across, use `.grid-col-4` for each item.
- With flexbox, grid columns without a specified width will display as equal-width columns. For example, four instances of `.grid-col` will display as one-quarter-width columns across all sizes. See the [auto-layout columns](#auto-layout-columns) section for more examples.
- Rows and columns don't have any gutters by default, but they can be added by adding `.grid-gap-sm`, `.grid-gap`, or `.grid-gap-lg` at the row level. See [gutters](#gutters) for more info.
- Grid breakpoints are based on minimum width media queries, meaning they apply to that specific width and all greater widths (e.g., `tablet:col-4` applies to tablet, desktop, and widescreen devices, but not at `mobile-lg` or any width below the tablet breakpoint). See [responsive variants](#responsive-variants) for full list.
- You can use predefined grid classes (like `.grid-col-4`) for presentational markup or [Sass mixins](#sass-mixins) for more semantic markup.

</div>

<h2 id="responsive-variants">Responsive variants</h2>
<table class="font-sans-6">
  <caption>Default responsive sizes</caption>
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Smallest</th>
      <th scope="col">Mobile large</th>
      <th scope="col">Tablet</th>
      <th scope="col">Desktop</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Size</th>
      <td>≥0</td>
      <td>≥480px</td>
      <td>≥640px</td>
      <td>≥1024px</td>
    </tr>
    <tr>
      <th scope="row">Responsive variant</th>
      <td class="font-mono-4">grid-col</td>
      <td class="font-mono-4"><span class="text-red">mobile-lg:</span>grid-col</td>
      <td class="font-mono-4"><span class="text-red">tablet:</span>grid-col</td>
      <td class="font-mono-4"><span class="text-red">desktop:</span>grid-col</td>
    </tr>
    <tr>
      <th scope="row"># of columns</th>
      <td colspan="4">12</td>
    </tr>
    <tr>
      <th scope="row">Gutters</th>
      <td colspan="4">0</td>
    </tr>
    <tr>
      <th scope="row">Nestable</th>
      <td colspan="4">Yes</td>
    </tr>
  </tbody>
</table>

<h2 id="auto-layout-columns">Auto layout columns</h2>
<h3>Variable width content</h3>
<p class="font-sans-6 measure-3"><code class="docs-inline-code">.grid-col-auto</code> items fit the natural width of their content.</p>
<p class="font-sans-6 measure-3"><code class="docs-inline-code">.grid-col</code> and <code class="docs-inline-code">.grid-col-fill</code> items flex to fill the available space.</p>


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

<div class="usa-accordion-bordered usa-code-sample margin-top-4">
  <button class="usa-accordion-button" aria-controls="code-auto" aria-expanded="true">Code</button>
  <div id="code-auto" class="usa-accordion-content">
<div markdown="1">
```html
{{ grid-auto | strip }}
```
</div>
  </div>
</div>

<h2 id="responsive-classes">Responsive classes</h2>
<h3>Same at all breakpoints</h3>
<p class="font-sans-6 measure-3">For columns that should maintain the same proportion at any viewport width, use the <code class="docs-inline-code">.grid-col</code> and <code class="docs-inline-code">.grid-col-*</code> classes. Specify a numbered class when you need a column of a specific width; otherwise, use <code class="docs-inline-code">.grid-col</code>.</p>
<p class="font-sans-6 measure-3"><code class="docs-inline-code">.grid-col-[1-12]</code> set a fixed width of [n] grid-columns in a 12-column grid.</p>

{% capture grid-markers %}
<div class="grid-row margin-top-1 font-sans-2">
  <div class="grid-col-1 border-x-2px border-black-cool-90">
    <div class="text-center padding-x-2">1</div>
  </div>
  <div class="grid-col-1 border-x-2px border-left-0 border-black-cool-90">
    <div class="text-center padding-x-2">2</div>
  </div>
  <div class="grid-col-1 border-x-2px border-left-0 border-black-cool-90">
    <div class="text-center padding-x-2">3</div>
  </div>
  <div class="grid-col-1 border-x-2px border-left-0 border-black-cool-90">
    <div class="text-center padding-x-2">4</div>
  </div>
  <div class="grid-col-1 border-x-2px border-left-0 border-black-cool-90">
    <div class="text-center padding-x-2">5</div>
  </div>
  <div class="grid-col-1 border-x-2px border-left-0 border-black-cool-90">
    <div class="text-center padding-x-2">6</div>
  </div>
  <div class="grid-col-1 border-x-2px border-left-0 border-black-cool-90">
    <div class="text-center padding-x-2">7</div>
  </div>
  <div class="grid-col-1 border-x-2px border-left-0 border-black-cool-90">
    <div class="text-center padding-x-2">8</div>
  </div>
  <div class="grid-col-1 border-x-2px border-left-0 border-black-cool-90">
    <div class="text-center padding-x-2">9</div>
  </div>
  <div class="grid-col-1 border-x-2px border-left-0 border-black-cool-90">
    <div class="text-center padding-x-2">10</div>
  </div>
  <div class="grid-col-1 border-x-2px border-left-0 border-black-cool-90">
    <div class="text-center padding-x-2">11</div>
  </div>
  <div class="grid-col-1 border-x-2px border-left-0 border-black-cool-90">
    <div class="text-center padding-x-2">12</div>
  </div>
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

<div class="usa-accordion-bordered usa-code-sample margin-top-4">
  <button class="usa-accordion-button" aria-controls="code-responsive" aria-expanded="true">Code</button>
  <div id="code-responsive" class="usa-accordion-content">
<div markdown="1">
```html
{{ grid-responsive | strip }}
```
</div>
  </div>
</div>

<h3>Stacked columns at narrow widths</h3>
<p class="font-sans-6 measure-3">Columns are full-width until the narrowest breakpoint specified in a grid-col class. For instance, using a single set of <code class="docs-inline-code">tablet:grid-col-*</code> classes, you can create a basic grid system that starts out stacked before displaying as columns at the tablet breakpoint (<code class="docs-inline-code">tablet:</code>).</p>

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

<div class="usa-accordion-bordered usa-code-sample margin-top-4">
  <button class="usa-accordion-button" aria-controls="code-stacked" aria-expanded="true">Code</button>
  <div id="code-stacked" class="usa-accordion-content">
<div markdown="1">
```html
{{ grid-stacked | strip }}
```
</div>
  </div>
</div>

<h3>Mix and match</h3>
<p class="font-sans-6 measure-3">Don’t want your columns to simply stack in some breakpoints? Use a combination of different classes for each breakpoints as needed. See the example below for a better idea of how it all works.</p>
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

<div class="usa-accordion-bordered usa-code-sample margin-top-4">
  <button class="usa-accordion-button" aria-controls="code-mix" aria-expanded="true">Code</button>
  <div id="code-mix" class="usa-accordion-content">
<div markdown="1">
```html
{{ grid-mix | strip }}
```
</div>
  </div>
</div>

<h2 id="offsetting-columns">Offsetting columns</h2>
<p class="font-sans-6 measure-3"><code class="docs-inline-code">.grid-offset-[1-12]</code> offsets the item by the specified number of grid columns.</p>
{{ grid-markers }}

<div class="docs-grid-example">
{% capture grid-offsets %}
<div class="grid-row">
  <div class="grid-col-8 grid-offset-4">.grid-col-8.grid-offset-4</div>
</div>
{% endcapture %}
{{ grid-offsets }}
</div>

<div class="usa-accordion-bordered usa-code-sample margin-top-4">
  <button class="usa-accordion-button" aria-controls="code-offsets" aria-expanded="true">Code</button>
  <div id="code-offsets" class="usa-accordion-content">
<div markdown="1">
```html
{{ grid-offsets | strip }}
```
</div>
  </div>
</div>

<h2 id="column-wrapping">Column wrapping</h2>
<p class="font-sans-6 measure-3">Items wrap when the sum of the grid columns is more than 12.</p>
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

<div class="usa-accordion-bordered usa-code-sample margin-top-4">
  <button class="usa-accordion-button" aria-controls="code-wrapping" aria-expanded="true">Code</button>
  <div id="code-wrapping" class="usa-accordion-content">
<div markdown="1">
```html
{{ grid-wrapping | strip }}
```
</div>
  </div>
</div>

<h2 id="gutters">Gutters</h2>

<h3>Default gutter</h3>
<p class="font-sans-6 measure-3">Add <code class="docs-inline-code">.grid-gap</code> to a grid row to add a gap (or gutter) between each column in the row. The default gap width is 16px (2 spacing units). Customize the width of the gap by adjusting the value of <code class="docs-inline-code">$theme-column-gap</code> in project settings.</p>
{{ grid-markers }}

<div class="docs-grid-example">
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

<div class="usa-accordion-bordered usa-code-sample margin-top-4">
  <button class="usa-accordion-button" aria-controls="code-gutters" aria-expanded="true">Code</button>
  <div id="code-gutters" class="usa-accordion-content">
<div markdown="1">
```html
{{ grid-gutters | strip }}
```
</div>
  </div>
</div>

<h3>Large gutter</h3>
<p class="font-sans-6 measure-3"><code class="docs-inline-code">.grid-gap-lg</code> adds a larger gap (or gutter) between each column in a row. The default large gap width is 32px (4 spacing units). Customize the width of the large gap by adjusting the value of <code class="docs-inline-code">$theme-column-gap-large</code> in project settings. There is also a <code class="docs-inline-code">.grid-gap-sm</code> (2px) set with <code class="docs-inline-code">$theme-column-gap-small</code>. Also, you can add the following discrete values to <code class="docs-inline-code">.grid-gap</code>:</p>
<div markdown="1">
- `.grid-gap-2px`
- `.grid-gap-05`
- `.grid-gap-1`
- `.grid-gap-3`
- `.grid-gap-4`
- `.grid-gap-5`
</div>
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

<div class="usa-accordion-bordered usa-code-sample margin-top-4">
  <button class="usa-accordion-button" aria-controls="code-gutters-lg" aria-expanded="true">Code</button>
  <div id="code-gutters-lg" class="usa-accordion-content">
<div markdown="1">
```html
{{ grid-gutters-lg | strip }}
```
</div>
  </div>
</div>

<div markdown="1" class="font-sans-6 measure-3">
<h2 id="sass-mixins">Sass mixins</h2>
When generating your CSS from USWDS source files, you have the option of customizing many system defaults by modifying project theme variables. USWDS also provides grid mixins for adding grid functionality to custom semantic component CSS.

### Variables
Variables and maps determine the number of columns, the gutter width, and the media query point at which to begin floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below.

```scss
$theme-column-gap:     16px;
$theme-column-gap-lg:  32px;

// Turn on or off breakpoints
$theme-output-breakpoints: (
  'card':              false,   // 160px
  'card-lg':           false,   // 240px
  'mobile':            false,   // 320px
  'mobile-lg':         true,    // 480px
  'tablet':            true,    // 640px
  'tablet-lg':         false,   // 800px
  'desktop':           true,    // 1040px
  'desktop-lg':        false,   // 1200px
  'widescreen':        false,   // 1400px
);

$container-max-widths: $desktop;
```

### Mixins
Mixins can be used in conjunction with the grid variables to add grid functionality to semantic component Sass.

```scss
// Creates a wrapper for a series of columns
@include grid-container;

// Make the element grid-ready (applying everything but the width)
@include u-width(full);
@include grid-col($width-key);

// Get fancy by offsetting, or changing the sort order
@include grid-offset($width-key);
@include u-order(last);
```

### Example usage
You can modify the variables to your own custom values, or just use the mixins with their default values. Here’s an example of using the default settings to create a two-column layout with a gap between.

```scss
.example-container {
  @include grid-container;
}

.example-row {
  @include grid-row;

  // Add column gaps
  &.content-row {
    @include grid-gap;
  }
}

.example-content-main {
  @include u-width(full);

  @include at-media(tablet) {
    @include grid-col(6);
  }

  @include at-media(desktop) {
    @include grid-col(8);
  }
}

.example-content-secondary {
  @include u-width(full);

  @include at-media(tablet) {
    @include grid-col(6);
  }

  @include at-media(desktop) {
    @include grid-col(4);
  }
}
```
</div>
</div><!-- div -->
