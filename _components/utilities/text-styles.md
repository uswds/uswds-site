---
permalink: /utilities/text-styles/
layout: styleguide
type: utility
title: Text styles
category: Utilities
lead: Change the appearance of text. (Not all text styles are available in every typeface.)
subnav:
- text: Font style
  href: '#font-style'
- text: Font weight
  href: '#font-weight'
- text: Letterspacing
  href: '#letterspacing'
- text: Tabular numerals
  href: '#font-feature-settings'
- text: Text decoration
  href: '#text-decoration'
- text: Text decoration color
  href: '#text-decoration-color'
- text: Uppercase and lowercase
  href: '#text-transform'
- text: Vertical align
  href: '#vertical-align'
- text: Whitespace
  href: '#whitespace'
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

colors:
  theme:
  - token: base-lightest
    value: '#fcfcfc'
  - token: base-lighter
    value: '#f0f0f0'
  - token: base-light
    value: '#e6e6e6'
  - token: base
    value: '#adadad'
  - token: base-dark
    value: '#757575'
  - token: base-darker
    value: '#454545'
  - token: base-darkest
    value: '#171717'
  - token: ink
    value: '#171717'
  - token: primary-lighter
    value: '#DAE9F6'
  - token: primary-light
    value: '#7CBDF0'
  - token: primary
    value: '#0F6BB2'
  - token: primary-vivid
    value: '#0E57DA'
  - token: primary-dark
    value: '#215192'
  - token: primary-darker
    value: '#122B4C'
  - token: secondary-light
    value: '#122B4C'
  - token: secondary
    value: '#122B4C'
  - token: secondary-vivid
    value: '#E6251B'
  - token: secondary-dark
    value: '#3B2523'
  - token: accent-warm
    value: '#FD974C'
  - token: accent-warm-dark
    value: '#FD7B28'
  - token: accent-cool
    value: '#FD7B28'
  - token: accent-cool-dark
    value: '#1BABCF'
  grayscale:
  - token: white
    value: '#ffffff'
  - token: gray-5
    value: '#f0f0f0'
  - token: gray-10
    value: '#e6e6e6'
  - token: gray-30
    value: '#adadad'
  - token: gray-50
    value: '#757575'
  - token: gray-70
    value: '#454545'
  - token: gray-90
    value: '#171717'
  - token: black
    value: '#000000'
  basic:
  - token: red
    value: '#E6251B'
  - token: orange
    value: '#FD7B28'
  - token: gold
    value: '#F8AE29'
  - token: yellow
    value: '#FCD344'
  - token: green
    value: '#548114'
  - token: mint
    value: '#20C688'
  - token: cyan
    value: '#1BABCF'
  - token: blue
    value: '#137CDB'
  - token: indigo
    value: '#6970C7'
  - token: violet
    value: '#836BB3'
  - token: magenta
    value: '#DF2D7A'

utilities:
- base:         text
  var:          font-style
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         text
  var:          font-weight
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         text
  var:          letter-spacing
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         text
  var:          font-feature-settings
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         text
  var:          text-decoration
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        true
  visited:      false
- base:         underline
  var:          text-decoration-color
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        true
  visited:      false
- base:         text
  var:          text-transform
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         text
  var:          vertical-align
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         text
  var:          whitespace
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
    <span class="token utilities-property">font-feature-settings</span>
    <span class="token utilities-property">font-style</span>
    <span class="token utilities-property">font-weight</span>
    <span class="token utilities-property">letter-spacing</span>
    <span class="token utilities-property">text-decoration</span>
    <span class="token utilities-property">text-decoration-color</span>
    <span class="token utilities-property">text-transform</span>
    <span class="token utilities-property">vertical-align</span>
    <span class="token utilities-property">white-space</span>
  </div>
</div>

<section class="utilities-section">

  <div class="grid-row flex-align-center margin-bottom-2">
    <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-ink text-no-wrap">advanced settings</a>.</p>
  </div>

  <section class="utility" id="font-style">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Font style</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">font-style</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <!--<li class="utility-scope-button-active"><a href="#responsive-variants">responsive</a></li>-->
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>
    <section class="utility-examples">
      <p class="utility-example-container-condensed text-italic">.text-italic</p>
      <p class="utility-example-container-condensed text-no-italic border-0">.text-no-italic</p>
    </section>
  </section>

  <section class="utility" id="font-weight">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Font weight</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">font-weight</span></p>
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
    <section class="utility-examples">
      <p class="utility-example-container-condensed text-thin">.text-thin <span class="text-base-dark">(<b>Note:</b> not included in default set)</span></p>
      <p class="utility-example-container-condensed text-light">.text-light</p>
      <p class="utility-example-container-condensed text-normal">.text-normal</p>
      <p class="utility-example-container-condensed text-medium">.text-medium <span class="text-base-dark">(<b>Note:</b>  not included in default set)</span></p>
      <p class="utility-example-container-condensed text-semibold">.text-semibold <span class="text-base-dark">(<b>Note:</b>  not included in default set)</span></p>
      <p class="utility-example-container-condensed text-bold">.text-bold</p>
      <p class="utility-example-container-condensed text-heavy border-0">.text-heavy <span class="text-base-dark">(<b>Note:</b>  not included in default set)</span></p>
    </section>
  </section>

  <section class="utility" id="letterspacing">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Letterspacing</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">letter-spacing</span></p>
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
    <section class="utility-examples">
      <p class="utility-example-container-condensed grid-row">
        <span class="grid-col-fill text-ls-neg-3">.text-ls-neg-3</span>
        <span class="grid-col-auto font-mono-xs text-light">-0.03em</span>
      </p>
      <p class="utility-example-container-condensed grid-row">
        <span class="grid-col-fill text-ls-neg-2">.text-ls-neg-2</span>
        <span class="grid-col-auto font-mono-xs text-light">-0.02em</span>
      </p>
      <p class="utility-example-container-condensed grid-row">
        <span class="grid-col-fill text-ls-neg-1">.text-ls-neg-1</span>
        <span class="grid-col-auto font-mono-xs text-light">-0.01em</span>
      </p>
      <p class="utility-example-container-condensed grid-row">
        <span class="grid-col-fill text-ls-auto">.text-ls-auto</span>
        <span class="grid-col-auto font-mono-xs text-light">initial</span>
      </p>
      <p class="utility-example-container-condensed grid-row">
        <span class="grid-col-fill text-ls-1">.text-ls-1</span>
        <span class="grid-col-auto font-mono-xs text-light">0.05em</span>
      </p>
      <p class="utility-example-container-condensed grid-row">
        <span class="grid-col-fill text-ls-2">.text-ls-2</span>
        <span class="grid-col-auto font-mono-xs text-light">0.1em</span>
      </p>
      <p class="utility-example-container-condensed grid-row">
        <span class="grid-col-fill text-ls-3">.text-ls-3</span>
        <span class="grid-col-auto font-mono-xs text-light">0.15em</span>
      </p>
    </section>
  </section>

  <section class="utility" id="font-feature-settings">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Tabular numerals</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">font-feature-settings</span></p>
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
    <section class="utility-examples">
      <div class="utility-example-container-condensed">
        <p class="font-sans-8 text-tabular margin-0">123,456,789</p>
        <p class="font-sans-8 text-tabular margin-0">825,489,012</p>
        <p class="font-sans-8 text-tabular margin-0">112,051,928</p>
        <p class="utility-class margin-top-2">.text-tabular</p>
        <p class="margin-bottom-05"><b>Note:</b> not included in default set</p>
      </div>
      <div class="utility-example-container-condensed border-0">
        <p class="font-sans-8 text-no-tabular margin-0">123,456,789</p>
        <p class="font-sans-8 text-no-tabular margin-0">825,489,012</p>
        <p class="font-sans-8 text-no-tabular margin-0">112,051,928</p>
        <p class="utility-class margin-top-2">.text-no-tabular</p>
      </div>
    </section>
  </section>

  <section class="utility" id="text-decoration">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Text decoration</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">text-decoration</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-active"><a href="#state-variants">hover</a></li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>
    <section class="utility-examples">
      <p class="utility-example-container-condensed text-underline">.text-underline</p>
      <p class="utility-example-container-condensed text-strike">.text-strike</p>
      <p class="utility-example-container-condensed text-no-strike">.text-no-strike</p>
      <p class="utility-example-container-condensed text-no-underline border-0">.text-no-underline</p>
    </section>
  </section>

  <section class="utility" id="text-decoration-color">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Text decoration color</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">text-decoration-color</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-active"><a href="#state-variants">hover</a></li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>
    <section class="utility-examples">

      {% for item in page.colors.theme %}
        <div class="utility-example-container-condensed grid-col-12 font-sans-xs display-flex flex-align-center flex-justify{% if forloop.last %} border-0{% endif %}">
          <span class="text-underline underline-{{ item.token }}">.underline-{{ item.token }}<span class="text-thin text-gray-50">.text-underline</span></span>
          <span class="flex-auto utility-value-color">
            <span class="utility-value-color-chip bg-{{ item.token }}"></span>
            {{ item.value }}
          </span>
        </div>
      {% endfor %}
    </section>
  </section>

  <section class="utility" id="text-transform">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Uppercase and lowercase</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">text-transform</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-active"><a href="#state-variants">hover</a></li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>
    <section class="utility-examples">
      <p class="utility-example-container-condensed text-uppercase">.text-uppercase</p>
      <p class="utility-example-container-condensed text-lowercase">.text-lowercase</p>
      <p class="utility-example-container-condensed text-no-uppercase">.text-no-uppercase</p>
      <p class="utility-example-container-condensed text-no-lowercase border-0">.text-no-lowercase</p>
    </section>
  </section>

  <section class="utility" id="vertical-align">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Vertical alignment</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">vertical-align</span></p>
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
    <section class="utility-examples">
      <p class="utility-example-container-condensed">A line of text and <span class="display-inline-block bg-red height-2px width-4 text-baseline"></span> <span class="text-baseline text-red">.text-baseline</span></p>
      <p class="utility-example-container-condensed">A line of text and <span class="display-inline-block bg-red height-2px width-4 text-bottom"></span> <span class="text-bottom text-red">.text-bottom</span></p>
      <p class="utility-example-container-condensed">A line of text and <span class="display-inline-block bg-red height-2px width-4 text-middle"></span> <span class="text-middle text-red">.text-middle</span></p>
      <p class="utility-example-container-condensed">A line of text and <span class="display-inline-block bg-red height-2px width-4 text-sub"></span> <span class="text-sub text-red">.text-sub</span></p>
      <p class="utility-example-container-condensed">A line of text and <span class="display-inline-block bg-red height-2px width-4 text-super"></span> <span class="text-super text-red">.text-super</span></p>
      <p class="utility-example-container-condensed">A line of text and <span class="display-inline-block bg-red height-2px width-4 text-tbottom"></span> <span class="text-tbottom text-red">.text-tbottom</span></p>
      <p class="utility-example-container-condensed">A line of text and <span class="display-inline-block bg-red height-2px width-4 text-ttop"></span> <span class="text-ttop text-red">.text-ttop</span></p>
      <p class="utility-example-container-condensed border-0">A line of text and <span class="display-inline-block bg-red height-2px width-4 text-top"></span> <span class="text-top text-red">.text-top</span></p>
    </section>
  </section>

  <section class="utility" id="whitespace">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Whitespace formatting</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">white-space</span></p>
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
    <section class="utility-examples">
      <p class="utility-example-container-condensed"><span class="display-inline-block width-card padding-1 border-1px"> <span class="text-pre"><span class="text-red">.text-pre</span> formatted line   with     multiple       spaces</span></span></p>
      <p class="utility-example-container-condensed"><span class="display-inline-block width-card padding-1 border-1px"> <span class="text-pre-line"><span class="text-red">.text-pre-line</span> formatted line   with     multiple       spaces</span></span></p>
      <p class="utility-example-container-condensed"><span class="display-inline-block width-card padding-1 border-1px"> <span class="text-pre-wrap"><span class="text-red">.text-pre-wrap</span> formatted line   with     multiple       spaces</span></span></p>
      <p class="utility-example-container-condensed"><span class="display-inline-block width-card padding-1 border-1px"> <span class="text-wrap"><span class="text-red">.text-wrap</span> formatted line   with     multiple       spaces</span></span></p>
      <p class="utility-example-container-condensed border-0"><span class="display-inline-block width-card padding-1 border-1px"> <span class="text-no-wrap"><span class="text-red">.text-no-wrap</span> formatted line   with     multiple       spaces</span></span></p>
    </section><!-- examples -->
  </section><!-- utility -->
</section><!-- utilities -->

<section class="utilities-section">
  <h2 class="utilities-section-title">Default output</h2>
  <div class="grid-row font-sans-1 text-bold border-bottom padding-bottom-05 margin-top-2 border-base-light">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-6">Output SCSS</div>
    <div class="grid-col-2">Default variable value</div>
  </div>
  <dl class="output-list">
    <dt class="output-utility">.text-tabular</dt>
    <dd class="output-css">font-feature-settings: "tnum" 1, "kern" 1</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-no-tabular</dt>
    <dd class="output-css">font-feature-settings: "kern" 1</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-italic</dt>
    <dd class="output-css">font-style: italic</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-no-italic</dt>
    <dd class="output-css">font-style: normal</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-thin</dt>
    <dd class="output-css">font-weight: <span class="output-token">font-weight('thin')</span></dd>
    <dd class="output-variable">200</dd>

    <dt class="output-utility">.text-light</dt>
    <dd class="output-css">font-weight: <span class="output-token">font-weight('light')</span></dd>
    <dd class="output-variable">300</dd>

    <dt class="output-utility">.text-normal</dt>
    <dd class="output-css">font-weight: <span class="output-token">font-weight('normal')</span></dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-medium</dt>
    <dd class="output-css">font-weight: <span class="output-token">font-weight('medium')</span></dd>
    <dd class="output-variable">500</dd>

    <dt class="output-utility">.text-semibold</dt>
    <dd class="output-css">font-weight: <span class="output-token">font-weight('semibold')</span></dd>
    <dd class="output-variable">600</dd>

    <dt class="output-utility">.text-bold</dt>
    <dd class="output-css">font-weight: <span class="output-token">font-weight('bold')</span></dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-heavy</dt>
    <dd class="output-css">font-weight: <span class="output-token">font-weight('heavy')</span></dd>
    <dd class="output-variable">900</dd>

    <dt class="output-utility">.text-ls-neg-3</dt>
    <dd class="output-css">letter-spacing: <span class="output-token">letter-spacing(-3)</span></dd>
    <dd class="output-variable">-.03em</dd>

    <dt class="output-utility">.text-ls-neg-2</dt>
    <dd class="output-css">letter-spacing: <span class="output-token">letter-spacing(-2)</span></dd>
    <dd class="output-variable">-.02em</dd>

    <dt class="output-utility">.text-ls-neg-1</dt>
    <dd class="output-css">letter-spacing: <span class="output-token">letter-spacing(-1)</span></dd>
    <dd class="output-variable">-.01em</dd>

    <dt class="output-utility">.text-ls-auto</dt>
    <dd class="output-css">letter-spacing: letter-spacing('auto')</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-ls-1</dt>
    <dd class="output-css">letter-spacing: <span class="output-token">letter-spacing(1)</span></dd>
    <dd class="output-variable">.05em</dd>

    <dt class="output-utility">.text-ls-2</dt>
    <dd class="output-css">letter-spacing: <span class="output-token">letter-spacing(2)</span></dd>
    <dd class="output-variable">.1em</dd>

    <dt class="output-utility">.text-ls-3</dt>
    <dd class="output-css">letter-spacing: <span class="output-token">letter-spacing(3)</span></dd>
    <dd class="output-variable">.15em</dd>

    <dt class="output-utility">.text-underline</dt>
    <dd class="output-css">text-decoration: underline</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-strike</dt>
    <dd class="output-css">text-decoration: line-through</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-no-underline</dt>
    <dd class="output-css">text-decoration: none</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-no-strike</dt>
    <dd class="output-css">text-decoration: none</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.underline-lightest</dt>
    <dd class="output-css">text-decoration-color: <span class="output-token">color('base-lightest')</span></dd>
    <dd class="output-variable">
      <span class="display-inline-block bg-base-lightest circle-105 text-middle margin-right-05"></span>
      #FCFCFC
    </dd>

    <dt class="output-utility">.underline-base-lighter</dt>
    <dd class="output-css">text-decoration-color: <span class="output-token">color('base-lighter')</span></dd>
    <dd class="output-variable">
      <span class="display-inline-block bg-base-lighter circle-105 text-middle margin-right-05"></span>
      #F0F0F0
    </dd>

    <dt class="output-utility">.underline-base-light</dt>
    <dd class="output-css">text-decoration-color: <span class="output-token">color('base-light')</span></dd>
    <dd class="output-variable">
      <span class="display-inline-block bg-base-light circle-105 text-middle margin-right-05"></span>
      #E6E6E6
    </dd>

    <dt class="output-utility">.underline-base</dt>
    <dd class="output-css">text-decoration-color: <span class="output-token">color('base')</span></dd>
    <dd class="output-variable">
      <span class="display-inline-block bg-base circle-105 text-middle margin-right-05"></span>
      #ADADAD
    </dd>

    <dt class="output-utility">.underline-base-dark</dt>
    <dd class="output-css">text-decoration-color: <span class="output-token">color('base-dark')</span></dd>
    <dd class="output-variable">
      <span class="display-inline-block bg-base-dark circle-105 text-middle margin-right-05"></span>
      #757575
    </dd>

    <dt class="output-utility">.underline-base-darker</dt>
    <dd class="output-css">text-decoration-color: <span class="output-token">color('base-darker')</span></dd>
    <dd class="output-variable">
      <span class="display-inline-block bg-base-darker circle-105 text-middle margin-right-05"></span>
      #454545
    </dd>

    <dt class="output-utility">.underline-base-darkest</dt>
      <dd class="output-css">text-decoration-color: <span class="output-token">color('base-darkest')</span></dd>
      <dd class="output-variable">
        <span class="display-inline-block bg-base-darkest circle-105 text-middle margin-right-05"></span>
        #171717
      </dd>

    <dt class="output-utility">.underline-primary-lighter</dt>
      <dd class="output-css">text-decoration-color: <span class="output-token">color('primary-lighter')</span></dd>
      <dd class="output-variable">
        <span class="display-inline-block bg-primary-lighter circle-105 text-middle margin-right-05"></span>
        #DAE9F6
      </dd>
    <dt class="output-utility">.underline-primary-light</dt>
      <dd class="output-css">text-decoration-color: <span class="output-token">color('primary-light')</span></dd>
      <dd class="output-variable">
        <span class="display-inline-block bg-primary-light circle-105 text-middle margin-right-05"></span>
        #7CBDF0
      </dd>
    <dt class="output-utility">.underline-primary</dt>
      <dd class="output-css">text-decoration-color: <span class="output-token">color('primary')</span></dd>
      <dd class="output-variable">
        <span class="display-inline-block bg-primary circle-105 text-middle margin-right-05"></span>
        #0F6BB2
      </dd>
    <dt class="output-utility">.underline-primary-vivid</dt>
      <dd class="output-css">text-decoration-color: <span class="output-token">color('primary-vivid')</span></dd>
      <dd class="output-variable">
        <span class="display-inline-block bg-primary-vivid circle-105 text-middle margin-right-05"></span>
        #0E57DA
      </dd>
    <dt class="output-utility">.underline-primary-dark</dt>
      <dd class="output-css">text-decoration-color: <span class="output-token">color('primary-dark')</span></dd>
      <dd class="output-variable">
        <span class="display-inline-block bg-primary-dark circle-105 text-middle margin-right-05"></span>
        #215192
      </dd>
    <dt class="output-utility">.underline-primary-darker</dt>
      <dd class="output-css">text-decoration-color: <span class="output-token">color('primary-darker')</span></dd>
      <dd class="output-variable">
        <span class="display-inline-block bg-primary-darker circle-105 text-middle margin-right-05"></span>
        #122B4C
      </dd>

    <dt class="output-utility">.underline-secondary-light</dt>
      <dd class="output-css">text-decoration-color: <span class="output-token">color('secondary-light')</span></dd>
      <dd class="output-variable">
        <span class="display-inline-block bg-secondary-light circle-105 text-middle margin-right-05"></span>
        #122B4C
      </dd>
    <dt class="output-utility">.underline-secondary</dt>
      <dd class="output-css">text-decoration-color: <span class="output-token">color('secondary')</span></dd>
      <dd class="output-variable">
        <span class="display-inline-block bg-secondary circle-105 text-middle margin-right-05"></span>
        #122B4C
      </dd>
    <dt class="output-utility">.underline-secondary-vivid</dt>
      <dd class="output-css">text-decoration-color: <span class="output-token">color('secondary-vivid')</span></dd>
      <dd class="output-variable">
        <span class="display-inline-block bg-secondary-vivid circle-105 text-middle margin-right-05"></span>
        #E6251B
      </dd>
    <dt class="output-utility">.underline-secondary-dark</dt>
      <dd class="output-css">text-decoration-color: <span class="output-token">color('secondary-dark')</span></dd>
      <dd class="output-variable">
        <span class="display-inline-block bg-secondary-dark circle-105 text-middle margin-right-05"></span>
        #3B2523
      </dd>

    <dt class="output-utility">.underline-accent-warm</dt>
      <dd class="output-css">text-decoration-color: <span class="output-token">color('accent-warm')</span></dd>
      <dd class="output-variable">
        <span class="display-inline-block bg-accent-warm circle-105 text-middle margin-right-05"></span>
        #FD974C
      </dd>
    <dt class="output-utility">.underline-accent-warm-dark</dt>
      <dd class="output-css">text-decoration-color: <span class="output-token">color('accent-warm-dark')</span></dd>
      <dd class="output-variable">
        <span class="display-inline-block bg-accent-warm-dark circle-105 text-middle margin-right-05"></span>
        #FD7B28
      </dd>

    <dt class="output-utility">.underline-accent-cool</dt>
      <dd class="output-css">text-decoration-color: <span class="output-token">color('accent-cool')</span></dd>
      <dd class="output-variable">
        <span class="display-inline-block bg-accent-cool circle-105 text-middle margin-right-05"></span>
        #21C2E6
      </dd>
    <dt class="output-utility">.underline-accent-cool-dark</dt>
    <dd class="output-css">text-decoration-color: <span class="output-token">color('accent-cool-dark')</span></dd>
    <dd class="output-variable">
      <span class="display-inline-block bg-accent-cool-dark circle-105 text-middle margin-right-05"></span>
      #1BABCF
    </dd>

    <dt class="output-utility">.underline-auto</dt>
    <dd class="output-css">text-decoration-color: <span class="output-token">auto</span></dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-baseline</dt>
    <dd class="output-css">vertical-align: baseline</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-bottom</dt>
    <dd class="output-css">vertical-align: bottom</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-middle</dt>
    <dd class="output-css">vertical-align: middle</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-sub</dt>
    <dd class="output-css">vertical-align: sub</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-super</dt>
    <dd class="output-css">vertical-align: super</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-tbottom</dt>
    <dd class="output-css">vertical-align: text-bottom</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-ttop</dt>
    <dd class="output-css">vertical-align: text-top</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-top</dt>
    <dd class="output-css">vertical-align: top</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-pre</dt>
    <dd class="output-css">white-space: pre</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-pre-line</dt>
    <dd class="output-css">white-space: pre-line</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-pre-wrap</dt>
    <dd class="output-css">white-space: pre-wrap</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-wrap</dt>
    <dd class="output-css">white-space: wrap</dd>
    <dd class="output-variable">—</dd>

    <dt class="output-utility">.text-no-wrap</dt>
    <dd class="output-css">white-space: nowrap</dd>
    <dd class="output-variable">—</dd>

  </dl>
</section>

<section id="utility-mixins" class="padding-top-4">
  <h2 class="margin-y-0">Utility mixins</h2>
  {% include utilities/utility-mixin-intro.html %}

  <div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2 margin-top-3">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-4">Mixin</div>
    <div class="grid-col-4">Example</div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-<code>style</code></div>
    <div class="grid-col-4">u-text(<code>style</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('italic')</span>
      <span class="display-block margin-top-1">u-text('no-italic')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-<code>weight</code></div>
    <div class="grid-col-4">u-text(<code>weight</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('thin')</span>
      <span class="display-block margin-top-1">u-text('normal')</span>
      <span class="display-block margin-top-1">u-text(900)</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-ls-<code>value</code></div>
    <div class="grid-col-4">u-text('ls-<code>value</code>'')</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('ls-1')</span>
      <span class="display-block margin-top-1">u-text('ls-auto')</span>
      <span class="display-block margin-top-1">u-text('ls-neg-1')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-<code>tabular</code></div>
    <div class="grid-col-4">u-text('<code>tabular</code>')</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('tabular')</span>
      <span class="display-block margin-top-1">u-text('no-tabular')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-<code>decoration</code></div>
    <div class="grid-col-4">u-text('<code>decoration</code>')</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('underline')</span>
      <span class="display-block margin-top-1">u-text('strike')</span>
      <span class="display-block margin-top-1">u-text('no-underline')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.underline-<code>color</code></div>
    <div class="grid-col-4">u-underline(<code>color</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-underline('secondary-dark')</span>
      <span class="display-block margin-top-1">u-underline('red-50v')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-<code>case</code></div>
    <div class="grid-col-4">u-text(<code>case</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('uppercase')</span>
      <span class="display-block margin-top-1">u-text('lowercase')</span>
      <span class="display-block margin-top-1">u-text('no-uppercase')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-<code>vertical-align</code></div>
    <div class="grid-col-4">u-text(<code>vertical-align</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('baseline')</span>
      <span class="display-block margin-top-1">u-text('sup')</span>
      <span class="display-block margin-top-1">u-text('ttop')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-<code>white-space</code></div>
    <div class="grid-col-4">u-text(<code>white-space</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('pre-line')</span>
      <span class="display-block margin-top-1">u-text('no-wrap')</span>
      <span class="display-block margin-top-1">u-text('wrap')</span>
    </div>
  </div>

  {% include utilities/utility-mixin-using.html %}
</section>

<section id="advanced-settings" class="padding-top-4">
<h2 class="margin-y-0">Advanced settings</h2>

  {% include utilities/responsive-variants.html %}

  {% include utilities/state-variants.html %}

  {% include utilities/output-control.html %}

  <section class="utilities-section margin-top-6">
    {% include utilities/values-intro.html %}
    {% include utilities/color-palettes.html %}
  </section>
</section>
