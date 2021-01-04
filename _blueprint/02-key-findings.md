---
title: Key findings
section_class: blueprint-section--dark
findings:
- title: Understand the value and benefits
  text: Agencies need to be able to quickly discern the design system’s benefits and how it aligns with their goals for delivering better digital services.
  img: plus
- title: Know how to get started
  text: No matter where an agency starts from, it needs to be clear and easy for them to figure out their first steps and how to create a sustainable path forward in the long-run.
  img: arrow
- title: Find the right team and resources
  text: Agencies have several options to assemble a cross-functional team to implement the design system and they're looking for more support in identifying needed skills and assembling the right people. 
  img: check
- title: Feel engaged as a part of the comunity
  text: It’s a collaborative process to build a design system, so it’s essential for agencies to feel like they have access to a support network and a sense of ownership to contribute back to it. 
  img: triangles
- title: Be able to iteratively improve digital services
  text: Agency teams want reassurance that the design system and related support will continue to be there long into the future. 
  img: steps
---

<div class="grid-row">
<div class="grid-col-12" markdown="1">
## {{ page.title }}

<div class="usa-prose" markdown="1">

{:.measure-6}
Though agencies start with different goals and capabilities, we discovered they follow a common journey with similar needs when it comes to adopting and using the design system. **What do agencies need to successfully implement and use the U.S. Web Design System?**

</div>

<div>
  <ul class="blueprint-findings__list">
    {% for finding in page.findings %}
      <li class="blueprint-findings__item grid-row">
        <div class="grid-col-12 tablet:grid-col-3">
          <img class="blueprint-findings__img" src="{{ site.baseurl }}/img/blueprint/{{ finding.img }}.svg" alt="" role="presentation">
        </div>
        <div class="blueprint-findings__body usa-prose grid-col-12 tablet:grid-col-9">
          <h3 class="blueprint-findings__heading">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}. {{ finding.title }}</h3>
          {{ finding.text | markdownify}}
        </div>
      </li>
    {% endfor %}
  </ul>
</div>

</div>
</div>