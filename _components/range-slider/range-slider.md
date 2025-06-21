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
    - property: '`data-text-unit`'
      description: 'Adds a unit to screen reader callouts. The unit will be read after the current value. For example, adding a value of "stars" enables a readout like "3.5 stars of 5."'
      default: '_Undefined by default_'
    - property: '`data-text-preposition`'
      description: 'Changes the preposition between current value and max value in screen reader readouts. For example, adding a value with the Spanish translation "de" enables a readout "like 20 de 100". When adding a range slider to a non-English page, be sure to update the preposition as necessary.'
      default: 'of'
subnav:
- text: Range slider accessibility tests
  href: /components/range-slider/accessibility-tests/
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
