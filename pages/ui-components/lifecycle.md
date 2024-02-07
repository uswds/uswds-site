---
permalink: /components/lifecycle/
layout: styleguide
title: USWDS component lifecycle
category: Components
lead: [The USWDS component lifecycle defines the phases of component development]
type: docs
subnav:
  - text: Latest updates
    href: '#changelog'
changelog:
  key: docs-component-lifecycle
---

The USWDS component lifecycle tracks the life of a component as it moves from an idea to release.
This page documents the phases of the component lifecycle and outlines how you can help at each phase.

You can find a list of the components currently in the lifecycle on the the [component status page]({{ site.baseurl }}/components/status).

{% assign lifecycle_phases = site.data.lifecycle-phases.phases %}
{% assign phase_number = 0 %}

{% for phase in lifecycle_phases %}
  {% assign phase_number = phase_number | plus: 1 %}
  <div class="lifecycle-phase">
    <h2>Phase {{ phase_number }}: {{ phase.name | capitalize }}</h2>
    <p>{{ phase.description }}</p>
    {% for subphase in phase.subphases %}
      <div class="lifecycle-phase__subphase">
        <h3 class="lifecycle-phase__subphase-header">
          {{ subphase.name }}
        </h3>
        <!-- {% if subphase.starts_when or subphase.ends_when%}
          <p class="font-lang-xs">
            {% if subphase.starts_when %}
              <b>Starts when:</b> {{ subphase.starts_when }}<br/>
            {% endif %}
            {% if subphase.ends_when %}
              <b>Ends when:</b> {{ subphase.ends_when }}<br/>
            {% endif %}
          </p>
        {% endif %} -->
        {% if subphase.description %}
          <p>
            {{ subphase.description }}
          </p>
        {% endif %}

        {% if subphase.contribution_method %}
          <b>Contribute by:</b>
          <ul>
            {% for method in subphase.contribution_method %}
              <li>{{ method }}</li>
            {% endfor %}
          </ul>
        {% endif %}

        {% if subphase.learn_more %}
          <p>
            <b>Learn more:</b> {{ subphase.learn_more }}
          </p>
        {% endif %}
      </div>
    {% endfor %}
    </div>
{% endfor %}
