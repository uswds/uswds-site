---
permalink: /style-tokens/order/
layout: styleguide
title: Order
category: Style tokens
lead: Use order tokens to set the order of an item in a flex container.
type: docs
subnav:
- text: Order tokens
  href: '#order-tokens'
- text: Using order tokens
  href: '#using-order-tokens'
---

## Order tokens

{:.bg-gold-20v.padding-2.radius-md}
**Note:** Ordered items are only ordered among other ordered items. Any unordered siblings will be ordered by their appearance in the DOM. Siblings sharing the same order will all appear at the specified position in the order in which they appear in the DOM.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px font-mono-3">
  <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Token</div>
    <div class="grid-col-8 text-700 font-sans-1">Example</div>
    <div class="grid-col-fill text-700 font-sans-1">Output</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>'initial'</code></div>
    <div class="grid-col-8 grid-row grid-gap-sm">
      <div class="grid-col order-1">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">1</span>
      </div>
      <div class="grid-col order-2">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">2</span>
      </div>
      <div class="grid-col order-3">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">3</span>
      </div>
      <div class="grid-col order-4">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">4</span>
      </div>
      <div class="grid-col order-5">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">5</span>
      </div>
      <div class="grid-col order-6">
        <span class="bg-secondary border border-secondary text-white width-full display-inline-block radius-sm text-center padding-y-05">6</span>
      </div>
      <div class="grid-col order-7">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">7</span>
      </div>
      <div class="grid-col order-8">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">8</span>
      </div>
      <div class="grid-col order-9">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">9</span>
      </div>
      <div class="grid-col order-10">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">10</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">11</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">12</span>
      </div>
    </div>
    <div class="grid-col-fill">initial</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>'first'</code></div>
    <div class="grid-col-8 grid-row grid-gap-sm">
      <div class="grid-col">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">1</span>
      </div>
      <div class="grid-col">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">2</span>
      </div>
      <div class="grid-col">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">3</span>
      </div>
      <div class="grid-col">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">4</span>
      </div>
      <div class="grid-col">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">5</span>
      </div>
      <div class="grid-col order-first">
        <span class="bg-secondary border border-secondary text-white width-full display-inline-block radius-sm text-center padding-y-05">6</span>
      </div>
      <div class="grid-col">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">7</span>
      </div>
      <div class="grid-col">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">8</span>
      </div>
      <div class="grid-col">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">9</span>
      </div>
      <div class="grid-col">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">10</span>
      </div>
      <div class="grid-col">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">11</span>
      </div>
      <div class="grid-col">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">12</span>
      </div>
    </div>
    <div class="grid-col-fill">-1</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>1</code></div>
    <div class="grid-col-8 grid-row grid-gap-sm">
      <div class="grid-col order-1">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">1</span>
      </div>
      <div class="grid-col order-2">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">2</span>
      </div>
      <div class="grid-col order-3">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">3</span>
      </div>
      <div class="grid-col order-4">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">4</span>
      </div>
      <div class="grid-col order-5">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">5</span>
      </div>
      <div class="grid-col order-1">
        <span class="bg-secondary border border-secondary text-white width-full display-inline-block radius-sm text-center padding-y-05">6</span>
      </div>
      <div class="grid-col order-7">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">7</span>
      </div>
      <div class="grid-col order-8">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">8</span>
      </div>
      <div class="grid-col order-9">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">9</span>
      </div>
      <div class="grid-col order-10">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">10</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">11</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">12</span>
      </div>
    </div>
    <div class="grid-col-fill">1</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>2</code></div>
    <div class="grid-col-8 grid-row grid-gap-sm">
      <div class="grid-col order-1">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">1</span>
      </div>
      <div class="grid-col order-2">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">2</span>
      </div>
      <div class="grid-col order-3">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">3</span>
      </div>
      <div class="grid-col order-4">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">4</span>
      </div>
      <div class="grid-col order-5">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">5</span>
      </div>
      <div class="grid-col order-2">
        <span class="bg-secondary border border-secondary text-white width-full display-inline-block radius-sm text-center padding-y-05">6</span>
      </div>
      <div class="grid-col order-7">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">7</span>
      </div>
      <div class="grid-col order-8">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">8</span>
      </div>
      <div class="grid-col order-9">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">9</span>
      </div>
      <div class="grid-col order-10">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">10</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">11</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">12</span>
      </div>
    </div>
    <div class="grid-col-fill">2</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>3</code></div>
    <div class="grid-col-8 grid-row grid-gap-sm">
      <div class="grid-col order-1">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">1</span>
      </div>
      <div class="grid-col order-2">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">2</span>
      </div>
      <div class="grid-col order-3">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">3</span>
      </div>
      <div class="grid-col order-4">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">4</span>
      </div>
      <div class="grid-col order-5">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">5</span>
      </div>
      <div class="grid-col order-3">
        <span class="bg-secondary border border-secondary text-white width-full display-inline-block radius-sm text-center padding-y-05">6</span>
      </div>
      <div class="grid-col order-7">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">7</span>
      </div>
      <div class="grid-col order-8">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">8</span>
      </div>
      <div class="grid-col order-9">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">9</span>
      </div>
      <div class="grid-col order-10">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">10</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">11</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">12</span>
      </div>
    </div>
    <div class="grid-col-fill">3</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>4</code></div>
    <div class="grid-col-8 grid-row grid-gap-sm">
      <div class="grid-col order-1">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">1</span>
      </div>
      <div class="grid-col order-2">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">2</span>
      </div>
      <div class="grid-col order-3">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">3</span>
      </div>
      <div class="grid-col order-4">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">4</span>
      </div>
      <div class="grid-col order-5">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">5</span>
      </div>
      <div class="grid-col order-4">
        <span class="bg-secondary border border-secondary text-white width-full display-inline-block radius-sm text-center padding-y-05">6</span>
      </div>
      <div class="grid-col order-7">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">7</span>
      </div>
      <div class="grid-col order-8">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">8</span>
      </div>
      <div class="grid-col order-9">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">9</span>
      </div>
      <div class="grid-col order-10">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">10</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">11</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">12</span>
      </div>
    </div>
    <div class="grid-col-fill">4</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>5</code></div>
    <div class="grid-col-8 grid-row grid-gap-sm">
      <div class="grid-col order-1">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">1</span>
      </div>
      <div class="grid-col order-2">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">2</span>
      </div>
      <div class="grid-col order-3">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">3</span>
      </div>
      <div class="grid-col order-4">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">4</span>
      </div>
      <div class="grid-col order-5">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">5</span>
      </div>
      <div class="grid-col order-5">
        <span class="bg-secondary border border-secondary text-white width-full display-inline-block radius-sm text-center padding-y-05">6</span>
      </div>
      <div class="grid-col order-7">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">7</span>
      </div>
      <div class="grid-col order-8">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">8</span>
      </div>
      <div class="grid-col order-9">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">9</span>
      </div>
      <div class="grid-col order-10">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">10</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">11</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">12</span>
      </div>
    </div>
    <div class="grid-col-fill">5</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>6</code></div>
    <div class="grid-col-8 grid-row grid-gap-sm">
      <div class="grid-col order-1">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">1</span>
      </div>
      <div class="grid-col order-2">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">2</span>
      </div>
      <div class="grid-col order-3">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">3</span>
      </div>
      <div class="grid-col order-4">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">4</span>
      </div>
      <div class="grid-col order-5">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">5</span>
      </div>
      <div class="grid-col order-6">
        <span class="bg-secondary border border-secondary text-white width-full display-inline-block radius-sm text-center padding-y-05">6</span>
      </div>
      <div class="grid-col order-7">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">7</span>
      </div>
      <div class="grid-col order-8">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">8</span>
      </div>
      <div class="grid-col order-9">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">9</span>
      </div>
      <div class="grid-col order-10">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">10</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">11</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">12</span>
      </div>
    </div>
    <div class="grid-col-fill">6</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>7</code></div>
    <div class="grid-col-8 grid-row grid-gap-sm">
      <div class="grid-col order-1">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">1</span>
      </div>
      <div class="grid-col order-2">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">2</span>
      </div>
      <div class="grid-col order-3">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">3</span>
      </div>
      <div class="grid-col order-4">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">4</span>
      </div>
      <div class="grid-col order-5">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">5</span>
      </div>
      <div class="grid-col order-7">
        <span class="bg-secondary border border-secondary text-white width-full display-inline-block radius-sm text-center padding-y-05">6</span>
      </div>
      <div class="grid-col order-7">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">7</span>
      </div>
      <div class="grid-col order-8">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">8</span>
      </div>
      <div class="grid-col order-9">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">9</span>
      </div>
      <div class="grid-col order-10">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">10</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">11</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">12</span>
      </div>
    </div>
    <div class="grid-col-fill">7</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>8</code></div>
    <div class="grid-col-8 grid-row grid-gap-sm">
      <div class="grid-col order-1">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">1</span>
      </div>
      <div class="grid-col order-2">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">2</span>
      </div>
      <div class="grid-col order-3">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">3</span>
      </div>
      <div class="grid-col order-4">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">4</span>
      </div>
      <div class="grid-col order-5">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">5</span>
      </div>
      <div class="grid-col order-8">
        <span class="bg-secondary border border-secondary text-white width-full display-inline-block radius-sm text-center padding-y-05">6</span>
      </div>
      <div class="grid-col order-7">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">7</span>
      </div>
      <div class="grid-col order-8">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">8</span>
      </div>
      <div class="grid-col order-9">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">9</span>
      </div>
      <div class="grid-col order-10">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">10</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">11</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">12</span>
      </div>
    </div>
    <div class="grid-col-fill">8</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>9</code></div>
    <div class="grid-col-8 grid-row grid-gap-sm">
      <div class="grid-col order-1">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">1</span>
      </div>
      <div class="grid-col order-2">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">2</span>
      </div>
      <div class="grid-col order-3">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">3</span>
      </div>
      <div class="grid-col order-4">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">4</span>
      </div>
      <div class="grid-col order-5">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">5</span>
      </div>
      <div class="grid-col order-9">
        <span class="bg-secondary border border-secondary text-white width-full display-inline-block radius-sm text-center padding-y-05">6</span>
      </div>
      <div class="grid-col order-7">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">7</span>
      </div>
      <div class="grid-col order-8">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">8</span>
      </div>
      <div class="grid-col order-9">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">9</span>
      </div>
      <div class="grid-col order-10">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">10</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">11</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">12</span>
      </div>
    </div>
    <div class="grid-col-fill">9</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>10</code></div>
    <div class="grid-col-8 grid-row grid-gap-sm">
      <div class="grid-col order-1">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">1</span>
      </div>
      <div class="grid-col order-2">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">2</span>
      </div>
      <div class="grid-col order-3">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">3</span>
      </div>
      <div class="grid-col order-4">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">4</span>
      </div>
      <div class="grid-col order-5">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">5</span>
      </div>
      <div class="grid-col order-10">
        <span class="bg-secondary border border-secondary text-white width-full display-inline-block radius-sm text-center padding-y-05">6</span>
      </div>
      <div class="grid-col order-7">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">7</span>
      </div>
      <div class="grid-col order-8">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">8</span>
      </div>
      <div class="grid-col order-9">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">9</span>
      </div>
      <div class="grid-col order-10">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">10</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">11</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">12</span>
      </div>
    </div>
    <div class="grid-col-fill">10</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>11</code></div>
    <div class="grid-col-8 grid-row grid-gap-sm">
      <div class="grid-col order-1">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">1</span>
      </div>
      <div class="grid-col order-2">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">2</span>
      </div>
      <div class="grid-col order-3">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">3</span>
      </div>
      <div class="grid-col order-4">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">4</span>
      </div>
      <div class="grid-col order-5">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">5</span>
      </div>
      <div class="grid-col order-11">
        <span class="bg-secondary border border-secondary text-white width-full display-inline-block radius-sm text-center padding-y-05">6</span>
      </div>
      <div class="grid-col order-7">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">7</span>
      </div>
      <div class="grid-col order-8">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">8</span>
      </div>
      <div class="grid-col order-9">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">9</span>
      </div>
      <div class="grid-col order-10">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">10</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">11</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">12</span>
      </div>
    </div>
    <div class="grid-col-fill">11</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-2"><code>'last'</code></div>
    <div class="grid-col-8 grid-row grid-gap-sm">
      <div class="grid-col order-1">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">1</span>
      </div>
      <div class="grid-col order-2">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">2</span>
      </div>
      <div class="grid-col order-3">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">3</span>
      </div>
      <div class="grid-col order-4">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">4</span>
      </div>
      <div class="grid-col order-5">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">5</span>
      </div>
      <div class="grid-col order-last">
        <span class="bg-secondary border border-secondary text-white width-full display-inline-block radius-sm text-center padding-y-05">6</span>
      </div>
      <div class="grid-col order-7">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">7</span>
      </div>
      <div class="grid-col order-8">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">8</span>
      </div>
      <div class="grid-col order-9">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">9</span>
      </div>
      <div class="grid-col order-10">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">10</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">11</span>
      </div>
      <div class="grid-col order-11">
        <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">12</span>
      </div>
    </div>
    <div class="grid-col-fill">999</div>
  </div>


</div>

## Using order tokens
Your context and coding style determine how you access USWDS order tokens in code.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Context</div>
    <div class="grid-col-5 text-700 font-sans-1">Usage</div>
    <div class="grid-col-5 text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">function
    </div>
    <div class="grid-col-5">order: order(<a href="{{ site.baseurl }}/style-tokens/order/" class="token">order</a>)</div>
    <div class="grid-col-5">
      order: order(<code>'last'</code>);
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">
      mixin
    </div>
    <div class="grid-col-5">@include u-order(<a href="{{ site.baseurl }}/style-tokens/order/" class="token">order</a>)</div>
    <div class="grid-col-5">@include u-order(<code>'last'</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">setting</div>
    <div class="grid-col-5">$theme-variable: <a href="{{ site.baseurl }}/style-tokens/order/" class="token">order</a></div>
    <div class="grid-col-5">$theme-nav-item-order: <code>'last'</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility
    </div>
    <div class="grid-col-5">.order-<a href="{{ site.baseurl }}/style-tokens/order/" class="token">order</a></div>
    <div class="grid-col-5">.order-<code>last</code>;</div>
  </div>
</div>
