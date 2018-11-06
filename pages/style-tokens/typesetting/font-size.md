---
permalink: /style-tokens/typesetting/font-size/
layout: styleguide
title: Font size
category: Style tokens
lead: Font size tokens determine how big or small the referenced text will appear on the screen. The USWDS typescale includes nine regularized theme tokens drawn from 21 system tokens.
type: docs
subnav:
- text: Theme tokens
  href: '#theme-tokens'
- text: System tokens
  href: '#system-tokens'
- text: Using size tokens
  href: '#using-typescale-in-utilities-settings-and-component-sass'
---

{% assign tokens = site.data.tokens.typesetting.size %}

{:.bg-gold-20v.padding-2.radius-md}
Please see the [Typesetting]({{ site.baseurl }}/style-tokens/typesetting){:.text-ink.text-bold} section for more about font size normalization and how USWDS uses tokens for typesetting. The documentation below displays a value in pixels, rather than the actual final output, which will be normalized depending on the typeface and output in `rem` customized to your project settings.

## Theme tokens
The following chart shows the USWDS default settings for the nine theme size tokens. Customize the output to your project needs in `$uswds-theme-typography.scss` by setting the variables listed below. If your project requires more than nine sizes, use [system size tokens](#system-tokens) as needed.

<div class="site-table-wrapper">
  <table class="usa-table-borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Default</th>
        <th scope="col">Example</th>
        <th scope="col">Value</th>
        <th scope="col">Settings variable</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      {% for item in tokens.theme %}
        {% include tokens/is_number.html %}
        <tr>
          <td scope="row" data-title="Theme token">
            <span>
              {% if is_number %}
                <code class="text-no-wrap">{{ item.token }}</code>
              {% else %}
                <code class="text-no-wrap">'{{ item.token }}'</code>
              {% endif %}
            </span>
          </td>
          <td data-title="Default">
            <span>
              <code>{{ item.default }}</code>
            </span>
          </td>
          <td data-title="Example"  class="line-height-sans-1 overflow-hidden">
            <span class="font-sans-{{ item.token }}">
              Tallahassee
            </span>
          </td>
          <td data-title="Value">
            <span>
              {% assign default = tokens.system | where: 'token', item.default %}
              {{ default[0].value }}
            </span>
          </td>
          <td data-title="Setting var">
            <span>
              $theme-type-scale-{{ item.token }}
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

{:.margin-top-6}
## System tokens

<div class="site-table-wrapper overflow-hidden">
  <table class="usa-table-borderless site-table-responsive width-full">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Value</th>
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
          <td scope="row" data-title="System token">
            <span>
              {% if is_number %}
                <code class="text-no-wrap">{{ item.token }}</code>
              {% else %}
                <code class="text-no-wrap">'{{ item.token }}'</code>
              {% endif %}
            </span>
          </td>
          <td data-title="Target size">
            <span>
              {{ item.value }}
            </span>
          </td>
          <td data-title="Example"  class="line-height-sans-1 overflow-hidden">
            <span class="font-sans-{{ item.token }}">
              Tallahassee
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Using size tokens
Your context and coding style determine how you access USWDS font size tokens in code. Because of [font size normalization]({{ site.baseurl }}/style-tokens/typesetting/), font size functions, utilities, and mixins also require a [family]({{ site.baseurl }}/style-tokens/typesetting/font-family/){:.token} token.

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
        <td scope="row" data-title="Context" class="font-sans-2xs">
          <span>
            <span class="text-bold">function</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            size(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            font-size: size(<code>'body'</code>, <code>'2xl'</code>)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context" class="font-sans-2xs">
          <span>
            <span class="text-bold">mixin</span>
            <span class="display-block">font-size</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            u-font-size(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-font-size(<code>'body'</code>, <code>'2xl'</code>)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context" class="font-sans-2xs">
          <span>
            <span class="text-bold">mixin</span>
            <span class="display-block">font-family</span>
            <span class="display-block">font-size</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            u-font(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-font(<code>'body'</code>, <code>'2xl'</code>)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context" class="font-sans-2xs">
          <span>
            <span class="text-bold">setting</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
          $theme-h1-font-size: <code>'2xl'</code>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context" class="font-sans-2xs">
          <span>
            <span class="text-bold">utility</span>
            <span class="display-block">font-family</span>
            <span class="display-block">font-size</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            .font-<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>-<a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .font-<code>body</code>-<code>2xl</code>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
