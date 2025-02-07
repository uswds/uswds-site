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
  - text: All news and events
    href: /about/whats-new/all/
  - text: Changelog
    href: /about/whats-new/changelogs/
changelog:
  key: about-whats-new
jump_links:
  - Latest releases
  - Latest news and events
  - Connect with USWDS
  - Changelog
product_cards:
  - heading: "USWDS"
    subheading: Design system
    body: |
      The U.S. Web Design System helps the federal government build fast, accessible, mobile-friendly websites.
    linkText: "USWDS 3.12.0"
    linkUrl: "https://github.com/uswds/uswds/releases"
  - heading: "USWDS Compile"
    subheading: Compilation tool
    body: |
      Simple Gulp 5 functions for copying USWDS static assets and transforming USWDS Sass into browser-readable CSS.
    linkText: "USWDS Compile 1.2.1"
    linkUrl: "https://github.com/uswds/uswds-compile/releases/tag/v1.2.1"
  - heading: "USWDS Figma"
    subheading: Design kit
    body: "An official United States Web Design System (USWDS) design kit from the USWDS team."
    linkText: "USWDS Figma Beta 0.3"
    linkUrl: "https://github.com/uswds/uswds-for-designers/releases/tag/v3.0.0"
connect_cards:
  - heading: "Stay up to date in your inbox"
    subheading: Newsletter
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt augue vitae pulvinar lacinia."
    linkText: "Sign up for our newsletter"
    linkUrl: "https://public.govdelivery.com/accounts/USGSATTS/subscriber/new?qsp=GSA_TTS"
  - heading: "GitHub discussions"
    subheading: Community discussions
    body: "How our growing community of government engineers, content specialists, and designers participate and contribute to improving USWDS."
    linkText: "USWDS GitHub discussions"
    linkUrl: "https://github.com/uswds"
in_page_nav_headings: "h2"
---
<!-- Combine posts and short posts into a single feed -->
{% assign all_posts = site.posts | concat: site.posts_short | sort: "date" | reverse %}
<!-- Get data from the most recent  monthly call -->
{% assign monthly_call = site.data.monthly-calls.videos[0]  %}

<style>
  .usa-card__media {
    background: url("{{ site.baseurl }}/img/monthly_call_bg.png");
    background-size:15rem;
    background-position-x: bottom;
    background-position-y: center;
    background-repeat: none;
  }
  .usa-card__img {
    background-color: initial;
    background-position: center;
  }
  .usa-card__img img {
    object-fit: initial;

  }
</style>

{:.whats-new__heading}
## On this page

{% include jump-links.html listClasses="margin-bottom-4 margin-top-1" %}

<div class="site-whats-new-grid margin-bottom-6 bg-gray-5 padding-3">
  <h2 class="text-normal font-lang-md margin-top-0">Latest releases</h2>
  {% include site-card-list.html
    cards=page.product_cards
    listItemClasses="desktop-lg:grid-col-4 desktop-lg:margin-bottom-0"
    headerClasses="font-lang-lg tablet-lg:font-lang-md desktop-lg:font-lang-lg padding-x-0 margin-top-105"
    bodyClasses="desktop:font-body-xs usa-card__body--exdent"
  %}
</div>

{:.whats-new__heading}
## Latest news and events
<div>
{% for post in all_posts limit:3 %}
  {% include post-preview.html heading="h3" meta=true %}
{% endfor %}
</div>

<div class="usa-card usa-card--flag usa-card--media-right measure-6 margin-y-4">
  <div class="usa-card__container tablet:padding-1 desktop-lg:padding-y-3 desktop-lg:padding-x-2 margin-x-0 bg-blue-warm-80v text-gray-warm-5 border-0">
    <div class="usa-card__header tablet:grid-col-7">
      <h3 class="site-subheading text-gray-warm-10">Monthly call</h3>
      <h4 class="usa-card__heading font-lang-lg">{{ monthly_call.date }}: {{ monthly_call.title }}</h4>
    </div>
    <div class="usa-card__media tablet:grid-col-5 padding-3 desktop-lg:padding-6 display-flex flex-justify-center">
      <div class="usa-card__img maxw-card-lg">
        <img  src="{{ site.baseurl }}/img/uswds-logo/4c-lg-on-black.svg">
      </div>
    </div>
    <div class="usa-card__body tablet:grid-col-7">
      <p>{{ monthly_call.subtitle }}</p>
    </div>
    <div class="usa-card__footer tablet:grid-col-7">
      <a href="{{ site.baseurl }}/about/monthly-calls" class="usa-button bg-gold-20v text-blue-80v">See the latest USWDS monthly calls</a>
    </div>
  </div>
</div>

{% for post in all_posts offset:2 limit:3 %}
  {% include post-preview.html heading="h3" meta=true %}
{% endfor %}

<a class="usa-button margin-top-2" href="{{ site.baseurl }}/about/whats-new/all/">See all USWDS news and updates</a>

{:.whats-new__heading.margin-top-6}
## Connect with USWDS

<div class="site-whats-new-grid">
  {% include site-card-list.html
    cards=page.connect_cards
    listClasses="margin-bottom-6 measure-6"
    listItemClasses="desktop-lg:grid-col-6 desktop-lg:margin-bottom-0"
    containerClasses="bg-gray-4"
  %}
</div>

{:.whats-new__heading}
## Changelog

{% assign changelogs = site.data.changelogs %}
{% assign changelogsItems = "" | split: "," %}

{% for file in changelogs %}
  {% assign items = file[1].items %}
  {% assign changelogItems = changelogItems | concat: items %}
{% endfor %}

{% assign changelogItems = changelogItems | sort: 'date' | reverse | slice: 0,15 %}

{% include consolidated-changelog-table.html %}

<a class="usa-button" href="{{ site.baseurl }}/about/whats-new/all/">View all changelog entries</a>
