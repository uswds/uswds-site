---
permalink: /
redirect_from:
- /getting-started/
layout: landing
title: "U.S. Web Design System: A design system for the federal government"
class: home
hero:
  callout: A design system for the federal government
  content: Design and build fast, accessible, mobile-friendly government websites backed by user research.
graphic_list:
  list_item:
    - topic: Getting started
      description: Learn how to get started using the U.S. Web Design System for your project, regardless of your technical stack.
      image:
        src: img/home/get-started.svg
        alt:
      link:
        text: Take the first step
        url: documentation
    - topic: UI components
      description: Discover all the different components that the Design System provides as both design and development assets.
      image:
        src: img/home/ui-component.svg
        alt:
      link:
        text: Browse the components
        url: components
    - topic: What’s new
      description: Keep up to date with the current news and product development updates for the U.S. Web Design System.
      image:
        src: img/home/new.svg
        alt:
      link:
        text: See what’s new
        url: whats-new
    - topic: Page templates
      description: Explore the different page templates that have been created to jump start your product development.
      image:
        src: img/home/page-templates.svg
        alt:
      link:
        text: Start from a template
        url: page-templates
---

## Services

{% capture assessment %}
### Assessment

We work with you to assess your current system and determine the most cost-efficient and effective path forward.

<ul class="usa-accordion">
  <li>
    <button class="usa-accordion-button"
      aria-expanded="false"
      aria-controls="assessment-content">
      Why should you work with us?
    </button>
    <div id="assessment-content" class="usa-accordion-content">
      <ul>
        <li>We’ll ensure your Design System implementation is in compliance with the official web policy guidance from OMB and your agency.</li>
        <li>We’ll determine any gaps in skill sets, equipment, design, and code quality needed for successful implementation of the Design System.</li>
        <li>Your team will leave better prepared to adopt private-sector best practices and continue to create successful digital services.</li>
      </ul>
    </div>
  </li>
</ul>

<a href="mailto:uswebdesignstandards+assessment@gsa.gov?cc=inquiries18F@gsa.gov" class="usa-button cta" onclick="ga('send', 'event', 'Clicked Assessment CTA', 'Clicked assessment call to action');">
  <img src="{{ site.baseurl }}/img/logo-email.png" alt="">
  Email us about assessment
</a>
{% endcapture %}

{% capture customization %}
### Customization

Develop and implement a custom look and feel for your site or application-specific needs.

<ul class="usa-accordion">
  <li>
    <button class="usa-accordion-button"
      aria-expanded="false"
      aria-controls="customization-content">
      Why should you work with us?
    </button>
    <div id="customization-content" class="usa-accordion-content">
      <ul>
        <li>We’ll get you up and running with a version of the Design System that’s tailored to meet your needs.</li>
        <li>Your digital services will stay in compliance with the official web policy guidance from OMB.</li>
        <li>Fully implementing the Design System brings a range of best practices to your digital services.</li>
        <li>This investment will reduce the cost and time to design and develop future compliant digital services.</li>
      </ul>
    </div>
  </li>
</ul>

<a href="mailto:uswebdesignstandards+customization@gsa.gov?cc=inquiries18F@gsa.gov" class="usa-button cta" onclick="ga('send', 'event', 'Clicked Customization CTA', 'Clicked customization call to action');">
  <img src="{{ site.baseurl }}/img/logo-email.png" alt="">
  Ask us about customization
</a>
{% endcapture %}

<div class="usa-grid-full">
  <div class="usa-width-one-half">
    {{ assessment | markdownify }}
  </div>
  <div class="usa-width-one-half">
    {{ customization | markdownify }}
  </div>
</div>
