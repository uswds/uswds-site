---
permalink: /design-tokens/typesetting/measure/
layout: styleguide
title: Measure (line length)
category: Design tokens
lead: USWDS has 6 measure tokens to control the reading length of lines in a block of text.
type: docs
subnav:
- text: Measure tokens
  href: '#line-height-tokens'
- text: Using measure tokens
  href: '#using-line-height-tokens'
---

{% assign tokens = site.data.tokens.typesetting %}

## Measure tokens
<div class="site-table-wrapper">
  <div class="site-table-note">
    Measure is output in <code>ch</code> units, where <code>1ch</code> is equivalent to the width of a 'zero' (<code>0</code>) character in the desired font. The first section of each example below is 9 alphabets long.
  </div>
  <table class="usa-table--borderless site-table-responsive width-full">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Example</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      {% for item in tokens.measure %}
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
          <td data-title="Example" class="overflow-hidden">
            <div>
              <div class="measure-{{ item.token }} font-sans-1">
                <strong>1</strong> c e g i k m o q s u w y <strong>2</strong> c e g i k m o q s u w y <strong>3</strong> c e g i k m o q s u w y <strong>4</strong> c e g i k m o q s u w y <strong>5</strong> c e g i k m o q s u w y <strong>6</strong> c e g i k m o q s u w y <strong>7</strong> c e g i k m o q s u w y <strong>8</strong> c e g i k m o q s u w y <strong>9</strong> c e g i k m o q s u w y
              </div>
              <div class="font-sans-1 measure-{{ item.token }} margin-top-2">
                You never see a frog so modest and straightforward as he was, for all he was so gifted. And when it come to fair and square jumping on a dead level, he could get over more ground at one straddle than any animal of his breed you ever see. Jumping on a dead level was his strong suit, you understand; and when it come to that, Smiley would ante up money on him as long as he had a red. Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled and been everywheres, all said he laid over any frog that ever they see.
              </div>
            </div>
          </td>
          <td data-title="Value">
            <span>
              {{ item.value }}
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Using measure tokens
Your context and coding style determine how you access USWDS measure tokens in code.

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
            measure(<a href="{{ site.baseurl }}/design-tokens/typesetting/measure/" class="token">measure</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            max-width: measure(<code>3</code>)
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
            u-measure(<a href="{{ site.baseurl }}/design-tokens/typesetting/measure/" class="token">measure</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-measure(<code>'none'</code>)<br/>
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
            <a href="{{ site.baseurl }}/design-tokens/typesetting/measure/" class="token">measure</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            $theme-body-measure: <code>4</code>
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
            .measure-<a href="{{ site.baseurl }}/design-tokens/typesetting/measure/" class="token">measure</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .measure-<code>3</code>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
