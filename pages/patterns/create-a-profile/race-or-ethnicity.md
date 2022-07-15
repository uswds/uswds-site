---
title: Race or ethnicity
permalink: /patterns/create-a-profile/race-or-ethnicity/
layout: styleguide
category: Patterns
lead: The race and ethnicity pattern allows users to provide race and ethnicity information in the most accurate and respectful manner possible.
---

## What problem does this solve?
Race and ethnicity can be challenging information for a user to provide, especially when choices are limited or do not align with how an individual self-identifies their race and ethnicity. Collecting race and ethnicity information can be, however, very valuable when seeking to better understand issues of equity and how perception can result in disparities in incarceration rates, income, housing, employment, health care, education, and more. Respect for individual dignity should guide the methods for collecting data on race and ethnicity. 
 
## When to use this pattern 
Follow this pattern when you need to ask for a user's race and/or ethnicity as part of your service or program. Only ask for this information if you need it.

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
            <li>Do allow an open-ended text entry field when ethnicity information is requested.</li>
            <li>Do include the ability to opt out of providing this information.</li>
            <li>Do consider gender-neutral options when listing ethnicities. As an example, Latino encompasses both Hispanic and Latin-American ethnicities but has an implied masculine gender. Consider using "Hispanic" or "Latin American" choices instead. As gender-neutral options like Latino/a/x/e grow in use and adoption, this recommendation will likely change.</li>
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
<b>Confirm you need this information.</b> As with all personal information, consider whether you need to collect it at all, and clearly explain the reason for asking for the information and what will be done to secure the user's privacy and safety.

### What to use
<b>If you don't need a controlled vocabulary.</b> If you don't need to restrict the list of race or ethnicities to a specified data collection requirement, consider allowing for user self-identification with an open-ended text field. Users should also have the ability to opt out of providing this information.

<b>If the information being collected is intended to be used for statistical, administrative, or compliance purposes.</b> If the intent of your data collection requires race and ethnicity to be mapped to a fixed minimum set of categories, refer to OMB’s <a class="display-inline" href="https://www.federalregister.gov/d/2016-23672/p-27">Standards for Maintaining, Collecting, and Presenting Federal Data on Race and Ethnicity (9/30/2016)</a>, which encourages the collection of detailed race and ethnicity information provided it can be aggregated into the minimum categories. 

### Special use cases
<b>If you are collecting information on a family.</b> Do not assume that partners or dependents of the person completing the form will identify as the same race or ethnicity.

<b>If you will be displaying race and/or ethnicity in a list.</b> Always treat racial and ethnic groups as proper nouns and capitalize them. Consider the order list items appear to avoid the perception of bias or favoritism. 

## Usability Guidance

Label for Race field:
- Race (Select all that apply)

Label for Ethnicity field:
- Ethnicity (Select all that apply)

Label for combined Race and ethnicity field (see potential checkbox items list below):
- Which of the following best describes you?

Label for open-ended self-identification text input:
- I identify my ethnicity as

Label for opt out of providing requested information:
- Prefer not to say

Combined Race and ethnicity checkbox items:
- Asian or Pacific Islander
- Black or African American
- Hispanic or Latinx
- Native American or Alaskan Native
- White or Caucasian
- Multiracial or Biracial
- A race/ethnicity not listed here
- Prefer not to say



## Ingredients

<div class="usa-card-group flex-row margin-top-2">
  <li
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit Toggle"
  data-meta="Visit Toggle">
      <div class="usa-card__container">
      <header class="usa-card__header">
          <h3 class="usa-card__heading font-lang-lg">Checkbox</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
          <p>Checkboxes allow users to select one or more options from a list.</p>
          <a href="/components/checkbox/">Visit Checkbox</a>
      </div>
      </div>
  </li>
  <li
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit Toggle"
  data-meta="Visit Toggle">
      <div class="usa-card__container">
      <header class="usa-card__header">
          <h3 class="usa-card__heading font-lang-lg">Text input</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
          <p>A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.</p>
          <a href="/components/text-input/">Visit Text input</a>
      </div>
      </div>
  </li>
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
      <figure class="highlight"><pre><code class="language-html" data-lang="html">{% include patterns/race-or-ethnicity.html %}</code></pre></figure>
    </div>
    <figure class="highlight"><pre><code class="language-html" data-lang="html">{% highlight html%}{% include patterns/race-or-ethnicity.html %}{% endhighlight %}</code></pre></figure>
  </div>
</div>

## References
- <a href="https://www.census.gov/topics/population/race/about.html">About the Topic of Race</a>, U.S. Census Bureau
- <a href="https://www.census.gov/about/our-research/race-ethnicity.html">Research to Improve Data on Race and Ethnicity</a>, U.S. Census Bureau
- <a href="https://www.census.gov/programs-surveys/decennial-census/decade/2020/planning-management/plan/content-research.html">Content Research</a>, U.S. Census Bureau
- <a href="https://www.census.gov/programs-surveys/decennial-census/decade/2010/program-management/cpex/2010-cpex-211.html">2010 Census Race and Hispanic Origin Alternative Questionnaire Experiment</a>, U.S. Census Bureau
- <a href="https://www2.census.gov/programs-surveys/decennial/2020/program-management/final-analysis-reports/2015nct-race-ethnicity-analysis.pdf">2015 National Content Test Race and Ethnicity Analysis Report</a>, U.S. Census Bureau
- <a class="display-inline" href="https://www.govinfo.gov/content/pkg/FR-1997-10-30/pdf/97-28653.pdf">Revisions to the Standards for the Classification of Federal Data on Race and Ethnicity</a>, United States Government Publishing Office (GPO)
- <a class="display-inline" href="https://www.federalregister.gov/documents/2016/09/30/2016-23672/standards-for-maintaining-collecting-and-presenting-federal-data-on-race-and-ethnicity">Standards for Maintaining, Collecting, and Presenting Federal Data on Race and Ethnicity</a>, Federal Register


## Changelog
- Created 06.27.22