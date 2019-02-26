---
permalink: /design-tokens/flex/
layout: styleguide
title: Flex
category: Design tokens
lead: USWDS flex tokens provide simple options for setting the flex width of an item.
type: docs
subnav:
- text: Flex tokens
  href: '#flex-tokens'
- text: Using flex tokens
  href: '#using-flex-tokens'
---

{% assign tokens = site.data.tokens %}

## Flex tokens
<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Example</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      {% for item in tokens.flex %}
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
          <td data-title="Example">
            <div class="grid-row grid-gap-sm width-full">
              <div class="grid-col flex-{{ item.token }}">
                <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center padding-x-105">
                </div>
              </div>
              <div class="grid-col flex-1">
                <div class="height-6 width-full display-flex flex-align-center border border-base-dark flex-justify-center">
                </div>
              </div>
              <div class="grid-col flex-1">
                <div class="height-6 width-full display-flex flex-align-center border border-base-dark flex-justify-center">
                </div>
              </div>
              <div class="grid-col flex-1">
                <div class="height-6 width-full display-flex flex-align-center border border-base-dark flex-justify-center">
                </div>
              </div>
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

## Using flex tokens
Your context and coding style determine how you access USWDS flex tokens in code.

<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
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
            flex(<a href="{{ site.baseurl }}/design-tokens/flex/" class="token">flex</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            flex: flex(<code>'fill'</code>)
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
            u-flex(<a href="{{ site.baseurl }}/design-tokens/flex/" class="token">flex</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-flex(<code>'fill'</code>)<br/>
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
            <a href="{{ site.baseurl }}/design-tokens/flex/" class="token">flex</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            $theme-nav-column-flex: <code>4</code>
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
            .flex-<a href="{{ site.baseurl }}/design-tokens/flex/" class="token">flex</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .flex-<code>fill</code>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
