---
title: Address
permalink: /patterns/create-a-profile/address/
layout: styleguide
category: Patterns
lead: The physical and mailing address patterns help users to enter their address successfully.

---

{:.margin-bottom-2}
## What problem does this solve?
While most addresses in the U.S. follow a specific pattern, there are unique variations in some rural areas and the U.S. territories. In addition, some people are unhoused or in temporary housing, and may need to specify a mailing address that is different from their physical address —  particularly in disaster relief and recovery situations.

{:.site-component-section-title}
## Physical address

## When to use this pattern 
Use this pattern when you need to parse out the specific parts of the address and you need the physical location of an individual. This may be important when determining benefits eligibility, for disaster recovery purposes, or other reasons. Since physical addresses may be temporary, consider asking for a mailing address, too.

## When to consider something else
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
            <li>Do allow both upper and lowercase letters throughout each field.</li>
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
            <li>Do not limit addresses to conventionally formatted addresses. Some rural areas and the U.S. territories have unusually formatted addresses.</li>
            <li>Do not assume that people can receive mail at their physical location. People in some communities can only receive mail at Post Office boxes.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all, and clearly explain the reason for asking for the information and what will be done to secure the user’s privacy.

<strong>People without fixed addresses.</strong> Some people do not have fixed addresses. 

### What to use 
<strong>Physical vs. mailing address.</strong> If you do need an address, determine if you need a physical address or a mailing address, or both. Physical addresses are most important for determining benefits eligibility or for disaster response. Mailing addresses are important for correspondence.

<strong>Both physical and mailing address.</strong> If you need both the physical and mailing address, consider providing a checkbox for “same as physical address” to auto-populate the mailing address.

## Usability Guidance

<strong>Avoid disabling default browser behavior for Select elements.</strong> If possible, let users type a letter to jump down a long list of states, territories, or military posts.

<strong>Support both five- and nine-digital ZIP codes.</strong> Some addresses require a nine-digital ZIP code. If you would like to use an input mask, it should be “#####-####” so that the text is properly formatted, regardless of whether a user enters a five- or nine-digit ZIP code.

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
        <h3 class="usa-card__heading font-lang-lg">Text input</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.</p>
        <a href="/components/text-input/">Visit Text Input</a>
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
        <h3 class="usa-card__heading font-lang-lg">Select</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A select component allows users to choose one option from a temporary modal menu.</p>
        <a href="/components/select/">Visit Select</a>
      </div>
    </div>
  </li>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview-01" aria-expanded="true"><h2 id="pattern-preview">Pattern preview</h2></button>
  <div id="accordion-preview-01" class="usa-accordion__content">
    {% include patterns/physical-address.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code-01" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code-01" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      <figure class="highlight"><pre><code class="language-html" data-lang="html">{% include patterns/physical-address.html %}</code></pre></figure>
    </div>
    <figure class="highlight"><pre><code class="language-html" data-lang="html">{% highlight html%}{% include patterns/physical-address.html %}{% endhighlight %}</code></pre></figure>
  </div>
</div>

{:.site-component-section-title}
## Mailing address

### When to use this pattern 
Use this pattern when you need to provide written correspondence or materials to a person and need to parse out the elements of the address. For many people this may be the same address as their physical address.

### What’s the solution
Provide all the fields a user needs to successfully enter a mailing address.

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
            <li>Do allow both upper and lowercase letters throughout each field.</li>
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
            <li>Do not limit addresses to conventionally formatted addresses. Some rural areas and the U.S. territories have unusually formatted addresses.</li>
            <li>Do not assume that people can receive mail at their physical location. People in some communities can only receive mail at Post Office boxes.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all, and clearly explain the reason for asking for the information and what will be done to secure the user’s privacy.

<strong>People without fixed addresses.</strong> Some people do not have fixed addresses. 

### What to use 
<strong>Physical vs. mailing address.</strong> If you do need an address, determine if you need a physical address or a mailing address, or both. Physical addresses are most important for determining benefits eligibility or for disaster response. Mailing addresses are important for correspondence.

<strong>Both physical and mailing address.</strong> If you need both the physical and mailing address, consider providing a checkbox for “same as physical address” to auto-populate the mailing address.

## Usability Guidance

<strong>Avoid disabling default browser behavior for Select elements.</strong> If possible, let users type a letter to jump down a long list of states, territories, or military posts.

<strong>Support both five- and nine-digital ZIP codes.</strong> Some addresses require a nine-digital ZIP code. If you would like to use an input mask, it should be “#####-####” so that the text is properly formatted, regardless of whether a user enters a five- or nine-digit ZIP code.

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
        <h3 class="usa-card__heading font-lang-lg">Text input</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.</p>
        <a href="/components/text-input/">Visit text input</a>
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
        <h3 class="usa-card__heading font-lang-lg">Select</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A select component allows users to choose one option from a temporary modal menu.</p>
        <a href="/components/text-input/">Visit Select</a>
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
        <h3 class="usa-card__heading font-lang-lg">Checkbox</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>Checkboxes allow users to select one or more options from a list.</p>
        <a href="/components/radio-buttons/">Visit Checkbox</a>
      </div>
    </div>
  </li>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview-02" aria-expanded="true"><h2 id="pattern-preview">Pattern preview</h2></button>
  <div id="accordion-preview-02" class="usa-accordion__content">
    {% include patterns/mailing-address.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code-02" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code-02" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      <figure class="highlight"><pre><code class="language-html" data-lang="html">{% include patterns/mailing-address.html %}</code></pre></figure>
    </div>
    <figure class="highlight"><pre><code class="language-html" data-lang="html">{% highlight html%}{% include patterns/mailing-address.html %}{% endhighlight %}</code></pre></figure>
  </div>
</div>

## Related patterns
- <a href="/patterns/create-a-profile/name/">Name</a>

## Related templates
- <a href="https://designsystem.digital.gov/templates/form-templates/address-form/">Address form template</a>

## References
- Google Plus Codes. (n.d.) Retrieved July 15, 2022, from [https://maps.google.com/pluscodes/](https://maps.google.com/pluscodes/)
- USPS Addressing Standards Publication 28. (n.d.) Retrieved July 15, 2022, from [https://pe.usps.com/text/pub28/welcome.htm](https://pe.usps.com/text/pub28/welcome.htm)
- USPS Addressing Standards for Puerto Rico and the U.S. Virgin Islands. (n.d.) Retrieved July 15, 2022, from [https://postalpro.usps.com/node/3740](https://postalpro.usps.com/node/3740)



## Changelog
- Updated based on community feedback July 19, 2022
- Created June 30, 2022

