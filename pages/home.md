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
    - topic: Page templates
      description: Use our basic page templates as a starting point for your design and development process.
      image:
        src: img/home/page-templates.svg
        alt:
        width: 72
        height: 72
      link:
        text: Start from a template
        url: page-templates
---

<section class="usa-section bg-base-lightest showcase" aria-label="Sites using USWDS">
  <div class="grid-container">
    <h2 class="font-lang-xl margin-y-0 line-height-serif-2">Showcase</h2>
    <div class="grid-row grid-gap tablet:margin-top-3">
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/webp/home/showcase/vote.webp" alt="Preview image of vote.gov home page" width="640" height="360">
        <a href="https://vote.gov/">vote.gov</a>
      </div>
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/webp/home/showcase/va-healthcare.webp" alt="Preview image of Veterans affairs home page" width="640" height="360">
        <a href="https://www.va.gov/">U.S. Department of Veterans Affairs</a>
      </div>
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/webp/home/showcase/nasa.webp" alt="Preview image of NASA Glenn Research Center home page" width="640" height="360">
        <a href="https://www1.grc.nasa.gov/">NASA Glenn Research Center</a>
      </div>
    </div>
  </div>

  <div class="grid-container tablet:margin-top-6">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/webp/home/showcase/pubmed.webp" alt="Preview image of NASA Glenn Research Center home page" width="640" height="360">
        <a class="font-lang-md" href="https://www.ncbi.nlm.nih.gov/labs/pubmed/">PubMed Labs | U.S. National Library of Medicine</a>
      </div>
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/webp/home/showcase/seedfund.webp" alt="Preview image of Seed Fund home page" width="640" height="360">
        <a href="https://seedfund.nsf.gov/">America’s Seed Fund</a>
      </div>
      <div class="tablet:grid-col">
        <img src="{{ site.baseurl }}/img/webp/home/showcase/plainlanguage.webp" alt="Preview image of Plain Language home page" width="640" height="360">
        <a href="https://plainlanguage.gov/">Plain Language</a>
      </div>
    </div>
  </div>
</section>
