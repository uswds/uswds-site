- **Add the correct component class.** To initiate and style the component, add the `usa-input-mask` class to your `input` element.
- **Set the mask attribute.** Set the mask validation pattern by adding the `mask` attribute to the `input` element. Customize its value to fit the required pattern by adding a number `9` to represent any number, a letter `A` to represent any letter, and any available format character. For example, an input that requires three numbers followed by four letters with a hyphen separator would have a  `mask` value that looks like `999-AAAA`.
- **Customize the placeholder attribute.** Every masked input must include a `placeholder` attribute to set the visible input placeholder. Customize its value by using the underscore character (`_`) to represent a character the user is expected to enter along with any available format character.
- **Add format characters where needed.**  You may use punctuation literals like `[space]`, `-`, `/`, or `(` to help format your `mask` and `placeholder`, but these literals will not be included in the final submitted value. A full list of formatting characters can be found in the [Available format characters table]({{ site.baseurl }}/components/input-mask/#available-format-characters).
- **If needed, customize the invalid character message.** The input mask utilizes screen reader-friendly logic to gently notify a user if the character they typed is incorrect. You can customize the invalid character text with the `data-invalid-alpha-text` and `data-invalid-numeric-text` attributes, as explained in the [Attributes table]({{ site.baseurl }}/components/input-mask/#available-attributes).
- **If desired, force lowercase or uppercase letters.** Add the `forceupper` or `forcelower` attribute if you need to force casing on alphabetic inputs.

### Available attributes

Add the following attributes to the `input` element to modify component functionality:
{% include settings-table-flex.html
  content=page.implementation.props
  cols="flex-3, flex-1, flex-5"
  section="component properties"
%}
### Available format characters

Use any of the following format characters in your mask:
{% include settings-table-flex.html
  content=page.implementation.formatCharacters
  cols="flex-2, flex-2, flex-5"
  section="component properties"
%}
