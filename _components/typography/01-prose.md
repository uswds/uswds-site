---
type: component
title: Prose
parent: typography
order: 01
lead: "Format a block of running text."
---

<!-- prose section begin -->

{% include code/preview.html component="typesetting" %}
{% include code/accordion.html component="typesetting" %}
<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="typesetting-docs">
    Typesetting guidelines
  </button>
  <div id="typesetting-docs" class="usa-accordion__content site-component-usage">
    <h4 class="usa-heading">Usability</h4>
    <ul class="usa-content-list">
      <li><strong>Set type flush left.</strong> Type set flush left provides the eye a constant starting point for each line, making text easier to read.</li>
      <li><strong>Line length matters.</strong> Controlling the length of lines of text in extended copy makes reading more comfortable by helping readers’ eyes flow easily from one line to the next. Somewhere between 50 and 75 characters per line is broadly considered to be a readable line length, while 66 characters is considered the ideal. Other factors beyond line length also affect reading comfort. Text with more space between lines can have somewhat longer line length. Also, contexts in which users will not be reading long passages of text (such as footnotes or alerts) can safely be set with somewhat longer lines as well.</li>
      <li><strong>Spacing establishes grouping patterns.</strong> White space affects how the user focuses their attention on the content. It makes it easier to know what to read and where to begin. Spacing between typographic elements should be open enough to feel light, but close enough to establish a proper relationship between elements. When setting headers and body copy, white space should be 60px, 30px, 20px, or 15px.</li>
    </ul>
    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
      <li>To add a max-width to text, add the class <code>usa-content</code> to your document. Use at the specificity that best suits your project's needs.</li>
      <li>You can change the max-width value <code>$text-max-width</code> in <code>dist/scss/core/_variables.scss</code>. The max-width defaults to 66 characters per line using character units (`66ch`).</li>
    </ul>
  </div>
</div>
