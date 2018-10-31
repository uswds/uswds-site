---
permalink: /documentation/developers/
layout: styleguide
title: For developers
category: Documentation
lead: The UI components are built on a solid HTML foundation, progressively enhanced to provide core experiences across browsers. All users will have access to the same critical information and experiences regardless of what browser they use, although those experiences will render better in newer browsers. If JavaScript fails, users will still get a robust HTML foundation.
subnav:
- text: Installation
  href: '#installation'
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
- text: Need installation help?
  href: '#need-installation-help'
- text: Contributing
  href: '#contributing-to-the-code-base'
redirect_from:
  - /getting-started/developers/
---

{% assign content = site.data.install-readme.decoded | markdownify | absolutify_links: 'https://github.com/uswds/uswds/blob/release-2.0/' | split: '<h2 id="using-the-design-system">Using the Design System</h2>' | last | split: '<h2 id="reuse-of-open-source-style-guides">' | first %}

## Installation

{{ content }}
