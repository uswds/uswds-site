{:.usa-content-list }
The examples in the Preview section above are common input masks, but you can adapt the code to meet the needs of your project. In order to extend the functionality of the input mask, you must include a `placeholder` attribute as the visible input mask, using the underscore `_` to represent a character the user should enter. You may use punctuation literals like `[space]`, `-`, `/`, or `(` to help format your mask, but these literals will not be included in the final submitted value. _See a complete list of format characters below_.

{:.usa-content-list }
- **Add component classes.** The structure should include a base element with the class `usa-input-mask`. Inside of that base element there should be an input element with the class `usa-input-mask__field` and a message element (span or div) with the class `usa-input-mask__message`.
- **Add a `mask` attribute to the input element.** The mask attribute is used to define the format of your mask. Use `9`s for numbers and `A`s for letters. For example, a typical SSN number format in the mask attribute should look like `999-99-9999`.
- **Add a `placeholder` attribute to the input element.** This indicates the mask format. Use underscores `_` for character input placeholders combined with any valid format characters (see below) to customize your input mask. e.g. A US telephone `placeholder` attribute may look like `(___) ___-____`
- **Add a `maxlength` attribute to the input element.** This will be used as the limit referenced in the message and for validation.
- **Set the attribute `type` to numeric if your mask is all numbers.** This will display the numeric keypad instead of the full keyboard.

{:.usa-content-list }
The following is an example of `input` element attributes for a Social Security Number mask:

{:.usa-content-list }
```
aria-describedby="ssn-hint ssn-hint-info"
class="usa-input usa-input-mask__field"
id="ssn"
inputmode="numeric"
mask="999-99-9999"
maxlength="11"
name="ssn"
placeholder="___-__-____"
type="text"
```

{:.usa-content-list }
<h3>The input mask and alphanumeric characters</h3>

{:.usa-content-list }
Input mask examples include an alphanumeric version which can be customized to meet your needs. Include the number `9` for every number and a capitalized letter `A` for every required letter. We recommend changing `inputmode` to `text` so the full keyboard is available to your user.

{:.usa-content-list }
If your input mask calls for a complicated pattern like _1EG4-TE5-MK73_, you could implement that by adding the following attributes and character formatting to your `input` element:

{:.usa-content-list }
```
aria-describedby="alphanumeric-hint alphanumeric-hint-info"
class="usa-input usa-input-mask__field"
forceupper="true"
id="alphanumeric"
mask="9AA9-AA9-AA99"
name="alphanumeric"
placeholder="____-___-____"
maxlength="13"
type="text"
```

{:.usa-content-list }
<h3>Additional parameters</h3>

{:.usa-content-list }
Additional parameters can be used to force uppercase or lowercase characters. Add `forceupper` or `forcelower` to the `input` element and set either of them to true to force this behavior.

{:.usa-content-list }
<h3>Error handling</h3>

{:.usa-content-list }
The input mask utilizes screen reader-friendly logic to gently notify a user if the character they typed is incorrect. The Preview section above illustrates this.

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
