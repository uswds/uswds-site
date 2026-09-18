---
permalink: /maturity-model/
layout: styleguide
title: USWDS maturity model
category: How to use USWDS
lead: Use the USWDS maturity model to adopt the design system incrementally and design and build better digital experiences.
subnav:
- text: "1: Integrate design principles"
  href: '#level-1-integrate-design-principles'
- text: "2: Follow UX guidance"
  href: '#level-2-follow-user-experience-guidance'
- text: "3: Use USWDS code"
  href: '#level-3-use-uswds-code'
- text: Maturity assessment resources
  href: '#maturity-assessment-resources'
- text: Latest updates
  href: '#changelog'
changelog:
  key: docs-maturity-model
---

<div class="margin-top-6 border-top-05 border-primary padding-top-2">
  <div class="grid-row">
    <div class="tablet:grid-col-7">
      <div class="padding-top-2">
      <h2 class="font-lang-lg margin-top-0 line-height-sans-2">You don’t need to adopt the design system all at once.</h2>
      <p>Adopt the design system incrementally through the levels of the USWDS maturity model. Your project can progress both through higher levels of maturity and with more comprehensive maturity at each level. Most importantly, using the design system is about integrating the <a href="{{ site.baseurl }}/design-principles">USWDS Design Principles</a>, common goals that align teams across government and serve as an evaluative lens for design and implementation decisions.</p>
      <p>As you adopt and adapt the design system, share what you learn with the USWDS community:</p>
      <ul>
        <li><a href="https://github.com/uswds/uswds/issues/new/choose">Report a bug or documentation problem</a>, including the version you use and steps to reproduce the problem.</li>
        <li><a href="https://github.com/uswds/uswds/discussions">Share research, guidance, and implementation questions</a> in GitHub Discussions.</li>
        <li><a href="https://github.com/uswds/uswds/discussions/5764">Propose a new component or pattern</a> and work with the community to describe the need, examples, and accessibility considerations.</li>
      </ul>
      </div>
    </div>
    <figure class="site-figure tablet:grid-col-5 padding-2 tablet:padding-left-4">
      <img src="{{ site.baseurl }}/img/maturity-model.svg" role="img" alt="A diagram showing the concentric circles of the USWDS maturity model, progressing from Principles on the outside, through Guidance, and finally to Code in the innermost circle.">
      <figcaption class="site-figcaption">The USWDS maturity model shows how teams can grow their USWDS maturity by starting with Principles (the outermost circle) and progressing through Guidance (the middle circle) and Code (the innermost circle).</figcaption>
    </figure>
  </div>
</div>

{:.border-top-05.border-primary.padding-top-2.margin-top-2.margin-bottom-3}

## Level 1: **Integrate design principles**{:.text-light}

**USWDS Design Principles support and reflect the important guidance codified in the [21st Century Integrated Digital Experience Act](https://digital.gov/resources/21st-century-integrated-digital-experience-act/).** These design principles are intended to help teams across government align on important common goals and better use the design system — to be an evaluative lens for design and implementation decisions.

### Start with real user needs

{:.border-top-2px.border-base-lighter.padding-top-1}
**Real user needs should inform product decisions.** Whether our audience includes members of the public or government employees, decision-makers must include real people in our design process from the beginning. Then, we need to test the assumptions we make and the products and services we build with real people, to keep us focused on what is most useful and important.

<a class="usa-button font-lang-sm" href="{{ site.baseurl }}/design-principles/#start-with-real-user-needs">Learn about starting with user needs</a>

### Earn trust

{:.border-top-2px.border-base-lighter.padding-top-1}
**Trust has to be earned every time.** Federal websites and digital services can't assume it. Trust is about understanding and meeting or exceeding expectations, a process that can be established quickly and maintained over continued interactions, but is easily damaged. Be reliable, consistent, and honest. Reduce the impact of failure with solid design and engineering. Be a good steward of your audience's data, resources, and time.

<a class="usa-button font-lang-sm" href="{{ site.baseurl }}/design-principles/#earn-trust">Learn about earning trust</a>

### Embrace accessibility

{:.border-top-2px.border-base-lighter.padding-top-1}
**Accessibility affects everybody, build it into every decision.** Legal requirements are a critical, necessary starting point, but this is only the beginning. Accessibility is about real people who use our services — it's usability for people who interact with products differently. Everyone who works on government websites has a role to play in making federal resources accessible and inclusive. Design generously and celebrate accessibility requirements as a set of design constraints that help us create a better product for all users.

<a class="usa-button font-lang-sm" href="{{ site.baseurl }}/design-principles/#embrace-accessibility">Learn about embracing accessibility</a>

### Promote continuity

{:.border-top-2px.border-base-lighter.padding-top-1}
**Minimize disruption and provide a consistent experience: throughout services, over time, and across agencies, platforms, and devices.** Consistency is not necessarily conformity. Agencies, sites, and services may have different audiences, missions, and goals — and the way we implement our solutions may differ — but we promote continuity by starting from shared solutions and values. These design principles are one set of shared values. The design language of the U.S. Web Design System is another. Strive to build user-centered solutions that address the whole experience, not just a user's specific task, but the context of their journey.

<a class="usa-button font-lang-sm" href="{{ site.baseurl }}/design-principles/#promote-continuity">Learn about promoting continuity</a>

### Listen

{:.border-top-2px.border-base-lighter.padding-top-1}
**Evaluate and improve your product by listening to your audience and learning from what you hear.** Continuous feedback drives continuous improvement. Measure customer experience — how well what we've built is working for our audience — at every stage of a project, and as projects grow and mature. Listen to what people say and observe how they interact with our products or services, whether through direct observation or through analytics data. If we're not listening, we're not learning.

<a class="usa-button font-lang-sm" href="{{ site.baseurl }}/design-principles/#listen">Learn about listening</a>

{:.border-top-05.border-primary.padding-top-2.margin-bottom-3}

## Level 2: **Follow user experience guidance**{:.text-light}

**USWDS UX guidance helps assure that components do what users expect them to do, based on UX best practices and research.** Every website is built of common functional units: components like [buttons]({{ site.baseurl }}/components/button), [forms]({{ site.baseurl }}/components/form), and [navigation]({{ site.baseurl }}/components/side-navigation). USWDS provides user experience (UX) guidance for components and patterns. You should follow the UX guidance even if you don’t use USWDS code.

<span id="what-to-do"></span>

### How to apply UX guidance

#### 1: Inventory your site components.

- Make a list of the components your current site uses.
- Check to see if an equivalent USWDS component exists.

#### 2: Read the component UX guidance.

- Find the relevant component guidance on the USWDS website. Each component has its own UX guidance. (See the "Guidance" section of the [button component]({{ site.baseurl }}/components/button/), for example.)
- Read and understand the guidance for each component used on your site.

#### 3: Assure site components follow guidance.

- Update any site components that fall outside [USWDS guidance]({{ site.baseurl }}/components/).

<span id="how-to-check"></span>

### How to assess UX guidance

- Compare each component with its current usability and accessibility guidance, including when to use a different approach.
- Test complete tasks with people who use your service, including people with disabilities. Record the problems they encounter and the improvements you make.
- Use the component accessibility test checklists to guide manual checks in your implementation. Automated checks can supplement these checks.
- Review [line length guidance]({{ site.baseurl }}/components/typography/#measure-line-length) and your agency's design and style guidelines.

{:.border-top-05.border-primary.padding-top-2.margin-bottom-3}

## Level 3: **Use USWDS code**{:.text-light}

**Use USWDS code as a foundation for accessible, mobile-friendly experiences across government sites.** Test the code in the context of your content, customizations, and user tasks. USWDS includes design tokens and components. USWDS design tokens are common and consistent elements of color, spacing, and typography that government websites share. USWDS components are pre-built elements that make up government websites. For example, the USWDS banner component is an easy way to show your site is an official government website and explain the benefits of secure connections.

Government websites include components that aren’t included in USWDS yet. Use USWDS design tokens to build new components, and contribute any new components you develop and research you collect back to USWDS.

<span id="what-to-do-1"></span>

### How to integrate USWDS code

#### 1: Add USWDS code and adjust settings.

- Follow [Phase 1: Install USWDS]({{ site.baseurl }}/documentation/getting-started/developers/phase-one-install/) to add the package to your project.
- Follow [Phase 2: Compile USWDS]({{ site.baseurl }}/documentation/getting-started/developers/phase-two-compile/) to copy assets and compile your project's Sass.
- Include the generated CSS in your page templates. Include the JavaScript required by the components you use, following their implementation guidance. A precompiled JavaScript bundle is available; compiling JavaScript yourself is not required for every project.
- Follow [Phase 3: Customize USWDS]({{ site.baseurl }}/documentation/getting-started/developers/phase-three-customize/) to adjust settings and styles.

#### 2: Use USWDS design tokens in your stylesheets.

- Use [design tokens]({{ site.baseurl }}/design-tokens/) for consistent colors, spacing, and typography.
- Use the Sass functions and mixins documented with each token, or [utilities]({{ site.baseurl }}/utilities/) where appropriate. For example, see [font-family tokens]({{ site.baseurl }}/design-tokens/typesetting/font-family/#using-family-tokens).
- Review existing styles and replace values with suitable USWDS tokens incrementally. Record custom values your project still needs and why.

#### 3: Replace existing components with USWDS components.

- Swap existing components with `usa-` classed [components]({{ site.baseurl }}/components/) in project templates.
- Use component overrides and [USWDS settings]({{ site.baseurl }}/documentation/settings/) to adapt the USWDS default components to your project's desired style and tone.

#### 4: Contribute back to the system.

- Contribute new research, guidance, components, and issues back into the system.

<span id="how-to-check-1"></span>

### How to assess your implementation

- Record the USWDS version your project uses and compare your markup, assets, and settings with that version's documentation.
- Check that required CSS, JavaScript, fonts, images, and web component files load from the paths your project uses.
- Check source styles for the design tokens you intend to use. Review customizations and document differences from USWDS defaults.
- Test each component's behavior with keyboard navigation, screen readers, and zoom using its accessibility test checklist. Test how components work together in complete tasks.

The presence of `usa-` classes or a USWDS stylesheet can help identify an implementation. It does not establish that the implementation is usable or accessible. Maturity describes your team's adoption and improvement process, not a certification of your website. Consult [Website standards]({{ site.baseurl }}/website-standards/) for resources on federal website requirements.

{:.border-top-05.border-primary.padding-top-2.margin-bottom-3}

## Maturity assessment resources

The draft 2020 Maturity Model Assessment Worksheet is no longer recommended for current assessments. Its copied component checklists do not reflect current guidance.

Use the [design principles]({{ site.baseurl }}/design-principles/) and the current usability, accessibility, and implementation guidance for each [component]({{ site.baseurl }}/components/). For installation and customization instructions, use [Getting started for developers]({{ site.baseurl }}/documentation/getting-started-for-developers/).

Share questions and findings in [USWDS GitHub Discussions](https://github.com/uswds/uswds/discussions).
