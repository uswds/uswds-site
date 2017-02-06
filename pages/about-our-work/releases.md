---
permalink: /about-our-work/releases/
layout: styleguide
title: Release notes
category: About our work
---
<p class="usa-font-lead">The Standards are an ever-evolving product. We've been listening to your feedback and using it as a basis for improvements and additions.</p>

<p class="usa-font-lead">Here you'll find our release notes — summaries of bug fixes, new features, and other updates introduced in each release.</p>

<p>Have suggestions for a new feature or bug fix? Open an <a href="https://github.com/18F/web-design-standards/issues/new" title="Click here to open an issue on Github">issue</a> in our repo.</p>


{% for release in site.data.releases %}

  <h2 id="{{ release.name | slugify }}">Version {{ release.name }}</h2>

  <p class="site-subheading">{{ release.published_at | date: "%B %d, %Y" }}</p>
  
  {{ release.body | markdownify }}

  <hr />
{% endfor %}