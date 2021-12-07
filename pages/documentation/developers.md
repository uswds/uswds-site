---
permalink: /documentation/developers/
layout: styleguide
title: Documentation
category: How to use USWDS
lead: USWDS components are built on a solid HTML foundation, progressively enhanced to provide core experiences across browsers. All users will have access to the same critical information and basic experience regardless of their browser, although those experiences will render better in newer browsers. If JavaScript fails users will still get a robust HTML foundation and all the necessary content.
subnav:
- text: Installation
  href: '#download-and-install'
- text: CSS architecture
  href: '#css-architecture'
- text: JS customization
  href: '#js-customization'
- text: Customization, theming, and tokens
  href: '#customization-theming-and-tokens'
- text: Where things live
  href: '#where-things-live'
- text: Browser support
  href: '#browser-support'
- text: Accessibility
  href: '#accessibility'
- text: Fractal
  href: '#fractal'
- text: Long-term support of v1.x
  href: '#long-term-support-of-v1x'
- text: Need installation help?
  href: '#need-installation-help'
- text: Contributing
  href: '#contributing-to-the-code-base'
---

{% assign content = site.data.install-readme.decoded | markdownify | absolutify_links: 'https://github.com/uswds/uswds/blob/release-2.0/' | split: '<h2 id="using-the-design-system">Using the design system</h2>' | last | split: '<h2 id="reuse-of-open-source-style-guides">' | first %}

## Installation

{{ content }}
