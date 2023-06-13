---
permalink: /components/accordion/a11y/
layout: styleguide
title: Accordion accessibility
category: Components
lead: [Summary of how this guide will show you how USWDS tests for accessibility and how you can test your own implementation for accessibility.]
subnav:
- text: Accessibility
  href: '/components/accordion/a11y'
- text: Latest updates
  href: "#changelog"
changelog:
  key: 'component-accordion-a11y'
---
<style>
    .wcag-A {
        background-color: #e7f6f8;
        color: #1b1b1b;
        /* background-color: #009ec1; */
    }
    .wcag-AA {
        /* background-color: #009ec1; */
        background-color: #e7f6f8;
        color: #1b1b1b;
    }
    .wcag-AAA {
        /* background-color: #2e6276;
        order: -1; */
        /* background-color: #009ec1; */
        background-color: #e7f6f8;
        color: #1b1b1b;
    }
    .wcag-tag {
        background-color: #e7f6f8;
        color: #1b1b1b;
        display: none;
    }
</style>

<div class="usa-alert usa-alert--success usa-alert--no-icon">
  <div class="usa-alert__body">
    <p class="usa-alert__text">
      This component has achieved level 2.1 of WCAG conformance standards. <br/>
      <i>This component was last tested by the USWDS accessibility team on June 12, 2023.</i>
    </p>
  </div>
</div>



<!-- ## How to perform manual testing of the accordion component -->
## Testing for accessibility
[Introduction explaining how creating accessible components is a team effort. Outline what USWDS is responsible for, what the users are responsible for, etc]

### How to check if your implementation is accessible

{:.usa-content-list}
- **Manually test your own implementation of the accordion component.** USWDS intends to provide components that are accessible; however, accessibility ultimately depends on how you implement them in your context. Use the checklists below as your guide to test the component in your project.
- **Build accessibility into your team’s workflow.** Consider a component done or ready for implementation only after it has passed the manual testing checklists provided in the section below.

<div
  class="usa-summary-box margin-top-4 maxw-tablet"
  role="region"
>
  <div class="usa-summary-box__body maxw-tablet">
    <h3 class="usa-summary-box__heading" id="summary-box-key-information">
      Consider your audience
    </h3>
    <div class="usa-summary-box__text">
        <ul>
          <li>
          <b>Some audiences struggle with accordions.</b> If your audience tends toward being not tech-savvy or could have cognitive challenges, avoid accordions. Instead, consider [these other components] [because...].
          </li>
         <li>
          <b>Collapsed content can be hard to find via search.</b> With content hidden inside a collapsed accordion, users who land on a page via a keyword search may have difficulty finding the answer they need. People who perform on-page searches (Command+F or Ctrl+F) cannot always find keywords if they are hidden inside an accordion. [Note about how this affects accessibility?]
        </li>
        </ul>
    </div>
  </div>
</div>

## How to perform manual testing of the accordion component
[You don't need to be an accessibility expert to test USWDS components. The checklists below will walk you through how to test items that are critical for component accessibility.

The checklists will reflect the current test results for the component with either a green checkmark to indicate a passing score, a red x to indicate a failing score, and a blue question mark to indicate that it is something that can only be tested on implementation.]
### Keyboard testing checklist

Optional statement about who uses keyboard navigation/why a tester should care. You can find full [instructions for completing keyboard testing](https://digital.gov/resources/introduction-accessibility/#try-using-a-screen-reader).

<ul class="usa-icon-list usa-content-list">
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">
             Do all of the closed accordions expand when using either the enter key or the spacebar? Do the open
            accordions close?
            <span class="usa-tag wcag-AAA">WCAG 2.1 AAA</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-red">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#cancel"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">Can you tab into the content of the accordion to click on links and other
            interactive items?
            <span class="usa-tag wcag-AA">WCAG 2.1 AA</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">
            Can you clearly see the visible focus outline around each clickable element?
            <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">When navigating through items, does the order in which you see the visible
            focus follow logically throughout the content inside the accordion (e.g., the focus doesn’t skip a link or
            accordion heading)?
            <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">Does the expand/collapse functionality require user input (i.e., it is not
            hover-only)?
            <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">When you press the tab key, does the focus move to the next focusable
            element in sequential order?
            <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">If you click ‘“shift+tab’” does the focus move to the previous focusable
            element? All focusable elements should be included in the tab sequence.
            <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">
            Can you navigate out of the accordion area without closing the accordion?
            <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">Confirm that the focus is appropriately managed when opening or closing the
            accordion items. Does focus move to the newly expanded item? If an item is closed, does the focus return to
            the accordion header or move to the next logical element?
            <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
</ul>

<div class="usa-accordion margin-top-4 usa-content-list">

  <h3 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="kb-accordion1"
    >
      Related WCAG Criteria
    </button>
  </h3>
  <div id="kb-accordion1" class="usa-accordion__content usa-prose">
  <p>Through this process of keyboard testing, you can confirm the accordion component complies with:</p>
    <ul>
      <li><a href="">2.1.1 Keyboard</a> - All functionality of the accordion is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints. (Level A)</li>
      <li>2.1.2 No Keyboard Trap - If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away. (Level A)</li>
      <li>2.4.3 Focus Order - If the accordion can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability. (Level A)</li>
      <li>2.4.7 Focus Visible - Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible. (Level AA)</li>
    </ul>
  </div>
  <h3 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="kbi"
    >
      Expected keyboard interaction
    </button>
  </h3>
  <div id="kbi" class="usa-accordion__content usa-prose">
                <table class="font-body-3xs usa-table--borderless">
  <thead>
    <tr>
      <th>Keyboard interaction</th>
      <th>Expected behavior</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><kbd>Tab</kbd></td>
      <td>Each accordion button should be focusable by pressing either ‘tab’ or ‘shift’ + ‘tab’; ‘tab’ should advance focus to the next item.</td>
    </tr>
    <tr>
      <td><kbd>Shift</kbd> + <kbd>Tab</kbd></td>
      <td>Each accordion button should be focusable by pressing either ‘tab’ or ‘shift’ + ‘tab’;‘shift+tab’ should move focus to the previous item.</td>
    </tr>
    <tr>
      <td><kbd>Space</kbd> or <kbd>Enter</kbd></td>
      <td>When focus is on a header button, pressing the ‘space’ or ‘enter’ key should toggle its related accordion panel to open/close.</td>
    </tr>
  </tbody>
</table>
  </div>
 </div>

### Zoom magnification checklist

Optional statement about who uses zoom magnification/why a tester should care. You can find full [instructions for completing zoom magnification testing](https://digital.gov/resources/introduction-accessibility/#try-using-a-screen-reader).

<ul class="usa-icon-list usa-content-list " >
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">
            Are you able to see all the content in the accordion without horizontal scrolling?
             <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">Is any content cut off?
         <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">Does any content in the accordion overlap?
         <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">Do you see anything covering the accordion (pop ups, images, etc.)?
         <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
</ul>

### Screen reader checklist

Optional statement about who uses screen readers/why a tester should care. You can find full [instructions for completing screen reader testing](https://digital.gov/resources/introduction-accessibility/#try-using-a-screen-reader).


<ul class="usa-icon-list usa-content-list">
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">
            Does the screen reader consistently announce heading levels on the heading panels (all H2s, for example)?
            <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">Does the virtual cursor (JAWS focus) move from one header to the next?
        <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-info-darker">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#help"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">Are your heading levels in proper order?<span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">Do you hear “collapsed” or "expanded”?
        <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">Is your accordion section labeled as a region or landmark for easy access via a keyboard?
        <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">Can the screen reader perceive all of the content in the accordion sections?
        <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
</ul>

<div class="usa-accordion margin-top-4 usa-content-list">

  <h3 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="sr-accordion1"
    >
      Related WCAG Criteria
    </button>
  </h3>
  <div id="sr-accordion1" class="usa-accordion__content usa-prose">
  <p>Through this process of screen reader testing, you can confirm the accordion component complies with:</p>
    <ul>
      <li>2.4.10 Section Headings - Section headings are used to organize accordion content. (Level AAA)</li>
      <li>4.1.2 Name, Role, Value - For the accordion component, the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. (Level A)</li>
    </ul>
  </div>
 </div>

### Mobile testing checklist

Optional statement about who uses mobile navigation/why a tester should care. You can find full [instructions for completing mobile testing here](https://digital.gov/resources/introduction-accessibility/#try-using-a-screen-reader).

<ul class="usa-icon-list usa-content-list " >
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">
            Is the entire accordion section title selectable?
             <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">Is there enough space for touchscreen users to make selections using a finger?
         <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
            <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
        </div>
        <div class="usa-icon-list__content">Does the width of the accordion fit on your screen without being cut off?
         <span class="usa-tag wcag-A">WCAG 2.1 A</span> <span class="usa-tag wcag-tag">2.1.1 Keyboard</span>
        </div>
    </li>
</ul>

## Support
If you discover accessibility issues with the accordion component, please let us know by [submitting an issue in GitHub.](https://github.com/uswds/uswds/issues/new/choose)
