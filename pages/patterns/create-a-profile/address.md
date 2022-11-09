---
title: Address
story: Help a user input their physical or mailing addresses for successful communication
permalink: /patterns/create-a-profile/address/
layout: pattern
category: Patterns
sub-category: Create a user profile
lead: The physical and mailing address patterns help users enter their address successfully.
---

{:.border-top-05.border-primary.padding-top-2.margin-bottom-2}

## What problem does this solve?
While most addresses in the U.S. follow a specific pattern, there are unique variations in some rural areas, U.S. territories, and military posts. In addition, some people are unhoused or in temporary housing, and may need to specify a mailing address that is different from their physical address —  particularly in disaster relief and recovery situations.

{:.site-component-section-title}
## Physical address

## When to use this pattern 
Use this pattern when you need the physical location of a person and you need to parse out the specific parts of the address. This may be important when determining benefits eligibility, for disaster recovery purposes, or other reasons. Since physical addresses may be new, temporary, or not currently served by the USPS consider asking for a mailing address, too. Physical addresses may be where a building or property is located, or potentially where a displaced individual is currently located. Mailing addresses are where postal mail must be sent.

## When to consider something else
This pattern supports domestic U.S. addresses, including the U.S. territories and military outposts. If you need to collect addresses that may not fit this format, such as international addresses for citizens living overseas, you will need to [use something else](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions).

## What’s the solution
Provide all the fields needed for a user to provide a physical address, even less conventional attributes like a [Google Plus Code](https://maps.google.com/pluscodes/). 

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
        <h3 class="do-dont__heading">
          {% include icon.html icon="check_circle" %}
          What to do
        </h3>
        <div class="do-dont__content">
          <ul>
            <li>Do support long text fields.</li>
            <li>Do support a rich array of <a href="https://web.library.yale.edu/cataloging/music/diacrit">diacritics, accents, and alternative characters</a>.</li>
            <li>Do allow both upper and lowercase letters throughout each field.</li>
            <li>Allow users to enter hyphens, apostrophes, special characters, and blank spaces in each name field.</li>
            <li>Consider using the autocomplete attribute on address input fields to allow the browser to autofill information that has been previously entered.</li>
            <li>Provide rich information cues in dropdowns. For example, for state dropdowns, use `MD - Maryland` and `TX - Texas`, rather than the state code alone.</li>
            <li>Do provide the Puerto Rican Urbanization field, unless your program does not serve Puerto Rico.</li>
            <li>If your program does not serve the armed forces or U.S. territories, you may want to provide links to related resources for these users if such resources exist.</li>
          </ul> 
        </div>
      </div>
    </div>
  </div>
  <div class="tablet:grid-col-5">
    <div class="do-dont__dont">
      <h3 class="do-dont__heading">
        {% include icon.html icon="cancel" %}
        What not to do
      </h3>
      <div class="do-dont__content">
          <ul>
            <li>Don't auto-advance focus from one field to the next. This makes it difficult for keyboard-only users to navigate and correct mistakes.</li>
            <li>Do not limit addresses to conventionally formatted addresses. Some rural areas and the U.S. territories have unusually formatted addresses.</li>
            <li>Do not assume that people can receive mail at their physical location. People in some communities can only receive mail at post office boxes.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all. Clearly explain the reason for asking for the information and what will be done to secure the user’s privacy. 

<strong>People without fixed addresses.</strong> Some people do not have fixed addresses. Consider providing other options for reaching them.

### What to use 
<strong>Physical vs. mailing address.</strong> If you do need an address, determine if you need a physical address or a mailing address, or both. Physical addresses are most important for determining benefits eligibility or for disaster response. Mailing addresses are important for correspondence.

<strong>Both physical and mailing address.</strong> If you need both the physical and mailing address, consider providing a checkbox for `same as physical address` to auto-populate the mailing address.

<strong>Google Plus Codes.</strong> Consider whether [Google Plus Codes](https://maps.google.com/pluscodes/) are appropriate for your audience. Google Plus Codes identify a physical location, including those that are not identifiable by a typical postal address. They can be used to identify physical locations that are very remote, where addresses are not available, where someone doesn’t have a fixed address (such as a person who is unhoused), or during an emergency. 

<strong>Puerto Rico.</strong> Consider whether residents of Puerto Rico are part of your audience. Addresses for Puerto Rico require the Urbanization field.


## Usability guidance

<strong>Consider using an input mask.</strong> In fields with a specific expected format, an input mask allows you to constrain and shape the information being entered into that format, without impairing the user’s ability to copy/paste or correct mistyping. If you use an input mask for the ZIP code field, it should be `_____-____` so that the ZIP code maps to users' experience with ZIP codes and is properly formatted, regardless of whether a user enters a five- or nine-digit ZIP code. Input masks can help a user more confidently fill out restricted fields, reduce  user anxiety about making a mistake, and reduce validation errors and web form abandonment, particularly on mobile devices.

<strong>Avoid dropdowns that require long scrolling.</strong> If possible, let users type their state or territories’ abbreviation when they reach the state dropdown menu, instead of having to scroll and select.

<strong>Provide rich information cues in dropdowns.</strong> For example, for state dropdowns, use `MD - Maryland` and `TX - Texas`, rather than the state code alone.

## Accessibility

<strong>Follow input guidance.</strong> These text fields should follow the accessibility [guidelines for all text inputs]({{ site.baseurl }}/components/text-input/). 

<strong>Don't auto-advance focus.</strong> Do not use JavaScript to auto advance the focus from one field to the next. This makes it difficult for keyboard-only users to navigate and correct mistakes. 

<strong>Customization.</strong> As you customize, make sure you follow [accessibility guidelines for form templates]({{ site.baseurl }}/templates/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/components/form/).


## Components used in this pattern

<div class="usa-card-group flex-row margin-top-2">
  <div
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Physical address visit text input component"
  data-meta="Physical address visit text input component">
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
  <div
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Physical address visit select component"
  data-meta="Physical address visit select component">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Combo box</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A combo box helps users select an item from a large list of options.</p>
        <a href="{{ site.baseurl }}/components/combo-box/">Visit Combo box</a>
      </div>
    </div>
  </div>
  <div
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Physical address visit checkbox component"
  data-meta="Physical address visit checkbox component">
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
  aria-label="Physical address visit input mask component"
  data-meta="Physical address visit input mask component">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Input Mask</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>An input mask is a string expression that constraints input to support valid input values.</p>
        <a href="{{ site.baseurl }}/components/input-mask/">Visit Input mask</a>
      </div>
    </div>
  </div>
</div>


<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview-01" aria-expanded="true"><h2 id="pattern-preview-physical-address">Pattern preview</h2></button>
  <div id="accordion-preview-01" class="usa-accordion__content">
    {% include patterns/physical-address.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code-01" aria-expanded="false"><h2 id="pattern-code-physical-address">Pattern code</h2></button>
  <div id="accordion-code-01" class="usa-accordion__content">
    <div class="usa-sr-only">
      {% highlight text%}{% include patterns/physical-address.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/physical-address.html %}{% endhighlight %}
  </div>
</div>

{:.site-component-section-title}
## Mailing address

## When to use this pattern 
Use this pattern when you need to provide written correspondence or materials to a person and need to parse out the elements of the address. For many people this may be the same address as their physical address.

## When to consider something else
This pattern supports domestic U.S. addresses, including the U.S. territories and military outposts. If you need to collect addresses that may not fit this format, such as international addresses for citizens living overseas, you will need to [use something else](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions). 


## What’s the solution
Provide all the fields a user needs to successfully enter a mailing address.

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
        <h3 class="do-dont__heading">
          {% include icon.html icon="check_circle" %}
          What to do
        </h3>
        <div class="do-dont__content">
          <ul>
            <li>Do support long text fields.</li>
            <li>Do support a rich array of <a href="https://web.library.yale.edu/cataloging/music/diacrit">diacritics, accents, and alternative characters</a>.</li>
            <li>Do allow both upper and lowercase letters throughout each field.</li>
            <li>Allow users to enter hyphens, apostrophes, special characters, and blank spaces in each name field.</li>
            <li>Consider using the autocomplete attribute on address input fields to allow the browser to autofill information that has been previously entered.</li>
            <li>Provide rich information cues in dropdowns. For example, for state dropdowns, use `MD - Maryland` and `TX - Texas`, rather than the state code alone.</li>
            <li>Do provide the Puerto Rican Urbanization field, unless your program does not serve Puerto Rico.</li>
            <li>If the armed forces and the U.S. territories are not included, you may want to provide a link to their resources for clarity.</li>
          </ul> 
        </div>
      </div>
    </div>
  </div>
  <div class="tablet:grid-col-5">
    <div class="do-dont__dont">
      <h3 class="do-dont__heading">
        {% include icon.html icon="cancel" %}
        What not to do
      </h3>
      <div class="do-dont__content">
          <ul>
            <li>Don't auto-advance focus from one field to the next. This makes it difficult for keyboard-only users to navigate and correct mistakes.</li>
            <li>Do not limit addresses to conventionally formatted addresses. Some rural areas and the U.S. territories have unusually formatted addresses.</li>
            <li>Do not assume that people can receive mail at their physical location. People in some communities can only receive mail at post office boxes.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all. Clearly explain the reason for asking for the information and what will be done to secure the user’s privacy. 

<strong>People without fixed addresses.</strong> Some people do not have fixed addresses. Consider providing other options for them to be reached.


### What to use 
<strong>Physical vs. mailing address.</strong> If you do need an address, determine if you need a physical address or a mailing address, or both. Physical addresses are most important for determining benefits eligibility or for disaster response. Mailing addresses are important for correspondence.

<strong>Both physical and mailing address.</strong> If you need both the physical and mailing address, consider providing a checkbox for `same as physical address` to auto-populate the mailing address.

## Usability guidance

<strong>Consider using an input mask.</strong> In fields with a specific expected format, an input mask allows you to constrain and shape the information being entered into that format, without impairing the user’s ability to copy/paste or correct mistyping. If you use an input mask for the ZIP code field, it should be `_____-____` so that the ZIP code maps to users' experience with ZIP codes and is properly formatted, regardless of whether a user enters a five- or nine-digit ZIP code. Input masks can help a user more confidently fill out restricted fields, reduce  user anxiety about making a mistake, and reduce validation errors and web form abandonment, particularly on mobile devices.

<strong>Avoid dropdowns that require long scrolling.</strong> If possible, let users type their state or territories’ abbreviation when they reach the state dropdown menu, instead of having to scroll and select.

<strong>Provide rich information cues in dropdowns.</strong> For example, for state dropdowns, use `MD - Maryland` and `TX - Texas`, rather than the state code alone.

## Accessibility 
<strong>Follow input guidance.</strong> These text fields should follow the accessibility  <a href="{{ site.baseurl }}/components/text-input/">guidelines for all text inputs</a>. 

<strong>Don't auto-advance focus.</strong> Do not use JavaScript to auto advance the focus from one field to the next. This makes it difficult for keyboard-only users to navigate and correct mistakes. 

<strong>Customization.</strong> As you customize, make sure you follow [accessibility guidelines for form templates]({{ site.baseurl }}/templates/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/components/form/).

## Components used in this pattern

<div class="usa-card-group flex-row margin-top-2">
  <div
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Mailing address visit text input component"
  data-meta="Mailing address visit text input component">
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
  <div
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Mailing address visit combo box component"
  data-meta="Mailing address visit combo box component">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Combo box</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A combo box helps users select an item from a large list of options.</p>
        <a href="{{ site.baseurl }}/components/combo-box/">Visit Combo box</a>
      </div>
    </div>
  </div>
  <div
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Mailing address visit checkbox component"
  data-meta="Mailing address visit checkbox component">
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
  aria-label="Mailing address visit input mask component"
  data-meta="Mailing address visit input mask component">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Input Mask</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>An input mask is a string expression that constraints input to support valid input values.</p>
        <a href="{{ site.baseurl }}/components/input-mask/">Visit Input mask</a>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview-02" aria-expanded="true"><h2 id="pattern-preview-mailing-address">Pattern preview</h2></button>
  <div id="accordion-preview-02" class="usa-accordion__content">
    {% include patterns/mailing-address.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code-02" aria-expanded="false"><h2 id="pattern-code-mailing-address">Pattern code</h2></button>
  <div id="accordion-code-02" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      {% highlight text%}{% include patterns/mailing-address.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/mailing-address.html %}{% endhighlight %}
  </div>
</div>

## Related
- <a href="{{ site.baseurl }}/patterns/create-a-profile/name/">Name</a> pattern
- <a href="{{ site.baseurl }}/templates/form-templates/address-form/">Address form</a> template

## References
- Google Plus Codes. (n.d.) Retrieved July 15, 2022, from [https://maps.google.com/pluscodes/](https://maps.google.com/pluscodes/)
- The Navajo Nation addresses its residents with Plus Codes. (October 12, 2020) Retrieved on August 3, 2022, from [https://blog.google/products/maps/plus-codes-navajo-nation/](https://blog.google/products/maps/plus-codes-navajo-nation/)
- USPS Addressing Standards Publication 28. (n.d.) Retrieved July 15, 2022, from [https://pe.usps.com/text/pub28/welcome.htm](https://pe.usps.com/text/pub28/welcome.htm)
- USPS Addressing Standards for Puerto Rico and the U.S. Virgin Islands. (n.d.) Retrieved July 15, 2022, from [https://postalpro.usps.com/node/3740](https://postalpro.usps.com/node/3740)
- Universal Post*Code Database. (n.d.) Retrieved July 28, 2022, from [https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions)

## Changelog
- Published November 4, 2022

Disclaimer: Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.

