---
permalink: /documentation/getting-started/developers/phase-three-customize/
layout: styleguide
title: "Phase 3: Customize"
category: How to use USWDS
lead: Customize the design system with settings and custom code
type: docs
---

Now, equipped with building blocks that are accessible and cohesive, you can get creative. Here is an overview of what you need to know to customize your project: 

{: .site-note }
**Note:** If you use `uswds-gulp`, as detailed in Phase 2, this tool adds each of the files mentioned below to the directory you specify in `PROJECT_SASS_SRC`.

USWDS provides extensive support for theming via its theme settings files. The critical files you'll need in your project are the following, which are located in `dist/scss/theme`:
-	`_uswds-theme-color.scss` — color settings
-	`_uswds-theme-components.scss` — component settings
-	`_uswds-theme-general.scss` — general settings
-	`_uswds-theme-spacing.scss` — spacing settings
- `_uswds-theme-typography.scss` — typography settings
-	`_uswds-theme-utilities.scss` — utility class output settings

The [USWDS Settings page]({{ site.baseurl }}/documentation/settings/) describes each of the settings available in the settings files, as well as the values the settings accept. Most settings accept design tokens, visit the [Design tokens section]({{ site.baseurl }}/design-tokens/) of our website for more information on the available tokens for [color]({{ site.baseurl }}/design-tokens/color), [spacing units]({{ site.baseurl }}/design-tokens/spacing-units), [font size]({{ site.baseurl }}/design-tokens/typesetting/font-size/), and more.

You can also use `uswds-gulp` to watch for any changes to your project Sass and recompile the CSS. Watch and recompile with the following command:

{:.site-terminal}
```bash
npx gulp watch
```

This command will run in your Terminal window. When you want to shut it down, use `control-c`.

Our showcase illustrates how other teams of developers and designers have taken the building blocks USWDS provides and redesigned them for their brand and message.

We’re looking forward to hearing about your experience and seeing how USWDS's components look in your project!
