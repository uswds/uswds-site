- **Add component classes.** The structure should include a base element with the class `usa-input-mask`. Inside of that base element, there should be an input element with the class `usa-input-mask__field` and a message element (span or div) with the class `usa-input-mask__message`.

- **Customize the pattern.** The examples in the [component preview section]({{ site.baseurl }}/components/input-mask/#input-mask-preview-content) show common input mask patterns, but you can adapt the code to meet the needs of your project. In order to extend the functionality of the input mask, you must include a `placeholder` attribute as the visible input mask, using the underscore `_` to represent a character the user should enter. You may use punctuation literals like `[space]`, `-`, `/`, or `(` to help format your mask, but these literals will not be included in the final submitted value. A full list of formatting characters can be found in the [Available format characters table]({{ site.baseurl }}/components/input-mask/#available-format-characters).

{:.usa-content-list }
- **Properties.** The following properties modify component functionality.
{% include settings-table-flex.html
  content=page.implementation.props
  cols="flex-1, flex-1, flex-2"
  section="component properties"
%}

- **The input mask and alphanumeric characters.** Input mask examples include an alphanumeric version which can be customized to meet your needs. Include the number `9` for every number and a capitalized letter `A` for every required letter. We recommend changing `inputmode` to `text` so the full keyboard is available to your user. If your input mask calls for a complicated pattern like _1EG4-TE5-MK73_, set the `mask` attribute to `9AA9-AA9-AA99`.

- **Error handling.** The input mask utilizes screen reader-friendly logic to gently notify a user if the character they typed is incorrect. The [component preview section]({{ site.baseurl }}/components/input-mask/#input-mask-preview-content) above illustrates this.

### Available format characters
The following format characters can be used in your implementation of input mask:
{% include settings-table-flex.html
  content=page.implementation.formatCharacters
  cols="flex-1, flex-1, flex-2"
  section="component properties"
%}
