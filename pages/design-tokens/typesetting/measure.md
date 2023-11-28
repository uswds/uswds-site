---
permalink: /design-tokens/typesetting/measure/
layout: styleguide
title: Measure (line length)
category: Design tokens
lead: USWDS has 6 measure tokens to control the reading length of lines in a block of text.
type: docs
subnav:
- text: Measure tokens
  href: '#measure-tokens'
- text: Using measure tokens
  href: '#using-measure-tokens'
---

{% assign tokens = site.data.tokens.typesetting %}

## Measure tokens
<div class="site-table-wrapper">
  <div class="site-table-note">
    Measure is output in <code>ex</code> units, where <code>1ex</code> is equivalent to the height of an 'x' character in the desired font. The first section of each example below is 4 alphabets long.
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
          <th scope="row" data-title="Token">
            <span class="text-normal">
              {% if is_number %}
                <code class="text-no-wrap">{{ item.token }}</code>
              {% else %}
                <code class="text-no-wrap">'{{ item.token }}'</code>
              {% endif %}
            </span>
          </th>
          <td data-title="Example" class="overflow-hidden">
            <div>
              <div class="measure-{{ item.token }} font-lang-1">
                <strong class="text-secondary">a</strong><wbr />b<wbr />c<wbr />d<wbr />e<wbr />f<wbr />g<wbr />h<wbr />i<wbr />j<wbr />k<wbr />l<wbr />m<wbr />n<wbr />o<wbr />p<wbr />q<wbr />r<wbr />s<wbr />t<wbr />u<wbr />v<wbr />w<wbr />x<wbr />y<wbr />z<strong class="text-secondary">a</strong><wbr />b<wbr />c<wbr />d<wbr />e<wbr />f<wbr />g<wbr />h<wbr />i<wbr />j<wbr />k<wbr />l<wbr />m<wbr />n<wbr />o<wbr />p<wbr />q<wbr />r<wbr />s<wbr />t<wbr />u<wbr />v<wbr />w<wbr />x<wbr />y<wbr />z<strong class="text-secondary">a</strong><wbr />b<wbr />c<wbr />d<wbr />e<wbr />f<wbr />g<wbr />h<wbr />i<wbr />j<wbr />k<wbr />l<wbr />m<wbr />n<wbr />o<wbr />p<wbr />q<wbr />r<wbr />s<wbr />t<wbr />u<wbr />v<wbr />w<wbr />x<wbr />y<wbr />z<strong class="text-secondary">a</strong><wbr />b<wbr />c<wbr />d<wbr />e<wbr />f<wbr />g<wbr />h<wbr />i<wbr />j<wbr />k<wbr />l<wbr />m<wbr />n<wbr />o<wbr />p<wbr />q<wbr />r<wbr />s<wbr />t<wbr />u<wbr />v<wbr />w<wbr />x<wbr />y<wbr />z
              </div>
              <div class="font-lang-1 measure-{{ item.token }} margin-top-2">
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
        <th scope="row" data-title="Context">
          <span class="font-lang-3">function</span>
        </th>
        <td data-title="Description">
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
        <th scope="row" data-title="Context">
          <span class="font-lang-3">
            mixin
          </span>
        </th>
        <td data-title="Description">
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
        <th scope="row" data-title="Context">
          <span class="font-lang-3">setting</span>
        </th>
        <td data-title="Description">
          <span>
            <a href="{{ site.baseurl }}/design-tokens/typesetting/measure/" class="token">measure</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            $theme-text-measure: <code>5</code>
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
