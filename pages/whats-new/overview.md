---
permalink: /about/whats-new/
layout: styleguide
title: What’s new
category: About
lead: Here you can find the latest news and information about USWDS. Read our latest release notes, learn about our impact in the government, and learn how we conduct user research to continuously improve our product and process.
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
  - /about-our-work/releases
  - /whats-new/
  - /whats-new/releases
in_page_nav: false
---

{% capture blog %}
## Latest blog posts

You can read more about USWDS in our [News and updates]({{ site.baseurl }}/whats-new/updates/), where we cover the
latest development releases as well as interviews with the teams from across
government who have successfully implemented USWDS at their agencies.
You can read some older posts on the [18F Blog](https://18f.gsa.gov/tags/web-design-system/).

<a href="{{ site.baseurl }}/whats-new/updates/" class="usa-button site-button">Read the latest blog posts</a>
{% endcapture %}

{% capture in_wild %}
## Design System in the wild

Interested in seeing who else is using USWDS? We
maintain a list of USWDS-based sites on our [showcase page]({{ site.baseurl }}/documentation/showcase). Feel free to
[open an issue](https://github.com/uswds/uswds-site/issues/new/choose) using GitHub
or [email us](mailto:{{ site.uswds_email }}) if you’d like to add your
project to our list.

<a href="{{ site.baseurl }}/documentation/showcase" class="usa-button site-button">View our showcase list</a>

{% endcapture %}

{% capture release_notes %}
## Release notes

You can find our release notes — summaries of bug fixes, new features, and other updates introduced in each release on our <a href="https://github.com/uswds/uswds/releases">GitHub releases page</a>.

You can subscribe to our GitHub releases by visiting the USWDS <a href="https://github.com/uswds/uswds/">GitHub repo</a>, selecting the `watch` button, selecting `custom`, and checking the box for `releases`, and selecting apply.

{% endcapture %}

<div class="grid-row grid-gap">

    {{ release_notes | markdownify }}

</div>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {{ blog | markdownify }}
  </div>
  <div class="tablet:grid-col">
    {{ in_wild | markdownify }}
  </div>
</div>