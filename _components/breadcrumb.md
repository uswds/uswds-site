---
permalink: /components/breadcrumb/
redirect_from:
- /breadcrumbs/
- /breadcrumb/
- /components/breadcrumbs/
layout: styleguide
type: component
title: Breadcrumb
category: Components
lead: Breadcrumbs are a secondary navigational element that helps users understand where they are in a website.
---

Breadcrumbs convey where the current page of a website fits into the hierarchy
of the overall site structure, as determined by the information architecture.
Breadcrumbs are essentially a series of links that allow the user to navigate up,
rather than simply back using the “Back” button, through the hierarchy.
These features are particularly relevant when a user has landed on an interior
page from a web search or link from another site.

{% include code/preview.html component="breadcrumb" %}

<section class="site-component-section">
  {% include code/accordion.html component="breadcrumb" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button" aria-expanded="true" aria-controls="breadcrumb-docs">Guidance</button>
    <div id="breadcrumb-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the breadcrumb component</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Orient the user.</strong> Provide the user with a visual
          marker of where the current page is located in the website hierarchy.
          Putting the page in the context of the site structure is the most common
          usage of breadcrumbs.
        </li>
        <li>
          <strong>Show the path.</strong>  In some cases, it may help to use
          breadcrumbs to communicate a user's path to the current location.
          For example, if a user finds the page through search results, the
          breadcrumbs will show an alternate path the user could have taken to
          navigate to that page. This is a less common scenario.
        </li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Omit on simple sites.</strong>  If the website is not very
          deep, and the context for the current page is clear from the main
          navigation, you can omit breadcrumbs.
        </li>
        <li>
          <strong>Omit on landing pages.</strong> For the homepage and landing
          pages of the main sections, you can omit breadcrumbs. They are more
          useful at deeper levels of the site where the hierarchy is not
          immediately apparent from the main navigation.
        </li>
        <li>
          <strong>Side navigation.</strong> When side navigation is used in
          combination with main navigation, it may be redundant to include breadcrumbs.
        </li>
        <li>
          <strong>Prioritize navigational elements.</strong> When side navigation
          is used in combination with main navigation, it may be redundant to
          include breadcrumbs.
        </li>
        <li>
          <strong>Avoid in step-by-step processes.</strong>  Although there are
          similarities between breadcrumbs and a step-by-step wizard process,
          typically wizard navigation will be more prominent than the way breadcrumbs
          are used. Also, it may be confusing to see two sets of breadcrumbs
          performing different functions on the same page.
        </li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Collapse to parent only on small widths.</strong> By default,
          the breadcrumb component collapses to display only a link to the parent
          page at small widths. Consider keeping this context instead of simply
          hiding the component.
        </li>
        <li>
          <strong>Consider size of tap targets on small widths.</strong>
          Although breadcrumbs are frequently displayed using smaller text,
          make sure the text is not too small to easily tap at small widths.
        </li>
        <li>
          <strong>Avoid wrapping.</strong>  If a website contains many levels of
          hierarchy, it can become overwhelming and cumbersome to display the
          full breadcrumbs – even at larger widths. Consider setting the min-width
          token to a larger screen size and avoid wrapping for deep sites.
        </li>
        <li>
          <strong>Supplement navigation with breadcrumbs.</strong> Use breadcrumbs
          to supplement, not replace, main navigation and side navigation.
        </li>
        <li>
          <strong>Reflect the title of the page.</strong> Ensure the titles on
          both the page and in the link in the breadcrumbs are the same.
        </li>
        <li>
          <strong>Start with the word “Home”.</strong> Rather than using a house
          icon, spell out the word “Home” as the starting link in the breadcrumbs.
        </li>
      </ul>
      <h4>Accessibility</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Use the <code>nav</code> element.</strong> This allows assistive
          technology to present the breadcrumbs in context as a navigational element
          on the page.
        </li>
        <li>
          <strong>Use ordered lists and list items.</strong> Use an <code>ol</code>
          for breadcrumbs and an <code>li</code> for each item. This allows
          assistive technology to enumerate the items in the breadcrumbs and
          allows shortcuts between list items.
        </li>
        <li>
          <strong>Use ARIA markup for additional context.</strong>
          Use <code>aria-label="Breadcrumbs"</code> on the main element and
          <code>aria-current="page"</code> on the current page.
        </li>
        <li>
          <strong>Hide separators from screen readers.</strong> The separators
          between links in the breadcrumbs should not be read by screen readers.
        </li>
      </ul>
      <h4>Implementation</h4>
      <p>
        Use a <code>nav</code> element to encapsulate breadcrumbs, and a
        <code>ul</code> to collect the links together.
      </p>
      <ul class="usa-content-list">
        <li>
          <strong>Truncate when wrapping occurs.</strong> The default breadcrumb
          displays all the breadcrumb items in a single line at wide widths —
          truncate the last element of the line if there is any overrun.
          The breadcrumb will wrap when <code>$theme-breadcrumb-wrapping: true</code>.
        </li>
        <li>
          <strong>Show the parent at narrow widths.</strong> At narrow widths
          (defined by <code>$theme-breadcrumb-min-width</code>), show the current
          page's parent — this will be visible to sighted users and screen
          readers see the full trail. The parent is preceded by a <code>←</code>.
        </li>
        <li>
          <strong>Control the text color with utilities.</strong> Change the
          link color in settings, but change the text color with utilities.
        </li>
      </ul>
      <h5 id="component-settings">Breadcrumb settings</h5>
      <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-settings">
        <thead>
          <tr>
            <th scope="col" class="flex-6">Variable</th>
            <th scope="col" class="flex-6">Usage</th>
          </tr>
        </thead>
        <tbody class="font-mono-2xs">
          <tr>
            <td data-title="Variable" class="flex-6">$theme-breadcrumb-font-size</td>
            <td data-title="Usage" class="flex-6">
              <p class="font-lang-3xs">
                The size of the breadcrumb text.
              </p>
            </td>
          </tr>
          <tr>
            <td data-title="Variable" class="flex-6">$theme-breadcrumb-font-family</td>
            <td data-title="Usage" class="flex-6">
              <p class="font-lang-3xs">
                The family of the breadcrumb text.
              </p>
            </td>
          </tr>
          <tr>
            <td data-title="Variable" class="flex-6">$theme-breadcrumb-gap</td>
            <td data-title="Usage" class="flex-6">
              <p class="font-lang-3xs">
                The space between indicator icons and text.
              </p>
            </td>
          </tr>
          <tr>
            <td data-title="Variable" class="flex-6">$theme-breadcrumb-link-colors</td>
            <td data-title="Usage" class="flex-6">
              <p class="font-lang-3xs">
                The color of breadcrumb links in the form <code>[link], [hover], [active].</code>
              </p>
            </td>
          </tr>
          <tr>
            <td data-title="Variable" class="flex-6">$theme-breadcrumb-min-width</td>
            <td data-title="Usage" class="flex-6">
              <p class="font-lang-3xs">
                The width at which the breadcrumb displays the full breadcrumb list.
              </p>
            </td>
          </tr>
          <tr>
            <td data-title="Variable" class="flex-6">$theme-breadcrumb-spacing-bottom</td>
            <td data-title="Usage" class="flex-6">
              <p class="font-lang-3xs">Spacing below the breadcrumb.</p>
            </td>
          </tr>
          <tr>
            <td data-title="Variable" class="flex-6">$theme-breadcrumb-spacing-top</td>
            <td data-title="Usage" class="flex-6">
              <p class="font-lang-3xs">Spacing above the breadcrumb.</p>
            </td>
          </tr>
          <tr>
            <td data-title="Variable" class="flex-6">$theme-breadcrumb-wrapping</td>
            <td data-title="Usage" class="flex-6">
              <p class="font-lang-3xs">Controls whether the breadcrumb wraps or truncates.</p>
            </td>
          </tr>
        </tbody>
      </table>
      <h5 id="component-variants">Breadcrumb variants</h5>
      <p>This component doesn't have any variants.</p>
    </div>
  </div>
</section>
