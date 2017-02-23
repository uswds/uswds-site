---
permalink: /getting-started/implementations/
redirect_from:
- /getting-started/distributions/
layout: styleguide
title: Implementations
category: Getting started
lead: |
  Users of the U.S. Web Design Standards have created implementations for
  popular content management systems, web frameworks, and package managers that
  may help get you started more quickly and easily. Though some implementations
  may not include all of the Standards, they should give your team a strong
  foundation to work from.
subnav:
  data: implementations
  href: ['#%', name]
  text: name
---

If you have a new implementation to add to this list, please [open an issue] or [send us an email] with the following information:

* The implementation’s target language and/or framework
* The author’s name (or alias) and contact URL or email address
* The most recent [version]({{ site.baseurl }}/whats-new/releases/) of the Standards that the project targets
* Any useful caveats or other notes

{% assign latest = site.data.releases | first %}
{% capture latest_version %}<a href="{{ site.baseurl }}/whats-new/releases/#version-{{ latest.name | slugify }}">{{ latest.name }}</a>{% endcapture %}

<div class="usa-alert usa-alert-warning">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Heads up</h3>
    <p class="usa-alert-text">Some of the implementations listed here are not affiliated or endorsed, and have not been tested, by the Standards team. Use them at your own discretion.</p>
  </div>
</div>

<table>
  <thead>
    <tr>
      <th>Distribution</th>
      <th>Version</th>
      <th>Author or maintainer</th>
      <th>Notes</th>
    </tr>
  </thead>
{% for impl in site.data.implementations %}
  <tr id="{{ impl.name | slugify }}">
    <th scope="row">
      <strong><a href="{{ impl.url }}">{{ impl.name }}</a></strong>
    </th>
    <td>
      {% if impl.version == 'latest' %}
      {{ latest_version }}
      {% elsif impl.version %}
      <a href="{{ site.baseurl }}/whats-new/releases/#version-{{ impl.version | slugify }}">{{ impl.version }}</a></td>
      {% endif %}
    <td>
      {% if impl.author.url %}
      <a href="{{ impl.author.url }}">{{ impl.author.name }}</a>
      {% else %}
      {{ impl.author.name }}
      {% endif %}
    </td>
    <td>{{ impl.notes | markdownify | replace: '<p>', '' | replace: '</p>', '' }}</td>
  </tr>
{% endfor %}
</table>

[open an issue]: https://github.com/18F/web-design-standards-docs/issues/new
[send us an email]: mailto:uswebdesignstandards@gsa.gov
