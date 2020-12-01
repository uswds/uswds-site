---
permalink: /components/banner/
redirect_from:
  - /banner/
  - /components/banners/
layout: styleguide
type: element
title: Banner
category: Components
lead: The banner identifies official websites of government organizations in the United States. It also helps visitors understand how to tell that a website is both official and secure.
---

<section class="site-component-section" id="site-component-intro">
  <h2 class="font-body-md">Why use the banner</h2>
  <p>
    You should use the banner to identify your site as an official government site.
  </p>
  <p>
    The banner explains that the combination of (a) an official .gov or .mil domain and (b) a secure HTTPS connection are the best way to assure visitors that they’'re connected to an official site.
  </p>
  <p>
    Most government sites should use the banner, but some should not use the banner. Do NOT use the banner on non-government domains such as a .com or .org.
  </p>
  <p>
    If you are unable to update to <a href="https://github.com/uswds/uswds/releases">USWDS 2.8.0 or higher</a> but you still want to include the new language in your banner, we recommend editing your content to the language outlined below.
  </p>
</section>

{% include code/preview.html component="banner" %}

<section class="site-component-section">
  {% include code/accordion.html component="banner-code" %}
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
        <li><strong>If you don't use a .gov/.mil domain and HTTPS.</strong> The banner text identifies .gov/.mil domains and HTTPS as indicators that a website is an official government website. Use the banner only if your site uses both the proper TLD <em>and</em> HTTPS.</li>
        <li><strong>Any time it would be misleading.</strong> The banner should be used to reduce confusion. Avoid using the banner on any site meant only for testing or otherwise not meant to be identified as an official government website.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Use the provided text without customization.</strong> The banner is most effective as an identifier and a learning tool when its message is consistent across government websites. With only a few exceptions (see <a href="#implementation">Implementation guidance</a>), sites should use the TLD-appropriate text provided, unaltered. Use the Spanish version of the banner for Spanish-language websites.</li>
        <li><strong>Use the version appropriate to your website’s TLD.</strong> If your project uses a .mil top-level domain, use the .mil banner text.</li>
        <li><strong>Show the banner on every page.</strong> Use the banner at the top of every page of a site. It can be confusing or misleading if it appears on some pages and not others.</li>
        <li><strong>Avoid distraction.</strong> The banner appears on every page of your site. Choose background colors that fit with your site theme and avoid color combinations that draw excessive attention to the banner.</li>
        <li><strong>Keep the text up-to-date.</strong> Use the most current version of the banner.</li>
      </ul>
      <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li><strong>Use <code>aria-label</code> to give the banner a useful name.</strong> Our default markup uses <code>aria-label="official government website"</code> to distinguish the banner <code>header</code> from the main <code>header</code>.</li>
        <li><strong>The banner's accordion uses javascript to set the <code>aria-hidden</code> value of its content area.</strong> To ensure that your content is accessible in the event that the JavaScript does not load or is disabled, you should not set <code>aria-hidden="true"</code> on <code>usa-banner__content</code>.</li>
      </ul>
      <h4 class="usa-heading" id="implementation">Implementation</h4>
      <ul class="usa-content-list">
        <li>Some .mil websites do not belong to an official U.S. Department of Defense organization. These sites should adapt the <strong>Official websites use .mil</strong> section to use more technically accurate language: “A <strong>.mil</strong> website operates under the approval authority of the U.S. Department of Defense.”</li>
        <li>The banner should directly follow the <code>skipnav</code> component.</li>
        <li>Set the banner background color with <code>$theme-banner-background-color</code>. Banner text will update automatically.</li>
        <li>Set the width of the banner content area with <code>$theme-banner-max-width</code>.</li>
        <li>Set the banner font with <code>$theme-banner-font-family</code>.</li>
        <li>Set the banner link color with <code>$theme-banner-link-color</code>. The default of <code>default</code> uses the link colors set in <code>uswds-theme-colors</code>.</li>
      </ul>
      <h5 id="component-settings">Banner settings</h5>
      {% assign settings = site.data.settings.components.banner %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h5 id="component-variants">Banner variants</h5>
      <p>This component has no variants.</p>
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
