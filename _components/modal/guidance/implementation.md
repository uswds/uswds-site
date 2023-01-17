- **Use unique ids.** Each `.usa-modal` must have a unique id so that openers can associate them with their `aria-controls` attribute.

- **Openers.** A single modal can have multiple openers. Each opener requires `data-open-modal` and `aria-controls=”MODAL_ID”` attributes. Openers can be coded either as `<button type="button">` or `<a>`. Using `<a>` helps link to modals in the event javascript fails.

- **Closers.** Place a `data-close-modal` attribute on any button that will close a modal. Closers may have event listeners attached to them. Code closers as `<button type="button">`.

- **Disabling close when an action is required.** In instances that a user must make a choice before continuing, you want to prevent them from closing the modal without taking action. Add `data-force-action` attribute to `.usa-modal` to prevent the user from closing the modal without taking an action.

{:.site-note}
**Note:** We recommend loading `uswds-init.js` when using `banner` to assist in preventing flashes of unstyled content (FOUC) as well as cumulative layout shift (CLS). This small JavaScript file (less than 1 KB minified) helps the browser know if the USWDS JavaScript library is loading properly.
<br>To add `uswds-init` to your site, simply copy `uswds-init.min.js` from `dist/js` into your site assets and reference the file in the `<head>` of your HTML files. Alternatively, you can inline its contents directly into a `<script>` tag in your HTML files.
