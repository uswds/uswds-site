Unlike many USWDS components, Pagination includes behaviors we cannot build into the HTML, CSS, and JavaScript we ship with the design system. Developers will need to build these behaviors into their Pagination templates. We've outlined these behaviors below, and included them in the [Twig templates for Pagination](https://github.com/uswds/uswds/blob/develop/packages/usa-pagination/src/usa-pagination.twig) in our source code.

{:.usa-content-list}
- **Set the current page item.** Use the `usa-current` class to highlight the currently active page.
- **Pair with the Collection component.** To display related items like articles or events in a compact list, consider using Pagination with the [Collection component]({% link _components/collection/collection.md %}), which offers short descriptions and then directs users to the original source.
- **Bounded and unbounded sets.** The USWDS Pagination component is designed to work with both paginated sets that have a discrete number of pages (most paginated content) and those that do not. **Bounded sets** have a discrete number of pages and each page is potentially equally relevant (such as a set of blog posts sorted chronologically). **Unbounded sets** (often returned as a search result) are large sets sorted by relevance, where deeper pages have less relevance. Unbounded sets show no last page.

#### Behaviors
<div class="measure-5">
  <p>Pagination is navigation for paginated content. Taken as a whole, we call this paginated content a <strong>set</strong>. Each item in the set is a <strong>page</strong> and the page the reader is on is the <strong>current page</strong>.</p>

  <p>The Pagination component includes seven equal-sized, equally spaced <strong>slots</strong> arranged in a single horizontal line.  Each slot can accept a <strong>navigation item</strong> (typically a link to a specific page) or an <strong>overflow indicator</strong> (we use an ellipsis) to indicate that there are pages we're not showing. In the behaviors below, we'll number the slots 1–7, from left to right.</p>
</div>

<h5>General component properties</h5>

<ul>
  <li>The component features a maximum of seven slots.</li>
  <li>Each slot can contain a navigation item or an overflow indicator.</li>
  <li>The first slot is always the first page of the set.</li>
  <li>If there are fewer than seven pages in the set, show only that number of slots.</li>
  <li>The component should always show the first page and current page.</li>
  <li>Show the next page, previous page, and last page if those pages exist.</li>
  <li>Display the same number of slots for each page in the set.</li>
</ul>

<h5>Pagination behaviors</h5>

<ul class="pagination-behaviors">
  <li class="pagination-behaviors--item">
    <p class="pagination-behaviors--guidance">
      Remove extra slots if there are fewer than 7 pages.
    </p>
    <div class="pagination-behaviors--examples">
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-01-extra-slots.png"
        alt="Example: A three-page set shows three items in three slots only. Slot one is current."
        class="pagination-behaviors--example" />
    </div>
  </li>
  <li class="pagination-behaviors--item">
    <p class="pagination-behaviors--guidance">
      Always highlight the current page.
    </p>
    <div class="pagination-behaviors--examples">
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-02-current-page.png"
        alt="Example: A three-page set shows three items. Slot two is current and shows a distinct background color."
        class="pagination-behaviors--example" />
    </div>
  </li>
  <li class="pagination-behaviors--item">
    <p class="pagination-behaviors--guidance">
      Hide the <code>Previous</code> link on the first page of the set and hide the <code>Next</code> link on the last page of the set.
    </p>
    <div class="pagination-behaviors--examples">
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-03a-prev-next.png"
        alt="Example: A three-page set shows three pages. Slot one is current. There is a 'next' link following the items. There is no previous link."
        class="pagination-behaviors--example" />
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-03b-prev-next.png"
        alt="Example: A three-page set shows three pages. Slot two is current. There is a 'previous' link preceding the items. There is a 'next' link following the items."
        class="pagination-behaviors--example" />
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-03c-prev-next.png"
        alt="Example: A three-page set shows three pages. Slot three is current. There is a 'previous' link preceding the items. There is no 'next' link."
        class="pagination-behaviors--example" />
    </div>
  </li>
  <li class="pagination-behaviors--item">
    <p class="pagination-behaviors--guidance">
      Always show both the previous page and the next page adjacent to the current page.
    </p>
    <div class="pagination-behaviors--examples">
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-4a.png"
        alt="Example: A eight-page set shows pages 1 to 5 in slots 1 to 5. Slot 4 is current. Slot 6 shows an overflow indicator. Slot 7 shows page 8."
        class="pagination-behaviors--example" />
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-4b.png"
        alt="Incorrect example: A eight-page set shows page 1 in slot 1. Slot 2 is an overflow indicator. Slot 3 contains page 4 and is current. This is incorrect because we do not see page 3, the previous page in this instance."
        class="pagination-behaviors--example" />
    </div>
  </li>
  <li class="pagination-behaviors--item">
    <p class="pagination-behaviors--guidance">
      Show an overflow indicator when there are pages missing.
    </p>
    <div class="pagination-behaviors--examples">
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-5a.png"
        alt="Example: A eight-page set. Page 1 is the current page. Instance shows pages 1 to 5 in slots 1 to 5. Slot 6 is overflow. Slot 7 page 8."
        class="pagination-behaviors--example" />
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-5b.png"
        alt="Example: A eight-page set. Page 5 is the current page. Instance shows page 1 in Slot 1. Slot 2 is overflow. Pages 4 to 8 appear in slots 3 to 7."
        class="pagination-behaviors--example" />
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-5c.png"
        alt="Example: A eight-page set. Page 6 is the current page. Instance shows page 1 in Slot 1. Slot 2 is overflow. Pages 4 to 8 appear in slots 3 to 7."
        class="pagination-behaviors--example" />
    </div>
  </li>
  <li class="pagination-behaviors--item">
    <p class="pagination-behaviors--guidance">
      <strong>Bounded</strong> sets can show overflow indicators in Slot 2 and Slot 6 only.
    </p>
    <div class="pagination-behaviors--examples">
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-6a.png"
        alt="Example: A nine-page set. Page 5 is the current page. Instance shows page 1 in Slot 1. Slot 2 is overflow. Slots 3 to 5 contain Pages 4, 5, and 6. Slot 6 is overflow. Slot 7 is page 9."
        class="pagination-behaviors--example" />
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-6b.png"
        alt="Incorrect example: A nine-page set. Page 7 is the current page. Instance shows page 1 in Slot 1. Slots 2 and 3 are overflow. Slots 4 to 7 contain Pages 6 to 9. Slot 7 is page 8. Incorrect because Slot 3 is overflow."
        class="pagination-behaviors--example" />
    </div>
  </li>
  <li class="pagination-behaviors--item">
    <p class="pagination-behaviors--guidance">
      <strong>Unbounded</strong> sets always show an overflow indicator in Slot 7.
    </p>
    <div class="pagination-behaviors--examples">
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-7.png"
        alt="Example: A unbounded set. Page 1 is the current page. Slots 1 to 6 contain pages 1 to 6. Slot 7 is overflow."
        class="pagination-behaviors--example" />
    </div>
  </li>
  <li class="pagination-behaviors--item">
    <p class="pagination-behaviors--guidance">
      <strong>Unbounded</strong> sets use Slot 4 as the current page for pages 4 and higher.
    </p>
    <div class="pagination-behaviors--examples">
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-8a.png"
        alt="Example: A unbounded set. Page 4 is the current page. Slots 1 to 6 contain pages 1 to 6. Slot 7 is overflow."
        class="pagination-behaviors--example" />
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-8b.png"
        alt="Example: A unbounded set. Page 5 is the current page. Slot 1 is page 1. Slot 2 is overflow. Slots 3 to 6 contain pages 4 to 7. Slot 4 is current. Slot 7 is overflow."
        class="pagination-behaviors--example" />
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-8c.png"
        alt="Example: A unbounded set. Page 7 is the current page. Slot 1 is page 1. Slot 2 is overflow. Slots 3 to 6 contain pages 6 to 9. Slot 4 is current. Slot 7 is overflow."
        class="pagination-behaviors--example" />
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-8d.png"
        alt="Incorrect example: A unbounded set. Page 7 is the current page. Slot 1 is page 1. Slot 2 is overflow. Slots 3 to 6 contain pages 5 to 8. Slot 5 is current. Slot 7 is overflow. Incorrect because Slot 5 is current."
        class="pagination-behaviors--example" />
      <img
        src="{{ site.baseurl }}/assets/img/components/pagination/pagination-behaviors-8e.png"
        alt="Incorrect example: A unbounded set. Page 7 is the current page. Slot 1 is page 1. Slot 2 is overflow. Slots 3 to 6 contain pages 4 to 7. Slot 6 is current. Slot 7 is overflow. Incorrect because Slot 6 is current."
        class="pagination-behaviors--example" />
    </div>
  </li>
</ul>
