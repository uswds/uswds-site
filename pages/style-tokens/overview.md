---
permalink: /style-tokens/
layout: styleguide
title: Style tokens
category: Style tokens
lead: USWDS visual design is based on consistent palettes of typography, spacing units, color, and other discrete elements of style we call **style tokens**{:.font-sans-lg}.
type: docs
subnav:
  - text: Introducing style tokens
    href: '#introducing-style-tokens'
  - text: Keys and values
    href: '#keys-and-values'
  - text: Using style tokens
    href: '#using-style-tokens'
---

{{ page.collection | slugify }}

## Introducing style tokens

Anything we see on a website is built from elements of style: elements like color, spacing, typography, line height, and opacity. The CSS rules associated with these elements can accept a broad continuum of values — in the case of color, there are over 16 million separate colors in the RGB color space. Font size, line height, spacing, and others can accept a similarly wide range of values.

This degree of choice can slow down design work and make communication between designer and developer unnecessarily granular. The US Web Design System seeks to maximize design efficiency and improve communication with **style tokens**: the discrete palettes of values from which we base all our visual design.

Style tokens are a limited set of discrete options, just as a scale of musical notes is drawn from an infinite spectrum of possible frequencies. To extend the metaphor, USWDS style tokens are the notes from which we compose our visual designs.

{:.padding-y-2}
![continuous and tokenized values]({{ site.baseurl }}/assets/img/style-tokens/continuous-v-token.svg)

### Example: Measure (line length)
For example, measure (or line length) expressed with the `max-width` CSS property can accept any value in `em`, `rem`, `ch`, `px`, and beyond to at least two decimal places. USWDS limits itself to 6 [measure]({{ site.baseurl }}/style-tokens/typesetting/measure/){:.token} tokens:

| token   | value
| ---     | ---
|`1`      | `40ch`
|`2`      | `60ch`
|`3`      | `66ch`
|`4`      | `72ch`
|`5`      | `77ch`
|`'none'` | no max width

Anything built using USWDS will use one of these 6 [measure]({{ site.baseurl }}/style-tokens/typesetting/measure/){:.token} tokens when specifying measure.

## Keys and values
You can think of a style token as a **key** (expressed as a quoted string or, with only the exceptions of `1px` and `2px`, a unitless number) that unlocks a specific **value**. Often, the specific value is less important than its effect. And the mechanism by which the value is unlocked is a **function**, **mixin**, or **utility class**.

We can't include tokens directly in our Sass, like `max-width: 1`, rather we use a helper function like `max-width: measure(1)` or a mixin like `@include u-measure(1)`. All USWDS style tokens have helper mixins and functions to use them in component Sass.

{: .bg-warning.padding-1.radius-md }
**Note:** We do not include the token's value directly into our Sass rules.

### Example: Tokens in settings and component Sass

Tokens can, themselves, be expressed as variables. And this is how most USWDS theme settings work. For instance, the following is an example of theme settings from `_uswds-theme-spacing.scss` showing settings variables assigned spacing unit tokens:

```
$theme-site-max-width:              'desktop';
$theme-site-margins-breakpoint:     'desktop';
$theme-site-margins-width:          4;
$theme-site-margins-mobile-width:   2;
```

USWDS component Sass uses those variableized tokens to build component styles:

```
.usa-example {
  @include u-padding-x($theme-site-margins-mobile-width);
  max-width: units($theme-site-max-width);

  @include at-media($theme-site-margins-breakpoint) {
    @include u-padding-x($theme-site-margins-width);
  }
}
```

This is the functional equivalent of:

```
.usa-example {
  @include u-padding-x(2);
  max-width: units('desktop');

  @include at-media('desktop') {
    @include u-padding-x(4);
  }
}
```

Which, if `$theme-respect-user-font-size` is set to true would output something like:

```
.usa-example {
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 64rem;
}

@media screen and (min-width: 64em) {
  .usa-example {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
```

In general, USWDS sets variables with tokens, and passes those variables into functions and mixins in the source Sass.

## Using style tokens

Use style tokens directly to set the value of settings variables in USWDS theme settings files, like `$theme-site-max-width: 'desktop'`. Otherwise, use functions, mixins, or utility classes as in the examples below. See individual style token section for more details.

### Color
<div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2">
  <div class="grid-col-2">Token</div>
  <div class="grid-col-3">Function</div>
  <div class="grid-col-3">Mixin</div>
  <div class="grid-col-4">Utility class</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">
    <a href="{{ site.baseurl }}/style-tokens/color/" class="token">color</a>
  </div>
  <div class="grid-col-3">color(<a href="{{ site.baseurl }}/style-tokens/color/" class="token">color</a>)</div>
  <div class="grid-col-3">u-border(<a href="{{ site.baseurl }}/style-tokens/color/" class="token">color</a>)</div>
  <div class="grid-col-3">.border-<a href="{{ site.baseurl }}/style-tokens/color/" class="token">color</a></div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'red-warm-50'</div>
  <div class="grid-col-3">color('red-warm-50')</div>
  <div class="grid-col-3">u-border('red-warm-50')</div>
  <div class="grid-col-3">.border-red-warm-50</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'red-warm-50v'</div>
  <div class="grid-col-3">color('red-warm-50v')</div>
  <div class="grid-col-3">u-border('red-warm-50v')</div>
  <div class="grid-col-3">.border-red-warm-50v</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'primary-vivid'</div>
  <div class="grid-col-3">color('primary-vivid')</div>
  <div class="grid-col-3">u-text('primary-vivid')</div>
  <div class="grid-col-4">.text-primary-vivid</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'white'</div>
  <div class="grid-col-3">color('white')</div>
  <div class="grid-col-3">u-bg('white')</div>
  <div class="grid-col-4">.bg-white</div>
</div>

### Spacing units
<div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2">
  <div class="grid-col-2">Token</div>
  <div class="grid-col-3">Function</div>
  <div class="grid-col-3">Mixin</div>
  <div class="grid-col-4">Utility class</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">
    <a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">units</a>
  </div>
  <div class="grid-col-3">units(<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">units</a>)</div>
  <div class="grid-col-3">u-padding-x(<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">units</a>)</div>
  <div class="grid-col-3">.u-padding-x-<a href="{{ site.baseurl }}/style-tokens/spacing-units/" class="token">units</a></div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">0.5<br/><span class="display-inline-block padding-top-05">'05'</span></div>
  <div class="grid-col-3">units(0.5)<br/><span class="display-inline-block padding-top-05">units('05')</span></div>
  <div class="grid-col-3">u-padding-x(0.5)<br/><span class="display-inline-block padding-top-05">u-padding-x('05')</span></div>
  <div class="grid-col-3">.u-padding-x-05</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">2</div>
  <div class="grid-col-3">units(2)</div>
  <div class="grid-col-3">u-border(2)</div>
  <div class="grid-col-3">.border-2</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'card-lg'</div>
  <div class="grid-col-3">units('card-lg')</div>
  <div class="grid-col-3">u-width('card-lg')</div>
  <div class="grid-col-4">.width-card-lg</div>
</div>

### Font size
<div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2">
  <div class="grid-col-2">Tokens</div>
  <div class="grid-col-3">Function</div>
  <div class="grid-col-3">Mixin</div>
  <div class="grid-col-4">Utility class</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">
    <a href="{{ site.baseurl }}/style-tokens/typesetting/font-family" class="token">family</a>,
    <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>
  </div>
  <div class="grid-col-3">font-size(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>)</div>
  <div class="grid-col-3">u-font-size(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>)</div>
  <div class="grid-col-4">.font-size-<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family" class="token">family</a>-<a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a></div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'sans', '3xs'</div>
  <div class="grid-col-3">font-size('sans', '3xs')</div>
  <div class="grid-col-3">u-font-size('sans', '3xs')</div>
  <div class="grid-col-4">.font-size-sans-3xs</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'ui', 'micro'</div>
  <div class="grid-col-3">font-size('ui', 'micro')</div>
  <div class="grid-col-3">u-font-size('ui', 'micro')</div>
  <div class="grid-col-4">.font-size-ui-micro</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'body', 15</div>
  <div class="grid-col-3">font-size('body', 15)</div>
  <div class="grid-col-3">u-font-size('body', 15)</div>
  <div class="grid-col-4">.font-size-body-15</div>
</div>

### Font family
<div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2">
  <div class="grid-col-2">Token</div>
  <div class="grid-col-3">Function</div>
  <div class="grid-col-3">Mixin</div>
  <div class="grid-col-4">Utility class</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2"><a href="{{ site.baseurl }}/style-tokens/typesetting/font-family" class="token">family</a></div>
  <div class="grid-col-3">font-family(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family" class="token">family</a>)</div>
  <div class="grid-col-3">u-font-family(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family" class="token">family</a>)</div>
  <div class="grid-col-4">.font-family-<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family" class="token">family</a></div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'sans'</div>
  <div class="grid-col-3">font-family('sans')</div>
  <div class="grid-col-3">u-font-family('sans')</div>
  <div class="grid-col-4">.font-family-sans</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'body'</div>
  <div class="grid-col-3">font-family('body')</div>
  <div class="grid-col-3">u-font-family('body')</div>
  <div class="grid-col-4">.font-family-body</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'heading'</div>
  <div class="grid-col-3">font-family(15)</div>
  <div class="grid-col-3">u-font-family(15)</div>
  <div class="grid-col-4">.font-family-15</div>
</div>

### Font family and size together
<div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2">
  <div class="grid-col-2">Tokens</div>
  <div class="grid-col-3">Function</div>
  <div class="grid-col-3">Mixin</div>
  <div class="grid-col-4">Utility class</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2"><a href="{{ site.baseurl }}/style-tokens/typesetting/font-family" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a></div>
  <div class="grid-col-3">—</div>
  <div class="grid-col-3">u-font(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>)</div>
  <div class="grid-col-4">.font-<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family" class="token">family</a>-<a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a></div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'sans', '3xs'</div>
  <div class="grid-col-3">—</div>
  <div class="grid-col-3">u-font('sans', '3xs')</div>
  <div class="grid-col-4">.font-sans-3xs</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'body', 'micro'</div>
  <div class="grid-col-3">—</div>
  <div class="grid-col-3">u-font('body', 'micro')</div>
  <div class="grid-col-4">.font-body-micro</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2">'heading', 15</div>
  <div class="grid-col-3">—</div>
  <div class="grid-col-3">u-font('heading', 15)</div>
  <div class="grid-col-4">.font-heading-15</div>
</div>
