{% include accessibility-tests/a11y-note.html %}

{:.usa-content-list}
- **Convey relationship.** If not using a list element, give the parent element `role="group"` in order to convey to screen readers that actions are part of a group. If using as part of a toolbar, use `role="toolbar"`.
- **Choose each element for its action.** Use an `<a href="...">` to navigate to another page and a `<button>` to perform an action, such as submitting a form or opening a dialog. A link styled with `.usa-button` remains a link, and screen readers should announce it as a link. Do not add `role="button"` solely to match its appearance.
- **Explain mixed actions with clear labels.** In the default example, “Back” is a link to a previous page and “Continue” is a button action. Adapt both the labels and elements to your workflow. If “Back” changes a step without navigating to another page, use `<button type="button">`; if “Continue” submits a form, use `<button type="submit">`. Users can activate links with Enter and buttons with Enter or Space.
