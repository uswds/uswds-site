---
permalink: /how-to-use-uswds/
layout: styleguide
title: How to use USWDS
category: How to use USWDS
lead: USWDS provides principles, guidance, and code to help you design and build accessible, mobile-friendly government websites and digital services.
redirect_from:
  - /documentation/how-to-use-uswds/
  - /documentation/
subnav:
- text: Latest updates
  href: '#changelog'
changelog:
  key: docs-how-to-use-USWDS
---

## Get started with USWDS

<div class="grid-row grid-gap flex-align-stretch margin-top-4">
  <div class="tablet:grid-col display-flex flex-align-stretch">
    <div class="site-docs-card-link">
      <h3 class="font-lang-lg margin-0">
        <a href="{{ site.baseurl }}/documentation/getting-started-for-developers/" class="text-no-underline text-primary hover:text-underline block-link">Developers</a>
      </h3>
      <p class="margin-top-1">Get started with our code base by downloading the code as a zip file or installing with npm.</p>
    </div>
  </div>
  <div class="margin-top-2 tablet:margin-top-0 tablet:grid-col display-flex flex-align-stretch">
    <div class="site-docs-card-link">
      <h3 class="font-lang-lg margin-0">
        <a href="{{ site.baseurl }}/documentation/getting-started-for-designers/" class="text-no-underline text-primary hover:text-underline block-link">Designers</a>
      </h3>
      <p class="margin-top-1">Create wireframes and prototypes in Sketch or Adobe XD.</p>
    </div>
  </div>
  <div class="tablet:grid-col margin-top-2 tablet:margin-top-0 display-flex flex-align-stretch">
    <div class="site-docs-card-link">
      <h3 class="font-lang-lg margin-0">
        <a href="https://github.com/uswds/uswds/wiki" class="block-link text-no-underline text-primary hover:text-underline">USWDS project wiki</a>
      </h3>
      <p class="margin-top-1">Find detailed information about our design and development processes and our collected user research.</p>
    </div>
  </div>
</div>

{:.border-top-05.border-primary.padding-top-3.margin-top-6}

## Before getting started with USWDS

USWDS includes over 40 accessible, mobile-friendly components out of the box, ensuring consistency and saving teams the need to build everything from scratch for their web-design and -redesign projects.

USWDS also provides tools and solutions, including [a simple way to pick accessible colors]({{ site.baseurl }}/design-tokens/color/overview/#color-and-accessibility) or [a component that displays required links]({{ site.baseurl }}/components/identifier/), that make it easy to comply with legal requirements, such as the 21st Century Integrated Digital Experience Act and Section 508 of the Rehabilitation Act.

### Key concepts and tools

You don’t need to understand the following concepts and tools to install the design system, but you will need to know them to build with it:

- [Design tokens]({{ site.baseurl }}/design-tokens/): Design tokens are predefined units of color, spacing, typography, opacity, and more that form the building blocks of the design system.
- [Components]({{ site.baseurl }}/components/overview): Components are simple and consistent solutions to common user interface needs, like form fields, buttons, and icons. If tokens are the building blocks of the design system, components are the building blocks of a site or service.
- [Utilities]({{ site.baseurl }}/utilities/): Utilities are single-purpose classes mapped to USWDS tokens. Utilities allow developers to prototype with design system utilities without writing Sass or CSS.
- [Implementations]({{ site.baseurl }}/documentation/implementations/): Implementations are how teams use USWDS in their projects, like in Drupal, as well as other platforms and frameworks. We'll link to projects and community supported implementations.

We’ve created these resources to help designers start prototyping and developers start building quickly and establish a shared language to promote effective collaboration through the process of customizing and updating content. The [USWDS community](https://designsystem.digital.gov/about/community/) is also a resource available to you. Please get in touch with any questions, recommendations, before, during, and/or after getting started.

## Adopt USWDS incrementally

<div class="">
  <div class="grid-row">
    <div class="tablet:grid-col-7">
      <div class="">
        <p>USWDS helps the federal government design and build better digital experiences. As a toolkit to design and build government websites, the design system provides:</p>
        <ol>
          <li><strong>Principles:</strong> USWDS design principles support and reflect the important guidance codified in 21st Century IDEA.</li>
          <li><strong>Guidance:</strong> USWDS user experience guidance provides best-practice advice for assuring components do what users expect them to do.</li>
          <li><strong>Code:</strong> USWDS code provides an accessible, mobile-friendly experience across government sites. Teams can contribute new components back to USWDS.</li>
        </ol>
        <p>Together, these form a design system <a href="{{ site.baseurl }}/maturity-model">maturity model</a>. Adopt the design system incrementally by starting to implement our <a href="{{ site.baseurl }}/design-principles">design principles</a> in your project. Even before adding any USWDS code, you can also begin to adopt our UX guidance (like this <a href="{{ site.baseurl }}/components/button/">guidance for a button</a>). Then, start small and start to incorporate USWDS <a href="{{ site.baseurl }}/design-tokens">design tokens</a> into your site design.</p>
        <p>The design system is flexible, and we expect you to adapt it as you adopt it. Use the USWDS maturity model to build a solution that best meets your agency’s mission and user needs.</p>
      </div>
    </div>
    <div class="tablet:grid-col-5">
      <div class="padding-2 tablet:padding-left-4">
        <img src="{{ site.baseurl }}/img/maturity-model.svg" role="img" alt="A diagram showing the concentric circles of the USWDS maturity model, progressing from Principles on the outside, through Guidance, and finally to Code in the innermost circle.">
      </div>
    </div>

  </div>
</div>
