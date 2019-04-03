---
permalink: /
redirect_from:
- /getting-started/
layout: landing
title: "USWDS: The United States Web Design System"
class: home
hero:
  callout: A design system for the federal government
  content: Design and build fast, accessible, mobile-friendly government websites backed by user research.
graphic_list:
  list_item:
    - topic: Design tokens
      description: Learn how to get started using design tokens, the common building blocks of visual design decisions.
      image:
        src: img/home/get-started.svg
        alt:
      link:
        text: Take the first step
        url: documentation
    - topic: Components
      description: Discover all the different components that USWDS provides as both design and development assets.
      image:
        src: img/home/ui-component.svg
        alt:
      link:
        text: Browse the components
        url: components
    - topic: Utilities
      description: Learn how to tweak your designs and deliver prototypes quickly and consistently, without touching a line of CSS.
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

<section class="usa-section bg-base-lightest showcase">
  <div class="grid-container">
    <h2 class="font-lang-xl margin-y-0">Showcase</h2>
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/home/showcase/vote.jpg" alt="">
        <a href="https://vote.gov/">
          <h3 class="font-lang-md">vote.gov</h3>
        </a>
      </div>
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/home/showcase/va-healthcare.jpg" alt="">
        <a href="https://www.va.gov/">
          <h3 class="font-lang-md">U.S. Department of Veterans Affairs</h3>
        </a>
      </div>
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/home/showcase/nasa.jpg" alt="">
        <a href="https://www1.grc.nasa.gov/">
          <h3 class="font-lang-md">NASA Glenn Research Center</h3>
        </a>
      </div>
    </div>
  </div>

  <div class="grid-container margin-top-6">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/home/showcase/pubmed.jpg" alt="">
        <a href="https://www.ncbi.nlm.nih.gov/labs/pubmed/">
          <h3 class="font-lang-md">PubMed Labs | U.S. National Library of Medicine</h3>
        </a>
      </div>
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/home/showcase/seedfund.jpg" alt="">
        <a href="https://seedfund.nsf.gov/">
          <h3 class="font-lang-md">America's Seedfund</h3>
        </a>
      </div>
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/home/showcase/plainlanguage.jpg" alt="">
        <a href="https://plainlanguage.gov/">
          <h3 class="font-lang-md">Plain Language</h3>
        </a>
      </div>
    </div>
  </div>
</section>
