---
permalink: /style-tokens/color/state-tokens/
layout: styleguide
title: State color tokens
category: Style tokens
lead: USWDS state colors tokens provide flexible, accessible, customizable colors for warning, error, and other states
type: docs
subnav:
- text: State color tokens
  href: '#uswds-theme-color-tokens'
- text: Using color tokens
  href: '#using-color-tokens-in-utilities-settings-and-component-sass'
---

{% assign colors = site.data.tokens.color %}

{% include tokens/get-system-colors.html %}

USWDS state color tokens are designed to be useful and effective for any project that has states or alerts. Each state token is drawn from a system [color]({{ site.baseurl }}/style-tokens/color/system-tokens/){:.token} token and we only use token-based colors in official components.

{:#uswds-state-color-tokens}
## State color tokens
The state color palette is divided into five high-level role-based color families: `info`, `error`, `warning`, `success`, and `disabled`.

Each color family except `disabled` has five possible lightness grades, from `lighter` to `darker`, though not every family needs to include a color at each grade. Some grades may be set to `false` in your project's theme settings.

Customize state color tokens using the variables listed below in `_uswds_theme_color.scss` with [system color tokens]({{ site.baseurl }}/style-tokens/color/system-tokens/). Set any unused theme color to `false`.

<div class="site-table-wrapper">
  <table class="usa-table-borderless site-table-responsive">
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
          <td scope="row" data-title="Color" class="flex-align-center">
            <span class="site-inline-swatch bg-{{ item.token }}"></span>
          </td>
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
          <span>
            color(<a href="{{ site.baseurl }}/style-tokens/color/state-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            color: color(<code>'warning-dark'</code>)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-sans-3">
            <span class="text-bold">mixin</span><br/>
            <span>background-color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            u-bg(<a href="{{ site.baseurl }}/style-tokens/color/state-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-bg(<code>'warning-dark'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-sans-3">
            <span class="text-bold">mixin</span><br/>
            <span>color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            u-text(<a href="{{ site.baseurl }}/style-tokens/color/state-tokens/" class="token">color</a>)<br/>
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-text(<code>'warning-dark'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-sans-3">
            <span class="text-bold">mixin</span><br/>
            <span>border-color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            u-border(<a href="{{ site.baseurl }}/style-tokens/color/state-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-border(<code>'warning-dark'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-sans-3">
            <span class="text-bold">mixin</span><br/>
            <span>text-decoration-color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            u-underline(<a href="{{ site.baseurl }}/style-tokens/color/state-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-underline(<code>'warning-dark'</code>)<br/>
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
            <a href="{{ site.baseurl }}/style-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            $theme-color-warning: <code>'warning-dark'</code>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-sans-3">
            <span class="text-bold">mixin</span><br/>
            <span>text-decoration-color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            u-underline(<a href="{{ site.baseurl }}/style-tokens/color/state-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-underline(<code>'warning-dark'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-sans-3">
            <span class="text-bold">utility</span><br/>
            <span>background-color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            .bg-<a href="{{ site.baseurl }}/style-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .bg-<code>warning-light</code>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-sans-3">
            <span class="text-bold">utility</span><br/>
            <span>border-color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            .border-<a href="{{ site.baseurl }}/style-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .border-<code>error</code>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-sans-3">
            <span class="text-bold">utility</span><br/>
            <span>color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            .text-<a href="{{ site.baseurl }}/style-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .text-<code>error</code>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-sans-3">
            <span class="text-bold">utility</span><br/>
            <span>outline-color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            .outline-<a href="{{ site.baseurl }}/style-tokens/color/state-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .outline-<code>error</code>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-sans-3">
            <span class="text-bold">utility</span><br/>
            <span>text-decoration-color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            .underline-<a href="{{ site.baseurl }}/style-tokens/color/state-tokens/" class="token">color</a>
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
