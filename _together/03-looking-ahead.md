---
layout: together-content
title: What’s next
nav_title: What’s next
meta:
  og:image: /img/next/og-next-report.png
permalink: /together/looking-ahead/
slug: whats-next
subhead: Toward pattern-driven development for the design system.

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
    <div class="grid-container">
      <div class="grid-row">
        <div class="grid-col-12">
          <div class="together-section__header">
            <h2 class="together-section__heading">{{ item.heading }}</h2>
          </div>
        </div>
        <div class="tablet:grid-col-10 tablet:margin-left-auto together-section-description">
          {{ item.description | markdownify }}
        </div>
      </div>
      <div class="grid-row">
        <div class="grid-col-12">
{% if forloop.index == 1 %}
          <div class="tablet:grid-offset-2 measure-4">
            <p>
              Most also have a pattern preview and associated code. These previews use USWDS components and are grounded in the <a href="https://designsystem.digital.gov/design-principles/">USWDS design principles</a>. They should be viewed as a starting point for the digital products you are designing, building, and supporting. 
            </p>
            <p>
              We developed <strong>some additional components</strong> to support these patterns, including a language selector component, in-page navigation, and input masking. We've also refactored a few components and templates, such as address form and name form, to bring them in line with pattern recommendations.
            </p>
            <p>
              As we move forward, we will identify and expore high-impact interactions and add to the pattern library. We also expect to continually revise our patterns — just as we do our components — as the landscape around DEIA and best practices evolves.
            </p>
          </div>
{% elsif forloop.index == 2 %}
          <div class="margin-top-6">
            {% include together/together-color-hr.html %}
            <section class="together-section bg-indigo-cool-70 padding-y-6 padding-x-2 desktop:padding-x-0 text-white">
              <div class="desktop:grid-offset-2">
                <h3 class="text-indigo-10 margin-top-3">Pattern-driven development</h3>
                <p class="text-white measure-4">
                  As the design system matures, you will likely see patterns beginning to drive component and feature development. We will identify key interactions, document patterns, and develop components in support of these patterns. We see this as an important human-centered shift to how we’ll approach development, how we’ll choose components, and how we’ll approach modularity and interaction between components.</p>
              </div>
            </section>
          </div>
          {% include together/together-color-hr.html %}
{% endif %}
        </div>
      </div>
    </div>
  </section>
  
{% endfor %}