---
layout: together-content
title: Get Involved
nav_title: Get Involved
description: 
meta:
  og:image: /img/next/og-next-report.png

permalink: /together/get-involved/
slug: get-involved

subhead: We all need to advocate for inclusive experiences

chapter: true

summary_sections:
  - heading: We need your help
    description: |-
      As people working in the federal space we all need to advocate for inclusive experiences. We’re all learning together, but some specific actions you can take today include:
  
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
            <ul>
              <li>
                Include team members with diverse experiences and perspectives.
              </li>
              <li>
                Lead with community voices and needs  —  emphasize people over process.
              </li>
              <li>
                Practice transparency and integrity in our actions.
              </li>
              <li>
               Challenge our own assumptions and biases. Recognize that there is no universal baseline for experiences.
              </li>
              <li>
                Own our responsibility to ensure that the research we conduct is as inclusive and representative as possible.
              </li>
              <li>
               Engage with non-profits and community groups to identify, recruit, and fairly compensate diverse users.
              </li>
              <li>
                Consider who benefits and who may be harmed with each design.
              </li>
              <li>
                Ask yourself who is invited and who is absent from the discussion. 
              </li>
              <li>
                Identify who is best positioned to help us understand how to make our solutions better.
              </li>
            </ul>
            <p>
              The patterns are a start, but we need your help to move forward. We’ll need help evolving these patterns as design practices and DEIA norms evolve. We hope you will continue to share your knowledge and expertise.
            </p>
            <p>
              Learn <a href="https://digital.gov/event/2022/06/16/uswds-monthly-call-june-2022/">how to contribute</a> to USWDS. Agencies interested in participating in this process — or simply in learning more about the design system — can join us in our <a href="https://designsystem.digital.gov/about/community/">public Slack channel (#uswds-public)</a>, for <a href="https://digital.gov/events/">our monthly calls</a>, and in the <a href="https://digital.gov/communities/">digital.gov communities of practice</a>. We’re looking forward to hearing from you.
            </p>
            <p>
              We thank everyone who shared their time, feedback, and ideas throughout this research effort and invite you — our collaborators and colleagues — to join us in creating inclusive digital experiences we can all be proud of.
            </p>
          </div>
          {% endif %}
        </div>
      </div>
    </div>
  </section>
{% endfor %}



