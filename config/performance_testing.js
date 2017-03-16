
const exec = require('child_process').exec;
const spawn = require('child_process').spawn;

const Lighthouse = require('lighthouse');
const ChromeLauncher = require('lighthouse/lighthouse-cli/chrome-launcher.js').ChromeLauncher;
const Printer = require('lighthouse/lighthouse-cli/printer');

const SITE_PORT = 8000;
let process;

process = spawn('bundle', ['exec', 'jekyll', 'serve']);

process.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

process.stdout.on('close', (data) => {
  console.log('Close');
});

process.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

process.kill('SIGHUP');

/*
function execPromise(cmd, opts) {
  opts || (opts = {});
  return new Promise((resolve, reject) => {
    process = exec(cmd, opts,
      (err, stdout, stderr) => err ? reject(err) : resolve({
        stdout: stdout,
        stderr: stderr
      }));

    if (opts.stdout) {
      process.stdout.pipe(opts.stdout());
    }
    if (opts.stderr) {
      process.stderr.pipe(opts.stderr());
    }
  });
}

function runSite() {
  const run = execPromise('bundle exec jekyll serve', {
    stdout: (data) => {
      console.log(`server stdout: ${data}`);
    },
    stderr: (data) => {
      console.log(`Running server returned an error, ${err}`);
    }
  })

  return run;
}

function stopSite() {
  process.kill('SIGHUP');
}


function launchChromeAndRunLighthouse(url, flags, config) {
  const launcher = new ChromeLauncher({port: 9222, autoSelectChrome: true});

  return launcher.isDebuggerReady()
    .catch(() => {
      if (flags.skipAutolaunch) {
        return;
      }
      return launcher.run(); // Launch Chrome.
    })
    .then(() => Lighthouse(url, flags, config)) // Run Lighthouse.
    .then(results => launcher.kill().then(() => results)) // Kill Chrome and return results.
    .catch(err => {
      // Kill Chrome if there's an error.
      return launcher.kill().then(() => {
        throw err;
      }, console.error);
    });
}

// Use an existing config or create a custom one.
const config = require('lighthouse/lighthouse-core/config/perf.json');
const url = 'https://example.com';
const flags = {output: 'html'};

function main() {
  runSite().then((run) => {
    launchChromeAndRunLighthouse(url, flags, config).then(lighthouseResults => {
      lighthouseResults.artifacts = undefined; // You can save the artifacts separately if so desired
      return Printer.write(lighthouseResults, flags.output);
    }).catch(err => { throw err; });
  }).catch((err) => {
    console.log(`ERROR: ${err}`);
    throw err;
  });
}

main();
*/
