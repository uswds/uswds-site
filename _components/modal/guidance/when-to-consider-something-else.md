- **Every time!** Before using a modal, consider whether there’s another component that might be less disruptive for the user. Modals should be a last resort.

- **Multi-step process.** Avoid complicated user flows in a modal that may take the user away from the original page. A multi-step process is better suited to an individual page, guiding the user and accommodating complexities in the user flow.

- **Error, success, or warning messages.** When these relate to a form field, these are better displayed in the context of the page (such as showing an error next to a missing required field). When these relate to page-level messages (such as confirming that a form has been successfully submitted), they should appear as an [alert]({{ site.baseurl }}/components/alert/) at the top of the page where the user is taken next.
