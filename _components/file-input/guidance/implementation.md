- **Initialization properties.**  JavaScript will create most elements for file input. To get a file input to initialize, add the class name `usa-file-input` to `<input type="file" />`.
- **Interaction.** When a user selects or drags documents to the file input, the file name and a thumbnail preview are listed.
- **Using the `accept` attribute.** You can allow certain files by placing an accept attribute on the `<input/>`. If a file type is not accepted, the file will not be attached and the file input will display a message. [Learn more about the accept attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) [mozilla.org].
- **Internet Explorer/Edge.** These browsers do not support dragging items to a file input. Instructions to drag files are removed for these browsers.
- **Customizing the component text.** Add the following data attributes to `usa-file-input` to customize the component text:
{% include settings-table-flex.html
  content=page.implementation.initProps
  section="component properties"
%}