- Some .mil websites do not belong to an official U.S. Department of Defense organization. These sites should adapt the **Official websites use .mil section** to use more technically accurate language: “A **.mil** website operates under the approval of the U.S. Department of Defense.”
- The banner should directly follow the `skipnav` component.
- Set the banner background color with `$theme-banner-background-color`. Banner text will update automatically.

{:.site-note}
**Note:** We recommend using `uswds-init` when using `banner` to assist in preventing flashes of unstyled content (FOUC) as well as cumulative layout shift (CLS). This small JavaScript file (less than 1 KB minified) helps the browser know if the USWDS JavaScript library is loading properly.
<br>To add `uswds-init` to your site, simply copy `uswds-init.min.js` from `dist/js` into your site assets and reference the file in the `<head>` of your page. Alternatively, you can inline its contents directly into a `<script>` tag on your page.
