---
permalink: /design-tokens/typesetting/overview/
layout: styleguide
title: Using type
category: Design tokens
lead: Typesetting in USWDS means understanding the relationship between font family, font size, and line height.
type: docs
redirect_from:
  - /design-tokens/typesetting/
  - /design-tokens/typography
subnav:
  - text: Normalization
    href: '#normalization'
  - text: Typesetting with tokens
    href: '#typesetting-with-tokens'
  - text: Latest updates
    href: '#changelog'
changelog:
  key: tokens-type
---

{% assign tokens = site.data.tokens.typesetting %}

## Normalization
Typefaces vary in optical size. This means that at any specific pixel value, an optically small typeface like Source Sans Pro will appear smaller than an optically large typeface like Merriweather. Optical size is a function of internal font metrics and typeface design choices like x-height.

{:.font-lang-md}
### Fonts at native size

{:.padding-top-2}
![optical size of native typefaces. shows merriweather as optically large, source sans pro as optically small, and public sans in the middle.]({{ site.baseurl }}/assets/img/design-tokens/font-comparison.svg){: role="img"}

USWDS 3 is designed so each size token outputs a consistent optical size regardless of the typeface. This makes our guidance more reliable and our theming more flexible.

{:.font-lang-md}
### Fonts with normalization applied

{:.padding-y-2}
![optical size of normalized typefaces. shows each font having a similar optical size.]({{ site.baseurl }}/assets/img/design-tokens/font-comparison-normalized.svg){: role="img"}

To make different typefaces appear the same size (here called the _target size_) at each step of the scale (below, we see the output of [size]({{ site.baseurl }}/design-tokens/typesetting/font-size/){:.token} token `10`), the absolute size of each token's output varies depending on the font family.

Each [supported typeface]({{ site.baseurl }}/design-tokens/typesetting/font-family/) is normalized to a target value determined by the optical size of common system fonts — specifically Apple's typeface San Francisco and Google's typeface Roboto.

{% assign target_font_size = 24 %}
{% assign target_line_height = 1.35 %}

<div class="site-table-wrapper maxw-tablet">
  <div class="site-table-note">
    For <a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a> token <code>10</code> (24px) we see the following normalized output:
  </div>

  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Supported typeface</th>
        <th scope="col">Normalization</th>
        <th scope="col">Final output (px)</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      {% for item in tokens.family.font %}
        {% assign multiple = tokens.meta.normal
          | times: 1.0
          | divided_by: item.normal %}
        <tr>
          <th scope="row" data-title="Typeface">
            <span class="text-normal">
              {{ item.name }}
            </span>
          </th>
          <td data-title="Normalization">
            <span>
              {{ multiple | round: 2 }}
            </span>
          </td>
          <td data-title="Output (px)">
            <span>
              {{ target_font_size | times: multiple | round: 2 }}
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

### Rem-based font sizing
In USWDS, the final font size is output not in pixels but in `rem` (a multiple of the page's root font size). If you have `$theme-respect-user-font-size` set to `true` in your theme settings, the root font size is set to `100%` and typescale is calculated based on `16px`. If `$theme-respect-user-font-size` set to `false`, the root font size is set to the value of `$theme-root-font-size` and typescale is calculated based on that root.

Since both the `rem` and absolute `px` values change depending on the theme settings and the typeface, our documentation displays only the `px` value of the target.

### Normalization and line height
USWDS has six target line heights in its [line-height]({{ site.baseurl }}/design-tokens/typesetting/line-height/){:.token} token system. These targets are unitless numbers, multipliers of the font size of the affected text. For example, if the target line height were `2` in text with a target font size of `16px`, the final line height would be the `target line height * target font size` or `2 * 16px` or `32px`.

Since we use normalization on font sizing, we must also normalize line height to hit the target line height:

<div class="site-table-wrapper">
  <div class="site-table-note">
    For <a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a> token <code>10</code> (24px) and <a href="{{ site.baseurl }}/design-tokens/typesetting/line-height/" class="token">line-height</a> token <code>3</code> ({{ target_line_height }} / {{ target_line_height | times: target_font_size }}px) we see the following normalized output:
  </div>

  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Supported typeface</th>
        <th scope="col">Normalization</th>
        <th scope="col">Final size (px)</th>
        <th scope="col">Final line height</th>
        <th scope="col">Final line height (px)</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      {% for item in tokens.family.font %}
        {% assign normal = tokens.meta.normal
          | times: 1.0
          | divided_by: item.normal %}
        <tr>
          <th scope="row" data-title="Typeface">
            <span class="text-normal">
              {{ item.name }}
            </span>
          </th>
          <td data-title="Normalization">
            <span>
              {{ normal | round: 2 }}
            </span>
          </td>
          <td data-title="Size (px)">
            <span>
              {{ target_font_size | times: normal | round: 2 }}
            </span>
          </td>
          <td data-title="Line height">
            <span>
              {{ target_line_height | divided_by: normal | round: 2 }}
            </span>
          </td>
          <td data-title="Line height (px)">
            <span>
              {{ target_line_height | times: target_font_size }}
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Typesetting with tokens
USWDS uses **functions**, **mixins**, and **utility classes** to style its components with design tokens. Because we use normalized values, as described above, font size and line height functions, mixins, and utility classes differ from many others in the system by requiring _two_ tokens: a [family]({{ site.baseurl }}/design-tokens/typesetting/font-family/){:.token} token and either a [size]({{ site.baseurl }}/design-tokens/typesetting/font-size/){:.token} or a [line-height]({{ site.baseurl }}/design-tokens/typesetting/line-height/){:.token} token.

The individual design token sections go into this in more detail, but here's a summary:

### Font family
<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Function</th>
        <th scope="col">Mixin</th>
        <th scope="col">Utility class</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            <a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>
          </span>
        </th>
        <td data-title="Function">
          <span>
            family(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>)
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-font-family(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>)
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            .font-family-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            'body'
          </span>
        </th>
        <td data-title="Function">
          <span>
            family('body')
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-font-family('body')
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            .font-family-body
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            'sans'
          </span>
        </th>
        <td data-title="Function">
          <span>
            family('sans')
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-font-family('sans')
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            .font-family-sans
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Font size
<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Function</th>
        <th scope="col">Mixin</th>
        <th scope="col">Utility class</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            <a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a>
          </span>
        </th>
        <td data-title="Function">
          <span>
            size(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a>)
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-font-size(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a>)
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            .font-size-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            'ui', 'micro'
          </span>
        </th>
        <td data-title="Function">
          <span>
            size('ui', 'micro')
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-font-size('ui', 'micro')
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            —
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            'sans', 6
          </span>
        </th>
        <td data-title="Function">
          <span>
            size('sans', 6)
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-font-size('sans', 6)
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            —
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Family and size together
<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Function</th>
        <th scope="col">Mixin</th>
        <th scope="col">Utility class</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            <a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a>
          </span>
        </th>
        <td data-title="Function">
          <span>
            —
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-font(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a>)
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            .font-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            'ui', 'micro'
          </span>
        </th>
        <td data-title="Function">
          <span>
            —
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-font('ui', 'micro')
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            .font-ui-micro
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            'sans', 6
          </span>
        </th>
        <td data-title="Function">
          <span>
            —
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-font('sans', 6)
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            .font-sans-6
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Line height
<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Function</th>
        <th scope="col">Mixin</th>
        <th scope="col">Utility class</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs line-height-sans-6">
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            <a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <br/><a href="{{ site.baseurl }}/design-tokens/typesetting/line-height/" class="token">line-height</a>
          </span>
        </th>
        <td data-title="Function">
          <span>
            line-height(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <br/><a href="{{ site.baseurl }}/design-tokens/typesetting/line-height/" class="token">line-height</a>)
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-line-height(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <br/><a href="{{ site.baseurl }}/design-tokens/typesetting/line-height/" class="token">line-height</a>)
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            .line-height-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>-<a href="{{ site.baseurl }}/design-tokens/typesetting/line-height/" class="token">line-height</a>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            'ui', 1
          </span>
        </th>
        <td data-title="Function">
          <span>
            line-height('ui', 1)
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-line-height('ui', 1)
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            line-height-ui-1
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            'sans', 3
          </span>
        </th>
        <td data-title="Function">
          <span>
            line-height('sans', 3)
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-line-height('sans', 3)
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            .line-height-sans-3
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Family, size, and line height together
The `typeset()` mixin allows you to set family, size, and line height all in one line. It accepts the tokens listed as well as a special `null` value. If either of the three properties get `null` instead of a token, the system will use a default value from [typography settings]({{ site.baseurl }}/documentation/settings/#typography-settings): either `$theme-body-font-family`, `$theme-body-font-size`, or `$theme-body-line-height` depending on the property passed the `null` value.

We use the `typeset()` mixin on all our components to get the effect of default `<body>` element styling without having to explicitly style the `<body>` element.

<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Function</th>
        <th scope="col">Mixin</th>
        <th scope="col">Utility class</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs line-height-sans-6">
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            <a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a>, <a href="{{ site.baseurl }}/design-tokens/typesetting/line-height/" class="token">line-height</a>
          </span>
        </th>
        <td data-title="Function">
          <span>
            —
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            typeset(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a>, <a href="{{ site.baseurl }}/design-tokens/typesetting/line-height/" class="token">line-height</a>)
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            —
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            'ui', 'micro', 1
          </span>
        </th>
        <td data-title="Function">
          <span>
            —
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            typeset('ui', 'micro', 1)
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            —
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            'ui', null, 3
          </span>
        </th>
        <td data-title="Function">
          <span>
            —
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            typeset('ui', null, 3)
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            —
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            'ui', xs, null
          </span>
        </th>
        <td data-title="Function">
          <span>
            —
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            typeset('ui', xs)
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            —
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Token">
          <span class="text-normal">
            'ui', null, null
          </span>
        </th>
        <td data-title="Function">
          <span>
            —
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            typeset('ui')
          </span>
        </td>
        <td data-title="Utility class">
          <span>
            —
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>


See this example:

{:.margin-top-4}
#### Example: Settings and typesetting

```scss
// In your settings configuration:

@use "uswds-core" with (
  $theme-respect-user-font-size: true,
  $theme-font-type-sans: "public-sans",
  $theme-font-role-ui: "sans",
  $theme-type-scale-sm: 5,
  $theme-body-font-size: "sm",
  $theme-body-line-height: 5
);

// in component code:

.usa-component {
  @include typeset('ui');
}

// is the equivalent of:

.usa-component {
  font-family: family('ui');
  font-size: size('ui', $theme-body-font-size);
  line-height: line-height('ui', $theme-body-line-height);
}

// compiles as:

.usa-component {
  font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1rem;
  line-height: 1.62;
}

```
