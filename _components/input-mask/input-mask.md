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
    - property: "`data-invalid-alpha-text`"
      required: "No"
      description: |
        Overrides the default value for the invalid alphabetic character hint text. Default value: "Please enter a letter character here"
    - property: "`data-invalid-numeric-text`"
      required: "No"
      description: |
        Overrides the default value for the invalid numeric character hint text. Default value: "Please enter a letter character here"
    - property: "`forcelower`"
      required: "No"
      description: Forces casing on alphabetic characters. Add `forcelower="true"` to the input element to enforce lowercase letters.
    - property: "`forceupper`"
      required: "No"
      description: Forces casing on alphabetic characters. Add `forceupper="true"` to the input element to enforce uppercase letters.
    - property: "`inputmode`"
      required: "No"
      description: Tells browsers which keyboard type to display. For masks that contain all numbers, set `inputmode` to numeric to display a numeric keyboard. Set `inputmode` to `tel` to display a telephone keyboard. Set `inputmode` to `text` if your input mask includes alphabetic characters.
    - property: "`mask`"
      required: "Yes"
      description: Defines the format of your mask. Use the number `9` to represent any number, the letter `A` to represent any letter, and any available format character. For example, an input that requires three numbers followed by four letters with a hyphen in-between would have a  `mask` attribute that looks like `999-AAAA`.
    - property: "`placeholder`"
      required: "Yes"
      description: Creates the visual placeholder and informs some elements of mask formatting. Use underscores `_` for character input placeholders combined with any valid format characters to customize your input mask. For example, a U.S. telephone `placeholder` attribute may look like `(___) ___-____`.
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
    - character: " "
      name: space
      description: The space format character.
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
