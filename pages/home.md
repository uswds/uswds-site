---
permalink: /
layout: landing
title: Announcing version 1.1
hero:
  callout: About the Standards
  content: The Web Design Standards are a library of design guidelines and code to help government developers and designers quickly create trustworthy, accessible, and consistent digital government services.
  button:
    href: whats-new/updates/2017/04/26/fractal-federalist/
    text: Read about the latest release
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
