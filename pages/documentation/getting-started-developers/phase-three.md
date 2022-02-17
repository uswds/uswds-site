---
permalink: /documentation/getting-started/developers/phase-three-customize/
layout: styleguide
title: "Phase 3: Customize"
category: How to use USWDS
lead: Customize the Design System with settings and custom code.
type: docs
---

Now, equipped with building blocks that are accessible and cohesive, you can get creative. This phase is an overview of what you need to know to customize your project. 

{: .site-note }
**Note:** If you use `uswds-compile`, as detailed in Phase 2, this tool adds each of the files mentioned below to the directory you specify in `PROJECT_SASS_SRC`.

The U.S. Web Design System provides extensive support for theming via its theme settings files. The files you'll need in your project are the following, which are located in `uswds.paths.dist.sass`:
-	`_uswds-theme-color.scss` — color settings
-	`_uswds-theme-components.scss` — component settings
-	`_uswds-theme-general.scss` — general settings
-	`_uswds-theme-spacing.scss` — spacing settings
- `_uswds-theme-typography.scss` — typography settings
-	`_uswds-theme-utilities.scss` — utility class output settings

Because `uswds.paths.dist.sass` will be updated as the Design System updates, we recommend copying these files into an "overrides" (or similarly titled) folder and customizing them there.

The [USWDS Settings page]({{ site.baseurl }}/documentation/settings/) describes each of the settings available in the settings files, as well as the values the settings accept. Most settings accept design tokens, visit the [Design tokens section]({{ site.baseurl }}/design-tokens/) of our website for more information on the available tokens for [color]({{ site.baseurl }}/design-tokens/color), [spacing units]({{ site.baseurl }}/design-tokens/spacing-units), [font size]({{ site.baseurl }}/design-tokens/typesetting/font-size/), and more.

You can also use `uswds-compile` to watch for any changes to your project Sass and recompile the CSS. Watch and recompile with the following command:

{:.site-terminal}
```bash
npx gulp watch
```

This command will run in your Terminal window. When you want to shut it down, use `control-c`.

Our [showcase](https://designsystem.digital.gov/getting-started/showcase/all/) illustrates how other teams of developers and designers have taken the building blocks the Design System provides and redesigned them for their brand and message. We hope the possibilities inspire your team!

We’re looking forward to hearing about your experience and seeing how USWDS's components look in your project!
