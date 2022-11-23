- Some .mil websites do not belong to an official U.S. Department of Defense organization. These sites should adapt the **Official websites use .mil section** to use more technically accurate language: “A **.mil** website operates under the approval of the U.S. Department of Defense.”
- The banner should directly follow the `skipnav` component.
- Set the banner background color with `$theme-banner-background-color`. Banner text will update automatically.

{:.site-note}
**Note:** We recommend using `uswds-init` when using `banner` to assist in preventing flashes of unstyled content (FOUC) as well as cumulative layout shift (CLS). This small JavaScript file (less than 1 KB minified) helps the browser know if the USWDS JavaScript library is loading properly.
<br>Simply reference `uswds-init.min.js` in the `<head>` of your page, or inline its contents directly into the `<script>` tag.
