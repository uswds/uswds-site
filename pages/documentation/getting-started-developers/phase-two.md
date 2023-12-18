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
  - text: 'Step 3: Import the uswds-compile package'
    href: '#step-3-import-the-uswds-compile-package'
  - text: 'Step 4: Set USWDS version'
    href: '#step-4-set-uswds-version'
  - text: 'Step 5: Customize path settings'
    href: '#step-5-customize-path-settings'
  - text: 'Step 6: Export compile functions'
    href: '#step-6-export-compile-functions'
  - text: 'Step 7: Initialize your project'
    href: '#step-7-initialize-your-project'
  - text: 'Step 8: Verify successful installation'
    href: '#step-8-verify-successful-installation'
  - text: Latest updates
    href: '#changelog'
changelog:
  key: docs-getting-started-devs-phase-2
---

U.S. Web Design System source code is written in Sass, a powerful stylesheet language that builds automation, functions, and logic into CSS. Browsers can’t read native Sass files, so these files need to be compiled into CSS — usually a single CSS file — before we can use them. Basically, when you develop with the Design System, you do all your stylesheet work in Sass then use a compiler to convert that Sass into CSS.

## Introducing uswds-compile

We recommend using `uswds-compile`, a USWDS tool [hosted on GitHub](https://github.com/uswds/uswds-compile), as a quick way to get up and running with Sass compilation for USWDS.

This tool provides simple Gulp 4 functions that copy USWDS static assets into your project and transform USWDS Sass into browser-readable CSS. Additionally, `uswds-compile` applies Autoprefixer to all compiled code to make sure your CSS is browser-compatible.

Later in this guide we will walk you through setting up Sass compilation for your project with `uswds-compile`. To get started, jump ahead to the [Using uswds-compile](#using-uswds-compile) section below.

## Loading USWDS Sass with a custom compiler
If you already have Sass compilation set up on your project, you'll need to load USWDS Sass and your USWDS settings configuration into your Sass entry point.

### About Sass entry points

A project often has many Sass files, but typically, there’s a single file that serves as the root — the “homepage” of the Sass — that links out to the others. This root file is also known as the “Sass entry point.” The Sass entry point is the most important stylesheet file in your project because it tells the compiler what source files make up your Sass codebase. Often, a project's Sass entry point is named something like `index.scss` or `styles.scss`.

### Creating a Sass entry point
If your project does not yet have a Sass entry point, create a file called `index.scss` or `styles.scss`. This file will typically live at the root of your project's Sass directory.

### Loading USWDS in your Sass entry point
Your project’s Sass entry point is a simple file that will need to:

1. Load your project's [USWDS settings configuration]({{ site.baseurl }}/documentation/settings/) (required)
2. Load USWDS source code (required)
3. Load your project’s custom Sass (optional)

For your entry point to complete these tasks, you will need to add the following references to your entry point in this order:

```scss
/* styles.scss */

// 1. Load your project's USWDS settings configuration
@forward "uswds-theme.scss";

// 2. Load USWDS source code
@forward "./path/to/source/uswds";

// 3. Load your project's custom Sass
@forward "project-styles.scss";
```

Note that each `@forward` reference in this example is tied to one of the tasks listed above.

In plain language, this code says:

1. **Get the instructions**: Add the USWDS settings configuration that tells the Design System how to build the styles.

    Your settings configuration is the first thing you'll need to include in your entry point. Often, this configuration will live in its own file, which in this example is called `uswds-theme.scss`. You can find full instructions for configuring USWDS settings, along with a list of all available settings, on the [Settings page]({{ site.baseurl }}/documentation/settings/).

2. **Create the foundation**: Build all USWDS styles from these settings.

    Once you have set up your project's custom settings, it is time to pull in the USWDS source code from the `uswds` package.

    The `uswds` package collects all the Sass in the Design System. It contains all the styles for USWDS components as well as the design language of Sass tokens and functions used to build those components.

    To load the `uswds` package, you must provide a path to its `index.scss` entry point. If you installed USWDS 3 with npm, the complete path to this file is: `./node_modules/@uswds/uswds/packages/uswds/_index.scss`.

3. **Build new work on top of that foundation**: Finally, add any custom project styles built from Design System code.

    After you've loaded the USWDS source code, you can build new styles with USWDS design tokens, functions, and mixins. For the purposes of this guide, we won’t get into custom code, but the important thing to understand is that any custom code should follow the settings configuration and USWDS source code in your Sass entry point.

{:.site-note}
**Note:** USWDS relies on [Autoprefixer](https://github.com/postcss/autoprefixer) to make its compiled CSS browser-compatible. If your compiler does not already use Autoprefixer, we strongly encourage that you add it to your project.

## Using uswds-compile
Complete the following steps to install, configure, and use `uswds-compile`:

### Step 1: Install uswds-compile

From your project’s root, run the following command to install `uswds-compile`:

```bash
npm install @uswds/compile --save-dev
```

### Step 2: Create a gulpfile

If your project does not yet have a `gulpfile.js` file, create one at the root of your project by running this command:

```
touch gulpfile.js
```

This file will need to do the following:

1. [Import the `@uswds/compile` package](#step-3-import-the-uswds-compile-package)
2. [Set the project's USWDS version](#step-4-set-uswds-version)
3. [Set custom project path settings](#step-5-customize-path-settings)
4. [Export the Gulp functions and/or tasks you need](#step-6-export-compile-functions)

As an example, a simple `gulpfile.js` may read as follows:

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
uswds.paths.dist.theme = './sass/uswds';

/**
* Exports
* Add as many as you need
*/
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
```


### Step 3: Import the uswds-compile package

Once your `gulpfile.js` is created, add the following line at the top of the file to pull in `uswds-compile`:

```js
const uswds = require("@uswds/compile");
```

### Step 4: Set USWDS version

Next, declare which major version of USWDS your project uses by defining `settings.version`. This configuration tells Gulp where to find USWDS source files in the `node_modules` directory. This setting currently accepts values of the numbers `2` and `3` to represent USWDS 2.X and 3.X, respectively.

For example, you would include this line if your project uses USWDS 3:
```js
uswds.settings.version = 3;
```

### Step 5: Customize path settings

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
`paths.src.projectSass` | `"./sass"` | `"./sass"` | Source location of any existing project Sass files outside of <br/>`paths.dist.theme`. The `watch` script will watch this <br>directory for changes.
`paths.src.projectIcons` | `""` | `""` | Source location of any additional project icons to include in the icon sprite. <br/>(Use _only_ these project icons in the sprite by setting `sprite.projectIconsOnly` to `true`.) |
`paths.dist.theme` | `"./sass"` | `"./sass"` | Project destination for theme files (Sass entry point and <br>settings)
`paths.dist.img` | `"./assets/uswds/images"` | `"./assets/uswds/images"` | Project destination for images
`paths.dist.fonts` | `"./assets/uswds/fonts"` | `"./assets/uswds/fonts"` | Project destination for fonts
`paths.dist.js` | `"./assets/uswds/js"` | `"./assets/uswds/js"` | Project destination for compiled JavaScript
`paths.dist.css` | `"./assets/uswds/css"` | `"./assets/uswds/css"` | Project destination for compiled CSS
`sprite.projectIconsOnly` | `false` | `false` | Include _only_ the icons in `paths.src.projectIcons` in the icon sprite

</div>

**paths.src:** The `paths.src` settings tell Gulp where to _find_ USWDS source files. The default values point to directories in the `uswds` node module that you installed during [Phase 1 of this guide]({{ site.baseurl }}/documentation/getting-started/developers/phase-one-install/).

Note that the `paths.src` defaults are different for USWDS 2 and USWDS 3. `uswds-compile` chooses which set of defaults to use based on the USWDS version  defined in `settings.version` in [step 4](#step-4-set-uswds-version).

**paths.dist**: The `paths.dist` settings tell Gulp where to _put_ assets in your project.

For example, if you wanted to tell Gulp to compile CSS into your project's `./assets/css` directory and also copy USWDS theme files into your project's `./sass/uswds` directory, you'd include these lines in your `gulpfile.js`:

```js
uswds.paths.dist.css = './assets/css';
uswds.paths.dist.theme = './sass/uswds';
```

One helpful way to look at these path settings is that the `paths.src` settings are specific to the Design System; the `paths.dist` settings are specific to your project.

### Step 6: Export compile functions

Once your paths are set, export `uswds-compile` functions in your project's `gulpfile.js` to use them in your project. The following table summarizes the functions that are available for export:

Function | Description
--- | ---
`compile` | `compileSass` + `compileIcons`
`compileIcons` | Build the USWDS icon sprite into `paths.dist.img`
`compileSass` | Compile Sass into `paths.dist.css`
`default` | `watch`
`copyAll` | `copyTheme` + `copyAssets`
`copyAssets` | Copies all static assets: `copyFonts` + `copyImages` + `copyJS`
`copyFonts` | Copy USWDS fonts to `paths.dist.fonts`
`copyImages` | Copy USWDS images to `paths.dist.img`
`copyJS` | Copy USWDS compiled JavaScript to `paths.dist.js`
`copyTheme` | Copy USWDS theme files (Sass entry point and settings files) from the `uswds` package to `paths.dist.theme`
`init` | `copyAll` + `compile`
`updateUswds` | `copyAssets` + `compile`
`watch` | Compiles, then recompiles when there are changes to Sass files in `paths.dist.theme` and `paths.src.projectSass`

For any function you defined as an `export` in your `gulpfile.js`, you can run `npx gulp [function]`.

For example, if you wanted to have the ability to tell Gulp to compile your Sass, you'd need to first export the `compile` task for your project by adding this line to your `gulpfile.js`:

```
exports.compile = uswds.compile;
```

Once exported, you can compile your code by running the following in the command line from your project root:

```
npx gulp compile
```

### Step 7: Initialize your project

When your `gulpfile.js` is ready, initialize your project to copy all the necessary Sass, image, font, and Javascript assets from the USWDS source code.

If you defined the `init` export in [Step 6](#step-6-export-compile-functions), you can initialize your project and get started by running the following command:

```bash
npx gulp init
```

This command will add all the USWDS assets to the directories you set, add a project Sass entry point, and compile USWDS into CSS. Add this CSS file to the `<head>` of your project HTML.

{: .site-note }
**Note:** Use `init` only once. The `init` task is meant for initializing the design system on a project. Since it will overwrite project files (like settings files and the Sass entry point), use it sparingly and don't use it for updating the design system on a project, or at any point after you've customized your settings files.

If you receive the error `replaceAll is not a function` when trying to run `npx gulp init`, please verify you are using the version of Node specified in the [.nvmrc file](https://github.com/uswds/uswds/blob/main/.nvmrc) and run the command again.

### Step 8: Verify successful installation

Any time you want to recompile your CSS, run `npx gulp compile` from the command line in your project root.

You should see a successful compile message.

```bash
[10:10:10] Finished 'buildSass' after 5.02 s
[10:10:10] Finished 'compileSass' after 5.03 s
```

To verify whether you’ve successfully installed USWDS and that compilation is working, we recommend confirming the directory structure matches the paths you have updated in `gulpfile.js`, copying a few [components]({{ site.baseurl }}/components/overview/), pasting them into an HTML page, and then visiting that page in the browser to see if the components appear as expected.

**Next:** [Phase 3: Customize]({{ site.baseurl }}/documentation/getting-started/developers/phase-three-customize/) →
