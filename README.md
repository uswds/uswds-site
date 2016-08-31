**DISCLAIMER: This repository is a WIP for the work documented in [this issue](https://github.com/18F/web-design-standards/issues/1343) in the main repo.**

# Draft U.S. Web Design Standards documentation

Website and documentation for using the Draft U.S. Web Design Standards: [https://standards.usa.gov](https://standards.usa.gov). Previously, the documentation was part of the [same repository as the Standards](https://github.com/18F/web-design-standards). We have separated them to provide more clarity. This README includes steps to pull the latest version of the Standards into your local instance of the documentation.

## Running locally

The Draft U.S. Web Design Standards documentation is built using Jekyll for the file framework, gulp for task management, and the node module for the Standards.

### Before you start

You will need to make sure you have the following installed on your machine before following the commands below:

1. Ruby v2.2.2+, [Installation guides](https://www.ruby-lang.org/en/documentation/installation/)
1. Node v4.2.3+, [Installation guides](https://nodejs.org/en/download/)

### Building the documentation with gulp

The documentation is built using [gulp](http://gulpjs.com/) automation. To use gulp, first make sure you have it installed on your machine (globally):

```sh
npm run install --global gulp-cli
```

To start, run the following command to install project dependencies:

```sh
npm run install
```

Next, you’ll perform a build step to copy and compile all of the necessary files that create the site:

```sh
npm run build
```

Now that all of your dependencies are installed, you can run you local server by running the following command:

```sh
npm run start
```

Go to `127.0.0.1:4000` in your browser — you should be viewing a local instance of [standards.usa.gov](https://standards.usa.gov).

Here is a reference to a few other utility commands:

- `npm run clean`: Cleans out copied-over dependency assets.

- `npm run lint`: Runs `eslint` and `sass-lint` against JavaScript and Sass files.

- `npm run test`: Runs `npm run lint` and can also be used to run any tests.

### Using the latest version of the `uswds` package

Sometimes you will want to use the latest version of the `web-design-standards` repo. Follow these steps to do so:

1. Clone the latest version of the [`web-design-standards` repo](https://github.com/18F/web-design-standards/tree/staging).
1. Run `npm link` in the _root level_ of the `web-design-standards` directory on your local machine.
1. Run `npm link uswds` in the _root level_ of the `web-design-standards-docs` directory on your local machine.

You are now using the latest version of the Standards via your cloned version on your local machine. To stop using this version, type `npm unlink uswds` from the _root level_ of the `web-design-standards-docs` directory.

**NOTE: Remember, you will want to be “watching” the `uswds` package if you plan on making updates to that package.**

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). These guidelines are directions for opening issues and submitting pull requests, and they also detail the coding and design standards we follow.
