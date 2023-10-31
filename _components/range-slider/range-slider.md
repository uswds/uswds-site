---
category: Components
component:
  status: ready
  package: usa-range
  references: true
  dependencies:
permalink: /components/range-slider/
redirect_from:
- /components/range-input/
- /form-controls/10-range-input/
title: Range slider
type: component
maturity: alpha
id_custom: range
lead: A range slider allows users to choose an approximate number from a range.
implementation:
  initProps:
    - property: "`data-text-unit`"
      description: "Adds a unit to screen reader callouts. The unit will be read after the current value."
      default: "`null`"
    - property: "`data-text-preposition`"
      description: "Changes the preposition between current value and max value. If no value is present, it will default to of. When providing a range slider on pages in a language other than English, be sure to update as necessary."
      default: '"of"'
subnav:
- text: Preview
  href: '#range-slider-preview'
- text: Code
  href: '#range-slider-code'
- text: Guidance
  href: '#range-slider-guidance'
- text: Package
  href: '#range-slider-package'
- text: Latest updates
  href: '#changelog'
tags:
  - form
  - forms
  - form controls
  - input
  - drag
  - volume
changelog:
  key: component-range-slider
---
