---
permalink: /documentation/getting-started-for-developers/
layout: styleguide
title: Getting started for developers
category: How to use USWDS
type: docs
subnav:
  - href: /documentation/getting-started/developers/phase-one-install/
  - href: /documentation/getting-started/developers/phase-two-compile/
  - href: /documentation/getting-started/developers/phase-three-customize/
---
## Before getting started
The U.S. Web Design System (USWDS) includes over 40 accessible, mobile-friendly components out of the box, ensuring consistency and saving developers the need to build everything from scratch for their web-design and -redesign projects.

[Components](/components/overview/) are built from (and further customizable based on) [tokens](/design-tokens/). Akin to atoms in an atomic-design methodology, tokens are the design system's predefined units of color, spacing, typography, and opacity that form the building blocks of design.

USWDS also provides tools and solutions that make it simpler to comply with legal requirements, such as the 21st Century Integrated Digital Experience Act and Section 508 of the Rehabilitation Act, like [a simple way to pick accessible colors](/design-tokens/color/overview/#color-and-accessibility) or [a component that displays required links](/components/identifier/).

## Key concepts
The following are concepts fundamental to the design system:
- [Design tokens](/design-tokens/): Design tokens are predefined units of color, spacing, typography, opacity, and more that form the building blocks of the design system.
- [Components](/components/overview): Components are simple and consistent solutions to common user interface needs, like form fields, buttons, and icons. If tokens are the building blocks of the design system, components are the building blocks of a site or service.
- [Utilities](/utilities/): Utilities are single-purpose classes mapped to USWDS tokens. Utilities allow developers to prototype with design system utilities without writing Sass or CSS.
- [Implementations](/documentation/implementations/): Implementations are how teams use USWDS in their projects, like in Drupal, as well as other platforms and frameworks. We'll link to projects and community supported implementations. 

You don't need to understand these concepts to install the design system, but you will need to know them to build with it.

## What you need
We recommend using the following tools when working with USWDS:
- Node (our version is specified in the [.nvmrc file](https://github.com/uswds/uswds/blob/main/.nvmrc); currently v16)
- npm
- Sass (use [the latest version](https://nodejs.org/en/download/); we use [the latest `sass` package from npm](https://www.npmjs.com/package/sass))

These instructions describe how to get started with USWDS using npm. If npm does not work for your project, you can [download and install the system directly](https://github.com/uswds/uswds#download-and-install) as outlined under “Download and install” in GitHub.

We’ve designed USWDS to support older and newer browsers through [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement). The design system follows the [2% rule](https://gds.blog.gov.uk/2012/01/25/support-for-browsers/): we officially support any browser above 2% usage as observed by [analytics.usa.gov](https://analytics.usa.gov/). In other words, USWDS version 2.0 supports Chrome, Firefox, Safari, Edge, and Internet Explorer 11 and up. The next major version of USWDS (3.0) will drop support of Internet Explorer 11.

## Step-by-step
Get started with USWDS by installing the design system on your project, compiling your project's Sass from the USWDS source, and customizing the design system to fit your project needs.

[Phase 1: Install &gt;](/documentation/getting-started/developers/phase-one-install/)