{% assign data = site.data.patterns.race %}

<form class="usa-form usa-form--large">
  <fieldset name="race-and-ethnicity" class="usa-fieldset" aria-multiselectable="true">
    <legend class="usa-legend">
        <span class="text-bold">{{ data.legend }}</span> <br/>
        <span class="text-italic">{{ data.hint }}</span>
        {% if include.variant == "input" %}
          <span class="text-italic">{{ data.hint_additional }}</span>
        {% endif %}
    </legend>