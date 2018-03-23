---
permalink: /whats-new/
layout: styleguide
title: What’s new
category: What’s new
lead: Here you can find the latest news and information about the U.S. Web Design System. Read our latest release notes, learn about the Design System’s impact in the government, and learn how we conduct user research to continuously improve our product and process.
columns:
  - title: New users
    source: New Users
  - title: Total users
    source: Users
  - title: Page views
    source: Pageviews
redirect_from:
  - /about-our-work/
---

{% capture blog %}
## Latest blog posts

You can read more about the Design System in our [News and updates]({{ site.baseurl }}/whats-new/updates/), where we cover the
latest development releases as well as interviews with the teams from across
government who have successfully implemented the Design System at their agencies.
You can read some older posts on the [18F Blog](https://18f.gsa.gov/tags/web-design-system/).

<a href="{{ site.baseurl }}/whats-new/updates/" class="usa-button">Read the latest blog posts</a>
{% endcapture %}

{% capture in_wild %}
## Design System in the wild

Interested in seeing who else is using the U.S. Web Design System? We
maintain a list of sites in our GitHub repo. Feel free to
[open an issue](https://github.com/uswds/uswds-assets/issues/new)
or [email us](mailto:uswds@gsa.gov) if you’d like to add your
project to our list.

<a href="https://github.com/uswds/uswds/blob/develop/docs/WHO_IS_USING_USWDS.md" class="usa-button">View our list on GitHub</a>
{% endcapture %}

<div class="usa-grid-full">
  <div class="usa-width-one-half">
    {{ blog | markdownify }}
  </div>
  <div class="usa-width-one-half">
    {{ in_wild | markdownify }}
  </div>
</div>

## Web analytics for sites that use the Design System

By accessing the Google Analytics data gathered for [analytics.usa.gov](https://analytics.usa.gov),
we have aggregated a few data points to approximate how many users of federal
websites have “experienced” the U.S. Web Design System. We will update these
numbers quarterly.

<table>
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending">Quarter</th>
      {% for column in page.columns %}
      <th scope="col" align="right">{{ column.title }}</th>
      {% endfor %}
    </tr>
  </thead>
  <tbody>
  {% for row in site.data.google_analytics reversed %}
    <tr>
      <th scope="row">{{ row.Year }} {{ row.Quarter }}</th>
      {% for column in page.columns %}
      <td>{{ row[column.source] }}</td>
      {% endfor %}
    </tr>
  {% endfor %}
  </tbody>
</table>
