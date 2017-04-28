---
type: component
title: Address form
parent: Form templates
order: 02
---

<p class="usa-font-lead">A standard template for entering a U.S. mailing or shipping address</p>

{% include code/preview.html component="address-form" %}
{% include code/accordion.html component="address-form" %}
<div class="usa-accordion-bordered">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="address-form-docs">
    Documentation
  </button>
  <div id="address-form-docs" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>As you customize this form template, make sure it continues to follow the <a href="{{ site.baseurl }}/form-templates/">accessibility guidelines for form templates</a> and the <a href="{{ site.baseurl }}/form-controls/">accessibility guidelines for form controls</a>.</li>
      <li>Also make sure that the input masking on the ZIP field, which inserts a hyphen before the four-digit extension, is accessible to people using screen readers. We are using <a href="https://github.com/filamentgroup/politespace">Filament Group's Politespace</a> in the above demo.</li>
    </ul>
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>When you need to be able to parse out the specific parts of a mailing address.</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>If you need to collect addresses that may not fit this format (for example, international addresses).</li>
      <li> If you don’t need to be able to parse out the individual pieces of an address, consider letting users type the entire address into one large text area. </li>
    </ul>
    <h5>Guidance</h5>
    <ul class="usa-content-list">
      <li>Only label the optional inputs. Users can infer that all the others are required.</li>
      <li>If possible, let users type their state’s abbreviation when they reach the state drop-down menu.</li>
      <li>Support both five- and nine-digit ZIP codes. Some addresses require a nine-digit ZIP code. If you would like to use an input mask, it should be “#####-####” so that the text is properly formatted, regardless of whether a user enters a five- or nine-digit ZIP code.</li>
    </ul>
    <h4 class="usa-heading">Upgrading address forms (pre version 0.14.0)</h4>
    <p>The Standards previously leveraged <a href="https://www.filamentgroup.com/lab/politespace.html">Politespace</a> as a way to implement input masking as part of this particular form template, specifically zip code inputs. Our guidance for upgrading is outlined in the following steps:</p>
    <ul>
      <li>Be sure to include <a href="https://jquery.com/">jQuery</a> with your assets and include it onto your page.</li>
      <li>Add the required Politespace files with your other 3rd party assets.</li>
      <li>Follow <a href="https://github.com/filamentgroup/politespace#using-politespace">the Politespace documentation</a> on how to implement with your form fields.</li>
    </ul>
    <p>For any questions or support, please feel free to reach out to the team at <a href="mailto:uswebdesignstandards@gsa.gov.">uswebdesignstandards@gsa.gov.</a></p>
  </div>
</div>
