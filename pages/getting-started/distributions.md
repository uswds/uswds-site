---
permalink: /getting-started/distributions/
layout: styleguide
title: Distributions
category: Getting started
lead: Users of the U.S. Web Design Standards have created implementations for popular content management systems and web frameworks that may help get you started more quickly and easily. Though some implementations may not include all of the Standards, they should give your team a strong foundation to work from.
subnav:
  data: distributions
  href: ['#%', name]
  text: name
---

If you have a new distribution to add to this list, please [open an issue] or [send us an email] with the following information:

* The distribution target language and/or framework
* The author's name (or alias) and contact URL or email address
* The most recent [version]({{ site.baseurl }}/whats-new/releases/) of the Standards that the distribution targets
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
{% for distro in site.data.distributions %}
  <tr id="{{ distro.name | slugify }}">
    <th scope="row">
      <strong><a href="{{ distro.url }}">{{ distro.name }}</a></strong>
    </th>
    <td>
      {% if distro.version == 'latest' %}
      {{ latest_version }}
      {% elsif distro.version %}
      <a href="{{ site.baseurl }}/whats-new/releases/#version-{{ distro.version | slugify }}">{{ distro.version }}</a></td>
      {% endif %}
    <td>
      {% if distro.author.url %}
      <a href="{{ distro.author.url }}">{{ distro.author.name }}</a>
      {% else %}
      {{ distro.author.name }}
      {% endif %}
    </td>
    <td>{{ distro.notes | markdownify | replace: '<p>', '' | replace: '</p>', '' }}</td>
  </tr>
{% endfor %}
</table>

[open an issue]: https://github.com/18F/web-design-standards/issues/new
[send us an email]: mailto:uswebdesignstandards@gsa.gov
