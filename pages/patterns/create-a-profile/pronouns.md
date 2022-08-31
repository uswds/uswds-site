---
title: Pronouns
story: Help users to provide their pronouns to ensure they are addressed in the manner they prefer
permalink: /patterns/create-a-profile/pronouns/
layout: pattern
category: Patterns
sub-category: Create a user profile
lead: The pronouns pattern helps users to provide information that will allow them to feel confident they will be addressed with the pronouns they use.
---
<div></div>

{:.border-top-05.border-primary.padding-top-2.margin-bottom-2}

## What problem does this solve?
A name or biological sex are not indicative of the pronouns a person uses. Allowing users to specify their pronouns creates a more comfortable environment by removing the potential for frustration and alienation.
 
## When to use this pattern 
Follow this pattern when you are planning on referring to the person using pronouns instead of their name.

## What's the solution
Provide a text entry field that supports a rich array of special characters and accents that allows the user to inform you of their pronouns. This pattern best supports verbal communication. This pattern is not appropriate for automated communication.

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do understand why you are collecting this information.</li>
            <li>Do provide examples. Many people may not be familiar with the concept of specifying pronouns.</li>
            <li>Do provide an open text field. Language is evolving and forced choice can make a user feel as though they need to fit themselves into a label determined by the form designer.</li>
            <li>Do support a <a href="https://web.library.yale.edu/cataloging/music/diacrit">rich array of diacritics, accents, and alternative characters</a>.</li>
            <li>Allow users to enter hyphens, apostrophes, and blank spaces in each field.</li>
            <li>Do allow both upper and lowercase letters throughout each field.</li>
            <li>Do support long text fields. Allow users to enter up to 128 characters per field, but follow form norms for field display size.</li>
            <li>Do be prepared for a complex answer.</li>
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
            <li>Do not make the field mandatory. While the information can be helpful, there are neutral options that can be used.</li>
            <li>Do not assume pronouns. If a user chooses not to answer, use inclusive language like “they” or “you” instead of “he” or “she.”</li>
            <li>Do not overwhelm the user with options. Default to a text entry field to allow user-provided pronouns.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all. Clearly explain the reason for asking for the information and what will be done to secure the user’s privacy. 

<strong>If you don't need a controlled vocabulary.</strong> Strongly consider allowing for user-provided pronouns with an open-ended text field. Users should also have the ability to opt out of providing this information.

## Usability Guidance

<strong>Provide clear hint text.</strong> Some users may be unfamiliar with this question and unsure how to answer. Provide clear hint text, e.g., "For example, he, she, they, ze." Do allow users to opt out with a "Prefer not to answer" option.

## Accessibility

<strong>Follow input guidance.</strong> These text fields should follow the accessibility [guidelines for all text inputs](https://designsystem.digital.gov/components/text-input/). 

<strong>Customization.</strong> As you customize, make sure you follow [accessibility guidelines for form templates](https://designsystem.digital.gov/templates/form-templates/) and the [accessibility guidelines for form controls](https://designsystem.digital.gov/components/form/).

## Components used in this pattern

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
    {% include patterns/pronouns.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      {% highlight text%}{% include patterns/pronouns.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/pronouns.html %}{% endhighlight %}
  </div>
</div>

## References
- They, their. (April 10, 2019). Retrieved on July 19, 2022, from [https://design.va.gov/content-style-guide/they-their](https://design.va.gov/content-style-guide/they-their) 
- Ask users for gender or sex. (n.d.) Retrieved on July 19, 2022, from [https://design-system.service.gov.uk/patterns/gender-or-sex/](https://design-system.service.gov.uk/patterns/gender-or-sex/)
- Gender-inclusive language. (n.d.) Retrieved on July 19, 2022, from [https://www.digital.govt.nz/standards-and-guidance/design-and-ux/content-design-guidance/inclusive-language/gender-inclusive-language/](https://www.digital.govt.nz/standards-and-guidance/design-and-ux/content-design-guidance/inclusive-language/gender-inclusive-language/) 
- Inclusive forms. (n.d.) Retrieved on July 19, 2022, from [https://equity.ubc.ca/resources/gender-diversity/inclusive-forms/](https://equity.ubc.ca/resources/gender-diversity/inclusive-forms/) 
- What's in a pronoun? (May 15, 2019) Retrieved on July 19, 2022, from [https://www.keshetonline.org/resources/whats-in-a-pronoun/](https://www.keshetonline.org/resources/whats-in-a-pronoun/)
- Asking about gender in online forms. (September 18, 2015) Retrieved on July 19, 2022, from [http://www.practicemakesprogress.org/blog/2015/9/18/asking-about-gender-on-online-forms](http://www.practicemakesprogress.org/blog/2015/9/18/asking-about-gender-on-online-forms)


## Changelog
- publishdate