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
chapter: true

summary_sections:
  - heading: Current state
    description: |-
      Creating more equitable and inclusive experiences is at the forefront for many of our digital teams. Teams are thinking about DEIA, but are generally more confident, and further along in implementing accessibility  —  the “A”  —  than in incorporating diversity, equity, and inclusion  —  the “DEI”  —  into their work. While some teams are actively looking for ways to incorporate inclusivity into their designs, others are waiting for direction. 

  - heading: Finding the best solution in a complex environment
    description: |-
      Designing effective, usable digital solutions is not an easy endeavor, and digital teams are wrestling with how to incorporate learnings about the sometimes confusing and constantly evolving DEIA space. While federal digital teams have always designed for “everyone,” there is renewed focus on ensuring that each individual feels welcome, heard, and supported in the digital experience. This is no easy task.

  - heading: The process of being inclusive is as important as the design
    description: |-
     Many of the interviewees  —  digital teams and DEIA experts alike  —  worried about the lack of diversity on design teams and as user testing participants. Design teams are often not representative of the full diversity of the potential users of the systems and experiences they are creating. Many teams are trying to figure out ways to include people with a wider range of lived experiences.

  - heading: Personal data is the foundation of an individual’s sense of self
    description: |-
      Many of the digital solutions we create rely on some amount of each user’s personal information: name, address, Social Security Number. Solutions that aren’t inclusive of everyone can be very alienating. Interviewees explained how this can play out in digital projects.

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
          <div class="tablet:grid-offset-2 measure-4">
            {% include together/together-quote.html quote="Right now [users] must select Mr/Mrs  —  need to be more flexible." source="HISP Digital team member"%}
            <p>
              Many of the digital teams we spoke with said that they were looking for guidance on how to incorporate DEIA best practices into their work, and how to do so given other constraints or mandates. Some common challenges cited were:
            </p>
            <ul>
              <li>
                Figuring out how to create DEIA-supportive solutions while aligning with existing reporting requirements.
              </li>
              <li>
                Balancing new solutions with the needs (and limitations) of legacy back-end systems.
              </li>
              <li>
                Ensuring that the solutions they provide also provide adequate privacy protection for individuals and families.
              </li>
            </ul>
            {% include together/together-quote.html quote="Would like to see best practices for making a more equitable experience regarding gender." source="HISP Digital team member"%}
            <p>
              For example, some of the interviewees expressed that they’d like to provide a more inclusive experience around gender identity, but are concerned about opening people up to possible safety issues. Significant issues of privacy and personal safety come with some implementations, and this is definitely an area of concern for digital teams.
            </p>
            {% include together/together-quote.html quote="If a federal form is completed that identifies an underage [state resident] as trans, does that open them up to threats/danger." source="DEIA Expert"%}
            <p>
              Other areas of concern were more technical. Changes to existing collection instruments require review in accordance with the <a href="https://pra.digital.gov/">Paperwork Reduction Act</a>. Back-end systems require updating. The digital teams want to get it right, but there are a lot of questions. Even when they are ready to make changes, processes, policies, and legacy tech can slow implementation down.
            </p>
            {% include together/together-quote.html quote="The need to integrate with legacy back-end systems can limit changes that can be made on the front-end." source="HISP Digital team member"%}
          </div> 
          {% elsif forloop.index == 3 %}
          <div class="tablet:grid-offset-2 measure-4">
            <p>
              Some of the ways digital teams are trying to be more inclusive are:
            </p>
            <ul>
              <li>
               Actively looking for more diverse team members.
              </li>
              <li>
               Identifying ways to co-design with specific communities.
              </li>
              <li>
                Finding ways to include a more diverse group of people in user testing.
              </li>
            </ul>
            <p>
              It can be hard to figure out how to include historically disadvantaged populations in the design process or usability testing. Digital teams are really struggling with how to get the right people to weigh in at the right time, so everyone's needs are represented and everyone feels heard.
            </p>
            {% include together/together-quote.html quote="[It is] tough for us to think simultaneously about all the different groups you have to create things for, but if we could reach out to these groups when needed that would be helpful." source="HISP Digital team member"%}
            <p>
              And, as always, the realities of getting solutions out to the public quickly come into play. Digital teams try to balance getting imperfect solutions out quickly and making improvements later versus waiting for a solution that checks all the boxes. It is a tough balancing act.
            </p>
            {% include together/together-quote.html quote="Build for most people vs. all people? Do I sacrifice getting it to most people or get it to all people later?" source="HISP Digital team member"%}
          </div>
          {% elsif forloop.index == 4 %}
          <div class="tablet:grid-offset-2 measure-4">
            <ul>
              <li>
               Actively looking for more diverse team members.
              </li>
              <li>
               Identifying ways to co-design with specific communities.
              </li>
              <li>
                Finding ways to include a more diverse group of people in user testing.
              </li>
            </ul>
            {% include together/together-quote.html quote="Addresses can get a little tricky on reservations." source="HISP Digital team member"%}
            <p>
              Many of the digital teams were trying to figure out what changes they need to make to accommodate a more diverse public. Most recognized that personal information is the most foundational information we ask from people, and when what we ask for doesn’t allow users to feel seen and confident in their answers, we may have created a bad experience from the start.
            </p>
          </div>
          {% elsif forloop.index == 5 %}
          <div class="tablet:grid-offset-2 measure-4">
            <p>
              Forms can be frustrating and alienating, especially if the user is recovering from trauma or in a volatile situation, such as in the aftermath of a disaster. Interviewees asked for guidance around how we can increase trust and help the public to have a better experience with forms. 
            </p>
            {% include together/together-quote.html quote="People are reluctant to give information because of the lack of trust and any number of concerns. [We need help] building trust into the design process." source="HISP Digital team member"%}
            <p>
              Some of the specific insights we heard regarding complex forms include:
            </p>
            <ul>
              <li>
               Users need to know why information is required, what we are using it for, and how it will be protected.
              </li>
              <li>
               Some users, especially those in difficult situations, may need to be able to complete a form over several sessions.
              </li>
              <li>
                Not clearly stating upfront what information will be required to complete the form can lead to form abandonment.
              </li>
              <li>
                Forms that make assumptions  —  such as that all people in a family have the same last name  —  can be very frustrating for people to complete.
              </li>
            </ul>
            {% include together/together-quote.html quote="Victims/survivors have expressed trouble in filling out forms due to the progression of questions." source="HISP Digital team member"%}
            <p>
              Forms are a real challenge for digital teams, as they try to meet both the needs of the public and those of the program. 
            </p>
          </div>
          {% elsif forloop.index == 6 %}
          <div class="tablet:grid-offset-2 measure-4">
            {% include together/together-quote.html quote="Not just plain language. Need language access. Good multilingual IA [information architecture]. Writing that supports low English proficiency." source="DEIA expert"%}
            <p>
              Providing multilingual content is a huge investment, and a key way to communicate to the public that we will meet them where they are. 
            </p>
            {% include together/together-quote.html quote="[We’re] struggling with multilingual [content] and accommodating the proper presentation." source="HISP Design team member"%}
          </div>
          {% endif %}

        </div>
      </div>
    </div>
  </section>
{% endfor %}

