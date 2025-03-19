# U.S. Web Design System (USWDS) Documentation Website  

Welcome! This repository contains the code for the **U.S. Web Design System (USWDS) documentation website**. If you're looking for the main USWDS components and codebase, head over to our [USWDS repository](https://github.com/uswds/uswds).  

---

## Running the Website Locally  

This site is built using:  
- [Jekyll](https://jekyllrb.com/), a static site generator
- [Gulp.js](https://gulpjs.com/), for task automation  
- [USWDS npm package, stable version](https://www.npmjs.com/package/uswds)  

Follow the steps below to set up the site on your local machine.  

### Prerequisites  

Before getting started, make sure you have the following installed:  

1. **Git** – [Installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  
2. **Ruby** – Version specified in [.ruby-version](https://github.com/uswds/uswds-site/blob/main/.ruby-version) or [.tool-versions](https://github.com/uswds/uswds-site/blob/main/.tool-versions)  
   - [Installation guide](https://www.ruby-lang.org/en/documentation/installation/)  
3. **Node.js** – Version specified in [.nvmrc](https://github.com/uswds/uswds-site/blob/main/.nvmrc) or [.tool-versions](https://github.com/uswds/uswds-site/blob/main/.tool-versions)  
   - [Installation guide](https://nodejs.org/en/download)  
4. **Bundler** – Version specified in [.bundler-version](https://github.com/uswds/uswds-site/blob/main/.bundler-version)  
   - [Installation guide](https://bundler.io/guides/using_bundler_in_applications.html#getting-started---installing-bundler-and-bundle-init)   

#### ⚠️ Ubuntu 20.04 Users  
If you encounter this error:  
```sh
bundler: failed to load command: jekyll (/usr/share/rvm/gems/ruby-3.0.2/bin/jekyll)
```  
Fix it by running:  
```sh
gem install ffi -- --disable-system-libffi
```  

---

## Installation  

1. **Clone the repository:**  
   ```sh
   git clone git@github.com:uswds/uswds-site.git
   ```  

2. **Navigate into the project folder:**  
   ```sh
   cd uswds-site
   ```  

3. **Install dependencies:**  
   ```sh
   npm install
   bundle install
   ```  

4. **Start the local server:**  
   ```sh
   npm start
   ```  

5. **View the site in your browser:**  
   Open [http://127.0.0.1:4000](http://127.0.0.1:4000) to see the site running locally.  

---

## Useful Commands  

Here are some additional commands you may find helpful:  

- **`npm run clean`** – Removes copied dependency assets.  
- **`npm run lint`** – Runs `eslint` and `sass-lint` to check for coding issues.  
- **`npm test`** – Runs all tests and linters.  
- **`npm run watch`** – Watches for changes and automatically rebuilds the site.  
- **`npm start -- --incremental`** or **`npm run serve`** – Runs the site with incremental regeneration to speed up build times.  

---

## Using the Development Version of USWDS  

If you need to work with the latest development version of USWDS, follow these steps:  

1. **Clone the `uswds` repository:**  
   ```sh
   git clone https://github.com/uswds/uswds.git
   ```  
2. **Navigate to the `uswds` directory and install dependencies:**  
   ```sh
   cd uswds
   npm install
   ```  
3. **Build USWDS:**  
   ```sh
   npm run build
   ```  
4. **Link USWDS to your local setup:**  
   ```sh
   npm link
   ```  
5. **Go back to `uswds-site` and link it to the local USWDS version:**  
   ```sh
   cd ../uswds-site
   npm link uswds
   ```  
6. **Start the `uswds` development server:**  
   ```sh
   npm start
   ```  
7. **Set the `LIBRARY_BASE_URL` environment variable:**  
   ```sh
   export LIBRARY_BASE_URL="http://127.0.0.1:6006"
   ```  
8. **Start the USWDS documentation site:**  
   ```sh
   npm run serve
   npm run watch
   ```  

📝 **Note:** Changes to USWDS won’t automatically rebuild the site—you’ll need to manually trigger a rebuild.  

To unlink the development version, run:  
```sh
npm unlink uswds
```  

---

## Components  

This site displays USWDS components using pre-built HTML templates from the `html-templates` directory. These templates are integrated using a custom `library_component` Jekyll tag.  

---

## Deployment & Previews  

The site is deployed using [cloud.gov Pages](https://cloud.gov/pages/).  
- Changes pushed to the `main` branch will automatically update the live site.  
- Public previews are generated for each branch pushed to GitHub.  

⚠️ **If a new section fails to build on Pages**, try clearing the cache:  
```sh
bundle update
```  

---

## Updating the USWDS Version  

USWDS code base is included as a Git dependency in `package.json`. To update it:  

- **To install a specific commit:**  
  ```sh
  npm install --save "uswds/uswds#commit-hash"
  ```  
- **To install a specific version tag:**  
  ```sh
  npm install --save "uswds/uswds#v1.3.1"
  ```  

The version number is automatically detected and displayed on the site. Always use an official version tag for `main` branch commits to avoid confusion.  

---

## Adding Content to the "Updates" Section  

To add an update, see the instructions in the [`_posts` directory](_posts/#readme).  

---

## Dynamic Content  

Some content on this site is dynamically fetched from GitHub. To avoid API rate limits, you may want to:  

1. **Create a GitHub access token:** [Guide](https://github.com/blog/1509-personal-api-tokens)  
2. **Set the token in your environment:**  
   ```sh
   export GITHUB_ACCESS_TOKEN="your-token-here"
   ```  

If you notice outdated data, clear the cache with:  
```sh
rm -rf .jekyll_get_cache
```  

---

## Contributing  

We welcome contributions! Please review our [contributing guidelines](CONTRIBUTING.md) before opening an issue or submitting a pull request. These guidelines cover our coding standards and best practices.  

---

### 🎉 Thanks for Supporting USWDS!  

We appreciate your contributions to making digital services better and more accessible for everyone. 🚀 