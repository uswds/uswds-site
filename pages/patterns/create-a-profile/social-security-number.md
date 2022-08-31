---
title: Social Security Number
story: Help a user enter their Social Security Number
permalink: /patterns/create-a-profile/social-security-number/
layout: pattern
category: Patterns
sub-category: Create a user profile
lead: The Social Security Number pattern allows users to easily enter their Social Security Number and ensures the Social Security Number is properly formatted.
---
<div></div>

{:.border-top-05.border-primary.padding-top-2.margin-bottom-2}

## What problem does this solve?
A Social Security Number is often a critical piece of validating identity when applying for government services or benefits, but can be confusing for users to enter correctly.

## When to use this pattern 
Only use this pattern when you need to confirm a user's identity by asking for their Social Security Number. This information may be important when determining eligibility for many federal programs, such as federal student loans, public assistance, and Medicare.

## When to consider something else
If you do not specifically need a person’s Social Security Number, do not ask for or collect this information. The Social Security Number is intricately linked to a person’s identity, and should only be used when absolutely required for identification purposes.

While most U.S. citizens and eligible U.S. residents have a Social Security Number, some people may not know their Social Security Number, or may lack the necessary documentation to obtain one easily. 

## What's the solution
Provide a single text field to enter the Social Security Number. 

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do allow users to enter a Social Security Number with as much fault tolerance as possible. Hyphens and blank spaces in the Social Security Number field should be accommodated if at all possible, since users may be accustomed to entering separators to the numeric groups that make up a Social Security Number.</li>
            <li>Do consider using input masking to guide correct entry of the Social Security Number.</li>
            <li>Do use both client-side and server-side validation if possible to enforce format consistency and flag <a href="https://www.ssa.gov/kc/SSAFactSheet--IssuingSSNs.pdf">invalid Social Security Numbers</a>.</li>
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
            <li>Do not separate the Social Security Number entry into three separate fields.</li>
            <li>Do not use placeholder text.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all. Clearly explain the reason for asking for the information and what will be done to secure the user’s privacy. 

<strong>People without Social Security Numbers.</strong> Some people do not have Social Security Numbers, and may not be easily able to provide the documentation required to apply for a Social Security Number. Consider whether there are other methods you can use to validate identity in the absence of a Social Security Number.

## Usability Guidance
<strong>Avoid multiple fields.</strong> If possible, let users type the entire Social Security Number into a single field, not across three separate fields.

<strong>Consider using an input mask.</strong> In fields with a specific expected format, an input mask allows you to constrain and shape the information being entered into that format, without impairing the user’s ability to copy/paste or correct mistyping. If you use an input mask for the Social Security Number field, it should be `###-##-####` so that the Social Security Number maps to users' experience with Social Security Numbers and is properly formatted. Input masks can help a user more confidently fill out restricted fields, reduce user anxiety about making a mistake, and reduce validation errors and web form abandonment, particularly on mobile devices. Make sure your hint text supports the format expected from the user if using an input mask. 

<strong>Avoid obfuscation.</strong> It may be tempting to obfuscate Social Security Numbers as they are being input similar to the way many password fields operate. This can add to a user’s anxiety and frustration as they will not be able to see whether what they have entered is correct. If you must use obfuscation, provide an easy way for users to disable obfuscation allowing them to confirm their input.


## Accessibility 
<strong>Follow input guidance.</strong> These text fields should follow the accessibility  <a href="https://designsystem.digital.gov/components/text-input/">guidelines for all text inputs</a>. 

<strong>Use “text” instead of “number” inputs.</strong> Research indicates that <a href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">numeric inputs still carry many usability problems</a>. The way the user enters the data may differ from what the browser expects. Use `<input type="text" inputmode="numeric" pattern="[0-9]*">` to better support mobile users. 

<strong>Customization.</strong> As you customize, make sure you follow [accessibility guidelines for form templates](https://designsystem.digital.gov/templates/form-templates/) and the [accessibility guidelines for form controls](https://designsystem.digital.gov/components/form/).


## Components used in this pattern

<div class="usa-card-group flex-row margin-top-2">
  <div
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
        <a href="{{ site.baseurl }}/components/text-input/">Visit Text input</a>
      </div>
    </div>
  </div>
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
      {% highlight html%}{% include patterns/social-security-number.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/social-security-number.html %}{% endhighlight %}
  </div>
</div>

## Related

<!-- - <a href="{{ site.baseurl }}/components/input-mask">Input masking</a> component -->
- <a href="{{ site.baseurl }}/patterns/create-a-profile/email-address/">Email address</a> pattern
- <a href="{{ site.baseurl }}/patterns/create-a-profile/phone-number/">Phone number</a> pattern

## References
- 8 recommendations for creating effective input fields. (n.d.) Retrieved on July 20, 2022, from [https://baymard.com/learn/input-fields](https://baymard.com/learn/input-fields)
- Consider using localized input masks for ‘phone’ and other restricted inputs. (November 28, 2017) Retrieved on July 20, 2022, from [https://baymard.com/blog/input-masking-form-field](https://baymard.com/blog/input-masking-form-field)
- Masked field. (n.d.) Retrieved on July 20, 2022, from [https://design.cms.gov/components/masked-field](https://design.cms.gov/components/masked-field)
- Mobile form usability: avoid splitting single input entities. (February 12, 2013) Retrieved on July 20, 2022, from [https://baymard.com/blog/mobile-form-usability-single-input-fields](https://baymard.com/blog/mobile-form-usability-single-input-fields)
- National Insurance Numbers. (n.d.) Retrieved on July 20, 2022, from [https://design-system.service.gov.uk/patterns/national-insurance-numbers/](https://design-system.service.gov.uk/patterns/national-insurance-numbers/)
- Placeholders in a form field. (May 11, 2014) Retrieved on July 20, 2022, from [https://www.nngroup.com/articles/form-design-placeholders/](https://www.nngroup.com/articles/form-design-placeholders/) 
- Social Security is changing the way SSNs are issued. (n.d.) Retrieved on July 20, 2022, from [https://www.ssa.gov/kc/SSAFactSheet--IssuingSSNs.pdf](https://www.ssa.gov/kc/SSAFactSheet--IssuingSSNs.pdf)


## Changelog
- publishdate
