
const spawn = require('child_process').spawn;

const Lighthouse = require('lighthouse');
const ChromeLauncher = require('lighthouse/lighthouse-cli/chrome-launcher.js').ChromeLauncher;
const Printer = require('lighthouse/lighthouse-cli/printer');

function startServer() {
  const process = spawn('npm', ['run', 'start']);

  process.stdout.on('close', (data) => {
    console.log('Server stopping');
  });

  process.stderr.on('data', (data) => {
    console.log(`ERROR: ${data}`);
  });

  return process;
}

function stopServer(process) {
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

const port = 4000;
const config = require('lighthouse/lighthouse-core/config/perf.json');
const url = 'http://127.0.0.1:4000/';
const flags = {output: 'html'};

function main() {
  const server = startServer();

  server.stdout.on('data', (data) => {
    const stringData = `${data}`;
    console.log(`SRV: ${stringData}`);

    if (stringData.match(/Server address: http:/i)) {
      launchChromeAndRunLighthouse(url, flags, config)
      .then(lighthouseResults => {
        lighthouseResults.artifacts = undefined; // You can save the artifacts separately if so desired
        return Printer.write(lighthouseResults, flags.output);
      })
      .then(() => {
        stopServer(server);
      })
      .catch(err => {
        stopServer(server);
        console.error(err);
      });
    }
  });
}

main();
