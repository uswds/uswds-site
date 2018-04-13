---
permalink: /getting-started/developers/
layout: styleguide
title: For developers
category: Getting started
lead: The UI components are built on a solid HTML foundation, progressively enhanced to provide core experiences across browsers. All users will have access to the same critical information and experiences regardless of what browser they use, although those experiences will render better in newer browsers. If JavaScript fails, users will still get a robust HTML foundation.
subnav:
- text: Installation
  href: '#installation'
- text: CSS architecture
  href: '#css-architecture'
- text: Customization
  href: '#customization-and-theming'
- text: Where things live
  href: '#where-things-live'
- text: Browser Support
  href: '#browser-support'
- text: Accessibility
  href: '#accessibility'
- text: Contributions
  href: '#contribution-guidelines'
---

## Installation

There are a few different ways to use the Design System within your project. Which one you choose depends on the needs of your project and how you are most comfortable working. Here are a few notes on what to consider when deciding which installation method to use:

*Download the Design System if:*

- You are not familiar with `npm` and package management.

*Use the Design System `npm` package if:*

- You are familiar with using `npm` and package management.

### Download

To use the Design System on your project, you’ll need to include the CSS and JavaScript files in each HTML page in your project.

1. First, download the Design System assets:

    <a class="link-download" href="https://github.com/uswds/uswds/releases/download/v{{ site.data.uswds_version }}/uswds-{{ site.data.uswds_version }}.zip">Download code</a>
    <span class="link-download-subtext">Version {{ site.data.uswds_version }}</span>

    After extracting the zip file you should see the following file and folder structure:

    ```
    uswds-{{ site.data.uswds_version }}/
    ├── css/
    │   ├── uswds.min.css.map
    │   ├── uswds.min.css
    │   └── uswds.css
    ├── fonts/
    ├── img/
    ├── js/
    │   ├── uswds.min.js.map
    │   ├── uswds.min.js
    │   └── uswds.js
    └── scss/
    ```

2. Copy these files and folders into a relevant place in your project's code base. Here is an example structure for how this might look:

    ```
    example-project/
    ├── assets/
    │   ├── uswds-{{ site.data.uswds_version }}/
    │   ├── stylesheets/
    │   ├── images/
    │   └── javascript/
    └── index.html
    ```

    You'll notice in our example above that we also outline a `stylesheets`, `images` and `javascript` folder in your `assets` folder. These folders are to help organize any assets that are unique to your project.

3. To use the Design System on your project, you’ll need to reference the [CSS (Cascading Style Sheets)](https://developer.mozilla.org/en-US/docs/Web/CSS) and JavaScript files in each HTML page or dynamic templates in your project.

    Add the stylesheet `<link>` into your `<head>` to load the CSS:

    ```html
    <link rel="stylesheet" href="/path/to/your/assets/css/uswds.min.css">
    ```

    Add this `<script>` near the end of your page, right before the closing `</body>` tag:

    ```html
    <script src="/path/to/your/assets/js/uswds.min.js"></script>
    ```

    Here's an example of how to reference these assets in your `index.html` file:

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

      <!-- U.S. Web Design System CSS -->
      <link rel="stylesheet" href="assets/uswds-{{ site.data.uswds_version }}/css/uswds.min.css">

      <title>My example project</title>
    </head>
    <body>
      <h1>Hello, world!</h1>

      <!-- U.S. Web Design System JavaScript -->
      <script src="assets/uswds-{{ site.data.uswds_version }}/js/uswds.min.js"></script>
    </body>
    </html>
    ```

    And that’s it — you should now be able to copy our code samples into your site's HTML and start using the Design System.

    Note: We offer the CSS and the JavaScript in two versions — a minified version and an un-minified one. (In the examples above, we are using the minified files.) Use the minified files in a production environment or to reduce the file size of your downloaded assets. And the un-minified files are better if you are in a development environment or would like to debug the CSS or JavaScript assets in the browser.

    Note: We also provide Sass (SCSS) files in the zip file which you can compile to CSS. See [Sass](#sass) and [Customization and theming](#customization-and-theming).



### Install using npm

`npm` is a package manager for Node based projects. The U.S. Web Design System maintains a [`uswds` package](https://www.npmjs.com/package/uswds) for you to utilize both the pre-compiled and compiled files on your project.

1. Install `Node/npm`. Below is a link to find the install method that coincides with your operating system:

    Node v4.2.3+, [Installation guides](https://nodejs.org/en/download/)

    **Note for Windows users:** If you are using Windows and are unfamiliar with `Node` or `npm`, we recommend following [Team Treehouse's tutorial](http://blog.teamtreehouse.com/install-node-js-npm-windows) for more information.

2. Make sure you have installed it correctly:

    ```shell
    npm -v
    3.10.8 # This line may vary depending on what version of Node you've installed.
    ```

3. Create a `package.json` file. You can do this manually, but an easier method is to use the `npm init` command. This command will prompt you with a few questions to create your `package.json` file.

4. Add `uswds` to your project’s `package.json`:

    ```shell
    npm install --save uswds
    ```

    The `uswds` module is now installed as a dependency. You can use the un-compiled files found in the `src/` or the compiled files in the `dist/` directory.

    ```
    node_modules/uswds/
    ├── dist/
    │   ├── css/
    │   ├── fonts/
    │   ├── html/
    │   ├── img/
    │   ├── js/
    └── src/
        ├── fonts/
        ├── img/
        ├── js/
        ├── stylesheets/
        └── templates/
    ```

#### Importing assets

Since you are already using `npm`, the U.S. Web Design System team recommends leveraging the ability to write custom scripts. Here are some links to how we do this with our docs website using `npm` + [`gulp`](http://gulpjs.com/):

[Link to `npm` scripts example in `uswds-site`](https://github.com/uswds/uswds-site/blob/develop/package.json#L4)

[Link to gulpfile.js example in `uswds-site`](https://github.com/uswds/uswds-site/blob/develop/gulpfile.js)

#### Sass

The Design System is easily customizable using the power of [Sass (Syntactically Awesome Style Sheets)](http://sass-lang.com/). The main Sass (SCSS) source file is located here:

```
node_modules/uswds/src/stylesheets/uswds.scss
```

Global variables are defined in the `node_modules/uswds/src/stylesheets/core/_variables.scss` file. Custom theming can be done by copying the `_variables.scss` file into your own project’s Sass folder, changing applicable variable values, and importing it before `uswds.scss`.

Below is an example of how you might setup your main Sass file to achieve this:

```scss
@import 'variables.scss'; # Custom Sass variables file
@import 'node_modules/uswds/src/stylesheets/uswds.scss';
```

You can now use your copied version of `_variables.scss` to override any styles to create a more custom look and feel to your application.

The Design System uses [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) to automatically add vendor prefixes to the precompiled stylesheets (`css/uswds.min.css` and `css/uswds.css`) however prefixes will not be applied when using the Sass source files directly. If your project requires the use of Sass and vendor prefixes we recommend incorportaing a plugin such as [Autoprefixer](https://github.com/postcss/autoprefixer) into your build process.

#### JavaScript

`require('uswds')` will load all of the U.S. Web Design System’s JavaScript onto the page. Add this line to whatever initializer you use to load JavaScript into your application.

### Using another framework or package manager

If you’re using another framework or package manager that doesn’t support NPM, you can find the source files in this repository and use them in your project. Otherwise, we recommend that you follow the [download instructions](#download). Please note that the core team [isn’t responsible for all frameworks’ implementations](https://github.com/uswds/uswds/issues/877).

If you’re interested in maintaining a package that helps us distribute the U.S. Web Design System, the project’s build system can help you create distribution bundles to use in your project. Please read our [contribution guidelines][] to locally build distributions for your framework or package manager.

### Need installation help?

Do you have questions or need help with setup? Did you run into any weird errors while following these instructions? Feel free to open an issue here:

[https://github.com/uswds/uswds/issues](https://github.com/uswds/uswds/issues).

You can also email us directly at [uswds@gsa.gov](mailto:uswds@gsa.gov).

## CSS architecture

* The CSS foundation of this site is built with the **[Sass](https://sass-lang.com)** preprocessor language.
* Uses **[Bourbon](http://bourbon.io/)** for its simple and lightweight Sass mixin library, and the **[Neat](http://neat.bourbon.io/)** library for the grid framework. Bourbon and Neat are open-source products from **[thoughtbot](https://thoughtbot.com/)**.
* The CSS organization and naming conventions follow **[18F’s CSS Front End Guide](https://frontend.18f.gov/css/)**.
* CSS selectors are **prefixed** with `usa` (For example: `.usa-button`). This identifier helps the design system avoid conflicts with other styles on a site which are not part of the U.S. Web Design System.
* Uses a **[modified BEM](https://frontend.18f.gov/css/naming/)** approach created by 18F for naming CSS selectors. Objects in CSS are separated by single dashes. Multi-word objects are separated by an underscore (For example: `.usa-button-cool_feature-active`).
* Uses **modular CSS** for scalable, modular, and flexible code.
* Uses **nesting** when appropriate. Nest minimally with up to two levels of nesting.
* Hard-coded magic numbers are avoided and, if necessary, defined in the `core/variables` scss file.
* Media queries are built **mobile first**.
* **Spacing units** are as much as possible defined as rem or em units so they scale appropriately with text size. Pixels can be used for detail work and should not exceed 5px (For example: 3px borders).

**For more information, visit:**
[18F’s CSS Front End Guide](https://frontend.18f.gov/css/)

## JS customization

**Unfortunately, customizing the JavaScript for the USWDS currently requires NodeJS and a module bundler like Browserify or Webpack. We apologize for this inconvenience, and are working to resolve it in a future release of the Design System.**

The JavaScript for the USWDS is separated into components in the same manner as the visual interface which is all initialized with event handlers when the DOM is ready. These components are accessible as CommonJS modules that can be required in other JavaScript files which then must be built for the browser. The components are currently not accessible in the global browser scope, but can be extended to be included by requiring `components` and setting it to a global scope:

```js
window.uswds = require('./components');
```

Each component has a standardized interface that can be used to extend it further. The components store a HTML class name (e.g. `.usa-accordion-button[aria-controls]`) that's used to link HTML elements with the JS component, so when a component is initialized, it will search through the current HTML DOM finding all elements that match its class and inialize the component JavaScript for those elements. The primary methods each component has are as follows:

- `on`: Initialize a component's JavaScript behavior by passing the root element, such as `window.document`.
- `off`: The opposite of `on`, de-initializes a component, removing any JavaScript event handlers on the component.
- `hide`: Hide the whole component.
- `show`: Shows a whole, hidden component.
- `toggle`: Toggles the visibility of a component on and off based on the previous state.

Some components have additional methods for manipulating specific aspects of them based on what they are and what they do. These can be found in the component's JS file.

## Customization and theming

The Design System can be customized to use different typography, colors and grid systems. The easiest way to do this is to use Sass and override the Design System’s global variables. If it isn’t possible to use Sass, do theming by overriding the CSS rules in the Design System set.

To start theming through Sass, copy the `core/variables` file into your own project’s Sass folder, changing applicable variable values, and importing it before the WDS. Below is an example of customizing the import of the Design System's all.scss file.

```scss
// src/main.scss
@import 'path/to/my/scss/files/main/scss/my-custom-vars';
@import 'lib/uswds/src/stylesheets/all';
```

```scss
// path/to/my/scss/files/main/scss/my-custom_vars.scss

// Colors
$color-primary: #2c3e50;
$color-secondary: #ad2020;
$color-secondary-dark: #b0392e;

// Typography
$font-serif: 'Georgia', 'Times', serif;
$h2-font-size: 2rem;
$h3-font-size: 1.75rem;
$heading-line-height: 1.4;

// Grid/breakpoints
$small-screen:  540px !default;
$medium-screen: 620px !default;
$large-screen:  1120px !default;
```

### Set the base asset path (fonts and images)
If you copy the USWDS `dist` directory to a folder on your project or your fonts and images are in the same folder, set the location of the directory with `$asset-path: path/to/my/assets/`. The default is set to `$asset-path: ../`. This will be appended to the font and image path variables so you only need to set this variable. You can also set the font and image paths individually:

```
$font-path: path/to/my/fonts;
$image-path: path/to/my/images;
```

NOTE: If you plan on upgrading to newer versions of the Design System in the future, or are not using your own forked version of the Design System, try to avoid making changes in the Design System folder itself. Doing so could make it impossible to upgrade in the future without undoing your custom changes.

### Main variables that can be customized
* Colors can be found in the `core/variables` [file, line 35](https://github.com/uswds/uswds/blob/develop/src/stylesheets/core/_variables.scss#L35).
* Font families can be found in the `core/variables` [file, line 28](https://github.com/uswds/uswds/blob/develop/src/stylesheets/core/_variables.scss#L28).
* Typography sizing can be found in `core/variables` [file, line 13](https://github.com/uswds/uswds/blob/develop/src/stylesheets/core/_variables.scss#L13).
* Grid and breakpoint settings can be found in `core/variables` [file, line 87](https://github.com/uswds/uswds/blob/develop/src/stylesheets/core/_variables.scss#L87).


## Where things live

* **HTML** markup for the components is located in: `src/html` in the site root.
* **Sass** styles are located in: `src/stylesheets/ (/core, /elements, /components)`. **Compiled CSS** is located in the [downloadable zip file]({{ site.repos[0].url }}/releases/download/v{{ site.data.uswds_version }}/uswds-{{ site.data.uswds_version }}.zip) .
* **JS** is located in: `src/js/components (accordion.js, toggle-field-mark.js, toggle-form-input.js, validator.js)`.
* **Fonts** are located in: `src/fonts`.
* **Images** and icons are located in: `src/img`.

## Browser support

We’ve designed the Design System to support older and newer browsers through [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement). The current major version of the Design System (1.0) is designed to support the newest versions of Chrome, Firefox, Safari, and Internet Explorer 9 and up. The next major release (2.0) will follow the [2% rule](https://gds.blog.gov.uk/2012/01/25/support-for-browsers/): we will officially support any browser above 2% usage as observed by [analytics.usa.gov](https://analytics.usa.gov/). Currently, this means that the Design System version 2.0 will support the newest versions of Chrome, Firefox, Safari, and Internet Explorer 11 and up.

## Accessibility

The Design System also meets the [WCAG 2.0 AA accessibility guidelines](https://www.w3.org/TR/WCAG20/) and conforms to the standards of [Section 508 of the Rehabilitation Act](http://www.section508.gov/). We’re happy to answer questions about accessibility — email us for more information.

## Contribution guidelines

We’re so glad you’re thinking about contributing to the Design System! You can find our complete [contribution guidelines][] in our repo — please review them before submitting your contribution.

If you have any questions about these guidelines (or the Design System, more generally), don’t hesitate to [email us](mailto:uswds@gsa.gov) — we’ll get back to you within 48 hours.

[contribution guidelines]: https://github.com/uswds/uswds/blob/develop/CONTRIBUTING.md
