---
permalink: /components/status/
layout: styleguide
title: USWDS component status
category: Components
lead: Lorem ipsum dolor sit anum.
type: docs
subnav:
  - text: Latest updates
    href: '#changelog'
changelog:
  key: docs-component-status
in_page_nav: false
---

<style>
  .text-white a,
  .text-white a:visited {
    color: white
  }

  .text-ink a,
  .text-ink  a:visited {
    color: #1b1b1b
  }

  .border-gray-1 {
    border-color: #fcfcfc!important;
  }
</style>

{% assign component_status_items = site.data.component-status-prototype.components %}
{% assign check_icon_classes = 'text-gray-60' %}
{% assign check_icon_styles = 'height:1rem; width:1rem' %}

{% assign colClasses = '' %}
{% assign phase_complete_classes = 'bg-gray-5' %}
{% assign proposal_classes = "bg-yellow-20v" %}
{% assign approved_classes = "bg-yellow-20v" %}
{% assign rejected_classes = "bg-gray-cool-50 text-white" %}
{% assign development_classes = "bg-blue-cool-20v" %}
{% assign released_classes = "bg-green-cool-50v text-white" %}
{% assign beta_classes = "bg-green-cool-20" %}
{% assign caution_classes = "bg-orange-30v" %}
{% assign deprecated_classes = "bg-gray-cool-20" %}

{% assign table_cell_classes = "border-105 border-gray-1  font-lang-2xs" %}

{% assign col1Title = 'Component name' %}

{% assign major_status_types = "proposal, development, released, deprecated" | split: ', '%}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis convallis nibh, ut ullamcorper odio molestie in.
Praesent feugiat laoreet ex, at mollis purus volutpat quis. In viverra pretium augue at accumsan.


Nullam vehicula ultricies augue, non venenatis mauris faucibus vel. Vestibulum mattis diam ac turpis consequat ultrices. Link to [proposal repo](http://www.github.com).

## Component lifecycle status

<table class=" site-table-responsive site-table-simple lifecycle-table maxw-tablet-lg display-none tablet:display-table">
  <thead class="text-bold">
    <tr>
      <th scope="col">
      </th>
      {% for type in major_status_types %}
          <th scope="col">
            {{ type | capitalize }}
          </th>
      {% endfor %}
    </tr>
  </thead>
  <tbody class="font-lang-3xs">
    {% for item in component_status_items %}
      {% if item.status_major == "proposal" %}
        {% if item.status_minor == "will not pursue" %}
          {% assign status_classes = rejected_classes %}
          {% elsif item.status_minor == "approved" %}
            {% assign status_classes = approved_classes %}
          {% else %}
            {% assign status_classes = proposal_classes %}
        {% endif %}
      {% elsif item.status_major == "development" %}
        {% assign status_classes = development_classes %}
      {% elsif item.status_major == "released" %}
        {% if item.status_minor == "experimental" %}
          {% assign status_classes = beta_classes %}
          {% elsif item.status_minor == "use with caution" %}
            {% assign status_classes = caution_classes %}
          {% else %}
            {% assign status_classes = released_classes %}
        {% endif %}
      {% elsif item.status_major == "deprecated" %}
        {% assign status_classes = deprecated_classes %}
      {% endif %}
    <tr>
      <td data-title="{{ col1Title }}" class="text-bold">
        <a href="{{ item.url }}">
          {{ item.name }}
        </a>
      </td>
      {% if item.status_major == "proposal" %}
        <td data-title="{{ item.status_major }}"  class="{{ status_classes }}">
          {{ item.status_minor | capitalize }}
        </td>
        {% elsif item.status_major == "development" or item.status_major == "released" or item.status_major == "deprecated" %}
          <td class="{{ phase_complete_classes }}">
            {% if has_proposal %}
              {% include icon.html icon='check_circle' classes='text-gray-60' %}
            {% else %}
              N/A
            {% endif %}
          </td>
        {% else %}
          <td></td>
      {% endif %}

      {% if item.status_major == "development" %}
        <td data-title="{{ type }}"  class="{{ status_classes }}">
          {{ item.status_minor | capitalize }}
        </td>
        {% elsif item.status_major == "released" or item.status_major == "deprecated" %}
          <td class="{{ phase_complete_classes }}">
            {% include icon.html icon='check_circle' classes='text-gray-60' %}
          </td>
        {% else %}
          <td></td>
      {% endif %}

      {% if item.status_major == "released" %}
        <td data-title="{{ type }}"  class="{{ status_classes }}">
          {{ item.status_minor | capitalize }}
        </td>
        {% elsif item.status_major == "deprecated" %}
          <td class="{{ phase_complete_classes }}">
            {% include icon.html icon='check_circle' classes='text-gray-60' %}
          </td>
        {% else %}
          <td></td>
      {% endif %}

      {% if item.status_major == "deprecated" %}
        <td data-title="{{ type }}"  class="{{ status_classes }}">
          {{ item.status_minor | capitalize }}
        </td>
        {% else %}
          <td></td>
      {% endif %}
    </tr>
    {% endfor %}
  </tbody>
</table>

<table class="usa-table width-full tablet:display-none">
  <tbody>
  {% for item in component_status_items %}
    {% if item.status_major == "proposal" %}
      {% if item.status_minor == "will not pursue" %}
        {% assign status_classes = rejected_classes %}
        {% elsif item.status_minor == "approved" %}
          {% assign status_classes = approved_classes %}
        {% else %}
          {% assign status_classes = proposal_classes %}
      {% endif %}
    {% elsif item.status_major == "development" %}
      {% assign status_classes = development_classes %}
    {% elsif item.status_major == "released" %}
      {% if item.status_minor == "experimental" %}
        {% assign status_classes = beta_classes %}
        {% elsif item.status_minor == "use with caution" %}
          {% assign status_classes = caution_classes %}
        {% else %}
          {% assign status_classes = released_classes %}
      {% endif %}
    {% elsif item.status_major == "deprecated" %}
      {% assign status_classes = deprecated_classes %}
    {% endif %}
    <tr  class="{{ table_cell_classes }}">
      <td class="text-ink\padding-y-05 padding-x-2 border-right-0 grid-col">
        <a href="{{ item.url }}">
          {{ item.name }}
        </a>
      </td>
      <td class="padding-y-05 padding-x-2 border-left-0 grid-col">
        <span class="usa-tag {{ status_classes }} text-no-uppercase">{{ item.status_minor | capitalize }}</span>
      </td>
    </tr>
  {% endfor %}
  </tbody>
</table>

