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

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px text-bold font-sans-1">
    <div class="grid-col-1">Color</div>
    <div class="grid-col-4">Theme token</div>
    <div class="grid-col-3">System token equivalent</div>
    <div class="grid-col-fill text-right">Hex value</div>
  </div>

  {% for color in theme_colors %}
    {% if color.hide_from_palette == true %}
    {% else %}
  <div class="utility-example-container-condensed grid-row grid-gap flex-align-center{% if forloop.last == true %} border-bottom-0 margin-bottom-0{% endif %}">
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

<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Context</div>
    <div class="grid-col-5 text-700 font-sans-1">Usage</div>
    <div class="grid-col-5 text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3 line-height-mono-6">
    <div class="grid-col-2 text-bold font-sans-3">function</div>
    <div class="grid-col-5">color: color(<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a>)</div>
    <div class="grid-col-5">color: color(<code>'primary-vivid'</code>);</div>
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
      @include u-bg(<code>'secondary-vivid'</code>)<br/>
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
      @include u-text(<code>'secondary-vivid'</code>)<br/>
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
      @include u-border(<code>'secondary-vivid'</code>)<br/>
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
      @include u-outline(<code>'secondary-vivid'</code>)<br/>
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
      @include u-underline(<code>'secondary-vivid'</code>)<br/>
    </div>
  </div>

  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">setting</div>
    <div class="grid-col-5">$theme-variable: <a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">$theme-color-accent-warm: <code>'orange-40'</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility<br/>
      <span class="text-normal">background-color</span>
    </div>
    <div class="grid-col-5">.bg-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">.bg-<code>accent-warm</code></div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility<br/>
      <span class="text-normal">border-color</span>
    </div>
    <div class="grid-col-5">.border-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">.border-<code>accent-warm</code></div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility<br/>
      <span class="text-normal">color</span>
    </div>
    <div class="grid-col-5">.text-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">.text-<code>accent-warm</code></div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility<br/>
      <span class="text-normal">outline-color</span>
    </div>
    <div class="grid-col-5">.text-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">.text-<code>accent-warm</code></div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3 line-height-mono-2">utility<br/>
      <span class="text-normal">text-decoration-color</span>
    </div>
    <div class="grid-col-5">.underline-<a href="{{ site.baseurl }}/style-tokens/color/theme-tokens/" class="token">color</a></div>
    <div class="grid-col-5">.underline-<code>accent-warm</code></div>
  </div>
</div>
