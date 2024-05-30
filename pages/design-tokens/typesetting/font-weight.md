---
permalink: /design-tokens/typesetting/font-weight/
layout: styleguide
title: Font weight
category: Design tokens
lead: USWDS has up to seven font weight theme tokens drawn from nine system tokens.
type: docs
subnav:
- text: Theme tokens
  href: '#theme-tokens'
- text: System tokens
  href: '#system-tokens'
- text: Using weight tokens
  href: '#using-weight-tokens'
- text: Latest updates
  href: '#changelog'
changelog:
  key: tokens-type-font-weight
---

{% assign tokens = site.data.tokens.typesetting.weight %}

## Theme tokens
Font weight theme tokens use common names. Most projects will use only 2-4 of these tokens, with the majority set to `false`.

Customize [theme](#theme-tokens){:.token} font weight tokens in your project's theme settings with available [system](#system-tokens){:.token} font weight tokens. All typography-related settings can be found in [USWDS settings]({{ site.baseurl }}/documentation/settings/#typography-settings).

<div class="site-table-wrapper overflow-hidden">
  <table class="usa-table--borderless site-table-responsive width-full">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Default</th>
        <th scope="col">Example</th>
        <th scope="col">Settings variable</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      {% for item in tokens.theme %}
        {% assign is_number = false %}
        {% assign this_token = item.token %}
        {% assign divided = this_token | divided_by: 1%}
        {% if divided == 0 %}
        {% elsif this_token contains 'xs' %}
        {% elsif this_token contains 'xl' %}
        {% elsif this_token == 0 %}
          {% assign is_number = true %}
        {% else %}
          {% assign is_number = true %}
        {% endif %}
        <tr>
          <th scope="row" data-title="Theme token">
            <span class="text-normal">
              {% if is_number %}
                <code class="text-no-wrap">{{ item.token }}</code>
              {% else %}
                <code class="text-no-wrap">'{{ item.token }}'</code>
              {% endif %}
            </span>
          </th>
          <td data-title="Default">
            <span>
              {% if item.default == false %}
                false
              {% else %}
                {% assign default = tokens.system
                  | where: 'token', item.default %}
                {{ default[0].value }}
              {% endif %}
            </span>
          </td>
          <td data-title="Example" class="overflow-hidden">
            {% if item.default %}
              <span class="font-sans-8 text-{{ item.token }}">
                Tallahassee
              </span>
            {% endif %}
          </td>
          <td data-title="Settings var">
            <span>
              $theme-font-weight-{{ item.token }}
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## System tokens
Font weight system tokens use numbers from `100`-`900` in increments of 100, with `100` as the lightest and `900` the heaviest, the same numerical system of grades used by most common typefaces.

<div class="site-table-wrapper overflow-hidden maxw-tablet">
  <table class="usa-table--borderless site-table-responsive width-full">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Example</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      {% for item in tokens.system %}
        {% assign is_number = false %}
        {% assign this_token = item.token %}
        {% assign divided = this_token | divided_by: 1%}
        {% if divided == 0 %}
        {% elsif this_token contains 'xs' %}
        {% elsif this_token contains 'xl' %}
        {% elsif this_token == 0 %}
          {% assign is_number = true %}
        {% else %}
          {% assign is_number = true %}
        {% endif %}
        <tr>
          <th scope="row" data-title="Theme token">
            <span class="text-normal">
              {% if is_number %}
                <code class="text-no-wrap">{{ item.token }}</code>
              {% else %}
                <code class="text-no-wrap">'{{ item.token }}'</code>
              {% endif %}
            </span>
          </th>
          <td data-title="Example" class="overflow-hidden">
            <span class="font-sans-8 text-{{ item.token }}">
              Tallahassee
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Using weight tokens
Your context and coding style determine how you access USWDS font weight tokens in code.

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
            font-weight(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-weight/" class="token">weight</a>)
          </span>
        </td>
        <td data-title="Example">
          <span class="line-height-sans-6">
            font-weight: font-weight(<code>'bold'</code>)
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
            u-text(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-weight/" class="token">weight</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-text(<code>'light'</code>)
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">setting</span>
        </th>
        <td data-title="Description">
          <span>
            <a href="{{ site.baseurl }}/design-tokens/typesetting/font-weight/" class="token">weight</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            $theme-font-weight-normal: <code>500</code>
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
            .text-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-weight/" class="token">weight</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .text-<code>light</code>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
