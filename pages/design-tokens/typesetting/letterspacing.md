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
---

{% assign conversion = site.data.tokens.conversion %}
{% assign tokens = site.data.tokens.typesetting %}

{:.bg-gold-20v.padding-2.radius-md}
**Note:** Some letterspacing tokens come in two flavors: a **numeric token** (like `0.5` or `-2`) and a **string token** (like `'05'` or `'neg-2'`). _Utility classes use string tokens exclusively when they exist_ (like `.margin-x-neg-2`). Mixins and function usually accept either, and we will note any exceptions.

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

<div class="site-table-wrapper">
  <table class="usa-table-borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Context</th>
        <th scope="col">Usage</th>
        <th scope="col">Example</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      <tr>
        <td scope="row" data-title="Context">
          <span class="text-bold font-sans-3">function</span>
        </td>
        <td data-title="Usage">
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
        <td scope="row" data-title="Context">
          <span class="font-sans-3">
            <span class="text-bold">mixin</span><br/>
          </span>
        </td>
        <td data-title="Usage">
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
        <td scope="row" data-title="Context">
          <span>
            <span class="text-bold font-sans-3">setting</span><br/>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            <a href="{{ site.baseurl }}/design-tokens/typesetting/letterspacing/" class="token">letterspacing</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            $theme-heading-letterspacing: <code>-2</code>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-sans-3">
            <span class="text-bold">utility</span><br/>
          </span>
        </td>
        <td data-title="Usage">
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
