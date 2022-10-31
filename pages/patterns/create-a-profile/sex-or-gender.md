---
title: Biological sex or gender
story: Help a user select their biological sex or gender identity
permalink: /patterns/create-a-profile/sex-or-gender/
layout: pattern
category: Patterns
sub-category: Create a user profile
lead: This pattern helps users to provide gender identity or biological sex information in an accurate and respectful manner. Sex and gender identity are often integral to an individual’s sense of self, and several federal agencies and working groups are striving to define a meaningful, inclusive way to collect biological sex and gender information when it is needed.
---
<div></div>

{:.border-top-05.border-primary.padding-top-2.margin-bottom-2}

## Background

Sex assigned at birth is a biological attribute. In the digital space, male and female are often the only provided options, but there are instances where an individual’s biological sex is not unambiguously male or female.

Gender is a social construct. Gender identity is an expression of a user’s identity and is integral to their sense of self. There is a wide variety of gendered experiences in the world.

Historically, the federal government has asked people to choose between male and female based on the biological sex they were assigned at birth. Recently, agencies and programs have been moving toward providing more options, reflecting the fact that biological sex is not always unambiguously male or female, and that an individual’s gender may not reflect the biological sex they were assigned at birth.

In April 2022, the U.S. Department of State began allowing people to specify “X,” along with “male” or “female” on their passports. (Note: “non-binary” is generally used only when referring to gender identity. It is being used by the Department of State’s changes in their recording of sex, defining `X` as `Unspecified or another gender identity` including non-binary, intersex, and gender non-conforming individuals.) While biological sex is often used as part of validating identity, gender identity is generally more important for ensuring respectful communication. 

The [Office of Management and Budget](https://www.whitehouse.gov/omb/) [Federal Committee on Statistical Methodology](https://www.fcsm.gov/), and the [Centers for Disease Control and Prevention](https://www.cdc.gov/) are just some of the federal agencies and programs working to define a meaningful, inclusive way to collect biological sex and gender information when it is needed. This is a quickly evolving space, and recommendations will also evolve.

## What problem does this solve?
Gender and biological sex are often used synonymously. Users have struggled to provide accurate information that best identifies and/or represents them within a limited or overwhelming amount of provided options.

{:.site-component-section-title}
## Biological sex
 
## When to use this pattern 
Follow this pattern when you are collecting biological sex as part of your service. Only ask for biological sex if you need it. Sometimes it’s more prudent to skip collecting this information altogether. 

## What's the solution
Present the user with a controlled vocabulary to accurately depict their biological sex. 

## Guidance
### When you need to collect biological sex

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do determine if you need to collect biological sex and only use if the information is essential to the user's experience.</li>
            <li>Do only provide biological options when asking for biological sex (<code>male</code>, <code>female</code>, and <code>X</code>). </li>
            <li>Do be clear about why you are asking for the information.</li>
            <li>Do be transparent about what you are asking for. To some people gender and biological sex are synonymous, so ensure you use clear language.</li>
          </ul> 
        </div>
      </div>
    </div>
  </div>
  <div class="tablet:grid-col-5">
    <div class="do-dont__dont">
    <h3 class="do-dont__heading">What not to do</h3>
      <div class="do-dont__content">
          <ul>
            <li>Do not assume gender identity based on the user's biological sex.</li>
            <li>Do not include "prefer not to answer." If you are considering adding this option, then consider whether the question is needed at all.</li>
            <li>Do not combine gender identity and biological sex into a single field.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all. Clearly explain the reason for asking for the information and what will be done to secure the user’s privacy. 

### What to use 
<strong>If biological sex information is used for identity validation.</strong> Be specific about the information you are requesting. Clearly state the context, such as, "Please enter your biological sex as it appears on your birth certificate." so that users can successfully provide the information required. Gender and biological sex are often used synonymously and users have difficulty determining which information is being requested.

## Usability guidance

This pattern uses radio buttons. See [usability guidance for radio buttons]({{ site.baseurl }}/components/radio-buttons/#usability-guidance-radio-buttons). 

## Accessibility

<strong>Use fieldset and legend.</strong> Group related radio buttons together with `<fieldset>` and describe the group with `<legend>`.

<strong>Use proper labels and attributes.</strong> Each radio button should have a `<label>`. Associate the two by matching the label's `for` attribute to the input's `id` attribute.

<strong>Customization.</strong> As you customize, make sure you follow [accessibility guidelines for form templates]({{ site.baseurl }}/templates/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/components/form/).

## Components used in this pattern

<div class="usa-card-group flex-row margin-top-2">
  <div
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit radio button component"
  data-meta="Visit radio button component">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Radio button</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>Radio buttons allow users to select exactly one choice from a group.</p>
        <a href="{{ site.baseurl }}/components/radio-buttons/">Visit Radio buttons</a>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview-01" aria-expanded="true"><h2 id="pattern-preview-biological-sex">Pattern preview</h2></button>
  <div id="accordion-preview-01" class="usa-accordion__content">
    {% include patterns/biological-sex.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code-01" aria-expanded="false"><h2 id="pattern-code-biological-sex">Pattern code</h2></button>
  <div id="accordion-code-01" class="usa-accordion__content">
    <div class="usa-sr-only">
      {% highlight text%}{% include patterns/biological-sex.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/biological-sex.html %}{% endhighlight %}
  </div>
</div>


{:.site-component-section-title}
## Gender 
 
## When to use this pattern 
Follow this pattern when you are collecting gender identity for your service or program. Only ask for gender if you need it, such as in a health care environment. Sometimes it’s more prudent to skip collecting this information altogether.

## What's the solution
Present the user with the tools to accurately depict their gender identity. 

## Guidance
### When you need to collect gender

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do support long text fields for gender identity. The language behind gender identity is constantly evolving.</li>
            <li>Do consider safety implications of the information provided. Regional and state laws are highly variable and may not adequately protect individuals from disclosure.</li>
            <li>Do be transparent about what you are asking for (for example, gender identity or biological sex).</li>
            <li>Do use inclusive language. Consider using “they” or “you” instead of “he” or “she.”</li>
            <li>Do use hint text to help users understand what type of information should be provided.</li>
          </ul> 
        </div>
      </div>
    </div>
  </div>
  <div class="tablet:grid-col-5">
    <div class="do-dont__dont">
    <h3 class="do-dont__heading">What not to do</h3>
      <div class="do-dont__content">
          <ul>
            <li>Do not assume gender identity based on biological sex.</li>
            <li>Do not use <code>other</code> as a gender option. Instead use an open-ended text field.</li>
            <li>Do not limit the user's choice of gender. Not everyone will fit into a specific classification determined by the form designer.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all. Clearly explain the reason for asking for the information and what will be done to secure the user’s privacy. 

### What to use 
<strong>Avoid using a controlled vocabulary.</strong> If you don’t need to enforce a controlled vocabulary of gender options, strongly consider letting the user self-identify using a single text field.

## Usability guidance

<strong>Provide clear hint text.</strong> Some users may be unfamiliar with this question and unsure how to answer. Provide clear hint text, such as, "For example, man, woman, non-binary). Do allow users to opt out with a "Prefer not to answer" option.

This pattern uses checkboxes. See [usability guidance for checkboxes]({{ site.baseurl }}/components/checkbox/#usability-guidance-checkbox).

## Accessibility

<strong>Follow input guidance.</strong> These text fields should follow the accessibility [guidelines for all text inputs]({{ site.baseurl }}/components/text-input/). 

<strong>Do not use a fieldset and legend for a single checkbox.</strong> Only groups of related checkboxes should be contained within a `<fieldset>` and `<legend>`.

<strong>These custom checkboxes are accessible.</strong> The custom checkbox component is accessible to screen readers because the default checkbox is moved off-screen with `position: absolute; left: -999em`.

<strong>Use a semantic tag.</strong> The checkbox should have a semantic tag for the `id` attribute, and its corresponding label should have the same value in its `for` attribute.

<strong>Customization.</strong> As you customize, make sure you follow [accessibility guidelines for form templates]({{ site.baseurl }}/templates/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/components/form/).

## Components used in this pattern

<div class="usa-card-group flex-row margin-top-2">
  <div
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit text input component"
  data-meta="Visit text input component">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Text input</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.</p>
        <a href="/components/text-input/">Visit Text input</a>
      </div>
    </div>
  </div>
  <div
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit checkbox component"
  data-meta="Visit checkbox component">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Checkbox</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>Checkboxes allow users to select one or more options from a list.</p>
        <a href="/components/checkbox/">Visit Checkbox</a>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview-02" aria-expanded="true"><h2 id="pattern-preview-gender">Pattern preview</h2></button>
  <div id="accordion-preview-02" class="usa-accordion__content">
    {% include patterns/gender.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code-02" aria-expanded="false"><h2 id="pattern-code-gender">Pattern code</h2></button>
  <div id="accordion-code-02" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      {% highlight text%}{% include patterns/gender.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/gender.html %}{% endhighlight %}
  </div>
</div>

## References
- Collecting sexual orientation and gender identity information. (March 9, 2022) Retrieved on July 20, 2022 from [https://www.cdc.gov/hiv/clinicians/transforming-health/health-care-providers/collecting-sexual-orientation.html](https://www.cdc.gov/hiv/clinicians/transforming-health/health-care-providers/collecting-sexual-orientation.html)
- Current measures of sexual orientation and gender identity in federal surveys. (August 2016) Retrieved on August 4, 2022, from [https://nces.ed.gov/FCSM/pdf/buda5.pdf](https://nces.ed.gov/FCSM/pdf/buda5.pdf)
- Federal Interagency Working Group on Improving Measurement of Sexual Orientation and Gender Identity in Federal Surveys (IWG). (August 2016)  Current Measures of Sexual Orientation and Gender Identity in Federal Surveys - 2016a. Retrieved on October 31, 2022 from [https://www.fcsm.gov/assets/files/docs/current_measures_20160812.pdf](https://www.fcsm.gov/assets/files/docs/current_measures_20160812.pdf)
- Federal Interagency Working Group on Improving Measurement of Sexual Orientation and Gender Identity in Federal Surveys (IWG). (September 23, 2016)  Evaluations of Sexual Orientation and Gender Identity Survey Measures: What Have We Learned? - 2016b. Retrieved on October 31, 2022 from
[https://www.fcsm.gov/assets/files/docs/Evaluations_of_SOGI_Questions_20160923.pdf](https://www.fcsm.gov/assets/files/docs/Evaluations_of_SOGI_Questions_20160923.pdf)
- Federal Interagency Working Group on Improving Measurement of Sexual Orientation and Gender Identity in Federal Surveys (IWG). (October 20, 2016) Toward a Research Agenda for Measuring Sexual Orientation and Gender Identity in Federal Surveys: Findings, Recommendations, and Next Steps - 2016c. Retrieved on October 31, 2022 from [https://www.fcsm.gov/assets/files/docs/SOGI_Research_Agenda_Final_Report_20161020.pdf](https://www.fcsm.gov/assets/files/docs/SOGI_Research_Agenda_Final_Report_20161020.pdf)
- Federal Interagency Working Group on Improving Measurement of Sexual Orientation and Gender Identity in Federal Surveys (IWG). (August 2020). Updates of Terminology of Sexual Orientation and Gender Identity Survey Measures. FCSM 20-03. Retrieved on October 31, 2022 from [https://www.fcsm.gov/assets/files/docs/FCSM_SOGI_Terminology_FY20_Report_FINAL.pdf](https://www.fcsm.gov/assets/files/docs/FCSM_SOGI_Terminology_FY20_Report_FINAL.pdf)
- Federal Interagency Working Group on Improving Measurement of Sexual Orientation and Gender Identity in Federal Surveys (IWG). (June 2021) Why Do Federal Agencies Ask About Sexual Orientation and Gender Identity (SOGI) on Surveys? FCSM-21-01. Retrieved on October 31, 2022 from [https://www.fcsm.gov/assets/files/docs/FCSM%2021%2001%20062221.pdf](https://www.fcsm.gov/assets/files/docs/FCSM%2021%2001%20062221.pdf)
- Gender or sex. (n.d.) Retrieved on July 15, 2022, from [https://design-system.service.gov.uk/patterns/gender-or-sex/](https://design-system.service.gov.uk/patterns/gender-or-sex/) 
- Gender terms you may not know. (June 17, 2022) Retrieved on July 15, 2022, from [https://www.dictionary.com/e/gender-terms-you-may-not-know/](https://www.dictionary.com/e/gender-terms-you-may-not-know/)
- Interagency Technical Working Group on Sexual Orientation and Gender Identity Items in the Household Pulse Survey: Report and Recommendations. (May 25, 2021) Retrieved on October 31, 2022 from [https://omb.report/icr/202106-0607-003/doc/112605500](https://omb.report/icr/202106-0607-003/doc/112605500)
- Nonbinary airline passenger tickets. (June 22, 2022) Retrieved on July 15, 2022, from [https://www.nytimes.com/2022/06/22/travel/nonbinary-airline-passengers-tickets.html](https://www.nytimes.com/2022/06/22/travel/nonbinary-airline-passengers-tickets.html)
- Sex and gender identity. (n.d.) Retrieved August 1, 2022, from [https://www.plannedparenthood.org/learn/gender-identity/sex-gender-identity](https://www.plannedparenthood.org/learn/gender-identity/sex-gender-identity)
- Social Security implements self-attestation of sex marker in Social Security Number records. (October 19, 2022) Retrieved on October 24, 2022 from [https://www.ssa.gov/news/press/releases/2022/#10-2022-3](https://www.ssa.gov/news/press/releases/2022/#10-2022-3)
- Updates on terminology of sexual orientation and gender identity survey measures. (August 2020) Retrieved on October 24, 2022 from [https://nces.ed.gov/FCSM/pdf/FCSM_SOGI_Terminology_FY20_Report_FINAL.pdf](https://nces.ed.gov/FCSM/pdf/FCSM_SOGI_Terminology_FY20_Report_FINAL.pdf)
- X gender marker available on U.S. Passports starting April 11. (March 31, 2022) Retrieved on July 20, 2022, from [https://www.state.gov/x-gender-marker-available-on-u-s-passports-starting-april-11/](https://www.state.gov/x-gender-marker-available-on-u-s-passports-starting-april-11/)

## Changelog
- Published November 4, 2022

Disclaimer: Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.