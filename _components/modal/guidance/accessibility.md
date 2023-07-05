- **Identify the title.** Use `aria-labelledby=”[id]”` on `.usa-modal` to associate a title to the modal so that it’s read when opening the modal. The `id` should belong to the `id` attribute on `.usa-modal__heading`.

- **Descriptions.** Optionally, you may use `aria-describedby=”[id]”` on `.usa-modal` to associate descriptive text to the modal window so that it’s read when opening the modal. The `id` should belong to a paragraph or a brief piece of content.

- **Include the “X” close button at the end of the modal code.** CSS will display `.usa-modal__close` at the top right of the modal window, but placing the close button at the bottom of the modal will prevent some screen readers from reading the close button first and allow users to navigate directly to the main content instead.
