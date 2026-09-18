- **Use the `<nav>` element.** Use a wrapping `<nav>` element to identify Pagination as a navigation section to screen readers and other assistive technologies.

- **Use a unique, descriptive ARIA label for the <nav> element.** Provide a descriptive ARIA label for any Pagination component's `<nav>` element that describes its purpose. For example, if the pagination component is used to navigate through a set of search results, an appropriate label could be `aria-label="search results page"`.  If you use more than one Pagination component on a page, each will need a unique ARIA label.

- **Use an unordered list for the navigation items.** This allows screen readers to voice the number of elements in the Pagination component

- **Voice the current page.** Use `aria-current="page"` on the current page's link item to properly voice the current page for screen readers.
- **Voice the word "page" before the page numbers in links.** Use `aria-label="page [#]"` on each page link to be explicit that the numbers are links to page numbers.
- **Voice "last page" on the last page's link in a bounded set.** Use `aria-label="last page, page [#]"` to voice that the last element in the navigation is the last page in the paginated section. Don't include this on the last navigation element in an unbounded set, since there is no last page in an unbounded set.
- **Use a link for the current page for robustness.** While it may sound counterintuitive to link to the current page in your Pagination component, it makes sense to include this as a link so screen readers voice the current page whether the user navigates by element or by tabbing.
- **Avoid large horizontal gaps between elements.** Users with limited vision or mobility may stop scanning and miss an element if there's too much horizontal space between it and the previous element in the reading order.