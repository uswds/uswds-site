---
permalink: /components/status/
layout: styleguide
title: Component status
category: Components
lead: Current lifecycle information for every component we're tracking in the design system
type: docs
subnav:
  - text: Latest updates
    href: '#changelog'
changelog:
  key: docs-component-status
in_page_nav_headings: false
---

{% assign component_status_items = site.data.lifecycle-status.components %}

{% assign check_icon_classes = 'text-gray-60' %}
{% assign phase_complete_classes = 'bg-gray-5' %}
{% assign proposal_classes = "lifecycle-bg--proposal" %}
{% assign accepted_classes = "lifecycle-bg--accepted" %}
{% assign rejected_classes = "lifecycle-bg--rejected" %}
{% assign development_classes = "lifecycle-bg--development" %}
{% assign released_classes = "lifecycle-bg--released" %}
{% assign experimental_classes = "lifecycle-bg--experimental" %}
{% assign caution_classes = "lifecycle-bg--caution" %}
{% assign deprecated_classes = "lifecycle-bg--deprecated" %}

{% assign col1Title = 'Component' %}
{% assign major_status_types = "proposal, development, released, deprecated" | split: ', '%}

This table includes lifecycle information for every component we're tracking in the design system, including those in the proposal phase.
For a complete description of each of the component lifecycle phases, see our [Component lifecycle phases]({{ site.baseurl}}/components/lifecycle) page.

We update this page regularly, but check out our [component proposal discussion board](https://github.com/uswds/uswds/discussions/categories/component-proposals) for the most up-to-date list of components in the proposal phase.

Don’t see the component you are looking for? [Start a discussion about it](https://github.com/uswds/uswds/discussions/new?category=component-proposals).

<!-- Start mobile-only status table -->
<table class="lifecycle-table tablet:display-none">
  <tbody>
    <thead class="text-bold">
      <tr>
        <th scope="col" class="padding-left-0 text-left">{{ col1Title }}</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
  {% for item in component_status_items %}
    {% if item.status_major == "proposal" %}
      {% if item.status_minor == "will not pursue" %}
        {% assign status_classes = rejected_classes %}
      {% elsif item.status_minor == "accepted" %}
        {% assign status_classes = accepted_classes %}
      {% else %}
        {% assign status_classes = proposal_classes %}
    {% endif %}
    {% elsif item.status_major == "development" %}
      {% assign status_classes = development_classes %}
    {% elsif item.status_major == "released" %}
      {% if item.status_minor == "experimental" %}
        {% assign status_classes = experimental_classes %}
      {% elsif item.status_minor == "use with caution" %}
        {% assign status_classes = caution_classes %}
      {% else %}
        {% assign status_classes = released_classes %}
      {% endif %}
    {% elsif item.status_major == "deprecated" %}
      {% assign status_classes = deprecated_classes %}
    {% endif %}
    <tr>
      <td>
        <a href="{{ item.url }}" class="text-bold">
          {{ item.name }}
        </a>
      </td>
      <td data-title="{{ type }}"  class="{{ status_classes }}">
        {{ item.status_minor | capitalize }}
      </td>
    </tr>
  {% endfor %}
  </tbody>
</table>
<!-- End mobile-only status table -->

<!-- Start desktop-only status table -->
<table class="lifecycle-table display-none tablet:display-table">
  <caption class="usa-sr-only">Component status</caption>
  <thead class="text-bold">
    <tr>
      <th scope="col" class="text-left padding-left-0">{{ col1Title }}</th>
      {% for type in major_status_types %}
          <th scope="col">
            {{ type | capitalize }}
          </th>
      {% endfor %}
    </tr>
  </thead>
  <tbody>
    {% for item in component_status_items %}
      {% if item.status_major == "proposal" %}
        {% if item.status_minor == "will not pursue" %}
          {% assign status_classes = rejected_classes %}
        {% elsif item.status_minor == "accepted" %}
          {% assign status_classes = accepted_classes %}
        {% else %}
          {% assign status_classes = proposal_classes %}
      {% endif %}
      {% elsif item.status_major == "development" %}
        {% assign status_classes = development_classes %}
      {% elsif item.status_major == "released" %}
        {% if item.status_minor == "experimental" %}
          {% assign status_classes = experimental_classes %}
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
            <td class="{{ phase_complete_classes }} {{check_icon_classes}}">
              {% if has_proposal %}
                {% include icon.html icon='check_circle' %}
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
            <td class="{{ phase_complete_classes }} {{check_icon_classes}}">
              {% include icon.html icon='check_circle' %}
            </td>
          {% else %}
            <td></td>
        {% endif %}

        {% if item.status_major == "released" %}
          <td data-title="{{ type }}"  class="{{ status_classes }}">
            {{ item.status_minor | capitalize }}
          </td>
          {% elsif item.status_major == "deprecated" %}
            <td class="{{ phase_complete_classes }} {{check_icon_classes}}">
              {% include icon.html icon='check_circle' %}
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
<!-- End desktop-only status table -->

