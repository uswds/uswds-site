const fs = require('fs');
const chromeLauncher = require('chrome-launcher');
const CDP = require('chrome-remote-interface');
const runServer = require('./static-server');

const AXE_JS = fs.readFileSync(__dirname + '/../node_modules/axe-core/axe.js');

function launchChrome(headless=true) {
  return chromeLauncher.launch({
    chromeFlags: [
      '--window-size=412,732',
      '--disable-gpu',
      headless ? '--headless' : ''
    ]
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

Promise.all([runServer(), launchChrome()]).then(([server, chrome]) => {
  const port = server.address().port;
  console.log(`Chrome is debuggable on ${chrome.port}.`);
  CDP({
    port: chrome.port,
  }, client => {
    console.log('Created CDP.');

    const {Page, Runtime} = client;

    Promise.all([
      Page.enable()
    ]).then(() => {
      Page.loadEventFired(() => {
        // TODO: Ensure we're not just on a "network error" type page.
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
            chrome.kill();
            server.close();
            console.log(`Terminating with exit code ${exitCode}.`);
            process.exit(exitCode);
          });
        });
      });

      const url = `http://localhost:${port}`;
      console.log(`Navigating to ${url}.`);
      Page.navigate({url: url});
    });
  });
});
