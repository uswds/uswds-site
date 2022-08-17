---
layout: together-content
title: Findings
nav_title: Findings
description:
meta:
  og:image: /img/next/og-next-report.png

permalink: /together/findings/
slug: findings
subhead: Creating more equitable and inclusive experiences is at the forefront for many of our digital teams
help_detail: Successfully provide profile information
main_graphic: /img/together/together-info.svg

chapter: true

summary_sections:
  - heading: Current state
    description: |-
      Creating more equitable and inclusive experiences is at the forefront for many of our digital teams. Teams are thinking about DEIA, but are generally more confident, and further along in implementing accessibility  —  the “A”  —  than in incorporating diversity, equity, and inclusion  —  the “DEI”  —  into their work. While some teams are actively looking for ways to incorporate inclusivity into their designs, others are waiting for direction. 


  - heading: Finding the best solution in a complex environment
    description: |-
      Patterns are guidance and best practices to design effective user experiences. If components are the ingredients with which you create experiences, patterns are the recipe. The recipe suggests how best to combine the ingredients to create the optimal experience for everyone, while leaving room for flexibility and customization to specific user needs. 

      We, with help from digital leaders across the federal space, have developed patterns that provide guidance to create effective and inclusive experiences. We have considered each interaction from the perspective of DEIA  —  Diversity, Equity, Inclusion, and Accessibility. A caveat, though: The DEIA space is evolving very quickly. Language and norms are changing rapidly, and we expect that the patterns we develop today will continue to evolve to reflect the best practices in equitable, inclusive experiences.

  - heading: The process of being inclusive is as important as the design
    description: |-
     Designers all over the world are applying Inclusive Design Principles to their work, creating more equitable experiences that work for everyone. Every day, practitioners are learning more about how inclusivity and equity need to be reflected in their work. The Inclusive Design Pattern team was no different. 


  - heading: Personal data is the foundation of an individual’s sense of self
    description: |-
      In March 2022, the USWDS team brought together researchers, designers, and engineers to conduct research into inclusive design patterns.

      The research resulted in the release of 3 mega-patterns consisting of 17 new sub-patterns, along with new and updated components and page templates. More than 30 individuals across 20 teams shared their experiences, work, and perspectives to inform the design. We interviewed individuals in a variety of roles and across many different agencies, focusing on [High Impact Service Providers (HISPs)](https://www.performance.gov/cx/assets/files/HISP-listing-2021.pdf), since they have the most direct contact with the public.

  - heading: Complex forms offer unique challenges
    description: |-
      Transactional websites were a focus of the Inclusive Design Pattern team’s work. Much of the public’s interactions with the U.S. government is through forms – both digital and paper. Forms can be really challenging for users, especially during times of stress. We heard from HISPs that complex digital forms were a serious barrier for many users, and that crafting good form experiences was a real challenge for digital teams. 

  - heading: Using each individual’s language of choice makes a big difference
    description: |-
      Many programs are working on making their content available in multiple languages, but there are lots of questions about how best to do that. As more and more programs provide content in multiple languages, how best to make people aware of the content in other languages, and to make it clear and easy for them to find and use those languages, is a real challenge. 

  
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
          <div class="tablet:grid-offset-4 measure-4">
          {% include together/together-quote.html quote="[We’re] In the very early stage of thinking about equity and diversity in digital delivery." source="HISP Digital team member"%}
          <p>
            Some teams could point to specific examples about how they created a more inclusive experience. Some of the things we heard included:
          </p>
          <ul>
            <li>
              A program that reviews all their images to ensure a diverse representation of people.
            </li>
            <li>
              An agency that has added “non-binary” to questions asking users to self-identify biological sex.
            </li>
            <li>
              An agency that is waiting for a clear directive prior to making any changes to personal information collected.
            </li>
            <li>
              Several digital teams are actively working on adding multiple language content to their sites.
            </li>
            <li>
              And many teams that are thinking about how to structure forms to support successful completion, even during times of stress or trauma.
            </li>
          </ul>
          {% include together/together-quote.html quote="There is so much to learn that it is hard to be an expert." source="HISP design expert"%}
          <p>
            We learned that most teams feel they have a good handle on how to implement and test for accessibility conformance, but most would like more guidance (especially guidance supported by research) on creating inclusive experiences. 
          </p>
          {% include together/together-quote.html quote="[You] can’t make a mistake, because it is someone’s future." source="HISP Digital team member"%}
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
                {% include together/together-spot-item.html text="How teams are <strong>applying the lens of DEIA</strong> to their design work, and which patterns they’ve revised to be more equitable and inclusive." icon="search"%}
              </div>
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="What challenges agencies are facing with trying to <strong>adopt more inclusive design patterns.</strong>" icon="connect_without_contact"%}
              </div>
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="Which <strong>specific interactions are most challenging</strong> and could use attention from USWDS." icon="flag"%}
              </div>
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="Who has design <strong>patterns that USWDS can leverage</strong> to begin their work." icon="public"%}
              </div>
            </div>
            
            <p class="measure-4">
              We also conducted research outside of the federal space to understand best practices (and notable failures) in order to incorporate these into our patterns.
            </p>

            <h3>Our focus was to…</h3>
            <div class="grid-row tablet:margin-x-neg-205">
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="<strong>Benchmark patterns</strong> by identifying which organizations had patterns and how they approached them." icon="assessment"%}
              </div>
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="Analyze <strong>thought leadership around patterns</strong>, their place in the design system, and the content that should be in each pattern." icon="update"%}
              </div>
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="Take a <strong>deep dive into the topic of DEIA</strong>, especially as it relates to digital experiences." icon="people"%}
              </div>
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="Understand the <strong>best practices specific to each pattern</strong>, along with any federal requirements that need to guide each recommendation." icon="local_police"%}
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

