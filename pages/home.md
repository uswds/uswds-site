---
permalink: /
layout: landing
title: A design system for government digital services
hero:
  callout: U.S. Web Design Standards
  content: The Standards are a design system that allows federal agencies to quickly prototype and deploy digital products using a baseline of design patterns.
graphic_list:
  list_item:
    - topic: Getting Started
      description: Learn how to get started using the U.S. Web Design Standards for your project, regardless of your technical stack.
      href: /getting-started/
      image:
        src: img/home/get-started.svg
        alt:
    - topic: UI Components
      description: Discover all the different components that the Standards provide as both design and development assets.
      href: /components/
      image:
        src: img/home/ui-component.svg
        alt:
    - topic: What's New
      description: Keep up to date with the current news and product development updates for the U.S. Web Design Standards.
      href: /whats-new/
      image:
        src: img/home/new.svg
        alt:
    - topic: Page Templates
      description: Explore the different page templates that have been created to jump start your product development.
      href: /page-templates/
      image:
        src: img/home/page-templates.svg
        alt:
---

## New training and services

{% capture training %}
### Training

We offer a customized training program to fit your team’s needs. The
product team will provide guidance for getting up and running with
the U.S. Web Design Standards and kick-start your design and
development.

<a href="mailto:uswebdesignstandards@gsa.gov" class="usa-button cta" onclick="ga('send', 'event', 'Clicked Training CTA', 'Clicked training call to action');">
  <img src="{{ site.baseurl }}/img/logo-email.png" alt="">
  Email us about training
</a>
{% endcapture %}

{% capture customization %}
### Customization

The product team will partner with you to determine the appropriate
level of help and customization to make adopting the Standards a
piece of cake. You can also read about customization in our
[developer guide](getting-started/developers/#customization-and-theming).

<a href="mailto:uswebdesignstandards@gsa.gov" class="usa-button cta" onclick="ga('send', 'event', 'Clicked Customization CTA', 'Clicked customization call to action');">
  <img src="{{ site.baseurl }}/img/logo-email.png" alt="">
  Ask us about customization
</a>
{% endcapture %}

<div class="usa-grid-full">
  <div class="usa-width-one-half">
    {{ training | markdownify }}
  </div>
  <div class="usa-width-one-half">
    {{ customization | markdownify }}
  </div>
</div>
