---
permalink: /documentation/developers/
layout: styleguide
title: Documentation
category: How to use USWDS
lead: USWDS components are built on a solid HTML foundation, progressively enhanced to provide core experiences across browsers. All users will have access to the same critical information and basic experience regardless of their browser, although those experiences will render better in newer browsers. If JavaScript fails users will still get a robust HTML foundation and all the necessary content.
subnav:
- text: Installation
  href: '#installation'
- text: Using USWDS CSS and JavaScript in your project
  href: '#using-uswds-css-and-javascript-in-your-project'
- text: Compiling USWDS Sass into CSS
  href: '#compiling-uswds-sass-into-css'
- text: JS customization
  href: '#js-customization'
- text: Style theming and tokens
  href: '#style-theming-and-tokens'
- text: CSS architecture
  href: '#css-architecture'
- text: Browser support
  href: '#browser-support'
- text: Accessibility
  href: '#accessibility'
- text: Long-term support of v1.x
  href: '#long-term-support-of-v1x'
- text: Long-term support of v2.x
  href: '#long-term-support-of-v2x'
- text: Need installation help?
  href: '#need-installation-help'
- text: Contributing
  href: '#contributing-to-the-code-base'
---

{% assign content = site.data.install-readme.decoded | markdownify | absolutify_links: 'https://github.com/uswds/uswds/blob/release-2.0/' | split: '<h2 id="installing-the-design-system">Installing the design system</h2>' | last | split: '<h2 id="reuse-of-open-source-style-guides">' | first %}

## Installation

{{ content }}
