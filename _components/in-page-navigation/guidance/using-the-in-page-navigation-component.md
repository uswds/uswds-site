Implementing the in-page navigation component requires a few additions and adjustments to your code including:

- A wrapper div with the class usa-in-page-nav-container
- The wrapper div placed as a parent around the main landmark element and a new sibling aside with the class usa-in-page-nav

Here is an example of the minimum structure required to implement the in-page navigation component:
```
<div class="in-page-nav-container">
  <main id="main-content" class="main-content"></main>
  <aside class="in-page-nav"></aside>
</div>
```
#### ​Intersection Observer
The USWDS in-page navigation component utilizes the Intersection Observer API to enable and disable active states in the navigation based on the position of corresponding sections in the content portion of a page. 

As the W3C states: Intersection Observer can be used to understand the visibility and position of DOM elements ("targets") relative to a containing element or to the top-level viewport ("root").

Mozilla describes it as: The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

#### Intersection Observer Options
- **Root.** The root option is set to the main content landmark. If not set, this defaults to the viewport.
- **Root margin.** The root margin is a string that allows you to define the observable area. By default, the in-page navigation component is set to `0px 0px -95% 0px.` The `-95%` means observables will set the corresponding link to active when the section is 95% from the bottom of the observable area.
- **Threshold.** The threshold option is set to 1 which means 100% of the observable must be in the observed section.

#### IntersectionObserverEntry Interface
This interface to the IO API describes, in fine detail, the intersection between the target element and its root container at a specific moment of transition. For example, here are the properties returned with each Intersection Observer entry and sample data:
```
boundingClientRect: DOMRectReadOnly {x: 16, y: -323.09375, width: 1400, height: 27.59375, top: -323.09375, …}
intersectionRatio: 0
intersectionRect: DOMRectReadOnly {x: 0, y: 0, width: 0, height: 0, top: 0, …}
isIntersecting: false
isVisible: false
rootBounds: DOMRectReadOnly {x: 0, y: 0, width: 2142, height: 954, top: 0, …}
target: h2
time: 312
```