---
layout: together-content
title: Inclusive Design Patterns
nav_title: Profile
description:
meta:
  og:image: /img/next/og-next-report.png
permalink: /together/profile
slug: profile
subhead: Create a User Profile
help_detail: Successfully provide profile information
chapter: true

section_one:
  - main_heading: Core to a person’s identity
  - heading: Enter their name
    description: Names are wonderfully diverse, and may include special characters, be very long or short (impacting character requirements), or have capitalization requirements that are often ignored. People may have multi-word last names or a single given name.

  - heading: Select their race or ethnicity
    description: Many folks are multiracial or may not know their background. They may identify as one thing but genetics indicate another. Additionally, there needs to be an attempt at sensitively capturing the nuances of ethnicity and/or race.

  - heading: Select their gender or sex
    description: |-
    Sex and gender identity are central to folks’ sense of self. Considerations: LGBTQ+; A. Hernandez's work; VA's approach; OMB's requirements. There may also be safety issues with this disclosure that need to be considered. Need to evaluate whether the question is actually necessary information to capture.

  - heading: Our future vision
    description: Gender expression does not equal gender identity. Asking for, and correctly using someone’s preferred pronouns is one of the most basic ways to respect someone’s gender identify.
---

<section class="text-center margin-y-6">
  <div class="border-bottom-1px border-top-0 border-dashed">
    <h2>
      Help users to...<span class="text-base">{{ page.help_detail }}</span>
    </h2>
  </div>

  <p class="font-sans-2xl text-bold">Why this matters?</p>
  <img class="width-desktop" src="../img/together/together-logo.svg">
</section>

{% for item in page.section_one %}

  <section id="section-{{ forloop.index }}" class="next-section next-section--{{ item.title | downcase | replace: " ", "-" | remove: "’" }} {{ item.section_class }}">
      {% if forloop.index ==  1 %}
      <h2 class="text-center font-sans-2xl text-bg-base-darkest">{{item.main_heading}}</h2>
      <div class="display-flex flex-row flex-justify-center">
          <img class="width-9" src="../img/together/gender-equality.svg">
      </div>  
      {% endif %}
    <div class="grid-container">
      <div class="grid-row">
        <div class="tablet:grid-col-6">
          <div class="next-section__header">
            <h3 class="next-section__heading">
            {{ item.heading }}
            </h3>
            <p>{{ item.description | markdownify }}</p>
          </div>
      </div>  
      </div>
    </div>
  </section>
{% endfor %}
