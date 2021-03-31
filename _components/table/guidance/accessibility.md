- **Simple tables can have up to two rows of headers.** Each header cell should have `scope="col"` or `scope="row"`.
- **Complex tables have more than two levels of headers.** Each header should have a unique `id` and each data cell should have a `headers` attribute with each related header cell’s `id` listed.
- **Add title and attribution in a caption.** When adding a title, attribution, or a last-updated date to a table, include it in the `<caption>` tag inside of the `<table>` element.
- **Add an `aria-live` region to the page when enabling row sorting.** An `aria-live` region immediately following the `<table>` element automatically announces when the sort state changes for visitors using screen readers, but it must be added to the HTML document before load:
`<div class="usa-sr-only usa-table__announcement-region" aria-live="polite"></div>`
- **Don’t add `aria-label` attributes to sortable column headers.** Enabling row sorting automatically adds `aria-label` attributes to the sortable column headers and their toggle sort buttons via JavaScript. These labels are updated to reflect each column’s current sort state (ascending, descending, or unsorted) whenever sort changes.
