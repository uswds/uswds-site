// test_a11y_desktop/test_a11y_mobile in .circleci/config.yml already run with
// parallelism: 2, but before this script existed both containers ran the
// exact same full sitemap through pa11y-ci — parallelism was configured but
// did nothing for wall-clock time, just doubled compute. This script gives
// each container a distinct slice of the sitemap so the parallelism is real.
const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");

// cheerio/express aren't devDependencies here (removed in a prior dependency
// cleanup), so this intentionally sticks to Node built-ins rather than
// reintroducing an XML/HTTP library for a one-off script.

// Same exclusion pa11y-ci:sitemap/-mobile already pass via
// `--sitemap-exclude '/*.pdf|next/'`, kept in sync so sharded runs exclude
// the same URLs as the unsharded ones. Built via `new RegExp(string)` rather
// than a `/.../ ` literal because a literal can't start with `/*` (nothing
// for the `*` to repeat) — the string form is just ordinary characters.
const EXCLUDE_PATTERN = new RegExp("/*.pdf|next/");

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 2) {
    const key = argv[i].replace(/^--/, "");
    args[key] = argv[i + 1];
  }
  return args;
}

function fetchText(url) {
  const client = url.startsWith("https:") ? https : http;
  return new Promise((resolve, reject) => {
    client
      .get(url, (res) => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`Failed to fetch ${url}: HTTP ${res.statusCode}`));
          res.resume();
          return;
        }
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => resolve(body));
      })
      .on("error", reject);
  });
}

function extractUrls(sitemapXml) {
  const urls = [];
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(sitemapXml)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

// Round-robin rather than contiguous slices: sitemap URLs cluster by
// directory (components, templates, patterns, ...), so a contiguous split
// would risk loading all the heavy pages onto one shard. Interleaving
// spreads page types evenly across containers without needing per-page
// timing data.
function shardUrls(urls, index, total) {
  return urls.filter((_, i) => i % total === index);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const sitemapUrl = args.sitemap || "http://localhost:4000/sitemap.xml";
  const baseConfigPath = args["base-config"] || ".pa11yci";
  const outPath = args.out;

  if (!outPath) {
    throw new Error("--out <path> is required");
  }

  // CircleCI sets these automatically from a job's `parallelism:` value.
  // Defaulting to 0/1 means running this script outside CircleCI (or with
  // parallelism removed) still produces the full, unsharded URL list.
  const index = parseInt(process.env.CIRCLE_NODE_INDEX || "0", 10);
  const total = parseInt(process.env.CIRCLE_NODE_TOTAL || "1", 10);

  const sitemapXml = await fetchText(sitemapUrl);
  const allUrls = extractUrls(sitemapXml).filter(
    (url) => !EXCLUDE_PATTERN.test(url)
  );
  const shard = shardUrls(allUrls, index, total);

  const baseConfig = JSON.parse(
    fs.readFileSync(path.resolve(baseConfigPath), "utf8")
  );

  // Only `defaults` carries over from the base .pa11yci/.pa11yci--mobile —
  // `urls` here is this shard's slice, not whatever (if anything) was in
  // the base config.
  const shardConfig = {
    defaults: baseConfig.defaults,
    urls: shard,
  };

  fs.writeFileSync(outPath, JSON.stringify(shardConfig, null, 2));

  console.log(
    `Shard ${index + 1}/${total}: ${shard.length}/${allUrls.length} URLs ` +
      `(from ${sitemapUrl}) written to ${outPath}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
