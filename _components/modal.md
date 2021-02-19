---
permalink: /components/modal/
layout: styleguide
type: component
title: Modal
category: Components
lead: A modal appears over the main website content to focus a user’s attention on critical information or a specific task while disabling the content underneath it. 
---

A modal is unique because it purposefully interrupts a user’s workflow and prevents interaction with the page content underneath unless a user completes the required action or dismisses it. **They should be used sparingly to minimize unnecessary disruptions for the user.** 

Modals should have a simple headline that clearly states the purpose. They often have additional text to further explain what the user needs to do or why. Avoid using modals to display complex forms or large amounts of information. 


{% include code/preview.html component="modal" %}
{% include code/accordion.html component="modal" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="icon-modal">
    Guidance
  </button>
<div id="icon-modal" aria-hidden="false" class="usa-accordion__content site-component-usage" markdown="1">

## When to use the modal component

{:.usa-content-list}

- **Confirmation.** Use modals to force the user to complete a task or make a decision that requires their full attention outside of the main workflow. These modals are usually triggered by a user action on the page and offer more than one option to proceed — such as a “yes” and “no” button. They are commonly used to confirm user actions or tasks that can’t be undone. 

  Examples: 
  - “Your work isn’t saved. Do you want to proceed?” 
  - “Are you sure you want to cancel?” 

- **Acknowledgement before continuing.** These modals are used as a “gate” to prevent users from moving forward without acknowledging or answering specific information in the modal. A key differentiator of these modals is that a user should not be able to close the modal or escape without making a selection — this means the “close” button should be disabled on these modals. It also means there needs to be a clear way to accept or reject the content in the modal. 

  Examples: 
  - “By using this website, you are agreeing to our privacy policy.” 
  - “Your session is about to timeout. Do you need more time?” 
  - “Are you 18 or older?” 

- **Explanatory content without disrupting a process.** A modal can be used to display information without taking users away from a process or task. These modals usually show optional information to help a user gain further understanding about what they’re doing — for instance, displaying a privacy policy while creating an account or viewing an in-depth definition or explanation while filling out a form. Typically these modals don’t require a user to take action other than closing it. 

## When to consider something else

{:.usa-content-list}

- **Every time!** Before using a modal, consider whether there’s another component that might be less disruptive for the user. Modals should be a last resort. 

- **Multi-step process.** Avoid complicated user flows in a modal that may take the user away from the original page. A multi-step process is better suited to an individual page, guiding the user and accommodating complexities in the user flow.

- **Error, success, or warning messages.** When these relate to a form field, these are better displayed in the context of the page (such as showing an error next to a missing required field). When these relate to page-level messages (such as confirming that a form has been successfully submitted), they should appear as an [alert]({{ site.baseurl }}/components/alert/) at the top of the page where the user is taken next. 

## Usability guidance

{:.usa-content-list}

- **Users should trigger modals.** Modals should appear as a result of an action made by the user or (less commonly) inactivity. A modal should not surprise the user, so don’t automatically display them. Some **exceptions** would be to alert the user that their authenticated session in a web application is about to expire due to inactivity or if information needs to be displayed when arriving at a webpage for the first time (like accepting the use of cookies). 

- **Choose the modal size that fits your content.** There are two sizes to choose from: default and large. If a modal’s content can’t fit without scrolling, you may need to use the large variant or consider moving the content to its own page.

- **Use clear header and button text.** The header should clearly state what’s happening or what action the modal is prompting the user to do. The button text should indicate what will happen when selected and avoid ambiguity. For example, if a modal asks “Do you want to cancel?” the button options should not be “yes” and “cancel” — instead use something like “Yes, cancel” and “No, don’t cancel.”

- **Limit in-modal interactions.** Avoid using components other than buttons inside the modal. Components such as accordions and form fields often don’t scale well for mobile users and they can easily lose context that they’re viewing a modal. If you need to include links that navigate away from a modal to another webpage, refer to our link guidance about how to handle external links.

- **Consider what happens when the modal is dismissed.** The page underneath should not reload or change to new content. 

- **Avoid long content that requires scrolling.** If a lot of content is needed, make sure it’s clear that users have to scroll to see all of it. Lengthy content can be problematic because it pushes buttons out of a user’s initial view, which may cause confusion. 

## Accessibility

{:.usa-content-list}

- **Identify the title.** Use `aria-labelledby=”id”` on `.usa-modal` to associate a title to the modal so that it’s read when opening the modal. The id should belong to the `id` attribute on .`usa-modal__heading`. 

- **Descriptions.** Optionally, you may use `aria-describedby=”id”` on `.usa-modal` to associate descriptive text to the modal window so that it’s read when opening the modal. The id should belong to a paragraph or a brief piece of content.

- **Include the “X” close button at the end of the modal code.** CSS will display `.usa-modal__close` at the top right of the modal window, but placing the close button at the bottom of the modal will prevent some screen readers from reading the close button first and allow users to navigate the main content first.

## Implementation

{:.usa-content-list}

- **Use unique ids.** Each `.usa-modal` must have a unique id so that openers can associate them with their `aria-controls` attribute.

- **Openers.** A single modal can have multiple openers. Each opener requires `data-open-modal` and `aria-controls=”MODAL_ID”` attributes. Openers can be coded either as `<button>` or `<a>`. Using `<a>` helps anchor link to modals in the event javascript fails.

- **Closers.** Place a `data-close-modal` attribute on any button that will close a modal. Closers may have event listeners attached to them. Code closers as `<button>`.

- **Disabling close when an action is required.** In instances that a user must make a choice before continuing, you want to prevent them from closing the modal without taking action. Add `data-force-action` attribute to `.usa-modal` to prevent the user from closing the modal without taking an action.


### Settings

{% assign settings = site.data.settings.components.modal %}
{% include settings-table-simple.html
  settings=settings.contents
%}

### Modal variants
<table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
  <thead>
    <tr>
      <th scope="col" class="flex-6">Variant</th>
      <th scope="col" class="flex-6">Description</th>
    </tr>
  </thead>
  <tbody class="font-mono-2xs">
    <tr>
      <td data-title="Variant" class="flex-6">.usa-modal--lg</td>
      <td data-title="Description" class="flex-6">
        <span class="font-lang-3xs">Add <code>.usa-modal--lg</code> to <code>.usa-modal</code> for a larger window and larger heading size on wider screens</span>
      </td>
    </tr>
  </tbody>
</table>

#### Package information

{:.usa-content-list}

- **Package usage:** @import usa-modal
- **Requires:** required, global, usa-button


</div>