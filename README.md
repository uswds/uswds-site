# U.S. Web Design Standards documentation

This repo includes code and documentation for the  U.S. Web Design Standards website. For information on the Standards (components) themselves, please visit [web-design-standards](https://github.com/uswds/uswds).

Note that this README includes steps to pull the latest version of the Standards into your local instance of the documentation.


## Running locally

The U.S. Web Design Standards documentation is built using Jekyll for the file framework, gulp for task management, and the node module for the Standards.


### Before you start

You will need to have the following installed on your machine before following the commands below:

1. Ruby v2.2.2+, [Installation guides](https://www.ruby-lang.org/en/documentation/installation/)
1. Node v4.2.3+, [Installation guides](https://nodejs.org/en/download/)
1. Bundler v1.12.3+, [Installation guides](http://bundler.io/v1.13/guides/using_bundler_in_application.html#getting-started---installing-bundler-and-bundle-init)
1. Chrome v59 or higher (v60 if on Windows)

### Building the documentation with gulp

Some parts of the documentation are built using [gulp](http://gulpjs.com/).

To work on the site, switch to your local copy of the repository in terminal then run the following command to install project dependencies:

```sh
npm install
```

Now that all of your dependencies are installed, you can run your local server by running the following command:

```sh
npm start
```

Go to `127.0.0.1:4000` in your browser — you should be viewing a local instance of [standards.usa.gov](https://standards.usa.gov).

Here are a few other utility commands you may find useful:

- `npm run clean`: Cleans out copied-over dependency assets.

- `npm run lint`: Runs `eslint` and `sass-lint` against JavaScript and Sass files.

- `npm test`: Runs all tests and linters.

- `npm run watch`: Runs a series of commands that watches for any changes in both the Standards node module and the root level asset folders in this repo.

- `npm start -- --incremental`: Runs your local server with incremental regeneration enabled to greatly improve build time. Use instead of `npm start`.

### Using the latest version of the `uswds` package

Sometimes you will want to use the latest version of the `web-design-standards` repo. Follow these steps to do so:

1. Clone the latest version of the [`web-design-standards` repo](https://github.com/uswds/uswds/tree/develop).
1. Run `npm install` to install the dependencies required for the package in the `web-design-standards` directory.
1. Run `npm run build` to create the built version of the Standards in the `web-design-standards` directory.
1. Run `npm link` in the _root level_ of the `web-design-standards` directory on your local machine.
1. Run `npm link uswds` in the _root level_ of the `web-design-standards-docs` directory on your local machine.
1. Set the `FRACTAL_BASE_URL` env var to the running fractal instance for `web-design-standards`. In your terminal window in the `web-design-standards-docs` directory, enter `export FRACTAL_BASE_URL="http://127.0.0.1:3000"`.
1. Run `npm run watch` in both project directories to have changes automatically built and compiled on changes to any asset files.
1. In a new terminal window, run `npm start` in the `web-design-standards-docs` directory to start the Jekyll server locally.

You are now using the latest version of the Standards via your cloned version on your local machine. To stop using this version, type `npm unlink uswds` from the _root level_ of the `web-design-standards-docs` directory.

### Fractal components

The Web Design Standards uses the [fractal design system builder](http://fractal.build/) to organize and document the components. This documentation site pulls the components from fractal to showcase them on the site. This is done with a custom `fractal_component` Jekyll tag, which takes the full name of the fractal component as a parameter.

### Deployment and previews

This site is deployed on [Federalist](https://federalist.fr.cloud.gov/), which automatically builds the site whenever commits are pushed to `master`.

Federalist also builds public previews for each branch pushed to GitHub. For instance, to see the latest build of the `develop` branch, visit:

https://federalist.fr.cloud.gov/preview/18f/web-design-standards-docs/develop/


### Adding content to the "Updates" section

See the [`_posts` directory](_posts/#readme) for instructions on adding updates.

### Dynamic content

Some of the content on the documentation site is dynamically fetched from
GitHub. If you want to ensure that its API won't rate-limit you, you
may want to
[create an access token](https://github.com/blog/1509-personal-api-tokens)
and assign it to your `GITHUB_ACCESS_TOKEN` environment variable.

The dynamic content is stored in the `.jekyll_get_cache` directory and
won't be re-fetched once it's cached there. However, this means that your
data can get stale over time, so if you want to ensure that your site
is using the very latest data, you'll want to clear the cache by running:

```
rm -rf .jekyll_get_cache
```

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). These guidelines are directions for opening issues and submitting pull requests, and they also detail the coding and design standards we follow.
