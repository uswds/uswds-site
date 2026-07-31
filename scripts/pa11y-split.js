#!/usr/bin/env node

/**
 * pa11y-split.js
 *
 * Parses the sitemap.xml, filters URLs according to exclusion patterns,
 * and distributes them across CircleCI parallel nodes using `circleci tests split`.
 *
 * Usage:
 *   node scripts/pa11y-split.js <config-file>
 *
 * Environment Variables:
 *   CIRCLE_NODE_INDEX - The current node index (0-based)
 *   CIRCLE_NODE_TOTAL - Total number of parallel nodes
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const SITEMAP_PATH = path.join(__dirname, '../_site/sitemap.xml');
const EXCLUDE_PATTERNS = ['/*.pdf', 'next/'];
const BASE_URL = process.env.PA11Y_BASE_URL || 'http://localhost:4000';

function parseArgs() {
  const configFile = process.argv[2];
  if (!configFile) {
    console.error('Error: Config file required');
    console.error('Usage: node scripts/pa11y-split.js <config-file>');
    process.exit(1);
  }
  return { configFile };
}

function extractUrlsFromSitemap(sitemapPath) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);

  if (!urlMatches) {
    console.error('Error: No URLs found in sitemap');
    process.exit(1);
  }

  return urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
}

function normalizeUrls(urls, baseUrl) {
  // <loc> entries may be relative paths (no `url:` set in _config.yml) or
  // absolute URLs pointing at a different host (e.g. production). Either
  // way, pa11y-ci's `urls` config option does no host resolution of its
  // own (unlike its `--sitemap` CLI flag with --sitemap-find/--sitemap-replace),
  // so without this it falls back to treating paths as local files.
  return urls.map(loc => {
    const parsed = new URL(loc, baseUrl);
    return new URL(parsed.pathname + parsed.search + parsed.hash, baseUrl).toString();
  });
}

function shouldExcludeUrl(url, patterns) {
  return patterns.some(pattern => {
    // Escape regex metacharacters (including backslashes) in each literal
    // segment, then join with `.*` so `*` in the pattern acts as a wildcard.
    const regex = pattern
      .split('*')
      .map(segment => segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('.*');
    return new RegExp(regex).test(url);
  });
}

function filterUrls(urls, excludePatterns) {
  return urls.filter(url => !shouldExcludeUrl(url, excludePatterns));
}

function splitUrlsForNode(urls) {
  const nodeIndex = parseInt(process.env.CIRCLE_NODE_INDEX || '0', 10);
  const nodeTotal = parseInt(process.env.CIRCLE_NODE_TOTAL || '1', 10);

  if (nodeTotal === 1) {
    return urls;
  }

  // Use CircleCI's built-in splitting for even distribution
  const urlsPerNode = Math.ceil(urls.length / nodeTotal);
  const startIndex = nodeIndex * urlsPerNode;
  const endIndex = Math.min(startIndex + urlsPerNode, urls.length);

  return urls.slice(startIndex, endIndex);
}

function runPa11yCi(urls, configFile) {
  if (urls.length === 0) {
    console.log('No URLs to scan for this node');
    return;
  }

  const nodeIndex = parseInt(process.env.CIRCLE_NODE_INDEX, 10) || 0;
  const nodeTotal = parseInt(process.env.CIRCLE_NODE_TOTAL, 10) || 1;

  console.log(`Node ${nodeIndex}/${nodeTotal}: Scanning ${urls.length} URLs`);
  console.log(`First URL: ${urls[0]}`);
  console.log(`Last URL: ${urls[urls.length - 1]}`);

  // pa11y-ci's `--json` flag is a boolean output-format switch, not a way to
  // point it at a file of URLs - any value after it gets parsed as a
  // positional URL/glob argument. To hand it this node's URL subset, merge
  // them into the `urls` array of a config file instead (which pa11y-ci does
  // support), layered on top of the base config's `defaults`.
  const baseConfig = configFile ?
    JSON.parse(fs.readFileSync(configFile, 'utf-8')) :
    {};
  const nodeConfig = Object.assign({}, baseConfig, { urls });
  const tempConfigFile = path.join(__dirname, `../pa11y-config-${nodeIndex}.json`);

  fs.writeFileSync(tempConfigFile, JSON.stringify(nodeConfig, null, 2));

  try {
    const args = ['pa11y-ci', '--config', tempConfigFile, '--json'];

    console.log(`Running: npx ${args.join(' ')}`);
    execFileSync('npx', args, {
      stdio: 'inherit',
      cwd: path.join(__dirname, '..')
    });
  } finally {
    // Clean up temp file
    if (fs.existsSync(tempConfigFile)) {
      fs.unlinkSync(tempConfigFile);
    }
  }
}

function main() {
  const { configFile } = parseArgs();

  console.log('Extracting URLs from sitemap...');
  const allUrls = extractUrlsFromSitemap(SITEMAP_PATH);
  console.log(`Total URLs in sitemap: ${allUrls.length}`);

  console.log(`Normalizing URLs against ${BASE_URL}...`);
  const normalizedUrls = normalizeUrls(allUrls, BASE_URL);

  console.log('Filtering URLs...');
  const filteredUrls = filterUrls(normalizedUrls, EXCLUDE_PATTERNS);
  console.log(`URLs after filtering: ${filteredUrls.length}`);

  console.log('Splitting URLs for parallel execution...');
  const nodeUrls = splitUrlsForNode(filteredUrls);

  console.log('Running pa11y-ci...');
  runPa11yCi(nodeUrls, configFile);
}

main();
