---
title: Component lifecycle phases
permalink: /about/component-lifecycle/
layout: styleguide
category: About
lead: Lorem ipsum dolor
subnav:
  - text: Latest updates
    href: '#changelog'
changelog:
  key: about-component-lifecycle
---

{% assign phase_classes = "lifecycle-phase-box grid-col font-lang-xs text-bold text-no-underline text-ink" %}
{% assign phase_header-classes = "display-inline-block padding-y-05 padding-x-2 margin-bottom-0 margin-top-2" %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum felis in nunc convallis, hendrerit tempus ipsum tempus. Maecenas convallis tellus non ornare tincidunt. Ut et consequat arcu.

<!-- ## Component lifecycle -->

<!-- <div class="grid-row measure-5">
  <a href="#phase-1-proposal" class="{{ phase_classes }} lifecycle-phase-1">
    Proposal
  </a>
  <a href="#phase-1-proposal" class="{{ phase_classes }} lifecycle-phase-2">
    Development
  </a>
  <a href="#phase-1-proposal" class="{{ phase_classes }} lifecycle-phase-3">
    Released
  </a>
  <a href="#phase-1-proposal" class="{{ phase_classes }} lifecycle-phase-4">
    Deprecated
  </a>
</div> -->

<!-- 1. [Proposal](#proposal)
1. [Development](#proposal)
1. [Released](#proposal)
1. [Deprecated](#proposal) -->

<div class="display-flex margin-top-4 ">
  <div class="margin-right-4 grid-col-3 lifecycle-header">
    <h2 class="line-height-sans-4 border-bottom-05 lifecycle-border--proposal padding-bottom-1 margin-top-0">
      <span class="font-lang-xs">Phase 1</span>
      <br/>
      <span class="font-lang-xl">Proposal</span>
    </h2>
    <p class="font-lang-xs">Gather ideas in a central, public location for discussion and evaluation</p>
  </div>
  <div class="measure-5">
    <!-- <h2 class="margin-top-0 lifecycle-border-bottom lifecycle-border--proposal">Phase 1: Proposal</h2> -->
    <h3 class="{{ phase_header-classes }} lifecycle-bg--proposal font-lang-sm">Proposal creation</h3>
    <p>
      Submit new component ideas in our [proposal repo](http://www.github.com).
    </p>
    <h3 class="{{ phase_header-classes }} lifecycle-bg--proposal font-lang-sm">Voting open</h3>
    <p>
      The proposal is complete and open for community feedback.
    </p>
    <h3 class="{{ phase_header-classes }} lifecycle-bg--proposal font-lang-sm">Proposal evaluation</h3>
    <p>
      After the final comment period, the core team will evaluate the proposal. should be accepted and developed, sent back for revision, or marked as “will not pursue.”
    </p>
    <h3 class="{{ phase_header-classes }} lifecycle-bg--accepted font-lang-sm">Approved</h3>
    <p>
      The proposed component is a good fit and will be included in the Design System
    </p>
    <h3 class="{{ phase_header-classes }} lifecycle-bg--rejected font-lang-sm">Will not pursue</h3>
    <p>
      The proposed component is not a good fit and will not be included in the Design System.
    </p>
  </div>
</div>

<hr/>

<div class="display-flex margin-top-4">
  <div class="margin-right-4 grid-col-3">
    <h2 class="line-height-sans-4 border-bottom-05 lifecycle-border--proposal padding-bottom-1 margin-top-0">
      <span class="font-lang-xs">Phase 2</span>
      <br/>
      <span class="font-lang-xl">Development</span>
    </h2>
    <p class="font-lang-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </div>
  <div class="measure-5">
    <!-- <h2 class="margin-top-0 lifecycle-border-bottom lifecycle-border--proposal">Phase 1: Proposal</h2> -->
    <h3 class="{{ phase_header-classes }} lifecycle-bg--development font-lang-sm">Scheduled</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non orci eu metus tristique imperdiet ac ut elit. Cras id justo at libero convallis volutpat ac eu quam. Sed interdum at erat ullamcorper vestibulum. Nulla sed lectus dictum nisi tempor iaculis id ut ligula. Mauris lorem nisi, dapibus vitae sapie
    </p>
    <h3 class="{{ phase_header-classes }} lifecycle-bg--development font-lang-sm">In development</h3>
    <p>
      Design, develop, test, document, and release the proposed concept
    </p>
    <h3 class="{{ phase_header-classes }} lifecycle-bg--development font-lang-sm">Alpha release</h3>
    <p>
      Test, iterate, and deploy for internal testing. Perform development, QA, UX, and accessibility testing, and iterate as needed. The core team will deploy as appropriate.
    </p>
  </div>
</div>

<hr/>

<div class="display-flex margin-top-4">
  <div class="margin-right-4 grid-col-3">
    <h2 class="line-height-sans-4 border-bottom-05 lifecycle-border--released padding-bottom-1 margin-top-0">
      <span class="font-lang-xs">Phase 3</span>
      <br/>
      <span class="font-lang-xl">Released</span>
    </h2>
    <p class="font-lang-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </div>
  <div class="measure-5">
    <!-- <h2 class="margin-top-0 lifecycle-border-bottom lifecycle-border--proposal">Phase 1: Proposal</h2> -->
    <h3 class="{{ phase_header-classes }} lifecycle-bg--experimental font-lang-sm">Experimental</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non orci eu metus tristique imperdiet ac ut elit. Cras id justo at libero convallis volutpat ac eu quam. Sed interdum at erat ullamcorper vestibulum.
    </p>
    <h3 class="{{ phase_header-classes }} lifecycle-bg--released font-lang-sm">Stable</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non orci eu metus tristique imperdiet ac ut elit. Cras id justo at libero convallis volutpat ac eu quam.
    </p>
    <h3 class="{{ phase_header-classes }} lifecycle-bg--caution font-lang-sm">Use with caution</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non orci eu metus tristique imperdiet ac ut elit. Cras id justo at libero convallis volutpat ac eu quam.
    </p>
  </div>
</div>

<hr/>

<div class="display-flex margin-top-4">
  <div class="margin-right-4 grid-col-3">
    <h2 class="line-height-sans-4 border-bottom-05 lifecycle-border--deprecated padding-bottom-1 margin-top-0">
      <span class="font-lang-xs">Phase 4</span>
      <br/>
      <span class="font-lang-xl">Deprecated</span>
    </h2>
    <p class="font-lang-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </div>
  <div class="measure-5">
    <!-- <h2 class="margin-top-0 lifecycle-border-bottom lifecycle-border--proposal">Phase 1: Proposal</h2> -->
    <h3 class="{{ phase_header-classes }} lifecycle-bg--deprecated font-lang-sm">Deprecated</h3>
    <p>
       Remove components from active support
    </p>
    <h3 class="{{ phase_header-classes }} lifecycle-bg--deprecated  font-lang-sm">Retired</h3>
    <p>
      Remove components from the code base
    </p>
  </div>
</div>
