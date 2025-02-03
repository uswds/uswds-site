---
title: Changelogs
layout: styleguide
lead: Meaningful code, guidance, and content updates across the design system
permalink: /about/whats-new/changelogs/
category: About
type: posts
in_page_nav_headings: false
---

{% assign changelogs = site.data.changelogs %}
{% assign changelogsItems = "" | split: "," %}

{% for file in changelogs %}
  {% assign items = file[1].items %}
  {% assign changelogItems = changelogItems | concat: items %}
{% endfor %}

{% assign changelogItems = changelogItems | sort: 'date' | reverse | slice: 0,150 %}

<div class="width-desktop">
  {% include consolidated-changelog-table.html %}
</div>
