---
permalink: /documentation/migration/
layout: styleguide
title: Migrating to USWDS 3.0
lead: Migrate to USWDS 3.0 for Sass Module support and an unbundled design system with minimal upgrade effort
category: How to use USWDS
subnav:
- text: Why migrate to USWDS 3.0?
  href: '#why-migrate-to-uswds-30'
- text: How to use this guide
  href: '#how-to-use-this-guide'
- text: Migration overview
  href: '#migration-overview'
- text: 1. Check your current USWDS code and settings versions
  href: '#1-check-your-current-uswds-code-and-settings-versions'
- text: 2. Integrate latest USWDS 2 changes
  href: '#2-integrate-latest-uswds-2-changes'
- text: 3. Install the USWDS 3.0 package
  href: '#3-install-the-uswds-30-package'
- text: 4. Update your Sass compiler settings and recompile CSS
  href: '#4-update-your-sass-compiler-settings-and-recompile-css'
- text: 5. Update to Sass module syntax
  href: '#5-update-to-sass-module-syntax'
- text: 6. Find which settings from your theme files you’ve customized.
  href: '#6-find-which-settings-from-your-theme-files-youve-customized'
- text: 7. Optimize your installation with component packages
  href: '#7-optimize-your-installation-with-component-packages'
---

## Why migrate to USWDS 3.0?

{:.border-top-2px.border-base-lighter.padding-top-1}
**Use modern Sass syntax before the old syntax loses official support.** USWDS stylesheets are written in a language called Sass. This language updated its syntax in 2020 and the old syntax is now deprecated. Sass will no longer support the old syntax starting in October 2022. We want teams to use source code with reliable support throughout the life of their project.

**Improve performance and reduce the size of your project CSS.** Using USWDS 3.0 with the new Sass syntax — called Sass module syntax — allows teams to unbundle their implementations of USWDS and use only the components and code that they need on their project. Depending on your project, this could mean significant reduction of CSS code you ship. This means faster load times, better scores in performance evaluation tools, and a better developer experience. 

**Stay up-to-date with minimal hassle.** We want teams to benefit from the most current version of USWDS. Many projects should be able to migrate from USWDS 2 to USWDS 3.0 in about an hour or less. This new version makes no markup or style changes from USWDS 2.13.3. If you already use USWDS 2.13.0 or later, you should be able to update to USWDS 3.0 in a matter of minutes. Additionally, the under-the-hood changes we're introducing in USWDS 3.0 will make it easier to stay up-to-date with USWDS over time. An incremental update now will make subsequent updates simpler as well. 

## How to use this guide

{:.border-top-2px.border-base-lighter.padding-top-1}
For the purposes of this guide, make markup changes for all entries that match your code version situation and make settings changes for all entries that match your settings version situation. For example, if your code is USWDS 2.12.2 and your settings are USWDS 2.11.0, check your markup against the **Changes in 2.13.0** section only, and check your settings against the **Changes in 2.13.0** and **Changes in 2.12.0** sections.

## Migration Overview

<!-- add links -->

{:.border-top-2px.border-base-lighter.padding-top-1}
1. [Check your current USWDS code and settings versions](#1-check-your-current-uswds-code-and-settings-versions)
2. [Integrate latest USWDS 2.x changes](#2-integrate-latest-uswds-2-changes)
3. [Install the USWDS 3.0 package](#3-install-the-uswds-30-package)
4. [Update your Sass compiler settings and recompile CSS](#4-update-your-sass-compiler-settings-and-recompile-css)
5. <span class="usa-tag bg-primary">Recommended</span> [Update to Sass module syntax](#5-update-to-sass-module-syntax)
6. <span class="usa-tag bg-primary">Recommended</span> [Find which settings from your theme files you’ve customized](#6-find-which-settings-from-your-theme-files-youve-customized)
7. <span class="usa-tag bg-secondary">Optional</span> [Optimize your installation with component packages](#7-optimize-your-installation-with-component-packages)

### 1. Check your current USWDS code and settings versions

{:.border-top-2px.border-base-lighter.padding-top-1}
Check your project's `package.json` file and your project's `_uswds-theme` files. Your package.json file will display the version of USWDS in a line like `"uswds": "^2.12.2"`. Your theme files will have a version number at the top, under the image of the American flag. Your code and your theme files may have different versions. 

{:.site-terminal}
```json
/* package.json */

"devDependencies": {
  "uswds": "^2.12.2"
}
```

{:.site-terminal}
```scss
/* _uswds-theme-spacing.scss */

/*
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
========================================
========================================
========================================
----------------------------------------
USWDS 2.12.2
----------------------------------------
SPACING SETTINGS
----------------------------------------
Read more about settings and
USWDS spacing units tokens in the
documentation:
https://designsystem.digital.gov/design-tokens/spacing-units
----------------------------------------
*/
```


### 2. Integrate latest USWDS 2 changes

{:.border-top-2px.border-base-lighter.padding-top-1}
**Note:** This is probably the most labor-intensive part of the process.

Since USWDS 3.0 is based on the USWDS 2.13.3, any markup migration comes from migrating from your current version to 2.13.3. If you're already up-to-date, this won't take any time at all, but there have been some changes that might be breaking changes for your project over the course of the USWDS 2 branch. 

These steps will help you do any preliminary migration, before updating to USWDS 3.0.

<div class="usa-accordion usa-accordion--bordered">
  <!-- Use the accurate heading level to maintain the document outline -->
  <h4 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-controls="m-a1"
    >
      If you have code older than USWDS 2.13.0
    </button>
  </h4>
  <div id="m-a1" class="usa-accordion__content site-prose" markdown="1">

##### <span class="usa-tag bg-accent-cool-darker">Markup</span> Update any instance of the small search button.

You'll need to update any instances of the small search button on your site. We're now using explicit images to better support legibility in instances where icons do not load. 

###### What to do
1. Check your codebase for instances of `<span class="usa-sr-only">Search</span>`.
1. Update the markup from the old version to the new version if you use it.

###### Old

{:.site-terminal}
```html
<button class="usa-button" type="submit">
  <span class="usa-sr-only">Search</span>
<button>
```

###### New

{:.site-terminal}
```html
<button class="usa-button" type="submit">    
  <img 
    src="{% raw %}{{ uswds image path }}{% endraw %}/usa-icons-bg/search--white.svg" 
    class="usa-search__submit-icon" 
    alt="Search" />
</button>
```

##### <span class="usa-tag bg-accent-cool-darker">Markup</span> Update social media icons in the footer.

You'll need to update social media icons in the USWDS footer. We're now using explicit images to better support legibility in instances where icons do not load. 

###### What to do:

1. Check your codebase for instances of `usa-social-link.`
1. If you use it, Update the markup from the old version to the new version.

###### Old code

{:.site-terminal}
```html
<a class="usa-social-link usa-social-link--facebook" 
  href="{% raw %}{{ link }}{% endraw %}">
  <span>Facebook</span>
</a>
<a class="usa-social-link usa-social-link--twitter" 
  href="{% raw %}{{ link }}{% endraw %}">
  <span>Twitter</span>
</a>
<a class="usa-social-link usa-social-link--youtube" 
  href="{% raw %}{{ link }}{% endraw %}">
  <span>YouTube</span>
</a>
<a class="usa-social-link usa-social-link--instagram" 
  href="{% raw %}{{ link }}{% endraw %}">
  <span>Instagram</span>
</a>
<a class="usa-social-link usa-social-link--rss" 
  href="{% raw %}{{ link }}{% endraw %}">
  <span>RSS</span>
</a>
```

###### New code

{:.site-terminal}
```html
<a class="usa-social-link" 
  href="{% raw %}{{ link }}{% endraw %}">
  <img 
    class="usa-social-link__icon" 
    src="/usa-icons-bg/search--whi/usa-icons/facebook.svg" 
    alt="Facebook" />
</a>
<a class="usa-social-link" 
  href="{% raw %}{{ link }}{% endraw %}">
  <img 
    class="usa-social-link__icon" 
    src="/usa-icons-bg/search--whi/usa-icons/twitter.svg" 
    alt="Twitter" />
</a>
<a class="usa-social-link" 
  href="{% raw %}{{ link }}{% endraw %}">
  <img 
    class="usa-social-link__icon" 
    src="/usa-icons-bg/search--whi/usa-icons/youtube.svg" 
    alt="YouTube" />
</a>
<a class="usa-social-link" 
  href="{% raw %}{{ link }}{% endraw %}">
  <img 
    class="usa-social-link__icon" 
    src="/usa-icons-bg/search--whi/usa-icons/instagram.svg" 
    alt="Instagram" />
</a>
<a class="usa-social-link" 
  href="{% raw %}{{ link }}{% endraw %}">
  <img 
    class="usa-social-link__icon" 
    src="/usa-icons-bg/search--whi/usa-icons/rss_feed.svg" 
    alt="RSS" />
</a>
```
  </div>

  <h4 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-controls="m-a2"
    >
      If you have code older than USWDS 2.12.0
    </button>
  </h4>
  <div id="m-a2" class="usa-accordion__content usa-prose">
    <p>
      <strong><span class="usa-tag bg-accent-warm-darker">Settings</span> We deprecated three settings.</strong> Each of the following settings is no longer set-able. If you use any of these settings, they will no longer reflect your intention. These are the deprecated settings: 
    </p>
    <ul>
      <li>
        <strong>deprecated:</strong> $theme-input-tile-background-color-selected<br>
        <strong>default:</strong> "primary-lighter"
      </li>
      <li>
        <strong>deprecated:</strong> $theme-input-tile-border-color<br>
        <strong>default:</strong> "base-lighter"
      </li>
      <li>
        <strong>deprecated:</strong> $theme-input-tile-border-color-selected<br>
        <strong>default:</strong> "primary-lighter"
      </li>
    </ul>
    <p><strong>What to do: </strong></p>
    <ul>
      <li>Check this list to see if you changed the default value.</li>
      <li>If you did change the default value, this change will no longer affect the input tile. </li>
      <li>Assure that the input tile still displays well: check your codebase for instances of <strong>input--tile</strong>.</li>
      <li>Check the affected part of your site if you get a match.</li>
    </ul>
    <p>
      <strong><span class="usa-tag bg-accent-warm-darker">Settings</span> We updated three settings defaults.</strong> If you use any of these settings in your code, the output will change:
    </p>
    <ul>
      <li>
        <strong>new:</strong> $theme-color-success-dark: green-cool-50v<br>
        <strong>old:</strong> green-cool-50
      </li>
      <li>
        <strong>new:</strong> $theme-color-success-darker: green-cool-60v<br>
        <strong>old:</strong> green-cool-80
      </li>
    </ul>
    <p><strong>What to do: </strong></p>
    <ol>
      <li>Check your codebase for any old settings.</li>
      <li>If you find any instance of these variables outside of the settings files, check the part of your site that they affect.</li>
    </ol>
  </div>
  
  <h4 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-controls="m-a3"
    >
      If you have code older than USWDS 2.11.2
    </button>
  </h4>
  <div id="m-a3" class="usa-accordion__content usa-prose">
    <p>
      <strong><span class="usa-tag bg-accent-warm-darker">Settings</span> We deprecated the $theme-site-max-width variable.</strong> We're using <strong>$theme-grid-container-max-width</strong> instead.  
    </p>
    <p><strong>What to do:</strong></p>
    <ol>
      <li>TK</li>
      <li>TK</li>
      <li>TK</li>
    </ol>
    <p><strong><span class="usa-tag bg-accent-cool-darker">Markup</span> We replaced the `thumb_down_off_alt` icon with `thumb_down_alt`" in our default icon sprite. </strong></p>
    <p><strong>What to do:</strong></p>
    <ol>
      <li>Search for any instances of <strong>thumb_down_off_alt</strong></li>
      <li>Replace it with <strong>thumb_down_alt</strong></li>
    </ol>
  </div>
  
  <h4 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-controls="m-a4"
    >
      If you have code older than USWDS 2.11.0
    </button>
  </h4>
  <div id="m-a4" class="usa-accordion__content usa-prose">
    <p><strong>We updated some settings defaults:</strong></p>
    <ul>
      <li>
        <strong>new:</strong> $theme-alert-icon-size: 4<br>
        <strong>old:</strong> 5
      </li>
      <li>
        <strong>new:</strong> $theme-table-border-color: default<br>
        <strong>old:</strong> ink
      </li>
      <li>
        <strong>new:</strong> $theme-table-header-text-color: default<br>
        <strong>old:</strong> ink
      </li>
      <li>
        <strong>new:</strong> $theme-table-stripe-text-color: default<br>
        <strong>old:</strong> ink
      </li>
      <li>
        <strong>new:</strong> $theme-table-text-color: default<br>
        <strong>old:</strong> ink
      </li>
    </ul>
    <p><strong>What to do: </strong></p>
    <ol>
      <li>Search your codebase for any instances of <strong>the old theme</strong></li>
      <li>Replace it with <strong>the new setting</strong></li>
    </ol>
  </div>
  
  <h4 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-controls="m-a5"
    >
      If you have code older than USWDS 2.10.1
    </button>
  </h4>
  <div id="m-a5" class="usa-accordion__content usa-prose">
    <p><strong><span class="usa-tag bg-accent-warm-darker">Settings</span> We updated some settings defaults:</strong></p>
    <ul>
      <li>
        <strong>Updated: </strong>$theme-breadcrumb-background-color: default<br>
        <strong>Was: </strong>white 
      </li>
      <li>
        <strong>Updated: </strong>$theme-alert-icon-size: 5 <br>
        <strong>Was: </strong>4
      </li>
    </ul>
    <p><strong>What to do:</strong></p>
    <ol>
      <li>Search your codebase for any instances of <strong>the old theme</strong></li>
      <li>Replace it with <strong>the new setting</strong></li>
    </ol>
    <p><strong><span class="usa-tag bg-accent-cool-darker">Markup</span> We updated usa-footer__logo-heading to use a p instead of an h3.</strong> We improved the accessibility of the footer by converting a non-semantic heading into paragraph text.</p>
    <p><strong>What to do: </strong></p>
    <ol>
      <li>TK</li>
      <li>TK</li>
    </ol>
  </div>
</div>

### 3. Install the USWDS 3.0 package

{:.border-top-2px.border-base-lighter.padding-top-1}
1. In a terminal window, navigate to your project root. 
2. Install USWDS 3.0 with **npm install @uswds/uswds --save --save-exact**
3. Uninstall USWDS 2 with **npm uninstall uswds**

### 4. Update your Sass compiler settings and recompile CSS

{:.border-top-2px.border-base-lighter.padding-top-1}
The location of the USWDS source files is different in USWDS 3.0. You'll need to update your compiler settings to compile your Sass from USWDS 3.0.

<div class="usa-accordion usa-accordion--bordered">
  <!-- Use the accurate heading level to maintain the document outline -->
  <h4 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-controls="m-a6"
    >
      If you're using USWDS Gulp
    </button>
  </h4>
  <div id="m-a6" class="usa-accordion__content usa-prose">
    <ol>
      <li>Search for a line like <strong>const USWDS = "node_modules/uswds/dist"</strong> in your Gulp setup. This indicates that you're using the Gulp setup we distributed as USWDS Gulp.</li>
      <li>
        Update the USWDS <strong>const</strong> to the updated uswds package location
        <p><strong>Old</strong></p>
          <code>const USWDS = "node_modules/uswds/dist";</code>
        <p><strong>New</strong></p>
          <code>const USWDS = "node_modules/@uswds/uswds";</code>
          <br>
      </li>
      <li> 
        Search for <strong>includePaths</strong> in your project's Gulp files. The paths in this list are where the Sass compiler looks for your source files. In USWDS 3.0
        <p><strong>Old</strong></p>
        <pre><code>.pipe(
  sass({
    includePaths: [
      PROJECT_SASS_SRC,
      `${USWDS}/scss`,
      `${USWDS}/scss/packages`,
    ],
  })
)</code></pre>
        <p><strong>New</strong></p>
        <pre><code>.pipe(
  sass({
    includePaths: [
      PROJECT_SASS_SRC,
      `${USWDS},
      `${USWDS}/packages`,
    ],
  })
)</code></pre>
      </li>
      <li>Recompile your Sass as usual. When it compiles, it is now using USWDS 3.0!</li>
    </ol>
  </div>

  <h4 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-controls="m-a7"
    >
      If you're using USWDS Compile
    </button>
  </h4>
  <div id="m-a7" class="usa-accordion__content usa-prose"  markdown="1">
```
/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 */

uswds.settings.version = 3;
```
  </div>
  <h4 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-controls="m-a8"
    >
      If you're using a custom Gulp workflow
    </button>
  </h4>
  <div id="m-a8" class="usa-accordion__content usa-prose">
    TK   
  </div>

  <h4 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-controls="m-a9"
    >
      If you're using Webpack
    </button>
  </h4>
  <div id="m-a9" class="usa-accordion__content usa-prose">
    TK   
  </div>
</div>

### 5. <span class="usa-tag bg-primary">Recommended</span> Update to Sass module syntax

{:.border-top-2px.border-base-lighter.padding-top-1}
USWDS 3.0 supports the deprecated Sass import syntax. You don't need to change to the new syntax in your project Sass to use USWDS 3.0. But once you update, we recommend updating to the new syntax as well.  You’ll need to both switch @import to @use, and then create @use project-specific settings.  In USWDS 3.0 with Sass modules, instead of having multiple theme files that contain every setting available to the design system, you only keep track of the settings you changed in a single file. 

We recommend creating a new file to keep track of these changed settings. These instructions will help you create that file, format it properly, and use it in your project. 

You can complete these changes by taking the following steps: 

1. Replace all instances of **@import** with **@forward**, using find/replace in your Sass file.
2. Locate your existing project theme files. These are the _uswds-theme files that you found in [Step 1: Check your current USWDS code and settings versions](#1-check-your-current-uswds-code-and-settings-versions). (If you already have your project-specific settings file in a single file, you can skip ahead Step 4. If not, you'll need to collect your project-specific settings in a single file.)
3. In the project theme file directory directory, create a new file called **_uswds-theme.scss**.

### 6. <span class="usa-tag bg-primary">Recommended</span> Find which settings from your theme files you've customized.

{:.border-top-2px.border-base-lighter.padding-top-1}
We think the best way to accomplish this is with a series of diffs against the default theme files. Running a diff comparing your theme files to the default theme should reveal which of these settings you've modified. 

The bad thing about this process is that it can be tedious. The good thing is that you only have to do it once, and then you'll have a small, manageable project theme file that can be your baseline moving forward. And you'll never again have to worry about overwriting your settings files when you update to a new version of the design system.

We'll use an online diff service like [quickdiff.net](https://quickdiff.net/), [diffchecker.com](https://diffchecker.com), or [text-compare.com](https://text-compare.com/).

Each of the files [below](#current-settings-as-of-uswds-2132) is the most current version of the USWDS default settings. For each of these files, use the diff tool to find the differences between your settings file and the current defaults.

Look for instances where your project has a different value than the default. Ignore cases where a setting exists in the current version but not in your version. This indicates a new setting that probably does not apply to your project. Instances where a setting exists in your version but not in the current version can likely be ignored. This usually indicates a deprecated setting that should not affect your project, but it can be worth checking to see if that variable appears anywhere else in your codebase!

When you see a setting that appears different from the current default, this is probably one of your project's custom settings. Copy this setting and add it to your new **_uswds-theme.scss** file.

At the end of this process, your new **_uswds-theme.scss** file will look something like the following:

<pre><code>$theme-image-path: "../uswds/img";
$theme-font-path: "../uswds/fonts";
$theme-show-compile-warnings: false;
$theme-show-notifications: false;
$theme-focus-color: "blue-50v";
$theme-global-paragraph-styles: true;
$theme-global-link-styles: true;
$theme-global-content-styles: true;
$theme-utility-breakpoints: (
  "card": false,
  "card-lg": true,
  "mobile": true,
  "mobile-lg": true,
  "tablet": true,
  "tablet-lg": true,
  "desktop": true,
  "desktop-lg": true,
  "widescreen": true
);</code></pre>

#### Current settings (as of USWDS 2.13.2)

[_uswds-theme-color.scss](https://raw.githubusercontent.com/uswds/uswds/release-2.13.2/src/stylesheets/theme/_uswds-theme-color.scss) → <br>
[_uswds-theme-components.scss](https://raw.githubusercontent.com/uswds/uswds/release-2.13.2/src/stylesheets/theme/_uswds-theme-components.scss) → <br>
[_uswds-theme-general.scss](https://raw.githubusercontent.com/uswds/uswds/release-2.13.2/src/stylesheets/theme/_uswds-theme-general.scss) → <br>
[_uswds-theme-spacing.scss](https://raw.githubusercontent.com/uswds/uswds/release-2.13.2/src/stylesheets/theme/_uswds-theme-spacing.scss) → <br>
[_uswds-theme-typography.scss](https://raw.githubusercontent.com/uswds/uswds/release-2.13.2/src/stylesheets/theme/_uswds-theme-typography.scss) → <br>
[_uswds-theme-utilities.scss](https://raw.githubusercontent.com/uswds/uswds/release-2.13.2/src/stylesheets/theme/_uswds-theme-utilities.scss) → <br>

<ol>
  <li>
    Once you have all your project-specific settings in a single file, we'll load these customizations into the USWDS core engine. We do this with a special <strong>@use</strong> statement:
<pre><code>@use "uswds-core" with (
  <strong>&#123;&#123; your settings &#125;&#125;</strong>
);</code></pre>
    In the previous example, <strong>&#123;&#123; your settings &#125;&#125;</strong> would be a list of all the settings variables in your settings file.
    <br>
    So with an existing settings file like the following:
    <pre><code>$theme-image-path: "../uswds/img";
$theme-font-path: "../uswds/fonts";
$theme-show-compile-warnings: false;
$theme-show-notifications: false;
$theme-focus-color: "blue-50v";
$theme-global-paragraph-styles: true;
$theme-global-link-styles: true;
$theme-global-content-styles: true;
$theme-utility-breakpoints: (
  "card": false,
  "card-lg": true,
  "mobile": true,
  "mobile-lg": true,
  "tablet": true,
  "tablet-lg": true,
  "desktop": true,
  "desktop-lg": true,
  "widescreen": true
);</code></pre>

    We'd update it to use <strong>@use</strong> with the following:

<pre><code>@use "uswds-core" with (
$theme-image-path: "../uswds/img",
$theme-font-path: "../uswds/fonts",
$theme-show-compile-warnings: false,
$theme-show-notifications: false,
$theme-focus-color: "blue-50v",
$theme-global-paragraph-styles: true,
$theme-global-link-styles: true,
$theme-global-content-styles: true,
$theme-utility-breakpoints: (
  "card": false,
  "card-lg": true,
  "mobile": true,
  "mobile-lg": true,
  "tablet": true,
  "tablet-lg": true,
  "desktop": true,
  "desktop-lg": true,
  "widescreen": true
  ),
);</code></pre>

    Note that the new <strong>@use</strong> statement is a <strong>list</strong> of variables, so each line ends in a comma (,) instead of a semicolon (;).
  </li>
  <li>
    Almost there! The last thing we have to do is make sure we use this new theme file in our project. If your project already was using a project-specific theme settings file, you're all set. If not, you'll need to open your project's Sass entry point, typically <strong>styles.scss</strong>. It usually looks something like this:

<pre><code>/*
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
========================================
========================================
========================================
*/

// -------------------------------------
// Import individual theme settings

@forward "uswds-theme-general";
@forward "uswds-theme-typography";
@forward "uswds-theme-spacing";
@forward "uswds-theme-color";
@forward "uswds-theme-utilities";

// components import needs to be last
@forward "uswds-theme-components";

...</code></pre>

    In USWDS 3.0, we won't use multiple theme files, just a single file with all the project-specific settings. So we can remove all the individual theme settings from our Sass entry point and replace them with a single <strong>@use</strong> statement, using the project-specific settings file, like so:

<pre><code>/*
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
========================================
========================================
========================================
*/

// -------------------------------------
// Import individual theme settings

@forward "uswds-theme"; // or whatever your theme file is named

...</code></pre>

    Now your project is using its theme settings in the proper USWDS 3.0 format!
  </li>
</ol>

### Use "uswds-core" for any custom USWDS Sass

{:.border-top-2px.border-base-lighter.padding-top-1}
Sass Module syntax requires that files must note the source of any tokens, variables, mixins, functions, or placeholders used in that file. 

This is relatively straightforward for USWDS 3.0 Sass: For any project stylesheet that uses USWDS tokens, variables, mixins, functions, or placeholders (that's probably most, if not all, of them!), add the following line at the top of the file:

<code>@use "uswds-core" as *;</code>

In USWDS 3.0, **uswds-core** is the name of the package (or "module" in Sass terminology) that contains all the tokens, variables, mixins, functions, or placeholders used in USWDS Sass. If your project uses tokens, variables, mixins, functions, or placeholders defined outside of USWDS, you'll need to @use these as well at the top of the document. This includes Sass-specific functions. See [https://sass-lang.com/documentation/modules](https://sass-lang.com/documentation/modules) for more information, if your project uses any of Sass's built-in functions.

Once each of your custom sass files include the **@use "uswds-core" as *;** line at the top, you should be done!

Recompile your Sass and check for errors.

### 7. <span class="usa-tag bg-secondary">Optional</span> Optimize your installation with component packages

{:.border-top-2px.border-base-lighter.padding-top-1}
By default, a USWDS installation includes every component available to the design system. But most projects don't use all these components. USWDS 3.0 allows teams to use only the components you need for your project, through the idea of component packages.

A component package is a self-contained module that includes only code related to a specific component. In addition to an omnibus **uswds** package, USWDS 3.0 includes packages for every component available in the design system, and for some features (like fonts) that are common to many components. 

Using individual component packages instead of the **uswds** bundle package can result in a significant reduction in the size of your project CSS and noticeable improvements to compile time.

### Using packages

{:.border-top-1px.border-base-lighter.padding-top-1}
Include USWDS packages in your Sass entry point to add them to your project. By default, USWDS projects forward the **uswds** package to include all the styles available to the design system. You will see a line like the following in your Sass entry point when you're using the **uswds** package:

<code>@forward "uswds";</code>

This adds styles to your project. But the **uswds** package is a bundle of many individual component packages. You probably don't need them all! We can unbundle the design system and include only the packages your project needs by replacing the **uswds** \`forward\` with a \`forward\` for each of the component packages included in your site templates.

An example of using replacing the **uswds** package with individual component packages in your Sass entry point would look something like this:

<pre><code><s>@forward "uswds";</s>

@forward "usa-accordion";
@forward "usa-banner";
@forward "usa-button";
@forward "usa-footer";
@forward "usa-header";
@forward "usa-prose";

@forward "uswds-form-controls";</code></pre>

#### Available packages 

{:.border-top-2px.border-base-lighter.padding-top-1}
The following packages are available to any USWDS project. Each package includes component styles related to the package name, and additional styles related to any component dependencies.

For any package listed below, add a **@forward "[package]"** line to your Sass entry point. For instance, if you wanted to add the **usa-accordion** package, add the following line:

`@forward "usa-accordion";`

TK: Package + Dependencies Table

### Determine which packages your project needs

{:.border-top-1px.border-base-lighter.padding-top-1}
The process of determining which packages your project needs is not automatic. Most projects will need to do a little work to identify the components their project uses.

#### Brute-force: Search for component class names

{:.border-top-1px.border-base-lighter.padding-top-1}
A brute-force method to determine which packages your project uses is to search your codebase for use of a key class name associated with that component, like "usa-accordion" for accordions. All **usa-** prefixed packages use the same name as their CSS class. 

If you find a hit for the class name in your codebase, include the relevant package in your Sass entry point. 

For instance, if you found **usa-banner, usa-identifier, usa-button**, and **usa-accordion**, you might attach the following packages in your Sass entry point: 

<pre><code>@forward "usa-accordion";
@forward "usa-banner";
@forward "usa-button";
@forward "usa-identifier";</code></pre>

Each package is smart enough to include any dependent package it needs to display properly. For instance, the **usa-banner** package will load

#### Managing utility classes

{:.border-top-1px.border-base-lighter.padding-top-1}
Utility classes have their own naming conventions that are a bit less straightforward to identify. Look at the table below. If your codebase includes classes that start with one of the **class bases**, include its **utility module key** in the **$output-these-utilities setting**. 

Look for classes in your codebase for searching for a regular expression string like `[" ]flex-`.

For instance, if you found **add-list-reset, font-, order-,** and **display-**, you might use the following setting: 

<pre><code>$output-these-utilities: (
"add-list-reset",
"display",
"font",
"order"
),</code></pre>

TK: Utility module key table

### Further performance improvements

{:.border-top-1px.border-base-lighter.padding-top-1}
#### Update to the sass-embedded compiler

{:.border-top-1px.border-base-lighter.padding-top-1}
The **sass-embedded** package compiles Sass faster than the **gulp-sass** or **gulp-dart-sass** compiler.

In a gulp workflow, we recommend using `gulp-sass` and `sass-embedded` together for the simplest and fastest compiling.

<ol>
  <li>
    Install \`gulp-sass\` and \`sass-embedded\` in your project:<br>
    <code>npm install gulp-sass sass-embedded –s</code>
  </li>

  <li>
    Uninstall any other sass compiling packages, if they exist:
<pre><code>npm uninstall sass
npm uninstall gulp-dart-sass
npm uninstall gulp-sass</code></pre>
  </li>

  <li>
    In your Sass gulp tasks file, replace your existing sass compiler package import with **gulp-sass** and **sass-embedded:**
<pre><code><s>const sass = require("gulp-dart-scss");</s>

const sass = require("gulp-sass")(require("sass-embedded"));</code></pre>
  </li>

  <li>
    In your Sass gulp tasks file, remove any line that sets the sass.compiler:
    <code><s>sass.compiler = require("sass");</s></code>
  </li>

  <li>Recompile.</li>
</ol>

#### Reduce utility responsive breakpoints

{:.border-top-1px.border-base-lighter.padding-top-1}
There are nine responsive breakpoints available to utilities and the layout grid. These are defined in the **$theme-utility-breakpoints setting**. If a utility breakpoint is set to **true**, any layout grid class and any utility with its responsive key set to true will output responsive classes. 

This can result in bulky CSS, and if your project doesn't use these breakpoints you can save a lot of space by setting these breakpoints to false. By default, **mobile-lg**, **tablet**, and **desktop** are set to true:

```
$theme-utility-breakpoints: (
  "card": false,
  "card-lg": false,
  "mobile": false,
  "mobile-lg": true,
  "tablet": true,
  "tablet-lg": false,
  "desktop": true,
  "desktop-lg": false,
  "widescreen": false
),
```

For each breakpoint set to true in your project, search for its usage in your codebase by searching for the **breakpoint name** + a colon (:). SO, to search for the **tablet-lg** breakpoint, search for desktop-lg:. If that breakpoint does not appear, you can set the value to **false**.

#### Using package source

{:.border-top-1px.border-base-lighter.padding-top-1}
Once you've optimized your project to use only the component packages you need, you can further optimize those packages. Each component package includes, by reference, code for any additional packages it depends on. You can improve performance by manually forwarding all your project component's dependencies, then pointing your Sass entry point directly at each package source, bypassing each package's dependency import.

For example, according to the table in [Available packages, above](#available-packages), the **usa-banner** component includes the following packages as dependencies: **usa-icon**, **usa-layout-grid**, **usa-media-block**, and **uswds-fonts**. Then we'll look at these dependencies' dependencies:

- **usa-icon** depends on **uswds-core**
- **usa-layout-grid** depends on **uswds-core**
- **usa-media-block** depends on **usa-layout-grid** and **uswds-fonts**
- **uswds-fonts** depends on **uswds-core**

Instead of simply forwarding the **usa-banner** component, you can import the component and all related dependencies directly. Note: We've used **uswds-core** already when we forwarded our settings, so we won't forward it again:

<pre><code><s>@forward "usa-banner";</s>

@forward "usa-banner";
@forward "usa-icon";
@forward "usa-layout-grid";
@forward "usa-media-block";
@forward "uswds-fonts";</code></pre>

Now, instead of pointing at the component packages, we can point directly at the component package source. For each usa- prefixed component package, append /src/styles to its name:

<pre><code>@forward "usa-banner<strong>/src/styles</strong>";
@forward "usa-icon<strong>/src/styles</strong>";
@forward "usa-layout-grid<strong>/src/styles</strong>";
@forward "usa-media-block<strong>/src/styles</strong>";
@forward "uswds-fonts";</code></pre>

When you recompile, you should see an improvement in compile time.

**Note:** This performance technique may cause issues when you update USWDS versions. Check the release notes for any new version to see if we've changed any package's dependencies, which we will indicate as a potential breaking change. 