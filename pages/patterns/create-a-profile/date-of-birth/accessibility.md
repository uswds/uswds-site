**Follow input guidance.** These text fields should follow the accessibility  <a href="https://designsystem.digital.gov/components/text-input/">guidelines for all text inputs</a>. 

**Don't auto-advance focus.** Do not use JavaScript to auto advance the focus from one field to the next. This makes it difficult for keyboard-only users to navigate and correct mistakes. 

**Use “text” instead of “number” inputs.** Research indicates that <a href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">numeric inputs still carry many usability problems</a>. While dates and years are some of the few kinds of numbers that can work reliably with numeric inputs, the way the user enters the data may still differ from what the browser expects. Use `<input type="text" inputmode="numeric" pattern="[0-9]*">` to better support mobile users. 

**Always use a label on the select element.** Don’t replace it with the default menu option (for example, removing the “Month” label and just having the menu read “Select a month” by default).

**Avoid auto-submission.** Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them.

**Customization.** As you customize, make sure you follow [accessibility guidelines for form templates](https://designsystem.digital.gov/templates/form-templates/) and the [accessibility guidelines for form controls](https://designsystem.digital.gov/components/form/).
