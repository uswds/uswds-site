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
- text: We follow the four principles of accessibility
  href: '#we-follow-the-four-principles-of-accessibility'
- text: We address user needs
  href: '#we-address-user-needs'
- text: We include accessibility in all phases of our process
  href: '#we-include-accessibility-in-all-phases-of-our-process'
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
The U.S. Web Design System is built on a foundation of accessibility. That foundation was created with and for our colleagues who develop digital services for all Americans.

While we strive for excellence, we realize nothing can or will ever be 100% accessible. Therefore, we will continuously be adapting and revisiting this accessibility strategy and seeking community input to improve our processes.

## We follow the four principles of accessibility

- **Perceivable**: Users must be able to perceive the information presented.
- **Operable**: Users must be able to operate the interface.
- **Understandable**: Users must be able to understand both how the user interface operates and the meaning of information presented.
- **Robust**: Users must be able to access the content as technologies advance. As technologies like browsers and other assistive technology evolve, the content should remain accessible.

These four principles are the foundation of [Section 508 of the Rehabilitation Act of 1973](https://www.access-board.gov/ict/) requirements, amended in 1998 to require federal agencies to make their electronic and information technology accessible to people with disabilities. In 2018, Section 508 incorporated the Web Content Accessibility Guidelines (WCAG) 2.0 Level AA success criteria.

Even though 2.0 Level AA is the baseline of conformance for legal compliance, USWDS seeks to achieve the higher standard of WCAG 2.1 AA (which also meets legal requirements). In October, 2023 [WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) was released. WCAG 2.2 is not required for legal compliance right now, but our team strives to conform to as many of the latest success criteria as possible.

## We test our work. You need to test yours.

The work we do acts as a foundation for you to implement on your own projects. However, to ensure full WCAG compliance, you need to conduct your own research and testing.

## We address user needs

Accessibility guidelines help us address specific, ability-based patterns of user experience (UX). USWDS builds these baseline UX needs into its design language, components, guidance, and layouts. We’ve listed some examples below.

Real-life users may cross categories. For example, depending on their task, limited-vision users may use either screen readers or screen magnifiers. People with cognitive differences and neurodiverse individuals benefit from many of the guidelines listed below.

{:.border-top-1px.padding-top-2.measure-2}
### Visually impaired and blind users

- Support screen readers and other assistive technology like braille displays
- Outline semantic landmarks and regions
- Ensure all content has clear context and labeling
- Provide text equivalents for visual resources
- Announce updates of page state changes
- Ensure keyboard focus follows a logical and predictable pattern
- Never use visual elements alone to convey meaning
- Include descriptions of videos

{:.border-top-1px.padding-top-2.measure-2}
### Limited-vision users

- Design for readability
- Design large, easy-to-select interaction targets
- Allow layouts to respond to user zoom settings and screen magnifiers
- Design with linear layouts
- Don’t rely on hover to communicate critical information
- Use legible visual contrast
- Don’t use color alone to convey meaning
- Allow for customization of fonts and contrast styles

{:.border-top-1px.padding-top-2.measure-2}
### Deaf users

- Provide an accurate text equivalent for audio resources
- Don’t convey meaning through audio alone

{:.border-top-1px.padding-top-2.measure-2}
### Limited-mobility users

- Support keyboard-only (linear) functionality
- Support touchscreen (direct input) functionality
- Design large, easy-to-select readability and interaction targets
- Prefer linear layouts
- Don’t rely on hover for critical information

{:.border-top-1px.padding-top-2.measure-2}
### Sensory-sensitive users

- Keep layouts simple
- Avoid flashing and repetitive animation
- Avoid very high color contrast
- Avoid alarming colors and images
- Avoid audio and video that start automatically
- Allow a user to pause or stop content on their own

## We include accessibility in all phases of our process

USWDS provides accessible components, the guidance to implement these components, and the tools to customize and extend the design system’s accessibility.

As we grow our user research practice to include testing with more people with disabilities we will include user-specific recommendations.

Accessibility requirements may be relatively static, but accessibility itself is as dynamic and open-ended as any human-centered design process.

{:.border-top-1px.padding-top-2.measure-2}
### We deliver accessible components

- Test with screen readers (VoiceOver, JAWS)
- Test with keyboard-only navigation
- Test with browser zoom magnification
- Test with touch-only interaction
- Test across browsers and operating systems
- Collect community feedback
- Scan with automated tools, like pa11y and aXe, on every code change. If it doesn’t pass, we don’t merge the code
- Review regular reports from site-scanning tools such as SiteImprove or AMP to quickly remediate accessibility issues
- Manually test components and functionality with experienced accessibility specialists
- Provide conformance status on each component (in progress)
- Conduct ongoing accessibility audits

{:.border-top-1px.padding-top-2.measure-2}
### We provide guidance on how to implement our components accessibly

- Include accessibility guidance on our website’s [component pages](https://designsystem.digital.gov/components/overview/)
- Provide custom accessibility checks and plain language guides to test in your own environment (in progress)

{:.border-top-1px.padding-top-2.measure-2}
### We include accessibility-focused tools to build new functionality

- Colors with [magic number contrast](https://designsystem.digital.gov/design-tokens/color/overview/#magic-number)
- Rem-based size [tokens](https://designsystem.digital.gov/design-tokens/) and an em-based media query mixin that respond to user scale settings
- Normalized [typography tokens](https://designsystem.digital.gov/design-tokens/typesetting/overview/) that provide reliable, readable results regardless of the typeface

{:.border-top-1px.padding-top-2.measure-2}
### We feature context-aware settings that allow accessible customization with minimal custom code

- Adding more smart components that change their color based on background
- Smart settings for links to automatically choose accessible link and hover states

{:.border-top-1px.padding-top-2.measure-2}
### We make accessibility one of our core design principles

- We strive not only to embrace accessibility but also to inspire all federal web teams to embrace it, too.
- **We prioritize accessibility issues.** We work hard to fix accessibility-related issues quickly, and to get them into the next available release. Our developers work with our accessibility specialists to review fixes with automated and manual testing.

While we conduct research during the design and development of components, it is impossible to predict every use case for accessibility and usability. That is why we encourage you to contribute to the community by providing feedback on how a component is working on your site. We also expect you to perform your own user testing at the page level to gauge the usability of a component within context. We welcome any and all findings and feedback.

## What project teams should do

Building with accessible USWDS components does not guarantee an accessible service. You need to keep testing to stay accessible.

We recommend a mix of automated, semi-automated, and manual testing in addition to actual tests with real people who need assistive accommodations to interact with services effectively.

{:.border-top-1px.padding-top-2.measure-2}
### Government usability testing resources
- [Usability testing on Digital.gov](https://digital.gov/topics/usability-testing/) [digital.gov]
- [Getting started with usability testing](https://digital.gov/2015/03/19/getting-started-with-usability-testing/) [digital.gov]
- [Testing for plain-language usability](https://www.plainlanguage.gov/guidelines/test/usability-testing/) [plainlanguage.gov]
- [18F’s collection of human-centered design tools](https://methods.18f.gov/) [18f.gov]

## Accessibility resources

{:.border-top-1px.padding-top-2.measure-2}
### Government accessibility resources

- [The Section 508 accessibility program](https://www.section508.gov/) [section508.gov]
- [Accessibility for Teams guide](https://accessibility.digital.gov/) [accessibility.digital.gov]
- [Find your Section 508 Coordinator](https://www.section508.gov/tools/coordinator-listing) [section508.gov]
- [Section 508 ICT Testing Baseline](https://section508coordinators.github.io/ICTTestingBaseline/) [section508coordinators.github.com ]
- [Learn about writing in plain language](https://www.plainlanguage.gov/) [plainlanguage.gov]
- [Plain language resources](https://www.plainlanguage.gov/resources/) [plainlanguage.gov]
- [18F’s accessibility guide](https://accessibility.18f.gov/) [accessibility.18f.gov]
- [Accessibility Requirements Tool (ART) for contracting](https://www.section508.gov/buy/accessibility-requirements-tool) [section508.gov]
- [Understanding universal design](https://www.section508.gov/blog/Universal-Design-What-is-it) [section508.gov]

{:.border-top-1px.padding-top-2.measure-2}
### Non-government accessibility resources

- [Web Accessibility Perspectives Videos](https://www.w3.org/WAI/perspective-videos/) [w3.org]
- [Inclusive design principles](https://inclusivedesignprinciples.org/) [inclusivedesignprinciples.org]
- [Accessibility fundamentals with Rob Dodson](https://www.youtube.com/watch?v=z8xUCzToff8) [youtube.com]
- [Microsoft’s inclusive design manual](https://www.microsoft.com/design/inclusive/) [microsoft.com]
- [Inclusive components by Heydon Pickering](https://inclusive-components.design/) [inclusive-components.design]
- [Humane by design](https://humanebydesign.com/) [humanebydesign.com]

{:.border-top-1px.padding-top-2.measure-2}
### Practical actions

- **Humanize accessibility.** Seek out examples of the real-life impact of accessible products and services. Try to make accessibility less abstract and more personal.
- **Use agency resources.** Reach out to [your agency’s accessibility team](https://www.section508.gov/tools/coordinator-listing) and build a relationship with them.
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

{:.border-top-1px.padding-top-2.measure-2}
### Key accessibility considerations

- Can users easily interpret content associated with graphic elements?
- Can users easily understand and complete key tasks?
- Are you testing your service with a broad range of users?
- Do you know your agency accessibility team?
- Is your site organized such that everyone can navigate it easily?
- Are you using accessibility testing tools?
- Did your accessibility testing tools provide accurate results?
- Are you providing content in [languages other than English](https://digital.gov/resources/improving-access-to-services-for-people-with-limited-english-proficiency-e-o-13166/), as appropriate for the audience?
