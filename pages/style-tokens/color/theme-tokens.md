---
permalink: /style-tokens/color/theme-tokens/
layout: styleguide
title: Theme color tokens
category: Style tokens
lead: USWDS theme color tokens provide flexible, accessible, customizable color choices for your project.
type: docs
subnav:
- text: Theme color tokens
  href: '#uswds-theme-color-tokens'
- text: Customizing theme color tokens
  href: '#customizing-theme-color-tokens'
- text: Using color tokens
  href: '#using-color-tokens-in-utilities-settings-and-component-sass'
---

{% assign theme_colors = site.data.uswds_tokens.colors.project_theme %}
{% assign state_colors = site.data.uswds_tokens.colors.project_state %}

USWDS theme color tokens are designed to be useful and effective for small and large projects.  Each theme token is drawn from a [system color]({{ site.baseurl }}/style-tokens/color/system-tokens/){:.token} token and we only use token-based colors in official components.

{:#uswds-theme-color-tokens}
## Theme color tokens
USWDS theme color tokens are divided into five high-level role-based color families: `base`, `primary`, `secondary`, `accent-warm`, and `accent-cool`.

**Base** is a project's neutral color, typically some tint of gray, and usually used as the text color throughout.

**Primary**, **secondary**, and **accent** colors can be thought of as falling into a proportional 60/30/10 relationship: about 60% of your site’s color would be the primary color family, about 30% would be the secondary color family, and about 10% would be the accent color families (`accent-warm` and `accent-cool`). Note that these proportions are for non-base colors. In many cases, the neutral base text color will be the predominant tone on your site.

Each color family has seven possible lightness grades, from `lightest` to `darkest`, though not every family needs to include a color at each grade. Some grades may be set to `false` in your project's theme settings. The default USWDS theme palette does not use every grade for every family. The `primary` and `secondary` families also have a `vivid` grade available.

<div class="site-table-wrapper">
  <table class="usa-table-borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Color</th>
        <th scope="col">Theme token</th>
        <th scope="col">System token</th>
        <th scope="col" class="text-right">Hex equivalent</th>
      </tr>
    </thead>
    <tbody>
      {% for color in theme_colors %}
        {% if color.hide_from_palette == true %}
        {% else %}
          <tr>
            <td scope="row" data-title="Color" class="flex-align-center">
              <span class="site-inline-swatch bg-{{ color.token }}"></span>
            </td>
            <td data-title="Theme token">
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

## Customizing theme color tokens
Customize theme color tokens in your project's theme settings with [system color tokens]({{ site.baseurl }}/style-tokens/color/system-tokens/).

Theme families tend to include colors from the same system family, but this is not a hard-and-fast rule. For instance, the USWDS default theme palette uses colors from both the `blue-warm` and `blue` system color families for colors in the `primary` theme family.

Set any unused theme color to `false`.

```sass
// Base colors
$theme-color-base-family:           'gray';
$theme-color-base-lightest:         '#{$theme-color-base-family}-5';
$theme-color-base-lighter:          'gray-cool-10';
$theme-color-base-light:            '#{$theme-color-base-family}-30';
$theme-color-base:                  '#{$theme-color-base-family}-50';
$theme-color-base-dark:             'gray-cool-60';
$theme-color-base-darker:           'gray-cool-80';
$theme-color-base-darkest:          '#{$theme-color-base-family}-90';
$theme-color-base-ink:              '#{$theme-color-base-family}-90';

// Primary colors
$theme-color-primary-family:        'blue';
$theme-color-primary-lightest:      false;
$theme-color-primary-lighter:       '#{$theme-color-primary-family}-10';
$theme-color-primary-light:         '#{$theme-color-primary-family}-30';
$theme-color-primary:               '#{$theme-color-primary-family}-60v';
$theme-color-primary-vivid:         'blue-warm-60v';
$theme-color-primary-dark:          'blue-warm-70v';
$theme-color-primary-darker:        'blue-warm-80v';
$theme-color-primary-darkest:       false;

// Secondary colors
$theme-color-secondary-family:      'red';
$theme-color-secondary-lightest:    false;
$theme-color-secondary-lighter:     '#{$theme-color-secondary-family}-10';
$theme-color-secondary-light:       '#{$theme-color-secondary-family}-30';
$theme-color-secondary:             '#{$theme-color-secondary-family}-50';
$theme-color-secondary-vivid:       '#{$theme-color-secondary-family}-50v';
$theme-color-secondary-dark:        '#{$theme-color-secondary-family}-60v';
$theme-color-secondary-darker:      '#{$theme-color-secondary-family}-70v';
$theme-color-secondary-darkest:     false;

// Accent warm colors
$theme-color-accent-warm-family:    'orange';
$theme-color-accent-warm-lightest:  false;
$theme-color-accent-warm-lighter:   '#{$theme-color-accent-warm-family}-10';
$theme-color-accent-warm-light:     '#{$theme-color-accent-warm-family}-20v';
$theme-color-accent-warm:           '#{$theme-color-accent-warm-family}-30v';
$theme-color-accent-warm-dark:      '#{$theme-color-accent-warm-family}-50v';
$theme-color-accent-warm-darker:    '#{$theme-color-accent-warm-family}-60';
$theme-color-accent-warm-darkest:   false;

// Accent cool colors
$theme-color-accent-cool-family:    'cyan';
$theme-color-accent-cool-lightest:  false;
$theme-color-accent-cool-lighter:   '#{$theme-color-accent-cool-family}-5';
$theme-color-accent-cool-light:     '#{$theme-color-accent-cool-family}-20';
$theme-color-accent-cool:           '#{$theme-color-accent-cool-family}-30v';
$theme-color-accent-cool-dark:      '#{$theme-color-accent-cool-family}-40v';
$theme-color-accent-cool-darker:    'blue-60';
$theme-color-accent-cool-darkest:   false;
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
            color: color(<code>'primary-vivid'</code>)
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
            @include u-bg(<code>'primary-vivid'</code>)<br/>
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
            @include u-text(<code>'primary-vivid'</code>)<br/>
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
            @include u-border(<code>'primary-vivid'</code>)<br/>
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
            @include u-underline(<code>'primary-vivid'</code>)<br/>
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
            $theme-border-color: <code>'primary-vivid'</code>
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
            @include u-underline(<code>'primary-vivid'</code>)<br/>
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
            .bg-<code>base-lighter</code>
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
            .border-<code>primary</code>
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
            .text-<code>primary</code>
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
            .outline-<code>primary</code>
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
            .underline-<code>primary</code>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
