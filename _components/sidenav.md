---
permalink: /components/sidenav/
redirect_from:
- /sidenav/
layout: styleguide
type: component
title: Side navigation
category: Components
lead: "Hierarchical, vertical navigation to place at the side of a page."
---

{% include code/preview.html component="sidenav" %}
<section class="site-component-section">
  {% include code/accordion.html component="sidenav" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="sidenav-docs">
      Usage
    </button>
    <div id="sidenav-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the side navigation component</h4>
      <ul class="usa-content-list">
        <li>To display a navigational hierarchy with one to three levels.</li>
        <li>To display the “sub-navigation” within a section of the website.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li>If the site has fewer than five pages, consider organizing the page without a navigational hierarchy.</li>
        <li>If your page already has a horizontal and vertical navigation bar, consider ways to simplify your navigation system.</li>
        <li>If your content is within a frame or sub-area of a page, consider ways to simplify your navigation system.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Show the current page.</strong> Indicate where a user is within the navigational hierarchy. Use the “active” state to show users which page they have navigated to.</li>
        <li><strong>Keep the navigation links short.</strong> They can be shorter derivatives of page titles themselves.</li>
        <li><strong>Always test your navigation.</strong> If the navigation hierarchy is too long, users may miss items at the bottom. If it’s too deep, users may miss items that require too many clicks. Usability test to find the right balance between breadth and depth.</li>
      </ul>
      <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li>Ensure the side navigational system is keyboard accessible. Users should be able to tab through each link.</li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>
      <ul class="usa-content-list">
        <li>The width of the current menu item’s highlight border is set with the <code>$theme-sidenav-current-border-width</code> variable.</li>
      </ul>
    </div>
  </div>
</section>
