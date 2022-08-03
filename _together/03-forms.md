---
layout: together-content
title: Complex Forms
nav_title: Forms
description: 
meta:
  og:image: /img/next/og-next-report.png
permalink: /together/forms
slug: forms
subhead: Lorem ipsum dolor sit amet consectetur adipiscing elit
help_detail: Complete a complex form
main_graphic: /img/together/forms-info.svg
chapter: true

section_one:
  main_heading: Make sure users know what they’ll need
  icon: /img/together/rules.svg
section_one_buckets: 
  - heading: Set expectations and establish trust
    description: Help users understand why they need to complete a form, what information will be needed to complete form, why we are asking for specific data, and what will be done with the data they are providing. 
  - heading: Clearly communicate that form has been successfully submitted
    description: Make sure users feel confident their form has been successfully submitted. Provide next steps, if available.
  - heading: Keep a record of submitted information
    description: Support users through the process of submission by providing an easily printed or downloadable summary of submitted information and any information they will need in order follow up on status.  

section_two:
  main_heading: Ease cognitive load
  icon: /img/together/brain.svg
section_two_buckets: 
  - heading: Maintain focus while completing forms
    description: Avoid distracting users with extraneous content in order to ensure focus is centered on form content and encourage users to successfully complete form.
  - heading: Progress easily through form questions
    description: Employ progressive disclosure to help users move through the form in a clear way that supports them when they are stressed or cognitively overwhelmed and progress from easy to hard questions.
  - heading: See their progress completing the form
    description: Ensure users understand where they are in the process of completing a form, and feel confident they know next steps in moving through form completion. 

section_three:
  main_heading: Provide peace of mind to users
  icon: /img/together/lotus.svg
section_three_buckets: 
  - heading: Easily fix errors when entering form data
    description: Empower users to gracefully recover from errors. Provide complete information on how to recover from errors. 
  - heading: Reliably save and resume incomplete forms
    description: Allow frequent saving of form content, and enable easy return to finish completing form, if outside distractions become overwhelming or a user cannot complete the form in a single session. 
 
---

<!-- top section -->
<section class="text-center margin-y-6">
  <div class="border-bottom-1px border-top-0 border-left-0 border-right-0 border-dashed">
    <h2 class="font-sans-xl">
      Help users to...<span class="font-sans-xl text-base">{{ page.help_detail }}</span>
    </h2>
  </div>
  <p class="font-sans-2xl text-bold">Why this matters?</p>
  <img class="width-desktop" src="{{ site.baseurl }}{{ page.main_graphic }}">
</section>

<!-- section one -->
<section class="together-section">      
  <h2 class="text-center font-sans-2xl text-base-dark text-normal">
    {{ page.section_one.main_heading }}
  </h2>
  <div class="display-flex flex-row flex-justify-center margin-bottom-4">
    <img class="width-9" src="{{ site.baseurl }}{{ page.section_one.icon }}">
  </div>  
  <div class="grid-container">
    <div class="grid-row grid-gap-2">
      {% for item in page.section_one_buckets %}
      {% if forloop.length <= 2 and forloop.index == 1 %}
        <div class="tablet:grid-col-4 tablet:grid-offset-2">
      {% else %}
        <div class="tablet:grid-col-4">
      {% endif  %}
          <div class="together-section__header border-top-105 border-primary">
            <h3 class="together-section__heading">
            {{ item.heading }}
            </h3>
            <p>{{ item.description | markdownify }}</p>
          </div>
        </div>  
      {% endfor %}
    </div>
  </div>
</section>

<!-- section two -->
<section class="together-section">      
  <h2 class="text-center font-sans-2xl text-base-dark text-normal">
    {{ page.section_two.main_heading }}
  </h2>
  <div class="display-flex flex-row flex-justify-center margin-bottom-4">
    <img class="width-9" src="{{ site.baseurl }}{{ page.section_two.icon }}">
  </div>  
  <div class="grid-container">
    <div class="grid-row grid-gap-2">
      {% for item in page.section_two_buckets %}
      {% if forloop.length <= 2 and forloop.index == 1 %}
        <div class="tablet:grid-col-4 tablet:grid-offset-2">
      {% else %}
        <div class="tablet:grid-col-4">
      {% endif  %}
          <div class="together-section__header border-top-105 border-secondary-vivid">
            <h3 class="together-section__heading">
            {{ item.heading }}
            </h3>
            <p>{{ item.description | markdownify }}</p>
          </div>
        </div>  
      {% endfor %}
    </div>
  </div>
</section>

<!-- section three -->
<section class="together-section">      
  <h2 class="text-center font-sans-2xl text-base-dark text-normal">
    {{ page.section_three.main_heading }}
  </h2>
  <div class="display-flex flex-row flex-justify-center margin-bottom-4">
    <img class="width-9" src="{{ site.baseurl }}{{ page.section_three.icon }}">
  </div>  
  <div class="grid-container">
    <div class="grid-row grid-gap-2">
      {% for item in page.section_three_buckets %}
      {% if forloop.length <= 2 and forloop.index == 1 %}
        <div class="tablet:grid-col-4 tablet:grid-offset-2">
      {% else %}
        <div class="tablet:grid-col-4">
      {% endif  %}
          <div class="together-section__header  border-top-105 border-gold">
            <h3 class="together-section__heading">
            {{ item.heading }}
            </h3>
            <p>{{ item.description | markdownify }}</p>
          </div>
        </div>  
      {% endfor %}
    </div>
  </div>
</section>