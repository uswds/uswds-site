const express = require('express');
const Crawler = require("simplecrawler");

const app = express();

app.use(express.static(`${__dirname}/_site`));

const listener = app.listen(() => {
  const port = listener.address().port;
  const crawler = new Crawler(`http://127.0.0.1:${port}/`);
  const referrers = {};
  let errors = 0;

  crawler.addFetchCondition((item, referrerItem, cb) => {
    let doFetch = true;

    if (item.path.match(/&quot;/)) {
      // If a URL's path contains a literal `&quot;` in it, then it's
      // almost guaranteed to be a false-positive that's actually
      // in an example snippet of HTML in the docs, so ignore it.
      doFetch = false;
    } else if (referrerItem.path.match(/\.js$/)) {
      // Just ignore anything gleaned from JS files for now, it's too likely
      // that it's a false positive.
      doFetch = false;
    }

    cb(null, doFetch);
  });

  crawler.maxDepth = 3;
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
    const refs = referrers[item.url];
    console.log(`404 for ${item.path}!`);
    console.log(`  ${refs.length} referrer(s) including at least:`,
                refs.slice(0, 5));
    errors++;
  });
  crawler.on("complete", () => {
    listener.close(() => {
      const success = errors === 0;
      console.log(`${errors} error(s) found.`);
      if (success) {
        console.log(`Hooray!`);
      } else {
        console.log(`Alas.`);
      }
      process.exit(success ? 0 : 1);
    });
  });
  crawler.start();
});
