---
permalink: /design-tokens/typesetting/line-height/
layout: styleguide
title: Line height
category: Design tokens
lead: USWDS has 6 normalized line height tokens to control the amount of space between lines in a block of text.
type: docs
subnav:
- text: Line height tokens
  href: '#line-height-tokens'
- text: Using line height tokens
  href: '#using-line-height-tokens'
---

{% assign tokens = site.data.tokens.typesetting %}

{:.bg-gold-20v.padding-2.radius-md}
Please see the [Typesetting]({{ site.baseurl }}/design-tokens/typesetting){:.text-ink.text-bold} section for more about font size normalization and how USWDS uses tokens for typesetting. Setting line height requires both a [line height](#0){:.token} token and a [family]({{ site.baseurl }}/design-tokens/typesetting/font-family){:.token} token. The documentation below displays a "target line-height" rather than the final output, which will be normalized depending on the targeted font family.

## Line height tokens
<div class="site-table-wrapper">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">Example</th>
        <th scope="col">Usage</th>
        <th scope="col">Output</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      {% for item in tokens.line-height %}
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
          <td data-title="Example">
            <div class="font-lang-4 tablet:font-lang-6 line-height-sans-{{ item.token }} measure-2">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</div>
          </td>
          <td data-title="Usage">
            <div class="font-lang-3 line-height-sans-3 measure-2"><strong>usage:</strong> {{ item.usage }}</div>
          </td>
          <td data-title="Output">
            <span>
              {{ item.value }}
            </span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Using line height tokens
Your context and coding style determine how you access USWDS line height tokens in code.

{:.bg-gold-20v.padding-2.radius-md}
**Note:** Because line height is affected by [font size normalization]({{ site.baseurl }}/design-tokens/typesetting/){:.text-ink} all [letter spacing]({{ site.baseurl }}/design-tokens/typesetting/letterspacing){:.token} tokens also require a [family]({{ site.baseurl }}/design-tokens/typesetting/font-family){:.token} token.

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
          <span class="text-bold font-lang-3">function</span>
        </td>
        <td data-title="Usage">
          <span class="line-height-sans-6">
            line-height(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/design-tokens/typesetting/line-height/" class="token">line-height</a>)<br/>
            lh(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/design-tokens/typesetting/line-height/" class="token">line-height</a>)
          </span>
        </td>
        <td data-title="Example">
          <span class="line-height-sans-6">
            line-height: line-height(<code>'heading'</code>, <code>2</code>);<br/>
            line-height: lh(<code>'heading'</code>, <code>2</code>);<br/>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-lang-3">
            <span class="text-bold">mixin</span><br/>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            u-line-height(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/design-tokens/typesetting/line-height/" class="token">line-height</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-line-height(<code>'body'</code>, <code>6</code>)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span>
            <span class="text-bold font-lang-3">setting</span><br/>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            <a href="{{ site.baseurl }}/design-tokens/typesetting/line-height/" class="token">line-height</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            $theme-heading-line-height: <code>2</code>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Context">
          <span class="font-lang-3">
            <span class="text-bold">utility</span><br/>
          </span>
        </td>
        <td data-title="Usage">
          <span>
            .line-height-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>-<a href="{{ site.baseurl }}/design-tokens/typesetting/letterspacing/" class="token">line height</a>
          </span>
        </td>
        <td data-title="Example">
          <span>
            .line-height-<code>sans</code>-<code>3</code>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
