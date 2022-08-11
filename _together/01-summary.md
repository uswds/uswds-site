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
      In September 2020, we brought together researchers, designers, engineers, and policymakers to conduct research across dozens of federal agencies to help support emergency response efforts related to the COVID-19 pandemic.

  - heading: Why is this important?
    title: Purpose
    description: |-
      Across the federal government, agencies are working to improve their everyday interactions with the public. How do we provide easy access to critical services? How do we deliver faster and more efficient touch points? How do we ensure transparency and build trust? The answer to these questions has increasingly become: deliver better digital services.

      One piece of the widespread federal effort is implementation of the design system, which provides principles, guidance, and code that makes it easier for the federal government to deliver mobile-friendly, accessible digital services.

      But we need more. There are still gaps in how the design system can better meet agency needs, so they in turn can better meet the needs of the public.

      Through this research, [we looked to agency teams to help us define what digital transformation looks like](./introduction), both in the near-term and in the future.

  - heading: What we learned
    title: Findings
    description: |-
      Though agencies start with different goals and capabilities, we discovered [they follow a common journey with similar needs](./findings) when it comes to successfully adopting, using, and maintaining the design system.

  - heading: Our future vision
    title: What’s next
    description: |-
      We’ve identified specific opportunity areas that will move us closer to a design system that meets the needs of teams across every agency — what we call our Near Star (short-term) and North Star (long-term) vision. Working toward these visions is our way of ensuring the design system continues to change over time and stays connected to the teams that are using it.

  - heading: What you can do
    title: Get involved
    description: |-
      Let’s transform the way we design and deliver digital government with and for the people.

      Many of the ideas in this report are big-picture thinking, requiring time, collaboration, and strategies to come to fruition. But right now, [you can begin by understanding the value and benefits of using the design system](./get-involved/) to deliver better digital services.

      Use the conversation starters throughout the report to prompt discussions with your managers and team members.

      Also, if you’re interested in exploring these ideas — or in learning more about the design system — [join our community](../about/community/) and get involved.

      The first workshop for federal employees will be in Spring 2021, and we hope to hold ad hoc workshops in the future as well. We also hold regular calls on the third Thursday of each month.

      We’ll provide regular updates on our progress in [monthly calls](https://digital.gov/events/), the [public Slack channel](../about/community/), and the [product roadmap](../about/product-roadmap/).

      <a href="https://touchpoints.app.cloud.gov/touchpoints/8338c61b/submit" class="usa-button usa-button--outline usa-button--next">Stay in touch</a>

---

{% for item in page.summary_sections %}
  <section id="section-{{ forloop.index }}" class="together-section together-section--{{ item.title | downcase | replace: " ", "-" | remove: "’" }} {{ item.section_class }}">
    <div class="grid-container">
      <div class="grid-row">
        <div class="grid-col-12 tablet:grid-col-3">
          <div class="together-section__header">
            {% unless item.hide_title %}<div class="together-section__subhead">{{ item.title }}</div>{% endunless %}
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
            <h3>Our primary focus was to…</h3>

            <div class="grid-row tablet:margin-x-neg-205">
              <div class="grid-col-12 tablet:grid-col-4 tablet:padding-x-205">
                {% include next/next-spot-item.html text="Understand how teams are using the U.S. Web Design System (USWDS) to build websites and digital services" icon="search"%}
              </div>
              <div class="grid-col-12 tablet:grid-col-4 tablet:padding-x-205">
                {% include next/next-spot-item.html text="Develop insights into improving federal digital services with and for the public" icon="lightbulb"%}
              </div>
              <div class="grid-col-12 tablet:grid-col-4 tablet:padding-x-205">
                {% include next/next-spot-item.html text="Identify strategies for advancing the design system through collaboration with agencies and other government customer experience initiatives" icon="insights"%}
              </div>
            </div>

          {% elsif forloop.index == 2 %}

            <figure class="next-quote">
              <svg class="usa-icon usa-icon--size-8 next-quote__icon" aria-hidden="true" focusable="false" role="img">
                <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#format_quote"></use>
              </svg>
              <blockquote class="next-quote__quote">
              The more we use the design system to standardize how we build digital experiences, the more we will improve how the federal web functions.
              </blockquote>
              <figcaption>
                <span class="next-quote__source" aria-describedby="quote-desc">Source: <br/>- Civic tech leader*</span>
                <span class="next-quote__source-desc" id="quote-desc">* Shared during a user interview</span>
              </figcaption>
            </figure>

          {% elsif forloop.index == 3 %}

            <h3>Agency teams want to…</h3>

            <div class="grid-row tablet:margin-x-neg-205">
              <div class="grid-col-12 tablet:grid-col-6 tablet:padding-x-205">
                {% include next/next-finding-item.html link="/next/findings/benefits/" heading="Understand the value and benefits" text="Agencies need to be able to quickly discern the design system’s benefits and how it aligns with their goals for delivering better digital services." icon="plus"%}

                {% include next/next-finding-item.html link="/next/findings/get-started/" heading="Know how to get started" text="No matter where an agency starts from, it needs to be clear and easy for them to figure out their first steps and how to create a sustainable path forward in the long-run." icon="arrow"%}

                {% include next/next-finding-item.html link="/next/findings/team/" heading="Find the right team and resources" text="Agencies have several options to assemble a cross-functional team to implement the design system and they’re looking for more support in identifying needed skills and assembling the right people." icon="check"%}

              </div>
              <div class="grid-col-12 tablet:grid-col-6 tablet:padding-x-205">
                {% include next/next-finding-item.html link="/next/findings/community/" heading="Feel engaged with the community" text="It’s a collaborative process to build a design system, so it’s essential for agencies to feel like they have access to a support network and a sense of ownership to contribute back to it." icon="triangles"%}

                {% include next/next-finding-item.html link="/next/findings/improve/" heading="Be able to iteratively improve digital services" text="Adopting a design system is an ongoing process of design, development, and making iterative improvements and upgrades over time, which requires continued resources and support." icon="steps"%}
              </div>
            </div>
            {% elsif forloop.index == 4 %}


            <h3>Our <a href="{{ site.baseurl }}/next/looking-ahead/">Near Star</a> vision:</h3>

            <p class="measure-3 next-lead">All agency teams have what they need to more easily adopt and effectively use the design system. To do that, we’ll focus on the following opportunity areas:</p>

            <div class="grid-row tablet:margin-x-neg-205">
              <div class="grid-col-12 tablet:grid-col-4 tablet:padding-x-205">
                {% include next/next-spot-item.html text="[Improve strategic communications](./looking-ahead/engagement/) with key audiences" icon="mail" %}
              </div>
              <div class="grid-col-12 tablet:grid-col-4 tablet:padding-x-205">
                {% include next/next-spot-item.html text="Provide more [robust guidance and support](./looking-ahead/guidance/) to get started with the design system" icon="directions" %}
              </div>
              <div class="grid-col-12 tablet:grid-col-4 tablet:padding-x-205">
                {% include next/next-spot-item.html text="Better [leverage related efforts within TTS](./looking-ahead/collaboration/) and the broader government digital services community" icon="groups" %}
              </div>
            </div>

            <p class="next-highlight-text measure-1"><strong>Accomplishing our Near Star vision will move us closer to the North Star we’re aiming for.</strong></p>

            <h3>Our <a href="{{ site.baseurl }}/next/looking-ahead/vision/">North Star</a> vision:</h3>

            <p class="measure-3 next-lead">Empowered digital agency teams share solutions and use effective human-centered design practices to create greater continuity, improved usability, and increased access for key digital services.</p>

            <h4>Conversation starters</h4>
            <div class="grid-row tablet:margin-x-neg-205">
              <div class="grid-col-12 tablet:grid-col-6 tablet:padding-x-205">
                {% include next/next-spot-item.html text="<strong>What if</strong> the federal government provided even more robust technology shared services to reduce the burden on individual agencies?" icon="forum" variant="next-spot-item--row" %}
              </div>
              <div class="grid-col-12 tablet:grid-col-6 tablet:padding-x-205">
                {% include next/next-spot-item.html text="<strong>What if</strong> key content and functionality of government websites was consolidated into fewer public services websites, like usa.gov and recreation.gov?" icon="forum" variant="next-spot-item--row" %}
              </div>
            </div>

          {% endif %}

        </div>
      </div>
    </div>
  </section>
{% endfor %}

