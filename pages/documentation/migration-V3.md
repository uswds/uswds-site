---
permalink: /documentation/migration/
layout: styleguide
title: Migrating to USWDS 3.0
lead: Migrate to USWDS 3.0 for Sass module support and an unbundled design system with minimal upgrade effort
category: How to use USWDS
subnav:
- text: Why migrate to USWDS 3.0?
  href: '#why-migrate-to-uswds-30'
- text: USWDS 3.0 package overview
  href: '#uswds-30-package-overview'
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
- text: 6. Optimize your installation
  href: '#6-optimize-your-installation'
- text: Latest updates
  href: '#changelog'
changelog:
  key: docs-migration-v3
---
{: .site-note }
**Note:** This guide provides instructions for upgrading from USWDS 2 to USWDS 3. If your project uses USWDS 1, you will need to update according to the [USWDS 2.0 migration guide]({{ site.baseurl }}/documentation/migration-v2) before proceeding with these steps. [Not sure which version you're on? Here's how to check](#1-check-your-current-uswds-code-and-settings-versions).

## Why migrate to USWDS 3.0?

{:.border-top-2px.border-base-lighter.padding-top-1}
**Use modern Sass syntax before the old syntax loses official support.** USWDS stylesheets are written in a language called Sass. This language updated its syntax in 2020 and the old syntax is now deprecated. Sass will no longer support the old syntax starting in October 2022. We want teams to use source code with reliable support throughout the life of their project.

**Improve performance and reduce the size of your project CSS.** Using USWDS 3.0 with the new Sass syntax — called Sass module syntax — allows teams to unbundle their implementations of USWDS and use only the components and code that they need on their project. Depending on your project, this could mean a significant reduction to both the amount of CSS you ship and the time it takes to compile. This means faster load times, better scores in performance evaluation tools, and a better developer experience.

**Stay up-to-date with minimal hassle.** We want teams to benefit from the most current version of USWDS. Many projects should be able to migrate from USWDS 2 to USWDS 3.0 in about an hour. This new version makes no markup or style changes from USWDS 2.13.3. If you already use USWDS 2.13.0 or later, you should be able to update to USWDS 3.0 in a matter of minutes. Additionally, the under-the-hood changes we're introducing in USWDS 3.0 will make it easier to stay up-to-date with USWDS over time. An incremental update now will make subsequent updates simpler.

[Learn more about what's new in USWDS 3.0]({{ site.baseurl }}/whats-new/updates/2022/04/28/introducing-uswds-3-0/) →

## USWDS 3.0 package overview

{:.border-top-2px.border-base-lighter.padding-top-1}
USWDS 3.0 has a component-centered architecture. The source code is grouped into directories (or "packages") which include the styles (Sass), JavaScript, tests, and templates (Twig) specific to a component. As we go through the migration process, many of the changes we'll apply point your project at these new component-centered locations.

Here's an overview of the new `@uswds/uswds` package:

```
├── @uswds/
│   └── uswds/
│       ├── dist/
│       │   ├── css/
│       │   ├── fonts/
│       │   ├── img/
│       │   ├── js/
│       │   ├── scss/
│       │   └── theme/
│       └── packages/
│           ├── usa-component/
│           ├── usa-component/
│           ├── usa-component/
│           ├── uswds-bundle/
│           ├── uswds-bundle/
│           ...
```

Most of the source code now lives in `/@uswds/uswds/packages` but some compiled assets and some backward-compatible helper files still live in `/dist`.

An individual package looks like this:

```
│   ...
│   ├── usa-accordion/
│   │   ├── src/
│   │   │   ├── content/
│   │   │   │   ├── index.js
│   │   │   │   ├── usa-accordion.json
│   │   │   │   ├── usa-accordion~bordered.json
│   │   │   │   ├── usa-accordion~multiselectable.json
│   │   │   ├── styles/
│   │   │   │   ├── _index.scss
│   │   │   │   └── accordion.scss
│   │   │   ├── test/
│   │   │   │   ├── accordion.spec.js
│   │   │   │   └── template.html
│   │   │   ├── index.js
│   │   │   ├── usa-accordion.stories.js
│   │   │   └── usa-accordion.twig
│   │   └── _index.scss
```

Most teams won't ever need to know what's happening inside the USWDS source code, but the more you know about what's going on under the hood, the better you can understand what's happening and why as you migrate to USWDS 3.0.

[Learn more about USWDS packages]({{ site.baseurl }}/components/packages) →


## Migration overview

{:.border-top-2px.border-base-lighter.padding-top-1}
There are four necessary steps migrating to USWDS 3.0. In addition to the required steps, we also recommend updating your codebase to the Sass module system (Step 5) and optimizing your installation to improve CSS size and compile time (Step 6).
<!-- add links -->

1. [Check your current USWDS code and settings versions](#1-check-your-current-uswds-code-and-settings-versions)
1. [Install the USWDS 3.0 package](#2-install-the-uswds-30-package)
1. [Update your Sass compiler settings and recompile CSS](#3-update-your-sass-compiler-settings-and-recompile-css)
1. [Integrate any recent USWDS changes](#4-integrate-any-recent-uswds-changes)
1. <span class="usa-tag bg-primary">Recommended</span> [Update to Sass module syntax](#5-update-to-sass-module-syntax)
2. <span class="usa-tag bg-secondary">Optional</span> [Optimize your installation](#6-optimize-your-installation)

### 1. Check your current USWDS code and settings versions

{:.border-top-2px.border-base-lighter.padding-top-1}
USWDS 3.0 uses the same styles and markup as USWDS 2.13.3 — and, with one exception, the same settings. This means that if you're currently using USWDS 2.13.3, there are no styles or markup to update. But if you're using a version older than 2.13.3, migrating to USWDS 3.0 may mean updating some of your markup and settings.

So, before migrating, check the versions of both your existing USWDS code and its settings (since code and settings may be different).

Check your project's current `package.json` file and your project's `_uswds-theme` files.

Your `package.json` file will display the version of USWDS in a line like `"uswds": "^2.12.2"`.

Your theme files will have a version number at the top, under the image of the American flag. Note these versions so we can make the proper updates in [Step 4: Integrate any recent USWDS changes](#4-integrate-any-recent-uswds-changes), below.

```json
/* package.json */

"devDependencies": {
  "uswds": "^2.12.2"
}
```

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
3. Uninstall the old USWDS package with `npm uninstall uswds`

### 3. Update your Sass compiler settings and recompile CSS

{:.border-top-2px.border-base-lighter.padding-top-1}
USWDS 3.0 requires the use of [Sass Load Paths](https://sass-lang.com/documentation/at-rules/use#load-paths) to compile properly.

USWDS 3.0 load paths must include a path to the `@uswds/uswds/packages` directory, typically by updating an `IncludePaths` setting to include `node_modules/@uswds/uswds/packages`.

Add this load path to your compiler settings, or update any old paths if your compiler already includes them. We have guidance for a few common compiler setups.

{% include autoprefixer-note.html %}

<!--Start compiler accordion -->
<div class="usa-accordion site-accordion usa-accordion--bordered">

<!-- Start USWDS Gulp section -->
<h4 class="usa-accordion__heading">
  <button type="button" class="usa-accordion__button" aria-controls="m-a6">
    If you're using USWDS Gulp
  </button>
</h4>
<div id="m-a6" class="usa-accordion__content site-prose">
  <ol>
    <li>How do you know you're using USWDS Gulp? Search for a line like <code>const uswds = require("./node_modules/uswds-gulp/config/uswds");</code> or <code>const uswds = "node_modules/uswds/dist"</code> in your gulp setup. This indicates that you're using the gulp setup we distributed as USWDS Gulp.</li>
    <li><p>Update your versions of the <code>sass</code> and <code>gulp-sass</code> packages if you're using them. If you use the <code>sass</code> package, run the following command in the terminal:</p>
      {% highlight node -%}
npm install sass@latest
      {%- endhighlight%}
        <p>If you use the <code>gulp-sass</code> package, run the following command in the terminal:</p>
      {% highlight node -%}
npm install gulp-sass@latest
      {%- endhighlight%}
    </li>
    <li>The <code>sass.sync</code> function is no longer supported in the latest versions of <code>gulp-sass</code>. Replace any instance of <code>sass.sync</code> with simply <code>sass</code>:
      {% highlight diff -%}
- sass.sync({
+ sass({
      {%- endhighlight %}
    </li>
    <li><p>If you use <code>sass</code> and <code>gulp-sass</code>, you'll need to update how they work together. Update your <code>const sass</code> to <code>const sass = require("gulp-sass")(require("sass"));</code>:</p>
      {% highlight diff -%}
- const sass = require("gulp-sass");
+ const sass = require("gulp-sass")(require("sass"));
      {%- endhighlight %}
    </li>
    <li>Update the USWDS <code>const</code> elements to the updated USWDS package location:
      {% highlight diff -%}
- const pkg = require("./node_modules/uswds/package.json");
+ const pkg = require("./node_modules/@uswds/uswds/package.json");
...
- const uswds = require("./node_modules/uswds-gulp/config/uswds");
+ const uswds = "./node_modules/@uswds/uswds";
or
- const USWDS = "node_modules/uswds/dist";
+ const USWDS = "./node_modules/@uswds/uswds";
      {%- endhighlight %}
    </li>
    <li><p>Search for references to <code>${uswds}</code> in the <code>includePaths</code> and <code>gulp.src()</code> found in your project’s gulp files. These paths tell the Sass compiler where to look for USWDS source files.</p>
      <p>Some of our file directories have moved in USWDS 3.0, and it is necessary to point gulp to the correct location inside the <code>@uswds/uswds</code> package. Below are snippets from the standard USWDS Gulp references and their necessary updates. If your code uses <code>USWDS</code> instead of <code>uswds</code>, just keep the case you have.</p>
      {% highlight diff -%}
// location of theme files:
- gulp.src(`${uswds}/scss/theme/**/**`)
+ gulp.src(`${uswds}/dist/theme/**/**`)
...
// location of font files:
- gulp.src(`${uswds}/fonts/**/**`)
+ gulp.src(`${uswds}/dist/fonts/**/**`)
...
// location of img files:
- gulp.src(`${uswds}/img/**/**`)
+ gulp.src(`${uswds}/dist/img/**/**`)
...
// location of compiled js files:
- gulp.src(`${uswds}/js/**/**`)
+ gulp.src(`${uswds}/dist/js/**/**`)
...
// Sass's load paths:
includePaths: [
  PROJECT_SASS_SRC,
- `${uswds}/scss`,
+ `${uswds}`,
- `${uswds}/scss/packages`,
+ `${uswds}/packages`,
],
      {%- endhighlight %}
    </li>
    <li>Recompile your Sass as usual. When it compiles, it's using USWDS 3.0!</li>
  </ol>
</div>
<!-- End USWDS Gulp section -->

<!-- Start USWDS Compile section -->
<h4 class="usa-accordion__heading">
  <button type="button" class="usa-accordion__button" aria-controls="m-a7">
    If you're using USWDS Compile
  </button>
</h4>
<div id="m-a7" class="usa-accordion__content site-prose" markdown="1">
  <ol>
    <li>How do you know you're using USWDS Compile? Search for <code>const uswds = require("@uswds/compile");</code> in your gulp setup. This indicates that you're using the <code>@uswds/compile</code> package in that JavaScript file (typically that file is <code>gulpfile.js</code>).</li>
    <li>Update the <code>gulpfile.js</code> to include a <code>uswds.settings.version = 3;</code> line. This setting tells USWDS Compile which version of USWDS you're using. USWDS Compile handles the load paths and package locations automatically.

      {% highlight diff -%}
/* gulpfile.js */
const uswds = require("@uswds/compile");
+ uswds.settings.version = 3;
      {%- endhighlight -%}
    </li>
    <li>Recompile your Sass as usual and check that your files compiled as expected. When it compiles successfully, it is now using USWDS 3.0!</li>
  </ol>
</div>
<!-- End USWDS Compile section -->

<!-- Start custom gulp workflow section -->
<h4 class="usa-accordion__heading">
  <button type="button" class="usa-accordion__button" aria-controls="m-a8">
    If you're using a custom gulp workflow
  </button>
</h4>
<div id="m-a8" class="usa-accordion__content site-prose" markdown="1">
1. Search for references to USWDS in the `includePaths` and `src()` found in your project’s gulp files. These paths tell the Sass compiler where to look for USWDS source files. The `includePaths` section may look like the following:

    ```
    .pipe(
      sass({
        includePaths: [
          PROJECT_SASS_SRC,
          `${USWDS}`,
          `${USWDS}/uswds/packages`,
        ],
      })
    )
    ```

1. Make sure `includePaths` includes `node_modules/@uswds/uswds/packages` in its array.
1. Update any `src()` references to point to the correct `node_modules/@uswds/uswds` location. Some of the file directories have moved in USWDS 3.0, so confirm that you are accounting for these new locations in your paths.
    - **Fonts:** `@uswds/uswds/dist/fonts`
    - **Images:** `@uswds/uswds/dist/img`
    - **Theme files:** `@uswds/uswds/dist/theme`
    - **Compiled JavaScript:** `@uswds/uswds/dist/js`
    - **Packages:** `@uswds/uswds/packages`
1. Recompile your Sass as usual and check that your files compiled as expected. When it compiles successfully, it's using USWDS 3.0!
</div>
<!-- End custom gulp workflow section -->

<!-- Start custom gulp workflow section -->
<h4 class="usa-accordion__heading">
  <button type="button" class="usa-accordion__button" aria-controls="m-a9">
    If you're using webpack
  </button>
</h4>
<div id="m-a9" class="usa-accordion__content site-prose" markdown="1">
  In webpack, include `includePaths` within the `sassOptions` of your Sass loader:

  ```js
  loader: "sass-loader",
  options: {
    sourceMap: true,
    sassOptions: {
      includePaths: [
        "./node_modules/@uswds",
        "./node_modules/@uswds/uswds/packages",
      ],
    },
  },
  ```

  This array needs to include `"./node_modules/@uswds/uswds/packages"`.
</div>
<!-- End custom gulp workflow section -->

</div> <!--End compiler accordion -->


### 4. Integrate any recent USWDS changes

{:.border-top-2px.border-base-lighter.padding-top-1}
Since USWDS 3.0 is based on USWDS 2.13.3, any markup or settings migration comes from migrating from your current version to 2.13.3. If you're already up-to-date, this won't take any time at all, but there have been some changes that might be breaking changes for your project over the course of the USWDS 2 branch.

Follow the instructions in each section that applies to either your USWDS version or your settings version. Changes specific to markup have a <span class="usa-tag bg-accent-cool-darker">Markup</span> tag. Changes specific to settings have a <span class="usa-tag bg-accent-warm-darker">Settings</span> tag.

<div class="usa-accordion site-accordion usa-accordion--bordered">

<!-- Start All section -->
<h4 class="usa-accordion__heading">
  <button
    type="button"
    class="usa-accordion__button"
    aria-controls="m-all"
  >
    All migrations
  </button>
</h4>
<div id="m-all" class="usa-accordion__content site-prose" markdown="1">

##### <span class="usa-tag bg-accent-warm-darker">Settings</span> Remove $output-all-utilities setting.

We've removed the `$output-all-utilities` settings and replaced it with `$output-these-utilities` which is a list of the utilities you want to output.

###### What to do
1. Check to see if you have `$output-all-utilities: false` in your utilities settings.
1. If so, replace it with `$output-these-utilities: ("module", "module", "module");` where each `module` is a utility you wish to include in your project. For a complete list of utility modules, see the utility module list in [Managing Utility Classes](#managing-utility-classes), below.
1. If your settings include `$output-all-utilities: true`, remove the setting entirely.

</div>
<!-- End All section -->

<!-- Start 2.13.0 section -->
<h4 class="usa-accordion__heading">
  <button
    type="button"
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

```html
<button class="usa-button" type="submit">
  <span class="usa-sr-only">Search</span>
<button>
```

{:#new-code-2-13-0}
###### New code

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
1. If you use it, update the markup from the old version to the new version.

{:#old-code-2-13-0-social}
###### Old code

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

```html
<a class="usa-social-link" href="{% raw %}{{ link }}{% endraw %}">
  <img
    class="usa-social-link__icon"
    src="/usa-icons/facebook.svg"
    alt="Facebook" />
</a>
<a class="usa-social-link" href="{% raw %}{{ link }}{% endraw %}">
  <img
    class="usa-social-link__icon"
    src="/usa-icons/twitter.svg"
    alt="Twitter" />
</a>
<a class="usa-social-link" href="{% raw %}{{ link }}{% endraw %}">
  <img
    class="usa-social-link__icon"
    src="/usa-icons/youtube.svg"
    alt="YouTube" />
</a>
<a class="usa-social-link" href="{% raw %}{{ link }}{% endraw %}">
  <img
    class="usa-social-link__icon"
    src="/usa-icons/instagram.svg"
    alt="Instagram" />
</a>
<a class="usa-social-link" href="{% raw %}{{ link }}{% endraw %}">
  <img
    class="usa-social-link__icon"
    src="/usa-icons/rss_feed.svg"
    alt="RSS" />
</a>
```
</div>
<!-- End 2.13.0 section -->

<!-- Start 2.12.0 section -->
<h4 class="usa-accordion__heading">
  <button
    type="button"
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
`$theme-color-success-darker` | `"green-cool-60"` | `"green-cool-60v"`

###### What to do
1. Check your settings to see if they are set to either the **old** or the **new** default.
1. If they use either the **old** or the **new** default, delete the setting from your settings file so it uses the system default.
</div>
<!-- End 2.12.0 section -->

<!-- Start 2.11.2 section -->
<h4 class="usa-accordion__heading">
  <button
    type="button"
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
1. Replace instances of `$theme-site-max-width` with `$theme-grid-container-max-width`. If your layout is affected by this change, remove this setting from your settings file.

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
    type="button"
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
`$theme-table-stripe-text-color` | `"ink"` | `default`
`$theme-table-text-color` | `"ink"` | `default`

###### What to do
1. Check your settings to see if they are set to either the **old** or the **new** default.
2. If they use either the **old** or the **new** default, delete the setting from your settings file so it uses the system default.
</div>
<!-- End 2.11.0 section -->

<!-- Start 2.10.1 section -->
<h4 class="usa-accordion__heading">
  <button
    type="button"
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
1. Check your settings to see if they are set to either the **old** or the **new** default.
2. If they use either the **old** or the **new** default, delete the setting from your settings file so it uses the system default.

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

While USWDS 3.0 supports the deprecated `@import` Sass syntax, we recommend upgrading to the new Sass module syntax when updating to USWDS 3.0.

These instructions will help you update your `@import` references to the new syntax, format and load your USWDS settings, and use the new `uswds-core` package to access USWDS functions, mixins, tokens, and variables in your custom Sass.

#### Update your @import references

1. **Replace all instances of @import with @forward in your Sass entry point.**

```diff
- @import "uswds-theme-color";
+ @forward "uswds-theme-color";
- @import "uswds-theme-general";
+ @forward "uswds-theme-general";
- @import "uswds-theme-spacing";
+ @forward "uswds-theme-spacing";
- @import "uswds-theme-typography";
+ @forward "uswds-theme-typography";
- @import "uswds-theme-utilities";
+ @forward "uswds-theme-utilities";
- @import "uswds-theme-components";
+ @forward "uswds-theme-components";
- @import "uswds";
+ @forward "uswds";
- @import "uswds-custom-styles";
+ @forward "uswds-custom-styles";
```

#### Format and load your USWDS settings
1. **Locate your existing project theme files.** These are the `_uswds-theme` files that you found in [Step 1: Check your current USWDS code and settings versions](#1-check-your-current-uswds-code-and-settings-versions), above.
1. **Create a new project-specific theme settings file.** If your project already has a single project-specific theme settings file, you’re all set. If not, create a new file in your project theme file directory called `_uswds-theme.scss`.
1. **Find which theme settings you've customized.** Comparing your theme files to the default theme should reveal which of these settings you've modified. We recommend accomplishing this with a series of diffs against the default theme files.

   The bad thing about this process is that it can be tedious. The good thing is that you only have to do it once, and then you'll have a small, manageable project theme file that can be your baseline moving forward. And you'll never again have to worry about overwriting your settings files when you update to a new version of the design system.

   We recommend an online diff service like [quickdiff.net](https://quickdiff.net/), [diffchecker.com](https://diffchecker.com), or [text-compare.com](https://text-compare.com/).

   Each of the files below is from version 2.13.3 of the USWDS default settings. For each of these files, use the diff tool to find the differences between your settings file and the current (USWDS Version 3.x) defaults.

    USWDS Version 2.13.3 Defaults
   - [Color settings](https://raw.githubusercontent.com/uswds/uswds/release-2.13.3/src/stylesheets/theme/_uswds-theme-color.scss)
   - [Component settings](https://raw.githubusercontent.com/uswds/uswds/release-2.13.3/src/stylesheets/theme/_uswds-theme-components.scss)
   - [General settings](https://raw.githubusercontent.com/uswds/uswds/release-2.13.3/src/stylesheets/theme/_uswds-theme-general.scss)
   - [Spacing settings](https://raw.githubusercontent.com/uswds/uswds/release-2.13.3/src/stylesheets/theme/_uswds-theme-spacing.scss)
   - [Typography settings](https://raw.githubusercontent.com/uswds/uswds/release-2.13.3/src/stylesheets/theme/_uswds-theme-typography.scss)
   - [Utilities settings](https://raw.githubusercontent.com/uswds/uswds/release-2.13.3/src/stylesheets/theme/_uswds-theme-utilities.scss)

   When you compare earlier versions of the Design System to USWDS Version 3.x, look for instances where your project has a different value than the default. Ignore cases where a setting exists in the current version but not in your version. This indicates a new setting that probably does not apply to your project. Instances where a setting exists in your version but not in the current version can likely be ignored. This usually indicates a deprecated setting that should not affect your project, but it can be worth checking to see if that variable appears anywhere else in your codebase.

   When you see a setting that appears different from the current default, this is probably one of your project's custom settings. Copy this setting and add it to your new `_uswds-theme.scss` file.

   At the end of this process, your new `_uswds-theme.scss` file will look something like the following:

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
1. **Load these customizations into USWDS core.** Once you have all your project-specific settings in a single file, we'll load these customizations into the special `uswds-core` package that powers the design system. We do this with a special `@use ... with` statement:

    {% raw %}
    ```scss
    @use "uswds-core" with (
      {{ your settings }}
    );
    ```
    {% endraw %}

    In the previous example, `{% raw %}{{ your settings }}{% endraw %}` would be a list of all the USWDS settings variables in your settings file.

    So with an existing settings file like the following:

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
    Note that the new `@use` statement is a list of variables, so each line ends in a comma `,` instead of a semicolon `;`.

    {: .site-note }
    **Note:** the `@use "uswds-core" with ()` configuration accepts only current USWDS settings variables. If you receive the error `This module was already loaded, so it can't be configured using "with"`, confirm that all your declared variables exist in the list of [USWDS settings]({{ site.baseurl }}/documentation/settings/) and try compiling again.

1. **Use the new theme file in your project** If your project already was using a project-specific theme settings file, you're all set. If not, you'll need to open your project's Sass entry point, typically `styles.scss`. It usually looks something like this:

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
    @forward "uswds";
    @forward "uswds-custom-styles";
    ```

    We can remove all the individual theme settings from our Sass entry point and replace them with a single `@forward` statement, using the project-specific settings file that we just created, like so:

```diff
- // Import individual theme settings
- @forward "uswds-theme-general";
- @forward "uswds-theme-typography";
- @forward "uswds-theme-spacing";
- @forward "uswds-theme-color";
- @forward "uswds-theme-utilities";
- // components import needs to be last
- @forward "uswds-theme-components";
+ @forward "uswds-theme";
  @forward "uswds";
  @forward "uswds-custom-styles";
```

Now your project is using its theme settings in the proper USWDS 3.0 format! You can safely remove the old theme files from your project.

#### Use "uswds-core" for any custom USWDS Sass

Unlike `@import`, which makes Sass members (tokens, variables, mixins, functions, or placeholders) available globally, `@use` only reveals Sass members to the stylesheet that loads them.

Accommodating this is relatively straightforward for USWDS 3.0: For any project stylesheet that uses USWDS members (that's probably most, if not all, of them!), you'll need to load `uswds-core` at the top of your stylesheet. You will also need to check if you have non-USWDS modules in your stylesheet and load those as well. Here is how to do it:

1. **Load "uswds-core" at the top of any stylesheet that uses USWDS members.**
    ```scss
    /* custom stylesheet */
    @use "uswds-core" as *;
    ```

    In USWDS 3.0, `uswds-core` is the name of the package (or "module" in Sass terminology) that contains all the members used in USWDS Sass. Loading this package makes all of these members available to your stylesheet.

    In this step, we add `as *` to our `@use` statement to indicate that we don't want any namespacing attached to USWDS members. By default, Sass members brought in via `@use` are namespaced using the basename of the file url. For example, if we were to use the the default load pattern `@use "uswds-color`, our `color()` function would need to be called with `uswds-core.color()`. Removing namespacing enables us to use the same member references that we used with the older `@import` syntax.

    For more information on controlling namespacing, read the [Sass documentation on namespacing](https://sass-lang.com/documentation/at-rules/use#choosing-a-namespace).

1. **Check if your project uses members defined outside of USWDS.** This includes searching for references to [Sass' built-in modules](https://sass-lang.com/documentation/modules). If it does, you'll need to include these as well via `@use` at the top of the document.

   As an example, your stylesheet might contain the following lines at the top:

    ```scss
    /* custom stylesheet */
    @use "sass:math";
    @use "sass:list";
    @use "sass:color";
    @use "uswds-core" as *;
    ```

    Once each of your custom Sass files loads the required modules, you should be done!

1. **Recompile your Sass and check for errors.**

### 6. Optimize your installation

{:.border-top-2px.border-base-lighter.padding-top-1}
Upgrading to USWDS 3.0 introduces many opportunities to improve the performance of your project. While none of the steps listed below are necessary to make USWDS 3.0 work, completing these items will likely show significant improvements in both file size and compilation times for your project.

#### Using component packages
By default, a USWDS installation includes every component available to the design system. But most projects don't use all these components. USWDS 3.0 allows you to use only the components you need for your project, via component packages.

A component package is a self-contained module that includes only code related to a specific component. In addition to an omnibus `uswds` package, USWDS 3.0 includes packages for every component available in the design system, and for some features (like fonts) that are common to many components. (A full list of the packages available in USWDS 3.0 is included in the [table](#available-packages) below.)

Using individual component packages instead of the `uswds` bundle package can result in a significant reduction in the size of your project CSS and noticeable improvements to compile time. Complete the following steps to load component packages in your project:

1. **Determine if your project is using the `uswds` package bundle.** By default, USWDS projects load the `uswds` package to include all the styles available to the design system. You will see a line like the following in your Sass entry point when you're using the `uswds` package:

    ```scss
    @forward "uswds";
    ```

    If you are using the `uswds` package and want to use component packages instead, proceed to the next step.

2. **Determine which packages your project needs.** The process of determining which packages your project needs is not automatic. Most projects will need to do a little work to identify the components their project uses.

    A brute-force method to determine which packages your project uses is to search your codebase for use of a key class name associated with that component, like `usa-accordion` for accordions. All `usa-` prefixed packages use the same name as their CSS class. For reference, all the available packages in USWDS 3.0 are listed in the [table below](#available-packages). Search package-by-package for instances of the package or search your codebase for instances of `usa-` and make a running list of all the packages you use.

3. **Load the your project's necessary component packages in your Sass entry point.** If you find a hit for the class name in your codebase, include the relevant package in your Sass entry point.

    For instance, if you found `usa-banner`, `usa-identifier`, `usa-button`, and `usa-accordion`, you might attach the following packages in your Sass entry point:

    ```scss
    @forward "usa-accordion";
    @forward "usa-banner";
    @forward "usa-button";
    @forward "usa-identifier";
    ```

    Each package is smart enough to include any dependent package it needs to display properly.

4. Many projects will need to use the utilities package (`uswds-utilities`) and the global package (`uswds-global`). If your site uses utilities, be sure to include the utilites package. The global package includes normalize. If you compile your styles and see improper spacing around many elements (like around the perimeter of the page), be sure to include `uswds-global`.

5. **Remove your reference to the uswds bundle package.** Once all of your project's component packages are loaded, you can safely remove the `uswds` package reference from your entry point.
```diff
- @forward "uswds";
+ @forward "usa-accordion";
+ @forward "usa-banner";
+ @forward "usa-button";
+ @forward "usa-identifier";
```

#### Available packages

The following packages are available to any USWDS project. Each package includes component styles related to the package name, and additional styles related to any component dependencies.

For any package listed below, add a `@forward "[package]"` line to your Sass entry point. For instance, if you wanted to add the `usa-accordion` package, add the following line:

`@forward "usa-accordion";`

{% include packages-table.html %}

#### Managing utility classes

Utility classes have their own naming conventions that are a bit less straightforward to identify. Look at the table below. If your codebase includes classes that start with one of the **class bases**, include its **utility module name** in the `$output-these-utilities setting`.

Look for classes in your codebase for searching for a regular expression string like `[" ]flex-`.

For instance, if you found `add-list-reset`, `font-`, `order-`, and `display-`, you might use the following setting:

```scss
$output-these-utilities: (
  "add-list-reset",
  "display",
  "font",
  "order"
),
```

{% include utilities-module-table.html %}


#### Update to the sass-embedded compiler

The `sass-embedded` package compiles Sass faster than the `gulp-sass` or `gulp-dart-sass` compiler.

In a gulp workflow, we recommend using `gulp-sass` and `sass-embedded` together for the simplest and fastest compiling.

1. **Install `gulp-sass` and `sass-embedded` in your project:**
    ```
    npm install gulp-sass sass-embedded –s
    ```

2. **Uninstall any other sass compiling packages, if they exist:**

    ```
    npm uninstall sass
    npm uninstall gulp-dart-sass
    ```
3. In your Sass gulp tasks file, **replace your existing sass compiler package import with `gulp-sass` and `sass-embedded`:**
```diff
- const sass = require("gulp-dart-scss");
+ const sass = require("gulp-sass")(require("sass-embedded"));
```

4. In your Sass gulp tasks file, **remove any line that sets the sass.compiler:**
```diff
- sass.compiler = require("sass");
```

5. **Recompile.**

#### Reduce utility responsive breakpoints

There are nine responsive breakpoints available to utilities and the layout grid. These are defined in the `$theme-utility-breakpoints setting`. If a utility breakpoint is set to `true`, any layout grid class and any utility with its responsive key set to true will output responsive classes.

This can result in bulky CSS, and if your project doesn't use these breakpoints you can save a lot of space by setting these breakpoints to false. By default, `mobile-lg`, `tablet`, and `desktop` are set to true:

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

For each breakpoint set to true in your project, search for its usage in your codebase by searching for the **breakpoint name** + a colon (`:`). So, to search for the `tablet-lg` breakpoint, search for `tablet-lg:`. If that breakpoint does not appear, you can set the value to `false`.

#### Using package source

Once you've optimized your project to use only the component packages you need, you can further optimize those packages. Each component package includes, by reference, code for any additional packages it depends on. You can improve performance by manually forwarding all your project component's dependencies, then pointing your Sass entry point directly at each package source, bypassing each package's dependency import.

For example, according to the table in [Available packages, above](#available-packages), the `usa-banner` component includes the following packages as dependencies: `usa-icon`, `usa-layout-grid`, `usa-media-block`, and `uswds-fonts`. Then we'll look at these dependencies' dependencies:

- `usa-icon` depends on `uswds-core`
- `usa-layout-grid` depends on `uswds-core`
- `usa-media-block` depends on `usa-layout-grid` and `uswds-fonts`
- `uswds-fonts` depends on `uswds-core`

Instead of simply forwarding the `usa-banner` component, you can import the component and all related dependencies directly. Note: We've used `uswds-core` already when we forwarded our settings, so we won't forward it again:

```scss
// Instead of...
@forward "usa-banner";

// Import the component and all related dependencies
@forward "usa-banner";
@forward "usa-layout-grid";
@forward "usa-media-block";
@forward "uswds-fonts";
```

Now, instead of pointing at the component packages, we can point directly at the component package source. For each `usa-` prefixed component package, append `/src/styles` to its name:

```scss
@forward "usa-banner/src/styles";
@forward "usa-layout-grid/src/styles";
@forward "usa-media-block/src/styles";
@forward "uswds-fonts";
```

When you recompile, you should see an improvement in compile time.

**Note:** This performance technique may cause issues when you update USWDS versions. Check the release notes for any new version to see if we've changed any package's dependencies, which we will indicate as a potential breaking change.
