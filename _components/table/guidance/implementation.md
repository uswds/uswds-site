- **Enable row sorting on columns with sortable data.** To activate row sorting, add the `data-sortable` attribute to the table header element (`<th>`) of any column with sortable data, and insert an element with the `aria-live="polite"` attribute and the class `.usa-table__announcement-region` immediately following the table.
- **Set a default sort column and direction.** To sort a table’s rows by a specific sortable column on load, add the attribute `aria-sort` equal to a sort direction, such as “ascending” or “descending,” to that column header as in the following example:
`<th data-sortable aria-sort="ascending" scope="col">`.
- **Provide raw values for cells with formatted number content.** If you have formatted your cell content for display (such as using percent, currency, or comma formatting) or if your cell content is non-numeric but should be sorted in a numeric order (such as months, days of the week, or dates), provide a numeric-sortable value in a `data-sort-value` attribute on each table cell. Examples follow:
  - Numbers with currency or comma formatting:

    `<td data-sort-value="132773.54"> $132,773.54 </td>`

  - Percentages or fractions, converted to decimal:

    `<td data-sort-value="0.943"> 94.3% </td>`

  - Months, weekdays, or other orderable text:

    `<td data-sort-value="2"> February </td>`

  - Dates, in Unix timestamp:

    `<td data-sort-value="327092400"> Aug. 21, 1959 </td>`

  - File sizes, in bytes:

    `<td data-sort-value="1126501"> 1.1MB </td>`


