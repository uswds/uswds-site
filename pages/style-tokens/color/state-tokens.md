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

{% assign state_colors = site.data.uswds_tokens.colors.project_state %}

USWDS state color tokens are designed to be useful and effective for any project that has states or alerts. Each state token is drawn from a system [color]({{ site.baseurl }}/style-tokens/color/system-tokens/){:.token} token and we only use token-based colors in official components.

{:#uswds-state-color-tokens}
## State color tokens
The state color palette is divided into five high-level role-based color families: `info`, `error`, `warning`, `success`, and `disabled`.

Each color family except `disabled` has five possible lightness grades, from `lighter` to `darker`, though not every family needs to include a color at each grade. Some grades may be set to `false` in your project's theme settings.

<div class="site-table-wrapper">
  <table class="usa-table-borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Color</th>
        <th scope="col">State token</th>
        <th scope="col">System token</th>
        <th scope="col" class="text-right">Hex equivalent</th>
      </tr>
    </thead>
    <tbody>
      {% for color in state_colors %}
        {% if color.hide_from_palette == true %}
        {% else %}
          <tr>
            <td scope="row" data-title="Color" class="flex-align-center">
              <span class="site-inline-swatch bg-{{ color.token }}"></span>
            </td>
            <td data-title="State token">
              <span class="utility-class font-mono-2xs">'{{ color.family_token }}{% if color.grade_token %}-{{ color.grade_token }}{% endif %}'</span>
            </td>
            <td data-title="System token" class="font-mono-2xs">
              '{{ color.system }}'
            </td>
            <td data-title="Hex equivalent" class="font-mono-2xs text-right">
              {{ color.value }}
            </td>
          </tr>
        {% endif %}
      {% endfor %}
    </tbody>
  </table>
</div>

## Customizing state color tokens
Customize theme color tokens in your project's theme settings with system [color]({{ site.baseurl }}/style-tokens/color/system-tokens/){:.token} tokens. Set any unused state color to `false`.

```sass
/*
----------------------------------------
State palette colors
----------------------------------------
*/

// Error colors
$theme-color-error-family:     'red';
$theme-color-error-lighter:    '#{$theme-color-error-family}-10';
$theme-color-error-light:      '#{$theme-color-error-family}-40v';
$theme-color-error:            '#{$theme-color-error-family}-50';
$theme-color-error-dark:       '#{$theme-color-error-family}-60v';
$theme-color-error-darker:     '#{$theme-color-error-family}-70v';

// Warning colors
$theme-color-warning-family:   'gold';
$theme-color-warning-lighter:  '#{$theme-color-warning-family}-5v';
$theme-color-warning-light:    '#{$theme-color-warning-family}-10v';
$theme-color-warning:          '#{$theme-color-warning-family}-20v';
$theme-color-warning-dark:     '#{$theme-color-warning-family}-30v';
$theme-color-warning-darker:   '#{$theme-color-warning-family}-40v';

// Success colors
$theme-color-success-family:   'green-cool';
$theme-color-success-lighter:  '#{$theme-color-success-family}-5';
$theme-color-success-light:    '#{$theme-color-success-family}-30v';
$theme-color-success:          '#{$theme-color-success-family}-40v';
$theme-color-success-dark:     '#{$theme-color-success-family}-50';
$theme-color-success-darker:   '#{$theme-color-success-family}-70';

// Info colors
$theme-color-info-family:      'cyan';
$theme-color-info-lighter:     '#{$theme-color-info-family}-5';
$theme-color-info-light:       '#{$theme-color-info-family}-20';
$theme-color-info:             '#{$theme-color-info-family}-30v';
$theme-color-info-dark:        '#{$theme-color-info-family}-40v';
$theme-color-info-darker:      'blue-60';

// Disabled colors
$theme-color-disabled-family:  'gray';
$theme-color-disabled-light:   '#{$theme-color-disabled-family}-10';
$theme-color-disabled:         '#{$theme-color-disabled-family}-20';
$theme-color-disabled-dark:    '#{$theme-color-disabled-family}-30';

```

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
            color: color(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)
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
            @include u-bg(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)
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
            @include u-text(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)<br/>
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
            @include u-border(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)
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
            @include u-underline(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)
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
            $theme-variable: <a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>
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
            @include u-underline(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)
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
            .bg-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>
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
            .border-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>
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
            .text-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>
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
            .outline-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>
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
            .underline-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>
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
