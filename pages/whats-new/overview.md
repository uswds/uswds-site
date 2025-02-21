---
permalink: /about/whats-new/
layout: styleguide
title: What’s new
category: About
lead: |
  Stay up to date on the latest U.S. Web Design System (USWDS) product launches, learn how to use the design system, and dive deeper into our monthly call topics.
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
jump_links:
  - text: Latest releases
  - text: News and events
  - text: Connect with USWDS
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
{% assign uswds_link_text = 'USWDS ' | append: site.uswds_version %}
{% assign uswds_compile_link_text = 'USWDS Compile ' | append: site.uswds_compile_version %}
{% assign uswds_design_kit_link_text = 'USWDS design kit ' | append: site.uswds_design_kit_version %}

<!--
  Set monthly call card variables
  - Get data from the most recent monthly call
  - Set card strings
-->
{% assign monthly_call = site.data.monthly-calls.videos[0]  %}
{% assign monthly_call_heading =  monthly_call.date | append: ': ' | append: monthly_call.title %}
{% assign monthly_call_image = site.baseurl | append: '/img/uswds-logo/4c-lg-on-black.svg' %}
{% assign monthly_call_url = site.baseurl | append: '/about/monthly-calls' %}

{:.whats-new__heading.margin-top-4}
On this page

{% include jump-links.html %}

<div class="bg-gray-5 padding-3 margin-top-4">
  <h2 class="whats-new__heading margin-top-0" id="latest-releases">Latest releases</h2>
  <ul class="usa-card-group whats-new-card-group">
    <li class="{{ product_grid_list_classes }}">
      {% include site-card.html
        subheading="Design system"
        heading="USWDS"
        body="The official U.S. design system, enabling the government to build fast, accessible, mobile-friendly websites."
        linkText=uswds_link_text
        linkUrl="https://github.com/uswds/uswds/releases"
        linkClasses="padding-x-105"
      %}
    </li>
    <li class="{{ product_grid_list_classes }}">
      {% include site-card.html
        subheading="Compilation tool"
        heading="USWDS Compile"
        body="A tool that makes it easy to customize and compile USWDS Sass into browser-readable CSS."
        linkText=uswds_compile_link_text
        linkUrl="https://github.com/uswds/uswds-compile/releases"
        linkClasses="padding-x-105"
      %}
    </li>
    <li class="{{ product_grid_list_classes }}">
      {% include site-card.html
        subheading="Design assets"
        heading="USWDS for designers"
        body="The official USWDS design kits in Sketch and Figma."
        linkText=uswds_design_kit_link_text
        linkUrl="https://github.com/uswds/uswds-for-designers/releases"
        linkClasses="padding-x-105"
      %}
    </li>
  </ul>
</div>

{:.whats-new__heading}
## News and events
{% for post in all_posts limit:3 %}
  {% include post-preview.html heading="h3" %}
{% endfor %}

<a class="usa-button usa-button--outline margin-top-105"
  href="{{ site.baseurl }}/about/whats-new/all/">
  See all USWDS news and events
</a>

<div class="usa-card usa-card--flag usa-card--media-right whats-new-card--monthly-call">
  {% include site-card.html
    subheading="Monthly call"
    subheadingElement="h2"
    heading=monthly_call_heading
    body=monthly_call.subtitle
    image=monthly_call_image
    linkText="See the latest USWDS monthly calls"
    linkUrl=monthly_call_url
  %}
</div>

{:.whats-new__heading}
## Connect with USWDS

<div class="measure-6">
  {% include site-card-list.html
    cards=page.connect_cards
    listClasses="whats-new-card-group"
    listItemClasses="desktop-lg:grid-col-6"
    containerClasses="bg-gray-4"
  %}
</div>
