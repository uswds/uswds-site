---
permalink: /documentation/getting-started/developers/phase-two-compile/
layout: styleguide
title: 'Phase 2: Compile'
category: How to use USWDS
lead: Compile Design System source code into browser-readable files.
type: docs
subnav:
  - text: 'About Sass entry points'
    href: '#about-sass-entry-points'
  - text: 'Step 1: Install uswds-compile'
    href: '#step-1-install-uswds-compile'
  - text: 'Step 2: Create a gulpfile'
    href: '#step-2-create-a-gulpfile'
  - text: 'Step 3: Set USWDS version'
    href: '#step-3-set-uswds-version'
  - text: 'Step 4: Customize path settings'
    href: '#step-4-customize-path-settings'
  - text: 'Step 5: Export compile functions'
    href: '#step-5-export-compile-functions'
  - text: 'Step 6: Initialize your project'
    href: '#step-6-initialize-your-project'
  - text: 'Step 7: Verify successful installation'
    href: '#step-7-verify-successful-installation'
---

U.S. Web Design System source code is written in Sass, a powerful stylesheet language that builds automation, functions, and logic into CSS. Browsers can’t read native Sass files, so these files need to be compiled into CSS — usually a single CSS file — before we can use them. Basically, when you develop with the Design System, you do all your stylesheet work in Sass then use a compiler to convert that Sass into CSS.

## Introducing uswds-compile

We’ve developed `uswds-compile`, a tool [hosted on GitHub](https://github.com/uswds/uswds-compile), to help teams compile USWDS Sass. This tool provides simple Gulp 4 functions that copy USWDS static assets into your project and transform USWDS Sass into browser-readable CSS. Additionally, `uswds-compile` applies Autoprefixer to all compiled code to make sure your CSS is browser-compatible.

We recommend using `uswds-compile` as a quick way to get up and running with USWDS Sass compilation.

{: .site-note }
Note: One of the benefits of using `uswds-compile` is that it will set up a Sass entry point for you. If you plan on using this tool, you can safely skip the next section about Sass entry points and jump straight to the [step-by-step instructions](#step-1-install-uswds-compile) that explain how to install and use `uswds-compile`.

If you prefer to set up Sass compilation yourself, the next thing you'll need to do is set up (or edit) your Sass entry point.

## About Sass entry points

A project often has many Sass files, but typically, there’s a single file that serves as the root — the “homepage” of the Sass — that links out to the others. This root file is also known as the “Sass entry point.” The Sass entry point is the most important stylesheet file in your project because it tells the compiler what source files make up your Sass codebase. Often, a project's Sass entry point is named something like `index.scss` or `styles.scss`.

### Setting up USWDS in your Sass entry point

If your project does not yet have a Sass entry point, create a file called `index.scss` or `styles.scss`.

When your entry point is ready, you'll need to load USWDS Sass. Your Sass entry point will need to do the following three tasks in this order:

1. Define [USWDS settings]({{ site.baseurl }}/documentation/settings/)
2. Load  USWDS source code
3. Load your project’s custom Sass

Your entry point should read like the following example:

```scss
/* styles.scss */

// Include a USWDS settings file (required)
@forward "uswds-settings.scss";

// Point to the USWDS source code (required)
@forward "./path/to/source/uswds";

// Include your project's custom Sass (optional)
@forward "project-custom.scss";
```

In plain language, this code says:

- **Configure the instructions**: Get the USWDS settings that tell the Design System how to build the styles. Settings are the first thing you'll need to include.

  USWDS settings are Sass variables that allow you to configure the Design System to fit your project's needs. You can find full instructions for configuring USWDS settings, along with a list of all available settings, on the [Settings page]({{ site.baseurl }}/documentation/settings/).

  The following is an example of a simple settings file:

  ```
  /* uswds-settings.scss */

  @use "uswds-core" with (
    $theme-image-path: "../uswds/img",
    $theme-show-compile-warnings: true,
    $theme-banner-background-color: "ink",
    $theme-banner-link-color: "primary-light",
    $theme-banner-max-width: "none",
  )
  ```

- **Create the foundation**: Build all USWDS styles from these settings.

  The USWDS source code is the core of the design system. It contains all the styles for USWDS components as well as the design language of Sass tokens and functions used to build those components. You will need to load USWDS source code after you define USWDS settings.

  USWDS source code has its own Sass entry point, which lives in the `node_modules` directory when you install USWDS with npm. This is called `uswds` (or, more accurately, `uswds/_index.scss`), and it’s found in the `/packages` directory of the USWDS npm package. When you install USWDS 3 with npm, the complete path is `./node_modules/@uswds/uswds/packages/uswds/_index.scss`.

- **Build new work on top of that foundation**: Finally, add any custom project styles built from design system code.

  After you load the USWDS source code, you can build new styles with USWDS design tokens, functions, and mixins. For the purposes of this guide, we won’t get into custom code, but the important thing to understand is that any custom code should follow the settings and USWDS source code in your Sass entry point.

## Using uswds-compile
Complete the following steps to install, configure, and use `uswds-compile`:

### Step 1: Install uswds-compile

From your project’s root, run the following command to install `uswds-compile`:

```bash
npm install @uswds/compile --save-dev
```

### Step 2: Create a gulpfile

Once installed, create a file called `gulpfile.js` at the root of your project by running the command `touch gulpfile.js` (alternatively, use an existing gulpfile if one already exists). This file needs to do the following:

- Import the `@uswds/compile` package
- Set the project's USWDS version
- Set custom project path settings
- Export the Gulp functions and/or tasks you need

You can find details about configuring your `gulpfile.js` in steps 3-5.

For an initial example, a simple `gulpfile.js` may read as follows:

```scss
/* gulpfile.js */

/**
* Import uswds-compile
*/
const uswds = require("@uswds/compile");

/**
* USWDS version
* Set the major version of USWDS you're using
* (Current options are the numbers 2 or 3)
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
exports.watch = uswds.watch;
```

### Step 3: Set USWDS version

Once your `gulpfile.js` is created, declare which major version of USWDS your project uses with `settings.version`. This configuration tells Gulp where to find USWDS source files in the `node_modules` directory. This setting currently accepts values of the numbers `2` and `3` to represent USWDS 2.X and 3.X, respectively.

### Step 4: Customize path settings

Next, you will need to determine if there are any path settings that you'll need to customize.

`uswds-compile` provides default paths that tell Gulp both where to find USWDS source files and where to distribute assets in your project. A list of all path settings, along with default values, can be found in the following table:

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

#### paths.src

The `src` settings tell Gulp where to _find_ USWDS source files. The default values point to directories in the `uswds` node module that you installed during [Phase 1]({{ site.baseurl }}/documentation/getting-started/developers/phase-one-install/).

Note that the `src` paths are different for USWDS 2 and USWDS 3. You can tell `uswds-compile` which `src` set to use by defining the `settings.version` in your `gulpfile.js`.

#### paths.dist

The `dist` settings tell Gulp where to _put_ assets in your project. For example, if you wanted to tell Gulp to compile CSS into your project's `./build/css` directory, you'd include this line in your `gulpfile.js`:

```js
paths.dist.css = './build/css';
```

One helpful way to look at it is that the `src` settings are specific to the Design System; the `dist` settings are specific to your project.

### Step 5: Export compile functions

Once your paths are set, export `uswds-compile` functions (summarized in the following table) in your project's `gulpfile.js` to use them in your project.

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

For example, if you wanted to have the ability to tell Gulp to compile your Sass, you'd need to first export the `compile` task for your project by adding this line to your `gulpfile.js`:

```
exports.compile = uswds.compile;
```

Once exported, you can compile your code by running the following in the command line from your project root:

```
npx gulp compile
```

### Step 6: Initialize your project

When your `gulfile.js` is ready, initialize your project to copy all the necessary Sass, image, font, and Javascript assets from the USWDS source code.

Initialize your project and get started by running the following command:

```bash
npx gulp init
```

This command will add all the USWDS assets to the directories you set, add a project Sass entry point, and compile USWDS into CSS. Add this CSS file to the `<head>` of your project HTML.

{: .site-note }
**Note:** Use `init` only once. The `init` task is meant for initializing the design system on a project. Since it will overwrite project files (like settings files and the Sass entry point), use it sparingly and don't use it for updating the design system on a project, or at any point after you've customized your settings files.

If you receive the error `replaceAll is not a function` when trying to run `npx gulp init`, please verify you are using the version of Node specified in the [.nvmrc file](https://github.com/uswds/uswds/blob/main/.nvmrc) and run the command again.

### Step 7: Verify successful installation

Any time you want to recompile your CSS, run `npx gulp compile` from the command line in your project root.

You should see a successful compile message.

```bash
[10:10:10] Finished 'buildSass' after 5.02 s
[10:10:10] Finished 'compileSass' after 5.03 s
```

To verify whether you’ve successfully installed USWDS and that compilation is working, we recommend confirming the directory structure matches the paths you have updated in `gulpfile.js`, copying a few [components]({{ site.baseurl }}/components/overview/), pasting them into an HTML page, and then visiting that page in the browser to see if the components appear as expected.

**Next:** [Phase 3: Customize]({{ site.baseurl }}/documentation/getting-started/developers/phase-three-customize/) →
