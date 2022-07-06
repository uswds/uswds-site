---
title: Select their gender or sex
permalink: /patterns/complete-a-profile/gender-or-sex/
layout: styleguide
category: Patterns
lead: The Sex or Gender pattern helps users to feel comfortable and confident that their information is being used to identify them the way they choose or in a manner that will assist the user.
---

## What problem does this solve?
Many times, sex and gender are used synonymously and users have struggled to provide the accurate information that best identifies and/or represents them with the limited or overwhelming amount of provided options.

Sex assigned at birth is a biological aspect and does not represent how an individual identifies. In the digital space, Male and Female are often the provided options, but there are instances where an individual is born with both sexual characteristics. 

Gender is an expression of a user’s identity and is integral to their sense of self. There is an infinite variety of gendered experience in the world.
 
### When to use this pattern 
Follow this pattern when you are collecting sex or gender as part of your service. Only ask for the sex and/or gender if you need it. Sometimes it’s more beneficial to skip this pattern altogether.

### What's the solution
Provide Sex and/or Gender if needed and present the user with the environment to accurately depict their identity. 

Provide direction on how to complete the form and what to do if the information doesn’t fit into the provided format.

## Guidance
### When you need to collect Sex

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do determine if you NEED Sex and only use if the information is intrinsic to the users experience.</li>
            <li>Do only provide biological options when asking for Biological Sex (Male, Female, and X)</li>
            <li>Do be clear about why you are asking for the information.</li>
            <li>Do be transparent about what you are asking for. To some people sex and gender can mean the same so ensure you use clear language.</li>
            <li>Do think about the end result (whatever information users put in will be aggregated as raw data output)</li>
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
            <li>Do not assume identity based on the users sex.</li>
            <li>Do not include “prefer not to answer” if you consider adding this option then reconsider if the question is needed at all.</li>
            <li>Do not be inconsistent in your form. If you have drop down menus use a drop down list etc. </li>
          </ul>
      </div>
    </div>
  </div>
</div>

### When you need to collect Gender

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do support long text fields for gender. The language behind gender identity is constantly evolving.</li>
            <li>Do consider safety implications of the information provided. (regional and state laws are not created equal)</li>
            <li>Do be transparent about what you are asking for (I.e. Sex or Gender identity)</li>
            <li>Do use inclusive language. Consider using “they” or “you” instead of “he” or “she”</li>
            <li>Do think about the end result (whatever information users put in will be aggregated as raw data output)</li>
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
            <li>Do not provide an autofill option in a text box. There is an evolving amount of terminology and the pre-fill list will. </li>
            <li>Do not assume identity based on their gender.</li>
            <li>Do not use “other” as a gender option. Instead use an empty text field.</li>
            <li>Do not limit the user's choice of gender. Not everyone will fit into a specific classification determined by the designer.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<b>Confirm you need this information.</b> As with all personal information, consider whether you need to collect it at all, and clearly explain the reason for asking for the information and what will be done to secure the user’s privacy.

### What to use 
<b>If you don’t need separate data elements.</b> If you don’t need to parse out the separate pieces of a person’s Gender, consider letting the user enter it into a single text field.

<b>If the Sex information is for identity validation.</b> Clearly state that the user needs to input their biological sex. Often times gender and sex are used synonomously and users have difficulty determining which information  is being considered.

## Usability Guidance

Label Gender field:
- Gender Identity:

Biological Sex selection fields:
- Male
- Female
- X
- Prefer Not to answer 

## Ingredients
Related components

<div class="usa-card-group flex-row margin-top-2">
  <li
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit Toggle"
  data-meta="Visit Toggle">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Radio Button</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>Radio buttons allow users to select exactly one choice from a group.</p>
        <a href="/components/radio-buttons/">Visit Radio buttons</a>
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
        <h3 class="usa-card__heading font-lang-lg">Text Input</h3>
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
    <form class="usa-form usa-form--large">
      <fieldset class="usa-fieldset">
          <legend class="usa-legend usa-legend--large">Gender or Sex</legend>
          <label class="usa-label" for="gender-identity">Gender Identity</label>
          <input
          class="usa-input"
          id="gender-identity"
          name="gender-identity"
          />
          <legend class="usa-legend usa-legend">Biological Sex</legend>
          <div class="usa-radio">
              <input
              class="usa-radio__input"
              id="male"
              type="radio"
              name="biological-sex"
              value="male"
              />
              <label class="usa-radio__label" for="male"
              >Male</label
              >
          </div>
          <div class="usa-radio">
              <input
              class="usa-radio__input"
              id="female"
              type="radio"
              name="biological-sex"
              value="female"
              />
              <label class="usa-radio__label" for="female"
              >Female</label
              >
          </div>
          <div class="usa-radio">
              <input
              class="usa-radio__input"
              id="x"
              type="radio"
              name="biological-sex"
              value="x"
              />
              <label class="usa-radio__label" for="x"
              >X</label
              >
          </div>
          <div class="usa-radio">
              <input
              class="usa-radio__input"
              id="prefer-not-to-answer"
              type="radio"
              name="biological-sex"
              value="prefer-not-to-answer"
              />
              <label class="usa-radio__label" for="prefer-not-to-answer"
              >Prefer not to answer</label
              >
          </div>
      </fieldset>
    </form>
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code" class="usa-accordion__content">
    <p>// Code</p>
  </div>
</div>

## References
- <a href="https://uxdesign.cc/beyond-the-binary-5-steps-to-designing-gender-inclusive-fields-in-your-product-ff9230337b4f">Beyond the Binary: 5 steps to designing gender inclusive fields in your product</a>
- <a href="https://www.dictionary.com/e/gender-terms-you-may-not-know/">Demigender, Maverique, And Other Gender Terms You May Not Know</a>

## Changelog
- Created 06.21.22