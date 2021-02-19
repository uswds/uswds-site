---
permalink: /components/print-styles/
layout: styleguide
type: component
title: Print styles
category: Components
lead: A good print style sheet enhances the user experience and addresses many issues people face when printing from the web.

---

<div class="site-note"><strong>Note:</strong> These print styles are mostly guidance for best practices, along with boilerplate print.css code. The specific print layout examples are intended to demonstrate ways to implement this in your own print style sheet.</div>

<section class="site-component-section">
  <h2>General guidance</h2>
  <h4 class="margin-bottom-1">Conserve paper and ink but don’t break up important content</h4>
  <ul>
    <li>Reduce white space when appropriate but not at the expense of splitting content across two printed pages.
      <ul>
        <li>Use the CSS properties <code>break-before</code>, <code>break-after</code> and <code>break-inside</code> to prevent content like images, lists and headings from being split across pages.</li>
      </ul>
    </li>
    <li>Make sure text is black and backgrounds are white.</li>
    <li>Hide header, navigation and footer elements.</li>
    <li>Display only the main content of the page.</li>
    <li>Force text columns to print full-page width where appropriate.</li>
    <li>Minimize page margins.</li>
  </ul>

  <h4 class="margin-bottom-1">Give users information they can use</h4>
  <ul>
    <li>Display hidden URLs to the right of link text.
      <ul>
        <li>If your site uses absolute paths in hrefs (e.g. href="/page"), use CSS to prepend your full domain name to the printed URL.</li>
      </ul>
    </li>
    <li>Limit the use of javascript in hrefs when possible.
      <ul>
        <li>Using the javascript pseudo protocol in hrefs eliminates the effectiveness of the CSS to extract the URL and display it for print. </li>
      </ul>
    </li>
  </ul>
  <h4 class="margin-bottom-1">Test your print style sheet</h4>
  <ul>
    <li>See how your site actually prints out on a printer.</li>
    <li>Check your print layout in all browsers.</li>
    <li>Test your print layout in PDF.</li>
  </ul>

  <h2>Best practices</h2>

  <p><strong>Use the CSS at-rule @media print.</strong> Print styles encapsulated in the <code>@media print {}</code> rule are not rendered to the screen and are only used in printed versions of the page.</p>

  <p><strong>Reset the styles of your site for printing.</strong> These print styles provide a clean reset of all the basic styles of your site. This includes making all text black and all background colors transparent, which is a core recommendation for making your site printer-friendly.</p>

  <p><strong>Place your print styles wherever is convenient.</strong> Your print styles can be included as a separate print.css file or in any existing css file. Note: USWDS includes the boilerplate print style sheet as a base .scss file that gets compiled into uswds.css.</p>

  <p><strong>Append URLs to link text.</strong> Making your site printer-friendly includes revealing the hidden URL to the user on the printed page. This print styles CSS automatically extracts the URL from the <code>href</code> attribute and appends it to the link text inside parentheses. Because this is inside the <code>@media print {}</code> rule, it only appears in printed versions of the page.</p>

  <h2>Default print styles</h2>

  <p>USWDS print styles enforce the following best practices when users print the page or save it as PDF through their browser:</p>
  <ul>
    <li>Removes backgrounds from all elements and sets all text to black</li>
    <li>Expands body and article elements to a single, 100% wide column and removes margins</li>
    <li>Minimizes page margins to maximize space</li>
    <li>Adds underlines to all anchor tags to clearly indicate a link</li>
    <li>Appends the URL in parenthesis after the text of each link</li>
    <li>Adds a border around <code>&lt;pre&gt;</code> and <code>&lt;blockquote&gt;</code> elements to clearly indicate these elements</li>
    <li>Avoids breaking elements like table rows, images, lists, headers, and others across multiple pages, where possible</li>
    <li>Repeats table headers on every page where tables break across multiple pages</li>
  </ul>

  <h2>Project-specific print styles</h2>
  <p>In addition to the above defaults, you can easily hide any element on printed versions of the page by adding the <code>.print:display-none</code> utility class to the element.</p>

  <h4 class="margin-bottom-1">You’re encouraged to add project-specific custom print styles to ensure that:</h4>
  <ul>
    <li>Elements that shouldn’t print are removed from the printed version</li>
    <li>Main content fits nicely on the printed page</li>
    <li>The user can effectively print out the most important content</li>
  </ul>

  <p>If you are using the USWDS <a href="https://github.com/uswds/uswds/tree/develop/src/stylesheets/theme" target="_blank">theme files</a>, you can add the <code>@media print {}</code> rule to <a href="https://github.com/uswds/uswds/blob/develop/src/stylesheets/theme/_uswds-theme-custom-styles.scss" target="_blank">_uswds-theme-custom-styles.scss.</a></p>

  <p>If you are not using the USWDS theme files, make sure your project supports print styles with the <code>@media print {}</code> rule.</p>

  <p>Add the <code>.print:display-none</code> utility class to any HTML element to hide anything you do not want to print.</p>

</section>


