---
layout: together-content
title: Inclusive Design Patterns
nav_title: Summary
description: 
meta:
  og:image: /img/next/og-next-report.png

permalink: /together/
slug: together

subhead: USWDS patterns are practical, easy to implement guidelines and best practices for common user interactions.

chapter: true

summary_sections:
  - heading: Overview
    description: |-
      For the millions of people who interact with the federal government online each year the experience can be frustrating and alienating. Digital teams across the federal government are committed to delivering the very best user experiences they can, but sometimes lack easy access to the skills and guidance that would help them to do so. In the spirit of offering additional guidance and examples, the U.S. Web Design System is excited to provide a new library of design patterns focused on key digital interactions.

  - heading: What are patterns, anyway?
    description: |-
      Patterns are guidance and best practices to design effective user experiences. If components are the ingredients with which you create experiences, patterns are the recipe. The recipe suggests how best to combine the ingredients to create the optimal experience for everyone, while leaving room for flexibility and customization to specific user needs. 

      We, with help from digital leaders across the federal space, have developed patterns that provide guidance to create effective and inclusive experiences. We have considered each interaction from the perspective of DEIA  —  Diversity, Equity, Inclusion, and Accessibility. A caveat, though: The DEIA space is evolving very quickly. Language and norms are changing rapidly, and we expect that the patterns we develop today will continue to evolve to reflect the best practices in equitable, inclusive experiences.

  - heading: Digital interactions through the lens of DEIA
    description: |-
     Designers all over the world are applying Inclusive Design Principles to their work, creating more equitable experiences that work for everyone. Every day, practitioners are learning more about how inclusivity and equity need to be reflected in their work. The Inclusive Design Pattern team was no different. 


  - heading: Research
    description: |-
      In March 2022, the USWDS team brought together researchers, designers, and engineers to conduct research into inclusive design patterns.

      The research resulted in the release of 3 mega-patterns consisting of 17 new sub-patterns, along with new and updated components and page templates. More than 30 individuals across 20 teams shared their experiences, work, and perspectives to inform the design. We interviewed individuals in a variety of roles and across many different agencies, focusing on [High Impact Service Providers (HISPs)](https://www.performance.gov/cx/assets/files/HISP-listing-2021.pdf), since they have the most direct contact with the public.
  
---

{% for item in page.summary_sections %}
  <section id="section-{{ forloop.index }}" class="together-section together-section--{{ item.title | downcase | replace: " ", "-" | remove: "’" }} {{ item.section_class }}">
    <div class="grid-container">
      <div class="grid-row">
        <div class="grid-col-12 tablet:grid-col-3">
          <div class="together-section__header">
            <h2 class="together-section__heading">{{ item.heading }}</h2>
          </div>
        </div>
        <div class="grid-col-12 tablet:grid-col-8 tablet:margin-left-auto together-section-description">
          {{ item.description | markdownify }}
        </div>
      </div>
      <div class="grid-row">
        <div class="grid-col-12">
          {% if forloop.index == 1 %}
          <div class="tablet:grid-col-7 tablet:grid-offset-4 measure-4">
            <p>
              Like the USWDS design principles, the USWDS inclusive design pattern library supports and reflects the guidance codified in <a href="https://www.section508.gov/">Section 508</a>, the <a href="https://www.congress.gov/bill/115th-congress/house-bill/5759/text">21st Century IDEA</a> and in service of the Biden-Harris Administration’s President’s Management Agenda (PMA) <a href="https://www.performance.gov/pma/cx/">Priority 2 Executive Order</a> Delivering Excellent, Equitable, and Secure Federal Services, <a href="https://www.justice.gov/crt/executive-order-13166">Executive Order 13166</a> Improving Access to Services for Persons with Limited English Proficiency, and <a href="https://www.performance.gov/equity/">Executive Order 13985</a> Advancing an Equitable Government. In supporting these efforts, USWDS’s patterns are designed to remove barriers to transactions and interactions online, and, therefore, help the American public successfully access government services and programs. This is fundamental to our values.
            </p>
            <p>
              As we spoke with digital teams across the federal space we learned that everyone is wrestling with these issues: how to create effective, inclusive, equitable digital experiences. We were fortunate to learn from our colleagues that are already blazing a path towards inclusivity, and to have their perspectives inform our work. We are grateful for the large number of people who contributed their lived experience and perspectives.
            </p>
            <p>
              Sites that don’t actively seek to address usability, accessibility, and inclusion run the very real risk of alienating, frustrating, and marginalizing the very people we seek to support – with an end result of diminished outcomes for both the government and the public. Digital teams across the Federal Government are working hard to find these solutions themselves, which can be inefficient and duplicative. There is currently no good way to share and scale these independently developed solutions across government  —  and that’s where the USWDS can help. 
            </p>
          </div>
          {% elsif forloop.index == 2 %}            

          {% elsif forloop.index == 3 %}
            <h3>What does it mean to consider digital interactions through the lens of DEIA?</h3>

            <div class="grid-row tablet:margin-x-neg-205">
              <div class="grid-col-12 tablet:grid-col-6 tablet:padding-x-205">
                {% include together/together-finding-item.html  heading="Diversity" text="Diversity in design is about making sure all people are represented" icon="diversity" alt="people in circle"%}

                {% include together/together-finding-item.html heading="Equity" text="Equity in design addresses the unique barriers people experience, creating fairer experiences." icon="equity" alt="two groups of people on scale and they balance"%}

              </div>
              <div class="grid-col-12 tablet:grid-col-6 tablet:padding-x-205">
                {% include together/together-finding-item.html heading="Inclusivity" text="Inclusivity in design cultivates a sense of belonging and feeling valued." icon="inclusivity" alt="two people connected by a circle"%}

                {% include together/together-finding-item.html  heading="Accessibility" text="Accessibility ensures that all people can understand and enjoy digital experiences." icon="a11y" alt="man in a wheelchair"%}
              </div>
            </div>

            <h3>One of our interviewees said it well</h3>    

            <figure class="together-quote tablet:padding-left-10 tablet:margin-bottom-4">
              <blockquote class="together-quote__quote">
                “Consider the story that hasn’t been told.” 
              </blockquote>
              <figcaption>
                <span class="together-quote__source" aria-describedby="quote-desc">Source: DEIA and design expert *</span>
                <span class="together-quote__source-desc" id="quote-desc">* Shared during a interview</span>
              </figcaption>
            </figure>

            <p class="measure-4">
              Developing patterns through the lens of DEIA requires us to interrogate ourselves and our work at each step of the design process. We outlined a series of questions to consider:
            </p>
            
            <ul>
              <li>What are our biases and assumptions?</li>
              <li>Who is involved in our design process?</li>
              <li>Are we reaching a broad and diverse group of interviewees?</li>
              <li>Who benefits from our design? Who may be harmed? Who is left out?</li>
            </ul>

            <p class="measure-4">
              Developing patterns through the lens of DEIA also means that we need to be humble enough to acknowledge that we don’t know everything today, and as we grow and learn more the patterns will need to change. Today’s solution is not tomorrow’s.
            </p>
            
            {% elsif forloop.index == 4 %}
            <h3>Our primary focus was to learn…</h3>
            <div class="grid-row tablet:margin-x-neg-205">
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="How teams are applying the lens of DEIA to their design work, and which patterns they’ve revised to be more equitable and inclusive." icon="search"%}
              </div>
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="What challenges agencies are facing with trying to adopt more inclusive design patterns." icon="lightbulb"%}
              </div>
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="Which specific interactions are most challenging and could use attention from USWDS." icon="insights"%}
              </div>
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="Who has design patterns that USWDS can leverage to begin their work." icon="search"%}
              </div>
            </div>
            
            <p class="measure-4">
              We also conducted research outside of the federal space to understand best practices (and notable failures) in order to incorporate these into our patterns.
            </p>

            <h3>Our focus was to…</h3>
            <div class="grid-row tablet:margin-x-neg-205">
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="Benchmark patterns by identifying which organizations had patterns and how they approached them." icon="search"%}
              </div>
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="Analyze thought leadership around patterns, their place in the design system, and the content that should be in each pattern." icon="lightbulb"%}
              </div>
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="Take a deep dive into the topic of DEIA, especially as it relates to digital experiences." icon="insights"%}
              </div>
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="Understand the best practices specific to each pattern, along with any federal requirements that need to guide each recommendation." icon="search"%}
              </div>
            </div>

            <p class="measure-4">
              Along the way we solicited feedback from a wide range of experts in the federal space, including digital teams, policymakers, and subject matter experts. Their input was integral to our work.
            </p>
          {% endif %}

        </div>
      </div>
    </div>
  </section>
{% endfor %}

