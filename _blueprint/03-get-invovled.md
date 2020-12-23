---
title: Get involved
ways:
- title: Join the conversation
  text: If you are interested in participating in this process or in learning more about the design system,  you can join us in our public Slack channel (#uswds-public), for our monthly calls, and in the other digital.gov communities of practice. 
  icon: speech
  button_text: Join Slack
  url: website.com
- title: Join an event
  text: |- 
    We invite you to join us in asking and further exploring these big-picture questions by joining our community and attending our events. 

    **Workshops beginning in spring 2021**
  icon: calendar
  button_text: Add me to the invite list
  url: website.com
---

<div class="grid-row">
<div class="grid-col-12" markdown="1">

## {{ page.title }}

<div class="usa-prose" markdown="1">

{:.measure-6}
Let’s work together to transform the way we design and deliver a digital government with and for the American people.
</div>
</div>
</div>

<div class="grid-row tablet:margin-x-neg-205 blueprint-involvements">
  {% for item in page.ways %}
    <div class="grid-col-12 tablet:grid-col-6 tablet:padding-x-205 blueprint-involvements__item">
      <div>
        <img class="blueprint-involvements__img" src="{{ site.baseurl }}/img/blueprint/{{ item.icon }}.svg" alt="" role="presentation">
        <h3 class="blueprint-involvements__heading">{{ item.title }}</h3>
        <div class="blueprint-involvements__body usa-prose">
          {{ item.text | markdownify }}
        </div>
      </div>
      <a href="#" class="usa-button usa-button--blueprint blueprint-involvements__button">{{ item.button_text }}</a>
    </div>
  {% endfor %}
</div>

