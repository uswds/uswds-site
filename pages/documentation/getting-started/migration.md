---
permalink: /documentation/migration/
layout: styleguide
title: Migrating to v2
category: Documentation
subnav:
  data: releases
  href: ['#version-%', name]
  text: name
---
<p class="site-text-intro">USWDS 2.0 is a major rewrite of the entire project. The most notable changes are summarized below, followed by more specific changes to relevant components.</p>

{% for release in site.data.releases %}
{% if release.target_commitish == "release-2.0" %}

## Version {{ release.name }}

<p class="site-subheading">{{ release.published_at | date: "%B %d, %Y" }}</p>

{% assign id_replace = 'id="v%-' | replace: '%', release.name %}
{{ release.body | markdownify | replace: 'id="', id_replace | remove_relative_links }}

<hr>
{% endif %}
{% endfor %}