- **Properties.** The following properties modify component functionality. These properties can be set or adjusted at any time before or after initialization in order to have an effect.
{% include settings-table-flex.html
  content=page.implementation.props
  cols="flex-1, flex-1, flex-2"
  section="component properties"
%}

- **Initialization properties.** The following properties update the component during initialization. These properties must be set before the component is initialized in order to have an effect.
{% include settings-table-flex.html
  content=page.implementation.initProps
  cols="flex-1, flex-1, flex-2"
  section="initialization properties"
%}

- **Procedures.** The following static procedures update the component after initialization. These are in addition to the primary methods referenced in the [JS customization documentation]({{ site.baseurl }}/documentation/developers/#js-customization).
{% include settings-table-flex.html
  content=page.implementation.procedures
  cols="flex-1, flex-1, flex-2"
  section="additional component procedures"
%}