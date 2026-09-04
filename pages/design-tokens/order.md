---
permalink: /design-tokens/order/
layout: styleguide
title: Order
category: Design tokens
lead: Use order tokens to set the order of an item in a flex container.
type: docs
subnav:
- text: Order tokens
  href: '#order-tokens'
- text: Using order tokens
  href: '#using-order-tokens'
- text: Latest updates
  href: '#changelog'
changelog:
  key: tokens-order
---

{% assign tokens = site.data.tokens %}

## Order tokens
<div class="site-table-wrapper">
  <div class="site-table-note">
    <strong>Note:</strong> Ordered items are only ordered among other ordered items. Any unordered siblings will be ordered by their appearance in the DOM. Siblings sharing the same order will all appear at the specified position in the order in which they appear in the DOM.
  </div>
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Example</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      {% for item in tokens.order %}
        {% include tokens/is_number.html %}

        <tr>
          <th scope="row" data-title="Token" class="tablet:width-15 text-normal">
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
          </th>
          <td data-title="Example">
            <div class="grid-row grid-gap-sm width-full">
              <div class="grid-col {% if forloop.first == true %}order-initial{% else %}order-1{% endif %}">
                <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">1</span>
              </div>
              <div class="grid-col {% if forloop.first %}order-initial{% else %}order-2{% endif %}">
                <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">2</span>
              </div>
              <div class="grid-col {% if forloop.first %}order-initial{% else %}order-3{% endif %}">
                <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">3</span>
              </div>
              <div class="grid-col {% if forloop.first %}order-initial{% else %}order-4{% endif %}">
                <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">4</span>
              </div>
              <div class="grid-col {% if forloop.first %}order-initial{% else %}order-5{% endif %}">
                <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">5</span>
              </div>
              <div class="grid-col order-{{ item.token }}">
                <span class="bg-secondary border border-secondary text-white width-full display-inline-block radius-sm text-center padding-y-05">6</span>
              </div>
              <div class="grid-col {% if forloop.first %}order-initial{% else %}order-7{% endif %}">
                <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">7</span>
              </div>
              <div class="grid-col {% if forloop.first %}order-initial{% else %}order-8{% endif %}">
                <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">8</span>
              </div>
              <div class="grid-col {% if forloop.first %}order-initial{% else %}order-9{% endif %}">
                <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">9</span>
              </div>
              <div class="grid-col {% if forloop.first %}order-initial{% else %}order-10{% endif %}">
                <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">10</span>
              </div>
              <div class="grid-col {% if forloop.first %}order-initial{% else %}order-11{% endif %}">
                <span class="border border-base-light width-full display-inline-block radius-sm text-center padding-y-05">11</span>
              </div>
            </div>
          </td>
          <td data-title="Value" class="tablet:width-15">
            <span>
              {{ item.value }}
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Using order tokens
Your context and coding style determine how you access USWDS order tokens in code.

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
        <th scope="row" data-title="Context text-normal">
          <span class="text-bold font-lang-3">function</span>
        </th>
        <td data-title="Description">
          <span>
            order(<a href="{{ site.baseurl }}/design-tokens/order/" class="token">order</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            order: order(<code>'last'</code>)
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context text-normal">
          <span class="font-lang-3">
            <span class="text-bold">mixin</span><br/>
          </span>
        </th>
        <td data-title="Description">
          <span>
            u-order(<a href="{{ site.baseurl }}/design-tokens/order/" class="token">order</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-order(<code>'last'</code>)<br/>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" data-title="Context text-normal">
          <span class="font-lang-3">
            <span class="text-bold">utility</span><br/>
          </span>
        </th>
        <td data-title="Description">
          <span>
            .order-<a href="{{ site.baseurl }}/design-tokens/order/" class="token">order</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .order-<code>last</code>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
