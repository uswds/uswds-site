- **Label the modal with its heading.** Use `aria-labelledby=”[id]”` on `.usa-modal` to read out the modal title when opening the modal. The `[id]` should match the value of the `id` attribute on the `usa-modal__heading` element.

- **Share more context with `aria-describedby`.** Optionally, you may also use `aria-describedby=”[id]”` on `.usa-modal` to associate descriptive text to the modal window so that it’s read when opening the modal. The `id` should belong to a paragraph or a brief piece of content.

- **Include the “X” close button at the end of the modal code.** CSS will display `.usa-modal__close` at the top right of the modal window, but placing the close button at the bottom of the modal will prevent some screen readers from reading the close button first and allow users to navigate directly to the main content instead.
