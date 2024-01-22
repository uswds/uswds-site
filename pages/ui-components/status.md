---
permalink: /components/status/
layout: styleguide
title: Component status
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
  .arrow-right {
    position:relative;
  }
  .arrow-right::before {
    content: "";
    width: 0;
    height: 0;
    border-top: 1.1em solid transparent;
    border-bottom: 1.1em solid transparent;
    border-left: .5em solid #c9c9c9;
    position: absolute;
    right: -.4em;
    top: 0;
  }

  .text-white a,
  .text-white a:visited {
    color: white
  }

  .text-ink a,
  .text-ink  a:visited {
    color: #1b1b1b
  }
</style>

{% assign component_status_items = site.data.component-status.components %}
{% assign check_icon_classes = 'text-gray-60' %}
{% assign check_icon_styles = 'height:1rem; width:1rem' %}

{% assign col1Title = '' %}
{% assign col1Classes = 'text-bold' %}
{% assign col2Title = 'Proposal' %}
{% assign col2Classes = 'text-center padding-x-0 display-flex flex-align-center flex-justify-center' %}
{% assign col3Title = 'Development' %}
{% assign col3Classes = 'text-center padding-x-0 display-flex flex-align-center flex-justify-center' %}
{% assign col4Title = 'Released' %}
{% assign col4Classes = 'text-center padding-x-0 display-flex flex-align-center flex-justify-center' %}
{% assign col5Title = 'Deprecated' %}
{% assign col5Classes = 'text-center padding-x-0 display-flex flex-align-center flex-justify-center' %}


<table class=" site-table-responsive site-table-simple maxw-tablet-lg">
  <thead class="text-bold">
    <tr>
      <th scope="col" class="{{ col1Classes }} bg-white">
        {{ col1Title }}
      </th>
      <th scope="col" class="{{ col2Classes }} bg-white">
        {{ col2Title }}
      </th>
      <th scope="col" class="{{ col3Classes }} bg-white">
        {{ col3Title }}
      </th>
      <th scope="col" class="{{ col4Classes }} bg-white">
        {{ col4Title }}
      </th>
      <th scope="col" class="{{ col5Classes }} bg-white">
        {{ col5Title }}
      </th>
    </tr>
  </thead>
  <tbody class="font-lang-3xs">
    {% for item in component_status_items %}
    <tr class="border-05 border-white">
      <td data-title="{{ col1Title }}" class="{{ col1Classes }} text-ink">
          {{ item.name }}
      </td>
      {% if item.status_major == "proposal" %}
         {% if item.status_minor == "progress" %}
          <td data-title="{{ col5Title }}" class="bg-yellow-20 {{ col3Classes }}">
              In progress
          </td>
          {% elsif item.status_minor == "submitted" %}
          <td data-title="{{ col5Title }}" class="bg-yellow-20 {{ col3Classes }}">
              Submitted
          </td>
          {% elsif item.status_minor == "accepted" %}
          <td data-title="{{ col5Title }}" class="bg-yellow-20 {{ col3Classes }}">
              Accepted
          </td>
          {% elsif item.status_minor == "rejected" %}
          <td data-title="{{ col5Title }}" class="bg-gray-50 text-white {{ col3Classes }}">
              Will not pursue
          </td>
         {% endif %}
        {% elsif item.status_major == "development" or item.status_major == "released" or item.status_major == "deprecated" %}
          <td class="{{ col2Classes }} bg-gray-5">
            <svg class="usa-icon {{ check_icon_classes }}" style="{{ check_icon_styles }}" aria-hidden="true" focusable="false" role="img">
              <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle">
              </use>
            </svg>
          </td>
        {% else %}
          <td class="{{ col2Classes }}">
          </td>
      {% endif %}
      {% if item.status_major == "development" %}
        {% if item.status_minor == "alpha" %}
          <td data-title="{{ col5Title }}" class="bg-cyan-20 {{ col3Classes }}">
              Alpha
          </td>
          {% elsif item.status_minor == "beta" %}
          <td data-title="{{ col5Title }}" class="bg-cyan-20 {{ col3Classes }}">
              Beta
          </td>
          {% elsif item.status_minor == "development" %}
          <td data-title="{{ col5Title }}" class="bg-cyan-20 {{ col3Classes }}">
              In development
          </td>
          {% elsif item.status_minor == "accepted" %}
          <td data-title="{{ col5Title }}" class="bg-cyan-20 {{ col3Classes }}">
              Accepted
          </td>
         {% endif %}
        {% elsif item.status_major == "released" or item.status_major == "deprecated" %}
          <td class="{{ col2Classes }} bg-gray-5">
            <svg class="usa-icon {{ check_icon_classes }}" style="{{ check_icon_styles }}" aria-hidden="true" focusable="false" role="img">
              <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle">
              </use>
            </svg>
          </td>
        {% else %}
          <td class="{{ col2Classes }}">
          </td>
      {% endif %}
      {% if item.status_major == "released" %}
        {% if item.status_minor == "beta" %}
          <td data-title="{{ col4Title }}" class="bg-success-light {{ col4Classes }}">
             Beta
          </td>
          {% elsif item.status_minor == "stable" %}
          <td data-title="{{ col4Title }}" class="bg-success text-white {{ col4Classes }}">
            <a href="{{ item.url }}">Stable</a>
          </td>
         {% endif %}
        {% elsif item.status_major == "deprecated" %}
          <td class="{{ col2Classes }} bg-gray-5">
            <svg class="usa-icon {{ check_icon_classes }}" style="{{ check_icon_styles }}" aria-hidden="true" focusable="false" role="img">
              <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle">
              </use>
            </svg>
          </td>
        {% else %}
          <td class="{{ col2Classes }}">
          </td>
      {% endif %}
      {% if item.status_major == "deprecated" %}
        <td data-title="{{ col5Title }}" class="bg-red-warm-50 text-white {{ col5Classes }}">
            Retired
        </td>
        {% else %}
          <td class="{{ col2Classes }}">
          </td>
      {% endif %}
    </tr>
    {% endfor %}
  </tbody>
</table>
