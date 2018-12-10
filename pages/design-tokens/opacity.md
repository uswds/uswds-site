---
permalink: /design-tokens/opacity/
layout: styleguide
title: Opacity
category: Design tokens
lead: Opacity tokens set the opacity (or transparency) of an item in increments of 10%.
type: docs
subnav:
- text: Opacity tokens
  href: '#opacity-tokens'
- text: Using opacity tokens
  href: '#using-opacity-tokens'
---

{% assign tokens = site.data.tokens %}

## Opacity tokens

<div class="site-table-wrapper">
  <table class="usa-table-borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Example</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      {% for item in tokens.opacity %}
        {% include tokens/is_number.html %}

        <tr>
          <td scope="row" data-title="Token" class="tablet:width-10">
            <span>
              {% if converted %}
                <code>{{ converted }}</code>,
              {% endif %}
              {% if is_number %}
                <code>{{ item.token }}</code>
              {% else %}
                <code>'{{ item.token }}'</code>
              {% endif %}
            </span>
          </td>
          <td data-title="Example" class="padding-y-0">
            <div class="grid-row bg-primary padding-05 width-full margin-x-neg-05">
              <div class="grid-col opacity-{{ item.token }} bg-white height-4"></div>
              <div class="grid-col opacity-{{ item.token }} bg-secondary-vivid height-4"></div>
              <div class="grid-col opacity-{{ item.token }} bg-black height-4"></div>
            </div>
          </td>
          <td data-title="Value" class="tablet:width-10">
            <span>
              {{ item.value }}
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Using opacity tokens
Your context and coding style determine how you access USWDS opacity tokens in code.

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
        <td scope="row" data-title="Context">
          <span class="text-bold font-sans-3">function</span>
        </td>
        <td data-title="Usage">
          <span>
            opacity(<a href="{{ site.baseurl }}/design-tokens/opacity/" class="token">opacity</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            opacity: opacity(<code>10</code>)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-sans-3">
            <span class="text-bold">mixin</span><br/>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            u-opacity(<a href="{{ site.baseurl }}/design-tokens/opacity/" class="token">opacity</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-opacity(<code>10</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span>
            <span class="text-bold font-sans-3">setting</span><br/>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            <a href="{{ site.baseurl }}/design-tokens/opacity/" class="token">opacity</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            $theme-hover-opacity: <code>50</code>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-sans-3">
            <span class="text-bold">utility</span><br/>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            .opacity-<a href="{{ site.baseurl }}/design-tokens/opacity/" class="token">opacity</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .opacity-<code>50</code>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
