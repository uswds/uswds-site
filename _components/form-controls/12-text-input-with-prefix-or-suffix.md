---
title: Input with prefix or suffix
parent: Form controls
order: 12
lead: Use input prefixes and suffixes to show symbols or abbreviations that help users enter the right type of information in a form’s text input.
---

Prefixes and suffixes are useful for any form field that asks for things like measurement units, dollar amounts, percentages, etc. They appear at the beginning or end of the input field, depending on the use case, and can take the form of text, symbols, or icons. 

Including a prefix or suffix in the input field helps reduce cognitive load by quickly indicating to users what kind of information they should enter. For example, a calendar icon tells the user that the field involves a date and a dollar sign indicates that the field is related to money.  

{% include code/preview.html component="input-prefix-suffix" %}
{% include code/accordion.html component="input-prefix-suffix" %}


<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="prefix-suffix-docs">
    Guidance
  </button>
  <div id="prefix-suffix-docs" aria-hidden="false" class="usa-accordion__content site-component-usage" markdown="1">

### When to use the prefix or suffix component

{:.usa-content-list}

- **Highlight the type of information.** Prefixes and suffixes are useful when there’s a commonly understood symbol or abbreviation for the type of information the user needs to enter. Some common examples include units of measurement (like lbs or ft), symbols (like $ or %), or even icons (like showing an eye for password visibility).  

- **Reduce mental load.** Adding a prefix or suffix can help the user more quickly understand what kind of information is requested. 

### When to consider something else

{:.usa-content-list}

- **Open-ended form fields.** If there aren’t specific parameters around the information the user needs to enter, a prefix or suffix may be incorrect. For example, don’t use a $ prefix for a form field asking “What’s a fair resolution?” if the user could enter either “$1,000” or “a full refund” as the answer.  

- **Explanation requires additional words.** Don’t use prefixes or suffixes if a symbol or abbreviation is insufficient to convey the meaning. There shouldn’t be any confusion between what type of information a prefix or suffix represents. This is especially true when using icons that could have multiple meanings. 

### Usability guidance

{:.usa-content-list}

- **Follow best practices when using an icon.** If you include an [icon]({{ site.baseurl }}/components/icons/) as a prefix or suffix, follow the design system’s icon guidance.

- **Use common abbreviations.** Only use commonly understood abbreviations when indicating a text prefix or suffix. Don’t use the full word.

### Accessibility

{:.usa-content-list}

- **Hide from screen readers.** Prefixes and suffixes are hidden from screen readers using `aria-hidden`.

- **Use descriptive labels.** Labels should clearly indicate what type of data to enter since prefixes and suffixes are hidden from screen readers. For example, if you’re requesting someone’s height in inches, you have “in.” appear in a suffix, but your form label should say “Height, in inches.”

### Implementation

{:.usa-content-list}

- **Placement.** Place the `.usa-input-prefix` before `.usa-input` and `.usa-input-suffix` after the `.usa-input`. Both elements are placed inside `.usa-input-group`.

- **Use text or icons.** Input prefixes and suffixes can accept either plain text or [icons]({{ site.baseurl }}/components/icons/).

- **Validation.** Place input validation classes on usa-input-group.

#### Package information

{:.usa-content-list}

- **Package usage:** `@import form-controls`
- **Requires:** `required`, `global`


</div>
</div>