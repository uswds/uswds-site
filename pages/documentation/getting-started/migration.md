---
permalink: /documentation/migration/
layout: styleguide
title: Migrating to v2
category: Documentation
subnav:
- text: Version 2.0.0 Beta 7
  href: '#version-200-beta-7-release-candidate'
- text: Version 2.0.0 Beta 6
  href: '#version-200-beta-6'
- text: Version 2.0.0 Beta 5
  href: '#version-200-beta-5'
- text: Version 2.0.0 Beta 4
  href: '#version-200-beta-4'
- text: Version 2.0.0 Beta 3
  href: '#version-200-beta-3'
- text: Version 2.0.0 Beta 2
  href: '#version-200-beta-2'
- text: Version 2.0.0 Alpha
  href: '#version-200-alpha'
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