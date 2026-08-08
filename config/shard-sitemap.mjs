// test_a11y_desktop/test_a11y_mobile in .circleci/config.yml already run with
// parallelism: 2, but before this script existed both containers ran the
// exact same full sitemap through pa11y-ci — parallelism was configured but
// actually scans of all URLs in duplicate. This script gives
// each container a distinct slice of the sitemap so the parallelism is real.
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import https from "node:https";

// Same exclusion pa11y-ci:sitemap/-mobile already pass via
// `--sitemap-exclude '/*.pdf|next/'`, kept in sync so sharded runs exclude
// the same URLs as the unsharded ones.
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

// The sitemap is fetched over the network, so its <loc> entries are
// untrusted input: validate each one resolves to a well-formed http(s) URL
// on the same origin as the sitemap itself before it's allowed anywhere near
// the shard config that gets written to disk and fed to pa11y-ci. Jekyll's
// sitemap emits root-relative paths (e.g. "/components/button/"), so each
// entry is resolved against sitemapUrl as a base.
function extractUrls(sitemapXml, sitemapUrl) {
  const allowedOrigin = new URL(sitemapUrl).origin;
  const urls = [];
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(sitemapXml)) !== null) {
    const raw = match[1].trim();
    let parsed;
    try {
      parsed = new URL(raw, sitemapUrl);
    } catch {
      console.warn(`Skipping malformed sitemap URL: ${raw}`);
      continue;
    }
    if (
      (parsed.protocol !== "http:" && parsed.protocol !== "https:") ||
      parsed.origin !== allowedOrigin
    ) {
      console.warn(`Skipping out-of-origin sitemap URL: ${raw}`);
      continue;
    }
    urls.push(parsed.href);
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
  const index = parseInt(process.env.CIRCLE_NODE_INDEX || "0", 10);
  const total = parseInt(process.env.CIRCLE_NODE_TOTAL || "1", 10);

  const sitemapXml = await fetchText(sitemapUrl);
  const allUrls = extractUrls(sitemapXml, sitemapUrl).filter(
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
