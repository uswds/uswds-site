---
permalink: /design-tokens/color/theme-tokens/
layout: styleguide
title: Theme color tokens
category: Design tokens
lead: USWDS theme color tokens provide flexible, accessible, customizable color choices for your project.
type: docs
redirect_from:
  - /components/colors/theme/
  - /colors/theme/
  - /color/theme/
subnav:
- text: About theme color tokens
  href: '#uswds-theme-color-tokens'
- text: Customizing theme color tokens
  href: '#customizing-theme-color-tokens'
- text: Using theme color tokens
  href: '#using-theme-color-tokens'
- text: Latest updates
  href: '#changelog'
changelog:
  key: tokens-color-theme
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

{% include tokens/customize-color-token.html token_type="theme" example_token="primary-vivid" example_value="blue-warm-50v" %}

## Theme color tokens table

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
          <th scope="row" data-title="Color" class="flex-align-center text-normal">
            <span class="site-inline-swatch bg-default-{{ item.token }}"></span>
          </th>
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

For example, all three of the following examples result in the same output:

```
// function
div {
  background-color: color("primary");
}

// mixin
div {
  @include u-bg("primary");
}

// utility
<div class="bg-primary">...</div>

```

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
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>mixin</span><br/>
            <span class="text-normal">background-color</span>
          </span>
        </th>
        <td data-title="Description">
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
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>mixin</span><br/>
            <span class="text-normal">color</span>
          </span>
        </th>
        <td data-title="Description">
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
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>mixin</span><br/>
            <span class="text-normal">border-color</span>
          </span>
        </th>
        <td data-title="Description">
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
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>mixin</span><br/>
            <span class="text-normal">text-decoration-color</span>
          </span>
        </th>
        <td data-title="Description">
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
        <th scope="row" data-title="Context">
          <span>
            <span class="font-lang-3">setting</span><br/>
          </span>
        </th>
        <td data-title="Description">
          <span>
            <a href="{{ site.baseurl }}/design-tokens/color/theme-tokens/" class="token">color</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            $theme-link-color: <code>'primary-vivid'</code>
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
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>utility</span><br/>
            <span class="text-normal">border-color</span>
          </span>
        </th>
        <td data-title="Description">
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
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>utility</span><br/>
            <span class="text-normal">color</span>
          </span>
        </th>
        <td data-title="Description">
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
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>utility</span><br/>
            <span class="text-normal">outline-color</span>
          </span>
        </th>
        <td data-title="Description">
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
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            <span>utility</span><br/>
            <span class="text-normal">text-decoration-color</span>
          </span>
        </th>
        <td data-title="Description">
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
