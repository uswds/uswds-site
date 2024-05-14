{% assign data = site.data.patterns.race %}

<h4 class="site-preview-heading">Race and Ethnicity</h4>
<form class="usa-form usa-form--large">
  <fieldset name="race-and-ethnicity" class="usa-fieldset" aria-multiselectable="true">
    <legend class="usa-legend">
      <label>
        <span class="text-bold">{{ data.legend }}</span> <br/>
        <span class="text-italic">{{ data.hint }}</span>
      </label>
    </legend>

    {% for category in data.categories %}
      <div class="usa-checkbox">
        <input class="usa-checkbox__input" type="checkbox" id="{{ category.name | slugify }}-checkbox-3" name="{{ category.name | slugify }}-checkbox-3">
        <label class="usa-checkbox__label" for="{{ category.name | slugify }}-checkbox-3">{{ category.name }}</label>
      </div>
    {% endfor %}
  </fieldset>
</form>
