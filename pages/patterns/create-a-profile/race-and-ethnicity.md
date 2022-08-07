---
title: Race and ethnicity
permalink: /patterns/create-a-profile/race-and-ethnicity/
layout: styleguide
category: Patterns
lead: The race and ethnicity pattern allows users to provide race and ethnicity information in the most accurate and respectful manner possible. Race and ethnicity are often integral to an individual’s sense of self, but they are complex topics; there is no generally accepted agreement that race is a real, biological attribute. Race and ethnicity can, however, be helpful information in assessing the civil rights impact of programs and services, and this data is sometimes a required reporting element. 
---

## Background

While there isn’t a generally accepted definition for race, the Census Bureau describes the [race categories included in census questionnaires](https://www.census.gov/topics/population/race/about.html#:~:text=the%20spaces%20provided.-,what%20is%20race%3F,-The%20data%20on) as reflecting “a social definition…not an attempt to define race biologically, anthropologically, or genetically.” 

The Office of Management and Budget (OMB) requires that five minimum categories of race and ethnicity are tracked when the data will be used for statistical, administrative, or compliance purposes: White, Black or African American, American Indian or Alaska Native, Asian, and Native Hawaiian or Other Pacific Islander. (For definitions, see [Revisions to the Standards for the Classification of Federal Data on Race and Ethnicity](https://www.govinfo.gov/content/pkg/FR-1997-10-30/pdf/97-28653.pdf).

OMB requires only two categories for data on ethnicity: Hispanic or Latino, and Not Hispanic or Latino.

 [OMB’s Standards for Maintaining, Collecting, and Presenting Federal Data on Race and Ethnicity (9/30/2016)](https://www.federalregister.gov/d/2016-23672/p-27) actually encourage the collection of detailed race and ethnicity information provided it can be aggregated into their minimum categories. The challenge comes in ensuring that the people answering race and ethnicity questions see themselves in the provided choices. Increasingly, Americans do not. This has led the U.S. Census Bureau to conduct extensive research into alternative ways to collect information on race and ethnicity. This research suggests that a combined race and ethnicity question with detailed checkboxes and the ability to provide additional detail is the optimal way to improve the collection of race and ethnicity data.

## What problem does this solve?
Race and ethnicity can be challenging information for a user to provide, especially when choices are limited or do not align with how an individual self-identifies. Collecting race and ethnicity information can help illuminate issues of equity and disparities in incarceration rates, income, housing, employment, health care, education, and more. Respect for individual dignity should guide the methods for collecting data on race and ethnicity. 

## When to use this pattern 
Follow this pattern when asking for a user's race and ethnicity as part of your service or program. Only ask for this information if you need it.

## What's the solution
Allow selection of more than one race and acknowledge people with multiple racial backgrounds. Provide direction on how to complete the form, e.g., “Select one or more” or "Select all that apply" explanatory text. Whenever possible, allow respondents to self-identify their ethnicity through an open-ended text entry field.

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do explain why race and ethnicity information is being collected, and how this information will be used.</li>
            <li>Do allow users to select more than one race and ethnicity.</li>
            <li>Do allow an open-ended text entry field when ethnicity information is requested and use hint text to communicate that more than one ethnicity can be provided.</li>
            <li>Do include the ability to opt out of providing this information.</li>
            <li>Do consider gender-neutral options when listing ethnicities. As an example, Latino encompasses both Hispanic and Latin-American ethnicities but has an implied masculine gender. Consider using <code>Hispanic</code> or <code>Latin American</code> choices instead. As gender-neutral options like <code>Latinx</code> grow in use and adoption, this recommendation will likely change.</li>
            <li>Do consider whether the information you are collecting is best collected via <a href="https://www.federalregister.gov/d/2016-23672/p-18">separate questions vs. a combined race/ethnicity question.</a></li>
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
            <li>Do not restrict choices to a single race or ethnicity.</li>
            <li>Do not require the user to answer. Provide an option like “Prefer not to say.”</li>
            <li>Do not capture race or ethnicity information for operational or generalization purposes. Understanding that a majority of your webinar attendees self-identify as Hispanic does not mean that Hispanic people enjoy webinars.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all, and clearly explain the reason for asking for the information and what will be done to secure the user's privacy and safety.

### What to use
<strong>If you don't need a controlled vocabulary.</strong> If you don't need to restrict the list of races and ethnicities to a specified data collection requirement, consider allowing for user self-identification with an open-ended text field. Users should also have the ability to opt out of providing this information.

<strong>If the information being collected is intended to be used for statistical, administrative, or compliance purposes.</strong> If the intent of your data collection requires race and ethnicity to be mapped to a fixed minimum set of categories, refer to OMB’s <a class="display-inline" href="https://www.federalregister.gov/d/2016-23672/p-27">Standards for Maintaining, Collecting, and Presenting Federal Data on Race and Ethnicity (9/30/2016)</a>, which encourages the collection of detailed race and ethnicity information provided it can be aggregated into the minimum categories. 

### Special use cases
<strong>If you are collecting information on a family.</strong> Do not assume that partners or dependents of the person completing the form will identify as the same race or ethnicity.

<strong>If you will be displaying race and/or ethnicity in a list.</strong> Always treat racial and ethnic groups as proper nouns and capitalize them. Consider the order list items appear to avoid the perception of bias or favoritism. 

## Usability Guidance

<strong>If you're only collecting information on race:</strong>

Label for Race field:
- Race (Select all that apply)

<strong>If you’re collecting combined race and ethnicity information, consider using checkboxes for race (either the minimum list or an expanded list), combined with open-ended text input for ethnicity:</strong>

Label for combined Race checkbox and open-ended ethnicity self-identification text input field:
- I identify my race and ethnicity as

[ ] checkboxes 

Select all that apply

(see potential checkbox items list below)

Please describe your ethnicity (You may report more than one ethnicity):
[ Text Input ]

Label for opt out of providing requested information:
- Prefer not to say

Race checkbox items (OMB’s minimum categories):
Which of the following best describes you? (Select all that apply)
- Asian or Pacific Islander
- Black or African American
- Hispanic or Latinx
- Native American or Alaska Native
- White
- A race or ethnicity not listed here
- Prefer not to say

Race checkbox items (These are the expanded categories tested in the 2020 US Census):
Which of the following best describes you? (Select all that apply)
- American Indian or Alaska Native
- Asian
- Black or African American
- Hispanic, Latinx, or Spanish
- Middle Eastern or North African
- Native Hawaiian or other Pacific Islander
- White
- Some other race or ethnicity
- Prefer not to say

## Accessibility

<strong>Follow input guidance.</strong> These text fields should follow the accessibility [guidelines for all text inputs](https://designsystem.digital.gov/components/text-input/). 

<strong>Use a fieldset and legend for a checkbox group.</strong> Surround a related set of checkboxes with a `<fieldset>`. The `<legend>` provides context for the grouping.

<strong>These custom checkboxes are accessible.</strong> The custom checkbox component is accessible to screen readers because the default checkbox is moved off-screen with position: absolute; left: -999em.

<strong>Use a semantic tag.</strong> The checkbox should have a semantic tag for the id attribute, and its corresponding label should have the same value in its for attribute.

<strong>Customization.</strong> As you customize, make sure you follow [accessibility guidelines for form templates](https://designsystem.digital.gov/templates/form-templates/) and the [accessibility guidelines for form controls](https://designsystem.digital.gov/components/form/).

## Ingredients

<div class="usa-card-group flex-row margin-top-2">
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
          <a href="{{ site.baseurl }}/components/checkbox/">Visit Checkbox</a>
      </div>
      </div>
  </div>
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
          <a href="{{ site.baseurl }}/components/text-input/">Visit Text input</a>
      </div>
      </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true"><h2 id="pattern-preview">Pattern preview</h2></button>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/race-or-ethnicity.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      {% highlight html%}{% include patterns/race-or-ethnicity.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/race-or-ethnicity.html %}{% endhighlight %}
  </div>
</div>

## References
- 2010 Census Race and Hispanic Origin Alternative Questionnaire Experiment. (February 28, 2013) Retrieved on July 15, 2022, from [https://www.census.gov/programs-surveys/decennial-census/decade/2010/program-management/cpex/2010-cpex-211.html](https://www.census.gov/programs-surveys/decennial-census/decade/2010/program-management/cpex/2010-cpex-211.html)
- 2015 National Content Test Race and Ethnicity Analysis Report. (February 28, 2017) Retrieve on July 15, 2022, from [https://www2.census.gov/programs-surveys/decennial/2020/program-management/final-analysis-reports/2015nct-race-ethnicity-analysis.pdf](https://www2.census.gov/programs-surveys/decennial/2020/program-management/final-analysis-reports/2015nct-race-ethnicity-analysis.pdf)
- About the Topic of Race. (n.d.) Retrieved on July 15, 2022, from [https://www.census.gov/topics/population/race/about.html](https://www.census.gov/topics/population/race/about.html)
- Collecting and Tabulating Ethnicity and Race Response in the 2020 Census. (February 2020) Retrieved on July 16, 2022, from [https://www2.census.gov/about/training-workshops/2020/2020-02-19-pop-presentation.pdf](https://www2.census.gov/about/training-workshops/2020/2020-02-19-pop-presentation.pdf)
- Content Research. (n.d.) Retrieved on July 15, 2022, from [https://www.census.gov/programs-surveys/decennial-census/decade/2020/planning-management/plan/content-research.html](https://www.census.gov/programs-surveys/decennial-census/decade/2020/planning-management/plan/content-research.html)
- Research to Improve Data on Race and Ethnicity. (n.d.) Retrieved on July 15, 2022, from [https://www.census.gov/about/our-research/race-ethnicity.html](https://www.census.gov/about/our-research/race-ethnicity.html)
- Revisions to the Standards for the Classification of Federal Data on Race and Ethnicity (October 30, 1997) Retrieved on July 15, 2022, from [https://www.govinfo.gov/content/pkg/FR-1997-10-30/pdf/97-28653.pdf](https://www.govinfo.gov/content/pkg/FR-1997-10-30/pdf/97-28653.pdf)
- Standards for Maintaining, Collecting, and Presenting Federal Data on Race and Ethnicity. (September 30, 2016) Retrieved July 15, 2022, from [https://www.federalregister.gov/documents/2016/09/30/2016-23672/standards-for-maintaining-collecting-and-presenting-federal-data-on-race-and-ethnicity](https://www.federalregister.gov/documents/2016/09/30/2016-23672/standards-for-maintaining-collecting-and-presenting-federal-data-on-race-and-ethnicity)


## Changelog
- Updated based on product owner feedback August 4, 2022
- Updated based on community feedback July 20, 2022
- Created June 27, 2022