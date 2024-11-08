---
permalink: /about/whats-new/
layout: styleguide
title: What’s new
category: About
lead: Here you can find the latest news and information about USWDS. Learn more about our product development and process, dive deeper into our Monthly Call topics, and see how we work with our partners to impact the government technology space.
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
subnav:
  - text: All news and updates
    href: /about/whats-new/all-news/
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
        <p>Find summaries of each USWDS update on our GitHub releases page. Release notes explain bug fixes, new features, and other changes.</p>
      </div>
      <div class="usa-card__footer">
        <a class="usa-button" href="https://github.com/uswds/uswds/releases">Read the USWDS release notes</a>
      </div>
    </div>
  </li>
  <li class="usa-card site-component-card desktop:grid-col-6">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h2 class="usa-card__heading font-lang-lg">GitHub discussions</h2>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>How our growing community of government engineers, content specialists, and designers participate and contribute to improving USWDS.</p>
      </div>
      <div class="usa-card__footer">
        <a class="usa-button" href="https://github.com/uswds/uswds/discussions">USWDS GitHub discussions</a>
      </div>
    </div>
  </li>
</ul>

## News and updates

{% capture lead %}
{% endcapture %}
{% include lead.html text=lead %}

{% for post in site.posts limit:4%}
  {% include post.html post=post excerpt=true  %}
{% endfor %}

---

<a class="usa-button margin-top-2" href="{{ site.baseurl }}/about/whats-new/all-news/">View all USWDS news and updates</a>
