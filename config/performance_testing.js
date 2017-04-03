
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
  console.log('attempting to stop server');
  process.stdin.pause();
  process.kill();
  process.kill('SIGINT')
  process.kill('SIGTERM')
  process.kill('SIGHUP')
  console.log(process.pid)
  process.kill(process.pid, 'SIGHUP')
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

const location = process.env.CIRCLE_ARTIFACTS || '.';
const fileID = process.env.CIRCLE_BUILD_NUM || Date.now();
const filename = `perf_results-${fileID}.json`
const port = 4000;
const config = require('lighthouse/lighthouse-core/config/perf.json');
const url = 'http://127.0.0.1:4000/page-templates';
const flags = {
  output: 'json',
  perf: true,
  outputPath: `${location}/${filename}`
};

function main() {
  const server = startServer();

  server.stdout.on('data', (data) => {
    const stringData = `${data}`;
    console.log(`SRV: ${stringData}`);

    if (stringData.match(/Server address:/i)) {
      launchChromeAndRunLighthouse(url, flags, config)
      .then(lighthouseResults => {
        lighthouseResults.artifacts = undefined;
        console.log('Running performance tests');
        return Printer.write(lighthouseResults, flags.output, flags.outputPath);
      })
      .then(() => {
        console.log('SRV: stopping server');
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
