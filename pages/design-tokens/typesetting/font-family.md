---
permalink: /design-tokens/typesetting/font-family/
layout: styleguide
title: Font family
category: Design tokens
lead: USWDS font family tokens allow designers and developers to set font family either by the type of font or the role the font plays in the design.
type: docs
subnav:
- text: Type-based tokens
  href: '#type-based-tokens'
- text: Role-based tokens
  href: '#role-based-tokens'
- text: Available font families
  href: '#available-font-families'
- text: Customizing family tokens
  href: '#customizing-family-tokens'
- text: Using family tokens
  href: '#using-typescale-in-utilities-settings-and-component-sass'
---

{% assign tokens = site.data.tokens.typesetting %}

{:.bg-gold-20v.padding-2.radius-md}
Please see the [Typesetting]({{ site.baseurl }}/design-tokens/typesetting){:.text-ink.text-bold} section for more about font size normalization and how USWDS uses `size` and `family` tokens for typesetting.

## Available fonts
The following fonts have normalization metadata in USWDS, and are available to settings variables as tokens:

<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      {% for item in tokens.family.font %}
        {% include tokens/is_number.html %}
        <tr>
          <td scope="row" data-title="Token">
            <span>
              {% if is_number %}
                <code class="text-no-wrap">{{ item.token }}</code>
              {% else %}
                <code class="text-no-wrap">'{{ item.token }}'</code>
              {% endif %}
            </span>
          </td>
          <td data-title="Stack">
            {% assign stack =
              tokens.stack
              | where: 'token', item.stack %}
            <span>
              {% if item.stack-name %}"{{ item.stack-name }}", {% endif %}{{ stack[0].value }}
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Type-based tokens
Type based tokens set the font family value based on the _type_ of the requested font: **monospaced**, **sans-serif**, **serif**, and **condensed** families.

<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Default</th>
        <th scope="col">Settings variable</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      {% for item in tokens.family.type %}
        {% include tokens/is_number.html %}
        <tr>
          <td scope="row" data-title="Token">
            <span>
              {% if is_number %}
                <code class="text-no-wrap">{{ item.token }}</code>
              {% else %}
                <code class="text-no-wrap">'{{ item.token }}'</code>
              {% endif %}
            </span>
          </td>
          <td data-title="Default">
            {% if item.default %}
              <span>
                '{{ item.default }}'
              </span>
            {% else %}
              <span>
                false
              </span>
            {% endif %}
          </td>
          <td data-title="Settings var">
            <span>
              $theme-font-{{ item.token }}
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

{:.bg-gold-20v.padding-2.radius-md}
**Note:** The `icon` family type is coming in a later release of the USWDS 2.0 Beta — sometime in November 2018.

## Role-based tokens
Role-based tokens set the font family value based on the _role_ the face plays in the project: **heading**, **body**, **ui**, **code**, and **alternate**.

<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Default</th>
        <th scope="col">Settings variable</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      {% for item in tokens.family.role %}
        {% include tokens/is_number.html %}
        <tr>
          <td scope="row" data-title="Token">
            <span>
              {% if is_number %}
                <code class="text-no-wrap">{{ item.token }}</code>
              {% else %}
                <code class="text-no-wrap">'{{ item.token }}'</code>
              {% endif %}
            </span>
          </td>
          <td data-title="Default">
            {% if item.default %}
              <span>
                '{{ item.default }}'
              </span>
            {% else %}
              <span>
                false
              </span>
            {% endif %}
          </td>
          <td data-title="Settings var">
            <span>
              $theme-font-{{ item.token }}
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

{:.bg-gold-20v.padding-2.radius-md}
**Note:** It is possible to add custom font metadata in USWDS settings. This documentation is coming in November 2018.

## Customizing family tokens
Customize [type](#0){:.token} and [role](#0){:.token} family tokens in your project's theme settings with available [font](#0){:.token} tokens. All typography-related settings are in `_uswds-theme-typography.scss`.

**First, use [font](#0){:.token} tokens to set the [type](#0){:.token} family tokens.** Set any unused types to `false`.

{:.margin-bottom-4}
```sass
$theme-font-mono:   'roboto-mono';
$theme-font-sans:   'source-sans-pro';
$theme-font-serif:  'merriweather';
$theme-font-cond:   false;
```

**Then use the type variables you just set to set the [role](#0){:.token} family tokens.** Set any unused types to `false`.

```sass
$theme-font-ui:       $theme-font-sans;
$theme-font-heading:  $theme-font-serif;
$theme-font-body:     $theme-font-sans;
$theme-font-code:     $theme-font-mono;
$theme-font-alt:      $theme-font-serif;
```

## Using family tokens
Your context and coding style determine how you access USWDS family tokens in code.


<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-sans-1">Context</div>
    <div class="grid-col-5 text-700 font-sans-1">Usage</div>
    <div class="grid-col-5 text-700 font-sans-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">function
    </div>
    <div class="grid-col-5">family(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>)</div>
    <div class="grid-col-5">font-family: family(<code>'body'</code>);</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">
      mixin<br/>
      <span class="text-normal">font-family</span>
    </div>
    <div class="grid-col-5">u-font-family(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>)</div>
    <div class="grid-col-5">@include u-font-family(<code>'sans'</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">
      mixin<br/>
      <span class="text-normal">font-family</span><br/>
      <span class="text-normal">font-size</span>
    </div>
    <div class="grid-col-5">u-font(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a>)</div>
    <div class="grid-col-5">@include u-font(<code>'body'</code>, <code>'2xl'</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">setting</div>
    <div class="grid-col-5"><a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a></div>
    <div class="grid-col-5">$theme-prose-font-family: <code>'body'</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility<br/>
      <span class="text-normal">font-family</span>
    </div>
    <div class="grid-col-5">.font-family-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a></div>
    <div class="grid-col-5">.font-family-<code>body</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-sans-3">utility<br/>
      <span class="text-normal">font-family</span><br/>
      <span class="text-normal">font-size</span>
    </div>
    <div class="grid-col-5">.font-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a></div>
    <div class="grid-col-5">.font-<code>body</code>-<code>2xl</code>;</div>
  </div>
</div>
