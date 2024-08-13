---
title: Progress easily
story: Help a user to progress easily through form questions
permalink: /patterns/complete-a-complex-form/progress-easily/
layout: pattern
category: Patterns
sub-category: Complete a complex form
lead: Empower users to successfully complete complex forms by reducing cognitive load and guiding them through the process in a way that is humane and respectful.
changelog:
  key: pattern-complete-a-complex-form-progress-easily
---

{:.site-component-section-title}
## About this pattern

### What problem does this solve?
Complex forms can be intimidating, overwhelming, and stressful at the best of times. Applying for the services and benefits a person most needs at the worst of times – when they may be experiencing added stresses like the trauma of natural disasters, displacement, joblessness, financial hardship, health issues, loss of a loved one, discrimination, or violence – can make a complex form seem like an impossible task to complete.

Employing principles learned through user experience techniques like progressive disclosure and trauma-informed design can help the user maintain focus, and promote calm while guiding them step-by-step through a form, increasing the likelihood of successful form submission.

### When to use this pattern
Use this pattern when you are asking users to provide more than basic contact information, especially if you are collecting information that may require disclosing sensitive personal, financial, health, or safety details in a digital form.

### What’s the solution
Provide the user with the most straightforward path through successful form completion by simplifying the user interface, progressively disclosing form questions and content, and employing trauma-informed research and design practices.

Respectful, inclusive voice and tone throughout the form – the questions, field labels, hint text, and form messaging – will be critical success factors, as well as delivering questions that progress from simple to more difficult to answer. Help users avoid making mistakes with clear hint text, and empower them to recover from mistakes easily by providing actionable validation messaging. Any system or validation messaging should be free of blame and avoid alarming users.

{:.site-component-section-title}
## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col">
    <div class="do-dont">
      <div class="do-dont__do">
        <h3 class="do-dont__heading">
          {% include icon.html icon="check_circle" %}
          What to do
        </h3>
        <div class="do-dont__content">
          <ul>
            <li>Make sure you’re helping users to understand expectations as you are <a href="{{ site.baseurl }}/patterns/complete-a-complex-form/establish-trust/">Establishing trust</a>. Be transparent in why specific information is being collected, how it will be used, and how that information will be safeguarded.</li>
            <li>Design with mobile in mind. Consider the touch screen experience and how forms can be delivered in bandwidth-challenged environments.</li>
            <li>Progressively disclose information, guiding the user from simple to more difficult questions.</li>
            <li>Break questions into small, meaningful chunks. Only show questions on one micro-topic at a time.</li>
            <li>Show the user where they are in the process. Because data entered may impact future steps, consider whether a component like the <a href="{{ site.baseurl }}/components/step-indicator/">Step Indicator</a> is a fit for a specific form.</li>
            <li>Allow the user to complete the form in the order they choose, if possible. If changes to answers may impact steps already completed, inform the user of potential impacts and confirm before invalidating previous form entries.</li>
            <li>Allow the users to save and resume. Some users may need to take breaks as they complete a form on a difficult topic. If users can save and resume the form, tell them so up front, so they know this is an option.</li>
            <li>Do provide users with an option to get help (a phone number or chat, for example) if they get stuck or have a question.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="tablet:grid-col">
    <div class="do-dont">
      <div class="do-dont__dont">
        <h3 class="do-dont__heading">
          {% include icon.html icon="cancel" %}
          What not to do
        </h3>
        <div class="do-dont__content">
          <ul>
            <li>Don’t assume your users are using a desktop or laptop computer, in the privacy of their own homes.</li>
            <li>Don’t hide critical information — especially information that is useful or provides context — behind links that will navigate the user away from the form, even using a new window or tab. Users may find it disorienting or lose their place in the form. Consider whether using <a href="{{ site.baseurl }}/components/modal/">modals</a> for critical explanatory content that may be required to understand and complete the task is necessary, or if on-screen help text can provide the necessary information.</li>
            <li>Avoid error messaging that is vague or places blame on the user. Users in stressful situations may find terse or unclear validation messaging frustrating and a barrier to completion.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

### Usability guidance
<ul class="usa-content-list">
  <li><strong>Design to support people in difficult times.</strong> People under stress may have poor recall, make frequent errors completing forms, and may not notice the errors they make. They likely have a hard time staying focused, cannot easily categorize objects, and are easily frustrated. Use care when surfacing content that appears based on previous answers. People under stress may already feel exposed and vulnerable. Use calm, straightforward language.</li>
  <li>Whenever possible, <strong>allow users to save and resume</strong> long and potentially stress-inducing forms rather than assuming a form will be completed in a single session. Users may be accessing the form on a mobile device, or in a shared public space like a shelter or library where privacy is not guaranteed. They may be distracted by the environment or family members, or discover that additional records are needed. Some users simply need time to work up to answering difficult, potentially painful questions.</li>
</ul>

### Accessibility
<ul class="usa-content-list">
  <li><strong>Customization.</strong> As you customize, make sure you follow <a href="{{ site.baseurl }}/templates/form-templates/">accessibility guidelines for form templates</a> and the <a href="{{ site.baseurl }}/components/form/">accessibility guidelines for form controls</a>.</li>
</ul>

{:.site-component-section-title}
## Related components, patterns, and templates

{:.usa-content-list}

- <a href="{{ site.baseurl }}/components/modal/">Modal</a> component
- <a href="{{ site.baseurl }}/components/step-indicator/">Step indicator</a> component
- <a href="{{ site.baseurl }}/patterns/complete-a-complex-form/keep-a-record/">Keep a record of submitted information</a> pattern
- <a href="{{ site.baseurl }}/patterns/complete-a-complex-form/establish-trust/">Understand expectations and establish trust</a> pattern

{:.site-component-section-title}
## References

### Trauma-informed design
- About trauma-informed design – design resources for homelessness. (n.d.) Retrieved on July 26, 2022, from [http://designresourcesforhomelessness.org/](http://designresourcesforhomelessness.org/)
- Concept of trauma and guidance for a trauma-informed approach. Substance Abuse and Mental Health Services Administration (SAMHSA) - U.S. Department of Health and Human Services. (July 2014) Retrieved on July 21, 2022, from [https://store.samhsa.gov/sites/default/files/d7/priv/sma14-4884.pdf](https://store.samhsa.gov/sites/default/files/d7/priv/sma14-4884.pdf)
- Project 3: implementing trauma-informed content. (July 9, 2019) Retrieved on July 26, 2022, from [https://www.phila.gov/2019-07-09-project-3-implementing-trauma-informed-content/](https://www.phila.gov/2019-07-09-project-3-implementing-trauma-informed-content/)
- Trauma-informed computing: towards safer technology experiences for all. Journal article Association for Computing Machinery in Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems (CHI ’22). 2022. Retrieved on July 22, 2022, from [https://doi.org/10.1145/3491102.3517475](https://doi.org/10.1145/3491102.3517475)
- Trauma-informed design research - Design practice that helps not harms. (August 9, 2021) Retrieved on July 26, 2022, from [https://uxdesign.cc/trauma-informed-design-research-69b9ba5f8b08](https://uxdesign.cc/trauma-informed-design-research-69b9ba5f8b08)
- Trauma-informed web heuristics for communication designers. Journal article, Association for Computing Machinery by Shannon Kelly, Benjamin Lauren, and Kaitlyn Nguyen 39th ACM International Conference on Design of Communication (SIGDOC ’21). (2021) Retrieved on July 26, 2022 from  [https://doi.org/10.1145/3472714.3473638](https://doi.org/10.1145/3472714.3473638)
- VA.gov design system - content presentation. (May 2, 2022) Retrieved on July 21, 2022, from [https://design.va.gov/patterns/help-users-to/recover-from-errors#style-and-tone](https://design.va.gov/patterns/help-users-to/recover-from-errors#style-and-tone)
- VA.gov design system - patterns. (May 26, 2022) Retrieved on July 26, 2022 from [https://design.va.gov/patterns/](https://design.va.gov/patterns/)
- What is trauma-informed design? (June 4, 2021) Retrieved on July 26, 2022 from [https://www.birdcallux.com/blog/what-is-trauma-informed-design](https://www.birdcallux.com/blog/what-is-trauma-informed-design)

### Progressive disclosure
- 10 usability heuristics for user interface design. (April 24, 1994. Updated November 15, 2020.) Retrieved on July 22, 2022, from [https://www.nngroup.com/articles/ten-usability-heuristics/](https://www.nngroup.com/articles/ten-usability-heuristics/)
- 10 UI design patterns you should be paying attention to. (June 23, 2009), Retrieved on July 27, 2022, from
[https://www.smashingmagazine.com/2009/06/10-ui-design-patterns-you-should-be-paying-attention-to/](https://www.smashingmagazine.com/2009/06/10-ui-design-patterns-you-should-be-paying-attention-to/)
- Design patterns: progressive disclosure for mobile apps. (May 26, 2016) Retrieved on July 26, 2022, from [https://uxplanet.org/design-patterns-progressive-disclosure-for-mobile-apps-f41001a293ba](https://uxplanet.org/design-patterns-progressive-disclosure-for-mobile-apps-f41001a293ba)
- Designing for progressive disclosure. (May 4, 2020) Retrieved on July 26, 2022, from [https://www.uxmatters.com/mt/archives/2020/05/designing-for-progressive-disclosure.php](https://www.uxmatters.com/mt/archives/2020/05/designing-for-progressive-disclosure.php)
- Progressive disclosure. (December 3, 2006) Retrieved on July 26, 2022, from [https://www.nngroup.com/articles/progressive-disclosure/](https://www.nngroup.com/articles/progressive-disclosure/)
- Progressive disclosure: all you need to know. (January 27, 2021) Retrieved on July 26, 2022, from [https://www.justinmind.com/blog/progressive-disclosure/](https://www.justinmind.com/blog/progressive-disclosure/)
- Progressive disclosure design pattern. (n.d.) Retrieved on July 26, 2022, from [https://ui-patterns.com/patterns/ProgressiveDisclosure](https://ui-patterns.com/patterns/ProgressiveDisclosure)
- Progressive disclosure: simplifying the complexity. (August 5, 2019) Retrieved on July 26, 2022, from [https://www.shopify.com/nz/partners/blog/progressive-disclosure](https://www.shopify.com/nz/partners/blog/progressive-disclosure)
- Training wheels in a user interface. Journal article, Association for Computing Machinery by John M. Carroll and Caroline Carrithers Vol. 8 (August 1, 1984). Retrieved on July 27, 2022, from  [https://doi.org/10.1145/358198.358218](https://doi.org/10.1145/358198.358218)

{:.site-component-section-title}
## Disclaimer
Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.
