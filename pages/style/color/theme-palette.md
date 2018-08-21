---
permalink: /style/color/theme-palette/
layout: styleguide
title: Theme palette
category: Style
lead: USWDS theme colors provide flexible, accessible, customizable color choices
type: docs
subnav:
- text: Theme color palette
  href: '#theme-color-palette'
- text: State color palette
  href: '#state-color-palette'
- text: Setting theme and state colors
  href: '#setting-theme-and-state-colors'
- text: Using colors
  href: '#using-colors-in-utilities-settings-and-component-sass'
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

The USWDS theme color palette is designed to be useful and effective for small and large projects. Each color in a USWDS theme palette is drawn from a [larger system palette]({{ site.baseurl }}/style/color/system-palette/) that designers can use for further customization. Colors from the system palette are the only ones we use to build official components. Any components we accept back into the system need to be built with colors drawn from the system palette.

## Theme color palette
The theme color palettes is divided into five high-level role-based color families: `base`, `primary`, `secondary`, `accent-warm`, and `accent-cool`.

Base is a project's neutral color, typically some tint of gray, and usually used as the text color throughout.

Primary, secondary, and accent colors can be thought of as falling into a proportional 60/30/10 relationship: about 60% of your site’s color would be the primary color family, about 30% would be the secondary color family, and about 10% would be the accent color families (`accent-warm` and `accent-cool`). Note that these proportions are for non-base colors. In many cases, the neutral base text color will be the predominant tone on your site.

Each color family has seven possible lightness grades, from `lightest` to `darkest`, though not every family needs to include a color at each grade. Some grades may be set to `false` in your project's theme settings. The default USWDS theme palette does not use every grade for every family. The `primary` and `secondary` families also have a `vivid` grade available.

<div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px margin-top-4 text-bold font-sans-1">
  <div class="grid-col-1">color</div>
  <div class="grid-col-2">family token</div>
  <div class="grid-col-2">grade token</div>
  <div class="grid-col-4">theme settings variable</div>
  <div class="grid-col-2">system equivalent</div>
  <div class="grid-col-1 text-right">hex</div>
</div>

{% for color in theme_colors %}
  {% if color.hide_from_palette == true %}
  {% else %}
<div class="utility-example-container-condensed grid-row grid-gap flex-align-center">
  <span class="grid-col-1">
    <span class="square-4 radius-sm display-inline-block text-middle margin-right-1 bg-{{ color.token }}"></span>
  </span>
  <span class="grid-col-2">
    <span class="utility-class">'{{ color.family_token }}'</span>
  </span>
  <span class="grid-col-2">
    {% if color.grade_token %}
    <span class="utility-class">'{{ color.grade_token }}'</span>
    {% else %}
    <span>—</span>
    {% endif %}
  </span>
  <span class="grid-col-4 font-mono-3">
    <span>{{ color.theme_var }}</span>
  </span>
  <span class="grid-col-2 font-mono-3">
    <span>{{ color.system }}</span>
  </span>
  <span class="grid-col-1 text-right font-mono-3">
    {{ color.value }}
  </span>
</div>
  {% endif %}
{% endfor %}

## State color palette
The state color palette is divided into four high-level role-based color families: `error`, `warn`, `success`, and `disabled`.

Each color family except `disabled` has five possible lightness grades, from `lighter` to `darker`, though not every family needs to include a color at each grade. Some grades may be set to `false` in your project's theme settings.

<div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px margin-top-4 text-bold font-sans-1">
  <div class="grid-col-1">color</div>
  <div class="grid-col-2">family token</div>
  <div class="grid-col-2">grade token</div>
  <div class="grid-col-4">theme settings variable</div>
  <div class="grid-col-2">system equivalent</div>
  <div class="grid-col-1 text-right">hex</div>
</div>

{% for color in state_colors %}
  {% if color.hide_from_palette == true %}
  {% else %}
<div class="utility-example-container-condensed grid-row grid-gap flex-align-center">
  <span class="grid-col-1">
    <span class="square-4 radius-sm display-inline-block text-middle margin-right-1 bg-{{ color.token }}"></span>
  </span>
  <span class="grid-col-2">
    <span class="utility-class">'{{ color.family_token }}'</span>
  </span>
  <span class="grid-col-2">
    {% if color.grade_token %}
    <span class="utility-class">'{{ color.grade_token }}'</span>
    {% else %}
    <span>—</span>
    {% endif %}
  </span>
  <span class="grid-col-4 font-mono-3">
    <span>{{ color.theme_var }}</span>
  </span>
  <span class="grid-col-2 font-mono-3">
    <span>{{ color.system }}</span>
  </span>
  <span class="grid-col-1 text-right font-mono-3">
    {{ color.value }}
  </span>
</div>
  {% endif %}
{% endfor %}

## Setting theme and state colors
Set theme and state colors in your project's theme settings with tokens from the [system color palette]({{ site.baseurl }}/style/color/system-palette/) in the form `[family], [grade], [variant]` (The variant is optional).

Theme and state families tend to include colors from the same system family, but this is not a hard-and-fast rule. For instance, the USWDS default theme palette uses colors from both the `blue-warm` and `blue` system color families for colors in the `primary` theme family.

Set any unused theme or state color to `false`.

```
$theme-color-base-family:          'gray';
$theme-color-base-lightest:        $theme-color-base-family, 2;
$theme-color-base-lighter:         $theme-color-base-family, 5;
$theme-color-base-light:           $theme-color-base-family, 10;
$theme-color-base:                 $theme-color-base-family, 30;
$theme-color-base-dark:            $theme-color-base-family, 50;
$theme-color-base-darker:          $theme-color-base-family, 70;
$theme-color-base-darkest:         $theme-color-base-family, 90;
$theme-color-ink:                  $theme-color-base-darkest;

$theme-color-primary-family:       'blue';
$theme-color-primary-lightest:     false;
$theme-color-primary-lighter:      $theme-color-primary-family, 10;
$theme-color-primary-light:        $theme-color-primary-family, 30;
$theme-color-primary:              $theme-color-primary-family, 60, 'vivid';
$theme-color-primary-vivid:        'blue-warm', 60, 'vivid';
$theme-color-primary-dark:         'blue-warm', 70, 'vivid';
$theme-color-primary-darker:       'blue-warm', 80, 'vivid';
$theme-color-primary-darkest:      false;

$theme-color-secondary-family:     'red';
$theme-color-secondary-lightest:   false;
$theme-color-secondary-lighter:    $theme-color-secondary-family, 10;
$theme-color-secondary-light:      $theme-color-secondary-family, 30;
$theme-color-secondary:            $theme-color-secondary-family, 50;
$theme-color-secondary-vivid:      $theme-color-secondary-family, 50, 'vivid';
$theme-color-secondary-dark:       $theme-color-secondary-family, 60, 'vivid';
$theme-color-secondary-darker:     $theme-color-secondary-family, 70, 'vivid';
$theme-color-secondary-darkest:    false;

$theme-color-accent-warm-family:   'orange';
$theme-color-accent-warm-lightest: false;
$theme-color-accent-warm-lighter:  $theme-color-accent-warm-family, 10;
$theme-color-accent-warm-light:    $theme-color-accent-warm-family, 20, 'vivid';
$theme-color-accent-warm:          $theme-color-accent-warm-family, 30, 'vivid';
$theme-color-accent-warm-dark:     $theme-color-accent-warm-family, 50, 'vivid';
$theme-color-accent-warm-darker:   $theme-color-accent-warm-family, 60;
$theme-color-accent-warm-darkest:  false;

$theme-color-accent-cool-family:   'cyan';
$theme-color-accent-cool-lightest: false;
$theme-color-accent-cool-lighter:  $theme-color-accent-cool-family, 5;
$theme-color-accent-cool-light:    $theme-color-accent-cool-family, 20;
$theme-color-accent-cool:          $theme-color-accent-cool-family, 30, 'vivid';
$theme-color-accent-cool-dark:     $theme-color-accent-cool-family, 40, 'vivid';
$theme-color-accent-cool-darker:   'blue', 60;
$theme-color-accent-cool-darkest:  false;

$theme-color-error-family:         'red';
$theme-color-error-lighter:        $theme-color-error-family, 30, 'vivid';
$theme-color-error-light:          $theme-color-error-family, 40, 'vivid';
$theme-color-error:                $theme-color-error-family, 50, 'vivid';
$theme-color-error-dark:           $theme-color-error-family, 60;
$theme-color-error-darker:         $theme-color-error-family, 70;

$theme-color-warn-family:          'orange';
$theme-color-warn-lighter:         $theme-color-warn-family, 10;
$theme-color-warn-light:           $theme-color-warn-family, 20, 'vivid';
$theme-color-warn:                 $theme-color-warn-family, 30, 'vivid';
$theme-color-warn-dark:            $theme-color-warn-family, 40;
$theme-color-warn-darker:          $theme-color-warn-family, 50;

$theme-color-success-family:       'green-cool';
$theme-color-success-lighter:      $theme-color-success-family, 20, 'vivid';
$theme-color-success-light:        $theme-color-success-family, 30, 'vivid';
$theme-color-success:              $theme-color-success-family, 40, 'vivid';
$theme-color-success-dark:         $theme-color-success-family, 50;
$theme-color-success-darker:       $theme-color-success-family, 70;

$theme-color-disabled-family:      $theme-color-base-family;
$theme-color-disabled:             $theme-color-disabled-family, 30;

```

## Using colors in utilities, settings, and component Sass
You'll access USWDS colors using a few different techniques, depending on your situation and coding style.

{:.margin-bottom-0}
### Settings

{:.margin-top-05}
Use family, grade, and an optional variant token (for vivid variants of system colors) in the form `[family], [grade], [variant]`.

{:.maxw-mobile-lg}
```
$theme-color-accent-cool:          'mint', 30, 'vivid';
$theme-color-accent-cool-dark:     'mint', 50;
```

{:.margin-bottom-0.margin-top-4}
### Utilities

{:.margin-top-05}
Color utilities require an unquoted family token, an optional unquoted scale token, and an optional `v` suffix for vivid variants of system colors in the form `[utility]-[family]-[grade][v]`.

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
### Variables

{:.margin-top-05}
Color variable require an unquoted family token, an optional unquoted scale token, and an optional `v` suffix for vivid variants of system colors in the form `$[family]-[grade][v]`.

{:.maxw-mobile-lg}
```
border-color: $primary-vivid;
border-color: $blue-warm-50v;
background-color: $disabled;
```

{:.margin-bottom-0.margin-top-4}
### Functions

{:.margin-top-05}
The `color()` function accepts a family token, an optional scale token, and an optional variant token for vivid variants of system colors in the form `color([family], [grade], [variant])`.

{:.maxw-mobile-lg}
```
border-color: color('primary', 'vivid');
border-color: color('blue-warm', 50, 'vivid');
background-color: color('disabled');
```

{:.margin-bottom-0.margin-top-4}
### Utility mixins

{:.margin-top-05}
Utility mixins accept color variables in the form outlined above.

{:.maxw-mobile-lg}
```
@include u-text($primary, 'bold')
@include u-bg($red-warm-50v)
@include u-border-bottom('05', $base-lightest)
```
