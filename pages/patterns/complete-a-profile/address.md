---
title: Enter their address
permalink: /patterns/complete-a-profile/address/
layout: styleguide
category: Patterns
lead: The physical and mailing address patterns help users to enter their address successfully.

---

{:.margin-bottom-2}
## What problem does this solve?
While most addresses in the U.S. follow a specific pattern, there are unique variations in some rural areas and the U.S. territories. In addition, some people are unhoused or in temporary housing, and may need to specify a mailing address that is different from their physical address —  particularly in disaster relief and recovery situations.

{:.border-top-05 .border-primary .margin-top-4 .padding-top-2}
## Physical Address

### When to use this pattern 
Use this pattern when you need to parse out the specific parts of the address and you need the physical location of an individual. This may be important when determining benefits eligibility, for disaster recovery purposes, or other reasons. Since physical addresses may be temporary, consider asking for a mailing address, too.

### When to consider something else
If you need to collect addresses that may not fit this format (for example, international addresses for citizens living overseas) consider using something else.

If you don’t need to be able to parse out the individual pieces of an address, consider letting users type the entire address into one large text area.

### What’s the solution
Provide all the fields needed for a user to provide a physical address, even if it is a Google Plus Code. 

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do support long text fields.</li>
            <li>Do support a rich array of <a href="https://web.library.yale.edu/cataloging/music/diacrit">diacritics, accents, and alternative characters</a>.</li>
            <li>Do allow both upper and lowercase letters throughout each field. </a></li>
            <li>Allow users to enter hyphens, apostrophes, special characters, and blank spaces in each name field.</li>
            <li>Do provide the Puerto Rican Urbanization field, unless your program does not serve Puerto Rico.</li>
            <li>If the armed forces and the U.S. territories are not included, you may want to provide a link to their resources for clarity.</li>
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
            <li>Do not limit addresses to conventionally formatted addresses. Some rural areas and areas in U.S. territories have unusually formatted addresses.</li>
            <li>Do not assume that people can receive mail at their physical location. People in some communities can only receive mail at Post Office boxes.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations

{:.margin-top-2}
### Whether you need this data
<b>Confirm you need this information.</b> As with all personal information, consider whether you need to collect it at all, and clearly explain the reason for asking for the information and what will be done to secure the user’s privacy.

<b>People without fixed addresses.</b> Some people do not have fixed addresses. 

### What to use 
<b>Physical vs. mailing address.</b> If you do need an address, determine if you need a physical address or a mailing address, or both. Physical addresses are most important for determining benefits eligibility or for disaster response. Mailing addresses are important f

<b>Both physical and mailing address.</b> If you need both the physical and mailing address, consider providing a checkbox for “same as physical address” to auto-populate the mailing address.

## Usability Guidance

<b>Avoid dropdowns.</b> If possible, let users type their state or territories’ abbreviation when they reach the state dropdown menu, instead of having to scroll and select.

<b>Support both five- and nine-digital ZIP codes.</b> Some addresses require a nine-digital ZIP code. If you would like to use an input mask, it should be “#####-####” so that the text is properly formatted, regardless of whether a user enters a five- or nine-digit ZIP code.

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
        <h3 class="usa-card__heading font-lang-lg">Text Input</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.</p>
        <a href="/components/text-input/">Visit Text Input</a>
      </div>
    </div>
  </li>
</div>

<div class="usa-card-group flex-row margin-top-2">
  <li
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit Toggle"
  data-meta="Visit Toggle">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Select</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A select component allows users to choose one option from a temporary modal menu.</p>
        <a href="/components/text-input/">Visit Select</a>
      </div>
    </div>
  </li>
</div>

## Pattern preview

<form class="usa-form usa-form--large">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend usa-legend--large">Name</legend>
    <p>
      Required fields are marked with an asterisk (<abbr title="required" class="usa-hint usa-hint--required">*</abbr>).
    </p>
    <label class="usa-label" for="given-name">Given name
      <abbr title="required" class="usa-hint usa-hint--required">*</abbr></label>
    <input class="usa-input usa-input--xl" id="given-name" name="first-name" required="" aria-required="true">
    <label class="usa-label" for="middle-name">Middle name</label>
    <input class="usa-input usa-input--xl" id="middle-name" name="middle-name">
    <label class="usa-label" for="family-name">Family name
      <abbr title="required" class="usa-hint usa-hint--required">*</abbr></label>
    <input class="usa-input usa-input--xl" id="family-name" name="last-name" required="" aria-required="true">
      <label class="usa-label" for="last-name">Full name
      <abbr title="required" class="usa-hint usa-hint--required">*</abbr></label>
    <input class="usa-input usa-input--xl" id="last-name" name="last-name" required="" aria-required="true">
  </fieldset>
</form>

## Pattern preview

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-pattern-preview-01" aria-expanded="true"><h2 id="accordion-preview">Pattern preview</h2></button>
  <div id="accordion-pattern-preview-01" class="usa-accordion__content">
    <form class="usa-form usa-form--large">
      <fieldset class="usa-fieldset">
        <legend class="usa-legend usa-legend--large">Name</legend>
        <p>
          Required fields are marked with an asterisk (<abbr title="required" class="usa-hint usa-hint--required">*</abbr>).
        </p>
        <label class="usa-label" for="given-name">Given name
          <abbr title="required" class="usa-hint usa-hint--required">*</abbr></label>
        <input class="usa-input usa-input--xl" id="given-name" name="first-name" required="" aria-required="true">
        <label class="usa-label" for="middle-name">Middle name</label>
        <input class="usa-input usa-input--xl" id="middle-name" name="middle-name">
        <label class="usa-label" for="family-name">Family name
          <abbr title="required" class="usa-hint usa-hint--required">*</abbr></label>
        <input class="usa-input usa-input--xl" id="family-name" name="last-name" required="" aria-required="true">
          <label class="usa-label" for="last-name">Full name
          <abbr title="required" class="usa-hint usa-hint--required">*</abbr></label>
        <input class="usa-input usa-input--xl" id="last-name" name="last-name" required="" aria-required="true">
      </fieldset>
    </form>
  </div>
</div>

## References
- <a href="https://web.library.yale.edu/cataloging/music/diacrit">Diacritics and special characters by language</a>, Yale University Library
- <a href="Personal names around the world,">Personal names around the world</a>, WC3

## Changelog
- Created 06.21.22

