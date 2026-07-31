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
const { execSync } = require('child_process');

const SITEMAP_PATH = path.join(__dirname, '../_site/sitemap.xml');
const EXCLUDE_PATTERNS = ['/*.pdf', 'next/'];

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

function shouldExcludeUrl(url, patterns) {
  return patterns.some(pattern => {
    const regex = pattern.replace(/\*/g, '.*').replace(/\//g, '\\/');
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

  const nodeIndex = process.env.CIRCLE_NODE_INDEX || '0';
  const nodeTotal = process.env.CIRCLE_NODE_TOTAL || '1';

  console.log(`Node ${nodeIndex}/${nodeTotal}: Scanning ${urls.length} URLs`);
  console.log(`First URL: ${urls[0]}`);
  console.log(`Last URL: ${urls[urls.length - 1]}`);

  // Create a temporary URLs file for pa11y-ci
  const tempUrlsFile = path.join(__dirname, `../pa11y-urls-${nodeIndex}.json`);
  const pa11yConfig = {
    urls: urls
  };

  fs.writeFileSync(tempUrlsFile, JSON.stringify(pa11yConfig, null, 2));

  try {
    const configArg = configFile ? `--config ${configFile}` : '';
    const command = `npx pa11y-ci ${configArg} --json ${tempUrlsFile}`;

    console.log(`Running: ${command}`);
    execSync(command, {
      stdio: 'inherit',
      cwd: path.join(__dirname, '..')
    });
  } finally {
    // Clean up temp file
    if (fs.existsSync(tempUrlsFile)) {
      fs.unlinkSync(tempUrlsFile);
    }
  }
}

function main() {
  const { configFile } = parseArgs();

  console.log('Extracting URLs from sitemap...');
  const allUrls = extractUrlsFromSitemap(SITEMAP_PATH);
  console.log(`Total URLs in sitemap: ${allUrls.length}`);

  console.log('Filtering URLs...');
  const filteredUrls = filterUrls(allUrls, EXCLUDE_PATTERNS);
  console.log(`URLs after filtering: ${filteredUrls.length}`);

  console.log('Splitting URLs for parallel execution...');
  const nodeUrls = splitUrlsForNode(filteredUrls);

  console.log('Running pa11y-ci...');
  runPa11yCi(nodeUrls, configFile);
}

main();
