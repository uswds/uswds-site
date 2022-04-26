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
- text: 2. Install the USWDS 3.0 package
  href: '#2-install-the-uswds-30-package'
- text: 3. Update your Sass compiler settings and recompile CSS
  href: '#3-update-your-sass-compiler-settings-and-recompile-css'
- text: 4. Integrate any recent USWDS changes
  href: '#4-integrate-any-recent-uswds-changes'
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

**Stay up-to-date with minimal hassle.** We want teams to benefit from the most current version of USWDS. Many projects should be able to migrate from USWDS 2 to USWDS 3.0 in about an hour or less. This new version makes no markup or style changes from USWDS 2.13.3. If you already use USWDS 2.13.0 or later, you should be able to update to USWDS 3.0 in a matter of minutes. Additionally, the under-the-hood changes we're introducing in USWDS 3.0 will make it easier to stay up-to-date with USWDS over time. An incremental update now will make subsequent updates simpler. 

## How to use this guide

{:.border-top-2px.border-base-lighter.padding-top-1}
For the purposes of this guide, make markup changes for all entries that match your code version situation and make settings changes for all entries that match your settings version situation. For example, if your code is USWDS 2.12.2 and your settings are USWDS 2.11.0, check your markup against the **Changes in 2.13.0** section only, and check your settings against the **Changes in 2.13.0** and **Changes in 2.12.0** sections.

## Migration Overview

<!-- add links -->

{:.border-top-2px.border-base-lighter.padding-top-1}
1. [Check your current USWDS code and settings versions](#1-check-your-current-uswds-code-and-settings-versions)
1. [Install the USWDS 3.0 package](#2-install-the-uswds-30-package)
1. [Update your Sass compiler settings and recompile CSS](#3-update-your-sass-compiler-settings-and-recompile-css)
1. [Integrate any recent USWDS changes](#4-integrate-any-recent-uswds-changes)
1. <span class="usa-tag bg-primary">Recommended</span> [Update to Sass module syntax](#5-update-to-sass-module-syntax)
1. <span class="usa-tag bg-primary">Recommended</span> [Find which settings from your theme files you’ve customized](#6-find-which-settings-from-your-theme-files-youve-customized)
1. <span class="usa-tag bg-secondary">Optional</span> [Optimize your installation with component packages](#7-optimize-your-installation-with-component-packages)

### 1. Check your current USWDS code and settings versions

{:.border-top-2px.border-base-lighter.padding-top-1}
USWDS 3.0 uses the same styles, markup, and settings as USWDS 2.13.3. This means that if you're currently using a USWDS version older than 2.13.3, migrating to USWDS 3.0 may mean updating some of your markup and settings. 

So, before migrating, check the versions of both your existing USWDS code and its settings (since code and settings may be different).

Check your project's current `package.json` file and your project's `_uswds-theme` files. Your `package.json` file will display the version of USWDS in a line like `"uswds": "^2.12.2"`. Your theme files will have a version number at the top, under the image of the American flag. Your code and your theme files may have different versions. 

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

### 2. Install the USWDS 3.0 package

{:.border-top-2px.border-base-lighter.padding-top-1}
Once you've noted the version of USWDS you're currently using, you can update to the new USWDS package (`@uswds/uswds`) and remove the old one (`uswds`). 

1. In a terminal window, navigate to your project root. 
2. Install USWDS 3.0 with `npm install @uswds/uswds --save-exact`
3. Uninstall USWDS 2 with `npm uninstall uswds`

### 3. Update your Sass compiler settings and recompile CSS

{:.border-top-2px.border-base-lighter.padding-top-1}
USWDS 3.0 requires the use of [Load Paths](https://sass-lang.com/documentation/at-rules/use#load-paths) to compile properly. USWDS 3.0 load paths must include a path to the `packages` directory of the `@uswds/uswds` package, typically by setting an `IncludePaths` setting to something like `./node_modules/@uswds/uswds/packages`.

Add this load path to your compiler settings, or update any old paths if your compiler already has them. We've included guidance for a few common compiler setups.

<!--Start compiler accordion -->
<div class="usa-accordion usa-accordion--bordered">

<!-- Start USWDS Gulp section -->
<h4 class="usa-accordion__heading">
  <button class="usa-accordion__button" aria-controls="m-a6">
    If you're using USWDS Gulp
  </button>
</h4>
<div id="m-a6" class="usa-accordion__content site-prose">
  <ol>
    <li>Search for a line like <code>const uswds = require("./node_modules/uswds-gulp/config/uswds");</code> or <code>const uswds = "node_modules/uswds/dist"</code> in your Gulp setup. This indicates that you're using the Gulp setup we distributed as USWDS Gulp.</li>
    <li>Update the USWDS <code>const</code> elements to the updated USWDS package location:
      {% highlight diff -%}
- const pkg = require("./node_modules/uswds/package.json");
+ const pkg = require("./node_modules/@uswds/uswds/package.json");
      {%- endhighlight %}
    </li>
    <li><p>Search for references to <code>${uswds}</code> in the <code>includePaths</code> and <code>gulp.src()</code> found in your project’s Gulp files. These paths tell the Sass compiler where to look for USWDS source files.</p>
      <p>Some of our file directories have moved in USWDS 3.0, and it is necessary to point Gulp to the correct location inside <code>node_modules/@uswds/uswds</code>. Below are snippets from the standard USWDS Gulp references and their necessary updates:</p>
      {% highlight diff -%}
... 
- gulp.src(`${uswds}/scss/theme/**/**`) 
+ gulp.src(`${uswds}/dist/theme/**/**`) 
... 
- gulp.src(`${uswds}/fonts/**/**`) 
+ gulp.src(`${uswds}/dist/fonts/**/**`) 
... 
- gulp.src(`${uswds}/img/**/**`) 
+ gulp.src(`${uswds}/dist/img/**/**`) 
... 
- gulp.src(`${uswds}/js/**/**`) 
+ gulp.src(`${uswds}/dist/js/**/**`) 
... 
includePaths: [ PROJECT_SASS_SRC, 
- `${uswds}/scss`, 
+ `${uswds}/dist/scss`, 
- `${uswds}/scss/packages`, 
+ `${uswds}/packages`, 
],
      {%- endhighlight %}
    </li>
    <li>Recompile your Sass as usual. When it compiles, it is now using USWDS 3.0!</li>
  </ol>
</div>
<!-- End USWDS Gulp section --> 

<!-- Start USWDS Compile section -->
<h4 class="usa-accordion__heading">
  <button class="usa-accordion__button" aria-controls="m-a7">
    If you're using USWDS Compile
  </button>
</h4>
<div id="m-a7" class="usa-accordion__content site-prose" markdown="1">

1. Search for `const uswds = require("@uswds/compile");` in your Gulp setup. This indicates that you're using the Gulp setup we distributed as USWDS Compile.
1. Update your `gulpfile.js` to file to include `uswds.settings.version = 3;`. This setting manages the default USWDS source paths and will point Gulp to the new USWDS 3.0 package locations.

    {:.site-terminal}
    ```js
    /* gulpfile.js */

    const uswds = require("@uswds/compile");

    /**
     * USWDS version
     */

    uswds.settings.version = 3;
    ```

1. Recompile your Sass as usual and check that your files compiled as expected. When it compiles successfully, it is now using USWDS 3.0!

</div>
<!-- End USWDS Compile section -->  

<!-- Start custom Gulp workflow section -->
<h4 class="usa-accordion__heading">
  <button class="usa-accordion__button" aria-controls="m-a8">
    If you're using a custom Gulp workflow
  </button>
</h4>
<div id="m-a8" class="usa-accordion__content site-prose" markdown="1">
1. Search for references to USWDS in the `includePaths` and `src()` found in your project’s Gulp files. These paths tell the Sass compiler where to look for USWDS source files.
2. Update your `includePaths` and `src()` references to point to the correct `node_modules/@uswds/uswds` location. Some of the file directories have moved in USWDS 3.0, so confirm that you are accounting for these new locations in your paths. 
3. Recompile your Sass as usual and check that your files compiled as expected. When it compiles successfully, it is now using USWDS 3.0!
</div>
<!-- End custom Gulp workflow section --> 

<!-- Start custom Gulp workflow section -->
<h4 class="usa-accordion__heading">
  <button class="usa-accordion__button" aria-controls="m-a9">
    If you're using Webpack
  </button>
</h4>
<div id="m-a9" class="usa-accordion__content site-prose" markdown="1">
TK   
</div>
<!-- End custom Gulp workflow section --> 

</div> <!--End compiler accordion -->


### 4. Integrate any recent USWDS changes

{:.border-top-2px.border-base-lighter.padding-top-1}
Since USWDS 3.0 is based on USWDS 2.13.3, any markup or settings migration comes from migrating from your current version to 2.13.3. If you're already up-to-date, this won't take any time at all, but there have been some changes that might be breaking changes for your project over the course of the USWDS 2 branch. 

These steps will help you do any preliminary migration before updating to USWDS 3.0. Follow the instructions in each section that applies to either your USWDS version or your settings version. Changes specific to markup have a <span class="usa-tag bg-accent-cool-darker">Markup</span> tag. Changes specific to settings have a <span class="usa-tag bg-accent-warm-darker">Settings</span> tag.

<div class="usa-accordion usa-accordion--bordered">

<!-- Start 2.13.0 section -->
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

{:#old-code-2-13-0}
###### Old code

{:.site-terminal}
```html
<button class="usa-button" type="submit">
  <span class="usa-sr-only">Search</span>
<button>
```

{:#new-code-2-13-0}
###### New code

{:.site-terminal}
```html
<button class="usa-button" type="submit">    
  <img 
    src="{% raw %}{{ uswds image path }}{% endraw %}/usa-icons-bg/search--white.svg" 
    class="usa-search__submit-icon" 
    alt="Search" />
</button>
```

{:.border-top-2px.border-base-lighter.padding-top-2}
##### <span class="usa-tag bg-accent-cool-darker">Markup</span> Update social media icons in the footer.

You'll need to update social media icons in the USWDS footer. We're now using explicit images to better support legibility in instances where icons do not load. 

###### What to do

1. Check your codebase for instances of `usa-social-link.`
1. If you use it, Update the markup from the old version to the new version.

{:#old-code-2-13-0-social}
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

{:#new-code-2-13-0-social}
###### New code

{:.site-terminal}
```html
<a class="usa-social-link" href="{% raw %}{{ link }}{% endraw %}">
  <img 
    class="usa-social-link__icon" 
    src="/usa-icons-bg/search--whi/usa-icons/facebook.svg" 
    alt="Facebook" />
</a>
<a class="usa-social-link" href="{% raw %}{{ link }}{% endraw %}">
  <img 
    class="usa-social-link__icon" 
    src="/usa-icons-bg/search--whi/usa-icons/twitter.svg" 
    alt="Twitter" />
</a>
<a class="usa-social-link" href="{% raw %}{{ link }}{% endraw %}">
  <img 
    class="usa-social-link__icon" 
    src="/usa-icons-bg/search--whi/usa-icons/youtube.svg" 
    alt="YouTube" />
</a>
<a class="usa-social-link" href="{% raw %}{{ link }}{% endraw %}">
  <img 
    class="usa-social-link__icon" 
    src="/usa-icons-bg/search--whi/usa-icons/instagram.svg" 
    alt="Instagram" />
</a>
<a class="usa-social-link" href="{% raw %}{{ link }}{% endraw %}">
  <img 
    class="usa-social-link__icon" 
    src="/usa-icons-bg/search--whi/usa-icons/rss_feed.svg" 
    alt="RSS" />
</a>
```
</div>
<!-- End 2.13.0 section -->

<!-- Start 2.12.0 section -->
<h4 class="usa-accordion__heading">
  <button
    class="usa-accordion__button"
    aria-controls="m-a2"
  >
    If you have code older than USWDS 2.12.0
  </button>
</h4>
<div id="m-a2" class="usa-accordion__content site-prose" markdown="1">

##### <span class="usa-tag bg-accent-warm-darker">Settings</span> Update three deprecated settings.

Each of the following settings is no longer set-able. If you use any of these settings, they may no longer reflect your intention. These are the deprecated settings and their defaults:

- `$theme-input-tile-background-color-selected: "primary-lighter"`
- `$theme-input-tile-border-color: "base-lighter"`
- `$theme-input-tile-border-color-selected: "primary-lighter"`
  
###### What to do
1. Check this list to see if you changed the default value.
1. If you did change the default value, this change will no longer affect the input tile.
1. Assure that the input tile still displays well: check your codebase for instances of `input--tile` and check the affected part of your site if you get a match.

{:.border-top-2px.border-base-lighter.padding-top-2}
##### <span class="usa-tag bg-accent-warm-darker">Settings</span> Check three settings with changed defaults.

If you use any of these settings in your code, the output may change:

{:.usa-table}
Setting | Old default | New default
--- | --- | ---
`$theme-color-success-dark` | `"green-cool-50"` | `"green-cool-50v"`
`$theme-color-success-darker` | `"green-cool-80"` | `"green-cool-60v"`

###### What to do
1. Check your settings to see if they are set to the **old** default.
1. If they use the **old** default, delete the setting from your settings file so it uses the system default.
</div>
<!-- End 2.12.0 section -->

<!-- Start 2.11.2 section -->
<h4 class="usa-accordion__heading">
  <button
    class="usa-accordion__button"
    aria-controls="m-a3"
  >
    If you have code older than USWDS 2.11.2
  </button>
</h4>
<div id="m-a3" class="usa-accordion__content site-prose" markdown="1">

##### <span class="usa-tag bg-accent-warm-darker">Settings</span> Replace the deprecated `$theme-site-max-width` variable.

We deprecated the `$theme-site-max-width` variable. We're using `$theme-grid-container-max-width` instead.
  
###### What to do
1. Replace instances of `$theme-site-max-width` with `$theme-grid-container-max-width`

{:.border-top-2px.border-base-lighter.padding-top-2}
##### <span class="usa-tag bg-accent-cool-darker">Markup</span> Replace the `thumb_down_off_alt` icon with `thumb_down_alt` icon.

We replaced the `thumb_down_off_alt` icon with `thumb_down_alt` in our default icon sprite.

###### What to do
1. Search for any instances of `thumb_down_off_alt`
1. Replace it with `thumb_down_alt`
</div>
<!-- End 2.11.2 section --> 
  
<!-- Start 2.11.0 section -->
<h4 class="usa-accordion__heading">
  <button
    class="usa-accordion__button"
    aria-controls="m-a4"
  >
    If you have code older than USWDS 2.11.0
  </button>
</h4>
<div id="m-a4" class="usa-accordion__content site-prose" markdown="1">

##### <span class="usa-tag bg-accent-warm-darker">Settings</span> Check five settings with changed defaults.

If you use any of these settings in your code, the output may change:

{:.usa-table}
Setting | Old default | New default
--- | --- | ---
`$theme-alert-icon-size` | `5` | `4`
`$theme-table-border-color` | `"ink"` | `default`
`$theme-table-header-text-color` | `"ink"` | `default`
`$theme-table-stripe-text-colorr` | `"ink"` | `default`
`$theme-table-text-color` | `"ink"` | `default`

###### What to do
1. Check your settings to see if they are set to the **old** default.
2. If they use the **old** default, delete the setting from your settings file so it uses the system default.
</div>
<!-- End 2.11.0 section --> 
  
<!-- Start 2.10.1 section -->
<h4 class="usa-accordion__heading">
  <button
    class="usa-accordion__button"
    aria-controls="m-a5"
  >
    If you have code older than USWDS 2.10.1
  </button>
</h4>
<div id="m-a5" class="usa-accordion__content site-prose" markdown="1">

##### <span class="usa-tag bg-accent-warm-darker">Settings</span> Check two settings with changed defaults.
If you use any of these settings in your code, the output may change:

{:.usa-table}
Setting | Old default | New default
--- | --- | ---
`$theme-breadcrumb-background-color` | `"white"` | `default`
`$theme-alert-icon-size` | `4` | `5`

###### What to do
1. Check your settings to see if they are set to the **old** default.
2. If they use the **old** default, delete the setting from your settings file so it uses the system default.

{:.border-top-2px.border-base-lighter.padding-top-2}
##### <span class="usa-tag bg-accent-cool-darker">Markup</span> Update footer logo headings to use proper semantics. 

We improved the accessibility of the footer by converting a non-semantic heading into paragraph text.

###### What to do
1. Look for `<h3 class="usa-footer__logo-heading">` in your footer markup.
1. Replace the `h3` in this markup with a `p` for both the opening and closing tags.
</div>
<!-- End 2.10.1 section --> 
</div>
<!-- End compiler accordion --> 

### 5. Update to Sass module syntax

{:.border-top-2px.border-base-lighter.padding-top-1}
USWDS 3.0 supports the deprecated Sass import syntax. You don't need to change to the new syntax in your project Sass to use USWDS 3.0. But once you update, we recommend updating to the new syntax as well.  You’ll need to both switch `@import` to `@use`, and then create `@use` project-specific settings.  In USWDS 3.0 with Sass modules, instead of having multiple theme files that contain every setting available to the design system, you only keep track of the settings you changed in a single file. 

We recommend creating a new file to keep track of these changed settings. These instructions will help you create that file, format it properly, and use it in your project. 

You can complete these changes by taking the following steps: 

1. Replace all instances of `@import` with `@forward`, using find/replace in your Sass file.
2. Locate your existing project theme files. These are the _uswds-theme files that you found in [Step 1: Check your current USWDS code and settings versions](#1-check-your-current-uswds-code-and-settings-versions). (If you already have your project-specific settings file in a single file, you can skip ahead Step 4. If not, you'll need to collect your project-specific settings in a single file.)
3. In the project theme file directory directory, create a new file called `_uswds-theme.scss`.

### 6. Find which settings from your theme files you've customized.

{:.border-top-2px.border-base-lighter.padding-top-1}
We think the best way to accomplish this is with a series of diffs against the default theme files. Running a diff comparing your theme files to the default theme should reveal which of these settings you've modified. 

The bad thing about this process is that it can be tedious. The good thing is that you only have to do it once, and then you'll have a small, manageable project theme file that can be your baseline moving forward. And you'll never again have to worry about overwriting your settings files when you update to a new version of the design system.

We'll use an online diff service like [quickdiff.net](https://quickdiff.net/), [diffchecker.com](https://diffchecker.com), or [text-compare.com](https://text-compare.com/).

Each of the files [below](#current-settings-as-of-uswds-2132) is the most current version of the USWDS default settings. For each of these files, use the diff tool to find the differences between your settings file and the current defaults.

Look for instances where your project has a different value than the default. Ignore cases where a setting exists in the current version but not in your version. This indicates a new setting that probably does not apply to your project. Instances where a setting exists in your version but not in the current version can likely be ignored. This usually indicates a deprecated setting that should not affect your project, but it can be worth checking to see if that variable appears anywhere else in your codebase!

When you see a setting that appears different from the current default, this is probably one of your project's custom settings. Copy this setting and add it to your new `_uswds-theme.scss` file.

At the end of this process, your new `_uswds-theme.scss` file will look something like the following:

{:.site-terminal}
```scss
$theme-image-path: "../uswds/img";
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
); 
```

#### Current settings (as of USWDS 2.13.2)

[Color settings](https://raw.githubusercontent.com/uswds/uswds/release-2.13.2/src/stylesheets/theme/_uswds-theme-color.scss)<br>
[Component settings](https://raw.githubusercontent.com/uswds/uswds/release-2.13.2/src/stylesheets/theme/_uswds-theme-components.scss)<br>
[General settings](https://raw.githubusercontent.com/uswds/uswds/release-2.13.2/src/stylesheets/theme/_uswds-theme-general.scss)<br>
[Spacing settings](https://raw.githubusercontent.com/uswds/uswds/release-2.13.2/src/stylesheets/theme/_uswds-theme-spacing.scss)<br>
[Typography settings](https://raw.githubusercontent.com/uswds/uswds/release-2.13.2/src/stylesheets/theme/_uswds-theme-typography.scss)<br>
[Utilities settings](https://raw.githubusercontent.com/uswds/uswds/release-2.13.2/src/stylesheets/theme/_uswds-theme-utilities.scss)<br>

1. Once you have all your project-specific settings in a single file, we'll load these customizations into the USWDS core engine. We do this with a special `@use` statement:
  
    {:.site-terminal}
    ```scss{% raw %}
    @use "uswds-core" with (
      {{ your settings }}
    );
    {% endraw %}
    ```
  
    In the previous example, `{% raw %}{{ your settings }}{% endraw %}` would be a list of all the settings variables in your settings file.

    So with an existing settings file like the following:

    {:.site-terminal}
    ```scss
    $theme-image-path: "../uswds/img";
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
    );
    ```

    We'd update it to use `@use` with the following:

    {:.site-terminal}
    ```scss
    @use "uswds-core" with (
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
    );
    ```

    Note that the new `@use` statement is a `list` of variables, so each line ends in a comma `,` instead of a semicolon `;`.

2. Almost there! The last thing we have to do is make sure we use this new theme file in our project. If your project already was using a project-specific theme settings file, you're all set. If not, you'll need to open your project's Sass entry point, typically `styles.scss`. It usually looks something like this:

    {:.site-terminal}
    ```scss
    /*
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

    ...
    ```

    In USWDS 3.0, we won't use multiple theme files, just a single file with all the project-specific settings. So we can remove all the individual theme settings from our Sass entry point and replace them with a single `@use` statement, using the project-specific settings file, like so:

    {:.site-terminal}
    ```scss
    /*
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

    ...
    ```

    Now your project is using its theme settings in the proper USWDS 3.0 format!

#### Use "uswds-core" for any custom USWDS Sass

{:.border-top-2px.border-base-lighter.padding-top-1}
Sass Module syntax requires that files must note the source of any tokens, variables, mixins, functions, or placeholders used in that file. 

This is relatively straightforward for USWDS 3.0 Sass: For any project stylesheet that uses USWDS tokens, variables, mixins, functions, or placeholders (that's probably most, if not all, of them!), add the following line at the top of the file:

`@use "uswds-core" as *;`

In USWDS 3.0, `uswds-core` is the name of the package (or "module" in Sass terminology) that contains all the tokens, variables, mixins, functions, or placeholders used in USWDS Sass. If your project uses tokens, variables, mixins, functions, or placeholders defined outside of USWDS, you'll need to @use these as well at the top of the document. This includes Sass-specific functions. See [https://sass-lang.com/documentation/modules](https://sass-lang.com/documentation/modules) for more information, if your project uses any of Sass's built-in functions.

Once each of your custom sass files include the `@use "uswds-core" as *;` line at the top, you should be done!

Recompile your Sass and check for errors.

### 7. Optimize your installation with component packages

{:.border-top-2px.border-base-lighter.padding-top-1}
By default, a USWDS installation includes every component available to the design system. But most projects don't use all these components. USWDS 3.0 allows teams to use only the components you need for your project, through the idea of component packages.

A component package is a self-contained module that includes only code related to a specific component. In addition to an omnibus **uswds** package, USWDS 3.0 includes packages for every component available in the design system, and for some features (like fonts) that are common to many components. 

Using individual component packages instead of the **uswds** bundle package can result in a significant reduction in the size of your project CSS and noticeable improvements to compile time.

### Using packages

{:.border-top-1px.border-base-lighter.padding-top-1}
Include USWDS packages in your Sass entry point to add them to your project. By default, USWDS projects forward the **uswds** package to include all the styles available to the design system. You will see a line like the following in your Sass entry point when you're using the **uswds** package:

`@forward "uswds";`

This adds styles to your project. But the **uswds** package is a bundle of many individual component packages. You probably don't need them all! We can unbundle the design system and include only the packages your project needs by replacing the **uswds** \`forward\` with a \`forward\` for each of the component packages included in your site templates.

An example of using replacing the **uswds** package with individual component packages in your Sass entry point would look something like this:

{:#old-code-packages}
#### Old code

{:.site-terminal}
```scss
@forward "uswds";
```

{:#new-code-packages}
#### New Code

{:.site-terminal}
```scss

@forward "usa-accordion"; // New code
@forward "usa-banner";
@forward "usa-button";
@forward "usa-footer";
@forward "usa-header";
@forward "usa-prose";

@forward "uswds-form-controls";
```

#### Available packages 

{:.border-top-2px.border-base-lighter.padding-top-1}
The following packages are available to any USWDS project. Each package includes component styles related to the package name, and additional styles related to any component dependencies.

For any package listed below, add a `@forward "[package]"` line to your Sass entry point. For instance, if you wanted to add the `usa-accordion` package, add the following line:

`@forward "usa-accordion";`

TK: Package + Dependencies Table

### Determine which packages your project needs

{:.border-top-1px.border-base-lighter.padding-top-1}
The process of determining which packages your project needs is not automatic. Most projects will need to do a little work to identify the components their project uses.

#### Brute-force: Search for component class names

{:.border-top-1px.border-base-lighter.padding-top-1}
A brute-force method to determine which packages your project uses is to search your codebase for use of a key class name associated with that component, like "usa-accordion" for accordions. All `usa-` prefixed packages use the same name as their CSS class. 

If you find a hit for the class name in your codebase, include the relevant package in your Sass entry point. 

For instance, if you found **usa-banner, usa-identifier, usa-button**, and **usa-accordion**, you might attach the following packages in your Sass entry point: 

{:.site-terminal}
```scss
@forward "usa-accordion";
@forward "usa-banner";
@forward "usa-button";
@forward "usa-identifier";
```

Each package is smart enough to include any dependent package it needs to display properly. For instance, the **usa-banner** package will load

#### Managing utility classes

{:.border-top-1px.border-base-lighter.padding-top-1}
Utility classes have their own naming conventions that are a bit less straightforward to identify. Look at the table below. If your codebase includes classes that start with one of the **class bases**, include its **utility module key** in the `$output-these-utilities setting`. 

Look for classes in your codebase for searching for a regular expression string like `[" ]flex-`.

For instance, if you found `add-list-reset`, `font-`, `order-`, and `display-`, you might use the following setting: 

{:.site-terminal}
```scss
$output-these-utilities: (
  "add-list-reset",
  "display",
  "font",
  "order"
),
```

TK: Utility module key table

### Further performance improvements

{:.border-top-1px.border-base-lighter.padding-top-1}
#### Update to the sass-embedded compiler

{:.border-top-1px.border-base-lighter.padding-top-1}
The `sass-embedded` package compiles Sass faster than the `gulp-sass` or `gulp-dart-sass` compiler.

In a gulp workflow, we recommend using `gulp-sass` and `sass-embedded` together for the simplest and fastest compiling.

1. Install `gulp-sass` and `sass-embedded` in your project:
    `npm install gulp-sass sass-embedded –s`

2. Uninstall any other sass compiling packages, if they exist:

    {:.site-terminal}
    ```scss
    npm uninstall sass
    npm uninstall gulp-dart-sass
    npm uninstall gulp-sass
    ```
3. In your Sass gulp tasks file, replace your existing sass compiler package import with `gulp-sass` and `sass-embedded:`
    
    {:#old-code-embedded}
    ##### Old code 

    {:.site-terminal}
    ```scss
    const sass = require("gulp-dart-scss");
    ```
    {:#new-code-embedded}
    ##### New code

    {:.site-terminal}
    ```scss
    const sass = require("gulp-sass")(require("sass-embedded"));
    ```

4. In your Sass gulp tasks file, remove any line that sets the sass.compiler:
    <code><s>sass.compiler = require("sass");</s></code>

5. Recompile.


#### Reduce utility responsive breakpoints

{:.border-top-1px.border-base-lighter.padding-top-1}
There are nine responsive breakpoints available to utilities and the layout grid. These are defined in the `$theme-utility-breakpoints setting`. If a utility breakpoint is set to `true`, any layout grid class and any utility with its responsive key set to true will output responsive classes. 

This can result in bulky CSS, and if your project doesn't use these breakpoints you can save a lot of space by setting these breakpoints to false. By default, `mobile-lg`, `tablet`, and `desktop` are set to true:

{:.site-terminal}
```scss
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

For each breakpoint set to true in your project, search for its usage in your codebase by searching for the **breakpoint name** + a colon (:). SO, to search for the `tablet-lg` breakpoint, search for desktop-lg:. If that breakpoint does not appear, you can set the value to `false`.

#### Using package source

{:.border-top-1px.border-base-lighter.padding-top-1}
Once you've optimized your project to use only the component packages you need, you can further optimize those packages. Each component package includes, by reference, code for any additional packages it depends on. You can improve performance by manually forwarding all your project component's dependencies, then pointing your Sass entry point directly at each package source, bypassing each package's dependency import.

For example, according to the table in [Available packages, above](#available-packages), the `usa-banner` component includes the following packages as dependencies: `usa-icon`, `usa-layout-grid`, `usa-media-block`, and `uswds-fonts`. Then we'll look at these dependencies' dependencies:

- `usa-icon` depends on `uswds-core`
- `usa-layout-grid` depends on `uswds-core`
- `usa-media-block` depends on `usa-layout-grid` and `uswds-fonts`
- `uswds-fonts` depends on `uswds-core`

Instead of simply forwarding the `usa-banner` component, you can import the component and all related dependencies directly. Note: We've used `uswds-core` already when we forwarded our settings, so we won't forward it again:

{:.site-terminal}
```scss
// Instead of...
@forward "usa-banner";

// Import the component and all related dependencies
@forward "usa-banner";
@forward "usa-icon";
@forward "usa-layout-grid";
@forward "usa-media-block";
@forward "uswds-fonts";
```

Now, instead of pointing at the component packages, we can point directly at the component package source. For each usa- prefixed component package, append /src/styles to its name:

{:.site-terminal}
```scss
@forward "usa-banner<strong>/src/styles</strong>";
@forward "usa-icon<strong>/src/styles</strong>";
@forward "usa-layout-grid<strong>/src/styles</strong>";
@forward "usa-media-block<strong>/src/styles</strong>";
@forward "uswds-fonts";
```

When you recompile, you should see an improvement in compile time.

**Note:** This performance technique may cause issues when you update USWDS versions. Check the release notes for any new version to see if we've changed any package's dependencies, which we will indicate as a potential breaking change. 