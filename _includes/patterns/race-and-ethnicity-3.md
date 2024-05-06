{% assign data = site.data.patterns.race %}

<h4 class="site-preview-heading">Race and Ethnicity</h4>
<form class="usa-form usa-form--large">
  <fieldset name="race-and-ethnicity" class="usa-fieldset" aria-multiselectable="true">
    <legend class="usa-legend">
      <label>
        <strong>{{ data.legend }}</strong> <br/>
        <span class="text-italic">{{ data.hint }}</span>
      </label>
    </legend>

    {% for category in data.categories %}
      <fieldset class="usa-fieldset margin-top-1" name="{{ category.name | slugify }}">
        <legend>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" type="checkbox" id="{{ category.name | slugify }}-checkbox-3" name="{{ category.name | slugify }}-checkbox">
            <label class="usa-checkbox__label text-bold" for="{{ category.name | slugify }}-checkbox-3">{{ category.name }}</label>
          </div>
        </legend>
      </fieldset>
    {% endfor %}
  </fieldset>
</form>