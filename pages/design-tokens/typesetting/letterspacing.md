---
permalink: /design-tokens/typesetting/letterspacing/
layout: styleguide
title: Letterspacing
category: Design tokens
lead: USWDS has 6 letterspacing tokens to control the amount of space between individual letterforms.
type: docs
subnav:
- text: Letterspacing tokens
  href: '#letterspacing-tokens'
- text: Using letterspacing tokens
  href: '#using-letterspacing-tokens'
- text: Latest updates
  href: '#changelog'
changelog:
  key: tokens-type-letterspacing
---

{% assign conversion = site.data.tokens.conversion %}
{% assign tokens = site.data.tokens.typesetting %}

{:.bg-gold-20v.padding-2.radius-md}
**Note:** Some letterspacing tokens come in two flavors: a **numeric token** (like `0.5` or `-2`) and a **string token** (like `'05'` or `'neg-2'`). _Utility classes use string tokens exclusively when they exist_ (like `.margin-x-neg-2`). Mixins and functions usually accept either, and we will note any exceptions.

## Letterspacing tokens

<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
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
          <th scope="row" data-title="Token">
            <span class="text-normal">
              {% if converted %}
                <code>{{ converted }}</code>,
              {% endif %}
              {% if is_number %}
                <code>{{ item.token }}</code>
              {% else %}
                <code>'{{ item.token }}'</code>
              {% endif %}
            </span>
          </th>
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

<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Context</th>
        <th scope="col">Usage</th>
        <th scope="col">Example</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">function</span>
        </th>
        <td data-title="Description">
          <span class="line-height-sans-6">
            letter-spacing(<a href="{{ site.baseurl }}/design-tokens/typesetting/letterspacing/" class="token">letterspacing</a>)<br/>
            ls(<a href="{{ site.baseurl }}/design-tokens/typesetting/letterspacing/" class="token">letterspacing</a>)
          </span>
        </td>
        <td data-title="Example">
          <span class="line-height-sans-6">
            letter-spacing: letter-spacing(<code>-2</code>);<br/>
            letter-spacing: ls(<code>-2</code>);<br/>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            mixin
          </span>
        </th>
        <td data-title="Description">
          <span>
            u-text('ls-<a href="{{ site.baseurl }}/design-tokens/typesetting/letterspacing/" class="token">letterspacing</a>')
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-text(<code>'ls-neg-2'</code>)
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            utility
          </span>
        </th>
        <td data-title="Description">
          <span>
            .text-ls-<a href="{{ site.baseurl }}/design-tokens/typesetting/letterspacing/" class="token">letterspacing</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .text-ls-<code>neg-2</code>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
