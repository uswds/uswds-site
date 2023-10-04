---
category: Components
component:
  status: ready
  package: usa-combo-box
  dependencies:
implementation:
  initProps:
    - property: "`required`"
      element: select
      description: The combo box component will be required in terms of native form validation.
    - property: "`disabled`"
      element: select
      description: The combo box component will be disabled / read-only. You can re-enable it by executing the enable procedure on the component.
    - property: "`data-placeholder`"
      element: .usa-combo-box
      description: To update the placeholder text of the combo box, use the `data-placeholder` attribute. We recommend using a label or hint instead of a placeholder.
    - property: "`data-default-value`"
      element: .usa-combo-box
      description: The combo box will set this value as the default selection if it is found within the select options.
  props:
    - property: "`data-filter`"
      element: .usa-combo-box
      description: The combo box will use this regular expression to filter the combo box options. You are declaring a case insensitive match over the entire option text, which means `^` and `$` are added automatically. You can specify the inputted query with `{{query}}`. You can also declare a custom query filter as a data property as well, which can be used in the custom filter (`data-number-filter="[0-9]"` and then using `data-filter="{{numberFilter}}.*"`). The default filter is `.*{{query}}.*`, which is a simple "find anywhere within the option" text.
  procedures:
    - procedure: "`enable`"
      parameters: .usa-combo-box
      description: The combo box component will be enabled.
    - procedure: "`disable`"
      parameters: .usa-combo-box
      description: The combo box component will be disabled / read-only.
layout: component
lead: A combo box helps users select an item from a large list of options.
permalink: /components/combo-box/
redirect_from:
  - /form-controls/03-combo-box/
subnav:
- text: Preview
  href: '#combo-box-preview'
- text: Code
  href: '#combo-box-code'
- text: Guidance
  href: '#combo-box-guidance'
- text: Package
  href: '#combo-box-package'
- text: Latest updates
  href: '#changelog'
tags:
  - form
  - forms
  - form controls
  - input
  - select
title: Combo box
type: component
alert: true
alert-class: warning
alert-heading: This component has known usability issues.
alert-content: Details in <a href="#warnings-combo-box">"Known issues"</a>.
alert-tag: "Warning: Usability concerns"
warnings:
- description: High priority item lorem ipsum dolor.
  description_additional: More details lorem ipsum dolor sit anum.
  level: high
  issue_number: 1234
- description: Medium priority item lorem ipsum dolor.
  level: medium
  issue_number: 3456
- description: Low priority item lorem ipsum dolor.
  description_additional: More details lorem ipsum dolor sit anum.
  level: low
  issue_number: 6789
changelog:
  key: component-combo-box
---

