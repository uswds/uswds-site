---
permalink: /components/overview/
layout: styleguide
title: Components
category: Components
lead: USWDS components are simple and consistent solutions to common user-interface needs.
type: docs
redirect_from:
  - /components/
  - /form-controls/
in_page_nav_headings: false
---

{% assign uswdsComponents = site.components | where: "parent", null | where: "component.status", "ready" %}

<div class="bg-base-lighter padding-2 radius-md">
  <h2 class="font-lang-lg margin-top-0 margin-bottom-0">Find a USWDS component</h2>
  <div role="region" aria-label="Component search" aria-atomic="true" class="margin-top-1">
    <label for="icon-filter">Filter by name and keyword</label>
    <input class="usa-input" id="icon-filter" class="usa-input" type="text" onkeyup="filter(this)"/>
    <p class="text-base-darker margin-top-1 margin-bottom-0" aria-live="polite"><span id="component-count"><strong>{{ uswdsComponents.size }}</strong> components found</span></p>
  </div>
</div>

See the [packages]({{ site.baseurl }}/components/packages/) section to learn how to import only the components your project needs.

<div class="usa-card-group flex-row margin-top-4">
{% for component in uswdsComponents %}
{% assign tags = component.tags | join: " " %}
  <li
    class="usa-card site-component-card grid-col-6 tablet:grid-col-4 margin-bottom-2"
    role="region"
    aria-atomic="true"
    aria-label="{{ component.title }}"
    data-meta="{{ component.title }} {{ tags }}">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg"><a href="{{ component.permalink | prepend: site.baseurl }}">{{ component.title }}</a></h3>
      </header>
      <div class="usa-card__body font-lang-sm">
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
    document.getElementById("component-count").innerHTML = `<strong>${componentCount}</strong> ${word} found`
}
</script>
