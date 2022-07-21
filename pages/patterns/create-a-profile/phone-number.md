---
title: Phone Number
permalink: /patterns/create-a-profile/phone-number/
layout: styleguide
category: Patterns
lead: The phone number pattern allows users to easily enter their phone number(s) and ensures the phone number is properly formatted.
---

## What problem does this solve?
People, even the American public, have phone numbers in a variety of formats. It can be confusing to try to enter a phone number in a format that is not supported. 

## When to use this pattern 
Use this pattern if you need to collect the user’s phone number. Only ask for the phone number if you need it.

## When to consider something else
If you do not specifically need a person’s phone number, do not ask for or collect this information.

### What's the solution
Let users enter their phone numbers in whatever format is familiar to them. Allow for additional spaces, hyphens, dashes, and brackets. Accommodate country and area codes. Use the form label, supporting text, or hint text to tell users if you specifically need a U.S. or SMS-capable mobile phone number.

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
            <li>Consider supporting different formats for phone numbers, such as international numbers, unless there is a reason not to. If you do support international numbers, consider providing a Select country field to automatically populate the country code and support county-specific formatting.</li>
            <li>Allow for spaces, hyphens, dashes, and brackets.</li>
            <li>Offer very clear error messages and help text.</li>
            <li>Consider using the autocomplete attribute on telephone number inputs, to allow the browser to autofill information if it has been previously entered.</li>
            <li>Allow a user to supply multiple phone numbers.</li>
            <li>Consider offering a field to enter an extension for a business line or other temporary residences.</li>
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
            <li>Do not require users to have a U.S. phone number unless there’s a compelling reason to do so.</li>
            <li>Do not split the phone number into separate fields, which has a high user interaction cost and does not easily support different formats.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<b>Confirm you need this information.</b> As with all personal information, consider whether you need to collect it at all, and clearly explain the reason for asking for the information and what will be done to secure the user’s privacy and identity. 

## Usability Guidance
<b>Consider using an input mask.</b> If you use an input mask, it should be “###-###-####” for U.S. phone numbers so that the phone number maps to users' experience and is properly formatted. Input masks can help a user more confidently fill out restricted fields, reduce user anxiety about making a mistake, and reduce validation errors and web form abandonment, particularly on mobile devices.

## Accessibility 
<b>Follow input guidance.</b> These text fields should follow the accessibility  <a href="https://designsystem.digital.gov/components/text-input/">guidelines for all text inputs</a>. 

<b>Use “text” instead of “number” inputs.</b> Research indicates that <a href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">numeric inputs still carry many usability problems</a>. 

<b>Customization.</b> As you customize, make sure you follow [accessibility guidelines for form templates](https://designsystem.digital.gov/templates/form-templates/) and the [accessibility guidelines for form controls](https://designsystem.digital.gov/components/form/).


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
        <a href="/components/text-input/">Visit Text input</a>
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
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true"><h2 id="pattern-preview">Pattern preview</h2></button>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/social-security-number.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      <figure class="highlight"><pre><code class="language-html" data-lang="html">{% include patterns/social-security-number.html %}</code></pre></figure>
    </div>
    <figure class="highlight"><pre><code class="language-html" data-lang="html">{% highlight html%}{% include patterns/social-security-number.html %}{% endhighlight %}</code></pre></figure>
  </div>
</div>

## Related

- <a href="#">Social Security Number</a> pattern
- <a href="#">Email address</a> pattern
- <a href="#">Input masking</a> component

## References
- Telephone numbers. (n.d) Retrieved on July 20, 2022, from [https://design-system.service.gov.uk/patterns/telephone-numbers/](https://design-system.service.gov.uk/patterns/telephone-numbers/)
- Bad practices on phone number form fields. (October 16, 2018) Retrieved on July 20, 2022, from [https://uxmovement.com/forms/bad-practices-on-phone-number-form-fields/](https://uxmovement.com/forms/bad-practices-on-phone-number-form-fields/)
- Phone number field design best practices. (August 2, 2019) Retrieved on July 20, 2022, from [https://uxpro.cc/publications/phone-number-field-design-best-practices/](https://uxpro.cc/publications/phone-number-field-design-best-practices/)
- Phone number UX: Always explain why the ‘phone field’ is required. (March 16, 2020) Retrieved on July 20, 2022, from [https://baymard.com/blog/explain-phone-number-field](https://baymard.com/blog/explain-phone-number-field)
- Consider using localized input masks for ‘phone” and other restricted inputs (64% aren’t taking advantage of input masking). (November 28, 2017) Retrieved on July 20, 2022, from [https://baymard.com/blog/input-masking-form-field](https://baymard.com/blog/input-masking-form-field) 


## Changelog
- Created 07.07.22
