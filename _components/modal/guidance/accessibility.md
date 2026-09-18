- **Label the modal with its heading.** Use `aria-labelledby=”[id]”` on `.usa-modal` to read out the modal title when opening the modal. The `[id]` should match the value of the `id` attribute on the `usa-modal__heading` element.

- **Share more context with `aria-describedby`.** Optionally, you may also use `aria-describedby=”[id]”` on `.usa-modal` to associate descriptive text to the modal window so that it’s read when opening the modal. The `id` should belong to a paragraph or a brief piece of content.

- **Include the “X” close button at the end of the modal code.** CSS will display `.usa-modal__close` at the top right of the modal window, but placing the close button at the bottom of the modal will prevent some screen readers from reading the close button first and allow users to navigate directly to the main content instead.

- **Ensure keyboard focus is trapped inside the modal.** When using a keyboard to test the modal, ensure focus does not move to the page behind it.

#### Test the modal in your implementation

A working component preview does not establish that a modal works after your application inserts, replaces, or removes content. Use the [modal accessibility checklist]({{ site.baseurl }}/components/modal/accessibility-tests/) with your actual page and content.

For example, a page might insert a confirmation modal after a user selects “Delete item.” If the modal has no accessible name, focus stays on the page behind it, or closing it loses the user's place, check the following together:

1. Confirm that the modal heading exists and its unique `id` matches the modal's `aria-labelledby` value.
2. Confirm that the opening control refers to the correct modal and that the inserted modal has been initialized. When it opens, check that focus enters it, Tab and Shift+Tab stay inside it, and background content cannot be operated.
3. Close the modal and check that focus returns to the opening control. If the action removes that control, move focus to a logical remaining control or heading in the same workflow.
4. Repeat with a screen reader to check the dialog name, reading order, background isolation, and focus return. Repeat after any application update that changes the modal's content or opening control.

Record these steps as regression checks for your implementation. A framework or portal may change where content is mounted, so test the resulting page rather than assuming the component's original document structure is preserved.
