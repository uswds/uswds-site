var fs = require("fs");
var path = require("path");
var child_process = require("child_process");
var gulp = require("gulp");
var dutil = require("./doc-util");
var del = require("del");

const cleanFonts = () => del("assets/fonts/");
const cleanImages = () => del("assets/img");
const cleanJavascript = () => del("assets/js");
const cleanStyles = () => del("assets/css");
const removeAssetsDir = () => del("assets");
const cleanAssets = gulp.parallel(
  cleanFonts,
  cleanImages,
  cleanJavascript,
  cleanStyles,
  removeAssetsDir,
);

function spawnP(cmd, args, opts) {
  return new Promise((resolve, reject) => {
    console.log(`running ${cmd} ${args}`);
    child_process
      .spawn(cmd, args, opts)
      .on("error", (err) => {
        reject(new Error(err));
      })
      .on("exit", (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error("Building USWDS failed!"));
        }
      });
  });
}

// We might be using USWDS from a git repository instead of npm, in
// which case it might not have the pre-built assets we need. If that's
// the case, we'll want to build those assets.

function buildUSWDSComponents() {
  const rootDir = path.normalize(path.join(__dirname, "..", ".."));
  const uswdsDir = path.join(rootDir, "node_modules", "@uswds/uswds");
  const componentDir = path.join(uswdsDir, "html-templates");
  const gulpfile = path.join(uswdsDir, "gulpfile.js");

  if (fs.existsSync(componentDir)) {
    dutil.logMessage("Building USWDS components", "USWDS is already built.");
    return Promise.resolve();
  } else {
    dutil.logMessage(__dirname, componentDir);
    dutil.logMessage("Building USWDS components", "Building USWDS...");
    if (!fs.existsSync(gulpfile)) {
      return Promise.reject(
        new Error(
          `${gulpfile} does not exist! You need a newer version of USWDS; ` +
            `specifically, one that includes the following PR: ` +
            `https://github.com/uswds/uswds/pull/2050`,
        ),
      );
    }

    const sharedOpts = { stdio: "inherit", cwd: uswdsDir };

    /**
     * We need to: install USWDS deps and build components to HTML.
     */
    return spawnP("npm", ["install", "--legacy-peer-deps"], sharedOpts).then(
      () => spawnP("npm", ["run", "build:html"], sharedOpts),
    );
  }
}

module.exports = {
  cleanAssets,
  buildUSWDSComponents,
};
