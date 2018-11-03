---
permalink: /style-tokens/typesetting/font-size/
layout: styleguide
title: Font size
category: Style tokens
lead: Font size tokens determine how big or small the referenced text will appear on the screen. The USWDS typescale includes nine regularized theme tokens drawn from 21 system tokens.
type: docs
subnav:
- text: Theme tokens
  href: '#theme-tokens'
- text: System tokens
  href: '#system-tokens'
- text: Using size tokens
  href: '#using-typescale-in-utilities-settings-and-component-sass'
system_tokens:
  - micro:
    name: micro
    target: 10px
  - 1:
    name: 1
    target: 12px
  - 2:
    name: 2
    target: 13px
  - 3:
    name: 3
    target: 14px
  - 4:
    name: 4
    target: 15px
  - 5:
    name: 5
    target: 16px
  - 6:
    name: 6
    target: 17px
  - 7:
    name: 7
    target: 18px
  - 8:
    name: 8
    target: 20px
  - 9:
    name: 9
    target: 22px
  - 10:
    name: 10
    target: 24px
  - 11:
    name: 11
    target: 28px
  - 12:
    name: 12
    target: 32px
  - 13:
    name: 13
    target: 36px
  - 14:
    name: 14
    target: 40px
  - 15:
    name: 15
    target: 48px
  - 16:
    name: 16
    target: 56px
  - 17:
    name: 17
    target: 64px
  - 18:
    name: 18
    target: 80px
  - 19:
    name: 19
    target: 120px
  - 20:
    name: 20
    target: 140px
theme_tokens:
  - 3xs:
    name: 3xs
    assignment: 1
  - 2xs:
    name: 2xs
    assignment: 3
  - xs:
    name: xs
    assignment: 5
  - sm:
    name: sm
    assignment: 6
  - md:
    name: md
    assignment: 7
  - lg:
    name: lg
    assignment: 10
  - xl:
    name: xl
    assignment: 12
  - 2xl:
    name: 2xl
    assignment: 14
  - 3xl:
    name: 3xl
    assignment: 16
---

{:.bg-gold-20v.padding-2.radius-md}
Please see the [Typesetting]({{ site.baseurl }}/style-tokens/typesetting){:.text-ink.text-bold} section for more about font size normalization and how USWDS uses tokens for typesetting. The documentation below displays a "target size" in pixels, rather than the final output, which will be normalized depending on the typeface and output in `rem` customized to your project settings.

## Theme tokens
The following chart shows the USWDS default settings for the nine theme size tokens. Customize the output to your project needs in `$uswds-theme-typography.scss` following the example [below](#customizing-theme-tokens). If your project requires more than nine sizes, use [system size tokens](#system-tokens) as needed.

<div class="site-table-wrapper maxw-tablet">
  <table class="usa-table-borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Theme token</th>
        <th scope="col">System token</th>
        <th scope="col">Target size</th>
        <th scope="col">Example</th>
      </tr>
    </thead>
    <tbody class="font-ui-2xs">
      {% for token in page.theme_tokens %}
        <tr>
          <td scope="row" data-title="Theme token">
            <span>
              <code>'{{ token.name }}'</code>
            </span>
          </td>
          <td data-title="System token">
            <span>
              <code>{{ token.assignment }}</code>
            </span>
          </td>
          <td data-title="Output">
            <span>
              {{ page.system_tokens[token.assignment].target }}
            </span>
          </td>
          <td data-title="Example"  class="line-height-sans-1 overflow-hidden">
            <span class="font-sans-{{ token.name }}">
              Tallahassee
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

### Customizing theme tokens
Customize the output of your project's theme tokens in `_uswds-theme-typography.scss`. Assign [system size tokens](#system-tokens) to the following variables, then recompile your project CSS.

```
$theme-type-scale-3xs:      2;
$theme-type-scale-2xs:      3;
$theme-type-scale-xs:       4;
$theme-type-scale-sm:       5;
$theme-type-scale-md:       6;
$theme-type-scale-lg:       9;
$theme-type-scale-xl:       12;
$theme-type-scale-2xl:      14;
$theme-type-scale-3xl:      15;
```


{:.margin-top-6}
## System tokens

<div class="site-table-wrapper maxw-tablet">
  <table class="usa-table-borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">System token</th>
        <th scope="col">Target size</th>
        <th scope="col">Example</th>
      </tr>
    </thead>
    <tbody class="font-ui-2xs">
      {% for token in page.system_tokens %}
        <tr>
          <td scope="row" data-title="System token">
            <span>
              <code>'{{ token.name }}'</code>
            </span>
          </td>
          <td data-title="Output">
            <span>
              {{ token.target }}
            </span>
          </td>
          <td data-title="Example"  class="line-height-sans-1 overflow-hidden">
            <span class="font-sans-{{ token.name }}">
              {% if token.name == 19 or token.name == 20 %}Utica{% else %}Tallahassee{% endif %}
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Using size tokens
Your context and coding style determine how you access USWDS font size tokens in code. Because of [font size normalization]({{ site.baseurl }}/style-tokens/typesetting/), font size functions, utilities, and mixins also require a [family]({{ site.baseurl }}/style-tokens/typesetting/font-family/){:.token} token.

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
        <td scope="row" data-title="Context" class="font-sans-2xs">
          <span>
            <span class="text-bold">function</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            size(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            font-size: size(<code>'body'</code>, <code>'2xl'</code>)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context" class="font-sans-2xs">
          <span>
            <span class="text-bold">mixin</span>
            <span class="display-block">font-size</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            u-font-size(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-font-size(<code>'body'</code>, <code>'2xl'</code>)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context" class="font-sans-2xs">
          <span>
            <span class="text-bold">mixin</span>
            <span class="display-block">font-family</span>
            <span class="display-block">font-size</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            u-font(<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-font(<code>'body'</code>, <code>'2xl'</code>)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context" class="font-sans-2xs">
          <span>
            <span class="text-bold">setting</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            $theme-variable: <a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
          $theme-h1-font-size: <code>'2xl'</code>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context" class="font-sans-2xs">
          <span>
            <span class="text-bold">utility</span>
            <span class="display-block">font-family</span>
            <span class="display-block">font-size</span>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            .font-<a href="{{ site.baseurl }}/style-tokens/typesetting/font-family/" class="token">family</a>-<a href="{{ site.baseurl }}/style-tokens/typesetting/font-size/" class="token">size</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .font-<code>body</code>-<code>2xl</code>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
