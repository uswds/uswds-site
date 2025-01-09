---
layout: together-content
title: What’s Next `|` Inclusive Design Patterns Research Report
nav_title: What’s next
# For open graph meta description
description: USWDS is excited to provide a new library of guidance and examples focused on key digital interactions — what we call design patterns — that foster effective, inclusive, and equitable digital experiences.
image: /img/together/og-together-report.png
permalink: /together/whats-next/
slug: whats-next
hero_title: What’s next
hero_subtitle: Toward pattern-driven development for the design system.
excerpt: ""

chapter: true

summary_sections:
  - heading: Looking ahead
    description: |-
      Right now we are releasing 17 patterns across these three areas — user profile, complex forms, and language selection. Some of the patterns are more straightforward — like how to help a user provide an email address. Some are more complex, such as how to help a user provide their race and ethnicity. Each pattern has information on when to use it, best practices, usability and accessibility considerations, as well as research references and a changelog. 

  - heading: Patterns in the design system
    description: |-
      So where do patterns fit within the design system? Consider a food metaphor. Patterns are the recipes that pull together components (ingredients), tokens (flavors and textures), and usability and accessibility guidance (food preparation techniques). Patterns provide the recipe — the blueprint — for creating an inclusive experience. You’ll still need to apply your deep knowledge of your users to make design choices that work for you, but the patterns summarize the considerations important to your choices. Templates are a specific application of the recipe.

  - heading: Thank you
    description: |-
      This work would not have been possible without the thoughtful, passionate, and generous information sharing of our research participants. **Thank you to everyone who participated** in the interviews, provided samples, and offered their lived experience and feedback. We encourage you to be a part of the evolution of our design pattern library by contributing your thoughts and suggestions as we move forward. 
      

---

{% for item in page.summary_sections %}
  <section id="section-{{ forloop.index }}" class="together-section together-section--{{ item.title | downcase | replace: " ", "-" | remove: "’" }} {{ item.section_class }}">
    <div class="grid-container padding-left-0">
      <div class="grid-row">
        <div class="tablet:grid-col-12 desktop:grid-col-3">
          <div class="together-section__header">
            <h2 class="together-section__heading">{{ item.heading }}</h2>
          </div>
        </div>
        <div class="desktop:grid-col-8 desktop:margin-left-auto together-section-description">
          {{ item.description | markdownify }}
{% if forloop.index == 1 %}
<div class="measure-4">
  <p>
    Most also have a pattern preview and associated code. These previews use USWDS components and are grounded in the <a href="{{ site.baseurl }}/design-principles/">USWDS design principles</a>. They should be viewed as a starting point for the digital products you are designing, building, and supporting. 
  </p>
  <p>
    We developed <strong>some additional components</strong> to support these <a href="{{ site.baseurl }}/patterns/">patterns</a>, including a <a href="{{ site.baseurl }}/components/language-selector/">language selector component</a>, <a href="{{ site.baseurl }}/components/in-page-navigation/">in-page navigation</a>, and <a href="{{ site.baseurl }}/components/input-mask/">input mask</a>. We've also refactored a few components and templates, such as <a href="{{ site.baseurl }}/templates/form-templates/address-form/">address form</a> and <a href="{{ site.baseurl }}/templates/form-templates/name-form/">name form</a>, to bring them in line with pattern recommendations.
  </p>
  <p>
    As we move forward, we will identify and explore high-impact interactions and add to the <a href="{{ site.baseurl }}/patterns/">pattern library</a>. We also expect to continually revise our patterns — just as we do our components — as the landscape around DEIA and best practices evolves.
  </p>
</div>
{% elsif forloop.index == 2 %}
<div class="margin-top-6">
  {% include together/together-color-hr.html %}
<section class="bg-indigo-cool-70 padding-2 desktop:padding-x-0 text-white">
  <div class="desktop:padding-x-10 tablet:padding-4">
      <h3 class="text-indigo-10 margin-top-3">Pattern-driven development</h3>
      <p class="text-white measure-4">
        As the design system matures, you will likely see patterns beginning to drive component and feature development. We will identify key interactions, document patterns, and develop components in support of these patterns. We see this as an important human-centered shift to how we’ll approach development, how we’ll choose components, how we’ll approach modularity and interaction between components, and how we'll measure and evaluate success and opportunities for improvement.</p>
    </div>
  </section>
{% include together/together-color-hr.html %}
</div>
{% endif %}

        </div> <!-- desktop:grid-col-8 -->
      </div> <!-- grid-row -->
    </div> <!-- grid-container -->
  </section>
{% endfor %}