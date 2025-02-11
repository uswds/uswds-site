---
permalink: /about/whats-new/
layout: styleguide
title: What’s new
category: About
lead: |
  Stay up to date on the latest U.S. Web Design System (USWDS) product launches, learn how to use the design system, and dive deeper into our monthly call topics.
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
    href: /about/whats-new/changelog/
jump_links:
  - text: Latest releases
  - text: Latest news and events
  - text:  Connect with USWDS
  - text: Changelog
connect_cards:
  - heading: "Stay up to date in your inbox"
    subheading: Newsletter
    body: "Get the latest news, product updates, and resources from USWDS."
    linkText: "Sign up for our newsletter"
    linkUrl: "https://public.govdelivery.com/accounts/USGSATTS/subscriber/new?qsp=GSA_TTS"
  - heading: "GitHub discussions"
    subheading: Community discussions
    body: "Join our growing community of USWDS users and contribute to design system improvements."
    linkText: "USWDS GitHub discussions"
    linkUrl: "https://github.com/uswds/uswds/discussions"
in_page_nav_headings: "h2"
---
<!-- Combine posts and short posts into a single feed -->
{% assign all_posts = site.posts | concat: site.posts_short | sort: "date" | reverse %}

<!--
  Set product release card variables
  - Set card list classes
  - Set card strings
-->
{% assign product_grid_list_classes = "usa-card site-component-card desktop-lg:grid-col-4" %}
{% capture uswds_link_text %} USWDS {{ site.uswds_version }}{%- endcapture %}
{% capture uswds_compile_link_text %} USWDS Compile {{ site.uswds_compile_version }}{%- endcapture %}
{% capture uswds_figma_link_text %} USWDS Figma {{ site.uswds_figma_version }}{%- endcapture %}

<!--
  Set monthly call card variables
  - Get data from the most recent monthly call
  - Set card strings
-->
{% assign monthly_call = site.data.monthly-calls.videos[0]  %}
{% capture monthly_call_heading %} {{ monthly_call.date }}: {{monthly_call.title}} {%- endcapture %}
{% capture monthly_call_image %} {{site.baseurl }}/img/uswds-logo/4c-lg-on-black.svg {%- endcapture %}
{% capture monthly_call_url %} {{ site.baseurl }}/about/monthly-calls {%- endcapture %}

<!-- Set consolidated changelog data -->
{% assign changelogs = site.data.changelogs %}
{% assign changelogsItems = "" | split: "," %}

{% for file in changelogs %}
  {% assign items = file[1].items %}
  {% assign changelogItems = changelogItems | concat: items %}
{% endfor %}

{% assign changelogItems = changelogItems | sort: 'date' | reverse | slice: 0,15 %}

{:.whats-new__heading.margin-top-4}
## On this page

{% include jump-links.html %}

<div class="bg-gray-5 padding-3 margin-top-4">
  <h2 class="whats-new__heading margin-top-0">Latest releases</h2>
  <ul class="usa-card-group whats-new__card-group">
    <li class="{{ product_grid_list_classes }}">
      {% include site-card.html
        subheading="Design system"
        heading="USWDS"
        body="The official U.S. design system, enabling the government to build fast, accessible, mobile-friendly websites."
        linkText=uswds_link_text
        linkUrl="https://github.com/uswds/uswds/releases"
        subheadingLevel="h3"
      %}
    </li>
    <li class="{{ product_grid_list_classes }}">
      {% include site-card.html
        subheading="Compilation tool"
        heading="USWDS Compile"
        body="A tool that makes it easy to customize and compile USWDS Sass into browser-readable CSS."
        linkText=uswds_compile_link_text
        linkUrl="https://github.com/uswds/uswds-compile/releases"
        subheadingLevel="h3"
      %}
    </li>
    <li class="{{ product_grid_list_classes }}">
      {% include site-card.html
        subheading="Design kit"
        heading="USWDS Figma"
        body="The official USWDS design kit."
        linkText=uswds_figma_link_text
        linkUrl="https://www.figma.com/community/file/1440921849343185329"
        subheadingLevel="h3"
      %}
    </li>
  </ul>
</div>

{:.whats-new__heading}
## Latest news and events
<div>
{% for post in all_posts limit:3 %}
  {% include post-preview.html heading="h3" meta=true %}
{% endfor %}
</div>

<a class="usa-button margin-top-105"
  href="{{ site.baseurl }}/about/whats-new/all/">
  See all USWDS news and updates
</a>

<div class="usa-card usa-card--flag usa-card--media-right whats-new-card--monthly-call">
{% include site-card.html
  subheading="Monthly call"
  heading=monthly_call_heading
  body=monthly_call.subtitle
  image=monthly_call_image
  linkText="See the latest USWDS monthly calls"
  linkUrl=monthly_call_url
%}
</div>

{:.whats-new__heading}
## Connect with USWDS

<div class="whats-new__card-group">
  {% include site-card-list.html
    cards=page.connect_cards
    listClasses="measure-6"
    listItemClasses="desktop-lg:grid-col-6"
    containerClasses="bg-gray-4"
    subheadingLevel="h4"
  %}
</div>

{:.whats-new__heading}
## Changelog

{% include consolidated-changelog-table.html %}

<a class="usa-button" href="{{ site.baseurl }}/about/whats-new/changelog/">View all changelog entries</a>
