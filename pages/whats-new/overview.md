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
    linkText: "USWDS Figma 0.3"
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
<!-- Get data from the most recent monthly call -->
{% assign monthly_call = site.data.monthly-calls.videos[0]  %}
{% assign monthly_call_heading =  monthly_call.date | append: ': ' | append: monthly_call.title %}
{% assign monthly_call_image = site.baseurl | append: '/img/uswds-logo/4c-lg-on-black.svg' %}
{% assign monthly_call_url = site.baseurl | append: '/about/monthly-calls' %}

{:.whats-new__heading.margin-top-6}
## On this page

{% include jump-links.html %}

<div class="whats-new__card-group bg-gray-5 padding-3 margin-top-4">
  <h2 class="whats-new__heading">Latest releases</h2>
  {% include site-card-list.html
    cards=page.product_cards
    listItemClasses="desktop-lg:grid-col-4"
    headerClasses="font-lang-lg tablet-lg:font-lang-md desktop-lg:font-lang-lg"
  %}
</div>

{:.whats-new__heading}
## Latest news and events
<div>
{% for post in all_posts limit:3 %}
  {% include post-preview.html heading="h3" meta=true %}
{% endfor %}
</div>

<div class="usa-card usa-card--flag usa-card--media-right whats-new-card--mc">
{% include site-card.html
  subheading="Monthly call"
  heading=monthly_call_heading
  body=monthly_call.subtitle
  image=monthly_call_image
  linkText="See the latest USWDS monthly calls"
  linkUrl=monthly_call_url
%}
</div>

{% for post in all_posts offset:2 limit:3 %}
  {% include post-preview.html heading="h3" meta=true %}
{% endfor %}

<a class="usa-button margin-top-2 margin-bottom-6" href="{{ site.baseurl }}/about/whats-new/all/">See all USWDS news and updates</a>

{:.whats-new__heading}
## Connect with USWDS

<div class="whats-new__card-group">
  {% include site-card-list.html
    cards=page.connect_cards
    listClasses="measure-6"
    listItemClasses="desktop-lg:grid-col-6"
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
