---
permalink: /whats-new/
layout: styleguide
title: What's new
category: What's new
lead: Here you can find the latest news and information about the U.S. Web Design Standards. Read our latest release notes, learn about the Standards’ impact in the government, and learn how we conduct user research to continuously improve our product and process.
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

### Latest blog posts

Visit the 18F blog to read the latest posts that relate to the U.S. Web Design
Standards. These posts cover the latest development releases as well as
interviews with the teams from across the government who have successfully
implemented the Standards at their agencies.

<a href="https://18f.gsa.gov/tags/web-design-standards/" class="usa-button">Read the latest blog posts</a>

### Web analytics for sites that use the Standards

By accessing the Google Analytics data gathered for
[analytics.usa.gov](https://analytics.usa.gov), we have aggregated a
few data points to approximate how many users of federal websites
have "experienced" the U.S. Web Design Standards. We will
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
