---
permalink: /components/identifier/
layout: styleguide
type: component
title: Identifier
category: Components
lead: The identifier discloses a site's parent agency and displays agency links
  required by federal policy.
---

{% include code/preview.html component="identifier" %}

<section class="site-component-section">
  {% include code/accordion.html component="identifier" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button" aria-expanded="true" aria-controls="identifier-docs">Guidance</button>
    <div id="identifier-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the identifier component</h4>
      <ul class="usa-content-list">
        <li>
          <strong>To identify a site's parent agency.</strong>
          The identifier is a complement to the USWDS
          <a href="{{ site.baseurl }}/components/banner/">banner</a>. Use the
          identifier to tell users what agency is responsible for your website.
        </li>
        <li>
          <strong>To display links required by federal policy.</strong>
          The identifier includes links <a href="https://digital.gov/resources/required-web-content-and-links/?dg">required</a>
          on all government sites.
        </li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Any time it would be misleading.</strong> The identifier
          should be used to reduce confusion. Avoid using the identifier on any
          site meant only for testing or otherwise not meant to be identified as
          an official government website.
        </li>
        <li>
          <strong>Redundant content.</strong> Don't add the identifier without
          removing any duplicate links from your existing site footer. Favor the
          common links and content in the identifier over any equivalent content
          in your site footer.
        </li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Use the indicator component for required links.</strong>
          If your site already includes the federally required links in its site
          footer, remove them in favor of the links in the identifier.
          This assures that site visitors find the required links in a consistent
          location from site to site.
        </li>
        <li>
          <strong>Display the parent agency logo, not the product logo.</strong>
          The identifier is meant to identify a website's parent agency as a
          complement to the site footer. Site-specific logos, like a product
          logo, should be in the site footer, not the identifier.
        </li>
        <li>
          <strong>Display multiple parents and logos in hierarchical order.</strong>
           If a site has more than one parent agency, you may display a reference
           and a logo for each parent in hierarchical order, highest first.
           For example,"An official website of [Grandparent Department] and [Parent Agency]".
        </li>
      </ul>
      <h4>Accessibility</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Ensure proper color contrast.</strong> Confirm there is proper
          color contrast using our recommended <a href="https://designsystem.digital.gov/design-tokens/color/overview/#color-and-accessibility">accessible color pairings</a> and
          WCAG Level 2.0 AA.
        </li>
        <li>
          <strong>Use proper landmarks for each identifier section.</strong>
          Each identifier section should be either a <code>section</code> or
          a <code>nav</code>, and include an appropriate <code>aria-label</code> property.
        </li>
        <li>
          <strong>Add <code>alt</code> attribute to each logo image.</strong>
        </li>
      </ul>
      <h4>Implementation</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Except where noted, use the entire component without deletions or additions</strong>
           With rare exceptions, if you use the identifier, include the entire
           identifier. That is, don't delete sections or required links or
           change any link text beyond the customizations mentioned in the
           implementation section.
        </li>
        <li>
          <strong>Use a background color darker than that of the footer</strong>
          Use color to anchor the identifier to the bottom of the page and
          distinguish it from other site content. Use <code>primary</code> or <code>base</code>
          family background colors of grade 80 or higher, or black.
        </li>
        <li>
          <strong>Use an SVG logo if possible.</strong> Ensure the logo is high
          resolution. We recommend using the SVG version of any logo if you have one.
          Otherwise, use an image that's at least 120 pixels tall.
        </li>
        <li>
          <strong>Use logos intended for dark backgrounds if possible.</strong>
          The indicator has a dark background. If your agency has a version of
          its logo intended for dark backgrounds, use that version.
        </li>
        <li>
          <strong>Update the required links to point to the proper URLs</strong>
          The identifier includes links required of any federal website, and
          these links are specific to a department, agency, or website.
          We've linked each section below to the guidance on Digital.gov to
          provide further context.
          {% include identifier-link-guidance.html  %}
        </li>
        <li>
          <strong>Use the Spanish version for Spanish-language sites.</strong>
          If you have an official Spanish language website, use the Spanish
          version of the identifier.
        </li>
        <li>
          <strong>Duplicate the logo element if using multiple logos.</strong>
          If you're using multiple logos, duplicate the <code>usa-identifier__logo</code>
          element and link the image to your image source.
        </li>
        <li>
          <strong>If applicable, include any taxpayer disclaimer after the standard text.</strong>
          If the organization must provide a taxpayer expense disclaimer, include
          it following the "Official website" text, as a separate sentence.
          For example, "An official website of [Department]. Produced and published at taxpayer expense."
        </li>
      </ul>
    </div>
  </div>
</section>
