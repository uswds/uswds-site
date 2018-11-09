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
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

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
    <span class="property utilities-property">line-height</span>
    <span class="property utilities-property">max-width</span>
    <span class="property utilities-property">text-align</span>
    <span class="property utilities-property">text-indent</span>
  </div>
</div>

<section class="utilities-section">

  <div class="grid-row utilities-section-title-bar">
    <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#advanced-settings" class="text-ink text-no-wrap">advanced settings</a>.</p>
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
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> headings, introductory (lead or dek) text, no more than 1-2 sentences</p>
            </div>
          </div>
          <div class="grid-col-4 grid-gap display-flex flex-column flex-justify flex-align-start utility-example-container">
            <p class="font-serif-sm line-height-serif-2 margin-top-0 text-bold">The Celebrated Jumping Frog of Calaveras County</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-serif-2</p>
              <p class="utility-value">~1.15</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> headings, introductory (lead or dek) text, no more than 1-2 sentences</p>
          </div>
          </div>
          <div class="grid-col-4 grid-gap-lg display-flex flex-column flex-justify flex-align-start utility-example-container">
            <p class="font-mono-sm line-height-mono-2 margin-top-0 text-bold">The Celebrated Jumping Frog of Calaveras County</p>
            <div class="display-flex flex-column flex-align-start">
              <p class="utility-class">.line-height-mono-2</p>
              <p class="utility-value">~1.15</p>
              <p class="margin-0 margin-top-1 font-sans-3xs"><strong>usage:</strong> headings, introductory (lead or dek) text, no more than 1-2 sentences</p>
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

<section id="utility-mixins" class="padding-top-4">
  <h2 class="site-h2 margin-y-0">Utility mixins</h2>
  {% include utilities/utility-mixin-intro.html %}

  <table class="usa-table-borderless site-table-responsive site-table-simple">
    <thead>
      <tr>
        <th scope="col" class="tablet:maxw-card-lg">Utility</th>
        <th scope="col">Mixin</th>
        <th scope="col">Example</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      <tr>
        <td scope="row" data-title="Utility" class="tablet:maxw-card-lg">
          <span>
            .line-height-<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>-<a href="{{ site.baseurl }}/style-tokens/typesetting/line-height/" class="token">line-height</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-line-height(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/line-height/" class="token">line-height</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-line-height('heading', 2)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .measure-<a href="{{ site.baseurl }}/style-tokens/typesetting/measure/" class="token">measure</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-measure(<a href="{{ site.baseurl }}/style-tokens/typesetting/measure/" class="token">measure</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-measure(6)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .text-<code>alignment</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-text('<code>alignment</code>')
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-text('right')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .text-indent-<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-text-indent(<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-text-indent(-4)
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
