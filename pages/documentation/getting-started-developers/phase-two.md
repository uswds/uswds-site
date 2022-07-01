---
permalink: /documentation/getting-started/developers/phase-two-compile/
layout: styleguide
title: "Phase 2: Compile"
category: How to use USWDS
lead: Compile Design System source code into browser-readable files.
type: docs
subnav:
  - text: "Step 1: Set up your project’s Sass entry point"
    href: "#step-1-set-up-your-projects-sass-entry-point"
  - text: "Step 2: Install uswds-compile"
    href: "#step-2-install-uswds-compile"
  - text: "Step 3: Create a gulpfile"
    href: "#step-3-create-a-gulpfile"
  - text: "Step 4: Create path settings and export compile functions"
    href: "#step-4-create-path-settings-and-export-compile-functions"
  - text: "Step 5: Initialize your project"
    href: "#step-5-initialize-your-project"
  - text: "Step 6: Verify successful installation"
    href: "#step-6-verify-successful-installation"
---

U.S. Web Design System source code is written in Sass, a powerful stylesheet language that builds automation, functions, and logic into CSS. Browsers can’t read native Sass files, so these files need to be compiled into CSS — usually a single CSS file — before we can use them. Basically, when you develop with the Design System, you do all your stylesheet work in Sass then use a compiler to convert that Sass into CSS.

We’ve developed `uswds-compile`, a tool hosted on GitHub, to help teams copy USWDS static assets and transform USWDS Sass into browser-readable CSS. [Step 2](#step-2-install-uswds-compile) describes how to install this tool. When you use `uswds-compile`, we will apply Autoprefixer to all compiled code.

{: .site-note }
**Note:** If you want `uswds-compile` to set up a Sass entry point for you, skip directly to [Step 2](#step-2-install-uswds-compile). We provide Step 1 for context: why you need a Sass entry point, what it needs to include, and how to set one up manually.

## Step 1: Set up your project’s Sass entry point

A project often has many Sass files, but typically, there’s a single file that serves as the root — the “homepage” of the Sass — that links out to the others. This root file is also known as the “Sass entry point.” The Sass entry point is the most important stylesheet file in your project because it tells the compiler what source files make up your Sass codebase.

Your project’s Sass entry point is a simple file that only needs to do the following three tasks:
1. Include a USWDS [settings file]({{ site.baseurl }}/documentation/settings/)
2. Include the USWDS source code
3. Include your project’s custom Sass

Create an entry point called something like `index.scss` or `styles.scss`. Your entry point should read like the following example:

{:.site-terminal}
```scss
// Include a USWDS settings file (required)
@forward "uswds-settings.scss";

// Point to the USWDS source code (required)
@forward "./path/to/source/uswds";

// Include your project's custom Sass (optional)
@forward "project-custom.scss";
```

In plain language, this code says:

- **Get the instructions**: Get the USWDS settings that tell the design system how to build the styles. Settings are the first thing you need to include.

  The Design System is built using a suite of customizable settings that you can pass custom values into via `@use "uswds-core" with ()`. An example of this configuration is shown in the code snippet below:

  {:.site-terminal}
  ```scss
  @use "uswds-core" with (
    $theme-image-path: "../uswds/img",
    $theme-show-compile-warnings: true,
    $theme-banner-background-color: "ink",
    $theme-banner-link-color: "primary-light",
    $theme-banner-max-width: "none",
  )
  ```

  Each USWDS setting is a Sass variable that begins with the `$theme-` prefix, and we provide a list of all available settings [in the USWDS settings documentation]({{ site.baseurl }}/documentation/settings/).

    {: .site-note }
    **Note:** This `uswds-core` configuration accepts only current `uswds-core` variables.

    Improper configuration of `uswds-core` can result in the error message below. If you receive this error, confirm that all your declared variables exist inside `uswds-core` and try compiling again.
```
Error: This module was already loaded, so it can't be configured using "with".
   ┌──> node_modules/@uswds/uswds/packages/uswds-core/src/styles/variables/_index.scss
   │   @forward "project-defaults";
   │   ^^^^^^^^^^^^^^^^^^^^^^^^^^^ new load
   ╵
   ┌──> node_modules/@uswds/uswds/packages/uswds-core/src/styles/functions/general/get-default.scss
  │   @use "../../variables/project-defaults" as *;
```

- **Create the foundation**: Build all USWDS styles from these settings.

  The USWDS source code is the core of the design system. It contains all the styles for USWDS components as well as the design language of Sass tokens and functions used to build those components. USWDS source code has its own Sass entry point, which lives in the `node_modules` directory when you install USWDS with npm.

  This is called `uswds` (or, more accurately, `uswds/_index.scss`), and it’s found in the `/packages` directory of the USWDS npm package. When you install with npm, the complete path is typically `./node_modules/@uswds/uswds/packages/uswds/_index.html`.

- **Build new work on top of that foundation**: Finally, add any custom project styles built from design system code.

After you import the USWDS source code, you can build new styles with USWDS design tokens, functions, and mixins. For the purposes of this guide, we won’t get into custom code, but the important thing to understand is that any custom code should follow the settings and USWDS source code in your Sass entry point.

## Step 2: Install uswds-compile
From your project’s root, run the following command to install `uswds-compile`:

{:.site-terminal}
```bash
npm install @uswds/compile --save-dev
```

## Step 3: Create a gulpfile
Create a file called `gulpfile.js` at the root of your project by running the command `touch gulpfile.js` (alternatively, use an existing gulpfile if one already exists). This file needs to do the following:
- import the `@uswds/compile` package
- set any project settings
- export the functions and/or tasks you need

Your `gulpfile.js` may read as follows:

  {:.site-terminal}
  ```scss
/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 * Set the version of USWDS you're using (2 or 3)
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.css = './assets/css';
uswds.paths.dist.sass = './sass';

/**
 * Exports
 * Add as many as you need
 */

exports.init = uswds.init;
exports.compile = uswds.compile;
  ```

## Step 4: Create path settings and export compile functions
Now, create your path settings using the following table:

<div markdown="1" class="usa-table-container--scrollable" tabindex="0">

{: .usa-table }
Setting | Default values - Version 2.x | Default values - Version 3.0 | Description
--- | --- | ---
`paths.src.uswds` | `"./node_modules/uswds/dist"` | `"./node_modules/@uswds"` | Source location of the `uswds` package
`paths.src.sass` | `"./node_modules/uswds/dist/scss"` | `"./node_modules/@uswds/uswds/packages"` | Source location of the USWDS Sass
`paths.src.theme` | `"./node_modules/uswds/dist/scss/theme"` | `"./node_modules/@uswds/uswds/dist/theme"` |Source location of the USWDS theme files (Sass entry point<br> and starter settings files)
`paths.src.fonts` | `"./node_modules/uswds/dist/fonts"` | `"./node_modules/@uswds/uswds/dist/fonts"` | Source location of the USWDS fonts
`paths.src.img` | `"./node_modules/uswds/dist/img"` | `"./node_modules/@uswds/uswds/dist/img"` | Source location of the USWDS images
`paths.src.js` | `"./node_modules/uswds/dist/js"` | `"./node_modules/@uswds/uswds/dist/js"` | Source location of the USWDS compiled JavaScript files
`paths.src.projectSass` | `"./sass"` | `"./sass"` | Source location of any existing project Sass files outside of <br/>`paths.dist.sass`. The `watch` script will watch this <br>directory for changes.
`paths.dist.theme` | `"./sass"` | `"./sass"` | Project destination for theme files (Sass entry point and <br>settings)
`paths.dist.img` | `"./assets/uswds/images"` | `"./assets/uswds/images"` | Project destination for images
`paths.dist.fonts` | `"./assets/uswds/fonts"` | `"./assets/uswds/fonts"` | Project destination for fonts
`paths.dist.js` | `"./assets/uswds/js"` | `"./assets/uswds/js"` | Project destination for compiled JavaScript
`paths.dist.css` | `"./assets/uswds/css"` | `"./assets/uswds/css"` | Project destination for compiled CSS

</div>

Note, the `src` settings are specific to the Design System; the `dist` settings are specific to your project.

Once your paths are set, export uswds-compile functions (summarized in the following table) in your project's gulpfile.js to use them in your project:

Function | Description
--- | ---
`compile` | `compileSass` + `compileIcons`
`compileIcons` | Build the USWDS icon sprite into `paths.dist.img`
`compileSass` | Compile Sass into `paths.dist.css`
`default` | `watch`
`copyAll` | `copySetup` + `copyAssets`
`copyAssets` | Copies all static assets: `copyFonts` + `copyImages` + `copyJS`
`copyFonts` | Copy USWDS fonts to `paths.dist.fonts`
`copyImages` | Copy USWDS images to `paths.dist.img`
`copyJS` | Copy USWDS compiled JavaScript to `paths.dist.js`
`copySetup` | Copy USWDS theme files (Sass entry point and settings files) from the `uswds` package to `paths.dist.sass`
`init` | `copyAll` + `compile`
`updateUswds` | `copyAssets` + `compile`
`watch` | Compiles, then recompiles when there are changes to Sass files in `paths.dist.sass` and `paths.src.projectSass`

For any function you defined as an `export` in your `gulpfile.js`, you can run `npx gulp [function]`.

## Step 5: Initialize your project
Initialize your project to copy all the necessary image, font, and Javascript assets from the source code.

Initialize your project and get started by running the following command:

{:.site-terminal}
```bash
npx gulp init
```

{: .site-note }
**Note:** Use `init` only once. The `init` task is meant for initializing the design system on a project. Since it will overwrite project files (like settings files and the Sass entry point), use it sparingly and don't use it for updating the design system on a project, or at any point after you've customized your settings files.

If you receive the error `replaceAll is not a function` when trying to run `npx gulp init`, please verify you are using the version of Node specified in the [.nvmrc file](https://github.com/uswds/uswds/blob/main/.nvmrc) and run the command again.

This command will add all the USWDS assets to the directories you set, add a project Sass entry point, and compile USWDS into CSS. Add this CSS file to the `<head>` of your project HTML.

## Step 6: Verify successful installation
Any time you want to recompile your CSS, run `npx gulp compileSass` from the command line in your project root.

You should see a successful compile message.

{:.site-terminal}
```bash
[10:10:10] Finished 'buildSass' after 5.02 s
[10:10:10] Finished 'compileSass' after 5.03 s
```

To verify whether you’ve successfully installed USWDS and that compilation is working, we recommend confirming the directory structure matches the paths you have updated in `gulpfile.js`, copying a few [components]({{ site.baseurl }}/components/overview/), pasting them into an HTML page, and then visiting that page in the browser to see if the components appear as expected.

**Next:** [Phase 3: Customize]({{ site.baseurl }}/documentation/getting-started/developers/phase-three-customize/) →
