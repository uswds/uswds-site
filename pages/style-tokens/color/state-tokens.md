---
permalink: /style-tokens/color/state-tokens/
layout: styleguide
title: State color tokens
category: Style tokens
lead: USWDS theme and state color tokens provide flexible, accessible, customizable color choices for your project
type: docs
subnav:
- text: Theme color tokens
  href: '#theme-color-tokens'
- text: State color tokens
  href: '#uswds-state-color-tokens'
- text: Setting theme and state color tokens
  href: '#setting-theme-and-state-colors'
- text: Using color tokens
  href: '#using-color-tokens-in-utilities-settings-and-component-sass'
- text: Settings
  href: '#settings'
- text: Utilities
  href: '#utilities'
- text: Variables
  href: '#variables'
- text: Functions
  href: '#functions'
- text: Utility mixins
  href: '#utility-mixins'
---

{% assign theme_colors = site.data.uswds_tokens.colors.project_theme %}
{% assign state_colors = site.data.uswds_tokens.colors.project_state %}

USWDS theme color tokens are designed to be useful and effective for small and large projects. Each theme token is drawn from a [system color token]({{ site.baseurl }}/style-tokens/color/system-tokens/) and system color tokens are the only colors we accept in official components.

## Theme color tokens
USWDS theme color tokens are divided into five high-level role-based color families: `base`, `primary`, `secondary`, `accent-warm`, and `accent-cool`.

**Base** is a project's neutral color, typically some tint of gray, and usually used as the text color throughout.

**Primary**, **secondary**, and **accent** colors can be thought of as falling into a proportional 60/30/10 relationship: about 60% of your site’s color would be the primary color family, about 30% would be the secondary color family, and about 10% would be the accent color families (`accent-warm` and `accent-cool`). Note that these proportions are for non-base colors. In many cases, the neutral base text color will be the predominant tone on your site.

Each color family has seven possible lightness grades, from `lightest` to `darkest`, though not every family needs to include a color at each grade. Some grades may be set to `false` in your project's theme settings. The default USWDS theme palette does not use every grade for every family. The `primary` and `secondary` families also have a `vivid` grade available.

<div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px margin-top-4 text-bold font-sans-1">
  <div class="grid-col-1">color</div>
  <div class="grid-col-4">theme token</div>
  <div class="grid-col-3">system token equivalent</div>
  <div class="grid-col-fill text-right">hex value</div>
</div>

{% for color in theme_colors %}
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

{:#uswds-state-color-tokens}
## State color tokens
The state color palette is divided into four high-level role-based color families: `error`, `warning`, `success`, and `disabled`.

Each color family except `disabled` has five possible lightness grades, from `lighter` to `darker`, though not every family needs to include a color at each grade. Some grades may be set to `false` in your project's theme settings.

<div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px margin-top-4 text-bold font-sans-1">
  <div class="grid-col-1">color</div>
  <div class="grid-col-4">state token</div>
  <div class="grid-col-3">system token equivalent</div>
  <div class="grid-col-fill text-right">hex value</div>
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

## Setting theme and state color tokens
Set theme and state tokens in your project's theme settings with [system color tokens]({{ site.baseurl }}/style-tokens/color/system-tokens/).

Theme and state families tend to include colors from the same system family, but this is not a hard-and-fast rule. For instance, the USWDS default theme palette uses colors from both the `blue-warm` and `blue` system color families for colors in the `primary` theme family.

Set any unused theme or state color to `false`.

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

## Using color tokens in utilities, settings, and component Sass
You'll access USWDS colors using a few different techniques, depending on your situation and coding style.

{:.margin-bottom-0}
### Settings

{:.margin-top-05}
Use quoted color tokens.

{:.maxw-mobile-lg}
```
$theme-color-accent-cool:          'mint-30v';
$theme-color-accent-cool-dark:     'mint-50';
```

{:.margin-bottom-0.margin-top-4}
### Utilities

{:.margin-top-05}
Color utilities require a quoted color token.

_Note: In USWDS utilities, only the theme palette is activated by default. See the [color utilities section](#0) for more details about how to activate additional palettes for your utilities._

{:.maxw-mobile-lg}
```
.bg-secondary
.bg-primary-darker
.text-primary-vivid
.color-red-warm-50v
.underline-accent-warm
```

{:.margin-bottom-0.margin-top-4}
### Functions

{:.margin-top-05}
The `color()` function requires a quoted color token. The `advanced-color()` function requires separate family, grade, and variant tokens in the form `'[family]', [grade], '[variant]'`.

{:.maxw-mobile-lg}
```
border-color: color('primary-vivid');
border-color: color('blue-warm-50v');
background-color: color('disabled');

border-color: advanced-color('primary', 'vivid');
border-color: advanced-color('blue-warm', 50, 'vivid');
background-color: advanced-color('disabled');
```

{:.margin-bottom-0.margin-top-4}
### Utility mixins

{:.margin-top-05}
Utility mixins accept single color tokens in the form outlined above.

{:.maxw-mobile-lg}
```
@include u-text('primary-dark')
@include u-bg('red-warm-50v')
@include u-border-bottom('05', 'base-lightest')
```
