- **Show the size of the paginated set.** Users want to know the length of a paginated section. This is most commonly accomplished by always showing the last page as the last item in the pagination navigation. Users should also know if the set is unbounded and has no discrete length. For example, some large search results will not have a "last" page. The USWDS Pagination component will always show the last page of the set as a navigable link, or show an ellipsis at the end of the links if the set is unbounded.

- **Highlight the current page.** Pagination shows the current page the user is on in relation to the entire collection of pages.

- **Always include the first, previous, and next pages.** Users should always be able to navigate to each of these pages from any page in the set.

- **Show navigation items in a single line.** Pagination can be hard to understand — and individual items can be more difficult to select — when the items break over one line. Don't split the navigation items over multiple lines. Avoid using Pagination in any context where it would be more than one line long.

- **Indicate any missing pages.** Don't include out-of-sequence items directly adjacent to one another. Whenever there are pages missing — either between two elements, or at the end of an unbounded sequence — indicate the missing pages with an indicator like a non-selectable ellipsis.
- **Use as few navigation items as possible.** Showing more pages than necessary tends to add complexity and use more space without proportional increases to the component's functionality.  Focus on the essential actions and avoid adding more items to Pagination just to fill space.
- **Use generous touch targets.** Use touch targets that are big enough to select with any finger and have enough separation to avoid mistakes.
- **Optimize the number of entries per page.** Consider page load, performance, and the user's scrolling preferences when determining how many items are displayed on each page. Some paginated content benefits from user control over the number of elements to show on each page.