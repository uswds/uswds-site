---
permalink: /style/color/
layout: styleguide
title: Color
category: Style
lead: USWDS theme colors provide flexible, accessible, customizable color choices
type: docs
subnav:
- text: Theme colors
  href: '#theme-typescale'
- text: Common colors
  href: '#common-typescale'
- text: Setting theme colors
  href: '#setting-theme-typeface-families'
- text: State-based colors
  href: '#type-based family-tokens'
- text: Using colors
  href: '#using-spacing-units-in-utilities-settings-and-component-sass'
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

The USWDS theme color palette is designed to be useful and effective for small and large projects. Each color in a USWDS theme palette is drawn from a [larger common palette](#0) that designers can use for further customization. Colors from the common palette are the only ones we use to build official components. Any components we accept back into the system need to be built with colors drawn from the common palette.

## Accessibility and magic number
Section 508 sets a legal standard for the contrast level necessary between text and its background. The baseline AA contrast standard is 4.5:1 for most text and 3.1:1 for large text (19px+ bold or 24px+ normal text).

USWDS helps teams choose accessible colors with a color grade system. Each color in the theme palette is drawn from a common palette color that's been graded from 0-100. (Grade can be considered an indicator of lightness, where grade `0` is pure white and grade `100` is pure black.) For example, the theme color `'base-darker'` has been assigned the common color `'gray-70'`, whose grade is `70`.

Here's an example of grades in the `gray` common color family:
<div class="padding-y-2">
  <div class="grid-row font-mono-2 text-400">
    <div class="grid-col-fill">
      <div class="bg-gray-5 height-4"></div>
      <div class="text-center margin-top-2px">5</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-10 height-4"></div>
      <div class="text-center margin-top-2px">10</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-20 height-4"></div>
      <div class="text-center margin-top-2px">20</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-30 height-4"></div>
      <div class="text-center margin-top-2px">30</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-40 height-4"></div>
      <div class="text-center margin-top-2px">40</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-50 height-4"></div>
      <div class="text-center margin-top-2px">50</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-60 height-4"></div>
      <div class="text-center margin-top-2px">60</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-70 height-4"></div>
      <div class="text-center margin-top-2px">70</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-80 height-4"></div>
      <div class="text-center margin-top-2px">80</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-90 height-4"></div>
      <div class="text-center margin-top-2px">90</div>
    </div><!-- swwatch -->
  </div>
</div>

### Magic number
We call the difference in grade between any two colors the _magic number_. Magic number has important contrast implications:
- A magic number of `40` or higher achieves Section 508 AA Large contrast.
- A magic number of `50` or higher achieves Section 508 AA contrast.
- Colors of grade `50` achieve Section 508 AA contrast against both pure white (grade `0`) and pure black (grade `100`).

Use USWDS magic numbers to choose accessible color combinations from any palette.

## Theme color palette
The nine-step theme scale should be sufficient for most project needs. First, try to use the theme scale. If your projects needs require more than nine sizes, use steps from the common scale as needed.

<div class="grid-row grid-gap flex-align-center margin-bottom-2 padding-bottom-1 border-bottom-2px margin-top-4 text-bold font-sans-1">
  <div class="grid-col-1">color</div>
  <div class="grid-col-fill">token</div>
  <div class="grid-col-3">common color equivalent</div>
  <div class="grid-col-1 text-right">hex</div>
</div>

{% for color in theme_colors %}
  {% if color.hide_from_palette == true %}
  {% else %}
<div class="utility-example-container-condensed grid-row grid-gap flex-align-center">
  <span class="grid-col-1">
    <span class="square-4 radius-sm display-inline-block text-middle margin-right-1 bg-{{ color.token }}"></span>
  </span>
  <span class="grid-col-fill">
    <span class="utility-class">'{{ color.token }}'</span>
  </span>
  <span class="grid-col-3">
    <span class="utility-class">'{{ color.common }}'</span>
  </span>
  <span class="grid-col-1 text-right font-mono-3">
    {{ color.value }}
  </span>
</div>
  {% endif %}
{% endfor %}

{:.maxw-mobile-lg}
```
$theme-font-heading:  $theme-font-serif;
$theme-font-body:     $theme-font-sans;
$theme-font-code:     $theme-font-mono;
$theme-font-alt:      $theme-font-sans;
```

## Using typescale in utilities, settings, and component Sass
You'll access USWDS typecale units using a few different techniques, depending on your situation and coding style.

{:.margin-bottom-0}
### Settings

{:.margin-top-05}
Use the scale token when assigning a typescale unit to a settings variable.

{:.maxw-mobile-lg}
```
$theme-type-scale-3xs:      1;
$theme-type-scale-2xs:      3;
$theme-type-scale-xs:       5;
$theme-type-scale-sm:       6;
$theme-type-scale-md:       7;
$theme-type-scale-lg:       10;
$theme-type-scale-xl:       12;
$theme-type-scale-2xl:      14;
$theme-type-scale-3xl:      16;
$theme-h1-font-size:        '2xl';
```

{:.margin-bottom-0.margin-top-4}
### Utilities

{:.margin-top-05}
The `font` utility requires both an unquoted family token and an unquoted scale token in the form `font-[family]-[size]`.

_The `font` utilities set both the font size and family._

{:.maxw-mobile-lg}
```
.font-sans-3xs
.font-body-md
.font-sans-micro
.font-mono-sm
```

{:.margin-bottom-0.margin-top-4}
### Variables

{:.margin-top-05}
The `$scale` variable requires both an unquoted family token and an unquoted scale token in the form `$scale-[family]-[scale]`.

_The `$scale` variable is only used for for `font-size`._

{:.maxw-mobile-lg}
```
font-size: $scale-sans-sm;
font-size: $scale-code-micro;
```

{:.margin-bottom-0.margin-top-4}
### Functions

{:.margin-top-05}
Use the `scale()` function to set the font size. The function requires both a  family token and a scale token in the form `scale([family], [scale])`.

_The `scale()` function is only for font-size._

{:.maxw-mobile-lg}
```
font-size: scale('mono', 'sm');
font-size: scale('body', 8);
```

{:.margin-bottom-0.margin-top-4}
### Utility mixins

{:.margin-top-05}
Use the `u-font()` mixin to set both the font size and the font family. The mixin requires both a family token and a scale token in the form `@include u-font([family], [scale])`.

Use the `u-font-size()` mixin to set the font size only. The mixin requires both a  family token and a scale token in the form `@include u-font-size([family], [scale])`.

Use the `u-font-family()` mixin to set the font family only. The mixin requires a  family token in the form `@include u-font-family([family])`.

_Use `u-font()` instead of using both `u-font-family()` and `u-font-size()` on a single selector, but avoid using it unneccessarily to avoid duplicate code._


{:.maxw-mobile-lg}
```
@include u-font('heading', 'xl')

@include u-font-family('sans')
@include u-font-size('sans', 12)

@include u-font-family('body')
@include u-font-size('body', 'sm')
```
