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
touchpoints_survey: false
graphic_list:
  list_item:
    - topic: Components
      description: Browse all USWDS components, and get UX, accessibility, and implementation guidance.
      image:
        src: img/home/ui-component.svg
        alt:
        width: 72
        height: 72
      link:
        text: Browse components
        url: components
    - topic: Patterns
      description: Use our guidance to craft effective and inclusive user experiences.
      image:
        src: img/home/page-templates.svg
        alt:
        width: 72
        height: 72
      link:
        text: Explore pattern guidance
        url: patterns
    - topic: Design tokens
      description: Learn how to get started using design tokens, the building blocks of USWDS component design.
      image:
        src: img/home/design-tokens.svg
        alt:
        width: 72
        height: 72
      link:
        text: View design tokens
        url: design-tokens
    - topic: Utilities
      description: Adapt your designs and deliver prototypes quickly and consistently without touching a line of CSS.
      image:
        src: img/home/utilities.svg
        alt:
        width: 72
        height: 72
      link:
        text: Build with utilities
        url: utilities
---

<section class="usa-section bg-base-lightest showcase">
  <div class="grid-container">
    <h2 class="font-lang-xl margin-y-0 line-height-serif-2">Sites built with USWDS</h2>
    <div class="grid-row grid-gap tablet:margin-top-3">
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/webp/home/showcase/nih.webp" alt="" width="960" height="540">
        <a href="https://www.nihlibrary.nih.gov/">National Institutes of Health Library</a>
      </div>
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/webp/home/showcase/va-healthcare.webp" alt="" width="960" height="540">
        <a href="https://www.va.gov/">U.S. Department of Veterans Affairs</a>
      </div>
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/webp/home/showcase/nasa.webp" alt="" width="960" height="540">
        <a href="https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/">NASA Beginner's Guide to Aeronautics</a>
      </div>
    </div>
  </div>

  <div class="grid-container tablet:margin-top-6">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/webp/home/showcase/pubmed.webp" alt="" width="960" height="540">
        <a class="font-lang-md" href="https://www.ncbi.nlm.nih.gov/labs/pubmed/">PubMed Labs | U.S. National Library of Medicine</a>
      </div>
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/webp/home/showcase/vote.webp" alt="" width="960" height="540">
        <a href="https://vote.gov/">vote.gov</a>
      </div>
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/webp/home/showcase/seedfund.webp" alt="" width="960" height="540">
        <a href="https://seedfund.nsf.gov/">America’s Seed Fund</a>
      </div>
    </div>
  </div>
</section>
