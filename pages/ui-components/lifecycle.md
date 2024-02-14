---
permalink: /components/lifecycle/
layout: styleguide
title: USWDS component lifecycle
category: Components
lead: How USWDS components mature from discussions and proposals to stable production releases, or are deprecated and retired
type: docs
subnav:
  - text: Latest updates
    href: '#changelog'
changelog:
  key: docs-component-lifecycle
---

The USWDS component lifecycle outlines how new components enter the design system, and how we communicate our level of confidence that a component is suitable for use.
USWDS adds new components, refines existing ones, and retires those that have become obsolete to adapt to the most current research, new technology, and evolving user needs.

There are opportunities for community contribution at each stage of the component lifecycle. We hope you’ll get involved.

{% assign lifecycle_phases = site.data.lifecycle-phases.phases %}

<ol class="usa-process-list lifecycle-process margin-top-4">
  {% for phase in lifecycle_phases %}
    {% assign phase_number = forloop.index %}

    <!-- <li class="usa-process-list__item lifecycle-border--{{ phase.name | downcase  }}"> -->
    <li class="usa-process-list__item">
      <div class="lifecycle-phase">

        <h2 class="lifecycle-phase__heading">
          Phase {{ phase_number }}: {{ phase.name | capitalize }}
        </h2>

        <p class="lifecycle-phase__description">{{ phase.description }}</p>

        {% if phase.learn_more %}
          <p>{{ phase.learn_more }}</p>
        {% endif %}

        {% for subphase in phase.subphases %}
          <div class="lifecycle-phase__subphase">
            <h3 class="lifecycle-phase__subphase-header">
              {{ subphase.name }}
            </h3>

            {% if subphase.description %}
              <p>{{ subphase.description }}</p>
            {% endif %}

            {% if subphase.starts_when or subphase.ends_when %}
              <p>
              {% if subphase.starts_when %}
                <b>Starts when:</b> {{ subphase.starts_when }}<br/>
              {% endif %}
              {% if subphase.ends_when %}
                <b>Ends when:</b> {{ subphase.ends_when }}
              {% endif %}
              </p>
            {% endif %}

            {% if subphase.contribute_by %}
              <b>Contribute by:</b>
              {% if subphase.contribute_by.size == 1 %}
                {% for method in subphase.contribute_by %}
                  {{ method }}
                {% endfor %}
              {% else %}
                <ul>
                  {% for method in subphase.contribute_by %}
                    <li>{{ method }}</li>
                  {% endfor %}
                </ul>
              {% endif %}
            {% endif %}

            {% if subphase.find_more %}
              <p>{{ subphase.find_more }}</p>
            {% endif %}

            {% if subphase.reach_out %}
              <p>{{ subphase.reach_out }}</p>
            {% endif %}
          </div>
        {% endfor %}

        </div>
      </li>
  {% endfor %}
</ol>
