---
permalink: /documentation/getting-started-for-developers/
layout: styleguide
title: Getting started for developers
lead: Get started using the design system by installing, compiling, and customizing USWDS code
category: How to use USWDS
type: docs
subnav:
  - href: /documentation/getting-started/developers/phase-one-install/
  - href: /documentation/getting-started/developers/phase-two-compile/
  - href: /documentation/getting-started/developers/phase-three-customize/
redirect_from:
  - /documentation/fundamentals/
---

Getting started for developers will lead you, step-by-step, through the process of installing and compiling the Design System and using comeponents and design tokens to customize your project. If you prefer a hands-on demonstration of this process, please check out [our interactive tutorial](https://github.com/uswds/uswds-tutorial), which will take you through the same steps using a pre-made example website.

As always, we're here for you if you have any questions. Please get in touch via GitHub, Slack, or email!


## What you need
We recommend using the following tools when working with USWDS:
- Node (our version is specified in the [.nvmrc file](https://github.com/uswds/uswds/blob/main/.nvmrc); currently v16)
- npm
- Sass (use [the latest version](https://nodejs.org/en/download/); we use [the latest `sass` package from npm](https://www.npmjs.com/package/sass))

These instructions describe how to get started with USWDS using npm. If npm does not work for your project, you can [download and install the system directly](https://github.com/uswds/uswds#download-and-install) as outlined under “Download and install” in GitHub.

We’ve designed USWDS to support older and newer browsers through [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement). The design system follows the [2% rule](https://gds.blog.gov.uk/2012/01/25/support-for-browsers/): we officially support any browser above 2% usage as observed by [analytics.usa.gov](https://analytics.usa.gov/). In other words, USWDS version 2.0 supports Chrome, Firefox, Safari, Edge, and Internet Explorer 11 and up. The next major version of USWDS (3.0) will drop support of Internet Explorer 11.

## Step-by-step
Get started with USWDS by installing the design system on your project, compiling your project's Sass from the USWDS source, and customizing the design system to fit your project needs.

[**Phase 1: Install**]({{ site.baseurl }}/documentation/getting-started/developers/phase-one-install/) →

[**Phase 2: Compile**]({{ site.baseurl }}/documentation/getting-started/developers/phase-two-compile/) →

[**Phase 3: Customize**]({{ site.baseurl }}/documentation/getting-started/developers/phase-three-customize/) →
