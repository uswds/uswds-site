---
permalink: /design-tokens/shadow/
layout: styleguide
title: Shadow
category: Design tokens
lead: Often used to indicate elevation, shadow tokens determine the size of a drop shadow (or `box-shadow`) around an item.
type: docs
subnav:
- text: Shadow tokens
  href: '#shadow-tokens'
- text: Using shadow tokens
  href: '#using-shadow-tokens'
- text: Latest updates
  href: '#changelog'
changelog:
  key: tokens-shadow
---

{% assign tokens = site.data.tokens %}

## Shadow tokens
Output values are shown in `px` below but are output in `rem` in the final CSS, based on the base font size in your project settings.

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
      {% for item in tokens.shadow %}
        {% include tokens/is_number.html %}

        <tr>
          <th scope="row" data-title="Token" class="tablet:width-10">
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
          <td data-title="Example" class="padding-y-2">
            <div class="width-full height-4 radius-md bg-white shadow-{{ item.token }} border border-base-lighter"></div>
          </td>
          <td data-title="Value" class="tablet:width-10">
            <span class="tablet:text-no-wrap">
              {{ item.value }}
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Using shadow tokens
Your context and coding style determine how you access USWDS shadow tokens in code.

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
          <span>
            shadow(<a href="{{ site.baseurl }}/design-tokens/shadow/" class="token">shadow</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            box-shadow: shadow(<code>2</code>)
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
            u-shadow(<a href="{{ site.baseurl }}/design-tokens/shadow/" class="token">shadow</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-shadow(<code>2</code>)<br/>
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
            .shadow-<a href="{{ site.baseurl }}/design-tokens/shadow/" class="token">shadow</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .shadow-<code>2</code>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
