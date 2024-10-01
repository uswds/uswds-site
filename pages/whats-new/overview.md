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
changelog:
  key: about-whats-new
---

<ul class="usa-card-group margin-top-6">
  <li class="usa-card site-component-card desktop:grid-col-6">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h2 class="usa-card__heading font-lang-lg">Release notes</h2>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>Find summaries of each USWDS update on our <a href="https://github.com/uswds/uswds/releases">GitHub releases page</a>. Release notes explain bug fixes, new features, and other changes.</p>
      </div>
    </div>
  </li>
  <li class="usa-card site-component-card desktop:grid-col-6">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h2 class="usa-card__heading font-lang-lg">Design System in the wild</h2>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>Interested in seeing who else is using USWDS? We maintain a list of USWDS-based sites on our <a href="{{ site.baseurl }}/documentation/showcase">showcase page</a>.</p>
      </div>
    </div>
  </li>
</ul>

{% capture lead %}
{% endcapture %}
{% include lead.html text=lead %}

{% for post in site.posts %}
  {% include post.html post=post excerpt=true %}
{% endfor %}