# Draft U.S. Web Design Standards documentation

This repo includes code and documentation for the Draft U.S. Web Design Standards website. For information on the Standards (components) themselves, please visit [web-design-standards](https://github.com/18F/web-design-standards).

Note that this README includes steps to pull the latest version of the Standards into your local instance of the documentation.

## Running locally

The Draft U.S. Web Design Standards documentation is built using Jekyll for the file framework, gulp for task management, and the node module for the Standards.

### Before you start

You will need to have the following installed on your machine before following the commands below:

1. Ruby v2.2.2+, [Installation guides](https://www.ruby-lang.org/en/documentation/installation/)
1. Node v4.2.3+, [Installation guides](https://nodejs.org/en/download/)
1. Bundler v1.12.3+, [Installation guides](http://bundler.io/v1.13/guides/using_bundler_in_application.html#getting-started---installing-bundler-and-bundle-init)

### Building the documentation with gulp

The documentation is built using [gulp](http://gulpjs.com/) automation. To use gulp, first make sure you have it installed on your machine (globally):

```sh
npm install --global gulp-cli
```

To start, switch to your local copy of the repository in terminal then run the following command to install project dependencies:

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

- `npm test`: Runs `npm run lint` and can also be used to run any tests.

- `npm run watch`: Runs a series of commands that watches for any changes in both the Standards node module and the root level asset folders in this repo.

### Using the latest version of the `uswds` package

Sometimes you will want to use the latest version of the `web-design-standards` repo. Follow these steps to do so:

1. Clone the latest version of the [`web-design-standards` repo](https://github.com/18F/web-design-standards/tree/staging).
1. Run `npm install` to install the dependencies required for the package in the `web-design-standards` directory.
1. Run `npm run build:package` to create the built version of the Standards in the `web-design-standards` directory.
1. Run `npm link` in the _root level_ of the `web-design-standards` directory on your local machine.
1. Run `npm link uswds` in the _root level_ of the `web-design-standards-docs` directory on your local machine.
1. Run `npm run watch` in both project directories to have changes automatically built and compiled on changes to any asset files.
1. In a new terminal window, run `npm start` in the `web-design-standards-docs` directory to start the Jekyll server locally.

You are now using the latest version of the Standards via your cloned version on your local machine. To stop using this version, type `npm unlink uswds` from the _root level_ of the `web-design-standards-docs` directory.

### Continuously Delivered Demo Sites

Submitting a PR with a branch name prefixed with `demo_` will trigger a deployment to `standards-demo-<BRANCH_NAME>.usa.gov`. Please be mindful of using these deployments sparingly. Once a branch has been deleted or abandoned, the instance in :cloud:.gov can be deleted with the following commands.

```shell
$ cf t -o gsa-wds -s wds-demo # target the proper org and space.
$ cf apps # lists all applications in the space.
$ cf delete -f standards-demo-<BRANCH_NAME> # to delete the application without prompting.
```

This feature is limited to pull requests not coming from forks.

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). These guidelines are directions for opening issues and submitting pull requests, and they also detail the coding and design standards we follow.
