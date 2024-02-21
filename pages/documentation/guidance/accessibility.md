---
permalink: /documentation/accessibility/
redirect_from:
- /accessibility/
- /components/accessibility/
layout: styleguide
title: Accessibility
category: How to use USWDS
lead: Usability for every ability
order: 25
subnav:
- text: Common patterns USWDS addresses
  href: '#common-patterns-uswds-addresses'
- text: What the design system does
  href: '#what-the-design-system-does'
- text: What project teams should do
  href: '#what-project-teams-should-do'
- text: Accessibility resources
  href: '#accessibility-resources'
- text: Latest updates
  href: '#changelog'
changelog:
  key: 'docs-accessibility'
in_page_nav: false
---

When it comes to accessibility (sometimes shortened to "a11y" for the eleven characters between the letters "a" and "y" in the word "accessibility"), legal requirements are a critical, necessary starting point, but requirements are only the beginning. Accessibility is about real people who use our services — it's usability for any ability. Accessibility enables full participation, and everyone who works on government websites has a role to play in making federal resources accessible and inclusive. Incorporate accessibility from the start, design generously, and celebrate accessibility requirements as a set of design constraints that help us build products and services for those who need it most, and better products and services for all users.

Today, when we think practically about accessibility in digital services, we think about the requirements of Section 508 of the Rehabilitation Act of 1973, amended in 1998 to require Federal agencies to make their electronic and information technology accessible to people with disabilities. And we think about the requirements of WCAG, or the Web Content Accessibility Guidelines, an evolving set of requirements, now in version 2.1. These requirements are related. Section 508 incorporates by reference the WCAG 2.0 Level AA success criteria.

The goal of both these requirements is to provide content and services that are Perceivable, Operable, Understandable, and Robust:

- **Perceivable:** Users must be able to perceive the information presented.
- **Operable:** Users must be able to operate the interface.
- **Understandable:** Users must be able to understand both how the user interface operates and the meaning of information presented.
- **Robust:** Users must be able to access the content as technologies advance. As technologies like browsers and other assistive technology evolve, the content should remain accessible.

## Common patterns USWDS addresses
Accessibility guidelines help us address specific, ability-based patterns of user experience — baseline UX needs that USWDS builds into its design language, components, guidance, and layouts.

The following are a representative but not comprehensive list of the kind of user-based accessibility-focused guidance we follow, consistent with Section 508 and WCAG 2.1. Real-life users may cross categories. For instance, depending on their task, limited-vision users may use either screen readers or screen magnifiers. While not represented below, we also know that cognitive differences and neurodiversity are becoming a greater accessibility focus. Accessibility requirements may be relatively static, but accessibility itself is as dynamic and open-ended as any human-centered design process.

{:.border-top-1px.padding-top-2.measure-2}
### Blind users
- Support screen readers and other assistive technology like braille displays
- Outline semantic landmarks and regions
- Assure all content has clear context and labeling
- Provide text equivalents for visual resources
- Announce updates of page state changes
- Trap and move focus logically and predictably
- Avoid visual-exclusive meaningful functionality

{:.border-top-1px.padding-top-2.margin-top-2.measure-2}
### Limited-vision users
- Design for readability
- Design generous, forgiving interaction targets
- Allow layouts to respond to user scaling settings and screen magnifiers
- Prefer linear layouts
- Don't rely on hover for critical information
- Use legible visual contrast
- Avoid color-exclusive meaningful functionality

{:.border-top-1px.padding-top-2.margin-top-2.measure-2}
### Deaf users
- Provide accurate text equivalent for audio resources
- Avoid audio-exclusive meaningful functionality

{:.border-top-1px.padding-top-2.margin-top-2.measure-2}
### Limited-mobility users
- Support keyboard-only (linear) functionality and conventions
- Support touchscreen (direct input) functionality and conventions
- Design generous readability and interaction targets
- Prefer linear layouts
- Don't rely on hover for critical information

{:.border-top-1px.padding-top-2.margin-top-2.measure-2}
### Sensory-sensitive users
- Keep it simple
- Avoid flashing and repetitive animation
- Avoid very high contrast
- Avoid alarming colors and images
- Avoid audio and video that start automatically

## What the design system does
USWDS provides accessible components, the guidance to implement these components, and the tools to customize and extend the design system accessibly.

{:.border-top-1px.padding-top-2.measure-2}
### Deliver accessible components
- Test with screen readers (VoiceOver, NVDA)
- Test with keyboard-only
- Test with touch-only
- Test across browsers and operating systems
- Collect community feedback
- Scan with automated tools, like pa11y and aXe, on every code change. If it doesn't pass, we can’t merge the code
- Manually test components and functionality with a Trusted Tester
- **If it isn't accessible, it won't ship.**

{:.border-top-1px.padding-top-2.margin-top-2.measure-2}
### Provide guidance on how to implement our components accessibly
- Include an accessibility section with each component

{:.border-top-1px.padding-top-2.margin-top-2.measure-2}
### Include accessibility-focused tools to build new functionality
- Colors with magic number contrast
- Rem-based size tokens and an em-based media query mixin that respond to user scale settings
- Normalized typography tokens that provide reliable, readable results regardless of the typeface

{:.border-top-1px.padding-top-2.margin-top-2.measure-2}
### Feature context-aware settings that allow accessible customization with minimal custom code
- Adding more smart components that change their color based on background
- Smart settings for links to automatically choose accessible link and hover states

{:.border-top-1px.padding-top-2.margin-top-2.measure-2}
### Make accessibility one of our core design principles
- It's not only part of our mission to embrace accessibility in our own work, but to do what we can to encourage it.
- **We prioritize accessibility issues.** We will work hard to fix accessibility-related issues quickly, and to get them into the next available release. Accessibility is a mission-critical service for USWDS, and we want to know when there's an opportunity to fix something that's broken or improve something that could be better.

While we conduct extensive research during the design and development of components, it is impossible to predict every use case for accessibility and usability overall. That is why we encourage you to [contribute to the community]({{ site.baseurl }}/about/community) by providing feedback on how a component is working on your site. We also recommend performing your own user testing at the page level to gauge the usability of a component within context. We welcome any and all findings and feedback as we work to identify and prioritize improvements to our components and guidance.

## What project teams should do
What you get from the design system only gets your product part of the way to a fully accessible experience. Designing with USWDS is a great way to incorporate accessibility early, but what you build with USWDS and how you compose that work is just as important.

Just as you could build a completely impractical kitchen from perfectly acceptable parts, the most important part of your own product's accessibility is in its holistic experience. In fact, the most recent drafts of WCAG 3.0 — the probable successor to WCAG 2.1 — makes a distinction between **atomic** tests (the mostly automated tests that test each section of your site against specific criteria, similar to WCAG 2.1) and **holistic** tests (which are closer to standard usability testing and human-centered design). Regardless of the methodology in WCAG, it's important to recognize that building with accessible components does not guarantee an accessible service. You need to keep testing to stay accessible.

We recommend a mix of automated, semi-automated, and manual testing in addition to actual tests with real people who need assistive accommodations to interact with services effectively.

### Government usability testing resources

- [Usability resources on Digital.gov](https://digital.gov/topics/usability/) [digital.gov]
- [Getting started with usability testing](https://digital.gov/2015/03/19/getting-started-with-usability-testing/) [digital.gov]
- [Testing for plain-language usability](https://www.plainlanguage.gov/guidelines/test/usability-testing/) [plainlanguage.gov]
- [18F's collection of human-centered design tools](https://methods.18f.gov/) [18f.gov]
- [18F's usability testing guide](https://methods.18f.gov/validate/usability-testing/) [18f.gov]

## Accessibility resources

### Government accessibility resources

- [The Section 508 accessibility program](https://www.section508.gov/) [section508.gov]
- [Accessibility for Teams guide](https://accessibility.digital.gov/) [accessibility.digital.gov]
- [Find your Section 508 Coordinator](https://www.section508.gov/tools/coordinator-listing) [section508.gov]
- [Section 508 ICT Testing Baseline](https://section508coordinators.github.io/ICTTestingBaseline/) [section508coordinators.github.com ]
- [Learn about writing in plain language](https://www.plainlanguage.gov/) [plainlanguage.gov]
- [Plain language resources](https://www.plainlanguage.gov/resources/) [plainlanguage.gov]
- [18F's accessibility guide](https://accessibility.18f.gov/) [accessibility.18f.gov]
- [Accessibility Requirements Tool (ART) for contracting](https://www.section508.gov/buy/accessibility-requirements-tool) [section508.gov]
- [Understanding universal design](https://www.section508.gov/blog/Universal-Design-What-is-it) [section508.gov]

### Non-government accessibility resources

- [Web Accessibility Perspectives Videos](https://www.w3.org/WAI/perspective-videos/) [w3.org]
- [Inclusive design principles](https://inclusivedesignprinciples.org/) [inclusivedesignprinciples.org]
- [Accessibility fundamentals with Rob Dodson](https://www.youtube.com/watch?v=z8xUCzToff8) [youtube.com]
- [Microsoft's inclusive design manual](https://www.microsoft.com/design/inclusive/) [microsoft.com]
- [Inclusive components by Heydon Pickering](https://inclusive-components.design/) [inclusive-components.design]
- [Humane by design](https://humanebydesign.com/) [humanebydesign.com]

### Practical actions

- **Humanize accessibility.** Seek out examples of the real life impact of accessible products and services. Try to make accessibility less abstract and more personal.
- **Use agency resources.** Reach out to [your agency's accessibility team](https://www.section508.gov/tools/coordinator-listing) and build a relationship with them.
- **Learn about assistive technology.** Get familiar with the basic ways people use assistive technology and [how people with disabilities use the web](https://www.w3.org/WAI/people-use-web/).
- **Follow existing standards.** Conform to the [Revised 508 Standards](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh) and [WCAG 2.0](https://www.w3.org/TR/WCAG20/).
- **Work from existing resources.** Consult [Section508.gov](https://www.section508.gov/), [Accessibility for Teams](https://accessibility.digital.gov/), and the [18F Accessibility Guide](https://accessibility.18f.gov/).
- **Design generously.** Adopt an [inclusive design](http://inclusivedesignprinciples.org/) mentality.
- **Develop accessible code.** Ensure front-end code is written accessibly and conducts manual and automated testing.
- **Write accessible content.** Ensure content is written in [plain language](https://www.plainlanguage.gov/) and [headings](https://accessibility.18f.gov/headings/), [images](https://accessibility.18f.gov/images/), and [links](https://accessibility.18f.gov/links/) are accurately labeled.
- **Build accessible designs.** Ensure that designs are accessible, pages are laid out in a logical order, and content meets color contrast requirements.
- **Test broadly.** Test with a broad range of users and abilities throughout the design and development process, including manual accessibility testing against the [Trusted Tester and ICT Testing Baseline](https://www.section508.gov/test/trusted-tester).
- **Be responsive.** Remediate accessibility issues when you discover them.
- **Contract for accessibility.** Use the [Accessibility Requirements Tool](https://www.section508.gov/buy/accessibility-requirements-tool) (ART) to incorporate accessibility requirements into your contracts.

### Key accessibility considerations

- Can users navigate your site using only the keyboard?
- Can users use a screen reader to access the page content?
- Can users quickly understand the main points of your content?
- Can users easily interpret content associated with graphic elements?
- Can users easily understand and complete key tasks?
- Are you testing your service with a broad range of users?
- Do you know your agency accessibility team?
- Is your site organized such that everyone can navigate it easily?
- Are you using accessibility testing tools?
- Did your accessibility testing tools provide accurate results?
- Are you providing content in [languages other than English](https://digital.gov/resources/improving-access-to-services-for-people-with-limited-english-proficiency-e-o-13166/), as appropriate for the audience?
