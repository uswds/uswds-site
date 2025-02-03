---
title: Gender identity and sex
story: Help a user select their gender identity and sex
permalink: /patterns/create-a-user-profile/gender-identity-and-sex/
layout: pattern
category: Patterns
sub-category: Create a user profile
lead: This pattern helps users to provide gender identity and sex information in an accurate and respectful manner. Gender identity and sex are often integral to an individual’s sense of self, and several federal agencies and working groups are striving to define a meaningful, inclusive way to collect gender identity and sex information when it is needed.
changelog:
  key: pattern-user-profile-gender-identity-and-sex
alert: true
alert-class: warning
alert-heading: "This pattern is affected by a recent change in law, policy, or regulation."
alert-content: "The Gender Identity and Sex pattern is affected by the executive order [Defending Women from Gender Ideology Extremism and
Restoring Biological Truth to the Federal Government](https://www.whitehouse.gov/presidential-actions/2025/01/defending-women-from-gender-ideology-extremism-and-restoring-biological-truth-to-the-federal-government/), signed on January 20, 2025. Expect changes to this pattern in the near future as we adapt to these new requirements."
---

{:.site-component-section-title}
## About these patterns

### Background

Services collect gender identity information to let individuals tell us who they are: how they should be identified and how they wish to interact with the world. Gendered experiences are complex and vary widely. Gender is a social construct and gender identity can be an integral expression of a person's sense of self.

Services collect sex information to match documents for identity proofing purposes, on certain statistical surveys, and to provide biological information in a clinical context. “Sex listed at birth” or “sex assigned at birth” is what it says on a person's original birth certificate. “Legal sex” is what it says on any qualifying legal document. “Non-binary” is typically used when referring to gender identity, but many states now allow terms like `non-binary`, `X`, or `unspecified` on birth certificates.

While the sex listed on a person's birth certificate or driver's license is often used as part of validating their identity, gender identity is generally more important for ensuring respectful and inclusive policies, interactions, and communication.

Historically, the federal government has asked people to choose between male and female. Recently, agencies and programs have been moving toward providing more options, reflecting the fact that a person's gender identity may not reflect the sex they were assigned at birth, and that sex is not always unambiguously male or female.

As one example, in April 2022, the U.S. Department of State updated [Form DS-11](https://eforms.state.gov/Forms/ds11.pdf) and began allowing people to self-attest and specify `M` (male), `F` (female), or `X` on their passports. The Department of State defines `X` as “Unspecified or another gender identity” on Form DS-11. The form collects this information as `Gender` but it is displayed on a passport as `Sex`. More recently, [Executive Order 14075](https://bidenwhitehouse.archives.gov/briefing-room/presidential-actions/2022/06/15/executive-order-on-advancing-equality-for-lesbian-gay-bisexual-transgender-queer-and-intersex-individuals/) Advancing Equality for Lesbian, Gay, Bisexual, Transgender, Queer, and Intersex Individuals makes specific calls for improved, responsible collection of sexual orientation and gender identity information.

The White House's [Office of Management and Budget](https://www.whitehouse.gov/omb/), [Federal Committee on Statistical Methodology](https://www.fcsm.gov/) interagency committee, and [Centers for Disease Control and Prevention](https://www.cdc.gov/) are just some of the federal agencies and programs working to define a meaningful, inclusive way to collect gender identity and sex information when it is needed. We were especially interested in the way CDC's [HIV Nexus Clinician Resources](https://snapshot2024.cdc.gov/hiv/clinicians/transforming-health/health-care-providers/collecting-sexual-orientation.html) articulates the importance of asking two separate questions to ensure healthcare providers can provide patient-centered, high quality care: `current gender identity`, and `sex listed at birth`. A multi-question approach is also advocated for in [Recommendations on the best practices for the collection of
sexual orientation and gender identity data on federal statistical surveys](https://web.archive.org/web/20250118020808/https://www.whitehouse.gov/wp-content/uploads/2023/01/SOGI-Best-Practices.pdf) released in January 2023.

This is an evolving space, and language recommendations are also evolving. In this pattern we've used the term `gender identity` to capture the way a person wishes to be represented, vs. gender as a construct. We've also used the term `sex`. For specific use cases, a more specific label may be correct, like `Sex listed at birth` or `Legal sex`. This language, in particular, should be evaluated for your specific program needs.

### What problems do these patterns solve?

Gender and sex are often used synonymously. Many users struggle to provide gender identity information that best represents them. An overwhelming number of choices for gender identity can be as alienating as too limited a set of provided options.

{:.site-component-name#gender-identity-section}
## Gender identity

### When to use this pattern

Follow this pattern when you are collecting gender identity for your service or program. Only ask for gender identity if you need it. Sometimes it’s more prudent to skip collecting this information altogether.

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
            <li>Do collect gender identity data when you are collecting other general demographic information like race, ethnicity, or disability status.</li>
            <li>Do support long text fields for gender identity. The language behind gender identity is constantly evolving.</li>
            <li>Do include a "prefer not to answer" option.</li>
            <li>Do consider safety implications of the information provided. Regional and state laws are highly variable and may not adequately protect individuals from disclosure.</li>
            <li>Do provide helper text that explains why you are asking for this data and who it will be shared with.</li>
            <li>Do be transparent about what you are asking for (for example, gender identity or sex).</li>
            <li>Do use inclusive language. Consider using “they” or “you” instead of “he” or “she.”</li>
            <li>Do use clear hint text to help users understand what type of information should be provided.</li>
            <li>When collecting both gender identity and sex, gender identity should precede sex.</li>
            <li>Use tested translations for labels and hint text when delivering multilingual surveys or forms.</li>
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
            <li>Do not limit the user's choice of gender identity. Not everyone will fit into a specific classification determined by the form designer.</li>
            <li>Do not combine gender identity and sex into a single question.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview margin-top-2">
  <h4 id="pattern-preview-gender" class="usa-accordion__heading site-accordion-heading">
    <button type="button" class="usa-accordion__button" aria-controls="accordion-preview-02" aria-expanded="true">
      Pattern preview
    </button>
  </h4>
  <div id="accordion-preview-02" class="usa-accordion__content">
    {% include patterns/gender-identity.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <h4 id="pattern-code-gender" class="usa-accordion__heading site-accordion-heading">
    <button type="button" class="usa-accordion__button" aria-controls="accordion-code-02" aria-expanded="false">
      Pattern code
    </button>
  </h4>
  <div id="accordion-code-02" class="usa-accordion__content highlight-code copy-code">
    <div class="usa-sr-only">
      {% highlight text%}{% include patterns/gender-identity.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/gender-identity.html %}{% endhighlight %}
  </div>
</div>

#### Considerations

{:.usa-content-list}
- **Confirm you need this information.** As with all personal information, consider whether you need to collect it at all. Clearly explain the reason for asking for the information and what will be done to secure the user’s privacy and safety.
- **Avoid using a controlled vocabulary.** If you don’t need to enforce a controlled vocabulary of gender identity options, strongly consider letting the user self-identify using a single text field.

#### Usability guidance

{:.usa-content-list}
- **Provide clear hint text.** Some users may be unfamiliar with this question and unsure how to answer. Provide clear hint text, such as, "For example, man, woman, non-binary." Do allow users to opt out with a "Prefer not to answer" option.
- This pattern uses checkboxes. See [usability guidance for checkboxes]({{ site.baseurl }}/components/checkbox/#usability-guidance-checkbox).

#### Accessibility

{:.usa-content-list}
- **Follow input guidance.** These text fields should follow the accessibility [guidelines for all text inputs]({{ site.baseurl }}/components/text-input/).
- **These custom checkboxes are accessible.** The custom checkbox component is accessible to screen readers because the default checkbox is moved off-screen with `position: absolute; left: -999em`.
- **Use a semantic tag.** The checkbox should have a semantic tag for the `id` attribute, and its corresponding label should have the same value in its `for` attribute.
- **Customization.** As you customize, make sure you follow [accessibility guidelines for form templates]({{ site.baseurl }}/templates/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/components/form/).

{:.site-component-name}
## Sex

### When to use this pattern

Services collect sex information to match documents for identity proofing purposes, on certain statistical surveys, and to provide biological information in a clinical context. Only ask for this information if you need it. Even for identity proofing, sex data is not always needed. Asking for gender identity instead of sex is generally more important for ensuring respectful communication.

### What's the solution?

Know what information you need and ask for it with specificity. If you are collecting sex information to match documents for identity proofing, be clear about whether you need the sex marker listed on an original birth certificate (“Sex listed at birth”) or the sex marker listed on any qualifying legal document (“Legal sex”).

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
            <li>Do determine if you need to collect sex data and only use if the information is essential to the user's experience. Services collect sex information to match documents for identity proofing purposes, on certain statistical surveys, or to provide biological information in a clinical context.</li>
            <li>Do provide a controlled vocabulary when asking for sex listed at birth or legal sex (<code>Male</code>, <code>Female</code>, and <code>X</code>). Use helper text to explain that <code>X</code> should be used for any marker that is neither male nor female.</li>
            <li>Do provide helper text that explains why you are asking for this data and who it will be shared with.</li>
            <li>Do be transparent about what you are asking for. To some people gender and sex are synonymous, so use clear language.</li>
            <li>Do use fieldset and legend to group related radio buttons together, and clear labels and attributes on these form elements.</li>
            <li>When collecting both gender identity and sex, gender identity should precede sex.</li>
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
            <li>Do not include “prefer not to answer.” If you are considering adding this option, then consider whether the question is needed at all.</li>
            <li>Do not combine gender identity and sex into a single question.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview margin-top-2">
  <h4 id="pattern-preview-sex" class="usa-accordion__heading site-accordion-heading">
    <button type="button" class="usa-accordion__button" aria-controls="accordion-preview-01" aria-expanded="true">
      Pattern preview
    </button>
  </h4>
  <div id="accordion-preview-01" class="usa-accordion__content">
    {% include patterns/sex.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <h4 id="pattern-code-sex" class="usa-accordion__heading site-accordion-heading">
    <button type="button" class="usa-accordion__button" aria-controls="accordion-code-01" aria-expanded="false">
      Pattern code
    </button>
  </h4>
  <div id="accordion-code-01" class="usa-accordion__content copy-code">
    <div class="usa-sr-only">
      {% highlight text%}{% include patterns/sex.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/sex.html %}{% endhighlight %}
  </div>
</div>

#### Considerations

{:.usa-content-list}
- **Confirm you need this information.** As with all personal information, consider whether you need to collect it at all. Clearly explain the reason for asking for the information and what will be done to secure the user’s privacy and safety.
- **Be specific about the information you are requesting.** Clearly state the context, such as, “Please enter the sex that appears on your driver's license, state ID, passport, or passport card.” so that users can successfully provide the information required.

#### Accessibility

{:.usa-content-list}
- This pattern uses radio buttons. See [usability guidance for radio buttons]({{ site.baseurl }}/components/radio-buttons/#usability-guidance-radio-buttons).
- **Use fieldset and legend.** Group related radio buttons together with `<fieldset>` and describe the group with `<legend>`.
- **Use proper labels and attributes.** Each radio button should have a `<label>`. Associate the two by matching the label's `for` attribute to the input's `id` attribute.
- **Customization.** As you customize, make sure you follow [accessibility guidelines for form templates]({{ site.baseurl }}/templates/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/components/form/).


{:.site-component-section-title}
## Related components, patterns, and templates

{:.usa-content-list}
- [Checkbox]({{ site.baseurl }}/components/checkbox/) component
- [Radio buttons]({{ site.baseurl }}/components/radio-buttons/) component
- [Text input]({{ site.baseurl }}/components/text-input/) component
- [Pronouns]({{ site.baseurl }}/patterns/create-a-user-profile/pronouns/) pattern

{:.site-component-section-title}
## References

- Collecting sexual orientation and gender identity information. (March 9, 2022) Retrieved on July 20, 2022, from <https://snapshot2024.cdc.gov/hiv/clinicians/transforming-health/health-care-providers/collecting-sexual-orientation.html>
- Federal Interagency Working Group on Improving Measurement of Sexual Orientation and Gender Identity in Federal Surveys (IWG). Current Measures of Sexual Orientation and Gender Identity in Federal Surveys - 2016a. (August 2016) Retrieved on October 31, 2022, from `https://www.fcsm.gov/assets/files/docs/current_measures_20160812.pdf`. [This link is no longer active. [Archived copy of Current Measures of Sexual Orientation and Gender Identity in Federal Surveys](https://web.archive.org/web/20250124115337/https://www.fcsm.gov/assets/files/docs/current_measures_20160812.pdf)]
- Federal Interagency Working Group on Improving Measurement of Sexual Orientation and Gender Identity in Federal Surveys (IWG). Evaluations of Sexual Orientation and Gender Identity Survey Measures: What Have We Learned? - 2016b. (September 23, 2016) Retrieved on October 31, 2022, from <https://www.fcsm.gov/assets/files/docs/Evaluations_of_SOGI_Questions_20160923.pdf>
- Federal Interagency Working Group on Improving Measurement of Sexual Orientation and Gender Identity in Federal Surveys (IWG). Toward a Research Agenda for Measuring Sexual Orientation and Gender Identity in Federal Surveys: Findings, Recommendations, and Next Steps - 2016c. (October 20, 2016) Retrieved on October 31, 2022, from `https://www.fcsm.gov/assets/files/docs/SOGI_Research_Agenda_Final_Report_20161020.pdf`. [This link is no longer active. [Archived copy of Toward a Research Agenda for Measuring Sexual Orientation and Gender Identity in Federal Surveys: Findings, Recommendations, and Next Steps](https://web.archive.org/web/20250124115337/https://www.fcsm.gov/assets/files/docs/current_measures_20160812.pdf)]
- Federal Interagency Working Group on Improving Measurement of Sexual Orientation and Gender Identity in Federal Surveys (IWG). (August 2020). Updates of Terminology of Sexual Orientation and Gender Identity Survey Measures - FCSM 20-03. Retrieved on October 31, 2022, from `https://www.fcsm.gov/assets/files/docs/FCSM_SOGI_Terminology_FY20_Report_FINAL.pdf`[This link is no longer active. [Archived copy of Updates of Terminology of Sexual Orientation and Gender Identity Survey Measures](https://web.archive.org/web/20250124085205/https://www.fcsm.gov/assets/files/docs/FCSM_SOGI_Terminology_FY20_Report_FINAL.pdf)]

- Federal Interagency Working Group on Improving Measurement of Sexual Orientation and Gender Identity in Federal Surveys (IWG). Why Do Federal Agencies Ask About Sexual Orientation and Gender Identity (SOGI) on Surveys? FCSM-21-01. (June 2021) Retrieved on October 31, 2022, from <https://www.fcsm.gov/assets/files/docs/FCSM%2021%2001%20062221.pdf>
- Gender or sex. (n.d.) Retrieved on July 15, 2022 from <https://design-system.service.gov.uk/patterns/gender-or-sex/>
- Gender terms you may not know. (June 17, 2022) Retrieved on July 15, 2022, from <https://www.dictionary.com/e/gender-terms-you-may-not-know/>
- ID documents center. (November 2021) Retrieved on December 9, 2022, from <https://transequality.org/documents>
- Interagency Technical Working Group on Sexual Orientation and Gender Identity Items in the Household Pulse Survey: Report and Recommendations. (May 25, 2021) Retrieved on October 31, 2022, from <https://omb.report/icr/202106-0607-003/doc/112605500>
- Nonbinary airline passenger tickets. (June 22, 2022) Retrieved on July 15, 2022, from <https://www.nytimes.com/2022/06/22/travel/nonbinary-airline-passengers-tickets.html>
- Patient centered care for transgender people: recommended practices for health care settings. (n.d.) Retrieved on November 4, 2022, from <https://snapshot2024.cdc.gov/hiv/clinicians/transforming-health/health-care-providers/affirmative-care.html>
- Recommendations on the best practices for the collection of
sexual orientation and gender identity data on federal statistical surveys. (January 2023) Retrieved on January 27, 2023, from `https://www.whitehouse.gov/wp-content/uploads/2023/01/SOGI-Best-Practices.pdf` [This link is no longer active. [Archived copy on whitehouse.gov](https://web.archive.org/web/20250118020808/https://www.whitehouse.gov/wp-content/uploads/2023/01/SOGI-Best-Practices.pdf)]
- Social Security implements self-attestation of sex marker in Social Security Number records. (October 19, 2022) Retrieved on October 24, 2022, from <https://www.ssa.gov/news/press/releases/2022/#10-2022-3>
- X gender marker available on U.S. Passports starting April 11. (March 31, 2022) Retrieved on July 20, 2022, from `https://www.state.gov/x-gender-marker-available-on-u-s-passports-starting-april-11/` [This link is no longer active. [Archived copy on state.gov](https://2021-2025.state.gov/x-gender-marker-available-on-u-s-passports-starting-april-11/)]

{:.site-component-section-title}
## Disclaimer

Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.
