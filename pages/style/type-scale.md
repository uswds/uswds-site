---
permalink: style/type-scale/
layout: styleguide
title: Type scale
category: Style
lead: tk
type: docs
---

The 21-step numeric scale (`font-sans-1`{:.txt-code.margin-x-05}) is the scale common to any USWDS project.

The 9-step relative scale (`font-sans-3xs`{:.txt-code.bg-white.border-1px}) is project-specific — set in your project’s project settings — chosen from steps in the common scale.

This type scale is designed to accommodate any project typeface, regardless of its optical size, with minimal impact to component layout. To achieve this, the scale is regularized — each typeface has a different value at each step in the scale. The final pixel/rem sizes are different between faces so each step in the scale appears the same size to the end user, regardless of typeface.

<p class="line-height-sans-4 text-300 margin-bottom-6">Since each typeface has different type scale values, use <code class="txt-code">font-[type]-[value]</code> instead of <code class="txt-code">font-[value]</code>.</p>
<div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px">
  <div class="grid-col-4 text-700 font-sans-1">family-sans (United Sans)</div>
  <div class="grid-col-4 text-700 font-sans-1">family-serif (Georgia)</div>
  <div class="grid-col-4 text-700 font-sans-1">family-mono (Roboto Mono)</div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-micro line-height-sans-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-micro</code></div>
    <div class="padding-top-105 font-mono-1 text-700">10px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-micro line-height-serif-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-micro</code></div>
    <div class="padding-top-105 font-mono-1 text-300">10.46px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-micro line-height-mono-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-micro</code></div>
    <div class="padding-top-105 font-mono-1 text-300">9.53px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-1 line-height-sans-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-1</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-sans-3xs</code></div>
    <div class="padding-top-105 font-mono-1 text-700">12px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-1 line-height-serif-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-1</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px text-gray-90">font-serif-3xs</code></div>
    <div class="padding-top-105 font-mono-1 text-300">12.56px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-1 line-height-mono-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-1</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px text-gray-90">font-mono-3xs</code></div>
    <div class="padding-top-105 font-mono-1 text-300">11.43px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-2 line-height-sans-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-2</code></div>
    <div class="padding-top-105 font-mono-1 text-700">13px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-2 line-height-serif-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-2</code></div>
    <div class="padding-top-105 font-mono-1 text-300">13.60px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-2 line-height-mono-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-2</code></div>
    <div class="padding-top-105 font-mono-1 text-300">12.38px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-3 line-height-sans-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-3</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-sans-2xs</code></div>
    <div class="padding-top-105 font-mono-1 text-700">14px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-3 line-height-serif-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-3</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-serif-2xs</code></div>
    <div class="padding-top-105 font-mono-1 text-300">14.65px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-3 line-height-mono-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-3</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-mono-2xs</code></div>
    <div class="padding-top-105 font-mono-1 text-300">13.33px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-4 line-height-sans-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-4</code></div>
    <div class="padding-top-105 font-mono-1 text-700">15px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-4 line-height-serif-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-4</code></div>
    <div class="padding-top-105 font-mono-1 text-300">15.67px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-4 line-height-mono-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-4</code></div>
    <div class="padding-top-105 font-mono-1 text-300">14.28px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-5 line-height-sans-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-5</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-sans-xs</code></div>
    <div class="padding-top-105 font-mono-1 text-700">16px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-5 line-height-serif-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-5</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-serif-xs</code></div>
    <div class="padding-top-105 font-mono-1 text-300">16.74px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-5 line-height-mono-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-5</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-mono-xs</code></div>
    <div class="padding-top-105 font-mono-1 text-300">15.25px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-6 line-height-sans-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-6</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-sans-sm</code></div>
    <div class="padding-top-105 font-mono-1 text-700">17px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-6 line-height-serif-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-6</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-serif-sm</code></div>
    <div class="padding-top-105 font-mono-1 text-300">17.78px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-6 line-height-mono-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-6</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-mono-sm</code></div>
    <div class="padding-top-105 font-mono-1 text-300">16.20px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-7 line-height-sans-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-7</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-sans-md</code></div>
    <div class="padding-top-105 font-mono-1 text-700">18px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-7 line-height-serif-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-7</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-serif-md</code></div>
  <div class="padding-top-105 font-mono-1 text-300">18.83px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-7 line-height-mono-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-7</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-mono-md</code></div>
    <div class="padding-top-105 font-mono-1 text-300">17.15px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-8 line-height-sans-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-8</code></div>
    <div class="padding-top-105 font-mono-1 text-700">20px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-8 line-height-serif-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-8</code></div>
    <div class="padding-top-105 font-mono-1 text-300">20.92px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-8 line-height-mono-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-8</code></div>
    <div class="padding-top-105 font-mono-1 text-300">19.05px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-9 line-height-sans-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-9</code></div>
    <div class="padding-top-105 font-mono-1 text-700">22px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-9 line-height-serif-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-9</code></div>
    <div class="padding-top-105 font-mono-1 text-300">23.02px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-9 line-height-mono-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-9</code></div>
    <div class="padding-top-105 font-mono-1 text-300">20.95px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-10 line-height-sans-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-10</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-sans-lg</code></div>
  <div class="padding-top-105 font-mono-1 text-700">24px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-10 line-height-serif-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-10</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-serif-lg</code></div>
    <div class="padding-top-105 font-mono-1 text-300">25.10px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-10 line-height-mono-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-10</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-mono-lg</code></div>
    <div class="padding-top-105 font-mono-1 text-300">22.87px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-11 line-height-sans-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-11</code></div>
    <div class="padding-top-105 font-mono-1 text-700">28px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-11 line-height-serif-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-11</code></div>
    <div class="padding-top-105 font-mono-1 text-300">29.29px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-11 line-height-mono-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-11</code></div>
    <div class="padding-top-105 font-mono-1 text-300">26.67px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-12 line-height-sans-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-12</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-sans-xl</code></div>
    <div class="padding-top-105 font-mono-1 text-700">32px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-12 line-height-serif-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-12</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-serif-xl</code></div>
    <div class="padding-top-105 font-mono-1 text-300">33.48px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-12 line-height-mono-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-12</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-mono-xl</code></div>
    <div class="padding-top-105 font-mono-1 text-300">30.48px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-13 line-height-sans-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-13</code></div>
    <div class="padding-top-105 font-mono-1 text-700">36px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-13 line-height-serif-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-13</code></div>
    <div class="padding-top-105 font-mono-1 text-300">37.66px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-13 line-height-mono-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-13</code></div>
    <div class="padding-top-105 font-mono-1 text-300">34.3px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-14 line-height-sans-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-14</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-sans-2xl</code></div>
  <div class="padding-top-105 font-mono-1 text-700">40px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-14 line-height-serif-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-14</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-serif-2xl</code></div>
    <div class="padding-top-105 font-mono-1 text-300">41.85px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-14 line-height-mono-1 text-gray-90">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-14</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-mono-2xl</code></div>
    <div class="padding-top-105 font-mono-1 text-300">38.10px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-15 line-height-sans-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-15</code></div>
    <div class="padding-top-105 font-mono-1 text-700">48px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-15 line-height-serif-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-15</code></div>
    <div class="padding-top-105 font-mono-1 text-300">50.22px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-15 line-height-mono-1">Tuscaloosa</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-15</code></div>
    <div class="padding-top-105 font-mono-1 text-300">45.73px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-16 line-height-sans-1">Utica</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-16</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-sans-3xl</code></div>
    <div class="padding-top-105 font-mono-1 text-700">56px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-16 line-height-serif-1">Utica</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-16</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-serif-3xl</code></div>
  <div class="padding-top-105 font-mono-1 text-300">58.59px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-16 line-height-mono-1">Utica</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-16</code></div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 bg-white border-1px">font-mono-3xl</code></div>
  <div class="padding-top-105 font-mono-1 text-300">53.35px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-17 line-height-sans-1">Utica</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-17</code></div>
    <div class="padding-top-105 font-mono-1 text-700">64px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-17 line-height-serif-1">Utica</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-17</code></div>
    <div class="padding-top-105 font-mono-1 text-300">66.96px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-17 line-height-mono-1">Utica</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-17</code></div>
    <div class="padding-top-105 font-mono-1 text-300">60.97px</div>
  </div>
</div>

<div class="grid-row grid-gap flex-align-center text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-18 line-height-sans-1">Utica</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-18</code></div>
    <div class="padding-top-105 font-mono-1 text-700">80px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-18 line-height-serif-1">Utica</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-18</code></div>
    <div class="padding-top-105 font-mono-1 text-300">83.67px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-18 line-height-mono-1">Utica</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-18</code></div>
    <div class="padding-top-105 font-mono-1 text-300">76.22px</div>
  </div>
</div>

<div class="grid-row grid-gap text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-19 line-height-sans-1">LA</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-19</code></div>
    <div class="padding-top-105 font-mono-1 text-700">120px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-19 line-height-serif-1">LA</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-19</code></div>
    <div class="padding-top-105 font-mono-1 text-300">125.55px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-19 line-height-mono-1">LA</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-19</code></div>
    <div class="padding-top-105 font-mono-1 text-300">114.32px</div>
  </div>
</div>

<div class="grid-row grid-gap text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-sans-20 line-height-sans-1">LA</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-sans-20</code></div>
    <div class="padding-top-105 font-mono-1 text-700">140px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-serif-20 line-height-serif-1">LA</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-serif-20</code></div>
    <div class="padding-top-105 font-mono-1 text-300">146.47px</div>
  </div>
  <div class="grid-col-4 display-flex flex-column flex-justify-end">
    <div class="font-mono-20 line-height-mono-1">LA</div>
    <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">font-mono-20</code></div>
    <div class="padding-top-105 font-mono-1 text-300">133.37px</div>
  </div>
</div>

<div class="grid-row grid-gap-lg margin-top-4">
  <div class="grid-col-6 font-sans-6 line-height-sans-5 text-300">
    In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. I have a lurking suspicion that Leonidas W. Smiley is a myth; that my friend never knew such a personage; and that he only conjectured that, if I asked old Wheeler about him, it would remind him of his infamous Jim Smiley, and he would go to work and bore me nearly to death with some infernal reminiscence of him as long and tedious as it should be useless to me. If that was the design, it certainly succeeded.
  </div>
  <div class="grid-col-6 font-serif-6 line-height-serif-5">
    In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. I have a lurking suspicion that Leonidas W. Smiley is a myth; that my friend never knew such a personage; and that he only conjectured that, if I asked old Wheeler about him, it would remind him of his infamous Jim Smiley, and he would go to work and bore me nearly to death with some infernal reminiscence of him as long and tedious as it should be useless to me. If that was the design, it certainly succeeded.
  </div>
</div>
<div class="grid-row grid-gap-lg margin-top-2">
  <div class="grid-col-6 font-sans-6 line-height-sans-5 text-400">
    I found Simon Wheeler dozing comfortably by the bar-room stove of the old, dilapidated tavern in the ancient mining camp of Angel's, and I noticed that he was fat and bald-headed, and had an expression of winning gentleness and simplicity upon his tranquil countenance. He roused up and gave me good-day. I told him a friend of mine had commissioned me to make some inquiries about a cherished companion of his boyhood named Leonidas W. Smiley Rev. Leonidas W. Smiley a young minister of the Gospel, who he had heard was at one time a resident of Angel's Camp. I added that, if Mr. Wheeler could tell me any thing about this Rev. Leonidas W. Smiley, I would feel under many obligations to him.
  </div>
  <div class="grid-col-6 font-serif-6 line-height-serif-5">
    I found Simon Wheeler dozing comfortably by the bar-room stove of the old, dilapidated tavern in the ancient mining camp of Angel's, and I noticed that he was fat and bald-headed, and had an expression of winning gentleness and simplicity upon his tranquil countenance. He roused up and gave me good-day. I told him a friend of mine had commissioned me to make some inquiries about a cherished companion of his boyhood named Leonidas W. Smiley Rev. Leonidas W. Smiley a young minister of the Gospel, who he had heard was at one time a resident of Angel's Camp. I added that, if Mr. Wheeler could tell me any thing about this Rev. Leonidas W. Smiley, I would feel under many obligations to him.
  </div>
</div>
<div class="grid-row grid-gap-lg margin-top-4 padding-top-4 border-top">
  <div class="grid-col-4 font-sans-3 line-height-sans-5 text-400">
    <span class="prose-graf-intro">I found Simon Wheeler</span> dozing comfortably by the bar-room stove of the old, dilapidated tavern in the ancient mining camp of Angel's, and I noticed that he was fat and bald-headed, and had an expression of winning gentleness and simplicity upon his <span class="text-bold text-underline font-sans-3">tranquil countenance</span>. He roused up and gave me good-day. I told him a friend of mine had commissioned me to make some inquiries about a cherished companion of his boyhood named Leonidas W. Smiley Rev. Leonidas W. Smiley a young minister of the Gospel, who he had heard was at one time a resident of Angel's Camp. I added that, if Mr. Wheeler could tell me any thing about this Rev. Leonidas W. Smiley, <span class="text-italic">I would feel under many obligations to him.</span> <span class="token">EOF</span>
  </div>
  <div class="grid-col-4 font-serif-3 line-height-serif-5">
    <span class="prose-graf-intro">I found Simon Wheeler</span> dozing comfortably by the bar-room stove of the old, dilapidated tavern in the ancient mining camp of Angel's, and I noticed that he was fat and bald-headed, and had an expression of winning gentleness and simplicity upon his <span class="text-bold text-underline font-sans-3 cursor-pointer hover:text-red-warm-50v">tranquil countenance</span>. He roused up and gave me good-day. I told him a friend of mine had commissioned me to make some inquiries about a cherished companion of his boyhood named Leonidas W. Smiley Rev. Leonidas W. Smiley a young minister of the Gospel, who he had heard was at one time a resident of Angel's Camp. I added that, if Mr. Wheeler could tell me any thing about this Rev. Leonidas W. Smiley, <span class="text-italic">I would feel under many obligations to him.</span> <span class="token">EOF</span>
  </div>
  <div class="grid-col-4 font-mono-3 line-height-mono-5">
    <span class="prose-graf-intro">I found Simon Wheeler</span> dozing comfortably by the bar-room stove of the old, dilapidated tavern in the ancient mining camp of Angel's, and I noticed that he was fat and bald-headed, and had an expression of winning gentleness and simplicity upon his <span class="text-bold text-underline font-sans-3">tranquil countenance</span>. He roused up and gave me good-day. I told him a friend of mine had commissioned me to make some inquiries about a cherished companion of his boyhood named Leonidas W. Smiley Rev. Leonidas W. Smiley a young minister of the Gospel, who he had heard was at one time a resident of Angel's Camp. I added that, if Mr. Wheeler could tell me any thing about this Rev. Leonidas W. Smiley, <span class="text-italic">I would feel under many obligations to him.</span> <span class="token">EOF</span>
  </div>
</div>
