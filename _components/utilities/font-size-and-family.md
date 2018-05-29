---
permalink: /utilities/font-size-and-family/
layout: styleguide
type: utility
title: Font size and family
category: Utilities
lead: Set the font size and the font family together. Font size is typeface-dependent, normalized to a base value derived from system faces.
---

<div class="line-height-sans-1 usa-content">
  <p class="line-height-sans-4 text-300 margin-bottom-2">The 21-step numeric scale (<code class="txt-code margin-x-05">size-sans-1</code>) is the scale common to any USWDS project.</p>
  <p class="line-height-sans-4 text-300 margin-bottom-2">The 9-step relative scale (<code class="txt-code bg-white border-1px margin-x-05">size-sans-3xs</code>) is project-specific — set in your project’s project settings — chosen from steps in the common scale.</p>
  <p class="line-height-sans-4 text-300 margin-bottom-2">This type scale is designed to accommodate any project typeface, regardless of its optical size, with minimal impact to component layout. To achieve this, the scale is regularized — each typeface has a different value at each step in the scale. The final pixel/rem sizes are different between faces so each step in the scale appears the same size to the end user, regardless of typeface.</p>
  <p class="line-height-sans-4 text-300 margin-bottom-6">Since each typeface has different type scale values, use <code class="txt-code">size-[type]-[value]</code> instead of <code class="txt-code">size-[value]</code>.</p>
  <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px">
    <div class="grid-col-4 text-700 size-sans-1">family-sans (United Sans)</div>
    <div class="grid-col-4 text-700 size-sans-1">family-serif (Georgia)</div>
    <div class="grid-col-4 text-700 size-sans-1">family-mono (Roboto Mono)</div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-micro line-height-sans-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-micro</code></div>
      <div class="padding-top-105 size-mono-1 text-700">10px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-micro line-height-serif-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-micro</code></div>
      <div class="padding-top-105 size-mono-1 text-300">10.46px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-micro line-height-mono-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-micro</code></div>
      <div class="padding-top-105 size-mono-1 text-300">9.53px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-1 line-height-sans-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-1</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-sans-3xs</code></div>
      <div class="padding-top-105 size-mono-1 text-700">12px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-1 line-height-serif-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-1</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px text-gray-90">size-serif-3xs</code></div>
      <div class="padding-top-105 size-mono-1 text-300">12.56px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-1 line-height-mono-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-1</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px text-gray-90">size-mono-3xs</code></div>
      <div class="padding-top-105 size-mono-1 text-300">11.43px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-2 line-height-sans-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-2</code></div>
      <div class="padding-top-105 size-mono-1 text-700">13px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-2 line-height-serif-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-2</code></div>
      <div class="padding-top-105 size-mono-1 text-300">13.60px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-2 line-height-mono-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-2</code></div>
      <div class="padding-top-105 size-mono-1 text-300">12.38px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-3 line-height-sans-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-3</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-sans-2xs</code></div>
      <div class="padding-top-105 size-mono-1 text-700">14px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-3 line-height-serif-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-3</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-serif-2xs</code></div>
      <div class="padding-top-105 size-mono-1 text-300">14.65px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-3 line-height-mono-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-3</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-mono-2xs</code></div>
      <div class="padding-top-105 size-mono-1 text-300">13.33px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-4 line-height-sans-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-4</code></div>
      <div class="padding-top-105 size-mono-1 text-700">15px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-4 line-height-serif-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-4</code></div>
      <div class="padding-top-105 size-mono-1 text-300">15.67px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-4 line-height-mono-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-4</code></div>
      <div class="padding-top-105 size-mono-1 text-300">14.28px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-5 line-height-sans-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-5</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-sans-xs</code></div>
      <div class="padding-top-105 size-mono-1 text-700">16px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-5 line-height-serif-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-5</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-serif-xs</code></div>
      <div class="padding-top-105 size-mono-1 text-300">16.74px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-5 line-height-mono-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-5</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-mono-xs</code></div>
      <div class="padding-top-105 size-mono-1 text-300">15.25px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-6 line-height-sans-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-6</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-sans-sm</code></div>
      <div class="padding-top-105 size-mono-1 text-700">17px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-6 line-height-serif-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-6</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-serif-sm</code></div>
      <div class="padding-top-105 size-mono-1 text-300">17.78px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-6 line-height-mono-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-6</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-mono-sm</code></div>
      <div class="padding-top-105 size-mono-1 text-300">16.20px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-7 line-height-sans-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-7</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-sans-md</code></div>
      <div class="padding-top-105 size-mono-1 text-700">18px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-7 line-height-serif-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-7</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-serif-md</code></div>
    <div class="padding-top-105 size-mono-1 text-300">18.83px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-7 line-height-mono-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-7</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-mono-md</code></div>
      <div class="padding-top-105 size-mono-1 text-300">17.15px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-8 line-height-sans-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-8</code></div>
      <div class="padding-top-105 size-mono-1 text-700">20px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-8 line-height-serif-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-8</code></div>
      <div class="padding-top-105 size-mono-1 text-300">20.92px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-8 line-height-mono-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-8</code></div>
      <div class="padding-top-105 size-mono-1 text-300">19.05px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-9 line-height-sans-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-9</code></div>
      <div class="padding-top-105 size-mono-1 text-700">22px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-9 line-height-serif-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-9</code></div>
      <div class="padding-top-105 size-mono-1 text-300">23.02px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-9 line-height-mono-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-9</code></div>
      <div class="padding-top-105 size-mono-1 text-300">20.95px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-10 line-height-sans-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-10</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-sans-lg</code></div>
    <div class="padding-top-105 size-mono-1 text-700">24px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-10 line-height-serif-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-10</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-serif-lg</code></div>
      <div class="padding-top-105 size-mono-1 text-300">25.10px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-10 line-height-mono-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-10</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-mono-lg</code></div>
      <div class="padding-top-105 size-mono-1 text-300">22.87px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-11 line-height-sans-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-11</code></div>
      <div class="padding-top-105 size-mono-1 text-700">28px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-11 line-height-serif-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-11</code></div>
      <div class="padding-top-105 size-mono-1 text-300">29.29px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-11 line-height-mono-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-11</code></div>
      <div class="padding-top-105 size-mono-1 text-300">26.67px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-12 line-height-sans-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-12</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-sans-xl</code></div>
      <div class="padding-top-105 size-mono-1 text-700">32px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-12 line-height-serif-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-12</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-serif-xl</code></div>
      <div class="padding-top-105 size-mono-1 text-300">33.48px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-12 line-height-mono-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-12</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-mono-xl</code></div>
      <div class="padding-top-105 size-mono-1 text-300">30.48px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-13 line-height-sans-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-13</code></div>
      <div class="padding-top-105 size-mono-1 text-700">36px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-13 line-height-serif-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-13</code></div>
      <div class="padding-top-105 size-mono-1 text-300">37.66px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-13 line-height-mono-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-13</code></div>
      <div class="padding-top-105 size-mono-1 text-300">34.3px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-14 line-height-sans-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-14</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-sans-2xl</code></div>
    <div class="padding-top-105 size-mono-1 text-700">40px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-14 line-height-serif-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-14</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-serif-2xl</code></div>
      <div class="padding-top-105 size-mono-1 text-300">41.85px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-14 line-height-mono-1 text-gray-90">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-14</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-mono-2xl</code></div>
      <div class="padding-top-105 size-mono-1 text-300">38.10px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-15 line-height-sans-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-15</code></div>
      <div class="padding-top-105 size-mono-1 text-700">48px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-15 line-height-serif-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-15</code></div>
      <div class="padding-top-105 size-mono-1 text-300">50.22px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-15 line-height-mono-1">Tuscaloosa</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-15</code></div>
      <div class="padding-top-105 size-mono-1 text-300">45.73px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-16 line-height-sans-1">Utica</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-16</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-sans-3xl</code></div>
      <div class="padding-top-105 size-mono-1 text-700">56px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-16 line-height-serif-1">Utica</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-16</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-serif-3xl</code></div>
    <div class="padding-top-105 size-mono-1 text-300">58.59px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-16 line-height-mono-1">Utica</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-16</code></div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2 bg-white border-1px">size-mono-3xl</code></div>
    <div class="padding-top-105 size-mono-1 text-300">53.35px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-17 line-height-sans-1">Utica</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-17</code></div>
      <div class="padding-top-105 size-mono-1 text-700">64px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-17 line-height-serif-1">Utica</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-17</code></div>
      <div class="padding-top-105 size-mono-1 text-300">66.96px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-17 line-height-mono-1">Utica</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-17</code></div>
      <div class="padding-top-105 size-mono-1 text-300">60.97px</div>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-18 line-height-sans-1">Utica</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-18</code></div>
      <div class="padding-top-105 size-mono-1 text-700">80px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-18 line-height-serif-1">Utica</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-18</code></div>
      <div class="padding-top-105 size-mono-1 text-300">83.67px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-18 line-height-mono-1">Utica</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-18</code></div>
      <div class="padding-top-105 size-mono-1 text-300">76.22px</div>
    </div>
  </div>

  <div class="grid-row grid-gap text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-19 line-height-sans-1">LA</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-19</code></div>
      <div class="padding-top-105 size-mono-1 text-700">120px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-19 line-height-serif-1">LA</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-19</code></div>
      <div class="padding-top-105 size-mono-1 text-300">125.55px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-19 line-height-mono-1">LA</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-19</code></div>
      <div class="padding-top-105 size-mono-1 text-300">114.32px</div>
    </div>
  </div>

  <div class="grid-row grid-gap text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-sans-20 line-height-sans-1">LA</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-sans-20</code></div>
      <div class="padding-top-105 size-mono-1 text-700">140px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-serif-20 line-height-serif-1">LA</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-serif-20</code></div>
      <div class="padding-top-105 size-mono-1 text-300">146.47px</div>
    </div>
    <div class="grid-col-4 display-flex flex-column flex-justify-end">
      <div class="size-mono-20 line-height-mono-1">LA</div>
      <div class="size-mono-1 padding-top-2"><code class="txt-code size-mono-2">size-mono-20</code></div>
      <div class="padding-top-105 size-mono-1 text-300">133.37px</div>
    </div>
  </div>

  <div class="grid-row grid-gap-lg margin-top-4">
    <div class="grid-col-6 size-sans-6 line-height-sans-5 text-300">
      In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. I have a lurking suspicion that Leonidas W. Smiley is a myth; that my friend never knew such a personage; and that he only conjectured that, if I asked old Wheeler about him, it would remind him of his infamous Jim Smiley, and he would go to work and bore me nearly to death with some infernal reminiscence of him as long and tedious as it should be useless to me. If that was the design, it certainly succeeded.
    </div>
    <div class="grid-col-6 size-serif-6 line-height-serif-5">
      In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. I have a lurking suspicion that Leonidas W. Smiley is a myth; that my friend never knew such a personage; and that he only conjectured that, if I asked old Wheeler about him, it would remind him of his infamous Jim Smiley, and he would go to work and bore me nearly to death with some infernal reminiscence of him as long and tedious as it should be useless to me. If that was the design, it certainly succeeded.
    </div>
  </div>
  <div class="grid-row grid-gap-lg margin-top-2">
    <div class="grid-col-6 size-sans-6 line-height-sans-5 text-400">
      I found Simon Wheeler dozing comfortably by the bar-room stove of the old, dilapidated tavern in the ancient mining camp of Angel's, and I noticed that he was fat and bald-headed, and had an expression of winning gentleness and simplicity upon his tranquil countenance. He roused up and gave me good-day. I told him a friend of mine had commissioned me to make some inquiries about a cherished companion of his boyhood named Leonidas W. Smiley Rev. Leonidas W. Smiley a young minister of the Gospel, who he had heard was at one time a resident of Angel's Camp. I added that, if Mr. Wheeler could tell me any thing about this Rev. Leonidas W. Smiley, I would feel under many obligations to him.
    </div>
    <div class="grid-col-6 size-serif-6 line-height-serif-5">
      I found Simon Wheeler dozing comfortably by the bar-room stove of the old, dilapidated tavern in the ancient mining camp of Angel's, and I noticed that he was fat and bald-headed, and had an expression of winning gentleness and simplicity upon his tranquil countenance. He roused up and gave me good-day. I told him a friend of mine had commissioned me to make some inquiries about a cherished companion of his boyhood named Leonidas W. Smiley Rev. Leonidas W. Smiley a young minister of the Gospel, who he had heard was at one time a resident of Angel's Camp. I added that, if Mr. Wheeler could tell me any thing about this Rev. Leonidas W. Smiley, I would feel under many obligations to him.
    </div>
  </div>
  <div class="grid-row grid-gap-lg margin-top-4 padding-top-4 border-top">
    <div class="grid-col-4 size-sans-3 line-height-sans-5 text-400">
      <span class="prose-graf-intro">I found Simon Wheeler</span> dozing comfortably by the bar-room stove of the old, dilapidated tavern in the ancient mining camp of Angel's, and I noticed that he was fat and bald-headed, and had an expression of winning gentleness and simplicity upon his <span class="text-bold text-underline size-sans-3">tranquil countenance</span>. He roused up and gave me good-day. I told him a friend of mine had commissioned me to make some inquiries about a cherished companion of his boyhood named Leonidas W. Smiley Rev. Leonidas W. Smiley a young minister of the Gospel, who he had heard was at one time a resident of Angel's Camp. I added that, if Mr. Wheeler could tell me any thing about this Rev. Leonidas W. Smiley, <span class="text-italic">I would feel under many obligations to him.</span> <span class="token">EOF</span>
    </div>
    <div class="grid-col-4 size-serif-3 line-height-serif-5">
      <span class="prose-graf-intro">I found Simon Wheeler</span> dozing comfortably by the bar-room stove of the old, dilapidated tavern in the ancient mining camp of Angel's, and I noticed that he was fat and bald-headed, and had an expression of winning gentleness and simplicity upon his <span class="text-bold text-underline size-sans-3 cursor-pointer hover:text-red-warm-50v">tranquil countenance</span>. He roused up and gave me good-day. I told him a friend of mine had commissioned me to make some inquiries about a cherished companion of his boyhood named Leonidas W. Smiley Rev. Leonidas W. Smiley a young minister of the Gospel, who he had heard was at one time a resident of Angel's Camp. I added that, if Mr. Wheeler could tell me any thing about this Rev. Leonidas W. Smiley, <span class="text-italic">I would feel under many obligations to him.</span> <span class="token">EOF</span>
    </div>
    <div class="grid-col-4 size-mono-3 line-height-mono-5">
      <span class="prose-graf-intro">I found Simon Wheeler</span> dozing comfortably by the bar-room stove of the old, dilapidated tavern in the ancient mining camp of Angel's, and I noticed that he was fat and bald-headed, and had an expression of winning gentleness and simplicity upon his <span class="text-bold text-underline size-sans-3">tranquil countenance</span>. He roused up and gave me good-day. I told him a friend of mine had commissioned me to make some inquiries about a cherished companion of his boyhood named Leonidas W. Smiley Rev. Leonidas W. Smiley a young minister of the Gospel, who he had heard was at one time a resident of Angel's Camp. I added that, if Mr. Wheeler could tell me any thing about this Rev. Leonidas W. Smiley, <span class="text-italic">I would feel under many obligations to him.</span> <span class="token">EOF</span>
    </div>
  </div>
</div>
