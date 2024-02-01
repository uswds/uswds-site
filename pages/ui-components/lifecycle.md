---
permalink: /components/lifecycle/
layout: styleguide
title: Component lifecycle
category: Components
lead: Lorem ipsum dolor sit anum
type: docs
subnav:
  - text: Latest updates
    href: '#changelog'
changelog:
  key: docs-component-lifecycle
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum felis in nunc convallis, hendrerit tempus ipsum tempus.
Maecenas convallis tellus non ornare tincidunt. Ut et consequat arcu.

<!-- ## Component lifecycle -->

<!-- <div class="grid-row measure-5">
  <a href="#phase-1-proposal" class="{{ phase_classes }} lifecycle-phase-1">
    Proposal
  </a>
  <a href="#phase-1-proposal" class="{{ phase_classes }} lifecycle-phase-2">
    Development
  </a>
  <a href="#phase-1-proposal" class="{{ phase_classes }} lifecycle-phase-3">
    Released
  </a>
  <a href="#phase-1-proposal" class="{{ phase_classes }} lifecycle-phase-4">
    Deprecated
  </a>
</div> -->

<!-- 1. [Proposal](#proposal)
1. [Development](#proposal)
1. [Released](#proposal)
1. [Deprecated](#proposal) -->


{% assign lifecycle_phases = site.data.lifecycle-phases.phases %}
{% assign phase_number = 0 %}

{% for phase in lifecycle_phases %}
  {% assign phase_number = phase_number | plus: 1 %}
  <div class="lifecycle-phase">
    <div class="lifecycle-phase__intro">
      <h2 class="lifecycle-phase__heading">
        <span class="lifecycle-phase__heading-small">Phase {{ phase_number }}</span>
        <br/>
        <span class="lifecycle-phase__heading-large">{{ phase.name | capitalize }}</span>
      </h2>
      <p class="lifecycle-phase__description">{{ phase.description }}</p>
    </div>
    <div class="lifecycle-phase__subphase">
      {% for subphase in phase.subphases %}
        {% if subphase.class %}
          <h3 class="lifecycle-phase__subphase-header lifecycle-bg--{{ subphase.class }}">
        {% else %}
          <h3 class="lifecycle-phase__subphase-header lifecycle-bg--{{ phase.name | downcase  }}">
        {% endif %}
          {{ subphase.name }}
        </h3>
        {% if subphase.description %}
          <p>{{ subphase.description }}</p>
        {% endif %}
        {% if subphase.starts_when or subphase.ends_when%}
          <p>
            {% if subphase.starts_when %}
              <b>Starts when:</b> {{ subphase.starts_when }}<br/>
            {% endif %}
            {% if subphase.ends_when %}
              <b>Ends when:</b> {{ subphase.ends_when }}<br/>
            {% endif %}
          </p>
        {% endif %}
        {% if subphase.learn_more %}
          <p>{{ subphase.learn_more }}</p>
        {% endif %}
      {% endfor %}
    </div>
  </div>
{% endfor %}
