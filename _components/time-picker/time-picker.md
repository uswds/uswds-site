---
category: Components
component:
  status: ready
  package: usa-time-picker
  dependencies:
permalink: /components/time-picker/
redirect_from:
- /form-controls/12-time-picker/
title: Time picker
type: component
lead: A time picker helps users select a specific time.
implementation:
  initProps:
    - property: "`data-min-time`"
      element: .usa-time-picker
      description: The start time used in the time picker in `hh:mm` 24-hour format. The default is `00:00`.
    - property: "`data-max-time`"
      element: .usa-time-picker
      description: The end time used for the time picker in `hh:mm` 24-hour format. The default is `23:59`.
    - property: "`data-step`"
      element: .usa-time-picker
      description: The number of minutes between options. The minimum is `1` minute and the default is `30` minutes.
    - property: "`value`"
      element: .usa-input
      description: The default value shown in the time picker.
  props:
    - property: "`data-filter`"
      element: .usa-time-picker
      description: The time picker will use this regular expression to filter the time picker options. You are declaring a case insensitive match over the entire option text, which means `^` and `$` are added automatically. You can specify the inputted query with `{{query}}`. You can also declare a custom query filter as a data property as well, which can be used in the custom filter (`data-number-filter="[0-9]"` and then using `data-filter="{{numberFilter}}.*"`). The default filter is `.*{{query}}.*`, which is a simple "find anywhere within the option" text.
  procedures:
    - procedure: "`enable`"
      parameters: .usa-time-picker
      description: The time picker component will be enabled.
    - procedure: "`disable`"
      parameters: .usa-time-picker
      description: The time picker component will be disabled / read-only.
subnav:
- text: Preview
  href: '#time-picker-preview'
- text: Code
  href: '#time-picker-code'
- text: Guidance
  href: '#time-picker-guidance'
- text: Package
  href: '#time-picker-package'
- text: Latest updates
  href: '#changelog'
tags:
  - input
  - box
  - form controls
  - schedule
changelog:
  key: component-time-picker
---
