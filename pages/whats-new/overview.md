---
permalink: /whats-new/
layout: styleguide
title: What's new
category: What's new
lead: Here you can find the latest news and information about the U.S. Web Design Standards. You can learn more about the kind of impact the Standards has been creating around the federal government, read up on our latest release notes, and learn about how we conduct our user research to continuously improve the U.S. Web Design Standards.
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

Interested in seeing who all is using the U.S. Web Design Standards? We have a list that is constantly being updated over on our GitHub repo. [Sites using the Standards](https://github.com/18F/web-design-standards/blob/staging/WHO_IS_USING_USWDS.md).

### Latest Blog Posts

Head on over 18F's blog to read the latest posts tat relate to the U.S. Web Design Standards. These posts cover the latest development releases as well as interviews with the teams from across the government who have successfully implemented the U.S. Web Design Standards at their agency.

<a href="https://18f.gsa.gov/tags/web-design-standards/" class="usa-button">Read Latest Blog Posts</a>

### Current and future work

See what we're working on now and in the future by viewing what is being worked on or queued up to work on in our Sprint Milestones. These are two-week increments of work that we commit to finishing, using Agile Product Development practices.

<a href="https://github.com/18F/web-design-standards/milestones" class="usa-button">View Team Milestones</a>