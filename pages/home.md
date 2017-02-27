---
permalink: /
layout: landing
title: Announcing version 1.0
hero:
  callout: Announcing version 1.0
  content: After a year and a half of development and user research, we’re officially launching version 1.0 of the U.S. Web Design Standards. Please explore the site, read our research and documentation, use our code, and join the community!
  button:
    href: whats-new/releases/#version-1-0-0
    text: Read more about this release
---

## New training and services

{% capture training %}
### Training

We offer a customized training program to fit your team’s needs. The
product team will provide guidance for getting up and running with
the U.S. Web Design Standards and kick-start your design and
development.

<a href="mailto:uswebdesignstandards@gsa.gov" class="usa-button cta">
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

<a href="mailto:uswebdesignstandards@gsa.gov" class="usa-button cta">
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
