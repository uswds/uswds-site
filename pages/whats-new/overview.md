---
permalink: /about/whats-new/
layout: styleguide
title: What’s new
category: About
lead: Get the latest USWDS news and information here. Learn more about our product development and process, dive deeper into our monthly call topics, and see how we work with our partners to improve the government technology space.
columns:
  - title: New users
    source: New Users
  - title: Total users
    source: Users
  - title: Page views
    source: Pageviews
redirect_from:
  - /about/releases/
  - /about-our-work/
  - /about-our-work/releases/
  - /whats-new/
  - /whats-new/releases/
  - /whats-new/updates/
  - /about/updates/
type: posts
subnav:
  - text: All news and updates
    href: /about/whats-new/all/
  - text: USWDS changelog
    href: /about/whats-new/changelog/
cards:
  - heading: "Release notes"
    body: "Find summaries of each USWDS update on our GitHub releases page. Release notes explain bug fixes, new features, and other changes."
    linkText: "Read the USWDS release notes"
    linkUrl: "https://github.com/uswds/uswds/releases"
  - heading: "GitHub discussions"
    body: "How our growing community of government engineers, content specialists, and designers participate and contribute to improving USWDS."
    linkText: "USWDS GitHub discussion"
    linkUrl: "https://github.com/uswds/uswds/discussions"
in_page_nav_headings: "h2"
---

<!-- Set consolidated changelog data -->
{% assign changelogs = site.data.changelogs %}

{% for file in changelogs %}
  {% assign items = file[1].items %}
  {% assign changelogItems = changelogItems | concat: items %}
{% endfor %}

{% assign changelogItems = changelogItems | sort: 'date' | reverse | slice: 0,15 %}

{:.whats-new__heading}
## Changelog

Latest code, guidance, and content updates across the design system.

<div class="margin-top-2">
  {% include consolidated-changelog-table.html %}
</div>

<a class="usa-button" href="{{ site.baseurl }}/about/whats-new/changelog/">View all changelog entries</a>
