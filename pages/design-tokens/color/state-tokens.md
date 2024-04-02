---
permalink: /design-tokens/color/state-tokens/
layout: styleguide
title: State color tokens
category: Design tokens
lead: USWDS state colors tokens provide flexible, accessible, customizable colors for warning, error, and other states
type: docs
redirect_from:
  - /components/colors/state/
  - /colors/state/
  - /color/state/
subnav:
- text: State color tokens
  href: '#uswds-state-color-tokens'
- text: Using color tokens
  href: '#using-color-tokens'
- text: Latest updates
  href: '#changelog'
changelog:
  key: tokens-color-state
---

{% assign colors = site.data.tokens.color %}

{% include tokens/get-system-colors.html %}

USWDS state color tokens are designed to be useful and effective for any project that has states or alerts. Each state token is drawn from a system [color]({{ site.baseurl }}/design-tokens/color/system-tokens/){:.token} token and we only use token-based colors in official components.

{:#uswds-state-color-tokens}
## State color tokens
The state color palette is divided into five high-level role-based color families: `info`, `error`, `warning`, `success`, `emergency`, and `disabled`.

Each color family except `emergency` and `disabled` has five possible lightness grades, from `lighter` to `darker`, though not every family needs to include a color at each grade. Some grades may be set to `false` in your project's theme settings.

{% include tokens/customize-color-token.html token_type="state" example_token="error-dark" example_value="red-warm-60v" %}

## State color tokens table

<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Color</th>
        <th scope="col">Token</th>
        <th scope="col">Default</th>
        <th scope="col">Settings variable</th>
        <th scope="col" class="text-right">Value</th>
      </tr>
    </thead>
    <tbody>
      {% for item in colors.state %}
        <tr>
          <th scope="row" data-title="Color" class="flex-align-center">
            <span class="site-inline-swatch bg-{{ item.token }}"></span>
          </th>
          <td data-title="Token">
            <span class="utility-class font-mono-2xs">'{{ item.token }}'</span>
          </td>
          <td data-title="Default" class="font-mono-2xs">
            '{{ item.default }}'
          </td>
          <td data-title="Settings var" class="font-mono-2xs">
            $theme-color-{{ item.token }}
          </td>
          <td data-title="Value" class="font-mono-2xs text-right">
            {% assign system = system-colors | where: 'token', item.default %}
            {{ system[0].value }}
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Using color tokens
Your context and coding style determine how you access USWDS color tokens in code.

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
            color(<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            color: color(<code>'warning-dark'</code>)
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>mixin</span><br/>
            <span class="text-normal">background-color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            u-bg(<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-bg(<code>'warning-dark'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>mixin</span><br/>
            <span class="text-normal">color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            u-text(<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>)<br/>
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-text(<code>'warning-dark'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>mixin</span><br/>
            <span class="text-normal">border-color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            u-border(<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-border(<code>'warning-dark'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>mixin</span><br/>
            <span class="text-normal">text-decoration-color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            u-underline(<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-underline(<code>'warning-dark'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span>
            <span class="font-lang-3">setting</span><br/>
          </span>
        </th>
        <td data-title="Description">
          <span>
            <a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            $theme-alert-text-color: <code>'warning-dark'</code>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>mixin</span><br/>
            <span class="text-normal">text-decoration-color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            u-underline(<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-underline(<code>'warning-dark'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>utility</span><br/>
            <span class="text-normal">background-color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            .bg-<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .bg-<code>warning-light</code>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>utility</span><br/>
            <span class="text-normal">border-color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            .border-<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .border-<code>error</code>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>utility</span><br/>
            <span class="text-normal">color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            .text-<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .text-<code>error</code>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>utility</span><br/>
            <span class="text-normal">outline-color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            .outline-<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .outline-<code>error</code>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>utility</span><br/>
            <span class="text-normal">text-decoration-color</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            .underline-<a href="{{ site.baseurl }}/design-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .underline-<code>error</code>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
