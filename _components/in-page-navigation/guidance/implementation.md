{:.usa-content-list }
Implementing the in-page navigation component requires a few additions and adjustments to your page's markup.

{:.usa-content-list }
- A wrapper `div` with the class `usa-in-page-nav-container` must surround the `main` element of your page.
- A new sibling `aside` with the class `usa-in-page-nav` must precede the `main` element.

The following is an example of the minimum markup your page would need to inplement the in-page navigation component:

```
<div class="usa-in-page-nav-container">
  <aside class="usa-in-page-nav"></aside>
  <main id="main-content" class="main-content">
     [ Page content ]
  </main>
</div>
```

{:.usa-content-list }
- **Initialization properties.** The following properties update the component during initialization. These properties must be set before the component is initialized in order to have an effect.
{% include settings-table-flex.html
  content=page.implementation.initProps
  cols="flex-2, flex-1, flex-2, flex-1"
  section="initialization properties"
%}
