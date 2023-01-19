The examples in the Preview section, above, are common input masks, but you can adapt the code to meet the needs of your project. In order to extend the functionality of the input mask, you must include a `placeholder` attribute as the visible input mask, using the underscore `_` to represent a character the user should enter. You may use punctuation literals like `[space]`, `-`, `/`, or `(` to help format your mask, but these literals will not be included in the final submitted value. See a complete list of format characters below. You also need a related `pattern` attribute on the `input` element, its value expressed as a regular expression that describes the intended format of the input data. Additionally, if the expected input is numeric, make sure to add the `inputmode="numeric"` attribute and setting so the numeric keypad is displayed. For example, an `input` with an input mask formatted for a Social Security Number, might have the following properties: 

{:.usa-content-list }
```
inputmode="numeric"
mask": "999-99-9999"
pattern="\d{3}-\d{2}-\d{4}"
placeholder="___-__-____"
```

{:.usa-content-list }
<h3>The input mask and alphanumeric characters</h3>

{:.usa-content-list }
Input mask examples include an alphanumeric version which can be customized to meet your needs. Similar to the `pattern` attribute, include a number sign `9` for each number and an `A` for each required letter. We recommend changing inputmode to `text` so the full keyboard is available to your user.

{:.usa-content-list }
If your input mask calls for a pattern such as _1EG4-TE5-MK73_, you would implement that by adding the following attributes and character formatting to your input element:

{:.usa-content-list }
```
forceupper-"true"
inputmode="text"
mask="9AA9-AA9-AA99"
pattern="\d\w\w\d-\w\w\d-\w\w\d\d"
placeholder="____-___-____"
```

{:.usa-content-list }
<h3>Additional parameters</h3>

{:.usa-content-list }
Additional parameters can be used to force uppercase or lowercase characters. Add `forceupper` or `forcelower` to the `input` element and set either of them to true to force this behavior.

{:.usa-content-list }
<h3>Error handling</h3>

{:.usa-content-list }
The input mask utilizes screen reader friendly logic to gently notify a user if the character they typed is incorrect. The Preview section above illustrates this.

{:.usa-content-list }
<h3>Available format characters</h3>

{:.usa-content-list }
Here is a complete list of format characters that can be used in your implementation of input mask:

{:.usa-content-list }
| Character     | Name              |
|---------------|-------------------|
| _             | underscore        |
| -             | hyphen            |
| (             | parenthesis left  |
| )             | parenthesis right |
| [             | bracket left      |
| ]             | bracket right     |
| :             | colon             |
| .             | period            |
| ,             | comma             |
| $             | dollar            |
| %             | percent           |
| @             | at sign           |
| *             | asterisk          |
| /             | forward slash     |
|               | space             |
