{% assign data = site.data.patterns.race %}

<h4 class="site-preview-heading">Race and Ethnicity</h4>
<form class="usa-form usa-form--large">
  <fieldset name="race-and-ethnicity" class="usa-fieldset" aria-multiselectable="true">
    <legend class="usa-legend">
      <label>
        <span class="text-bold">{{ data.legend }} </span><br/>
        <span class="text-italic">{{ data.hint }} {{ data.hint_additional }}</span>
      </label>
    </legend>

    {% for category in data.categories %}
      <fieldset class="usa-fieldset margin-top-1" name="{{ category.name | slugify }}-alt">
        <legend>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" type="checkbox" id="{{ category.name | slugify }}-checkbox-alt" name="{{ category.name | slugify }}-checkbox-alt">
            <label class="usa-checkbox__label text-bold" for="{{ category.name | slugify }}-checkbox-alt">{{ category.name }}</label>
          </div>
        </legend>
        <div class="padding-left-4">
          {% if category.types %}
          <fieldset class="usa-fieldset margin-top-05">
            <legend class="usa-legend font-lang-2xs text-italic">Provide details below</legend>
            <div class="margin-bottom-1">
              {% for type in category.types %}
                <div class="usa-checkbox">
                  <input class="usa-checkbox__input" type="checkbox" id="{{ type }}-checkbox-alt" name="{{ type }}-checkbox-alt">
                  <label class="usa-checkbox__label font-lang-xs" for="{{ type }}-checkbox-alt">
                    {{ type }}
                  </label>
                </div>
              {% endfor %}
            </div>
          </fieldset>
          {% endif %}
          <label
            class="font-lang-2xs text-italic"
            for="{{ category.name | slugify }}-input-alt">
            Enter, for example,
              {% for type in category.types_additional %}
                {{ type }},
              {% endfor %}
            etc.
          </label>
          <input
            class="usa-input"
            id="{{ category.name | slugify }}-input-alt"
            name="{{ category.name | slugify }}-input-alt">
        </div>
      </fieldset>
    {% endfor %}
  </fieldset>
</form>