---
title: File input
parent: Form controls
order: 10
lead: The file input allow users to attach a file and displays the file name with a thumbnail preview.
---

{% include code/preview.html component="file-input" %}
{% include code/accordion.html component="file-input" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="file-input-docs">
    Guidance
  </button>
  <div id="file-input-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">

    <h4>When to use the file input</h4>
    <ul class="usa-content-list">
      <li><strong>Documents are required.</strong> Ask users to provide files when it is necessary.</li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li><strong>Documents are optional.</strong> Don’t ask users to provide documents if you do not require them.</li>
      <li><strong>Upload in place.</strong> Files are only posted when the form is submitted. The USWDS file input does not support uploading files to a server.</li>
      <li><strong>Asking for large files.</strong> Be mindful that some users might have limited connectivity or data plans.</li>
    </ul>
    <h4>Usability guidance</h4>
    <ul class="usa-content-list">
      <li><strong>Allow multiple file formats.</strong> Users won’t have the same software. Be flexible with file types so user won’t need to use different software.</li>
      <li><strong>Prefer one file per input.</strong> Some users might not know how to select multiple files in a file browser. Also, iOS does not allow multiple file selection using the Files app.</li>
      <li><strong>Highlight restrictions.</strong> Use the <code>usa-hint</code> to inform users of any restrictions, such as document types or file size.</li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li><strong>Use proper labels and attributes.</strong> Each file input should have a <code>&lt;label&gt;</code>. Associate the two by matching the <code>&lt;label&gt;</code>’s <code>for</code> attribute to the <code>&lt;input&gt;</code>’s <code>id</code> attribute.</li>
    </ul>
    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
      <li><strong>Initialization properties.</strong> JavaScript will create most elements for file input. To get a file input to initialize, add the class name <code>usa-file-input</code> to <code>&lt;input type="file" /&gt;</code>.</li>
      <li><strong>Interaction.</strong> When a user selects or drags documents to the file input, the file name and a thumbnail preview are listed.</li>
      <li><strong>Using the <code>accept</code> attribute.</strong> You can allow certain files by placing an <code>accept</code> attribute on the <code>&lt;input/&gt;></code>If a file type is not accepted, the file will not be attached and the file input will display a message. <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-accept">Learn more about the accept attribute</a>.</li>
      <li><strong>Internet Explorer/Edge</strong> These browsers do not support dragging items to a file input. Instructions to drag files are removed for these browsers.</li>
    </ul>
    <h4 class="usa-heading">Package information</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Package usage:</strong> <code>@import form-controls</code>
      </li>
      <li>
        <strong>Requires:</strong> <code>required</code>, <code>global</code>
      </li>
    </ul>
  </div>
</div>
