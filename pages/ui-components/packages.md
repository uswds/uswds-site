---
permalink: /components/packages/
layout: styleguide
title: Packages
category: Components
lead: USWDS component packages allow you to import only the components your project needs.
type: docs
subnav:
  - text: Introducing packages
    href: '#introducing-packages'
  - text: Included packages
    href: '#included-packages'
  - text: What's in a package
    href: '#whats-in-a-package'
  - text: Package Sass requirements
    href: '#package-sass-requirements-load-paths'
  - text: Latest updates
    href: '#changelog'
changelog:
  key: docs-packages
---

## Introducing packages
Few USWDS projects need to use the entire design system. Include only the code your project needs with USWDS packages.

**Packages** are discrete units of functionality. Most USWDS packages are components (like [`usa-search`]({{ site.baseurl }}/components/search), [`usa-banner`]({{ site.baseurl }}/components/banner), or [`usa-accordion`]({{ site.baseurl }}/components/accordion)), but packages can also include items like fonts (`uswds-fonts`), bundles of components (`uswds-form-controls`), or simply USWDS mixins, functions, and tokens (`uswds-core`).

Instead of including everything the design system offers by using the `uswds` package with code like the following:

```sass
@forward "uswds";
```

You can include only the code you need, with something like:
```sass
@forward "usa-accordion";
@forward "usa-button";
@forward "usa-banner";
@forward "usa-identifier";
```

{% assign packages = site.data.packages %}
{% assign uswdsPackage = packages | where: "name", "uswds" | first %}
Using packages helps reduce unused code, reduces the size of the final compiled CSS, and typically results in faster compile times. The `uswds` package included by default in most projects is {{ uswdsPackage.fullSize | times: 0.185 | round }} KB gzipped. Using packages typically cuts that number by half.

With packages and Sass module syntax in USWDS 3.0, you can be confident that packages that share code dependencies will only include those dependencies once in a project.

### The uswds-core package
The `uswds-core` package is a new package in USWDS 3.0. `uswds-core` is the engine of the design system, and includes all the functions, mixins, placeholders, tokens, and fonts necessary to write USWDS Sass.

Any custom Sass you write needs to `@use "uswds-core"` at the top of the file to load the USWDS design language. We suggest using `@use "uswds-core" as *` to add USWDS to the global namespace. For example:

```scss
/* custom-styles.scss */

@use "uswds-core" as *;

.custom-component {
  @include u-bg("primary-vivid");
}

...
```

## Included packages

USWDS includes {{ packages | size }} packages — a package for each component or named class group (prefixed with `usa-`), and a handful of bundle packages that collect multiple components together (prefixed with `uswds-`).

Using any package in your code will install the code for the component, plus dependency code related to that component. The following table shows each USWDS package with its gzipped size, full size, source code size, and dependencies.

{% include packages-table.html %}

## What's in a package

As of USWDS 3.0, the USWDS codebase is organized around packages. Packages live in the top-level `packages` directory, and include not only Sass styles, but JavaScript, Twig templates, tests, assets, and sometimes content. Here's what you'll find in the `usa-accordion` package:

```
├── packages/
│   ...
│   ├── usa-accordion/
│   │   ├── src/
│   │   │   ├── content/
│   │   │   │   ├── index.js
│   │   │   │   ├── usa-accordion.json
│   │   │   │   ├── usa-accordion~bordered.json
│   │   │   │   ├── usa-accordion~multiselectable.json
│   │   │   ├── styles/
│   │   │   │   ├── _index.scss
│   │   │   │   └── accordion.scss
│   │   │   ├── test/
│   │   │   │   ├── accordion.spec.js
│   │   │   │   └── template.html
│   │   │   ├── index.js
│   │   │   ├── usa-accordion.stories.js
│   │   │   └── usa-accordion.twig
│   │   └── _index.scss
```

The `/[package]/_index.scss` file is the Sass entry point for the package styles. It forwards any package style dependencies in addition to the component source itself, which lives in `[package]/src/styles/`. The `usa-search` package entry point looks something like this:

```sass
/* ./packages/usa-search/_index.scss */

//dependencies
@forward "uswds-fonts";
@forward "uswds-helpers";
@forward "usa-button";
@forward "usa-icon";
@forward "usa-input";

// src
@forward "src/styles";
```

### Importing package source only
Developers can save some compile time by bypassing the package Sass entry point, and forwarding straight to the package source. Only `usa-` prefixed packages have their own source files available to this technique.

Using this technique speeds up compiles, but requires that developers forward any package dependency manually. For instance, let's imagine a project with the following packages in its Sass entry point:

```sass
@forward "usa-accordion";
@forward "usa-banner";
@forward "usa-button";
@forward "usa-identifier";
@forward "uswds-helpers";
```

Using only package source would result in the following:

```sass
@forward "usa-accordion/src/styles";
@forward "usa-banner/src/styles";
@forward "usa-button/src/styles";
@forward "usa-icon/src/styles";
@forward "usa-identifier/src/styles";
@forward "usa-layout-grid/src/styles";
@forward "usa-list/src/styles";
@forward "usa-media-block/src/styles";
@forward "uswds-core";
@forward "uswds-fonts";
@forward "uswds-helpers";
```

If you suffer from slow compiles, it may be worth experimenting with source forwarding.

## Package Sass requirements: Load paths
Using USWDS 3.0 and packages requires compiling your Sass with load paths. Load paths tell your Sass compiler where to look for USWDS packages. Any compiler needs to include a load path to the `@uswds/uswds/packages` directory:

```js
"./node_modules/@uswds/uswds/packages"
```

In a gulpfile, use `includePaths` in your `sass()` function.
```js
  sass({
    includePaths: [
      "./node_modules/@uswds/uswds/packages",
    ],
  })
```

In webpack, include `includePaths` within the sassOptions of your Sass loader:

```js
loader: "sass-loader",
options: {
  sassOptions: {
    includePaths: [
      "./node_modules/@uswds/uswds/packages",
    ],
  },
},
```

Using [`uswds-compile`](https://github.com/uswds/uswds-compile) sets load paths automatically and can be a good way to build a reliable compile workflow into your project.

