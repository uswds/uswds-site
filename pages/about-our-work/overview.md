---
permalink: /about-our-work/
layout: styleguide
title: About our work
category: About our work
lead: We’re always looking for ways to improve the Standards. Here, you'll find the latest information about recent releases, our product roadmap, and our governance model.
columns:
  - title: New users
    source: New Users
  - title: Total users
    source: Users
  - title: Page views
    source: Pageviews
---

### Web analytics for sites that use the Standards

By accessing the Google Analytics data gathered for
[analytics.usa.gov](https://analytics.usa.gov), we have aggregated a
few data points to approximate how many users of federal websites
have "experienced" the Draft U.S. Web Design Standards. We will
update these numbers quarterly.

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
