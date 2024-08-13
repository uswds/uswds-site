- **Use unique ids.** Each `.usa-modal` must have a unique id so that openers can associate them with their `aria-controls` attribute.

- **Openers.** A single modal can have multiple openers. Each opener requires `data-open-modal` and `aria-controls=”[modal_id]”` attributes. Openers can be coded as either `<button>` or `<a>` elements. Using `<a>` helps link to modals in the event JavaScript fails.

- **Closers.** Place a `data-close-modal` attribute on any button that will close a modal. Closers may have event listeners attached to them. Code closers as `<button type="button">`.

- **Disabling close when an action is required.** In instances that a user must make a choice before continuing, you want to prevent them from closing the modal without taking action. Add `data-force-action` attribute to `.usa-modal` to prevent the user from closing the modal without taking an action.

{% include init-note.html %}
