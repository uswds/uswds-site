---
permalink: /design-tokens/color/theme-tokens/
layout: styleguide
title: Theme color tokens
category: Design tokens
lead: USWDS theme color tokens provide flexible, accessible, customizable color choices for your project.
type: docs
subnav:
- text: About theme color tokens
  href: '#uswds-theme-color-tokens'
- text: Customizing theme color tokens
  href: '#customizing-theme-color-tokens'
- text: Using theme color tokens
  href: '#using-theme-color-tokens'
---

{% assign colors = site.data.tokens.color %}
{% include tokens/get-system-colors.html %}

USWDS theme color tokens are designed to be useful and effective for small and large projects.  Each theme token is drawn from a [system color]({{ site.baseurl }}/design-tokens/color/system-tokens/){:.token} token and we only use token-based colors in official components.

{:#uswds-theme-color-tokens}
## About theme color tokens
USWDS theme color tokens are divided into five high-level role-based color families: `base`, `primary`, `secondary`, `accent-warm`, and `accent-cool`.

**Base** is a project's neutral color, typically some tint of gray, and usually used as the text color throughout.

**Primary**, **secondary**, and **accent** colors can be thought of as falling into a proportional 60/30/10 relationship: about 60% of your site’s color would be the primary color family, about 30% would be the secondary color family, and about 10% would be the accent color families (`accent-warm` and `accent-cool`). Note that these proportions are for non-base colors. In many cases, the neutral base text color will be the predominant tone on your site.

Each color family has seven possible lightness grades, from `lightest` to `darkest`, though not every family needs to include a color at each grade. Some grades may be set to `false` in your project's theme settings. The default USWDS theme palette does not use every grade for every family. The `primary` and `secondary` families also have a `vivid` grade available.

## Customizing theme color tokens

Customize theme color tokens using the variables listed below in `_uswds_theme_color.scss` with [system color tokens]({{ site.baseurl }}/design-tokens/color/system-tokens/). Set any unused theme color to `false`.

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
      {% for item in colors.theme %}
        <tr>
          <td scope="row" data-title="Color" class="flex-align-center">
            <span class="site-inline-swatch bg-default-{{ item.token }}"></span>
          </td>
          <td data-title="Token">
            <span class="utility-class font-mono-2xs">'{{ item.token }}'</span>
          </td>
          <td data-title="Default" class="font-mono-2xs">
            '{{ item.default }}'
          </td>
          <td data-title="Settings var" class="font-mono-2xs">
            {% if item.setting %}
            {{ item.setting }}
            {% else %}
            $theme-color-{{ item.token }}
            {% endif %}
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

## Using theme color tokens
Your context and coding style determine how you access USWDS theme color tokens in code.

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
        <td scope="row" data-title="Context">
          <span class="text-bold font-lang-3">function</span>
        </td>
        <td data-title="Usage">
          <span>
            color(<a href="{{ site.baseurl }}/design-tokens/color/theme-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            color: color(<code>'primary-vivid'</code>)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-lang-3">
            <span class="text-bold">mixin</span><br/>
            <span>background-color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            u-bg(<a href="{{ site.baseurl }}/design-tokens/color/theme-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-bg(<code>'primary-vivid'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-lang-3">
            <span class="text-bold">mixin</span><br/>
            <span>color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            u-text(<a href="{{ site.baseurl }}/design-tokens/color/theme-tokens/" class="token">color</a>)<br/>
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-text(<code>'primary-vivid'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-lang-3">
            <span class="text-bold">mixin</span><br/>
            <span>border-color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            u-border(<a href="{{ site.baseurl }}/design-tokens/color/theme-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-border(<code>'primary-vivid'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-lang-3">
            <span class="text-bold">mixin</span><br/>
            <span>text-decoration-color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            u-underline(<a href="{{ site.baseurl }}/design-tokens/color/theme-tokens/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-underline(<code>'primary-vivid'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span>
            <span class="text-bold font-lang-3">setting</span><br/>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            <a href="{{ site.baseurl }}/design-tokens/color/theme-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            $theme-border-color: <code>'primary-vivid'</code>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-lang-3">
            <span class="text-bold">utility</span><br/>
            <span>background-color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            .bg-<a href="{{ site.baseurl }}/design-tokens/color/theme-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .bg-<code>base-lighter</code>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-lang-3">
            <span class="text-bold">utility</span><br/>
            <span>border-color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            .border-<a href="{{ site.baseurl }}/design-tokens/color/theme-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .border-<code>primary</code>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-lang-3">
            <span class="text-bold">utility</span><br/>
            <span>color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            .text-<a href="{{ site.baseurl }}/design-tokens/color/theme-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .text-<code>primary</code>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-lang-3">
            <span class="text-bold">utility</span><br/>
            <span>outline-color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            .outline-<a href="{{ site.baseurl }}/design-tokens/color/theme-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .outline-<code>primary</code>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-lang-3">
            <span class="text-bold">utility</span><br/>
            <span>text-decoration-color</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            .underline-<a href="{{ site.baseurl }}/design-tokens/color/theme-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .underline-<code>primary-vivid</code>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
