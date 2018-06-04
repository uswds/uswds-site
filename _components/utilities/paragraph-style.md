---
permalink: /utilities/paragraph-style/
layout: styleguide
type: utility
title: Paragraph style
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
---

<div class="font-sans-4 weight-300">

  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="token utilities-property">line-height</span>
    <span class="token utilities-property">max-width</span>
    <span class="token utilities-property">text-align</span>
    <span class="token utilities-property">text-indent</span>
  </div>

  <section class="utilities-section">

    <div class="grid-row utilities-section-title-bar">
      <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
      <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-text text-no-wrap">advanced settings</a>.</p>
    </div>

    <section class="line-height" id="line-height">
      <section class="utility">
        <section class="utility-title-bar">
          <div class="grid-row flex-align-center">
            <h3 class="grid-col-auto utility-title">Line height</h3>

            <ul class="utility-scope grid-col-fill">
              <li class="display-inline"><a href="#0" class="utility-scope-button-active">responsive</a></li>
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
            <div class="grid-col-4 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-3">
              <p class="font-sans-md line-height-sans-1 margin-top-0 text-bold">The Celebrated Jumping Frog of Calaveras County</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-sans-1</p>
                <p class="utility-value">~1</p>
              </div>
            </div>
            <div class="grid-col-4 grid-gap display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-3">
              <p class="font-serif-md line-height-serif-1 margin-top-0 text-bold">The Celebrated Jumping Frog of Calaveras County</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-serif-1</p>
                <p class="utility-value">~1</p>
              </div>
            </div>
            <div class="grid-col-4 grid-gap-lg display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-3">
              <p class="font-mono-md line-height-mono-1 margin-top-0 text-bold">The Celebrated Jumping Frog of Calaveras County</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-mono-1</p>
                <p class="utility-value">~1</p>
              </div>
            </div>
          </div>

          <div class="grid-row grid-gap-lg">
            <div class="grid-col-4 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-3">
              <p class="font-sans-sm line-height-sans-2 margin-top-0 text-bold">The Celebrated Jumping Frog of Calaveras County</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-sans-2</p>
                <p class="utility-value">~1.15</p>
              </div>
            </div>
            <div class="grid-col-4 grid-gap display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-3">
              <p class="font-serif-sm line-height-serif-2 margin-top-0 text-bold">The Celebrated Jumping Frog of Calaveras County</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-serif-2</p>
                <p class="utility-value">~1.15</p>
              </div>
            </div>
            <div class="grid-col-4 grid-gap-lg display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-3">
              <p class="font-mono-sm line-height-mono-2 margin-top-0 text-bold">The Celebrated Jumping Frog of Calaveras County</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-mono-2</p>
                <p class="utility-value">~1.15</p>
              </div>
            </div>
          </div>

          <div class="grid-row grid-gap-lg">
            <div class="grid-col-4 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-3">
              <p class="font-sans-2xs line-height-sans-3 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-sans-3</p>
                <p class="utility-value">~1.35</p>
              </div>
            </div>
            <div class="grid-col-4 grid-gap display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-3">
              <p class="font-serif-2xs line-height-serif-3 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-serif-3</p>
                <p class="utility-value">~1.35</p>
              </div>
            </div>
            <div class="grid-col-4 grid-gap-lg display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-3">
              <p class="font-mono-2xs line-height-mono-3 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-mono-3</p>
                <p class="utility-value">~1.35</p>
              </div>
            </div>
          </div>

          <div class="grid-row grid-gap-lg">
            <div class="grid-col-4 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-3">
              <p class="font-sans-2xs line-height-sans-4 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-sans-4</p>
                <p class="utility-value">~1.5</p>
              </div>
            </div>
            <div class="grid-col-4 grid-gap display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-3">
              <p class="font-serif-2xs line-height-serif-4 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-serif-4</p>
                <p class="utility-value">~1.5</p>
              </div>
            </div>
            <div class="grid-col-4 grid-gap-lg display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-3">
              <p class="font-mono-2xs line-height-mono-4 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-mono-4</p>
                <p class="utility-value">~1.5</p>
              </div>
            </div>
          </div>

          <div class="grid-row grid-gap-lg">
            <div class="grid-col-4 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-3">
              <p class="font-sans-2xs line-height-sans-5 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-sans-5</p>
                <p class="utility-value">~1.63</p>
              </div>
            </div>
            <div class="grid-col-4 grid-gap display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-3">
              <p class="font-serif-2xs line-height-serif-5 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-serif-5</p>
                <p class="utility-value">~1.63</p>
              </div>
            </div>
            <div class="grid-col-4 grid-gap-lg display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-3">
              <p class="font-mono-2xs line-height-mono-5 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-mono-5</p>
                <p class="utility-value">~1.63</p>
              </div>
            </div>
          </div>

          <div class="grid-row grid-gap-lg">
            <div class="grid-col-4 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-gray-5 padding-bottom-1">
              <p class="font-sans-2xs line-height-sans-6 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-sans-6</p>
                <p class="utility-value">~1.75</p>
              </div>
            </div>
            <div class="grid-col-4 grid-gap display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-gray-5 padding-bottom-1">
              <p class="font-serif-2xs line-height-serif-6 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-serif-6</p>
                <p class="utility-value">~1.75</p>
              </div>
            </div>
            <div class="grid-col-4 grid-gap-lg display-flex flex-column flex-justify flex-align-start margin-bottom-2 padding-bottom-1">
              <p class="font-mono-2xs line-height-mono-6 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <div class="display-flex flex-column flex-align-start">
                <p class="utility-class">.line-height-mono-6</p>
                <p class="utility-value">~1.75</p>
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
            <h3 class="grid-col-fill utility-title">Measure (max-width)</h3>

            <ul class="grid-col-auto utility-scope">
              <li class="display-inline"><a href="#0" class="utility-scope-button-active">responsive</a></li>
              <li class="utility-scope-button-disabled">active</li>
              <li class="utility-scope-button-disabled">hover</li>
              <li class="utility-scope-button-disabled">focus</li>
              <li class="utility-scope-button-disabled">visited</li>
            </ul>
          </div>
        </section>

        <section class="padding-x-3">
          <div class="grid-row grid-gap-lg">
            <div class="grid-col-12 grid-gap-lg display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-md line-height-serif-4 margin-top-0 measure-1 border-bottom-05 border-secondary-light padding-bottom-05 margin-bottom-05">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <p class="margin-top-0 margin-bottom-05"><span class="font-mono-2xs text-gray-50">40ch</span></p>
              <div>
                <p class="margin-0">.measure-1</p>
              </div>
            </div>
          </div>

          <div class="grid-row grid-gap-lg">
            <div class="grid-col-12 grid-gap-lg display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-md line-height-serif-4 margin-top-0 measure-2 border-bottom-05 border-secondary-light padding-bottom-05 margin-bottom-05">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <p class="margin-top-0 margin-bottom-05"><span class="font-mono-2xs text-gray-50">60ch</span></p>
              <div>
                <p class="margin-0">.measure-2</p>
              </div>
            </div>
          </div>

          <div class="grid-row grid-gap-lg">
            <div class="grid-col-12 grid-gap-lg display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-md line-height-serif-4 margin-top-0 measure-3 border-bottom-05 border-secondary-light padding-bottom-05 margin-bottom-05">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <p class="margin-top-0 margin-bottom-05"><span class="font-mono-2xs text-gray-50">66ch</span></p>
              <div>
                <p class="margin-0">.measure-3</p>
              </div>
            </div>
          </div>

          <div class="grid-row grid-gap-lg">
            <div class="grid-col-12 grid-gap-lg display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-md line-height-serif-4 margin-top-0 measure-4 border-bottom-05 border-secondary-light padding-bottom-05 margin-bottom-05">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <p class="margin-top-0 margin-bottom-05"><span class="font-mono-2xs text-gray-50">72ch</span></p>
              <div>
                <p class="margin-0">.measure-4</p>
              </div>
            </div>
          </div>

          <div class="grid-row grid-gap-lg">
            <div class="grid-col-12 grid-gap-lg display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-md line-height-serif-4 margin-top-0 measure-5 border-bottom-05 border-secondary-light padding-bottom-05 margin-bottom-05">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <p class="margin-top-0 margin-bottom-05"><span class="font-mono-2xs text-gray-50">77ch</span></p>
              <div>
                <p class="margin-0">.measure-5</p>
              </div>
            </div>
          </div>

          <div class="grid-row grid-gap-lg">
            <div class="grid-col-12 grid-gap-lg display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-md line-height-serif-4 margin-top-0 measure-none border-bottom-05 border-secondary-light padding-bottom-05 margin-bottom-05">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              <p class="margin-top-0 margin-bottom-05"><span class="font-mono-2xs text-gray-50">No maximum width</span></p>
              <div>
                <p class="margin-0">.measure-none</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>

    <section class="text-align" id="text-align">
      <section class="utility">
        <section class="utility-title-bar">
          <div class="grid-row">
            <h3 class="grid-col-fill utility-title">Text alignment</h3>

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
            <div class="grid-col-3 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-2xs line-height-serif-4 margin-top-0 text-left">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-2xs text-red">.text-left</span></p>
            </div>
            <div class="grid-col-3 grid-gap display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-2xs line-height-serif-4 margin-top-0 text-center">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-2xs text-red">.text-center</span></p>
            </div>
            <div class="grid-col-3 grid-gap-lg display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-2xs line-height-serif-4 margin-top-0 text-right">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-2xs text-red">.text-right</span></p>
            </div>

            <div class="grid-col-3 grid-gap-lg display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-2xs line-height-serif-4 margin-top-0 text-justify">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-2xs text-red">.text-justify</span></p>
            </div>
          </div>
        </section>
      </section>
    </section>

    <section class="text-indent" id="text-indent">
      <section class="utility">
        <section class="utility-title-bar">
          <div class="grid-row">
            <h3 class="grid-col-fill utility-title">Text indent</h3>

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
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-neg-9">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-neg-9</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-neg-8">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-neg-8</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-neg-7">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-neg-7</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-neg-6">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-neg-6</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-neg-5">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-neg-5</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-neg-4">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-neg-4</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-neg-3">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-neg-3</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-neg-205">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-neg-205</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-neg-2">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-neg-2</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-neg-105">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-neg-105</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-neg-1">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-neg-1</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-neg-05">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-neg-05</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-0</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-05">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-05</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-1">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-1</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-105">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-105</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-2">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-2</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-205">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-205</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-3">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-3</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-4">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-4</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-5">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-5</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-6">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-6</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-7">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-7</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-8">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-8</span></span></p>
            </div>
            <div class="grid-col-12 display-flex flex-column flex-justify flex-align-start margin-bottom-2 border-bottom-1px border-gray-5 padding-bottom-1">
              <p class="font-serif-sm line-height-serif-4 margin-y-0 text-left measure-4 padding-left-9 text-indent-9">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1">.text-indent-9</span></span></p>
            </div>
          </div>
        </section>
      </section>
    </section>

  </section>

  <section class="utilities-section">
    <h2 class="utilities-section-title">Responsive variants</h2>
  </section>

  <section class="utilities-section">
    <h2 class="utilities-section-title"><code>hover</code>, <code>active</code>, <code>focus</code>, and <code>visited</code> variants</h2>
  </section>

  <section class="utilities-section">
    <h2 class="utilities-section-title">Default output</h2>
    <div class="grid-row font-sans-1 text-bold border-bottom-1px padding-bottom-05 margin-top-2 border-gray-20">
      <div class="grid-col-4">Utility</div>
      <div class="grid-col-6">Output SCSS</div>
      <div class="grid-col-2">Default variable value</div>
    </div>
    <dl class="output-list">
      <dt class="output-utility">.line-height-sans-1</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(sans, 1)</span>;</span>
      </dd>
      <dd class="output-variable">0.94</dd>

      <dt class="output-utility">.line-height-serif-1</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(serif, 1)</span>;</span>
      </dd>
      <dd class="output-variable">1.06</dd>

      <dt class="output-utility">.line-height-mono-1</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(mono, 1)</span>;</span>
      </dd>
      <dd class="output-variable">1.05</dd>

      <dt class="output-utility">.line-height-sans-2</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(sans, 2)</span>;</span>
      </dd>
      <dd class="output-variable">1.08</dd>

      <dt class="output-utility">.line-height-serif-2</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(serif, 2)</span>;</span>
      </dd>
      <dd class="output-variable">1.22</dd>

      <dt class="output-utility">.line-height-mono-2</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(mono, 2)</span>;</span>
      </dd>
      <dd class="output-variable">1.21</dd>

      <dt class="output-utility">.line-height-sans-3</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(sans, 3)</span>;</span>
      </dd>
      <dd class="output-variable">1.27</dd>

      <dt class="output-utility">.line-height-serif-3</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(serif, 3)</span>;</span>
      </dd>
      <dd class="output-variable">1.44</dd>

      <dt class="output-utility">.line-height-mono-3</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(mono, 3)</span>;</span>
      </dd>
      <dd class="output-variable">1.42</dd>

      <dt class="output-utility">.line-height-sans-4</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(sans, 4)</span>;</span>
      </dd>
      <dd class="output-variable">1.41</dd>

      <dt class="output-utility">.line-height-serif-4</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(serif, 4)</span>;</span>
      </dd>
      <dd class="output-variable">1.60</dd>

      <dt class="output-utility">.line-height-mono-4</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(mono, 4)</span>;</span>
      </dd>
      <dd class="output-variable">1.57</dd>

      <dt class="output-utility">.line-height-sans-5</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(sans, 5)</span>;</span>
      </dd>
      <dd class="output-variable">1.52</dd>

      <dt class="output-utility">.line-height-serif-5</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(serif, 5)</span>;</span>
      </dd>
      <dd class="output-variable">1.72</dd>

      <dt class="output-utility">.line-height-mono-5</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(mono, 5)</span>;</span>
      </dd>
      <dd class="output-variable">1.70</dd>

      <dt class="output-utility">.line-height-sans-6</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(sans, 6)</span>;</span>
      </dd>
      <dd class="output-variable">1.64</dd>

      <dt class="output-utility">.line-height-serif-6</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(serif, 6)</span>;</span>
      </dd>
      <dd class="output-variable">1.86</dd>

      <dt class="output-utility">.line-height-mono-6</dt>
      <dd class="output-css">
        <span class="output-rule">line-height: <span class="output-token">lh(mono, 6)</span>;</span>
      </dd>
      <dd class="output-variable">1.84</dd>

      <dt class="output-utility">.measure-1</dt>
      <dd class="output-css">
        <span class="output-rule">max-width: 40ch;</span>
      </dd>
      <dd class="output-variable">—</dd>

      <dt class="output-utility">.measure-2</dt>
      <dd class="output-css">
        <span class="output-rule">max-width: 60ch;</span>
      </dd>
      <dd class="output-variable">—</dd>

      <dt class="output-utility">.measure-3</dt>
      <dd class="output-css">
        <span class="output-rule">max-width: 66ch;</span>
      </dd>
      <dd class="output-variable">—</dd>

      <dt class="output-utility">.measure-4</dt>
      <dd class="output-css">
        <span class="output-rule">max-width: 72ch;</span>
      </dd>
      <dd class="output-variable">—</dd>

      <dt class="output-utility">.measure-5</dt>
      <dd class="output-css">
        <span class="output-rule">max-width: 77ch;</span>
      </dd>
      <dd class="output-variable">—</dd>

      <dt class="output-utility">.measure-none</dt>
      <dd class="output-css">
        <span class="output-rule">max-width: none;</span>
      </dd>
      <dd class="output-variable">—</dd>

      <dt class="output-utility">.text-left</dt>
      <dd class="output-css">
        <span class="output-rule">text-align: left;</span>
      </dd>
      <dd class="output-variable">—</dd>

      <dt class="output-utility">.text-center</dt>
      <dd class="output-css">
        <span class="output-rule">text-align: center;</span>
      </dd>
      <dd class="output-variable">—</dd>

      <dt class="output-utility">.text-right</dt>
      <dd class="output-css">
        <span class="output-rule">text-align: right;</span>
      </dd>
      <dd class="output-variable">—</dd>

      <dt class="output-utility">.text-justify</dt>
      <dd class="output-css">
        <span class="output-rule">text-align: justify;</span>
      </dd>
      <dd class="output-variable">—</dd>

      <dt class="output-utility">.text-indent-neg-9</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(-9)</span>;</span>
      </dd>
      <dd class="output-variable">-72px</dd>

      <dt class="output-utility">.text-indent-neg-8</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(-8)</span>;</span>
      </dd>
      <dd class="output-variable">-64px</dd>

      <dt class="output-utility">.text-indent-neg-7</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(-7)</span>;</span>
      </dd>
      <dd class="output-variable">-56px</dd>

      <dt class="output-utility">.text-indent-neg-6</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(-6)</span>;</span>
      </dd>
      <dd class="output-variable">-48px</dd>

      <dt class="output-utility">.text-indent-neg-5</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(-5)</span>;</span>
      </dd>
      <dd class="output-variable">-40px</dd>

      <dt class="output-utility">.text-indent-neg-4</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(-4)</span>;</span>
      </dd>
      <dd class="output-variable">-32px</dd>

      <dt class="output-utility">.text-indent-neg-3</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(-3)</span>;</span>
      </dd>
      <dd class="output-variable">-24px</dd>

      <dt class="output-utility">.text-indent-neg-205</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(-2.5)</span>;</span>
      </dd>
      <dd class="output-variable">-20px</dd>

      <dt class="output-utility">.text-indent-neg-2</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(-2)</span>;</span>
      </dd>
      <dd class="output-variable">-16px</dd>

      <dt class="output-utility">.text-indent-neg-105</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(-1.5)</span>;</span>
      </dd>
      <dd class="output-variable">-12px</dd>

      <dt class="output-utility">.text-indent-neg-1</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(-1)</span>;</span>
      </dd>
      <dd class="output-variable">-8px</dd>

      <dt class="output-utility">.text-indent-neg-05</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(-.5)</span>;</span>
      </dd>
      <dd class="output-variable">-4px</dd>

      <dt class="output-utility">.text-indent-0</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: 0;</span>
      </dd>
      <dd class="output-variable">—</dd>

      <dt class="output-utility">.text-indent-05</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(.5)</span>;</span>
      </dd>
      <dd class="output-variable">4px</dd>

      <dt class="output-utility">.text-indent-1</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(1)</span>;</span>
      </dd>
      <dd class="output-variable">8px</dd>

      <dt class="output-utility">.text-indent-105</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(1.5)</span>;</span>
      </dd>
      <dd class="output-variable">12px</dd>

      <dt class="output-utility">.text-indent-2</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(2)</span>;</span>
      </dd>
      <dd class="output-variable">16px</dd>

      <dt class="output-utility">.text-indent-205</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(2.5)</span>;</span>
      </dd>
      <dd class="output-variable">20px</dd>

      <dt class="output-utility">.text-indent-3</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(3)</span>;</span>
      </dd>
      <dd class="output-variable">24px</dd>

      <dt class="output-utility">.text-indent-4</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(4)</span>;</span>
      </dd>
      <dd class="output-variable">32px</dd>

      <dt class="output-utility">.text-indent-5</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(5)</span>;</span>
      </dd>
      <dd class="output-variable">40px</dd>

      <dt class="output-utility">.text-indent-6</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(6)</span>;</span>
      </dd>
      <dd class="output-variable">48px</dd>

      <dt class="output-utility">.text-indent-7</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(7)</span>;</span>
      </dd>
      <dd class="output-variable">56px</dd>

      <dt class="output-utility">.text-indent-8</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(8)</span>;</span>
      </dd>
      <dd class="output-variable">64px</dd>

      <dt class="output-utility">.text-indent-9</dt>
      <dd class="output-css">
        <span class="output-rule">text-indent: <span class="output-token">spacing(9)</span>;</span>
      </dd>
      <dd class="output-variable">72px</dd>

    </dl>
  </section>
  <section class="utilities-section">
    <h2 class="utilities-section-title">Advanced settings</h2>
  </section>

</div>
