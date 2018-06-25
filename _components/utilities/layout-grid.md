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
- text: Grid offsets
  href: '#grid-offsets'
- text: Column wrapping
  href: '#column-wrapping'
- text: Gutters
  href: '#gutters'
- text: Sass mixins
  href: '#sass-mixins'
---

<div class="font-mono-4 weight-300">
  <h2 id="how-it-works">How it works</h2>
<!--   <p class="font-sans-6 measure-3"><strong>Note:</strong> <code class="docs-inline-code">.grid-container</code>, <code class="docs-inline-code">.grid-gap</code>, and <code class="docs-inline-code">.grid-col</code> all have mobile-first responsive variants. Only the first example shows them.</p>
  <p class="font-sans-6 measure-3"><code class="docs-inline-code">.grid-col</code> and <code class="docs-inline-code">.grid-col-fill</code> items flex to fit</p> -->

<p class="font-sans-6 measure-3">The grid system uses a series of containers, rows, and columns to lay out and align content. Below is an example and an in-depth look at how the grid comes together.</p>

<!--   <div class="grid-row">
    <div class="grid-col-6">grid-col-6</div>
    <div class="grid-col-6">grid-col-6</div>
  </div>

  <div class="grid-row">
    <div class="grid-col-12 tablet:grid-col-6">grid-col-12 tablet:grid-col-6</div>
    <div class="grid-col-12 tablet:grid-col-6">grid-col-12 tablet:grid-col-6</div>
  </div> -->
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
{{ grid-1 }}
```
</div>
  </div>
</div>

<div markdown="1" class="font-sans-6 measure-3">
The above example creates three equal-width columns on tablet, desktop, and widescreen devices using our predefined grid classes. Those columns are centered in the page with the parent `usa-grid` container.

Breaking it down, here's how it works:

- **Containers** `.grid-container` centers the container and gives it a maximum width of 1024px.
- **Rows** `.grid-row` wrap around columns.
- **Columns** `.grid-col-[1-12]` indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use `.grid-col-4`.
- With flexbox, grid columns without a specified width will automatically lay out as equal width columns. For example, four instances of `.grid-col` will each automatically be across all sizes. See the [auto-layout columns](#auto-layout-columns) section for more examples.
- Rows and columns don't have any gutters by default, but they can be added with `grid-gap` or `grid-gap-lg`. See [gutters](#gutters) for more info.
- Grid breakpoints are based on minimum width media queries, meaning they apply to that one breakpoint and all those above it (e.g., `tablet:col-4` applies to tablet, desktop, and widescreen devices, but not the mobile or smaller breakpoints). See [responsive variants](#responsive-variants) for full list.
- You can use predefined grid classes (like `.grid-col-4`) for presentational markup or [Sass mixins](#) for more semantic markup.

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

  <div class="grid-row margin-top-1">
    <div class="grid-col-auto border-1px border-black-cool-10">
      <div class="text-center padding-2">.grid-col-auto</div>
    </div>
    <div class="grid-col-fill border-1px border-left-0 border-black-cool-10">
      <div class="text-center padding-2">.grid-col</div>
    </div>
    <div class="grid-col-fill border-1px border-left-0 border-black-cool-10">
      <div class="text-center padding-2">.grid-col</div>
    </div>
    <div class="grid-col-auto border-1px border-left-0 border-black-cool-10">
      <div class="text-center padding-2">.grid-col-auto</div>
    </div>
  </div><!-- l.grid-row -->

<h2 id="responsive-classes">Responsive classes</h2>
<h3>All breakpoints</h3>
<p class="font-sans-6 measure-3">For grids that are the same from the smallest of devices to the largest, use the <code class="docs-inline-code">.grid-col</code> and <code class="docs-inline-code">.grid-col-*</code> classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to use <code class="docs-inline-code">.grid-col</code>.</p>
  <p class="font-sans-6 measure-3"><code class="docs-inline-code">.grid-col-[1-12]</code> set a fixed width of [n] grid-columns in a 12-column grid</p>

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
  </div><!-- l.grid-row -->

  <div class="grid-row margin-top-1">
    <div class="grid-col-1 border-1px border-black-cool-10">
      <div class="text-center padding-2">.grid-col-1</div>
    </div>
    <div class="grid-col-2 border-1px border-left-0 border-black-cool-10">
      <div class="text-center padding-2">.grid-col-2</div>
    </div>
    <div class="grid-col-3 border-1px border-left-0 border-black-cool-10">
      <div class="text-center padding-2">.grid-col-3</div>
    </div>
    <div class="grid-col-4 border-1px border-left-0 border-black-cool-10">
      <div class="text-center padding-2">.grid-col-4</div>
    </div>
    <div class="grid-col-2 border-1px border-left-0 border-black-cool-10">
      <div class="text-center padding-2">.grid-col-2</div>
    </div>
  </div><!-- l.grid-row -->

  <div class="grid-row margin-top-1">
    <div class="grid-col-8 border-1px border-black-cool-10">
      <div class="text-center padding-2">.grid-col-8</div>
    </div>
    <div class="grid-col-2 border-1px border-left-0 border-black-cool-10">
      <div class="text-center padding-2">.grid-col-2</div>
    </div>
    <div class="grid-col-2 border-1px border-left-0 border-black-cool-10">
      <div class="text-center padding-2">.grid-col-2</div>
    </div>
  </div><!-- l.grid-row -->

<h3>Stacked to horizontal</h3>
<p class="font-sans-6 measure-3">Declare full-width columns at mobile width and larger with <code class="docs-inline-code">grid-col-12</code> and tablet and larger with <code class="docs-inline-code">tablet:grid-col-4</code> to create a basic grid system that starts out stacked before becoming horizontal with at the tablet breakpoint (<code class="docs-inline-code">tablet:</code>).</p>

<div class="docs-grid-example">
  {% capture grid-stacked %}
  <div class="grid-row">
    <div class="grid-col-12 tablet:grid-col">.grid-col-12 .tablet:grid-col</div>
    <div class="grid-col-12 tablet:grid-col">.grid-col-12 .tablet:grid-col</div>
    <div class="grid-col-12 tablet:grid-col">.grid-col-12 .tablet:grid-col</div>
  </div>

  <div class="grid-row">
    <div class="grid-col-12 tablet:grid-col-4">.grid-col-12 .tablet:grid-col-4</div>
    <div class="grid-col-12 tablet:grid-col-8">.grid-col-12 .tablet:grid-col-8</div>
  </div>
  {% endcapture %}
  {{ grid-stacked }}
</div>

<div class="usa-accordion-bordered usa-code-sample margin-top-4">
  <button class="usa-accordion-button" aria-controls="code-stacked" aria-expanded="true">Code</button>
  <div id="code-stacked" class="usa-accordion-content">
<div markdown="1">
```html
{{ grid-stacked }}
```
</div>
  </div>
</div>

<h3>Mix and match</h3>
<p class="font-sans-6 measure-3">Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.</p>
<div class="docs-grid-example">
  {% capture grid-mix %}
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="grid-row">
    <div class="grid-col-12 tablet:grid-col-8">.col-12 .tablet:grid-col-8</div>
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
{{ grid-mix }}
```
</div>
  </div>
</div>

<h2 id="grid-offsets">Grid offsets</h2>
  <p class="font-sans-6 measure-3"><code class="docs-inline-code">.grid-offset-[1-12]</code> offsets the grid-column by [n] grid-columns</p>

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
  </div><!-- l.grid-row -->

  <div class="grid-row margin-top-1">
    <div class="grid-col-8 grid-offset-4 border-1px border-black-cool-10">
      <div class="text-center padding-2">.grid-col-8.grid-offset-4</div>
    </div>
  </div><!-- l.grid-row -->

<h2 id="column-wrapping">Column wrapping</h2>
  <p class="font-sans-6 measure-3">Rows wrap when grid-columns add up to more than 12</p>

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
  </div><!-- l.grid-row -->

  <div class="grid-row margin-top-1">
    <div class="grid-col-8 border-1px border-black-cool-10">
      <div class="text-center padding-2">.grid-col-8</div>
    </div>
    <div class="grid-col-3 border-1px border-left-0 border-black-cool-10">
      <div class="text-center padding-2">.grid-col-3</div>
    </div>
    <div class="grid-col-5 border-1px border-top-0 border-black-cool-10">
      <div class="text-center padding-2">.grid-col-5</div>
    </div>
  </div><!-- l.grid-row -->

<h2 id="gutters">Gutters</h2>

<h3>Default gutter</h3>
  <p class="font-sans-6 measure-3"><code class="docs-inline-code">.grid-gap</code> adds a grid-gap between grid-columns in the grid-row, to a value set as <code class="docs-inline-code">$theme-column-gap</code> in settings (16px default).</p>
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
  </div><!-- l.grid-row -->

  <div class="grid-row grid-gap margin-top-1">
    <div class="grid-col-4">
      <div class="text-center border-1px border-black-cool-10 padding-2">.grid-col-4</div>
    </div>
    <div class="grid-col-4">
      <div class="text-center border-1px border-black-cool-10 padding-2">.grid-col-4</div>
    </div>
    <div class="grid-col-4">
      <div class="text-center border-1px border-black-cool-10 padding-2">.grid-col-4</div>
    </div>
  </div><!-- l.grid-row -->

<h3>Large gutter</h3>
  <p class="font-sans-6 measure-3"><code class="docs-inline-code">.grid-gap-lg</code> adds a grid-gap between grid-columns in the grid-row, to a value set as <code class="docs-inline-code">$theme-column-gap-large</code> in settings (32px default).</p>

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
  </div><!-- l.grid-row -->

  <div class="grid-row grid-gap-lg margin-top-1">
    <div class="grid-col-4">
      <div class="text-center border-1px border-black-cool-10 padding-2">.grid-col-4</div>
    </div>
    <div class="grid-col-4">
      <div class="text-center border-1px border-black-cool-10 padding-2">.grid-col-4</div>
    </div>
    <div class="grid-col-4">
      <div class="text-center border-1px border-black-cool-10 padding-2">.grid-col-4</div>
    </div>
  </div><!-- l.grid-row -->

<div markdown="1" class="font-sans-6 measure-3">
<h2 id="sass-mixins">Sass mixins</h2>
When using the source Sass files, you have the option of using Sass variables and mixins to create custom, semantic, and responsive page layouts. Our predefined grid classes use these same variables and mixins to provide a whole suite of ready-to-use classes for fast responsive layouts.

### Variables
Variables and maps determine the number of columns, the gutter width, and the media query point at which to begin floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below.

```scss
$theme-column-gap:       16px;
$theme-column-gap-large: 32px;

$uswds-spacing: (
  large: (
    'card':      grid-units(20),  // 160px
    'card-lg':   grid-units(30),  // 240px
    'mobile':    grid-units(40),  // 320px
  ),
  larger: (
    'mobile-lg': grid-units(60),  // 480px
    'tablet':    grid-units(80),  // 640px
    'tablet-lg': grid-units(110), // 880px
  ),
  largest: (
    'desktop':   grid-units(128), // 1024px
    'desktop-lg':grid-units(150), // 1200px
    'widescreen':grid-units(175), // 1400px
  ),
);

$container-max-widths: $desktop;
```

### Mixins
Mixins are used in conjunction with the grid variables to generate semantic CSS for individual grid columns.

```scss
// Creates a wrapper for a series of columns
@include make-row();

// Make the element grid-ready (applying everything but the width)
@include make-col-ready();
@include make-col($size, $columns: $grid-columns);

// Get fancy by offsetting, or changing the sort order
@include make-col-offset($size, $columns: $grid-columns);
```

### Example usage
You can modify the variables to your own custom values, or just use the mixins with their default values. Here’s an example of using the default settings to create a two-column layout with a gap between.

```scss
.example-container {
  width: 800px;
  @include make-container();
}

.example-row {
  @include make-row();
}

.example-content-main {
  @include make-col-ready();

  @include media-breakpoint-up(mobile) {
    @include make-col(6);
  }
  @include media-breakpoint-up(desktop) {
    @include make-col(8);
  }
}

.example-content-secondary {
  @include make-col-ready();

  @include media-breakpoint-up(mobile) {
    @include make-col(6);
  }
  @include media-breakpoint-up(desktop) {
    @include make-col(4);
  }
}
```
</div>
</div><!-- div -->
