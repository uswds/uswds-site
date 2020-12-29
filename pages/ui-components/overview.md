---
permalink: /components/overview/
layout: styleguide
title: Components overview
category: Components
lead: USWDS components are designed to set a new bar for simplicity and consistency across government services.
type: docs
redirect_from:
  - /components/
---

**Getting started.** For getting up and running with USWDS, head over to our [Getting started]({{ site.baseurl }}/documentation/) page for more information.

**Importing only the components your project needs.** See [Component packages]({{ site.baseurl }}/components/packages/)

## USWDS components

<div role="region" aria-atomic="true">
  <label for="icon-filter">Type to filter components</label>
  <input class="usa-input" id="icon-filter" class="usa-input" type="text" onkeyup="filter(this)"/>
  <p class="text-base margin-top-1" aria-live="polite"><span id="component-count">{{ site.components.size }} components</span></p>
</div>

<div class="usa-card-group flex-row margin-top-4">
{% for component in site.components %}
  <li
    class="usa-card site-component-card grid-col-6 tablet:grid-col-4 margin-bottom-2"
    role="region"
    aria-atomic="true"
    data-meta="{{ component.title }} {{ component.meta }}">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h2 class="usa-card__heading font-lang-lg"><a href="{{ component.url }}">{{ component.title }}</a></h2>
      </header>
      <div class="usa-card__body">
        {{ component.lead | markdownify }}
      </div>
    </div>
  </li>
{% endfor %}

<script>
function filter(e){
    search = e.value.toLowerCase();
    document.querySelectorAll('.site-component-card').forEach(function(row){
        text = row.getAttribute("data-meta").toLowerCase();
        if(text.match(search)){
            row.classList.remove("display-none");
        } else {
            row.classList.add("display-none");
        }
    });
    componentCount = document.querySelectorAll('.site-component-card:not(.display-none)').length;
    var word = (componentCount === 1) ? "component" : "components";
    document.getElementById("component-count").innerHTML = `${componentCount} ${word}`
}
</script>