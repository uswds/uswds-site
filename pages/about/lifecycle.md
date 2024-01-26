---
title: Component lifecycle
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


<div class="display-flex margin-top-4 ">
  <div class="margin-right-4 grid-col-3">
    <h3 class="line-height-sans-4 border-bottom-05 lifecycle-border--proposal padding-bottom-1 margin-top-0">
      <span class="font-lang-xs">Phase 1</span>
      <br/>
      <span class="font-lang-xl">Proposal</span>
    </h3>
    <p class="font-lang-xs">Gather ideas in a central, public location for discussion and evaluation</p>
  </div>
  <div class="measure-5">
    <!-- <h3 class="margin-top-0 lifecycle-border-bottom lifecycle-border--proposal">Phase 1: Proposal</h3> -->
    <h4 class="{{ phase_header-classes }} lifecycle-bg--proposal font-lang-sm">Proposal creation</h4>
    <p>
      Submit new component ideas as a proposal. Proposals will be submitted to a GitHub repo and can be submitted with a minimum amount of information. The contributor, core team, and community will work together to add content and refine the proposal until it contains all the information needed to make a decision about whether to develop the concept.
    </p>
    <h4 class="{{ phase_header-classes }} lifecycle-bg--proposal font-lang-sm">Voting open</h4>
    <p>
      Once all necessary content has been added, the core team will open the proposal for voting, feedback and discussion. The proposal will remain in this phase for a set minimum amount of time before moving on.
    </p>
    <h4 class="{{ phase_header-classes }} lifecycle-bg--proposal font-lang-sm">Proposal evaluation</h4>
    <p class="margin-bottom-0">
      After the final comment period, the core team will evaluate the proposal. should be accepted and developed, sent back for revision, or marked as “will not pursue.”
    </p>
  </div>
</div>

<hr/>

<div class="display-flex margin-top-4">
  <div class="margin-right-4 grid-col-3">
    <h3 class="line-height-sans-4 border-bottom-05 lifecycle-border--proposal padding-bottom-1 margin-top-0">
      <span class="font-lang-xs">Phase 2</span>
      <br/>
      <span class="font-lang-xl">Development</span>
    </h3>
    <p class="font-lang-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </div>
  <div class="measure-5">
    <!-- <h3 class="margin-top-0 lifecycle-border-bottom lifecycle-border--proposal">Phase 1: Proposal</h3> -->
    <h4 class="{{ phase_header-classes }} lifecycle-bg--development font-lang-sm">Scheduled</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non orci eu metus tristique imperdiet ac ut elit. Cras id justo at libero convallis volutpat ac eu quam. Sed interdum at erat ullamcorper vestibulum. Nulla sed lectus dictum nisi tempor iaculis id ut ligula. Mauris lorem nisi, dapibus vitae sapie
    </p>
    <h4 class="{{ phase_header-classes }} lifecycle-bg--development font-lang-sm">In development</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non orci eu metus tristique imperdiet ac ut elit. Cras id justo at libero convallis volutpat ac eu quam.
    </p>
    <h4 class="{{ phase_header-classes }} lifecycle-bg--development font-lang-sm">Alpha release</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non orci eu metus tristique imperdiet ac ut elit. Cras id justo at libero convallis volutpat ac eu quam. Sed interdum at erat ullamcorper vestibulum. Nulla sed lectus dictum nisi tempor iaculis id ut ligula. Mauris lorem nisi, dapibus vitae sapie
    </p>
  </div>
</div>
