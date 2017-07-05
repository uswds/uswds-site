---
permalink: /whats-new/releases/
redirect_from:
  - /about-our-work/releases/
layout: styleguide
title: Release notes
category: What’s new
subnav:
  data: releases
  href: ['#version-%', name]
  text: name
---
<p class="usa-font-lead">The Standards are an ever-evolving product. We’ve been listening to your feedback and using it as a basis for improvements and additions.</p>

<p class="usa-font-lead">Here you’ll find our release notes — summaries of bug fixes, new features, and other updates introduced in each release.</p>

Have suggestions for a new feature or bug fix? [Open an issue](https://github.com/18F/web-design-standards/issues/new) in our repo.

{% for release in site.data.releases %}

## Version {{ release.name }}

<p class="site-subheading">{{ release.published_at | date: "%B %d, %Y" }}</p>

{% assign id_replace = 'id="v%-' | replace: '%', release.name %}
{{ release.body | markdownify | replace: 'id="', id_replace | remove_relative_links }}

<hr>
{% endfor %}
