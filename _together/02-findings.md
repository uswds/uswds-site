---
layout: together-content
title: Findings `|` Inclusive Design Patterns Research Report
# For open graph meta description
description: USWDS is excited to provide a new library of guidance and examples focused on key digital interactions — what we call design patterns — that foster effective, inclusive, and equitable digital experiences.
nav_title: Findings
image: /img/together/og-together-report.png
permalink: /together/findings/
slug: findings
hero_title: Findings
hero_subtitle: Teams are thinking about how to create digital experiences that embrace all users and are effective, accessible, and respectful.
chapter: true
excerpt: ""

summary_sections:
  - heading: Current state
    description: |-
      Creating more equitable and inclusive experiences is at the forefront for many of our digital teams. Digital teams were generally further along in implementing accessibility than in considering equity and inclusivity in their design work. While some teams are actively looking for ways to incorporate inclusivity into their designs, others are waiting for direction.  

  - heading: Finding the best solution in a complex environment
    description: |-
      Digital teams are wrestling with how to incorporate the sometimes confusing and constantly evolving advice emerging from the DEIA space. While federal digital teams have always designed for “everyone,” there is renewed focus on ensuring that each individual feels welcome, heard, and supported in the digital experience. This is no easy task.

  - heading: The process of being inclusive is as important as the design
    description: |-
     Many of the interviewees — digital teams and DEIA experts alike — worried about the lack of diversity on design teams and among user testing participants. A small design team can never be representative of the full diversity of the potential users of the systems and experiences they are creating. Many teams are trying to figure out ways to include people with a wider range of lived experiences.

  - heading: Personal data is a reflection of an individual’s sense of self
    description: |-
      Many of the digital solutions we create rely on some amount of personal information like name, address, and Social Security Number. Solutions that aren’t inclusive of everyone can be very alienating. Interviewees identified some examples of alienating user experiences:

  - heading: Complex forms offer unique challenges
    description: |-
      Transactional websites were a focus of our team’s work. Much of the public’s interactions with the U.S. government is through digital and paper forms. Forms can be extremely challenging for users, especially during times of stress. We heard from HISPs that complex digital forms were a serious barrier for many users, and that crafting good form experiences was a challenge for digital teams. 

  - heading: Using each individual’s language of choice makes a big difference
    description: |-
      Many programs are working on making their content available in multiple languages, but there are lots of questions about how best to do that. As more and more programs provide content in multiple languages, there are compelling design challenges in how to make it clear and easy for them to find and use those languages. 
  
---

{% for item in page.summary_sections %}
  <section id="section-{{ forloop.index }}" class="together-section together-section--{{ item.title | downcase | replace: " ", "-" | remove: "’" }} {{ item.section_class }}">
    <div class="grid-container padding-left-0">
      <div class="grid-row">
        <div class="tablet:grid-col-12 desktop:grid-col-3">
          <div class="together-section__header">
            <h2 class="together-section__heading">{{ item.heading }}</h2>
          </div>
        </div>
        <div class="desktop:grid-col-8 desktop:margin-left-auto together-section-description">
          {{ item.description | markdownify }}
{% if forloop.index == 1 %}
  <div class="measure-4" markdown="1">
  {% include together/together-quote.html quote="[We’re] in the very early stage of thinking about equity and diversity in digital delivery." source="HISP Digital team member"%}
          
  Some teams could point to specific examples about how they created a more inclusive experience[^1]. Some of the things we heard included:
          
  * A program that reviews all their images to ensure a diverse representation of people.
  * An agency that is waiting for a clear directive prior to making any changes to personal information collected.
  * Several digital teams are actively working on adding languages other than English to their sites.
  * And many teams are thinking about how to structure forms to support successful completion, even during times of stress or trauma.
    
  {% include together/together-quote.html quote="There is so much to learn that it is hard to be an expert." source="HISP design expert"%}
            
  We learned that most teams feel they have a good handle on how to implement and test for accessibility conformance, but most would like more guidance (especially guidance supported by research) on creating inclusive experiences. 
            
  {% include together/together-quote.html quote="[You] can’t make a mistake, because it is someone’s future." source="HISP Digital team member"%}

  </div>

{% elsif forloop.index == 2 %}           
  <div class="measure-4">
    {% include together/together-quote.html quote="Right now [users] must select Mr./Mrs. — need to be more flexible." source="HISP Digital team member"%}
    <p>
      Many of the digital teams we spoke with said that they were looking for guidance on how to incorporate DEIA best practices into their work, and how to do so given other constraints or mandates. Some common challenges cited were:
    </p>
    <ul>
      <li>
        Figuring out how to create DEIA-supportive solutions while aligning with existing reporting requirements.
      </li>
      <li>
        Balancing new solutions with the needs — and limitations — of legacy back-end systems.
      </li>
      <li>
        Ensuring that the solutions they provide also provide adequate privacy protection for individuals and families.
      </li>
    </ul>
    {% include together/together-quote.html quote="Would like to see best practices for making a more equitable experience regarding gender." source="HISP Digital team member"%}
    <p>
      For example, some of the interviewees expressed that they’d like to provide a more inclusive experience around gender identity, but are concerned about opening people up to possible safety issues. Significant issues of privacy and personal safety come with some implementations, and this is definitely an area of concern for digital teams.
    </p>
    {% include together/together-quote.html quote="If a federal form is completed that identifies an underage [state resident] as trans, does that open them up to threats/danger?" source="DEIA Expert"%}
    <p>
      Other areas of concern were more technical. Changes to existing collection instruments require review in accordance with the <a href="https://pra.digital.gov/">Paperwork Reduction Act</a>. Back-end systems require updating. The digital teams want to get it right, but there are a lot of questions. Even when they are ready to make changes, processes, policies, and legacy tech can slow implementation down.
    </p>
    {% include together/together-quote.html quote="The need to integrate with legacy back-end systems can limit changes that can be made on the front-end." source="HISP Digital team member"%}
  </div> 

{% elsif forloop.index == 3 %}
<div class="measure-4" markdown="1">

Some of the ways digital teams are trying to be more inclusive are:

* Actively seeking a diverse team composition.
* Identifying ways to co-design with user groups that are most impacted by the decisions.
* Finding ways to include diverse perspectives and abilities in user testing.

It can be hard to figure out how to include historically disadvantaged populations in the design process or usability testing. Digital teams struggle with how to get the right people to weigh in at the right time, so everyone's needs are represented and everyone feels heard.

{% include together/together-quote.html quote="[It is] tough for us to think simultaneously about all the different groups you have to create things for, but if we could reach out to these groups when needed that would be helpful." source="HISP Digital team member"%}

And the realities of getting solutions out to the public quickly come into play. Digital teams try to balance getting imperfect solutions out quickly and making improvements later against waiting for a solution that checks all the boxes. It is a tough balancing act.

{% include together/together-quote.html quote="Build for most people vs. all people? Do I sacrifice getting it to most people or get it to all people later?" source="HISP Digital team member"%}

</div>

{% elsif forloop.index == 4 %}
<div class="measure-4" markdown="1">
* Forms that require addresses to be completed, but don’t accommodate different formats — or provide options for someone who is unhoused either permanently, or temporarily after a disaster.
* Name fields that expect users to have both a first and last name, and don’t accommodate singlename individuals or individuals with multiple last names[^2].
* Forms that require self-identification of biological sex, gender identity, or race and ethnicity — but don’t have options that are consistent with how individuals self-identify[^3].
</div>

{% include together/together-quote.html quote="Addresses can get a little tricky on reservations." source="HISP Digital team member"%}

<div class="measure-4" markdown="1">          
Many of the digital teams are trying to figure out what changes they need to make to accommodate a more diverse public[^4]. They recognize that personal information is the primary foundational information we ask from people, and when what we ask for doesn’t allow users to confidently and accurately self-identify in their answers, we may have created a bad experience — and an experience that erodes trust — from the start[^5].           
</div>

{% elsif forloop.index == 5 %}
<div class="measure-4" markdown="1">            
Forms can be frustrating and alienating, especially if the user is recovering from trauma or in a volatile situation, such as in the aftermath of a disaster. Interviewees asked for guidance around how we can increase trust and help the public to have a better experience with forms[^6].
</div> 
            
{% include together/together-quote.html quote="People are reluctant to give information because of the lack of trust and any number of concerns. [We need help] building trust into the design process." source="HISP Digital team member" %}

<div class="measure-4" markdown="1">                    
Some of the specific insights we heard regarding complex forms include:
                
* Users need to know why information is required and what we are using it for.
* Users need clear explanations of how their information will be safeguarded and their privacy protected.
* Some users, especially those in difficult situations, may need to be able to complete a form over several sessions.
* Not clearly stating upfront what information will be required to complete the form can lead to form abandonment.
* Forms that make assumptions — such as that all people in a family have the same last name — can be very frustrating for people to complete[^7].
</div>
      
{% include together/together-quote.html quote="Victims/survivors have expressed trouble in filling out forms due to the progression of questions." source="HISP Digital team member"%}

<div class="measure-4" markdown="1">            
Forms are a real challenge for digital teams as they try to meet both the needs of the public and those of the program. 
</div>

{% elsif forloop.index == 6 %}
<div class="measure-4" markdown="1">
{% include together/together-quote.html quote="Not just plain language. Need language access. Good multilingual IA [information architecture]. Writing that supports low English proficiency." source="DEIA expert"%}
            
Providing multilingual content is a huge investment, and a key way to communicate to the public that we will meet them where they are[^8].
            
{% include together/together-quote.html quote="[We’re] struggling with multilingual [content] and accommodating the proper presentation." source="HISP Design team member"%}
</div>

{% endif %}

        </div> <!-- desktop:grid-col-8 -->
      </div> <!-- grid-row -->
    </div> <!-- grid-container -->
  </section>
{% endfor %}

<!-- Citations -->

<section class="next-section next-section--citations">
  <div class="grid-row">
    <div class="tablet:grid-col-10" markdown="1">

## Citations

* footnotes will be placed here. This line is necessary
{:footnotes}

[^1]: They, their. (April 10, 2019) Retrieved on August 19, 2022, from <https://design.va.gov/content-style-guide/they-their>

[^2]: Personal names around the world. (August 17, 2011) Retrieved on August 19, 2022, from <https://www.w3.org/International/questions/qa-personal-names>

[^3]: Collecting sexual orientation and gender identity information: importance of the collection and use of this data. (March 8, 2022) Retrieved on August 19, 2022, from <https://snapshot2024.cdc.gov/hiv/clinicians/transforming-health/health-care-providers/collecting-sexual-orientation.html>

[^4]: Collecting and tabulating ethnicity and race response in the 2020 Census. (February 2020) Retrieved on August 19, 2022, from <https://www2.census.gov/about/training-workshops/2020/2020-02-19-pop-presentation.pdf>

[^5]: Current measures of sexual orientation and gender identity in federal surveys. (August 2016) Retrieved on August 19, 2022, from <https://nces.ed.gov/FCSM/pdf/buda5.pdf>

[^6]: SAMHSA’s concept of trauma and guidance for a trauma-informed approach. (July 2014) Retrieved on August 19, 2022, from <https://ncsacw.acf.hhs.gov/userfiles/files/SAMHSA_Trauma.pdf>

[^7]: Trauma-informed web heuristics for communication designers. (October 12, 2021) Retrieved on August 19, 2022, from <https://dl.acm.org/doi/10.1145/3472714.3473638>

[^8]: Top 10 best practices for multilingual websites. (June 21, 2022) Retrieved on August 19, 2022, from <https://digital.gov/resources/top-10-best-practices-for-multilingual-websites/>

Disclaimer: Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.

</div>
  </div>
</section>
