---
title: Introducing USWDS 3.0
tags:
- updates
category: About
author: Dan O. Williams, James Mejia, Amy Leadem, Bonnie Cameron, Charlie Mahoney
image: /img/introducing-uswds-3/introducing-uswds-3.jpg
excerpt: USWDS 3.0 is an important major design system update that's easy to apply to an existing USWDS 2 project. USWDS 3.0 allows teams to update their projects to modern Sass syntax, improve performance, and reduce the size of project CSS.
---

<img src="{{ site.baseurl }}/img/introducing-uswds-3/introducing-uswds-3.jpg" alt="A colorful grid of geometric shapes reads 3.0" class="width-full tablet:width-tablet-lg maxw-full tablet:maxw-tablet-lg">

## A more modular design system, incrementally

USWDS 3.0 is an important major design system update that's easy to apply to an existing USWDS 2 project. USWDS 3.0 allows teams to update their projects to modern Sass syntax, improve performance, and reduce the size of project CSS. Where USWDS 2.0 introduced a new design language and changed the way we built our components from the ground up, USWDS 3.0 adds important incremental improvements without fundamentally changing how the design system works.

For most USWDS 2 projects, migrating to USWDS 3.0 should only require changing  a few lines of project code. We've developed this new version to be a simple, straightforward migration. We want teams to start using USWDS 3.0, and we'll be there to help you do it.

For migration assistance, start with our [USWDS 3.0 Migration Guide]({{ site.baseurl }}/documentation/migration) →

If you have any questions or feedback let us know at the [USWDS Public Slack](https://gsa-tts.slack.com/archives/uswds-public), [GitHub Discussions](https://github.com/uswds/uswds/discussions), or [uswds@gsa.gov](mailto:uswds@gsa.gov).

If you aren't a member of the USWDS Public Slack, [sign up here](https://docs.google.com/forms/d/e/1FAIpQLSfFoLTRV00g1iIEZv404wJ0BRwNc6CPKbyXMCeXLjDKDv9g4Q/viewform) by "Joining a TTS Chat Room" — then select "U.S. Web Design System" as your chat topic.

{:.site-note}
Starting in USWDS 3.0, we're publishing our npm package to an `@uswds` organization scope. So now, when installing USWDS, use `npm install @uswds/uswds --save`.

## What's new in USWDS 3.0?
USWDS 3.0 takes a modular, component-centered approach to the design system. We've rebuilt our codebase with a component focus so teams can more effectively integrate the design system incrementally and use only the USWDS components needed in their projects.

### Update to modern Sass syntax

USWDS 3.0 stylesheets use the most modern version of the Sass module syntax. The Sass language that we use to write our stylesheets updated its syntax in 2020 and the old syntax (using `@import`) is now deprecated. Sass will no longer support the old syntax starting in October 2022. We want teams to use source code with reliable support throughout the life of their project, and USWDS 3.0 allows teams to migrate to Sass modules and maintain support.

[Read more about the Sass module syntax](https://sass-lang.com/blog/the-module-system-is-launched)

### Improve performance and reduce the size of your project CSS

Unbundle the design system with USWDS 3.0. Using USWDS 3.0 with Sass module syntax allows teams to unbundle their implementations of USWDS and use only the components and code that they need on their project. Depending on your project, this could mean significant reduction of CSS code you ship. This means faster load times, better scores in performance evaluation tools, and a better developer experience.

[Read more about USWDS packages]({{ site.baseurl }}/components/packages/) →

### Simplify your project settings

USWDS is a highly customizable design system, but that doesn't mean that our settings files need to be long and complicated. Starting in USWDS 3.0, projects will use settings files that include only the settings you've changed in your project. This means fewer project settings to manage, and a clearer vision of your project's customizations.

[Read more about USWDS settings]({{ site.baseurl }}/documentation/settings) →

### Stay up-to-date with minimal hassle

We want teams to benefit from the most current version of USWDS. Many projects should be able to migrate from USWDS 2 to USWDS 3.0 in about an hour or less. This new version makes no markup or style changes from USWDS 2.13.3. If you already use USWDS 2.13.0 or later, you should be able to update to USWDS 3.0 in a matter of minutes. Additionally, the under-the-hood changes we're introducing in USWDS 3.0 will make it easier to stay up-to-date with USWDS over time. An incremental update now will make subsequent updates simpler as well.

## Support changes in USWDS 3.0

As we move forward to USWDS 3.0 and beyond, we're making some changes to the browsers and functionality our design system supports, consistent with our 2% support threshold and modern development practices.

### No longer explicitly support IE11

IE11 has fallen below our 2% support threshold as monitored by analytics.usa.gov. While we have not removed any existing IE11 support from our codebase, we may make changes and add functionality that no longer supports IE11 as we move forward. When we do make any changes like this, we'll be sure to note it in our release notes.

[USWDS browser support (2% rule)]({{ site.baseurl }}/documentation/developers/#browser-support) →

[See current analytics from analytics.usa.gov](https://analytics.usa.gov/)

### Support some Javascript-required functionality

We believe that JavaScript-disabled environments fall below our 2% support threshold, and that we may require JavaScript for some design system functionality. While we have not made any changes to our codebase that affect how we use JavaScript with our components, we may make changes that require JavaScript for some functionality as we move forward. When we do make any changes like this, we'll be sure to note it in our release notes.

### Support USWDS 2 with maintenance and security patches for one year

In addition to supporting active development on USWDS 3, we will continue to support the USWDS 2 branch for one year of maintenance and security patches (until April 2023). The current LTS version of USWDS 2 is [USWDS 2.13.3](https://github.com/uswds/uswds/releases/tag/v2.13.3).

[Long-term support of version 2.x]({{ site.baseurl }}/documentation/developers/#long-term-support-of-v2x) →
