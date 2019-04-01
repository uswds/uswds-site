---
permalink: /documentation/migration/
layout: styleguide
title: Migrating to v2
category: Documentation
subnav:
- text: Summary
  href: #summary
- text: By component
  href: #by-component
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
- text: Version 2.0.0 Beta
  href: '#version-200-beta'
- text: Version 2.0.0 Alpha
  href: '#version-200-alpha'
---
<p class="site-text-intro">USWDS 2.0 is a major rewrite of the entire project. The most notable changes are summarized below, followed by more specific changes to relevant components.</p>

## Summary

- CSS is applied to classes not directly to HTML elements
- Our naming system changed to BEM so you'll need to update all component classes.

## By component

### Grid system
- Deprecated the float-based grid system, Bourbon Neat, in favor of a flexbox grid system

### Tags
- Formerly called “labels”

## BEM naming change
To change your components from v1 to v2, you’ll need to update your classes to the BEM naming convention. Next, we’ll walk through how to do that by looking at the alert component.
- `usa-alert` is the **block**, the outermost parent element of the component. No need to change anything from v1 to v2.
- The "informative status” or “info" alert is a variation of the alert component. In BEM, this is called the **modifier** and is separated by two dashes (`usa-alert--info`).
- There are several items nested inside the alert component: a body, heading, and text. These are called the **elements** and are separated by two underscores (`usa-alert__body`, `usa-alert__heading`, `usa-alert__text`)

This is what the HTML markup looks like going from v1 to v2:

### v1
```html
<div class="usa-alert usa-alert-info" >
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Information Status</h3>
    <p class="usa-alert-text">Lorem ipsum dolor sit amet, <a href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.</p>
  </div>
</div>
```

### v2
```html
<div class="usa-alert usa-alert--info" >
  <div class="usa-alert__body">
    <h3 class="usa-alert__heading">Informative status</h3>
    <p class="usa-alert__text">Lorem ipsum dolor sit amet, <a href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.</p>
  </div>
</div>
```

{% for release in site.data.releases %}
{% if release.target_commitish == "release-2.0" or release.name == "2.0.0-beta" %}

## Version {{ release.name }}

<p class="site-subheading">{{ release.published_at | date: "%B %d, %Y" }}</p>

{% assign id_replace = 'id="v%-' | replace: '%', release.name %}
{{ release.body | markdownify | replace: 'id="', id_replace | remove_relative_links }}

<hr>
{% endif %}
{% endfor %}