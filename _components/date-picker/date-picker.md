---
category: Components
component:
  status: ready
  package: usa-date-picker
  dependencies:
implementation:
  initProps:
    - property: "`required`"
      element: input
      description: The date picker component will be required in terms of native form validation.
    - property: "`disabled`"
      element: input
      description: The date picker component will be disabled/readonly. You can re-enable by executing the enable procedure on the component.
    - property: "`data-default-value`"
      element: .usa-date-picker
      description: The date picker input will set this value if it is a valid date. The date should be in the format `YYYY-MM-DD`.
  props:
    - property: "`data-min-date`"
      element: .usa-date-picker
      description: The date picker will not allow a date selection before this date. The date should be in the format `YYYY-MM-DD`. Typing in an earlier date will cause native form validation error. A default min date or `0000-01-01` is used as a default.
    - property: "`data-max-date`"
      element: .usa-date-picker
      description: The date picker will not allow a date selection after this date. The date should be in the format `YYYY-MM-DD`. Typing in a later date will cause native form validation error. There is no default maximum date.
    - property: "`data-range-date`"
      element: .usa-date-picker
      description: The date picker will show a range selection from the range date. The date should be in the format `YYYY-MM-DD`.
  procedures:
    - procedure: "`enable`"
      parameters: .usa-date-picker element
      description: The date picker component will be enabled.
    - procedure: "`disable`"
      parameters: .usa-date-picker element
      description: The date picker component will be disabled / read-only.
layout: component
lead: A date picker helps users select a single date.
permalink: /components/date-picker/
redirect_from:
- /form-controls/05-date-picker/
subnav:
- text: Preview
  href: '#date-picker-preview'
- text: Code
  href: '#date-picker-code'
- text: Guidance
  href: '#date-picker-guidance'
- text: Package
  href: '#date-picker-package'
- text: Latest updates
  href: '#changelog'
tags:
  - calendar
  - form
  - forms
  - form controls
  - input
title: Date picker
type: component
changelog:
  key: component-date-picker
alert-info: true
issues_link: https://github.com/uswds/uswds/issues?q=is%3Aissue+is%3Aopen+label%3A%22Package%3A+Date+picker%22
---
