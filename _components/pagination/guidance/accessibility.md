- **HTML elements for screen readers.** Pagination is built with list HTML elements, so screen readers can announce the number of available links.

- **Identifiable navigation section.** Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

- **Descriptive aria-label.** Provide a descriptive aria label for the `<nav>` to reflect its purpose. Add a unique aria label if using two on one page. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be aria-label=“Search results pages.”
