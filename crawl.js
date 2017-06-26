const express = require('express');
const Crawler = require("simplecrawler");

const app = express();

app.use(express.static(`${__dirname}/_site`));

const listener = app.listen(() => {
  const port = listener.address().port;
  const crawler = new Crawler(`http://127.0.0.1:${port}/`);
  const referrers = {};
  let errors = 0;

  crawler.maxDepth = 2;
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
