---
permalink: /style-tokens/flex/
layout: styleguide
title: Flex
category: Style tokens
lead: USWDS flex tokens provide simple options for setting the flex width of an item.
type: docs
subnav:
- text: Flex tokens
  href: '#flex-tokens'
- text: Using flex tokens
  href: '#using-flex-tokens'

values:
  flex:
  - token: 1
    value: '1 0 0'
  - token: 2
    value: '2 0 0'
  - token: 3
    value: '3 0 0'
  - token: 4
    value: '4 0 0'
  - token: 5
    value: '5 0 0'
  - token: 6
    value: '6 0 0'
  - token: 7
    value: '7 0 0'
  - token: 8
    value: '8 0 0'
  - token: 9
    value: '9 0 0'
  - token: 10
    value: '10 0 0'
  - token: 11
    value: '11 0 0'
  - token: 12
    value: '12 0 0'
  - token: auto
    value: auto
  - token: fill
    value: '1 0 0'
---

## Flex tokens
<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px font-mono-3">
  <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-1 text-700 font-sans-1">Token</div>
    <div class="grid-col-9 text-700 font-sans-1">Example</div>
    <div class="grid-col-fill text-700 font-sans-1">Output</div>
  </div>

  {% for value in page.values.flex %}
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 {% if forloop.last %}{% else %}margin-bottom-1 border-bottom border-gray-10{% endif %}">
    <div class="grid-col-1"><code>{{ value.token }}</code></div>

    <div class="grid-col-9">
      <div class="grid-row grid-gap-sm">
        <div class="grid-col flex-{{ value.token }}">
          <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center padding-x-105">
          </div>
        </div>
        <div class="grid-col flex-1">
          <div class="height-6 width-full display-flex flex-align-center border border-base-dark flex-justify-center">
          </div>
        </div>
        <div class="grid-col flex-1">
          <div class="height-6 width-full display-flex flex-align-center border border-base-dark flex-justify-center">
          </div>
        </div>
        <div class="grid-col flex-1">
          <div class="height-6 width-full display-flex flex-align-center border border-base-dark flex-justify-center">
          </div>
        </div>
      </div>
    </div>
    <div class="grid-col-fill">{{ value.value }}</div>
  </div>
  {% endfor %}
</div>

## Using flex tokens
Your context and coding style determine how you access USWDS flex tokens in code.

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Context</div>
    <div class="grid-col-5 text-700 font-sans-1">Usage</div>
    <div class="grid-col-5 text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">function
    </div>
    <div class="grid-col-5">flex: flex(<a href="{{ site.baseurl }}/style-tokens/flex/" class="token">flex</a>)</div>
    <div class="grid-col-5">
      flex: flex(<code>'fill'</code>);
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">
      mixin
    </div>
    <div class="grid-col-5">@include u-flex(<a href="{{ site.baseurl }}/style-tokens/flex/" class="token">flex</a>)</div>
    <div class="grid-col-5">@include u-flex(<code>'fill'</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">setting</div>
    <div class="grid-col-5">$theme-variable: <a href="{{ site.baseurl }}/style-tokens/flex/" class="token">flex</a></div>
    <div class="grid-col-5">$theme-nav-column-flex: <code>4</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility
    </div>
    <div class="grid-col-5">.flex-<a href="{{ site.baseurl }}/style-tokens/flex/" class="token">flex</a></div>
    <div class="grid-col-5">.flex-<code>fill</code>;</div>
  </div>
</div>
