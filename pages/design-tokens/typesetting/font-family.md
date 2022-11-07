---
permalink: /design-tokens/typesetting/font-family/
layout: styleguide
title: Font family
category: Design tokens
lead: USWDS font family tokens allow designers and developers to set font family either by the type of font or the role the font plays in the design.
type: docs
subnav:
- text: Available fonts
  href: '#available-fonts'
- text: Type-based tokens
  href: '#type-based-tokens'
- text: Role-based tokens
  href: '#role-based-tokens'
- text: Customizing family tokens
  href: '#customizing-family-tokens'
- text: Using family tokens
  href: '#using-family-tokens'
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
          <th scope="row" data-title="Token">
            <span class="text-normal">
              {% if is_number %}
                <code class="text-no-wrap">{{ item.token }}</code>
              {% else %}
                <code class="text-no-wrap">'{{ item.token }}'</code>
              {% endif %}
            </span>
          </th>
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
Type based tokens set the font family value based on the _type_ of the requested font: **icon**, **language**, **monospaced**, **sans-serif**, **serif**, and **condensed** families.

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
          <th scope="row" data-title="Token">
            <span class="text-normal">
              {% if is_number %}
                <code class="text-no-wrap">{{ item.token }}</code>
              {% else %}
                <code class="text-no-wrap">'{{ item.token }}'</code>
              {% endif %}
            </span>
          </th>
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
              $theme-font-type-{{ item.token }}
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

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
          <th scope="row" data-title="Token">
            <span class="text-normal">
              {% if is_number %}
                <code class="text-no-wrap">{{ item.token }}</code>
              {% else %}
                <code class="text-no-wrap">'{{ item.token }}'</code>
              {% endif %}
            </span>
          </th>
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
              $theme-font-role-{{ item.token }}
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

{:.site-note.margin-top-3}
**Note:** It is possible to add **custom font metadata**, **custom font stacks**, and **custom font source files** in your USWDS settings. Create a new project-specific theme settings file. If your project already has a single project-specific theme settings file, you’re all set. If not, create a new file in your project theme file called `_uswds-theme.scss`.

## Customizing family tokens
Customize [type](#type-based-tokens){:.token} and [role](#role-based-tokens){:.token} family tokens in your project's theme settings with available [font](#available-fonts){:.token} tokens. All typography-related settings can be found in [USWDS settings]({{ site.baseurl }}/documentation/settings/#typography-settings).

**First, use [font](#available-fonts){:.token} tokens to set the [type](#type-based-tokens){:.token} family tokens.** Set any unused types to `false`.

{:.margin-bottom-4}
```sass
$theme-font-type-cond:   false;
$theme-font-type-icon:   false;
$theme-font-type-lang:   false;
$theme-font-type-mono:   'roboto-mono';
$theme-font-type-sans:   'source-sans-pro';
$theme-font-type-serif:  'merriweather';
```

**Then use the type variables you just set to set the [role](#role-based-tokens){:.token} family tokens.** Set any unused types to `false`.

```sass
$theme-font-role-ui:       $theme-font-sans;
$theme-font-role-heading:  $theme-font-serif;
$theme-font-role-body:     $theme-font-sans;
$theme-font-role-code:     $theme-font-mono;
$theme-font-role-alt:      $theme-font-serif;
```

## Using family tokens
Your context and coding style determine how you access USWDS family tokens in code.


<div class="bg-white radius-md border padding-x-2 padding-top-1 padding-bottom-2px">
  <div class="grid-row grid-gap flex-align-center margin-bottom-1 padding-bottom-1 border-bottom-2px text-bold">
    <div class="grid-col-2 text-700 font-lang-1">Context</div>
    <div class="grid-col-5 text-700 font-lang-1">Usage</div>
    <div class="grid-col-5 text-700 font-lang-1">Example</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-lang-3">function
    </div>
    <div class="grid-col-5">family(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>)</div>
    <div class="grid-col-5">font-family: family(<code>'body'</code>);</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-lang-3">
      mixin<br/>
      <span class="text-normal">font-family</span>
    </div>
    <div class="grid-col-5">u-font-family(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>)</div>
    <div class="grid-col-5">@include u-font-family(<code>'sans'</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-lang-3">
      mixin<br/>
      <span class="text-normal">font-family</span><br/>
      <span class="text-normal">font-size</span>
    </div>
    <div class="grid-col-5">u-font(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a>)</div>
    <div class="grid-col-5">@include u-font(<code>'body'</code>, <code>'2xl'</code>)</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-lang-3">setting</div>
    <div class="grid-col-5"><a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a></div>
    <div class="grid-col-5">$theme-prose-font-family: <code>'body'</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 margin-bottom-1 border-bottom border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-lang-3">utility<br/>
      <span class="text-normal">font-family</span>
    </div>
    <div class="grid-col-5">.font-family-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a></div>
    <div class="grid-col-5">.font-family-<code>body</code>;</div>
  </div>
  <div class="grid-row grid-gap flex-align-center padding-bottom-1 border-gray-10 font-mono-3">
    <div class="grid-col-2 text-bold font-lang-3">utility<br/>
      <span class="text-normal">font-family</span><br/>
      <span class="text-normal">font-size</span>
    </div>
    <div class="grid-col-5">.font-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a></div>
    <div class="grid-col-5">.font-<code>body</code>-<code>2xl</code>;</div>
  </div>
</div>
