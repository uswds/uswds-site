---
category: Components
component:
  status: ready
  package: usa-table
  dependencies:
lead: A table shows information in columns and rows.
permalink: /components/table/
redirect_from:
- /tables/
- /components/tables/
layout: styleguide
subnav:
- text: Table accessibility tests
  href: /components/table/accessibility-tests/
tags:
  - table
  - zebra stripes
  - data
  - tabular
  - sorted
  - sortable
  - sorting
  - stacked
  - borderless
  - scrollable
  - scrolling
  - sticky
title: Table
type: component
variants:
  - variant: "`.usa-table--borderless`"
    description: Removes the outer table borders, retaining only a single bottom border on each row. Best for tables with more text than numbers.
  - variant: "`.usa-table--compact`"
    description: Reduces the row height and vertical spacing to display more table rows within a limited space. Should only be used with dense, numerical data, not text content. Pairs well with scrollable and striped variants, but is not suitable for use with stacked variants.
  - variant: "`.usa-table-container--scrollable > .usa-table`"
    description: Add the `usa-table-container--scrollable` class to a container around any `usa-table` to apply a horizontal scrollbar if the columns exceed the available width. Ideal for dense tables with many columns.
  - variant: "`.usa-table--stacked`"
    description: Stacks the table cells on narrow screens. Ideal for tables that contain more text information than numerical data. If you use this variant, you must ensure there is a `data-label` attribute on each cell of the table that matches the column header.
  - variant: "`.usa-table--stacked-header`"
    description: Stacks the table cells on narrow screens and visually promotes the first cell of every row into a “header” for that group. Preferred for directories and other lists where the first cell of every row is a name. If you use this variant, you must ensure there is a data-label attribute on each cell of the table that matches the column header.
  - variant: "`.usa-table--sticky-header`"
    description: Allows the table header element to stick to the top of the page as the user scrolls. Preferred for long tables with many rows. This variant is not compatible with the scrollable and stacked table variants.
  - variant: "`.usa-table--striped`"
    description: Applies alternating horizontal striping to help the eye track across table rows. Pairs well with the scrollable variant for tables with many columns.
changelog:
  key: component-table
in_page_nav: "h2"
---

{: .margin-top-4 }
Tables help logically organize information and group like things together, and they [make it easier to understand complex content](https://www.plainlanguage.gov/guidelines/design/use-tables-to-make-complex-material-easier-to-understand/), as explained on plainlanguage.gov. They’re especially useful for showing long lists of sequential or structured content. Users read tables one row or column at a time, making it easy to digest and compare information.

Tables also help users find specific information within a large data set. For example, if someone is looking for how much their tax is based on their income for a particular year, it’s much easier to find the intersection of that year and income range than to scan or read an entire paragraph of text.

{% include child-sections.html parent='Table' %}
{% include component-guidance.html %}
{% include component-package.html %}
