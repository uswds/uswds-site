---
permalink: /style-tokens/typesetting/letterspacing/
layout: styleguide
title: Letterspacing
category: Style tokens
lead: USWDS has 6 letterspacing tokens to control the amount of space between individual letterforms.
type: docs
subnav:
- text: Letterspacing tokens
  href: '#letterspacing-tokens'
- text: Using letterspacing tokens
  href: '#using-letterspacing-tokens'
---

{% assign conversion = site.data.tokens.conversion %}
{% assign tokens = site.data.tokens.typesetting %}

## Letterspacing tokens
<div class="site-table-wrapper">
  <table class="usa-table-borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Example</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      {% for item in tokens.letterspacing %}
        {% include tokens/is_number.html %}

        <tr>
          <td scope="row" data-title="Token">
            <span>
              {% if converted %}
                <code>{{ converted }}</code>,
              {% endif %}
              {% if is_number %}
                <code>{{ item.token }}</code>
              {% else %}
                <code>'{{ item.token }}'</code>
              {% endif %}
            </span>
          </td>
          <td data-title="Example">
            <span class="font-sans-12 text-ls-{{ item.token }} overflow-hidden">
              Tallahassee
            </span>
          </td>
          <td data-title="Value">
            <span>
              {{ item.value }}
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Using letterspacing tokens
Your context and coding style determine how you access USWDS letterspacing tokens in code.

{:.bg-gold-20v.padding-2.radius-md}
**Note:** The `text()` mixin and the utilities require using the string token format with a `ls-`prefix (example: `'ls-neg-2'` instead of `-2`).

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Context</div>
    <div class="grid-col-5 text-700 font-sans-1">Usage</div>
    <div class="grid-col-5 text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">function
    </div>
    <div class="grid-col-5">
      letter-spacing(<a href="{{ site.baseurl }}/style-tokens/typesetting/letterspacing/" class="token">letterspacing</a>)<br/>
      ls(<a href="{{ site.baseurl }}/style-tokens/typesetting/letterspacing/" class="token">letterspacing</a>)
    </div>
    <div class="grid-col-5">
      letter-spacing: letter-spacing(<code>-2</code>);<br/>
      letter-spacing: ls(<code>-2</code>);<br/>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">
      mixin
    </div>
    <div class="grid-col-5">u-text('ls-<a href="{{ site.baseurl }}/style-tokens/typesetting/letterspacing/" class="token">letterspacing</a>')</div>
    <div class="grid-col-5">@include u-text(<code>'ls-neg-2'</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">setting</div>
    <div class="grid-col-5"><a href="{{ site.baseurl }}/style-tokens/typesetting/letterspacing/" class="token">letterspacing</a></div>
    <div class="grid-col-5">$theme-heading-letterspacing: <code>-2</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility
    </div>
    <div class="grid-col-5">.text-ls-<a href="{{ site.baseurl }}/style-tokens/typesetting/letterspacing/" class="token">letterspacing</a></div>
    <div class="grid-col-5">.text-ls-<code>neg-2</code>;</div>
  </div>
</div>
