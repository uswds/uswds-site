---
title: Component lifecycle phases
permalink: /components/lifecycle/
layout: styleguide
category: Components
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
      The proposal has been submitted but needs some more information.
      We encourage you to submit new component ideas to our <a href="www.github.com">proposal repo</a>
      or add information to <a href="">proposals that need more information</a>.
    </p>
    <p>
      <b>Starts when:</b>A proposal is submitted.<br/>
      <b>Ends when:</b> A proposal is complete and ready for community feedback.
    </p>
    <h3 class="{{ phase_header-classes }} lifecycle-bg--proposal font-lang-sm">Voting open</h3>
    <p>
      The proposal is complete and open for community feedback. We encourage you to vote, comment, etc during this phase.
      <a href="">Check out the current "voting open" proposals</a>.
    <p>
      <b>Ends when:</b> The proposal has been open a minimum of 15 days and the core team is ready to evaluate.
    </p>
    </p>
    <h3 class="{{ phase_header-classes }} lifecycle-bg--proposal font-lang-sm">Proposal evaluation</h3>
    <p>
      After the final comment period, the core team will evaluate the proposal.
      The proposal will be accepted and developed, sent back for revision, or marked as “will not pursue.”
    <p>
      <b>Ends when:</b> The core team has reached a decision about if the component fits our criteria.
    </p>
    </p>
    <h3 class="{{ phase_header-classes }} lifecycle-bg--accepted font-lang-sm">Approved</h3>
    <p>
      The core team has determined that the proposed component is a good fit for the design system.
      Components in this phase are ready to be developed. Reach out if you want to build this component.
      <a href="">Check out the list of  "approved" proposals</a>.
    </p>
    <p><b>Ends when:</b> The component is assigned and scheduled for development.</p>
    <h3 class="{{ phase_header-classes }} lifecycle-bg--rejected font-lang-sm">Will not pursue</h3>
    <p>
      The core team has determined that the proposed component is not a good fit for the design system.
      These components will not be developed.
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
    <p class="font-lang-xs">Design, develop, test, and document new components</p>
  </div>
  <div class="measure-5">
    <!-- <h2 class="margin-top-0 lifecycle-border-bottom lifecycle-border--proposal">Phase 1: Proposal</h2> -->
    <h3 class="{{ phase_header-classes }} lifecycle-bg--development font-lang-sm">Scheduled</h3>
    <p>
      The component has been scheduled for development.
    </p>
    <p>
      <b>Ends when:</b> The component starts to be developed.
    </p>
    <h3 class="{{ phase_header-classes }} lifecycle-bg--development font-lang-sm">In development</h3>
    <p>
      Design, develop, test, document, and release the proposed concept
    </p>
    <p><b>Ends when:</b> The component is ready for release.</p>
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
    <p class="font-lang-xs">The component is ready for public use</p>
  </div>
  <div class="measure-5">
    <!-- <h2 class="margin-top-0 lifecycle-border-bottom lifecycle-border--proposal">Phase 1: Proposal</h2> -->
    <h3 class="{{ phase_header-classes }} lifecycle-bg--experimental font-lang-sm">Experimental</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non orci eu metus tristique imperdiet ac ut elit. Cras id justo at libero convallis volutpat ac eu quam. Sed interdum at erat ullamcorper vestibulum.
    </p>
    <h3 class="{{ phase_header-classes }} lifecycle-bg--released font-lang-sm">Stable</h3>
    <p>
      Keep the system operational and current by fixing bugs, adding enhancements, and performing regular usability and accessibility audits.
    <h3 class="{{ phase_header-classes }} lifecycle-bg--caution font-lang-sm">Use with caution</h3>
    <p>
      Identify when an existing stable component is in need of significant rework to meet standards.
      A component is either returned to stable status or moved to deprecation.
    </p>
    <p><b>Ends when:</b> A component is either returned to stable status or moved to deprecation.</p>
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
    <p class="font-lang-xs">The end of the component lifecycle where components are retired from the design system.</p>
  </div>
  <div class="measure-5">
    <!-- <h2 class="margin-top-0 lifecycle-border-bottom lifecycle-border--proposal">Phase 1: Proposal</h2> -->
    <h3 class="{{ phase_header-classes }} lifecycle-bg--deprecated font-lang-sm">Deprecated</h3>
    <p>
       Components no longer receive active support. Deprecation can happen for a number of reasons including security risks, failure to meet standards, or replacement by a new feature.
    </p>
    <p><b>Ends when:</b> The component is removed from the code base.</p>
    <h3 class="{{ phase_header-classes }} lifecycle-bg--deprecated  font-lang-sm">Retired</h3>
    <p>
      Remove components from the code base
    </p>
  </div>
</div>
