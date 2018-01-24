---
permalink: /whats-new/product-roadmap/
redirect_from:
- /getting-started/product-roadmap/
- /about-our-work/product-roadmap/
layout: styleguide
title: Product roadmap
category: What’s new
lead: Here, you’ll find our product roadmap — an up-to-date report on the work we’re doing.
subnav:
  data: milestones
  href: ['#%', id]
  text: title
---

Below is our product roadmap: a long-term plan of the goals, features,
and long-term direction of the U.S. Web Design System. We update this
every few months with the status of our progress, as well as add new
high-level future requests and ideas. You can also <a href="https://github.com/uswds/uswds/milestone/52" class="">view our product roadmap goals on GitHub</a>.

{% for milestone in site.data.milestones %}
<section>
  <h2 id="{{ milestone.id }}">{{ milestone.title }}</h2>
  <ul class="product-roadmap-list">
  {% for task in milestone.tasks %}
    <li>
      <a href="{{ task.url }}">
        {{ task.title }}
      </a>
      {% if task.status %}
        <span class="usa-label label-{{ task.status | slugify }}">
          {{ task.status }}
        </span>
      {% endif %}
    </li>
  {% endfor %}
  </ul>
</section>
{% endfor %}
