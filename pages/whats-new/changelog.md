---
title: USWDS Changelog
layout: styleguide
lead: Latest code, guidance, and content updates across the design system.
permalink: /about/whats-new/changelog/
category: About
type: posts
in_page_nav_headings: false
---

{% assign changelogs = site.data.changelogs %}

{% for file in changelogs %}
  {% assign items = file[1].items %}
  {% assign changelogItems = changelogItems | concat: items %}
{% endfor %}

{% assign changelogItems = changelogItems | sort: 'date' | reverse | slice: 0,150 %}

<div class="maxw-desktop margin-top-6">
  {% include consolidated-changelog-table.html %}
</div>
