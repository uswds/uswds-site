---
permalink: /documentation/getting-started/developers/phase-two-compile/
layout: styleguide
title: "Phase 2: Compile"
category: How to use USWDS
lead: Compile design system source code into browser-readable files
type: docs
subnav:
  - text: "Step 1: Set up your project’s Sass entry point"
    href: "#step-1-set-up-your-projects-sass-entry-point"
  - text: "Step 2: Install uswds-gulp"
    href: "#step-2-install-uswds-gulp"
  - text: "Step 3: Add configuration files"
    href: "#step-3-add-configuration-files"
  - text: "Step 4: Configure Gulp"
    href: "#step-4-configure-gulp"
  - text: "Step 5: Initialize your project"
    href: "#step-5-initialize-your-project"
  - text: "Step 6: Verify successful installation"
    href: "#step-6-verify-successful-installation"
---

USWDS source code is written in [Sass](https://sass-lang.com/), a powerful stylesheet language that builds automation, functions, and logic into CSS. Browsers can’t read native Sass files, so these files need to be compiled into CSS — usually a single CSS file — before we can use them. Basically, when you develop with USWDS, you do all your stylesheet work in Sass, then use a compiler to convert that Sass into CSS. We use [Gulp](https://gulpjs.com/), a task manager, to watch our directories for changes and compile our CSS whenever a change occurs. 

We’ve developed [`uswds-gulp`](https://github.com/uswds/uswds-gulp), a tool hosted on GitHub, to help teams install Gulp and get up and running as quickly as possible. In addition to compiling, `uswds-gulp` will also [autoprefix]({{ site.baseurl }}/documentation/developers/#sass-compilation-requirements) your CSS, minify it for performance, and add sourcemaps for easier debugging. If you project doesn't already have a Sass-compiling workflow in place, check out `uswds-gulp`.

The following steps use `uswds-gulp` to compile USWDS Sass.

## Step 1: Set up your project’s Sass entry point

{: .site-note }
**Note:** If you want `uswds-gulp` to set up a Sass entry point for you, you don't need to set up any files in Step 1 and can skip directly to [Step 2, below](#step-2-install-uswds-gulp). Step 1 gives some important context: why you need a Sass entry point, what it needs to include, and how to set one up manually.

A project often has many Sass files, but typically, there’s a single file that serves as the root — the “homepage” of the Sass — that links out to the others. This root file is also known as the “Sass entry point.” The Sass entry point is the most important stylesheet file in your project because it tells the compiler what source files make up your Sass codebase.

Your project’s Sass entry point is a simple file that only needs to do the following three tasks:
1. Include a USWDS [settings file]({{ site.baseurl }}/documentation/settings/) (or files)
2. Include the USWDS source code
3. Include your project’s custom Sass

Create an entry point called something like `index.scss` or `styles.scss`. Your entry point should look like the following example:

{:.site-terminal}
```scss
// Include a USWDS settings file (required)
@include "uswds-settings.scss";

// Point to the USWDS source code (required)
@include "./path/to/source/uswds";

// Include your project's custom Sass (optional)
@include "project-custom.scss";
```

In plain language, this code says:

- **Get the instructions**: Get the USWDS settings that tell the design system how to build the styles. Settings are the first thing you need to include.

  Any individual setting is a Sass variable. Each setting begins with the `$theme-` prefix, and we provide a list of all available settings [in the USWDS documentation]({{ site.baseurl }}/documentation/settings/) as well as examples [in the USWDS codebase](https://github.com/uswds/uswds/tree/main/src/stylesheets/theme). The following is an example of a simple settings file:

  {:.site-terminal}
  ```scss
  $theme-image-path:              "../uswds/img";
  $theme-show-compile-warnings:   false;
  $theme-color-primary-lightest:  "green-warm-10";
  $theme-color-primary-lighter:   "green-warm-20";
  $theme-color-primary-light:     "green-warm-30";
  $theme-color-primary:           "green-warm-50";
  $theme-color-primary-vivid:     "green-warm-50v";
  $theme-color-primary-dark:      "green-warm-60v";
  $theme-color-primary-darker:    "green-warm-70v";
  $theme-color-primary-darkest:   "green-warm-80";
  $theme-banner-background-color: "ink";
  $theme-banner-link-color:       "primary-light";
  $theme-banner-max-width:        "none";
  ```

- **Create the foundation**: Build all USWDS styles from these settings.

  The USWDS source code is the core of the design system. It contains all the styles for USWDS components as well as the design language of Sass tokens and functions used to build those components. USWDS source code has its own Sass entry point, which lives in the `node_modules` directory when you install USWDS with npm.

  The entry point itself is called `uswds.scss`, and it’s found in the `/dist/scss` directory of the USWDS npm package. When you install with npm, the complete path looks something is typically `./node_modules/uswds/dist/scss/uswds.scss`.

- **Build new work on top of that foundation**: Finally, add any custom project styles built from design system code.

  After you import the USWDS source code, you can build new styles with USWDS design tokens, functions, and mixins. For the purposes of this guide, we won’t get into custom code, but the important thing to understand is that any custom code should follow the settings and USWDS source code in your Sass entry point.

## Step 2: Install uswds-gulp
From your project’s root, run the following command to install `uswds-gulp` and all its dependencies:

{:.site-terminal}
```bash
npm install autoprefixer gulp gulp-replace sass del gulp-sass gulp-sourcemaps gulp-rename gulp-svg-sprite gulp-postcss postcss postcss-csso uswds uswds-gulp@github:uswds/uswds-gulp --save-dev
```

## Step 3: Add configuration files
Gulp needs the following two files to compile USWDS properly:
- **`gulpfile.js`**: This file tells Gulp where to look for your files and what to do with them.
- **`.browserslistrc`**: This file tells Gulp how to build the CSS so it works in all the browsers that USWDS supports.

We include these files in the `uswds-gulp` package. Install them in your project by copying them from the package into your project root. From the project root, run the following two commands separately:

{:.site-terminal}
```bash
cp node_modules/uswds-gulp/gulpfile.js .
cp node_modules/uswds-gulp/.browserslistrc .
```

## Step 4: Configure Gulp
Now, edit `gulpfile.js` to configure it for your project. Starting at line 37 in `gulpfile.js`, update the following settings — each of which needs a valid project directory (note: the sixth setting, `const SITE_CSS_DEST`, is only relevant if you are using Jekyll):

{:.site-terminal}
```js
// Project Sass source directory
// Where should we put the USWDS Sass theme files?
// Ex: PROJECT_SASS_SRC = "./stylesheets"
const PROJECT_SASS_SRC = "./path/to/project/sass";

// Images destination
// Where should we save USWDS image assets?
// Ex: IMG_DEST = "./assets/uswds/img"
const IMG_DEST = "./path/to/images/destination";

// Fonts destination
// Where should we save USWDS fonts?
// Ex: FONTS_DEST = "./assets/uswds/fonts"
const FONTS_DEST = "./path/to/fonts/destination";

// Javascript destination
// Where should we save USWDS javascript?
// Ex: JS_DEST = "./assets/uswds/js"
const JS_DEST = "./path/to/js/destination";

// Compiled CSS destination
// Where should we save compiled USWDS CSS?
// Ex: CSS_DEST = "./assets/uswds/css"
const CSS_DEST = "./path/to/css/destination";

// Site CSS destination
// Like the _site/assets/css directory in Jekyll, if necessary.
// If using, uncomment line 106
// Ex: SITE_CSS_DEST = "./_site/assets/uswds/css"
const SITE_CSS_DEST = "./path/to/site/css/destination";
```

Don’t include a trailing slash in any of these paths.

Save this file, and you’re ready to get started.

## Step 5: Initialize your project
Initialize your project to copy all the necessary image, font, and Javascript assets from the source code. Initialization will also add a Sass entry point called `styles.scss` in the directory you set as `PROJECT_SASS_SRC` (as outlined in Step 3) for your project.

{:.site-note}
**Note**: Initialization will overwrite files already in `PROJECT_SASS_SRC`.

Initialize your project and get started by running the following command:

{:.site-terminal}
```bash
npx gulp init
```

This command will add all the USWDS assets to the directories you set, add a project Sass entry point, and compile USWDS into CSS. Add this CSS file to the `<head>` of your project HTML.

## Step 6: Verify successful installation
Any time you want to recompile your CSS, run `npx gulp build-sass` from the command line in your project root.

To verify whether you’ve successfully installed USWDS and that compilation is working, we recommend confirming the directory structure matches the paths you have updated in `gulpfile.js`, copying a few [components]({{ site.baseurl }}/components/overview/), pasting them into an HTML page, and then visiting that page in the browser to see if the components appear as expected.

**Next:** [Phase 3: Customize]({{ site.baseurl }}/documentation/getting-started/developers/phase-three-customize/) →
