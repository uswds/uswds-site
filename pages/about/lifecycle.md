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



{% assign phase_classes = "lifecycle-phase grid-col maxh-card display-flex flex-align-center flex-justify-center margin-right-2 font-lang-xs padding-y-1 grid-col-2" %}


{% assign phase_header-classes = "display-inline-block padding-y-1 padding-x-2 margin-bottom-0 " %}

<!-- <div class="grid-row measure-5">
  <div class="{{ phase_classes }} lifecycle-phase-1">
    <b>Proposal</b>
  </div>
  <div class="{{ phase_classes }} lifecycle-phase-2">
    <b>Development</b>
  </div>
  <div class="{{ phase_classes }} lifecycle-phase-3">
    <b>Released</b>
  </div>
  <div class="{{ phase_classes }} lifecycle-phase-4">
    <b>Deprecated</b>
  </div>
</div> -->


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum felis in nunc convallis, hendrerit tempus ipsum tempus. Maecenas convallis tellus non ornare tincidunt. Ut et consequat arcu.

<div class="display-flex">
  <div class="lifecycle-phase grid-col display-flex flex-justify-center margin-right-4 font-lang-xs padding-y-1 grid-col-2 ">
    <b class="width-full height-15 display-flex flex-align-center flex-justify-center lifecycle-phase-1">Proposal</b>
  </div>
  <div class="grid-col-10 measure-5">
    <h2 class="{{ phase_header-classes }} bg-yellow-20v">Phase 1: Proposal</h2>
    <p>Gather ideas in a central, public location for discussion and evaluation</p>
    <h3 class="{{ phase_header-classes }} bg-yellow-20v font-lang-sm">Proposal creation</h3>
    <p>
      Submit new component ideas as a proposal. Proposals will be submitted to a GitHub repo and can be submitted with a minimum amount of information. The contributor, core team, and community will work together to add content and refine the proposal until it contains all the information needed to make a decision about whether to develop the concept.
    </p>
    <h3  class="{{ phase_header-classes }} bg-yellow-20v font-lang-sm">Voting open</h3>
    <p>
      Once all necessary content has been added, the core team will open the proposal for voting, feedback and discussion. The proposal will remain in this phase for a set minimum amount of time before moving on.
    </p>
    <h3  class="{{ phase_header-classes }} bg-yellow-20v font-lang-sm">Proposal evaluation</h3>
    <p>
      After the final comment period, the core team will evaluate the proposal. should be accepted and developed, sent back for revision, or marked as “will not pursue.”
    </p>
    <ul>
      <li>Approved</li>
      <li>Return for revision</li>
      <li>Will not pursue</li>
    </ul>
  </div>
</div>

<div class="display-flex margin-y-0">
  <div class="lifecycle-phase grid-col display-flex flex-justify-center margin-right-4 font-lang-xs grid-col-2 ">
    <b class="width-full height-15 display-flex flex-align-center flex-justify-center lifecycle-phase-2">Development</b>
  </div>
  <div class="grid-col-10 measure-5">
    <h2 class="{{ phase_header-classes }} bg-mint-cool-20">Phase 2: Development</h2>
    <p>Gather ideas in a central, public location for discussion and evaluation</p>
    <h3 class="{{ phase_header-classes }} bg-mint-cool-20 font-lang-sm">Scheduled</h3>
    <p>
      Submit new component ideas as a proposal. Proposals will be submitted to a GitHub repo and can be submitted with a minimum amount of information. The contributor, core team, and community will work together to add content and refine the proposal until it contains all the information needed to make a decision about whether to develop the concept.
    </p>
    <h3  class="{{ phase_header-classes }} bg-mint-cool-20 font-lang-sm">Voting open</h3>
    <p>
      Once all necessary content has been added, the core team will open the proposal for voting, feedback and discussion. The proposal will remain in this phase for a set minimum amount of time before moving on.
    </p>
    <h3  class="{{ phase_header-classes }} bg-mint-cool-20 font-lang-sm">Proposal evaluation</h3>
    <p>
      After the final comment period, the core team will evaluate the proposal. should be accepted and developed, sent back for revision, or marked as “will not pursue.”
    </p>
    <ul>
      <li>Approved</li>
      <li>Return for revision</li>
      <li>Will not pursue</li>
    </ul>
  </div>
</div>


<!-- ## Lifecycle phases

### Proposal

Gather ideas in a central, public location for discussion and evaluation

#### Proposal creation

Submit new component ideas as a proposal. Proposals will be submitted to a GitHub repo and can be submitted with a minimum amount of information. The contributor, core team, and community will work together to add content and refine the proposal until it contains all the information needed to make a decision about whether to develop the concept. The core team will provide a proposal template to make it easier to complete this process.

#### Voting open

Once all necessary content has been added, the core team will open the proposal for voting, feedback and discussion. The proposal will remain in this phase for a set minimum amount of time before moving on.

#### Proposal evaluation

After the final comment period, the core team will evaluate the proposal. should be accepted and developed, sent back for revision, or marked as “will not pursue.”

### Design, development, and testing

Design, develop, test, document, and release approved items

### 2.1. In development: Design, develop, test, document, and release the proposed concept
2.1.1 Planning and analysis: Define requirements, testing plan, and implementation plan
2.1.2 Design: Design and prototype the component based on defined requirements; Perform user, accessibility, and developer testing on the designs; iterate based on findings until the design and implementation plan meet standards.
2.1.3 Develop: Build out the design with production-quality code
2.1.4 Documentation creation: Update all related documentation
2.1.5 Alpha: Test, iterate, and deploy for internal testing. Perform development, QA, UX, and accessibility testing, and iterate as needed. The core team will deploy as appropriate.
2.2. Experimental release: Give the public early access to the component prior to stable release; includes components that include core functionality and production-quality code but might need testing, documentation, or additional features
2.2.1 Beta: Test, iterate, and deploy for public testing. Perform development, QA, UX, and accessibility testing, and iterate as needed. The core team will deploy as appropriate.
2.2.2 Release candidate: Test, iterate, and deploy for final public comment before stable release. Perform development, QA, UX, and accessibility testing and iterate as needed. The core team will deploy as appropriate.

3. Maintenance
Maintain and audit stable components
3.1. Stable release: Release components to the general public. These components must meet all standards, have full functionality, and have complete documentation published publicly. In this phase, the core team keeps the system operational and current by fixing bugs, adding enhancements, and performing regular audits.
3.2. Use with caution: Identify when a component has significant issues that prevent the component from meeting current standards and requirements.

4. Deprecation
Phase out items that do not meet standards or are no longer needed
4.1 Deprecated: Remove components from active support
4.2 Retired: Remove components from the code base -->


