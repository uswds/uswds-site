---
layout: together-content
title: Inclusive Design Patterns
nav_title: Summary
meta:
  og:image: /img/next/og-next-report.png

permalink: /together/
slug: together
subhead: Patterns are practical, easy to implement guidelines around common user interactions. USWDS pattern guidance is designed to reduce barriers to participation through every interaction.
chapter: true

summary_sections:
  - heading: Overview
    description: |-
      For the millions of people who interact with the federal government online each year the experience can be frustrating and alienating. Digital teams across the federal government are committed to delivering the very best user experiences they can, but sometimes lack easy access to the skills and guidance that would help them to do so. In the spirit of offering additional guidance and examples, the U.S. Web Design System is excited to provide a new library of design patterns focused on key digital interactions.

  - heading: What are patterns, anyway?
    description: |-
      Patterns are guidance and best practices to design effective user experiences. If components are the ingredients with which you create experiences, patterns are the recipes. The recipe suggests how best to combine the ingredients to create the optimal experience for everyone, while leaving room for flexibility and customization to specific audience needs. 

  - heading: Digital interactions through the lens of DEIA
    description: |-
     Designers all over the world are applying [inclusive design principles](https://designsystem.digital.gov/patterns/) to their work, creating more equitable experiences that work for everyone. Every day, practitioners are learning more about how inclusivity and equity need to be reflected in their work. Our team worked hard to put diversity, equity, and inclusivity at the center of what we did every day. 


  - heading: Research
    description: |-
      In March 2022, the USWDS team brought together researchers, designers, and engineers to conduct research into inclusive design patterns.
  
---
<style>
  .bg-indigo-cool-70 .footnote {
    color: white;
  }
   .bg-indigo-cool-70 .usa-link:visited, .bg-indigo-cool-70 a:visited {
    color: white;
}
</style>

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
              USWDS's Inclusive Design Patterns project was developed in support of <a href="https://www.section508.gov/">Section 508</a>, the <a href="https://www.congress.gov/bill/115th-congress/house-bill/5759/text">21st Century Integrated Digital Experience Act</a> (21st Century IDEA),  the Biden-Harris Administration’s President’s Management Agenda (PMA) <a href="https://www.performance.gov/pma/cx/">Priority 2 Executive Order</a> Delivering Excellent, Equitable, and Secure Federal Services, <a href="https://www.justice.gov/crt/executive-order-13166">Executive Order 13166</a> Improving Access to Services for Persons with Limited English Proficiency, <a href="https://www.whitehouse.gov/briefing-room/presidential-actions/2021/12/13/executive-order-on-transforming-federal-customer-experience-and-service-delivery-to-rebuild-trust-in-government/">Executive Order 14058</a> Transforming Federal Customer Experience and Service Delivery to Rebuild Trust in Government, and <a href="https://www.performance.gov/equity/">Executive Order 13985</a> Advancing an Equitable Government. In supporting these efforts, USWDS’s patterns are designed to remove barriers to transactions and interactions online, helping the American public successfully access government services and programs. This is fundamental to the <a href="https://designsystem.digital.gov/design-principles/">USWDS Design Priciples</a>.
            </p>
            <p>
              As we spoke with digital teams across the federal space we learned that everyone is wrestling with these issues: how to create effective, inclusive, equitable digital experiences. We were fortunate to learn from our colleagues that are already blazing a path towards inclusivity, and to have their perspectives inform our work. We are grateful for the large number of people who contributed their lived experience and perspectives.
            </p>
            <p>
              Sites that don’t actively seek to address usability, accessibility, and inclusion run the very real risk of alienating, frustrating, and marginalizing the people we seek to support – resulting in diminished outcomes for both the government and the public. Digital teams across the federal government are working hard to find these solutions themselves. There is currently no good way to share and scale these independently developed solutions across government — and that’s where USWDS can help. 
            </p>
          </div>
          {% elsif forloop.index == 2 %}

<div class="tablet:grid-col-7 tablet:grid-offset-4 measure-4">

With help from digital leaders across the federal space, we've developed patterns that provide guidance to create effective and inclusive experiences. We have considered each interaction from the perspective of Diversity, Equity, Inclusion, and Accessibility — or DEIA. A caveat, though: The DEIA space is evolving very quickly. Language and norms are changing rapidly, and we expect that the patterns we develop today will continue to evolve to reflect the best practices in equitable, inclusive experiences.

</div>

         {% include together/together-color-hr.html %}
          <section class="together-section bg-indigo-cool-70 padding-y-6 padding-x-1 tablet:padding-x-0 text-white">
            <div class="tablet:grid-offset-2">
              <h3 class="text-indigo-10">The word &quot;pattern&quot;</h3>
              <p class="text-white measure-4">
                The word <em>Pattern</em> — in this usage — was coined by the architect Christopher Alexander in the 1970s to describe patterns of behavior and approach: "a problem which occurs over and over again in our environment, and then [...] the core of the solution to that problem [described] in such a way that you can use this solution a million times over, without ever doing it the same way twice.". For instance, what are the kinds of things that people do again and again in their homes (or <em>expect</em> again and again <em>from</em> their homes) and how might homes be built to support these needs? For Alexander, these needs go beyond the prosaic needs of shelter and sanitation to include psychological, physiological, and emotional needs. What can a home do to make you <em>feel at home?</em> 
              </p>
              <p class="text-white measure-4" markdown="1">
                In an important way, Alexander reintroduced human-centered design into the design practice of architecture, and the concepts he and his peers developed are just as relevant and practical to any designed experience.[^1]
              </p>
            </div>
          </section>
          {% include together/together-color-hr.html %}

          {% elsif forloop.index == 3 %}
          <div class="tablet:grid-offset-4">
            <h3>One of our interviewees said it well</h3>    

            <figure class="together-quote tablet:padding-left-10 tablet:margin-bottom-4">
              <blockquote class="together-quote__quote">
                “Consider the story that hasn’t been told.” 
              </blockquote>
              <figcaption>
                <span class="together-quote__source" aria-describedby="quote-desc">— DEIA and design expert</span>
              </figcaption>
            </figure>
            
            <div class="grid-row tablet:margin-x-neg-205">
              <div class="tablet:grid-col-6 tablet:padding-x-205">
                {% include together/together-finding-item.html  heading="Diversity" text="Diversity in design is about making sure all people are represented." icon="diversity" alt="people in circle"%}

                {% include together/together-finding-item.html heading="Equity" text="Equity in design addresses the unique barriers people experience, creating fairer experiences." icon="equity" alt="two groups of people on scale and they balance"%}
              </div>
              <div class="tablet:grid-col-6 tablet:padding-x-205">
                {% include together/together-finding-item.html heading="Inclusivity" text="Inclusivity in design cultivates a sense of belonging and feeling valued." icon="inclusivity" alt="two people connected by a circle"%}

                {% include together/together-finding-item.html  heading="Accessibility" text="Accessibility in design ensures that all people can understand and enjoy digital experiences." icon="a11y" alt="man in a wheelchair"%}
              </div>
            </div>            

            <p class="measure-4">
              Developing patterns through the lens of inclusivity requires us to interrogate ourselves and our work at each step of the design process. We outlined a series of questions to consider:
            </p>
            
            <ul>
              <li>What are our biases and assumptions?</li>
              <li>Who is involved in our design process?</li>
              <li>Are we reaching a broad and diverse group of participants?</li>
              <li>Who benefits from our design? Who may be harmed? Who is left out?</li>
            </ul>

            <p class="measure-4" markdown="1">
              Developing patterns through the lens of inclusivity also means that we need to be humble enough to acknowledge that we don’t know everything today. As we grow and learn the patterns will need to change. Today’s solution is not tomorrow’s[^3].
            </p>
            
          </div>
            {% elsif forloop.index == 4 %}
            <div class="tablet:grid-offset-4">
            <h3>Our primary focus was to learn:</h3>
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
                {% include together/together-spot-item.html text="Where we can begin our work from <strong>existing design patterns</strong>." icon="public"%}
              </div>
            </div>
            
            <p class="measure-4" markdown="1">
              The research resulted in the release of 3 pattern families consisting of 17 individual patterns, along with new and updated components and page templates. More than 30 individuals across 20 teams shared their experiences, work, and perspectives to inform the design[^2]. We interviewed individuals in a variety of roles and across many different agencies, focusing on <a href="https://www.performance.gov/cx/assets/files/HISP-listing-2021.pdf">High Impact Service Providers (HISPs)</a>.
            </p>

            <p class="measure-4">
              We also conducted research outside of the federal space to understand best practices (and notable failures) in order to incorporate these learnings into our patterns.
            </p>

            <h3>Our objective was to:</h3>
            <div class="grid-row tablet:margin-x-neg-205">
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="<strong>Benchmark patterns</strong> by identifying which organizations had patterns and how they approached them." icon="assessment"%}
              </div>
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="Analyze <strong>thought leadership around patterns</strong>, their place in the design system, and the content that supports each pattern." icon="update"%}
              </div>
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="Take a <strong>deep dive into the topics of inclusivity and equity</strong>, especially as these topics relate to digital experiences." icon="people"%}
              </div>
              <div class="tablet:grid-col-3 tablet:padding-x-205">
                {% include together/together-spot-item.html text="Understand the <strong>best practices specific to each pattern</strong>, along with any federal requirements that need to guide each recommendation." icon="local_police"%}
              </div>
            </div>

            <p class="measure-4">
              Along the way we solicited feedback from a wide range of experts in the federal space, including digital teams, policymakers, and subject matter experts. Their input was integral to our work.
            </p>        
          </div>
          {% endif %}

        </div>
      </div>
    </div>
  </section>
{% endfor %}

<section class="next-section next-section--citations">
  <div class="grid-container">
    <div class="grid-row">
      <div class="tablet:grid-col-8 tablet:margin-x-auto desktop:margin-x-0" markdown="1">

#### Citations

* footnotes will be placed here. This line is necessary
{:footnotes}

[^1]: A pattern language: Towns, buildings, construction. (1977) Retrieved on August 25, 2022, from <https://www.amazon.com/Pattern-Language-Buildings-Construction-Environmental/dp/0195019199>

[^2]: VA.gov design system patterns. (May 26, 2022) Retrieved on August 19, 2022, from <https://design.va.gov/patterns/>

[^3]: Embedding equity in civic design to transform customer experience. (July 13, 2022) Retrieved on August 19, 2022, from <https://digital.gov/resources/embedding-equity-in-civic-design-to-transform-customer-experience/>

</div>
    </div>
  </div>
</section>