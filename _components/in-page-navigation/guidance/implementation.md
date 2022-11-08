{:.usa-content-list }
Implementing the in-page navigation component requires a few additions and adjustments to your page's markup.

{:.usa-content-list }
- A wrapper `div` with the class `usa-in-page-nav-container` must surround the `main` element of your page.
- A new sibling `aside` with the class `usa-in-page-nav` must follow the `main` element.

The following is an example of the minimum markup your page would need to inplement the in-page navigation component:

```
<div class="usa-in-page-nav-container">
  <main id="main-content" class="main-content">
     [ Page content ]
  </main>
  <aside class="usa-in-page-nav"></aside>
</div>
```
