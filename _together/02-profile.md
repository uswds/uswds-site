---
layout: together-content
title: Inclusive Design Patterns
nav_title: Profile
description:
meta:
  og:image: /img/next/og-next-report.png
permalink: /together/profile
slug: profile
subhead: Create a User Profile
help_detail: Successfully provide profile information
chapter: true

section_one:
  main_heading: Core to a person’s identity
  icon: /img/together/gender-equality.svg
section_one_buckets: 
  - heading: Enter their name
    description: Names are wonderfully diverse, and may include special characters, be very long or short (impacting character requirements), or have capitalization requirements that are often ignored. People may have multi-word last names or a single given name.
  - heading: Select their race or ethnicity
    description: Many folks are multiracial or may not know their background. They may identify as one thing but genetics indicate another. Additionally, there needs to be an attempt at sensitively capturing the nuances of ethnicity and/or race.
  - heading: Select their gender or sex
    description: |-
      Sex and gender identity are central to folks’ sense of self. Considerations: LGBTQ+; A. Hernandez's work; VA's approach; OMB's requirements. There may also be safety issues with this disclosure that need to be considered. Need to evaluate whether the question is actually necessary information to capture.
  - heading: Our future vision
    description: Gender expression does not equal gender identity. Asking for, and correctly using someone’s preferred pronouns is one of the most basic ways to respect someone’s gender identify.

section_two:
  main_heading: Integral to proving your identity
  icon: /img/together/pass.svg
section_two_buckets: 
  - heading: Enter their SSN
    description: Some people do not have social security numbers and may have a hard time providing proof to obtain one. Updated validation rules may not be in place on all sites causing spurious failures.
  - heading: Enter their date of birth
    description: There are cultural differences around ages which need to be respected while supporting collection of date of birth for identity validation. Dates are also complicated by inconsistent formatting (US vs. international) that can make date and month hard to discern.

section_three:
  main_heading: Essential to qualifying for/receiving support and services
  icon: /img/together/location.svg
section_three_buckets: 
  - heading: Complete their physical  address
    description: People may be unhoused, have temporary housing or use addresses that rely on geographic markers. Also need to consider Google Plus Codes on Reservations. Multiple households might share addresses, leading to eligibility questions. Some Puerto Rican addresses are formatted differently than the 50 States.
  - heading: Complete their mailing address 
    description: People in rural areas and territories rely heavily on mailboxes, which can hinder disaster assistance.

section_four:
  main_heading: Ensures preferred/effective communications with profile
  icon: /img/together/tools.svg
section_four_buckets: 
  - heading: Enter their phone number
    description: People may have multiple phone numbers, some more permanent than others. 
  - heading: Select their preferred means of communication
    description: People in rural areas and territories rely heavily on mailboxes, which can hinder disaster assistance.
  - heading: Enter their email 
    description: People use multiple emails from all sorts of Top Level Domains (TLDs), which can cause validation challenges. 

---
<!-- top section -->
<section class="text-center margin-y-6">
  <div class="border-bottom-1px border-top-0 border-dashed">
    <h2>
      Help users to...<span class="text-base">{{ page.help_detail }}</span>
    </h2>
  </div>

  <p class="font-sans-2xl text-bold">Why this matters?</p>
  <img class="width-desktop" src="../img/together/together-logo.svg">
</section>

<!-- section one -->
<section class="together-section">      
  <h2 class="text-center font-sans-2xl text-base-dark text-normal">
    {{ page.section_one.main_heading }}
  </h2>
  <div class="display-flex flex-row flex-justify-center margin-bottom-4">
    <img class="width-9" src="{{ page.section_one.icon }}">
  </div>  
  <div class="grid-container">
    <div class="grid-row grid-gap-2">
      {% for item in page.section_one_buckets %}
        <div class="tablet:grid-col-3">
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

<!-- section two and three -->
<section class="together-section">
<div class="grid-row grid-gap grid-container">
  <div class="tablet:grid-col-6">
    <h2 class="text-center font-sans-2xl text-base-dark text-normal margin-bottom-10">
      {{ page.section_two.main_heading }}
    </h2>
    <div class="display-flex flex-row flex-justify-center margin-bottom-4">
      <img class="width-9" src="{{ page.section_two.icon }}">
    </div>  
    <div class="grid-row grid-gap-2">
      {% for item in page.section_two_buckets %}
        <div class="tablet:grid-col-6">
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
  <div class="tablet:grid-col-6">
    <h2 class="text-center font-sans-2xl text-base-dark text-normal margin-bottom-4">
      {{ page.section_three.main_heading }}
    </h2>
    <div class="display-flex flex-row flex-justify-center margin-bottom-4">
      <img class="width-7" src="{{ page.section_three.icon }}">
    </div>  
    <div class="grid-row grid-gap-2">
      {% for item in page.section_three_buckets %}
        <div class="tablet:grid-col-6">
          <div class="together-section__header border-top-105 border-gold">
            <h3 class="together-section__heading">
            {{ item.heading }}
            </h3>
            <p>{{ item.description | markdownify }}</p>
          </div>
        </div>  
      {% endfor %}
    </div>    
  </div>
</div>      
</section>

<!-- section four -->
<section class="together-section">      
  <h2 class="text-center font-sans-2xl text-base-dark text-normal">
    {{ page.section_four.main_heading }}
  </h2>
  <div class="display-flex flex-row flex-justify-center margin-bottom-4">
    <img class="width-9" src="{{ page.section_four.icon }}">
  </div>  
  <div class="grid-container">
    <div class="grid-row grid-gap-2">
      {% for item in page.section_four_buckets %}
        <div class="tablet:grid-col-4">
          <div class="together-section__header border-together-green border-top-105">
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