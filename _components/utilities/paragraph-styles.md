---
permalink: /utilities/paragraph-styles/
layout: styleguide
type: utility
title: Paragraph styles
category: Utilities
lead: Change the appearance of a block of text.
subnav:
- text: Line height
  href: '#line-height'
- text: Measure (max-width)
  href: '#max-width'
- text: Text alignment
  href: '#text-align'
- text: Text indent
  href: '#text-indent'

utilities:
- base:         line-height
  var:          line-height
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         measure
  var:          measure
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         text
  var:          text-align
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         text-indent
  var:          text-indent
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
---

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="token utilities-property">line-height</span>
    <span class="token utilities-property">max-width</span>
    <span class="token utilities-property">text-align</span>
    <span class="token utilities-property">text-indent</span>
  </div>
</div>

<section class="utilities-section">

  <div class="grid-row utilities-section-title-bar">
    <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-ink text-no-wrap">advanced settings</a>.</p>
  </div>

  <section class="line-height" id="line-height">
    <section class="utility">
      <section class="utility-title-bar">
        <div class="grid-row flex-align-center">
          <div class="grid-col-fill">
            <h3 class="grid-col-auto utility-title">Line height</h3>
            <p class="utility-property">CSS property: <span class="utility-property-code">line-height</span></p>
          </div>

          <ul class="utility-scope grid-col-auto">
            <li class="utility-scope-button-active"><a href="#responsive-variants">responsive</a></li>
            <li class="utility-scope-button-disabled">active</li>
            <li class="utility-scope-button-disabled">hover</li>
            <li class="utility-scope-button-disabled">focus</li>
            <li class="utility-scope-button-disabled">visited</li>
          </ul>
        </div>
      </section>

      <section class="padding-x-3">
        <div class="grid-row grid-gap margin-top-4">
          <div class="grid-col-4 margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1 font-mono-2xs text-secondary-vivid">sans</div>
          <div class="grid-col-4 margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1 font-mono-2xs text-secondary-vivid">serif</div>
          <div class="grid-col-4 margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1 font-mono-2xs text-secondary-vivid">mono</div>
        </div>
        <div class="grid-row grid-gap-lg">
          <div class="utility-example-container grid-col-4 display-flex flex-column flex-justify">
            <p class="font-sans-md line-height-sans-1 margin-top-0 text-bold border-y-1px border-secondary-light">Mark Twain</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-sans-1</p>
              <p class="utility-value">~1</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> buttons, navigation, and text not meant to break over a line</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-4 grid-gap display-flex flex-column flex-justify">
            <p class="font-serif-md line-height-serif-1 margin-top-0 text-bold border-y-1px border-secondary-light">Mark Twain</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-serif-1</p>
              <p class="utility-value">~1</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> buttons, navigation, and text not meant to break over a line</p>
            </div>
          </div>
          <div class="grid-col-4 grid-gap-lg display-flex flex-column flex-justify utility-example-container">
            <p class="font-mono-md line-height-mono-1 margin-top-0 text-bold border-y-1px border-secondary-light">Mark Twain</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-mono-1</p>
              <p class="utility-value">~1</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> buttons, navigation, and text not meant to break over a line</p>
            </div>
          </div>
        </div>

        <div class="grid-row grid-gap-lg">
          <div class="grid-col-4 display-flex flex-column flex-justify flex-align-start utility-example-container">
            <p class="font-sans-sm line-height-sans-2 margin-top-0 text-bold">The Celebrated Jumping Frog of Calaveras County</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-sans-2</p>
              <p class="utility-value">~1.15</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> introductory (dek) text, no more than 1-2 sentences</p>
            </div>
          </div>
          <div class="grid-col-4 grid-gap display-flex flex-column flex-justify flex-align-start utility-example-container">
            <p class="font-serif-sm line-height-serif-2 margin-top-0 text-bold">The Celebrated Jumping Frog of Calaveras County</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-serif-2</p>
              <p class="utility-value">~1.15</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> introductory (dek) text, no more than 1-2 sentences</p>
          </div>
          </div>
          <div class="grid-col-4 grid-gap-lg display-flex flex-column flex-justify flex-align-start utility-example-container">
            <p class="font-mono-sm line-height-mono-2 margin-top-0 text-bold">The Celebrated Jumping Frog of Calaveras County</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-mono-2</p>
              <p class="utility-value">~1.15</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> introductory (dek) text, no more than 1-2 sentences</p>
          </div>
          </div>
        </div>

        <div class="grid-row grid-gap-lg">
          <div class="grid-col-4 display-flex flex-column flex-justify flex-align-start utility-example-container">
            <p class="font-sans-2xs line-height-sans-3 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-sans-3</p>
              <p class="utility-value">~1.35</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> short text (under 1 paragraph), captions, text with a very short or very long measure</p>
            </div>
          </div>
          <div class="grid-col-4 grid-gap display-flex flex-column flex-justify flex-align-start utility-example-container">
            <p class="font-serif-2xs line-height-serif-3 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-serif-3</p>
              <p class="utility-value">~1.35</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> short text (under 1 paragraph), captions, text with a very short or very long measure</p>
            </div>
          </div>
          <div class="grid-col-4 grid-gap-lg display-flex flex-column flex-justify flex-align-start utility-example-container">
            <p class="font-mono-2xs line-height-mono-3 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-mono-3</p>
              <p class="utility-value">~1.35</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> short text (under 1 paragraph), captions, text with a very short or very long measure</p>
            </div>
          </div>
        </div>

        <div class="grid-row grid-gap-lg">
          <div class="grid-col-4 display-flex flex-column flex-justify flex-align-start utility-example-container">
            <p class="font-sans-2xs line-height-sans-4 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-sans-4</p>
              <p class="utility-value">~1.5</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> short (1-2 paragraphs) of running text, especially with a short measure</p>
            </div>
          </div>
          <div class="grid-col-4 grid-gap display-flex flex-column flex-justify flex-align-start utility-example-container">
            <p class="font-serif-2xs line-height-serif-4 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-serif-4</p>
              <p class="utility-value">~1.5</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> short (1-2 paragraphs) of running text, especially with a short measure</p>
            </div>
          </div>
          <div class="grid-col-4 grid-gap-lg display-flex flex-column flex-justify flex-align-start utility-example-container">
            <p class="font-mono-2xs line-height-mono-4 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-mono-4</p>
              <p class="utility-value">~1.5</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> short (1-2 paragraphs) of running text, especially with a short measure</p>
            </div>
          </div>
        </div>

        <div class="grid-row grid-gap-lg">
          <div class="grid-col-4 display-flex flex-column flex-justify flex-align-start utility-example-container">
            <p class="font-sans-2xs line-height-sans-5 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-sans-5</p>
              <p class="utility-value">~1.62</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> a good choice for most reading text, especially text meant for extended reading</p>
            </div>
          </div>
          <div class="grid-col-4 grid-gap display-flex flex-column flex-justify flex-align-start utility-example-container">
            <p class="font-serif-2xs line-height-serif-5 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-serif-5</p>
              <p class="utility-value">~1.62</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> a good choice for most reading text, especially text meant for extended reading</p>
            </div>
          </div>
          <div class="grid-col-4 grid-gap-lg display-flex flex-column flex-justify flex-align-start utility-example-container">
            <p class="font-mono-2xs line-height-mono-5 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-mono-5</p>
              <p class="utility-value">~1.62</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> a good choice for most reading text, especially text meant for extended reading</p>
            </div>
          </div>
        </div>

        <div class="grid-row grid-gap-lg">
          <div class="grid-col-4 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-gray-5 padding-bottom-1">
            <p class="font-sans-2xs line-height-sans-6 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-sans-6</p>
              <p class="utility-value">~1.75</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> shorter text (1-2 paragraphs) meant to be distinguished from other page text, pullquotes</p>
            </div>
          </div>
          <div class="grid-col-4 grid-gap display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-gray-5 padding-bottom-1">
            <p class="font-serif-2xs line-height-serif-6 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-serif-6</p>
              <p class="utility-value">~1.75</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> shorter text (1-2 paragraphs) meant to be distinguished from other page text, pullquotes</p>
            </div>
          </div>
          <div class="grid-col-4 grid-gap-lg display-flex flex-column flex-justify flex-align-start margin-bottom-2 padding-bottom-1">
            <p class="font-mono-2xs line-height-mono-6 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-mono-6</p>
              <p class="utility-value">~1.75</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> shorter text (1-2 paragraphs) meant to be distinguished from other page text, pullquotes</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>

  <section class="max-width" id="max-width">
    <section class="utility">
      <section class="utility-title-bar">
        <div class="grid-row flex-align-center">
          <div class="grid-col-fill">
            <h3 class="grid-col-auto utility-title">Measure</h3>
            <p class="utility-property">CSS property: <span class="utility-property-code">max-width</span></p>
          </div>

          <ul class="grid-col-auto utility-scope">
            <li class="utility-scope-button-active"><a href="#responsive-variants">responsive</a></li>
            <li class="utility-scope-button-disabled">active</li>
            <li class="utility-scope-button-disabled">hover</li>
            <li class="utility-scope-button-disabled">focus</li>
            <li class="utility-scope-button-disabled">visited</li>
          </ul>
        </div>
      </section>

      <section class="padding-x-3">
        <div class="grid-row grid-gap-lg">
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-md line-height-serif-4 margin-top-0 measure-1 border-bottom-05 border-secondary-light padding-bottom-05 margin-bottom-2">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.measure-1</p>
              <p class="utility-value">40ch</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> shorter text (1-2 paragraphs) meant to be distinguished from other page text, pullquotes</p>
            </div>
          </div>
        </div>

        <div class="grid-row grid-gap-lg">
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-md line-height-serif-4 margin-top-0 measure-2 border-bottom-05 border-secondary-light padding-bottom-05 margin-bottom-2">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.measure-2</p>
              <p class="utility-value">60ch</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> a snappy reading line for quick-reading text</p>
            </div>
          </div>
        </div>

        <div class="grid-row grid-gap-lg">
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-md line-height-serif-4 margin-top-0 measure-3 border-bottom-05 border-secondary-light padding-bottom-05 margin-bottom-2">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.measure-3</p>
              <p class="utility-value">66ch</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> an all-purpose reading line for most longform text</p>
            </div>
          </div>
        </div>

        <div class="grid-row grid-gap-lg">
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-md line-height-serif-4 margin-top-0 measure-4 border-bottom-05 border-secondary-light padding-bottom-05 margin-bottom-2">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.measure-4</p>
              <p class="utility-value">72ch</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> a longer line for longform text, particularly in larger sizes</p>
            </div>
          </div>
        </div>

        <div class="grid-row grid-gap-lg">
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-md line-height-serif-4 margin-top-0 measure-5 border-bottom-05 border-secondary-light padding-bottom-05 margin-bottom-2">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.measure-5</p>
              <p class="utility-value">77ch</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> an extra-long line sometimes useful for short text (less than 1 paragaph) or captions</p>
            </div>
          </div>
        </div>

        <div class="grid-row grid-gap-lg">
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start border-0 margin-bottom-0">
            <p class="font-serif-md line-height-serif-4 margin-top-0 measure-none border-bottom-05 border-secondary-light padding-bottom-05 margin-bottom-2">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.measure-none</p>
              <p class="utility-value">no maximum width</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>

  <section class="text-align" id="text-align">
    <section class="utility">
      <section class="utility-title-bar">
        <div class="grid-row flex-align-center">
          <div class="grid-col-fill">
            <h3 class="grid-col-auto utility-title">Text alignment</h3>
            <p class="utility-property">CSS property: <span class="utility-property-code">text-align</span></p>
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

      <section class="margin-x-3">
        <div class="grid-row grid-gap-lg">
          <div class="grid-col-3 grid-gap-lg display-flex flex-column flex-justify flex-align-start padding-bottom-1">
            <p class="font-serif-2xs line-height-serif-4 margin-top-0 text-left">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <p class="utility-class">.text-left</p>
          </div>
          <div class="grid-col-3 grid-gap-lg display-flex flex-column flex-justify flex-align-start padding-bottom-1">
            <p class="font-serif-2xs line-height-serif-4 margin-top-0 text-center">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <p class="utility-class">.text-center</p>

          </div>
          <div class="grid-col-3 grid-gap-lg display-flex flex-column flex-justify flex-align-start padding-bottom-1">
            <p class="font-serif-2xs line-height-serif-4 margin-top-0 text-right">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <p class="utility-class text-right">.text-right</p>

          </div>

          <div class="grid-col-3 grid-gap-lg display-flex flex-column flex-justify flex-align-start padding-bottom-1">
            <p class="font-serif-2xs line-height-serif-4 margin-top-0 text-justify">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
            <p class="utility-class">.text-justify</p>

          </div>
        </div>
      </section>
    </section>
  </section>

  <section class="text-indent" id="text-indent">
    <section class="utility">
      <section class="utility-title-bar">
        <div class="grid-row flex-align-center">
          <div class="grid-col-fill">
            <h3 class="grid-col-auto utility-title">Text indent</h3>
            <p class="utility-property">CSS property: <span class="utility-property-code">text-indent</span></p>
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

      <section class="padding-x-3">
        <div class="grid-row grid-gap-lg">
          <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start utility-example-container">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-neg-9">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre">  </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-neg-9</p>
              <p class="utility-value">-72px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-neg-8">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-neg-8</p>
              <p class="utility-value">-64px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-neg-7">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-neg-7</p>
              <p class="utility-value">-56px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-neg-6">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-neg-6</p>
              <p class="utility-value">-48px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-neg-5">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-neg-5</p>
              <p class="utility-value">-40px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-neg-4">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-neg-4</p>
              <p class="utility-value">-32px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-neg-3">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-neg-3</p>
              <p class="utility-value">-24px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-neg-205">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-neg-205</p>
              <p class="utility-value">-20px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-neg-2">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-neg-2</p>
              <p class="utility-value">-16px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-neg-105">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-neg-105</p>
              <p class="utility-value">-12px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-neg-1">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-neg-1</p>
              <p class="utility-value">-8px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-neg-05">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-neg-05</p>
              <p class="utility-value">-4px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-0</p>
              <p class="utility-value">0</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-05">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-05</p>
              <p class="utility-value">4px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-1">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-1</p>
              <p class="utility-value">8px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-105">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-105</p>
              <p class="utility-value">12px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-2">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-2</p>
              <p class="utility-value">16px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-205">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-205</p>
              <p class="utility-value">20px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-3">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-3</p>
              <p class="utility-value">24px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-4">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-4</p>
              <p class="utility-value">32px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-5">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-5</p>
              <p class="utility-value">40px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-6">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-6</p>
              <p class="utility-value">48px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-7">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-7</p>
              <p class="utility-value">56px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-8">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-8</p>
              <p class="utility-value">64px</p>
            </div>
          </div>
          <div class="utility-example-container grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-0 border-0">
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-9 text-indent-9">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre"> </span></span></p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.text-indent-9</p>
              <p class="utility-value">72px</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>
</section>

<section class="utilities-section">
  <h2 class="utilities-section-title">Default output</h2>
  <div class="grid-row utilities-output-heading">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-6">Output SCSS</div>
    <div class="grid-col-2">Default variable value</div>
  </div>
  <dl class="output-list">
    <dt class="output-utility">.line-height-sans-1</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(sans, 1)</span></span>
    </dd>
    <dd class="output-variable">0.94</dd>

    <dt class="output-utility">.line-height-serif-1</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(serif, 1)</span></span>
    </dd>
    <dd class="output-variable">1.06</dd>

    <dt class="output-utility">.line-height-mono-1</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(mono, 1)</span></span>
    </dd>
    <dd class="output-variable">1.05</dd>

    <dt class="output-utility">.line-height-sans-2</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(sans, 2)</span></span>
    </dd>
    <dd class="output-variable">1.08</dd>

    <dt class="output-utility">.line-height-serif-2</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(serif, 2)</span></span>
    </dd>
    <dd class="output-variable">1.22</dd>

    <dt class="output-utility">.line-height-mono-2</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(mono, 2)</span></span>
    </dd>
    <dd class="output-variable">1.21</dd>

    <dt class="output-utility">.line-height-sans-3</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(sans, 3)</span></span>
    </dd>
    <dd class="output-variable">1.27</dd>

    <dt class="output-utility">.line-height-serif-3</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(serif, 3)</span></span>
    </dd>
    <dd class="output-variable">1.44</dd>

    <dt class="output-utility">.line-height-mono-3</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(mono, 3)</span></span>
    </dd>
    <dd class="output-variable">1.42</dd>

    <dt class="output-utility">.line-height-sans-4</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(sans, 4)</span></span>
    </dd>
    <dd class="output-variable">1.41</dd>

    <dt class="output-utility">.line-height-serif-4</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(serif, 4)</span></span>
    </dd>
    <dd class="output-variable">1.60</dd>

    <dt class="output-utility">.line-height-mono-4</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(mono, 4)</span></span>
    </dd>
    <dd class="output-variable">1.57</dd>

    <dt class="output-utility">.line-height-sans-5</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(sans, 5)</span></span>
    </dd>
    <dd class="output-variable">1.52</dd>

    <dt class="output-utility">.line-height-serif-5</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(serif, 5)</span></span>
    </dd>
    <dd class="output-variable">1.72</dd>

    <dt class="output-utility">.line-height-mono-5</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(mono, 5)</span></span>
    </dd>
    <dd class="output-variable">1.70</dd>

    <dt class="output-utility">.line-height-sans-6</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(sans, 6)</span></span>
    </dd>
    <dd class="output-variable">1.64</dd>

    <dt class="output-utility">.line-height-serif-6</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(serif, 6)</span></span>
    </dd>
    <dd class="output-variable">1.86</dd>

    <dt class="output-utility">.line-height-mono-6</dt>
    <dd class="output-css">
      <span class="output-rule">line-height: <span class="output-token">lh(mono, 6)</span></span>
    </dd>
    <dd class="output-variable">1.84</dd>

    <dt class="output-utility">.measure-1</dt>
    <dd class="output-css">
      <span class="output-rule">max-width: 40ch</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.measure-2</dt>
    <dd class="output-css">
      <span class="output-rule">max-width: 60ch</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.measure-3</dt>
    <dd class="output-css">
      <span class="output-rule">max-width: 66ch</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.measure-4</dt>
    <dd class="output-css">
      <span class="output-rule">max-width: 72ch</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.measure-5</dt>
    <dd class="output-css">
      <span class="output-rule">max-width: 77ch</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.measure-none</dt>
    <dd class="output-css">
      <span class="output-rule">max-width: none</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-left</dt>
    <dd class="output-css">
      <span class="output-rule">text-align: left</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-center</dt>
    <dd class="output-css">
      <span class="output-rule">text-align: center</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-right</dt>
    <dd class="output-css">
      <span class="output-rule">text-align: right</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-justify</dt>
    <dd class="output-css">
      <span class="output-rule">text-align: justify</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-indent-neg-9</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(-9)</span></span>
    </dd>
    <dd class="output-variable">-72px</dd>

    <dt class="output-utility">.text-indent-neg-8</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(-8)</span></span>
    </dd>
    <dd class="output-variable">-64px</dd>

    <dt class="output-utility">.text-indent-neg-7</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(-7)</span></span>
    </dd>
    <dd class="output-variable">-56px</dd>

    <dt class="output-utility">.text-indent-neg-6</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(-6)</span></span>
    </dd>
    <dd class="output-variable">-48px</dd>

    <dt class="output-utility">.text-indent-neg-5</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(-5)</span></span>
    </dd>
    <dd class="output-variable">-40px</dd>

    <dt class="output-utility">.text-indent-neg-4</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(-4)</span></span>
    </dd>
    <dd class="output-variable">-32px</dd>

    <dt class="output-utility">.text-indent-neg-3</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(-3)</span></span>
    </dd>
    <dd class="output-variable">-24px</dd>

    <dt class="output-utility">.text-indent-neg-205</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(-2.5)</span></span>
    </dd>
    <dd class="output-variable">-20px</dd>

    <dt class="output-utility">.text-indent-neg-2</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(-2)</span></span>
    </dd>
    <dd class="output-variable">-16px</dd>

    <dt class="output-utility">.text-indent-neg-105</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(-1.5)</span></span>
    </dd>
    <dd class="output-variable">-12px</dd>

    <dt class="output-utility">.text-indent-neg-1</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(-1)</span></span>
    </dd>
    <dd class="output-variable">-8px</dd>

    <dt class="output-utility">.text-indent-neg-05</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(-0.5)</span></span>
    </dd>
    <dd class="output-variable">-4px</dd>

    <dt class="output-utility">.text-indent-0</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: 0</span>
    </dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-indent-05</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(0.5)</span></span>
    </dd>
    <dd class="output-variable">4px</dd>

    <dt class="output-utility">.text-indent-1</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(1)</span></span>
    </dd>
    <dd class="output-variable">8px</dd>

    <dt class="output-utility">.text-indent-105</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(1.5)</span></span>
    </dd>
    <dd class="output-variable">12px</dd>

    <dt class="output-utility">.text-indent-2</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(2)</span></span>
    </dd>
    <dd class="output-variable">16px</dd>

    <dt class="output-utility">.text-indent-205</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(2.5)</span></span>
    </dd>
    <dd class="output-variable">20px</dd>

    <dt class="output-utility">.text-indent-3</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(3)</span></span>
    </dd>
    <dd class="output-variable">24px</dd>

    <dt class="output-utility">.text-indent-4</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(4)</span></span>
    </dd>
    <dd class="output-variable">32px</dd>

    <dt class="output-utility">.text-indent-5</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(5)</span></span>
    </dd>
    <dd class="output-variable">40px</dd>

    <dt class="output-utility">.text-indent-6</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(6)</span></span>
    </dd>
    <dd class="output-variable">48px</dd>

    <dt class="output-utility">.text-indent-7</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(7)</span></span>
    </dd>
    <dd class="output-variable">56px</dd>

    <dt class="output-utility">.text-indent-8</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(8)</span></span>
    </dd>
    <dd class="output-variable">64px</dd>

    <dt class="output-utility">.text-indent-9</dt>
    <dd class="output-css">
      <span class="output-rule">text-indent: <span class="output-token">units(9)</span></span>
    </dd>
    <dd class="output-variable">72px</dd>

  </dl>
</section>

<section id="advanced-settings" class="padding-top-4">
  <h2 class="margin-y-0">Advanced settings</h2>

  {% include utilities/responsive-variants.html %}
  {% include utilities/state-variants.html %}
  {% include utilities/output-control.html %}

  <section class="utilities-section margin-top-6">
    {% include utilities/values-intro.html %}

    <aside class="example border-left-05 border-secondary-light padding-left-105 margin-top-2">
      <h4 class="font-sans-2xs margin-top-0 margin-bottom-05">Example</h4>
<pre class="font-mono-xs margin-0 padding-0 bg-transparent">
$text-indent-palettes: (
  $palette-spacing-uswds-small-negative // note: no trailing comma
);
</pre>
    <h4 class="font-sans-2xs margin-top-2 margin-bottom-05">Output</h4>
<pre class=" font-mono-xs margin-0 padding-0 bg-transparent">
.text-indent-neg-05  { text-indent: -.25rem; }
.text-indent-neg-1   { text-indent: -.5rem; }
.text-indent-neg-105 { text-indent: -.75rem; }
.text-indent-neg-2   { text-indent: -1rem; }
.text-indent-neg-205 { text-indent: -1.25rem; }
.text-indent-neg-3   { text-indent: -1.5rem; }
</pre>
    </aside>
    {% include utilities/spacing-palettes.html %}
  </section>
</section>
