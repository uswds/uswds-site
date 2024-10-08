---
category: Components
component:
  status: ready
  package: usa-radio
  dependencies:
lead: Radio buttons allow users to select exactly one choice from a group.
permalink: /components/radio-buttons/
redirect_from:
- /form-controls/09-radio-buttons/
subnav:
- text: Preview
  href: '#radio-buttons-preview'
- text: Code
  href: '#radio-buttons-code'
- text: Guidance
  href: '#radio-buttons-guidance'
- text: Package
  href: '#radio-buttons-package'
- text: Latest updates
  href: '#changelog'
title: Radio buttons
type: component
variants:
  - variant: "`.usa-radio__input--tile`"
    description: Input tiles provide a larger interaction area and neatly group the label with the form control for readability. They’re useful in application forms and questionnaires, but may not be recommended when they create clutter on the page.
tags:
  - form
  - forms
  - form controls
  - input
  - checkbox
  - selector
changelog:
  key: component-radio-buttons
---

Radio buttons are a common way to allow users to make a single selection from a list of options. Since only one radio button can be selected at a time (within the same group), each available choice must be its own item and label. In contrast, [checkboxes]({{ site.baseurl }}/components/checkbox) may show a single label, with the checked/unchecked status of the item meaning opposite things. For example, a checkbox could have a single input/label and legend that says "I have read the terms and conditions." Radio buttons would need two inputs/labels for the same legend, "No" and "Yes".

Once a user selects one of the radio buttons in a group, the group can't be easily reset to displaying no radio buttons selected. One possible solution would be to add a “none of the above” option to a radio button group, which would allow users to effectively unselect the other radio buttons in that group.
