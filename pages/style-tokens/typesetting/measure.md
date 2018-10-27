---
permalink: /style-tokens/typesetting/measure/
layout: styleguide
title: Measure (line length)
category: Style tokens
lead: USWDS has 6 measure tokens to control the reading length of lines in a block of text.
type: docs
subnav:
- text: Measure tokens
  href: '#line-height-tokens'
- text: Using measure tokens
  href: '#using-line-height-tokens'
---

## Measure tokens
Measure is output in `ch` units, where `1ch` is equivalent to the width of a 'zero' (`0`) character in the desired font. The first section of each example below is 9 alphabets long.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px font-mono-3">
  <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-1 text-700 font-sans-1">Token</div>
    <div class="grid-col-10 text-700 font-sans-1">Example</div>
    <div class="grid-col-fill text-700 font-sans-1">Output</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-1"><code>1</code></div>
    <div class="grid-col-10 font-sans-1">
      <div class="measure-1">
        <strong>1</strong> c e g i k m o q s u w y <strong>2</strong> c e g i k m o q s u w y <strong>3</strong> c e g i k m o q s u w y <strong>4</strong> c e g i k m o q s u w y <strong>5</strong> c e g i k m o q s u w y <strong>6</strong> c e g i k m o q s u w y <strong>7</strong> c e g i k m o q s u w y <strong>8</strong> c e g i k m o q s u w y <strong>9</strong> c e g i k m o q s u w y
      </div>
      <div class="measure-1 margin-top-2">
        You never see a frog so modest and straightforward as he was, for all he was so gifted. And when it come to fair and square jumping on a dead level, he could get over more ground at one straddle than any animal of his breed you ever see. Jumping on a dead level was his strong suit, you understand; and when it come to that, Smiley would ante up money on him as long as he had a red. Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled and been everywheres, all said he laid over any frog that ever they see.
      </div>
    </div>
    <div class="grid-col-fill font-mono-3">40ch</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-1"><code>2</code></div>
    <div class="grid-col-10 font-sans-1">
      <div class="measure-2">
        <strong>1</strong> c e g i k m o q s u w y <strong>2</strong> c e g i k m o q s u w y <strong>3</strong> c e g i k m o q s u w y <strong>4</strong> c e g i k m o q s u w y <strong>5</strong> c e g i k m o q s u w y <strong>6</strong> c e g i k m o q s u w y <strong>7</strong> c e g i k m o q s u w y <strong>8</strong> c e g i k m o q s u w y <strong>9</strong> c e g i k m o q s u w y
      </div>
      <div class="measure-2 margin-top-2">
        You never see a frog so modest and straightforward as he was, for all he was so gifted. And when it come to fair and square jumping on a dead level, he could get over more ground at one straddle than any animal of his breed you ever see. Jumping on a dead level was his strong suit, you understand; and when it come to that, Smiley would ante up money on him as long as he had a red. Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled and been everywheres, all said he laid over any frog that ever they see.
      </div>
    </div>
    <div class="grid-col-fill font-mono-3">60ch</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-1"><code>3</code></div>
    <div class="grid-col-10 font-sans-1">
      <div class="measure-3">
        <strong>1</strong> c e g i k m o q s u w y <strong>2</strong> c e g i k m o q s u w y <strong>3</strong> c e g i k m o q s u w y <strong>4</strong> c e g i k m o q s u w y <strong>5</strong> c e g i k m o q s u w y <strong>6</strong> c e g i k m o q s u w y <strong>7</strong> c e g i k m o q s u w y <strong>8</strong> c e g i k m o q s u w y <strong>9</strong> c e g i k m o q s u w y
      </div>
      <div class="measure-3 margin-top-2">
        You never see a frog so modest and straightforward as he was, for all he was so gifted. And when it come to fair and square jumping on a dead level, he could get over more ground at one straddle than any animal of his breed you ever see. Jumping on a dead level was his strong suit, you understand; and when it come to that, Smiley would ante up money on him as long as he had a red. Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled and been everywheres, all said he laid over any frog that ever they see.
      </div>
    </div>
    <div class="grid-col-fill font-mono-3">66ch</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-1"><code>4</code></div>
    <div class="grid-col-10 font-sans-1">
      <div class="measure-4">
        <strong>1</strong> c e g i k m o q s u w y <strong>2</strong> c e g i k m o q s u w y <strong>3</strong> c e g i k m o q s u w y <strong>4</strong> c e g i k m o q s u w y <strong>5</strong> c e g i k m o q s u w y <strong>6</strong> c e g i k m o q s u w y <strong>7</strong> c e g i k m o q s u w y <strong>8</strong> c e g i k m o q s u w y <strong>9</strong> c e g i k m o q s u w y
      </div>
      <div class="measure-4 margin-top-2">
        You never see a frog so modest and straightforward as he was, for all he was so gifted. And when it come to fair and square jumping on a dead level, he could get over more ground at one straddle than any animal of his breed you ever see. Jumping on a dead level was his strong suit, you understand; and when it come to that, Smiley would ante up money on him as long as he had a red. Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled and been everywheres, all said he laid over any frog that ever they see.
      </div>
    </div>
    <div class="grid-col-fill font-mono-3">72ch</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2 margin-bottom-2 border-bottom border-gray-10">
    <div class="grid-col-1"><code>5</code></div>
    <div class="grid-col-10 font-sans-1">
      <div class="measure-5">
        <strong>1</strong> c e g i k m o q s u w y <strong>2</strong> c e g i k m o q s u w y <strong>3</strong> c e g i k m o q s u w y <strong>4</strong> c e g i k m o q s u w y <strong>5</strong> c e g i k m o q s u w y <strong>6</strong> c e g i k m o q s u w y <strong>7</strong> c e g i k m o q s u w y <strong>8</strong> c e g i k m o q s u w y <strong>9</strong> c e g i k m o q s u w y
      </div>
      <div class="measure-5 margin-top-2">
        You never see a frog so modest and straightforward as he was, for all he was so gifted. And when it come to fair and square jumping on a dead level, he could get over more ground at one straddle than any animal of his breed you ever see. Jumping on a dead level was his strong suit, you understand; and when it come to that, Smiley would ante up money on him as long as he had a red. Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled and been everywheres, all said he laid over any frog that ever they see.
      </div>
    </div>
    <div class="grid-col-fill font-mono-3">77ch</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-2">
    <div class="grid-col-1"><code>'none'</code></div>
    <div class="grid-col-10 font-sans-1">
      <div class="measure-none">
        <strong>1</strong> c e g i k m o q s u w y <strong>2</strong> c e g i k m o q s u w y <strong>3</strong> c e g i k m o q s u w y <strong>4</strong> c e g i k m o q s u w y <strong>5</strong> c e g i k m o q s u w y <strong>6</strong> c e g i k m o q s u w y <strong>7</strong> c e g i k m o q s u w y <strong>8</strong> c e g i k m o q s u w y <strong>9</strong> c e g i k m o q s u w y
      </div>
      <div class="measure-none margin-top-2">
        You never see a frog so modest and straightforward as he was, for all he was so gifted. And when it come to fair and square jumping on a dead level, he could get over more ground at one straddle than any animal of his breed you ever see. Jumping on a dead level was his strong suit, you understand; and when it come to that, Smiley would ante up money on him as long as he had a red. Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled and been everywheres, all said he laid over any frog that ever they see.
      </div>
    </div>
    <div class="grid-col-fill font-mono-3">—</div>
  </div>
</div>

## Using measure tokens
Your context and coding style determine how you access USWDS measure tokens in code.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Context</div>
    <div class="grid-col-5 text-700 font-sans-1">Usage</div>
    <div class="grid-col-5 text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">function
    </div>
    <div class="grid-col-5">max-width: measure(<a href="{{ site.baseurl }}/style-tokens/typesetting/measure/" class="token">measure</a>)</div>
    <div class="grid-col-5">
      max-width: measure(<code>3</code>);
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">
      mixin
    </div>
    <div class="grid-col-5">@include u-measure(<a href="{{ site.baseurl }}/style-tokens/typesetting/measure/" class="token">measure</a>)</div>
    <div class="grid-col-5">@include u-measure(<code>'none'</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">setting</div>
    <div class="grid-col-5">$theme-variable: <a href="{{ site.baseurl }}/style-tokens/typesetting/measure/" class="token">measure</a></div>
    <div class="grid-col-5">$theme-body-measure: <code>4</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility
    </div>
    <div class="grid-col-5">.measure-<a href="{{ site.baseurl }}/style-tokens/typesetting/measure/" class="token">measure</a></div>
    <div class="grid-col-5">.measure-<code>3</code>;</div>
  </div>
</div>
