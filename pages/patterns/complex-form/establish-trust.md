---
title: Establish trust
story: Help a user to understand expectations in completing a complex form and establish trust
permalink: /patterns/complete-a-complex-form/establish-trust/
layout: pattern
category: Patterns
sub-category: Complete a complex form
lead: Help users understand the purpose of a form and the time commitment needed to complete it, feel confident they have what they need, and trust that the information they provide will be safeguarded and used responsibly.
changelog:
  key: pattern-complete-a-complex-form-establish-trust
---

{:.site-component-section-title}
## About this pattern

### What problem does this solve?
Government forms can be very stressful and overwhelming for users to complete. If they are in the midst of a crisis or recovering from trauma, form completion can be very challenging. Respect for their life experiences and time, and reassurances about process and privacy, can help reduce user stress and frustration.

### When to use this pattern
Use this pattern when you are asking users to provide more than basic contact information, especially if you are collecting information that may require disclosing sensitive personal, financial, health, or safety details in a digital form.

### What’s the solution
Provide clear information on why it is necessary to complete the form, what information is needed to successfully complete the form, and how the information will be kept secure. Be as transparent as possible.

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
            <li>Do provide information on why information is being collected and how it is being used. </li>
            <li>Do use <a href="https://www.plainlanguage.gov/">plain language</a>.</li>
            <li>Do use people-first language. Emphasize <a href="https://www.cdc.gov/ncbddd/disabilityandhealth/materials/factsheets/fs-communicating-with-people.html">people’s abilities, not their limitations</a>, and choose words that emphasize the need for accessibility, not the disability. For example, use accessible parking, not handicapped parking.</li>
            <li>Do use <a href="https://content-guide.18f.gov/our-style/inclusive-language/">inclusive language</a>. Choose gender neutral words when possible. Avoid using <em>citizen</em>, unless you are specifically addressing that audience. Choose words that include the broadest appropriate group.</li>
            <li>Do <a href="{{ site.baseurl }}/components/icon-list/">provide a list</a> of what information your user will need to successfully complete the form.</li>
            <li>Do provide an approximate amount of time it will take the user to complete the form.</li>
            <li>Do allow the user to save and resume if possible. Some users may need to take breaks as they complete a form on a difficult topic. If users can save and resume the form, tell them so up front, so they know this is an option.</li>
            <li>Do provide the user with a summary of their answers before they submit the form.</li>
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
            <li>Do not overwhelm your user. Provide enough background information to communicate the purpose and requirements of the form, but use principles of progressive disclosure to gradually move from simple to more difficult questions.</li>
            <li>Do not ask for information that may be disturbing to the user without context. Explain why you need the information. For example, if you are going to ask about mental health or substance use issues or details on the illness or death of a loved one, explain why that information is required for the program or service.</li>
            <li>Do not create a false sense of urgency. People under stress — even just the stress of filling out a long government form — do not need added pressure.</li>
            <li>Use care to avoid making gender, pronoun, or biological sex assumptions based on previous answers.</li>
            <li>Don’t provide examples that may make some groups feel excluded or targeted, such as including images or illustrations that reinforce stereotypes or stigma.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview margin-top-2">
  <h3 id="pattern-preview">
    <button class="usa-accordion__button" aria-controls="accordion-preview-01" aria-expanded="true">Pattern preview</button>
  </h3>
  <div id="accordion-preview-01" class="usa-accordion__content">
    {% include patterns/establish-trust.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <h3 id="pattern-code">
    <button class="usa-accordion__button" aria-controls="accordion-code-01" aria-expanded="false">Pattern code
    </button>
  </h3>
  <div id="accordion-code-01" class="usa-accordion__content highlight-code copy-code">
    <div class="usa-sr-only">
       {% highlight text%}{% include patterns/establish-trust.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/establish-trust.html %}{% endhighlight %}
  </div>
</div>

### Considerations

{:.usa-content-list}
- <strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all, and clearly explain the reason for asking for the information and what will be done to secure the user’s privacy.
- <strong>Lead with the needs voiced from the community.</strong> Nobody knows your users better than your users. Trust is diminished when change is not aligned with needs or values. By considering users’ feedback you can mitigate the risk of alienation.
- <strong>Provide the user with a summary of their answers before they submit the form.</strong> Give them the opportunity to re-check their answers and provide an easy way for them to revise answers that are incorrect.

### Usability guidance

{:.usa-content-list}
- <strong>Design to support people in difficult times.</strong> People under stress may have poor recall, make frequent errors completing forms, and may not notice the errors they make. They likely have a hard time staying focused, cannot easily categorize objects, and are easily frustrated. Consider <a href="{{ site.baseurl }}/patterns/complete-a-complex-form/progress-easily/">simple form pages and helpful, no-blame error messaging</a>. Use care when surfacing content that appears based on previous answers. People under stress may already feel exposed and vulnerable. Use calm, straightforward language.
- Whenever possible, <strong>allow users to save and resume</strong> long and potentially stress-inducing forms rather than assuming a form will be completed in a single session. Users may be accessing the form on a mobile device, or in a shared public space like a shelter or library where privacy is not guaranteed. They may be distracted by the environment or family members, or discover that additional records are needed. Some users simply need time to work up to answering difficult, potentially painful questions.
- <strong>Practice transparency and integrity.</strong> Don’t hide information from your users. Clearly explain what you are collecting and why. By setting the expectations with your user early, users can feel more inclined to trust the process.
- <strong>Be reliable, consistent, and honest.</strong> Reduce the impact of failure with solid design and engineering. Be a good steward of your audience’s data, resources, and time.

{:.site-component-section-title}
## Related components, patterns, and templates

{:.usa-content-list}

- <a href="{{ site.baseurl }}/components/icon-list/">Icon list</a> component
- <a href="{{ site.baseurl }}/patterns/complete-a-complex-form/keep-a-record/">Keep a record of submitted information</a> pattern
- <a href="{{ site.baseurl }}/patterns/complete-a-complex-form/progress-easily/">Progress easily through a form</a> pattern


{:.site-component-section-title}
## References
- Build trust with these UX guidelines (March 16, 2019) Retrieved on July 19, 2022, from [https://uxdesign.cc/build-trust-with-these-ux-guidelines-f3d547bb2014.](https://uxdesign.cc/build-trust-with-these-ux-guidelines-f3d547bb2014)
- Building trust with users through open communication and feedback, (June 13, 2019) Retrieved on July 19, 2022, from [https://digital.gov/2019/06/13/building-trust-with-users-through-open-communication-feedback/.](https://digital.gov/2019/06/13/building-trust-with-users-through-open-communication-feedback/)
- Communicating with and about people with disabilities. (February 1, 2022) Retrieved on July 28, 2022, from [https://www.cdc.gov/ncbddd/disabilityandhealth/materials/factsheets/fs-communicating-with-people.html.](https://www.cdc.gov/ncbddd/disabilityandhealth/materials/factsheets/fs-communicating-with-people.html)
- Design principles, (n.d.) Retrieved on July 21, 2022 from [https://designsystem.digital.gov/design-principles/.]({{ site.baseurl }}/design-principles/)
- Inclusive design. (n.d.) Retrieved on August 24, 2022, from [https://content-guide.18f.gov/our-style/inclusive-language/.](https://content-guide.18f.gov/our-style/inclusive-language/)
- Trauma-informed computing: towards safer technology experiences for all. Journal article Association for Computing Machinery in Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems (CHI '22). 2022. Retrieved on July 22, 2022, from [https://doi.org/10.1145/3491102.3517475.](https://doi.org/10.1145/3491102.3517475)
- Trust or bust: communicating trustworthiness in web design. (March 6, 1999) Retrieved on July 28, 2022, from [https://www.nngroup.com/articles/communicating-trustworthiness/.](https://www.nngroup.com/articles/communicating-trustworthiness/)

{:.site-component-section-title}
## Disclaimer
 Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.
