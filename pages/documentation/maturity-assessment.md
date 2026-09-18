---
permalink: /maturity-model/assessment/
layout: styleguide
title: Maturity assessment worksheet
category: How to use USWDS
lead: Review how your team applies design principles, follows guidance, and uses USWDS code. Turn what you learn into a practical improvement plan.
---

Use this worksheet with the [USWDS maturity model]({{ site.baseurl }}/maturity-model/). It adapts the activities in the draft 2020 worksheet into a format you can read on the web and copy into your team's own tools. Use current component guidance for implementation checks instead of the component checklists in the historical PDF.

## Prepare your assessment

Bring together people who understand your service's users, content, design, development, and accessibility. Include people who can explain decisions and people who can act on the findings. If you do not know an answer, record the gap and identify someone who can help.

Copy these fields into a document or issue tracker:

- **Service and scope:** Which pages, tasks, and components are you reviewing?
- **Assessment date and participants:** When did you review them, and who contributed?
- **USWDS version:** Which version is installed, if any?
- **Evidence:** Where can your team find research, design decisions, implementation details, and test results?
- **Previous assessment:** What changed since the last review?

An assessment is a starting point for improvement. You do not need to adopt every USWDS component or complete every improvement at once. Keep sensitive research and personal information in your team's approved systems.

## Assess design principles

### 1. Build a shared understanding

Read the [five design principles]({{ site.baseurl }}/design-principles/). Ask each participant to explain each principle in their own words. Compare the explanations and discuss where they differ.

For each principle, consider three aspects of your work:

- **Skills and tools:** What can your team do? What expertise or resources are missing?
- **Operations and workflow:** How does the principle affect decisions and routine work?
- **Product:** How does the service demonstrate the principle in the experience it provides?

### 2. Review evidence for each principle

Use the questions below to begin the discussion. Consult each principle's current key considerations and practical actions for more detail.

#### Start with real user needs

- Who uses your service, and what are they trying to accomplish?
- What research supports your team's understanding of their needs?
- Which users and needs are missing from that research?
- What changed in the service because of what you learned?

#### Earn trust

- Can users understand who provides the service and what to expect?
- How does your team keep content accurate and explain how information will be used?
- What happens when the service fails or a user makes a mistake?
- What evidence shows whether users trust the service?

#### Embrace accessibility

- How do people with disabilities participate in research and testing?
- How does your team identify and address barriers across complete tasks?
- Which manual and automated accessibility checks are part of your workflow?
- Who owns unresolved accessibility findings, and what happens next?

#### Promote continuity

- Where do shared patterns, components, and content help users move through the service?
- Where does your service differ from related government services, and why?
- How does your team evaluate a shared solution before creating a custom one?
- What have you contributed back to other teams or USWDS?

#### Listen

- How do you collect feedback and observe people using the service?
- How do you combine research, support requests, and analytics to choose improvements?
- Who reviews that evidence, and how often?
- How do you check whether a change improved the user's experience?

### 3. Describe your current practice

Review recent decisions and product changes. For each principle and each of the three aspects above, record examples and gaps. The descriptions below, adapted from the historical worksheet, can help your team discuss progress. They are not scores to compare agencies or certify a service.

- **Beginner:** The team rarely demonstrates the principle or does not yet know how it applies.
- **Learner:** The team is learning about the principle and demonstrates it occasionally.
- **Builder:** The team often demonstrates the principle and can identify improvements.
- **Integrator:** The principle is routinely part of decisions and outcomes.
- **Leader:** The team demonstrates the principle, experiments, and helps others learn.

Record the description that best fits the evidence, the reason for choosing it, and an action that would improve the practice. Revisit the assessment after that action, using the same scope where possible.

## Assess guidance and code

### 1. Inventory your components and tasks

List the components your service uses and the tasks they support. Find matching [USWDS components]({{ site.baseurl }}/components/) and [patterns]({{ site.baseurl }}/patterns/). Include custom implementations and components you use without USWDS code.

For each item, record:

- The component or pattern name and where it appears in your service.
- The current guidance URL and the date you reviewed it.
- Whether your implementation uses USWDS code, custom code, or a combination.
- Whether USWDS guidance applies. Explain any exceptions or conflicts with agency guidance.

### 2. Review guidance in context

Read the current usability, accessibility, and implementation guidance for each item. Where an accessibility test checklist is available, use it to check your implementation.

- Which guidance does the implementation follow? What evidence supports that conclusion?
- Which guidance does it not follow? What is the effect on users?
- What have you checked with keyboard navigation, screen readers, zoom, and other relevant ways of interacting?
- What did you learn from testing complete tasks with users?
- What remains untested or uncertain?

Record the environment and outcome of each check. A passing result for a USWDS example does not automatically apply to your content or customizations.

### 3. Review code where applicable

With someone who can inspect your project's source and built pages, check:

- Which USWDS version is installed, and how it is updated.
- Whether required styles, scripts, fonts, images, and web component files load correctly.
- Whether markup and behavior match the documentation for that version.
- Where USWDS color, spacing, and typography tokens are used.
- Which custom styles and behaviors override USWDS defaults, and why.
- Whether those customizations preserve the behavior needed by users, including users of assistive technology.

If your service uses guidance without USWDS code, record that choice and its reasons. Do not mark code checks as failures when they do not apply.

## Make an improvement plan

Create one record for each improvement your team chooses to pursue:

- **Finding:** What did you observe, and who is affected?
- **Evidence:** What research, guidance, or test result supports it?
- **Action:** What specific change will you make?
- **Owner:** Who will coordinate the work?
- **Next review:** When will the team check progress?
- **Outcome:** How will you know whether the change helped?
- **Status:** What is complete, in progress, blocked, or still unknown?

Prioritize barriers that prevent people from completing tasks. Choose a manageable set of next steps, then reassess after making the changes. Keep earlier assessments so your team can see what improved and what still needs attention.

## Share feedback

Use [USWDS GitHub Discussions](https://github.com/uswds/uswds/discussions) to share questions, research, and improvements to this worksheet. Report specific documentation problems through the [issue templates](https://github.com/uswds/uswds/issues/new/choose). You can also email [{{ site.uswds_email }}](mailto:{{ site.uswds_email }}).
