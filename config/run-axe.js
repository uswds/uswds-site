const fs = require('fs');
const urlParse = require('url').parse;
const chromeLauncher = require('chrome-launcher');
const CDP = require('chrome-remote-interface');
const runServer = require('./static-server');

const REMOTE_CHROME_URL = process.env['REMOTE_CHROME_URL'];
const AXE_JS = fs.readFileSync(__dirname + '/../node_modules/axe-core/axe.js');

function launchChromeLocally(headless=true) {
  return chromeLauncher.launch({
    chromeFlags: [
      '--window-size=412,732',
      '--disable-gpu',
      headless ? '--headless' : ''
    ]
  });
}

function getRemoteChrome() {
  const info = urlParse(REMOTE_CHROME_URL);
  if (info.protocol !== 'http:')
    throw new Error(`Unsupported protocol: ${info.protocol}`);
  return new Promise(resolve => {
    resolve({
      host: info.hostname,
      port: info.port,
      kill() { return Promise.resolve(); }
    });
  });
}

// This function is only here so it can be easily .toString()'d
// and run in the context of a web page by Chrome. It will not
// be run in the node context.
function runAxe() {
  return new Promise((resolve, reject) => {
    window.axe.run((err, results) => {
      if (err) return reject(err);
      resolve(JSON.stringify(results.violations));
    });
  });
}

let getChrome = REMOTE_CHROME_URL ? getRemoteChrome : launchChromeLocally;

Promise.all([runServer(), getChrome()]).then(([server, chrome]) => {
  const chromeHost = chrome.host || 'localhost';
  console.log(`Chrome is debuggable on http://${chromeHost}:${chrome.port}.`);

  CDP({
    host: chrome.host,
    port: chrome.port,
  }, client => {
    console.log('Created CDP.');

    const {Page, Network, Runtime} = client;

    Promise.all([
      Page.enable(),
      Network.enable(),
    ]).then(() => {
      Network.responseReceived(({response}) => {
        if (response.status < 400) return;
        console.log(`${response.url} returned HTTP ${response.status}!`);
        process.exit(1);
      });
      Network.loadingFailed(details => {
        console.log("A network request failed to load.");
        console.log(details);
        process.exit(1);
      });
      Page.loadEventFired(() => {
        console.log('Page loaded, running aXe.');
        Runtime.evaluate({
          expression: AXE_JS + ';(' + runAxe.toString() + ')()',
          awaitPromise: true,
        }).then(details => {
          let exitCode = 0;
          if (details.result.type === 'string') {
            const violations = JSON.parse(details.result.value);
            if (violations.length === 0) {
              console.log('No aXe violations found. Hooray!');
            } else {
              console.log(`Found ${violations.length} aXe violations. Alas.`);
              console.log(violations);
              exitCode = 1;
            }
          } else {
            console.log('Unexpected result from CDP!');
            console.log(details.result);
            exitCode = 1;
          }
          client.close().then(() => {
            chrome.kill().then(() => {
              // Note that we're not killing the server; this is because
              // the remote chrome instance (if we're using one) may be
              // keeping some network connections to the server alive, which
              // makes it harder to kill, so it's easier to just terminate.
              console.log(`Terminating with exit code ${exitCode}.`);
              process.exit(exitCode);
            });
          });
        });
      });

      console.log(`Navigating to ${server.url}.`);
      Page.navigate({url: server.url});
    });
  });
});

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
  process.exit(1);
});
