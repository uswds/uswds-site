---
category: Components
component:
  status: ready
  package: usa-input-mask
  dependencies: usa-input
permalink: /components/input-mask/
redirect_from:
- /form-controls/11-text-input/
title: Input mask
type: component
lead: An input mask is a string expression that constrains input to support valid input values.
implementation:
  props:
    - property: "`mask`"
      element: .usa-input-mask__field
      description: The mask attribute is used to define the format of your mask. Use `9`s for numbers and `A`s for letters. For example, a typical SSN number format in the mask attribute should look like `999-99-9999`.
    - property: "`placeholder`"
      element: .usa-input-mask__field
      description: This indicates the mask format. Use underscores `_` for character input placeholders combined with any valid format characters to customize your input mask. e.g. A U.S. telephone `placeholder` attribute may look like `(___) ___-____`.
    - property: "`maxlength`"
      element: .usa-input-mask__field
      description: This will be used as the limit referenced in the message and for validation.
    - property: "`inputmode`"
      element: .usa-input-mask__field
      description: For masks that contain all numbers, set `inputmode` to `numeric` to display a numeric keypad instead of the full keyboard. You can also set `inputmode` to `tel` to produce a standard-looking telephone keyboard.
    - property: "`forcelower`"
      element: .usa-input-mask__field
      description: Add `forcelower` to the `input` element and set it to true to enforce lowercase letters.
    - property: "`forceupper`"
      element: .usa-input-mask__field
      description: Add `forceupper` to the `input` element and set it to true to enforce uppercase letters.
  formatCharacters:
    - character: "_"
      name: underscore
      description: The visual indication for an expected character input.
    - character: "-"
      name: hyphen
      description: The hypen or dash format character.
    - character: "("
      name: parenthesis left
      description: The left parenthesis format character.
    - character: ")"
      name: parenthesis right
      description: The right parenthesis format character.
    - character: "["
      name: bracket left
      description: The left bracket format character.
    - character: "]"
      name: bracket right
      description: The right bracket format character.
    - character: ":"
      name: colon
      description: The colon format character.
    - character: "."
      name: period
      description: The period or dot format character.
    - character: ","
      name: comma
      description: The comma format character.
    - character: "$"
      name: dollar
      description: The dollar sign format character.
    - character: "%"
      name: percent
      description: The percent sign format character.
    - character: "@"
      name: at sign
      description: The at sign or asperand format character.
    - character: "*"
      name: asterisk
      description: The asterisk format character.
    - character: "/"
      name: forward slash
      description: The slash character often used in date masks.
subnav:
- text: Preview
  href: '#input-mask-preview'
- text: Code
  href: '#input-mask-code'
- text: Guidance
  href: '#input-mask-guidance'
- text: Package
  href: '#input-mask-package'
- text: Latest updates
  href: '#changelog'
tags:
  - input
  - form
  - input mask
changelog:
  key: component-input-mask
---
