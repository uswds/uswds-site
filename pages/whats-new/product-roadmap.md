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

### Current work: our sprint milestones

See what we’re working on now and in the future by viewing what is being
worked on or queued up to work on in our sprint milestones below. These are
two-week increments of work that we commit to finishing, using Agile Product
Development practices.

<a href="https://github.com/18F/web-design-standards/milestones" class="usa-button">View our sprint milestones</a>

### Future work: our product roadmap

Below is our our product roadmap: a long term plan of the goals, features,
and long-term direction of the U.S. Web Design Standards. We update this
every few months with the status of our progress, as well as add new
high-level future requests and ideas.

{% for milestone in site.data.milestones %}
<section>
  <h2 id="{{ milestone.id }}">{{ milestone.title }}</h2>
  <ul>
  {% for task in milestone.tasks %}
    <li>
      {{ task.title }}
      {% if task.status %}
          <a class="usa-label label-{{ task.status | slugify }}" href="{{ task.url }}" aria-describedby="tooltip-text-{{ task.title | slugify }}">
            {{ task.status }}
          </a>
      {% endif %}
    </li>
  {% endfor %}
  </ul>
</section>
{% endfor %}
