The examples in the Preview section, above, are common input masks, but you can adapt the code to meet the needs of your project. In order to extend the functionality of the input mask, you must include a `placeholder` attribute as the visible input mask, using the underscore `_` to represent a character the user should enter. You may use punctuation literals like `[space]`, `-`, `/`, or `(` to help format your mask, but these literals will not be included in the final submitted value. You also need a related `pattern` attribute on the `input` element, its value expressed as a regular expression that describes the intended format of the input data. Additionally, if the expected input is numeric, make sure to add the `inputmode="numeric"` attribute and setting so the numeric keypad is displayed. For example, an `input` with an input mask of three groups of three numerals, separated with spaces might have the following properties: 

{:.usa-content-list }
```
placeholder="___ ___ ___"
pattern="\d\d\d \d\d\d \d\d\d"
inputmode="numeric"
```

{:.usa-content-list }
<h3>The input mask and alphanumeric characters</h3>

{:.usa-content-list }
Input mask examples include an alphanumeric version which can be customized to meet your needs. To implement an alphanumeric input mask, you will need to add the attribute `data-charset` to the input tag. Similar to the `pattern` attribute, include a number sign `#` for each number and an `A` for each required letter. We recommend changing inputmode to `text` so the full keyboard is available to your user.

{:.usa-content-list }
If your input mask calls for a pattern such as _1A2 B3C_, you would implement that by adding the following attributes and character formatting to your input element:

{:.usa-content-list }
```
placeholder="___ ___"
pattern="\w\d\w \d\w\d"
data-charset="A#A #A#"
```
