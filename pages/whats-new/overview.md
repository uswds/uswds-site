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
  - /about-our-work/
  - /whats-new/
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
maintain a list of sites in our GitHub repo. Feel free to
[open an issue](https://github.com/uswds/uswds-assets/issues/new)
or [email us](mailto:uswds@support.digitalgov.gov) if you’d like to add your
project to our list.

<a href="https://github.com/uswds/uswds/blob/develop/docs/WHO_IS_USING_USWDS.md" class="usa-button site-button">View our list on GitHub</a>
{% endcapture %}

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {{ blog | markdownify }}
  </div>
  <div class="tablet:grid-col">
    {{ in_wild | markdownify }}
  </div>
</div>

## Web analytics for sites that use USWDS

By accessing the Google Analytics data gathered for [analytics.usa.gov](https://analytics.usa.gov),
we have aggregated a few data points to approximate how many users of federal
websites have “experienced” USWDS. We will update these
numbers quarterly.

<div class="site-table-wrapper margin-top-4">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col" aria-sort="ascending">Quarter</th>
        {% for column in page.columns %}
        <th scope="col" align="right" class="text-right">{{ column.title }}</th>
        {% endfor %}
      </tr>
    </thead>
    <tbody class="font-lang-2 text-tabular">
    {% for row in site.data.google_analytics reversed %}
      <tr>
        <td scope="row" data-title="Quarter"><span><strong>{{ row.Year }}</strong> {{ row.Quarter }}</span></td>
        {% for column in page.columns %}
        <td data-title="{{ column.title }}" class="text-right">{{ row[column.source] }}</td>
        {% endfor %}
      </tr>
    {% endfor %}
    </tbody>
  </table>
</div>
