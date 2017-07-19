const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const express = require('express');
const Crawler = require("simplecrawler");
const chalk = require('chalk');

const runServer = require('./static-server');

// These pages incorporate content from other files in other repos, so
// they should be considered "second class" by the link checker, and
// only emit warnings on 404s rather than errors.
const WARNING_PAGES = [
    '/getting-started/code-guidelines/',
    '/whats-new/releases/',
    '/getting-started/showcase/all/',
];
const WARNING = chalk.yellow('Warning');
const ERROR = chalk.red('Error');
const SITE_PATH = path.normalize(`${__dirname}/../_site`);

function shouldFetch(item, referrerItem) {
  if (item.path.match(/&quot;/)) {
    // If a URL's path contains a literal `&quot;` in it, then it's
    // almost guaranteed to be a false-positive that's actually
    // in an example snippet of HTML in the docs, so ignore it.
    return false;
  } else if (referrerItem.path.match(/\.js$/)) {
    // Just ignore anything gleaned from JS files for now, it's too likely
    // that it's a false positive.
    return false;
  }

  return true;
}

function findDuplicateIds($) {
  const duplicates = [];
  const idCounts = {};
  const ids = $("[id]").each(function() {
    const id = $(this).attr('id');

    if (!(id in idCounts)) {
      idCounts[id] = 0;
    }
    idCounts[id]++;

    if (idCounts[id] === 2) {
      duplicates.push(id);
    }
  });

  return duplicates;
}

runServer().then(server => {
  const crawler = new Crawler(`${server.url}/`);
  const origDiscoverResources = crawler.discoverResources;
  const referrers = {};
  const notFound = [];
  const duplicateIds = [];

  crawler.discoverResources = function(buffer, item) {
    if (/^text\/html/.test(item.stateData.contentType)) {
      const $ = cheerio.load(buffer.toString("utf8"));
      const ids = findDuplicateIds($);

      if (ids.length) {
        duplicateIds.push({ item, ids });
      }
    }
    return origDiscoverResources.apply(this, arguments);
  };

  crawler.addFetchCondition((item, referrerItem, cb) => {
    cb(null, shouldFetch(item, referrerItem));
  });

  crawler.maxDepth = 99;
  crawler.interval = 1;
  crawler.on("discoverycomplete", (item, resources) => {
    resources.forEach(url => {
      if (!(url in referrers)) {
        referrers[url] = [];
      }
      referrers[url].push(item.path);
    });
  });
  crawler.on("fetch404", (item, res) => {
    notFound.push(item);
  });
  crawler.on("complete", () => {
    server.httpServer.close(() => {
      let errors = 0;
      let warnings = 0;
      const makeLabelForPaths = paths => {
        const isWarning = paths.every(path => WARNING_PAGES.includes(path));
        const label = isWarning ? WARNING : ERROR;

        if (isWarning) {
          warnings++;
        } else {
          errors++;
        }

        return label;
      };

      duplicateIds.forEach(({ item, ids }) => {
        const label = makeLabelForPaths([ item.path ]);
        console.log(`${label}: duplicate id attrs found at ${item.path}:`);
        console.log(`  ${ids.join(', ')}`);
      });

      notFound.forEach(item => {
        const refs = referrers[item.url];
        const label = makeLabelForPaths(refs);

        console.log(`${label}: 404 for ${item.path}`);
        console.log(`  ${refs.length} referrer(s) including at least:`,
                    refs.slice(0, 5));
      });

      WARNING_PAGES.forEach(path => {
        if (!(`${server.url}${path}` in referrers)) {
          console.log(`${ERROR}: ${path} was not visited!`);
          console.log(`  If this is not an error, please remove the path ` +
                      `from WARNING_PAGES.`);
          errors++;
        }
      });

      const success = errors === 0;

      console.log(`${errors} error(s) and ${warnings} warning(s) found.`);
      if (success) {
        console.log(chalk.green(`Hooray!`));
      } else {
        console.log(chalk.red(`Alas.`));
      }
      process.exit(success ? 0 : 1);
    });
  });
  crawler.start();
});
