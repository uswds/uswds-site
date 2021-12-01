---
permalink: /documentation/getting-started/developers/phase-three-customize/
layout: styleguide
title: "Phase 3: Customize"
category: How to use USWDS
lead: Getting started with the design system
type: docs
steps:
  - name: "Phase 1: Install"
    status: completed
  - name: "Phase 2: Compile"
    status: completed
  - name: "Phase 3: Customize"
    status: current
---
{: .site-note }
**Note:** Note: If you use `uswds-gulp`, as detailed in Phase 2, this tool adds each of the files mentioned below to the directory you specify in `PROJECT_SASS_SRC`.

USWDS 2.0 provides extensive support for theming via its theme settings files. The critical files you'll need in your project are the following, which are located in `dist/scss/theme`:
-	`_uswds-theme-color.scss` — theme color settings
-	`_uswds-theme-components.scss` — theme component settings
-	`_uswds-theme-general.scss` — general theme settings
-	`_uswds-theme-spacing.scss` — theme spacing settings
- `_uswds-theme-typography.scss` — theme typography settings
-	`_uswds-theme-utilities.scss` — utility class output settings

The [USWDS Settings page](/documentation/settings/) describes each of the settings available in the settings files, as well as the values the settings accept. Most settings accept design tokens, visit the [Design tokens section](/design-tokens/) of our website for more information on the available tokens for [color](/design-tokens/color), [spacing units](/design-tokens/spacing-units), [font size](/design-tokens/typesetting/font-size/), and more.

## Resources
Now that you’ve gotten started, the following resources are available to help you stay in touch, to provide support as you continue with your projects, and to enable you to provide recommendations and feedback.

## Need installation help?
Do you have questions or need help with setup? Did you run into any weird errors while following these instructions? Feel free to [open an issue](https://github.com/uswds/uswds/issues) in GitHub.

You can also email us directly at [uswds@support.digitalgov.gov](mailto:uswds@support.digitalgov.gov). 

## Stay involved
USWDS is supported by an active, open-source community of engineers, content specialists, and designers. 

## Continue learning
We regularly update USWDS. To stay informed of changes, tips, and tricks, join us for our monthly calls and/or [subscribe to Wave](https://public.govdelivery.com/accounts/USGSATTS/subscriber/new?qsp=GSA_TTS), our newsletter.

## Contribute to the codebase
For complete instructions on how to contribute code, please read [CONTRIBUTING.md](https://github.com/uswds/uswds/blob/develop/CONTRIBUTING.md). These instructions also include guidance on how to set up your own copy of the design system style guide website for development.

If you would like to learn more about how we work, check out the [Workflow](https://github.com/uswds/uswds/wiki/Workflow) and [Issue label Glossary](https://github.com/uswds/uswds/wiki/Issue-label-glossary) pages on our wiki.

If you have questions or concerns about our contributing workflow, feel free to [open an issue](https://github.com/uswds/uswds/issues), such as the following in GitHub:
- Bug report — Report a bug and help USWDS improve.
- Feature request — Suggest a new idea for the design system.
- Report a security vulnerability — Report potential security issues. Review our [security policy](https://github.com/uswds/uswds/security/policy) for more details.

You can also email us directly at [uswds@support.digitalgov.gov](mailto:uswds@support.digitalgov.gov).
