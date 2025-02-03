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
product_cards:
  - heading: "USWDS 3"
    image: "https://placehold.co/1600x900"
    body: |
      The U.S. Web Design System helps the federal government build fast, accessible, mobile-friendly websites.
    linkText: "USWDS 3.12.0"
    linkUrl: "https://github.com/uswds/uswds/releases"
  - heading: "USWDS Compile"
    image: "https://placehold.co/1600x900"
    body: |
      Simple Gulp 5 functions for copying USWDS static assets and transforming USWDS Sass into browser-readable CSS.
    linkText: "USWDS Compile 1.2.1"
    linkUrl: "https://github.com/uswds/uswds-compile/releases/tag/v1.2.1"
  - heading: "USWDS Figma design kit"
    image: "https://placehold.co/1600x900"
    body: "An official United States Web Design System (USWDS) design kit from the USWDS team."
    linkText: "USWDS Figma Beta 0.3"
    linkUrl: "https://github.com/uswds/uswds-for-designers/releases/tag/v3.0.0"
follow_cards:
  - heading: "Stay up to date in your inbox"
    subheading: Newsletter
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt augue vitae pulvinar lacinia."
    image: "https://placehold.co/1600x900"
    linkText: "Sign up for our newsletter"
    linkUrl: "https://public.govdelivery.com/accounts/USGSATTS/subscriber/new?qsp=GSA_TTS"
  - heading: "USWDS on GitHub"
    subheading: Github
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt augue vitae pulvinar lacinia."
    image: "https://placehold.co/1600x900"
    linkText: "Follow us on GitHub"
    linkUrl: "https://github.com/uswds"
in_page_nav_headings: "h2"
---
{% assign all_posts = site.posts | concat: site.posts_short | sort: "date" | reverse %}
{% assign product_update_posts = all_posts | where_exp: "post", "post.tags contains 'Product updates'"  %}
{% assign discussion_posts = all_posts | where_exp: "post", "post.tags contains 'Discussion'"  %}
{% assign monthly_call = site.data.monthly-calls.videos[0]  %}

{:.margin-top-6.text-normal.font-lang-md.text-gray-70}
## Latest releases

{% include site-card-list.html
  cards=page.product_cards
  listClasses="margin-top-3"
  listItemClasses="desktop:grid-col-4"
  headerClasses="font-lang-md"
  bodyClasses="font-body-xs usa-card__body--exdent"
  containerClasses="border-0"
  mediaClasses="usa-card__media--exdent"
%}

{:.margin-top-2.text-normal.font-lang-md.text-gray-70}
## Product updates

<div>
{% for post in product_update_posts %}
  {% include post-preview.html heading="h3"%}
{% endfor %}
</div>

<a class="usa-button" href="{{ site.baseurl }}/about/whats-new/all/">See all USWDS news and updates</a>

<div class="usa-card usa-card--flag usa-card--media-right measure-6 margin-y-6">
  <div class="usa-card__container margin-x-0">
    <div class="usa-card__header grid-col-7">
      <h3 class="site-subheading">Latest monthly callsss</h3>
      <h4 class="usa-card__heading font-lang-lg">{{ monthly_call.date }}: {{ monthly_call.title }}</h4>
    </div>
    <div class="usa-card__media usa-card__media--exdent grid-col-5 bg-gray-60">
    </div>
    <div class="usa-card__body grid-col-7">
      <p>{{ monthly_call.subtitle }}</p>
    </div>
    <div class="usa-card__footer grid-col-7">
      <a href="{{ site.baseurl }}/about/monthly-calls" class="usa-button">See the latest USWDS monthly calls</a>
    </div>
  </div>
</div>

{:.margin-top-2.text-normal.font-lang-md.text-gray-70}
## Featured discussions
<div>
{% for post in discussion_posts limit:2 %}
  {% include post-preview.html heading="h3"%}
{% endfor %}
</div>

<a class="usa-button" href="https://github.com/uswds/uswds/discussions">View all USWDS GitHub discussions</a>

{:.margin-top-7.text-normal.font-lang-md.text-gray-70}
## Follow us

{% include site-card-list.html
  cards=page.follow_cards
  listClasses="margin-top-2 measure-6"
  listItemClasses="desktop:grid-col-6"
%}

{:.margin-top-2.text-normal.font-lang-md.text-gray-70}
## Changelogs

{% assign changelogs = site.data.changelogs %}
{% assign changelogsItems = "" | split: "," %}

{% for file in changelogs %}
  {% assign items = file[1].items %}
  {% assign changelogItems = changelogItems | concat: items %}
{% endfor %}

{% assign changelogItems = changelogItems | sort: 'date' | reverse | slice: 0,10 %}


{% include changelog-table.html %}

<a class="usa-button margin-top-2" href="{{ site.baseurl }}/about/whats-new/all/">View all changelogs</a>
