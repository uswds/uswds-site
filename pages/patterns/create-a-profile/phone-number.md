---
title: Phone Number
permalink: /patterns/create-a-profile/phone-number/
layout: styleguide
category: Patterns
lead: The phone number pattern allows users to easily enter their phone number(s) and ensures the phone number is properly formatted.
---

## What problem does this solve?
People format their phone number in varying ways&#8212;with or without extra spaces, hyphens, periods, and parentheses. Some may be more accustomed to providing only seven digits. This pattern was designed to reduce confusion and frustration and ensure accurate entry.

## When to use this pattern 
Use this pattern if you need to collect the user’s phone number. Only ask for the phone number if you need it.

## When to consider something else
If you do not specifically need a person’s phone number, do not ask for or collect this information.

## What's the solution
Help users enter their phone numbers in a consistent, correct, usable format. Use the form label and hint text to show users the expected format, and if you specifically need a U.S. or SMS-capable mobile phone number. When possible, use input masking and both client- and server-side validation to ensure the phone number they enter can be successfully used to contact them if needed.

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Tell users why you need their phone number, why you might contact them, and when.</li>
            <li>Do clearly state if you need a U.S. telephone number.</li>
            <li>Do clearly state if you need an SMS-capable mobile phone number, such as when you need to text a security code for validation.</li>
            <li>Use clear hint text and input masking to ensure proper formatting of phone numbers.</li>
            <li>Offer very clear validation messages to help users successfully meet format requirements.</li>
            <li>Consider using the autocomplete attribute on telephone number inputs, to allow the browser to autofill information if it has been previously entered.</li>
            <li>Allow a user to supply multiple phone numbers.</li>
            <li>Consider offering an extension field for a business line or other temporary residences/shelters.</li>
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
            <li>Do not require users to enter hyphens or other characters to support formatting.</li>
            <li>Do not split the phone number into separate fields, which has a <a href="https://uxpro.cc/publications/phone-number-field-design-best-practices/">high user interaction cost</a> and does not easily support different formats.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all, and clearly explain the reason for asking for the information and what will be done to secure the user’s privacy and identity. 

### Whether you need to support international phone numbers
<strong>If you do need to support international numbers</strong>. Consider providing a country select field to automatically populate the country code and support county-specific formatting. Use client-side and ideally server-side validation to ensure proper formatting of international phone numbers.

## Usability Guidance
<strong>Consider using an input mask.</strong> If you use an input mask, it should be “###-###-####” for U.S. phone numbers so that the phone number maps to users' experience and is properly formatted. Input masks can help a user more confidently fill out restricted fields, reduce user anxiety about making a mistake, and reduce validation errors and web form abandonment, particularly on mobile devices.

## Accessibility 
<strong>Follow input guidance.</strong> These text fields should follow the accessibility  <a href="https://designsystem.digital.gov/components/text-input/">guidelines for all text inputs</a>. 

<strong>Use “text” instead of “number” inputs.</strong> Research indicates that <a href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">numeric inputs still carry many usability problems</a>.

<strong>Customization.</strong> As you customize, make sure you follow [accessibility guidelines for form templates](https://designsystem.digital.gov/templates/form-templates/) and the [accessibility guidelines for form controls](https://designsystem.digital.gov/components/form/).


## Ingredients

<div class="usa-card-group flex-row margin-top-2">
  <li
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit text input component"
  data-meta="Visit Toggle">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Text input</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.</p>
        <a href="{{ site.baseurl }}/components/text-input/">Visit Text input</a>
      </div>
    </div>
  </li>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true"><h2 id="pattern-preview">Pattern preview</h2></button>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/phone-number.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      {% highlight html%}{% include patterns/phone-number.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/phone-number.html %}{% endhighlight %}
  </div>
</div>

## Related
- <a href="#">Input masking</a> component
- <a href="#">Email address</a> pattern
- <a href="#">Social Security Number</a> pattern

## References
- Telephone numbers. (n.d.) Retrieved on July 20, 2022, from [https://design-system.service.gov.uk/patterns/telephone-numbers/](https://design-system.service.gov.uk/patterns/telephone-numbers/)
- Bad practices on phone number form fields. (October 16, 2018) Retrieved on July 20, 2022, from [https://uxmovement.com/forms/bad-practices-on-phone-number-form-fields/](https://uxmovement.com/forms/bad-practices-on-phone-number-form-fields/)
- Phone number field design best practices. (August 2, 2019) Retrieved on July 20, 2022, from [https://uxpro.cc/publications/phone-number-field-design-best-practices/](https://uxpro.cc/publications/phone-number-field-design-best-practices/)
- Phone number UX: Always explain why the ‘phone field’ is required. (March 16, 2020) Retrieved on July 20, 2022, from [https://baymard.com/blog/explain-phone-number-field](https://baymard.com/blog/explain-phone-number-field)
- Consider using localized input masks for ‘phone’ and other restricted inputs (64% aren’t taking advantage of input masking). (November 28, 2017) Retrieved on July 20, 2022, from [https://baymard.com/blog/input-masking-form-field](https://baymard.com/blog/input-masking-form-field) 


## Changelog
- Created July 7, 2022
