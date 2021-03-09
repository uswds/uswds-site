---
category: Components
component:
  status: ready
layout: styleguide
lead: A good print style sheet enhances the user experience and addresses many issues people face when printing from the web.
permalink: /components/print-styles/
redirect_from:
subnav:
  - text: General guidance
    href: '#general-guidance'
  - text: Best practices
    href: '#best-practices'
  - text: Default print styles
    href: '#default-print-styles'
  - text: Project-specific print styles
    href: '#project-specific-print-styles'
tags:
  - printing
  - media
title: Print styles
variants:
---

{:.site-note}
**Note:** These print styles are mostly guidance for best practices, along with boilerplate print.css code. The specific print layout examples are intended to demonstrate ways to implement this in your own print style sheet.

{:.site-component-section-title}
## General guidance
### Conserve paper and ink but don’t break up important content

{:.usa-content-list}
- Reduce white space when appropriate but not at the expense of splitting content across two printed pages.
- Use the CSS properties `break-before`, `break-after` and `break-inside` to prevent content like images, lists and headings from being split across pages.
- Make sure text is black and backgrounds are white.
- Hide header, navigation and footer elements.
- Display only the main content of the page.
- Force text columns to print full-page width where appropriate.
- Minimize page margins.

### Give users information they can use

{:.usa-content-list}
- Display hidden URLs to the right of link text.
- If your site uses absolute paths in hrefs (e.g. `href="/page"`), use CSS to prepend your full domain name to the printed URL.
- Limit the use of javascript in hrefs when possible.
- Using the javascript pseudo protocol in hrefs eliminates the effectiveness of the CSS to extract the URL and display it for print.

### Test your print style sheet

{:.usa-content-list}
- See how your site actually prints out on a printer.
- Check your print layout in all browsers.
- Test your print layout in PDF.

{:.site-component-section-title}
## Best practices

{:.usa-content-list}
- **Use the CSS at-rule @media print.** Print styles encapsulated in the `@media print {}` rule are not rendered to the screen and are only used in printed versions of the page.
- **Reset the styles of your site for printing.** These print styles provide a clean reset of all the basic styles of your site. This includes making all text black and all background colors transparent, which is a core recommendation for making your site printer-friendly.
- **Place your print styles wherever is convenient.** Your print styles can be included as a separate print.css file or in any existing css file. Note: USWDS includes the boilerplate print style sheet as a base .scss file that gets compiled into uswds.css.
- **Append URLs to link text.** Making your site printer-friendly includes revealing the hidden URL to the user on the printed page. This print styles CSS automatically extracts the URL from the `href` attribute and appends it to the link text inside parentheses. Because this is inside the `@media print {}` rule, it only appears in printed versions of the page.

{:.site-component-section-title}
## Default print styles
USWDS print styles enforce the following best practices when users print the page or save it as PDF through their browser:

{:.usa-content-list}
- Removes backgrounds from all elements and sets all text to black
- Expands body and article elements to a single, 100% wide column and removes margins
- Minimizes page margins to maximize space
- Adds underlines to all anchor tags to clearly indicate a link
- Appends the URL in parenthesis after the text of each link
- Adds a border around `<pre>` and `<blockquote>` elements to clearly indicate these elements
- Avoids breaking elements like table rows, images, lists, headers, and others across multiple pages, where possible
- Repeats table headers on every page where tables break across multiple pages

{:.site-component-section-title}
## Project-specific print styles
In addition to the above defaults, you can easily hide any element on printed versions of the page by adding the `.print:display-none` utility class to the element.

### You’re encouraged to add project-specific custom print styles to ensure that:
{:.usa-content-list}
- Elements that shouldn’t print are removed from the printed version
- Main content fits nicely on the printed page
- The user can effectively print out the most important content

If you are using the USWDS [theme files](https://github.com/uswds/uswds/tree/develop/src/stylesheets/theme), you can add the `@media print {}` rule to [_uswds-theme-custom-styles.scss](href="https://github.com/uswds/uswds/blob/develop/src/stylesheets/theme/_uswds-theme-custom-styles.scss").

If you are not using the USWDS theme files, make sure your project supports print styles with the `@media print {}` rule.

Add the `.print:display-none` utility class to any HTML element to hide anything you do not want to print.

