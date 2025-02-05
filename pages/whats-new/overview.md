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
  - text: All news and updates
    href: /about/whats-new/all/
  - text: Changelogs
    href: /about/whats-new/changelogs/
changelog:
  key: about-whats-new
jump_links:
  - Latest releases
  - Latest news
  - Changelogs
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
follow_cards:
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
{% assign all_posts = site.posts | concat: site.posts_short | sort: "date" | reverse %}
<!-- {% assign product_update_posts = all_posts | where_exp: "post", "post.tags contains 'Product updates'"  %}
{% assign discussion_posts = all_posts | where_exp: "post", "post.tags contains 'Discussion'"  %} -->

<!-- grab data from the most recent  monthly call -->
{% assign monthly_call = site.data.monthly-calls.videos[0]  %}

{:.margin-top-4.text-normal.font-lang-md.text-gray-70}
## On this page
{% include jump-links.html
  headingLevel="h2"
  headingText="On this page"
  listClasses="margin-bottom-4 margin-top-1"
%}

<div class="site-product-grid margin-bottom-6">
  <h2 class="text-normal font-lang-md margin-top-0">Latest releases</h2>
  {% include site-card-list.html
    cards=page.product_cards
    listItemClasses="desktop:grid-col-4 margin-bottom-0"
    headerClasses="font-lang-lg padding-x-0 margin-top-105"
    bodyClasses="font-body-xs usa-card__body--exdent"
    containerClasses="bg-gray-5"
    mediaClasses="usa-card__media--exdent display-flex flex-justify-center"
    imageClasses="width-15 margin-top-2"
    buttonClasses=""
  %}
</div>

{:.margin-y-2.text-normal.font-lang-md.text-gray-70}
## Latest news
<div>
{% for post in all_posts limit:2 %}
  {% include post-preview.html heading="h3"%}
{% endfor %}
</div>

<div class="usa-card usa-card--flag usa-card--media-right measure-6 margin-y-4">
  <div class="usa-card__container padding-y-3 padding-x-2 margin-x-0 bg-blue-80v text-gray-warm-5 border-0">
    <div class="usa-card__header grid-col-7">
      <h3 class="site-subheading text-gray-warm-10">Monthly call</h3>
      <h4 class="usa-card__heading font-lang-lg">{{ monthly_call.date }}: {{ monthly_call.title }}</h4>
    </div>
    <div class="usa-card__media grid-col-5 bg-gray-60">
    </div>
    <div class="usa-card__body grid-col-7">
      <p>{{ monthly_call.subtitle }}</p>
    </div>
    <div class="usa-card__footer grid-col-7">
      <a href="{{ site.baseurl }}/about/monthly-calls" class="usa-button bg-gold-20v text-blue-80v">See the latest USWDS monthly calls</a>
    </div>
  </div>
</div>

{% for post in all_posts offset:2 limit:3 %}
  {% include post-preview.html heading="h3"%}
{% endfor %}

<a class="usa-button margin-top-2" href="{{ site.baseurl }}/about/whats-new/all/">See all USWDS news and updates</a>

{:.margin-top-6.text-normal.font-lang-md.text-gray-70}
## Lorem ipsum

<div class="site-product-grid">
  {% include site-card-list.html
    cards=page.follow_cards
    listClasses="margin-bottom-6 measure-6"
    listItemClasses="desktop:grid-col-6 margin-bottom-0"
    containerClasses="bg-gray-5"
  %}
</div>

{:.margin-top-0.text-normal.font-lang-md.text-gray-70}
## Changelogs

{% assign changelogs = site.data.changelogs %}
{% assign changelogsItems = "" | split: "," %}

{% for file in changelogs %}
  {% assign items = file[1].items %}
  {% assign changelogItems = changelogItems | concat: items %}
{% endfor %}

{% assign changelogItems = changelogItems | sort: 'date' | reverse | slice: 0,15 %}

{% include consolidated-changelog-table.html %}

<a class="usa-button margin-top-2" href="{{ site.baseurl }}/about/whats-new/all/">View all changelogs</a>
