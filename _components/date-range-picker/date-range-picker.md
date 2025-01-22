---
component:
  status: ready
  package: usa-date-range-picker
  dependencies:
category: Components
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
      element: .usa-date-range-picker
      description: The date range picker will not allow a date selection before this date. The date should be in the format `YYYY-MM-DD`. Typing in an earlier date will cause native form validation error. A default min date or `0000-01-01` is used as a default.
    - property: "`data-max-date`"
      element: .usa-date-range-picker
      description: The date range picker will not allow a date selection after this date. The date should be in the format `YYYY-MM-DD`. Typing in an later date will cause native form validation error. There is no default maximum date.
  procedures:
    - procedure: "`enable`"
      parameters: .usa-date-picker element
      description: The date picker component will be enabled.
    - procedure: "`disable`"
      parameters: .usa-date-picker element
      description: The date picker component will be disabled / read-only.
layout: component
lead: A date range picker helps users select a range between two dates.
permalink: /components/date-range-picker/
redirect_from:
- /form-controls/06-date-range-picker/
subnav:
- text: Date range picker accessibility tests
  href: /components/date-range-picker/accessibility-tests/
tags:
  - calendar
  - form
  - forms
  - form controls
  - input
title: Date range picker
type: component
changelog:
  key: component-date-range-picker
known_issues_key: date-picker
---
