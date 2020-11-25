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
- text: Borderless Table
  href: '#borderless-table'
- text: Scrollable Table
  href: '#scrollable-table'
- text: Responsive Stacked Table
  href: '#responsive-stacked-table'

---

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
          <strong>Tabular data.</strong> When you need tabular information, such as statistical data.
        </li>
        <li>
          <strong>Directories.</strong> When listing locations or resources that have similarly-organized content for many items.
        </li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Non-tabular data.</strong> Depending on the type of content,
          consider using other presentation formats such as definition lists or
          hierarchical lists.
        </li>
        <li>
          <strong>Charts and infographics.</strong> These large-scale visual experiences do not resize or reflow predictably on narrow screens, nor are they likely to be easily understood by users who do not navigate website content visually.
        </li>
        <li>
          <strong>Dashboards.</strong> Don’t use tables to display separate items within a grid. Table content should follow a consistent structure using headers and logical columns and rows.
        </li>
        <li>
          <strong>Long-form content.</strong> Table cell content is naturally brief and scannable. If you find yourself drafting multiple bullet points or paragraphs within a single table cell, it may indicate that this content would be better served organized under page headers or in accordions instead.
        </li>
        <li>
          <strong>Collections of items that differ in structure.</strong> Consider lists or cards for content items that don’t follow a consistent pattern.
        </li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Keep it simple.</strong> Tables are great at displaying tabular data. Minimal visual styling helps surface this information more easily.
        </li>
        <li>
          <strong>Consider a narrow browser experience.</strong> On small screens, numerical data across many columns is usually easier to understand if the table can scroll horizontally, whereas directories and content-heavy tables are more comprehensible if the rows reflow to a stacked layout. Both options are available to you in the table variants described above. For tables with more than 2 columns, make sure you choose either a scrollable or a stacked variant.
        </li>
        <li>
          <strong>Always use table headers.</strong> Define the type of information that can be found in each column or row. For more complex table structures, review the <a href="https://www.w3.org/WAI/tutorials/tables/" title="WC3 Web Accessibility Tables Tutorial">WCAG accessibility recommendations for tables</a>.
        </li>
        <li>
          <strong>Predictably format columns.</strong> Take care not to vary units or formatting within the same column. Instead, normalize values so they can be easily compared (ie., if most of the rows in a table show a count in days, don’t have some rows that count by weeks).
        </li>
        <li>
          <strong>Right-align numerical data.</strong> Align numbers which represent a sum to the right using the <a href="{{ site.baseurl }}/utilities/paragraph-styles/#text-align" title="USWDS Paragraph Style Utilities">text alignment utilities</a> on the table cells.
        </li>
        <li>
          <strong>Use a monospace font for numerical data.</strong> For even better readability of dense, numerical data, consider formatting numbers that convey amounts such as percentages, currency, or tallies in a <a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/#available-font-families" title="USWDS Font Families">monospace</a> font. (There’s no need to apply monospace formatting or alignment to phone numbers, zip codes, dates, or other number content that can’t be totaled.)
        </li>
        <li>
          <strong>Cite a source for table data.</strong>  If your table includes information from a specific source, or contains content that is frequently updated, provide the source and/or last updated date after the table or in the caption. This is especially useful if your table summarizes data from a more extensive source.
        </li>
      </ul>
      <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li>Simple tables can have two levels of headers. Each header cell should have <code>scope=<wbr>"col"</code> or <code>scope=<wbr>"row"</code>.</li>
        <li>Complex tables are tables with more than two levels of headers. Each header should be given a unique <code>id</code> and each data cell should have a <code>headers</code> attribute with each related header cell’s <code>id</code> listed.</li>
        <li>When adding a title to a table, include it in a <code>&lt;caption&gt;</code> tag inside of the <code>&lt;table&gt;</code> element.</li>
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
                Reduces the row height and vertical spacing to display more table rows within a limited space. Should only be used with dense, numerical data, not text content. Combines well with scrollable and striped variants, but is not suited for use with stacked variants.
              </span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-scrollable-container > usa-table</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">
                This containing class applies a horizontal scrollbar to the table if the columns exceed the available page width. Ideal for dense tables with many columns.
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
                Stacks the table cells on narrow screens and  visually promotes the first cell of every row. Preferred for directories and other lists where the first cell of every row is a name. <br> If you use this variant, you must ensure there is a data-label attribute on each cell of the table that matches the column header.
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
