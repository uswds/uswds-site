---
permalink: /components/banner/
redirect_from:
  - /banner/
  - /components/banners/
layout: styleguide
type: element
title: Banner
category: Components
lead: The banner identifies official United States government websites  and helps visitors understand how to tell that they are official.
---

{% include code/preview.html component="banner" %}

<section class="site-component-section">
  {% include code/accordion.html component="banner" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="table-docs">
      Guidance
    </button>
    <div id="table-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the banner component</h4>
      <ul class="usa-content-list">
        <li><strong>To identify as an official government site.</strong> Most government sites should use the banner.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>If you use neither HTTPS nor a .gov/.mil domain.</strong> The banner text indentifies HTTPS and .gov/.mil domains as indicators that a website is an official government website. Use the banner only if your site uses both the proper TLD <em>and</em> HTTPS.</li>
        <li><strong>Any time it would be misleading.</strong> The banner should be used to reduce confusion. Avoid using the banner on any site meant only for testing or otherwise not meant to be identified as an official government website.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Use the provided text without customization.</strong> The banner is most effective as an identifier and a learning tool when its message is consistent across government websites. With only a few exceptions (see Implementation guidance, below), sites should use the TLD-appropriate text provided, unaltered. Use the Spanish version of the banner for Spanish-language websites.</li>
        <li><strong>Use the version appropriate to your website’s TLD.</strong> If your project uses a .mil top-level domain, use the .mil banner text.</li>
        <li><strong>Show the banner on every site page.</strong> Use the gov banner at the top of every page of a site. It can be confusing or misleading if it appears on some site pages and not others.</li>
        <li><strong>Avoid distraction.</strong> The banner appears on every page of your site. Choose background colors that fit with your site theme and avoid color combinations that draw excessive attention to the banner.</li>
        <li><strong>Keep the text up-to-date.</strong> Use the most current version of the banner.</li>
      </ul>
      <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li><strong>Use <code>aria-label</code> to give the banner a useful name.</strong> Our default markup uses <code>aria-label="official government website"</code> to distinguish the banner <code>header</code> from the main <code>header</code>.</li>
        <li><strong>The banner's accordion uses javascript to set the <code>aria-hidden</code> value of its content area.</strong> To ensure that your content is accessible in the event that the JavaScript does not load or is disabled, you should not set <code>aria-hidden="true"</code> on <code>usa-banner__content</code>.</li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>
      <ul class="usa-content-list">
        <li>A small number of .mil websites do not belong to an official U.S. Department of Defense organization. These sites may choose to adapt the <strong>Official websites use .mil</strong> section to use more technically correct language: “A <strong>.mil</strong> website operates under the approval authority of the U.S. Department of Defense.”</li>
        <li>The banner should directly follow the <code>skipnav</code> component.</li>
        <li>Set the width of the banner content area with <code>$theme-banner-max-width</code>.</li>
        <li>Set the banner font with <code>$theme-banner-font-family</code>.</li>
      </ul>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-banner</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
