---
permalink: /documentation/settings/
layout: styleguide
title: Theme settings variables
category: Documentation
lead: Theme settings intro TK
---

{% assign settings = site.data.variables %}

{%- for section in settings -%}
  <h2>{{ section.name }}</h2>
  {% include settings-table.html
    settings=section.contents
  %}
{%- endfor -%}
