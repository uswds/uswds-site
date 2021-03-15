---
permalink: /components/table/
redirect_from:
- /tables/
- /components/tables/
layout: styleguide
type: element
title: Table
category: Components
lead: A table shows information in columns and rows.
subnav:
- text: Borderless table
  href: '#borderless-table'
- text: Scrollable table
  href: '#scrollable-table'
- text: Responsive stacked table
  href: '#responsive-stacked-table'

---
Tables help logically organize information and group like things together, and they [make it easier to understand complex content](https://www.plainlanguage.gov/guidelines/design/use-tables-to-make-complex-material-easier-to-understand/). They’re especially useful for showing long lists of sequential or structured content. Users read tables one row or column at a time making it easier to digest or compare information.

Tables also help users find specific information within a large data set. For example, if someone is looking for how much their tax is based on their income for a particular year, it’s much easier to find the intersection of that year and income range, rather than scan or read an entire paragraph of text.

<section class="site-component-section">
  {% include code/preview.html component="table" %}
  {% include code/accordion.html component="table" %}
  {% include child-sections.html parent='Table' %}

  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="table-docs">
      Guidance
    </button>
    <div id="table-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the table component</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Displaying tabular data.</strong> When you need to display tabular information, such as statistical data.
        </li>
        <li>
          <strong>Displaying directories.</strong> When listing locations or resources that have similarly-structured content for many items.
        </li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Non-tabular data.</strong> Depending on the type of content,
          consider using other presentation formats such as <a title="USWDS Lists" href="{{ site.baseurl }}/components/typography/#lists">definition lists or
          hierarchical lists</a>.
        </li>
        <li>
          <strong>Robust data visualization.</strong> If you need to display more complex relationships or <a title="USWDS Data Visualizations" href="{{ site.baseurl }}/components/data-visualizations/">data visualizations</a>, consider a bar graph, infographic, or other type of chart.
        </li>
        <li>
          <strong>Dashboards and other layouts.</strong> Don’t use tables in place of a <a title="USWDS Layout Grid" href="{{ site.baseurl }}/utilities/layout-grid/">layout grid</a>. Table content should follow a consistent structure using headers and logical columns and rows.
        </li>
        <li>
          <strong>Long-form content.</strong> Table cell content should be brief and scannable. If you find yourself drafting multiple bullet points or paragraphs within a single table cell, the content is likely better off under conventional page headers or in an <a title="USWDS Accordion" href="{{ site.baseurl }}/components/accordion/">accordion</a>.
        </li>
        <li>
          <strong>Groups of items with different structures.</strong> Consider <a title="USWDS Lists" href="{{ site.baseurl }}/components/typography/#lists">lists</a> or <a title="USWDS Cards" href="{{ site.baseurl }}/components/card/">cards</a> for content items that don’t follow a consistent pattern.
        </li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Keep it simple.</strong> Tables are great at displaying tabular data and complex information. Minimal visual styling helps surface this information more easily.
        </li>
        <li>
          <strong>Always use a header row.</strong> Use plain language and short labels to define the type of information that can be found in each column or row. For more complex table structures, review the <a href="https://www.w3.org/WAI/tutorials/tables/" title="WC3 Web Accessibility Tables Tutorial">WCAG accessibility recommendations for tables</a>.
        </li>
        <li>
          <strong>Predictably format columns.</strong> Take care not to vary units or formatting within the same column. Instead, normalize values so they can be easily compared. For example, if most of the rows in a table show a count in days, don’t have some rows that count by weeks.
        </li>
        <li>
          <strong>Right-align numerical data.</strong> Align numbers which represent a sum to the right using the <a title="USWDS Paragraph Style Utilities" href="{{ site.baseurl }}/utilities/paragraph-styles/#text-align" >text alignment utilities</a> on the table cells.
        </li>
        <li>
          <strong>Use a monospace font for numerical data.</strong> For even better readability of dense, numerical data, consider formatting numbers that convey amounts such as percentages, currency, or tallies in a <a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/#available-font-families" title="USWDS Font Families">monospace</a> font. (There’s no need to apply monospace formatting or alignment to phone numbers, zip codes, dates, or other number content that can’t be totaled.)
        </li>
        <li>
          <strong>Attribute table data in a caption.</strong> If your table includes information from a specific source or contains frequently updated content, provide the source and/or last updated date. This is especially useful if your table summarizes data from a more extensive source.
        </li>
        <li>
          <strong>Consider a small-screen experience.</strong> On mobile devices and other small screens, numerical data across many columns can be easier to understand if the table scrolls horizontally. Directory lists are more readable if the rows display in a stacked layout. For tables with more than 2 columns, make sure you choose either a scrollable or a stacked variant.
        </li>
        <li>
          <strong>Minimize the number of columns.</strong> It’s easier for users to read down a long list of rows than it is to read across a long list of columns. Eliminate columns when possible or consider swapping the columns and rows to improve scannability.
        </li>
      </ul>
      <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Simple tables can have up to two rows of headers.</strong> Each header cell should have <code>scope=<wbr>"col"</code> or <code>scope=<wbr>"row"</code>.
        </li>
        <li>
          <strong>Complex tables have more than two levels of headers.</strong> Each header should have a unique <code>id</code> and each data cell should have a <code>headers</code> attribute with each related header cell’s <code>id</code> listed.
        </li>
        <li>
          <strong>Add title and attribution in a caption.</strong> When adding a title, attribution, or a last-updated date to a table, include it in the <code>&lt;caption&gt;</code> tag inside of the <code>&lt;table&gt;</code> element.
        </li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>
      <h5 id="component-settings">Table settings</h5>
      {% assign settings = site.data.settings.components.table %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h5 id="component-variants">Table variants</h5>
      <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
        <thead>
          <tr>
            <th scope="col" class="flex-6">Variant</th>
            <th scope="col" class="flex-6">Description</th>
          </tr>
        </thead>
        <tbody class="font-mono-2xs">
          <tr>
            <td data-title="Variant" class="flex-6">usa-table--borderless</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">
                Removes the outer table borders, retaining only a single bottom border on each row. Best for tables with more text than numbers.
              </span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-table--compact</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">
                Reduces the row height and vertical spacing to display more table rows within a limited space. Should only be used with dense, numerical data, not text content. Pairs well with scrollable and striped variants, but is not suitable for use with stacked variants
              </span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">.usa-table-container--scrollable > .usa-table</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">
                Add the <code>usa-table-container--scrollable</code> class to a container around any <code>usa-table</code> to apply a horizontal scrollbar if the columns exceed the available width. Ideal for dense tables with many columns.
              </span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-table--stacked</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">
                Stacks the table cells on narrow screens. Ideal for tables that contain more text information than numerical data. <br> If you use this variant, you must ensure there is a data-label attribute on each cell of the table that matches the column header.
              </span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-table--stacked-header</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">
                Stacks the table cells on narrow screens and visually promotes the first cell of every row into a “header” for that group. Preferred for directories and other lists where the first cell of every row is a name.<br> If you use this variant, you must ensure there is a data-label attribute on each cell of the table that matches the column header.
              </span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-table--striped</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">
                Applies alternating horizontal striping to help the eye track across table rows. Pairs well with the scrollable variant for tables with many columns.
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-table</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
