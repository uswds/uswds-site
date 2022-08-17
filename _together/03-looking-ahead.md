---
layout: together-content
title: What’s next
nav_title: What’s next
description: 
meta:
  og:image: /img/next/og-next-report.png
permalink: /together/looking-ahead/
slug: whats-next
subhead: Right now we are releasing 17 patterns across three areas
chapter: true

summary_sections:
  - heading: Looking ahead
    description: |-
      Right now we are releasing 17 patterns across these three areas  —  personal information, complex forms, and choosing a preferred language. Some of the patterns are fairly simple  —   like how to help a user successfully provide an email address. Some are more complex, such as how to help a user provide their race and ethnicity. Each has information on when it is appropriate to use it, best practices, usability and accessibility considerations, as well as research links and a changelog. 
  
---

{% for item in page.summary_sections %}
  <section id="section-{{ forloop.index }}" class="together-section together-section--{{ item.title | downcase | replace: " ", "-" | remove: "’" }} {{ item.section_class }}">
    <div class="grid-container">
      <div class="grid-row">
        <div class="grid-col-12 tablet:grid-col-12">
          <div class="together-section__header">
            <h2 class="together-section__heading">{{ item.heading }}</h2>
          </div>
        </div>
        <div class="grid-col-12 tablet:grid-col-10 tablet:margin-left-auto together-section-description">
          {{ item.description | markdownify }}
        </div>
      </div>
      <div class="grid-row">
        <div class="grid-col-12">
          {% if forloop.index == 1 %}
          <div class="tablet:grid-offset-2 measure-4">
            <p>
              Most also have a pattern preview and associated code. They use USWDS components and are grounded in the USWDS design principles. These should be viewed as a starting point, and an additional layer of considerations for the digital products you are designing, building, and supporting. 
            </p>
            <p>
              We are also developing <strong>some additional components</strong> to support these patterns, including a language selector component, in-page navigation, and input masking. In addition, this work will result in refactoring a few components and templates to bring them in line with pattern recommendations.
            </p>
            <p>
              As we move forward, the pattern library will grow as high-impact interactions are identified and explored. We also expect to revise these initial patterns as the landscape around DEIA evolves.
            </p>
            <p>
              This work would not have been possible without the thoughtful, passionate, and generous information sharing of our research participants. <strong>Thank you to everyone who participated</strong> in the interviews, provided samples, and offered their lived experience and feedback. We encourage you to be a part of the evolution of the design pattern library by contributing your thoughts and suggestions as we move forward. 
            </p>
          </div>
          {% endif %}
        </div>
      </div>
    </div>
  </section>
{% endfor %}

