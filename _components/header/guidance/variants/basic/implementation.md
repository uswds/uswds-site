{:.site-note}
**Note:** We recommend loading `uswds-init.js` when using `banner` to assist in preventing flashes of unstyled content (FOUC) as well as cumulative layout shift (CLS). This small JavaScript file (less than 1 KB minified) helps the browser know if the USWDS JavaScript library is loading properly.
<br>To add `uswds-init` to your site, simply copy `uswds-init.min.js` from `dist/js` into your site assets and reference the file in the `<head>` of your HTML files. Alternatively, you can inline its contents directly into a `<script>` tag in your HTML files.
