---
permalink: /design-tokens/spacing-units/
layout: styleguide
title: Spacing units
category: Design tokens
lead: USWDS spacing unit tokens are based on multiples of 8px, with additional tokens for small sizes, named tokens for large sizes, and a more limited selection of negative tokens.
type: docs
subnav:
- text: Spacing unit tokens
  href: '#spacing-unit-tokens'
- text: Using spacing unit tokens
  href: '#using-spacing-unit-tokens'
- text: Latest update
  href: '#changelog'
changelog:
  key: tokens-spacing
---

{% assign tokens = site.data.tokens.spacing %}
{% assign spacing =
  tokens.positive.smaller
  | concat: tokens.positive.small
  | concat: tokens.positive.medium
  | concat: tokens.positive.large
  | concat: tokens.positive.larger
  | concat: tokens.positive.largest
  | concat: tokens.negative.smaller
  | concat: tokens.negative.small
  | concat: tokens.negative.medium %}

Any spacing value in utilities or component CSS should use the following spacing unit tokens, based on multiples of 8px. The documentation below displays a target value in pixels, but the final output for tokens above `2px` and below `-2px` is the eqivalent value in `rem`, which will vary depending on your project settings.

{:.bg-gold-20v.padding-2.radius-md}
**Note:** Some units tokens come in two flavors: a **numeric token** (like `0.5` or `-2`) and a **string token** (like `'05'` or `'neg-2'`). _Utility classes use unquoted string tokens exclusively when they exist_ (like `.margin-x-neg-2`). Mixins and functions usually accept either, and we will note any exceptions.

## Spacing unit tokens

<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Multiple</th>
        <th scope="col">Value</th>
        <th scope="col">Example</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      {% for item in spacing %}
        {% include tokens/is_number.html %}
        {% assign multiple = item.value | divided_by: 8.0 | rounded: 1 %}
        {% assign rounded = multiple | round: 0 %}

        <tr>
          <th scope="row" data-title="Token" class="tablet:width-10">
            <span class="text-no-wrap padding-right-4">
              <!-- Non-numeric tokens receive `converted` value from conversion.yml-->
              {% if converted %}
                <code>{{ converted }}</code>,
              <!-- Some non-numerics need explicit `conversion` value from spacing.yml -->
              {% elsif item.conversion %}
                <code>{{ item.conversion }}</code>,
              {% endif %}
              {% if is_number %}
                <code>{{ item.token }}</code>
              {% else %}
                <code>'{{ item.token }}'</code>
              {% endif %}
            </span>
          </th>
          <td data-title="Multiple" class="tablet:width-10">
            <span>
              {% if item.token contains 'px' %}
              —
              {% else %}
                {% if multiple == rounded %}
                  {{ rounded }}
                {% else %}
                  {{ multiple }}
                {% endif %}
              {% endif %}
            </span>
          </td>
          <td data-title="Value" class="tablet:width-10">
            <span class="tablet:text-no-wrap">
              {{ item.value }}
            </span>
          </td>
          {% if multiple > 0 and multiple <= 15 %}
            <td data-title="Example" class="padding-y-1">
              <span class="display-block width-full height-{{ item.token }} bg-blue-60v"></span>
            </td>
          {% else %}
          <td data-title="Example" class="is-empty">
          </td>
          {% endif %}
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Using spacing unit tokens
Your context and coding style determine how you access USWDS spacing unit tokens in code.

Many mixins and utilities accept spacing unit tokens. See the [utilities section]({{ site.baseurl }}/utilities/) for more on individual utilities and their matching mixins. We show only a few representative examples below.

<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Context</th>
        <th scope="col">Usage</th>
        <th scope="col">Example</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs line-height-sans-6">
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">function</span>
        </th>
        <td data-title="Description">
          <span>
            units(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            padding-top: units(<code>3</code>);<br/>
            margin-left: units(<code>-2px</code>);<br/>
            border-radius: units(<code>0.5</code>);<br/>
            min-height: units(<code>'card'</code>);<br/>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3 line-height-sans-2">
            mixin <br>
            <span class="text-normal">min-width media query</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            at-media(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include at-media(<code>'mobile-lg'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3 line-height-sans-2">
            mixin <br>
            <span class="text-normal">max-width media query</span>
          </span>
        </th>
        <td data-title="Description">
          <span>
            at-media-max(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include at-media-max(<code>'mobile-lg'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">setting</span>
        </th>
        <td data-title="Description">
          <span>
            <a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            $theme-site-margins-mobile-width: <code>2</code>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            utility
          </span>
        </th>
        <td data-title="Description">
          <span>
            .padding-x-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a><br/>
            .margin-x-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .padding-x-<code>2</code><br/>
            .margin-x-<code>neg-2</code><br/>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
