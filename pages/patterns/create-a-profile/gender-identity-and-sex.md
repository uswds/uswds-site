---
title: Gender identity and sex
status: Needs research
story: Help a user select their gender identity and sex
permalink: /patterns/create-a-user-profile/gender-identity-and-sex/
layout: pattern
category: Patterns
feedback: true
sub-category: Create a user profile
lead: This pattern helps users to provide gender identity and sex information in an accurate and respectful manner. Gender identity and sex are often integral to an individual’s sense of self, and several federal agencies and working groups are striving to define a meaningful, inclusive way to collect gender identity and sex information when it is needed.
changelog:
  key: pattern-user-profile-gender-identity-and-sex
---

{:.site-component-section-title}
## About these patterns

### Background

Gender is a social construct. Gender identity is an expression of a user’s identity and is integral to their sense of self. Gendered experiences are complex and vary widely.

Sex assigned at birth is a biological attribute. In the digital space, male and female are often the only provided options, but there are instances where an individual’s biological sex is not unambiguously male or female.

Historically, the federal government has asked people to choose between male and female based on the sex they were assigned at birth. Recently, agencies and programs have been moving toward providing more options, reflecting the fact that biological sex is not always unambiguously male or female, and that an individual’s gender identity may not reflect the sex they were assigned at birth.

In April 2022, the U.S. Department of State began allowing people to specify “X,” along with “male” or “female” on their passports. (Note: “non-binary” is generally used only when referring to gender identity. It is being used by the Department of State’s changes in their recording of sex, defining `X` as `Unspecified or another gender identity` including non-binary, intersex, and gender non-conforming individuals.) While sex listed at birth is often used as part of validating identity, gender identity is generally more important for ensuring respectful communication. 

The White House's [Office of Management and Budget](https://www.whitehouse.gov/omb/), [Federal Committee on Statistical Methodology](https://www.fcsm.gov/) interagency committee, and [Centers for Disease Control and Prevention](https://www.cdc.gov/) are just some of the federal agencies and programs working to define a meaningful, inclusive way to collect gender identity and sex information when it is needed. We were especially interested in the way CDC's [HIV Nexus Clinician Resources](https://www.cdc.gov/hiv/clinicians/transforming-health/health-care-providers/collecting-sexual-orientation.html) articulates the importance of asking two separate questions to ensure healthcare providers can provide patient-centered, high quality care: `current gender identity`, and `sex listed at birth`.

This is an evolving space, and language recommendations are also evolving. In this pattern we've used the term `gender identity` to capture the way a person wishes to be represented, vs. gender as a construct. We've also used the term `sex` vs. `biological sex`, `sex assigned at birth`, or `sex listed at birth`. This term, in particular, should be evaluated for your specific program needs.

### What problems do these patterns solve?
Gender and sex are often used synonymously. Many users struggle to provide gender information that best represents them. An overwhelming number of choices for gender identity can be as alienating as too limited a set of provided options.

{:.site-component-name#gender-identity-section}
## Gender identity 

### When to use this pattern 
Follow this pattern when you are collecting gender identity for your service or program. Only ask for gender if you need it. Sometimes it’s more prudent to skip collecting this information altogether.

### What's the solution?
Present the user with the tools to accurately depict their gender identity. 

{:.site-component-section-title}
### Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col">
    <div class="do-dont">
      <div class="do-dont__do">
        <h4 class="do-dont__heading">
          {% include icon.html icon="check_circle" %}
          What to do
        </h4>
        <div class="do-dont__content">
          <ul>
            <li>Do support long text fields for gender identity. The language behind gender identity is constantly evolving.</li>
            <li>Do consider safety implications of the information provided. Regional and state laws are highly variable and may not adequately protect individuals from disclosure.</li>
            <li>Do be transparent about what you are asking for (for example, gender identity or sex).</li>
            <li>Do use inclusive language. Consider using “they” or “you” instead of “he” or “she.”</li>
            <li>Do use clear hint text to help users understand what type of information should be provided.</li>
          </ul> 
        </div>
      </div>
    </div>
  </div>
  <div class="tablet:grid-col">
    <div class="do-dont">
      <div class="do-dont__dont">
        <h4 class="do-dont__heading">
          {% include icon.html icon="cancel" %}
          What not to do
        </h4>
        <div class="do-dont__content">
          <ul>
            <li>Do not assume gender identity based on sex.</li>
            <li>Do not use <code>other</code> as a gender option. Instead use an open-ended text field.</li>
            <li>Do not limit the user's choice of gender. Not everyone will fit into a specific classification determined by the form designer.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview margin-top-2">
  <button class="usa-accordion__button" aria-controls="accordion-preview-02" aria-expanded="true"><h4 id="pattern-preview-gender">Pattern preview</h4></button>
  <div id="accordion-preview-02" class="usa-accordion__content">
    {% include patterns/gender.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code-02" aria-expanded="false"><h4 id="pattern-code-gender">Pattern code</h4></button>
  <div id="accordion-code-02" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      {% highlight text%}{% include patterns/gender.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/gender.html %}{% endhighlight %}
  </div>
</div>

#### Considerations

{:.usa-content-list}
- <strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all. Clearly explain the reason for asking for the information and what will be done to secure the user’s privacy. 
- <strong>Avoid using a controlled vocabulary.</strong> If you don’t need to enforce a controlled vocabulary of gender options, strongly consider letting the user self-identify using a single text field.

#### Usability guidance

{:.usa-content-list}
- <strong>Provide clear hint text.</strong> Some users may be unfamiliar with this question and unsure how to answer. Provide clear hint text, such as, "For example, man, woman, non-binary). Do allow users to opt out with a "Prefer not to answer" option.
- This pattern uses checkboxes. See [usability guidance for checkboxes]({{ site.baseurl }}/components/checkbox/#usability-guidance-checkbox).

#### Accessibility

{:.usa-content-list}
- <strong>Follow input guidance.</strong> These text fields should follow the accessibility [guidelines for all text inputs]({{ site.baseurl }}/components/text-input/). 
- <strong>These custom checkboxes are accessible.</strong> The custom checkbox component is accessible to screen readers because the default checkbox is moved off-screen with `position: absolute; left: -999em`.
- <strong>Use a semantic tag.</strong> The checkbox should have a semantic tag for the `id` attribute, and its corresponding label should have the same value in its `for` attribute.
- <strong>Customization.</strong> As you customize, make sure you follow [accessibility guidelines for form templates]({{ site.baseurl }}/templates/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/components/form/).

{:.site-component-name}
## Sex

### When to use this pattern 
Follow this pattern when you are collecting sex listed at birth as part of your service. Only ask for this information if you need it. Sometimes it’s more prudent to skip collecting this information altogether. 

### What's the solution?
Present the user with a controlled vocabulary to accurately depict sex listed at birth. 

{:.site-component-section-title}
### Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col">
    <div class="do-dont">
      <div class="do-dont__do">
        <h4 class="do-dont__heading">
          {% include icon.html icon="check_circle" %}
          What to do
        </h4>
        <div class="do-dont__content">
          <ul>
            <li>Do determine if you need to collect sex listed at birth and only use if the information is essential to the user's experience.</li>
            <li>Do provide a controlled vocabulary when asking for sex listed at birth (<code>male</code>, <code>female</code>, and <code>X</code>). </li>
            <li>Do be clear about why you are asking for the information.</li>
            <li>Do be transparent about what you are asking for. To some people gender and sex are synonymous, so ensure you use clear language.</li>
            <li>Do use fieldset and legend to group related radio buttons together, and clear labels and attributes on these form elements.</li>
          </ul> 
        </div>
      </div>
    </div>
  </div>
  <div class="tablet:grid-col">
    <div class="do-dont">
      <div class="do-dont__dont">
        <h4 class="do-dont__heading">
          {% include icon.html icon="cancel" %}
          What not to do
        </h4>
        <div class="do-dont__content">
          <ul>
            <li>Do not assume gender identity based on the user's sex.</li>
            <li>Do not include "prefer not to answer." If you are considering adding this option, then consider whether the question is needed at all.</li>
            <li>Do not combine gender identity and sex into a single question.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview margin-top-2">
  <button class="usa-accordion__button" aria-controls="accordion-preview-01" aria-expanded="true"><h4 id="pattern-preview-biological-sex">Pattern preview</h4></button>
  <div id="accordion-preview-01" class="usa-accordion__content">
    {% include patterns/biological-sex.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code-01" aria-expanded="false"><h4 id="pattern-code-biological-sex">Pattern code</h4></button>
  <div id="accordion-code-01" class="usa-accordion__content">
    <div class="usa-sr-only">
      {% highlight text%}{% include patterns/biological-sex.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/biological-sex.html %}{% endhighlight %}
  </div>
</div>

#### Considerations

{:.usa-content-list}
- <strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all. Clearly explain the reason for asking for the information and what will be done to secure the user’s privacy. 
- <strong>Be specific about the information you are requesting.</strong> Clearly state the context, such as, "Please enter your sex as it appears on your birth certificate." so that users can successfully provide the information required. Because gender and sex are often used synonymously, users have difficulty determining which information is being requested.

#### Accessibility

{:.usa-content-list}
- This pattern uses radio buttons. See [usability guidance for radio buttons]({{ site.baseurl }}/components/radio-buttons/#usability-guidance-radio-buttons). 
- <strong>Use fieldset and legend.</strong> Group related radio buttons together with `<fieldset>` and describe the group with `<legend>`.
- <strong>Use proper labels and attributes.</strong> Each radio button should have a `<label>`. Associate the two by matching the label's `for` attribute to the input's `id` attribute.
- <strong>Customization.</strong> As you customize, make sure you follow [accessibility guidelines for form templates]({{ site.baseurl }}/templates/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/components/form/).

{:.site-component-section-title}
## Provide pattern feedback
Help update and improve this pattern by sharing your feedback

{:.usa-content-list}
- <a href="https://github.com/uswds/uswds/discussions">Join Github discussion</a> about the Gender identity and sex pattern.
- <a href="https://github.com/uswds/uswds/issues">View open issues</a>  for the Gender identity and sex pattern.
- <a href="mailto:uswds@gsa.gov">Contact the USWDS team</a> for more support with the Gender identity and sex pattern.

{:.site-component-section-title}
## Related components, patterns, and templates

{:.usa-content-list}
- <a href="{{ site.baseurl }}/components/checkbox/">Checkbox</a> component
- <a href="{{ site.baseurl }}/components/radio-buttons/">Radio buttons</a> component
- <a href="{{ site.baseurl }}/components/text-input/">Text input</a> component
- <a href="{{ site.baseurl }}/patterns/create-a-user-profile/pronouns/">Pronouns</a> pattern

{:.site-component-section-title}
## References
- Collecting sexual orientation and gender identity information. (March 9, 2022) Retrieved on July 20, 2022, from [https://www.cdc.gov/hiv/clinicians/transforming-health/health-care-providers/collecting-sexual-orientation.html](https://www.cdc.gov/hiv/clinicians/transforming-health/health-care-providers/collecting-sexual-orientation.html)
- Federal Interagency Working Group on Improving Measurement of Sexual Orientation and Gender Identity in Federal Surveys (IWG). Current Measures of Sexual Orientation and Gender Identity in Federal Surveys - 2016a. (August 2016) Retrieved on October 31, 2022, from [https://www.fcsm.gov/assets/files/docs/current_measures_20160812.pdf](https://www.fcsm.gov/assets/files/docs/current_measures_20160812.pdf)
- Federal Interagency Working Group on Improving Measurement of Sexual Orientation and Gender Identity in Federal Surveys (IWG). Evaluations of Sexual Orientation and Gender Identity Survey Measures: What Have We Learned? - 2016b. (September 23, 2016) Retrieved on October 31, 2022, from [https://www.fcsm.gov/assets/files/docs/Evaluations_of_SOGI_Questions_20160923.pdf](https://www.fcsm.gov/assets/files/docs/Evaluations_of_SOGI_Questions_20160923.pdf)
- Federal Interagency Working Group on Improving Measurement of Sexual Orientation and Gender Identity in Federal Surveys (IWG). Toward a Research Agenda for Measuring Sexual Orientation and Gender Identity in Federal Surveys: Findings, Recommendations, and Next Steps - 2016c. (October 20, 2016) Retrieved on October 31, 2022, from [https://www.fcsm.gov/assets/files/docs/SOGI_Research_Agenda_Final_Report_20161020.pdf](https://www.fcsm.gov/assets/files/docs/SOGI_Research_Agenda_Final_Report_20161020.pdf)
- Federal Interagency Working Group on Improving Measurement of Sexual Orientation and Gender Identity in Federal Surveys (IWG). (August 2020). Updates of Terminology of Sexual Orientation and Gender Identity Survey Measures - FCSM 20-03. Retrieved on October 31, 2022, from [https://www.fcsm.gov/assets/files/docs/FCSM_SOGI_Terminology_FY20_Report_FINAL.pdf](https://www.fcsm.gov/assets/files/docs/FCSM_SOGI_Terminology_FY20_Report_FINAL.pdf)
- Federal Interagency Working Group on Improving Measurement of Sexual Orientation and Gender Identity in Federal Surveys (IWG). Why Do Federal Agencies Ask About Sexual Orientation and Gender Identity (SOGI) on Surveys? FCSM-21-01. (June 2021) Retrieved on October 31, 2022, from [https://www.fcsm.gov/assets/files/docs/FCSM%2021%2001%20062221.pdf](https://www.fcsm.gov/assets/files/docs/FCSM%2021%2001%20062221.pdf)
- Gender or sex. (n.d.) Retrieved on July 15, 2022 from [https://design-system.service.gov.uk/patterns/gender-or-sex/](https://design-system.service.gov.uk/patterns/gender-or-sex/) 
- Gender terms you may not know. (June 17, 2022) Retrieved on July 15, 2022, from [https://www.dictionary.com/e/gender-terms-you-may-not-know/](https://www.dictionary.com/e/gender-terms-you-may-not-know/)
- Interagency Technical Working Group on Sexual Orientation and Gender Identity Items in the Household Pulse Survey: Report and Recommendations. (May 25, 2021) Retrieved on October 31, 2022, from [https://omb.report/icr/202106-0607-003/doc/112605500](https://omb.report/icr/202106-0607-003/doc/112605500)
- Nonbinary airline passenger tickets. (June 22, 2022) Retrieved on July 15, 2022, from [https://www.nytimes.com/2022/06/22/travel/nonbinary-airline-passengers-tickets.html](https://www.nytimes.com/2022/06/22/travel/nonbinary-airline-passengers-tickets.html)
- Patient centered care for transgender people: recommended practices for health care settings. (n.d.) Retrieved on November 4, 2022, from [https://www.cdc.gov/hiv/clinicians/transforming-health/health-care-providers/affirmative-care.html](https://www.cdc.gov/hiv/clinicians/transforming-health/health-care-providers/affirmative-care.html)
- Social Security implements self-attestation of sex marker in Social Security Number records. (October 19, 2022) Retrieved on October 24, 2022, from [https://www.ssa.gov/news/press/releases/2022/#10-2022-3](https://www.ssa.gov/news/press/releases/2022/#10-2022-3)
- X gender marker available on U.S. Passports starting April 11. (March 31, 2022) Retrieved on July 20, 2022, from [https://www.state.gov/x-gender-marker-available-on-u-s-passports-starting-april-11/](https://www.state.gov/x-gender-marker-available-on-u-s-passports-starting-april-11/)

{:.site-component-section-title}
## Disclaimer 
Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.