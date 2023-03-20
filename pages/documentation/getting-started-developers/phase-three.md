---
permalink: /documentation/getting-started/developers/phase-three-customize/
layout: styleguide
title: "Phase 3: Customize"
category: How to use USWDS
lead: Customize the Design System with settings and custom code.
type: docs
subnav:
  - text: Latest updates
    href: '#changelog'
changelog:
  key: docs-getting-started-devs-phase-3
---

Now, equipped with building blocks that are accessible and cohesive, you can get creative. This phase is an overview of what you need to know to customize your project.

The U.S. Web Design System provides extensive support for theming via its [theme settings]({{ site.baseurl }}/documentation/settings). You'll update the `_uswds-theme.scss` file in `uswds.paths.dist.theme` so its `@use` directive includes a list of all the settings you're customizing for your project.

{: .site-note }
**Note:** If you use `uswds-compile`, as detailed in Phase 2, this tool adds this file to the directory you specify in `uswds.paths.dist.theme`.

Because `uswds.paths.dist.theme` will be updated the next time you run the `init` script, do this with caution! We don't recommend using `init` more than once.

The [USWDS Settings page]({{ site.baseurl }}/documentation/settings/) describes each of the settings available in the settings files, as well as the values the settings accept. Most settings accept design tokens, visit the [Design tokens section]({{ site.baseurl }}/design-tokens/) of our website for more information on the available tokens for [color]({{ site.baseurl }}/design-tokens/color), [spacing units]({{ site.baseurl }}/design-tokens/spacing-units), [font size]({{ site.baseurl }}/design-tokens/typesetting/font-size/), and more.

You can also use `uswds-compile` to watch for any changes to your project Sass and recompile the CSS. Watch and recompile with the following command:

{:.site-terminal}
```bash
npx gulp watch
```

This command will run in your Terminal window. When you want to shut it down, use `control-c`.

Our [showcase]({{ site.baseurl }}/documentation/showcase/) illustrates how other teams of developers and designers have taken the building blocks the Design System provides and redesigned them for their brand and message. We hope the possibilities inspire your team!

We’re looking forward to hearing about your experience and seeing how USWDS's components look in your project!
