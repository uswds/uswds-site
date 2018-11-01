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

USWDS theme color tokens are designed to be useful and effective for small and large projects. Each theme token is drawn from a [system color token]({{ site.baseurl }}/style-tokens/color/system-tokens/) and system color tokens are the only colors we accept in official components.

{:#uswds-state-color-tokens}
## State color tokens
The state color palette is divided into five high-level role-based color families: `info`, `error`, `warning`, `success`, and `disabled`.

Each color family except `disabled` has five possible lightness grades, from `lighter` to `darker`, though not every family needs to include a color at each grade. Some grades may be set to `false` in your project's theme settings.

<table class="usa-table-borderless usa-table-responsive-reflow">
  <thead>
    <tr>
      <th scope="col">Color</th>
      <th scope="col">State color token</th>
      <th scope="col">System color token</th>
      <th scope="col">Hex equivalent</th>
    </tr>
  </thead>
  <tbody>
    {% for color in state_colors %}
      {% if color.hide_from_palette == true %}
      {% else %}
        <tr>
          <td scope="row" data-title="Color" class="flex-align-center">
            <span class="square-4 radius-sm display-inline-block text-middle width-full bg-{{ color.token }}"></span>
          </td>
          <td data-title="State token" class="font-mono-2xs">
            <span class="utility-class font-mono-2xs">'{{ color.family_token }}{% if color.grade_token %}-{{ color.grade_token }}{% endif %}'</span>
          </td>
          <td data-title="System token" class="font-mono-2xs">
            <span >{{ color.system }}</span>
          </td>
          <td data-title="Hex equivalent" class="font-mono-2xs">
            {{ color.value }}
          </td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>

<div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px margin-top-4 text-bold font-sans-1">
  <div class="grid-col-1">Color</div>
  <div class="grid-col-4">State token</div>
  <div class="grid-col-3">System token equivalent</div>
  <div class="grid-col-fill text-right">Hex value</div>
</div>

{% for color in state_colors %}
  {% if color.hide_from_palette == true %}
  {% else %}
<div class="utility-example-container-condensed grid-row grid-gap flex-align-center">
  <span class="grid-col-1">
    <span class="square-4 radius-sm display-inline-block text-middle margin-right-1 bg-{{ color.token }}"></span>
  </span>
  <span class="grid-col-4">
    <span class="utility-class">'{{ color.family_token }}{% if color.grade_token %}-{{ color.grade_token }}{% endif %}'</span>
  </span>
  <span class="grid-col-3 font-mono-3">
    <span>{{ color.system }}</span>
  </span>
  <span class="grid-col-fill text-right font-mono-3">
    {{ color.value }}
  </span>
</div>
  {% endif %}
{% endfor %}

## Customizing state color tokens
Customize theme color tokens in your project's theme settings with [system color tokens]({{ site.baseurl }}/style-tokens/color/system-tokens/). Set any unused state color to `false`.

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

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Context</div>
    <div class="grid-col-5 text-700 font-sans-1">Usage</div>
    <div class="grid-col-5 text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3 line-height-mono-6">
    <div class="grid-col-2 text-bold font-sans-3">function</div>
    <div class="grid-col-5">color: color(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)</div>
    <div class="grid-col-5">color: color(<code>'warning-dark'</code>);</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3 line-height-mono-6">
    <div class="grid-col-2 text-bold font-sans-3 line-height-mono-2">
      mixin<br/>
      <span class="text-normal">background-color</span>
    </div>
    <div class="grid-col-5">
      @include u-bg(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)
    </div>
    <div class="grid-col-5">
      @include u-bg(<code>'warning-dark'</code>)<br/>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3 line-height-mono-6">
    <div class="grid-col-2 text-bold font-sans-3 line-height-mono-2">
      mixin<br/>
      <span class="text-normal">color</span>
    </div>
    <div class="grid-col-5">
      @include u-text(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)
    </div>
    <div class="grid-col-5">
      @include u-text(<code>'warning-dark'</code>)<br/>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3 line-height-mono-6">
    <div class="grid-col-2 text-bold font-sans-3 line-height-mono-2">
      mixin<br/>
      <span class="text-normal">border-color</span>
    </div>
    <div class="grid-col-5">
      @include u-border(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)
    </div>
    <div class="grid-col-5">
      @include u-border(<code>'warning-dark'</code>)<br/>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3 line-height-mono-6">
    <div class="grid-col-2 text-bold font-sans-3 line-height-mono-2">
      mixin<br/>
      <span class="text-normal">outline-color</span>
    </div>
    <div class="grid-col-5">
      @include u-outline(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)
    </div>
    <div class="grid-col-5">
      @include u-outline(<code>'warning-dark'</code>)<br/>
    </div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3 line-height-mono-6">
    <div class="grid-col-2 text-bold font-sans-3 line-height-mono-2">
      mixin<br/>
      <span class="text-normal">text-decoration-color</span>
    </div>
    <div class="grid-col-5">
      @include u-underline(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)
    </div>
    <div class="grid-col-5">
      @include u-underline(<code>'warning-dark'</code>)<br/>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">setting</div>
    <div class="grid-col-5">$theme-variable: <a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">$theme-color-warning: <code>'warning-dark'</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility<br/>
      <span class="text-normal">background-color</span>
    </div>
    <div class="grid-col-5">.bg-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">.bg-<code>warning-light</code></div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility<br/>
      <span class="text-normal">border-color</span>
    </div>
    <div class="grid-col-5">.border-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">.border-<code>error</code></div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility<br/>
      <span class="text-normal">color</span>
    </div>
    <div class="grid-col-5">.text-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">.text-<code>error</code></div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility<br/>
      <span class="text-normal">outline-color</span>
    </div>
    <div class="grid-col-5">.text-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">.text-<code>error</code></div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3 line-height-mono-2">utility<br/>
      <span class="text-normal">text-decoration-color</span>
    </div>
    <div class="grid-col-5">.underline-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">.underline-<code>error</code></div>
  </div>
</div>
