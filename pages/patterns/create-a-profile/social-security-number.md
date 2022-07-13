---
title: Social security number
permalink: /patterns/create-a-profile/social-security-number/
layout: styleguide
category: Patterns
lead: The social security number pattern allows users to easily enter their social security number and ensure the social security number is properly formatted.
---

## What problem does this solve?
A social security number is often a critical piece of validating identity when applying for government services or benefits. While most U.S. citizens and eligible U.S. residents have a social security number, some people may not know their social security number, or may not lack the necessary documentation to easily obtain one. 

## When to use this pattern 
Only use this pattern when you need to confirm a user's identity by asking for their social security number. This information may be important when determining eligibility for many federal programs, such as federal student loans, public assistance, and Medicare.

## When to consider something else
If you do not specifically need a person’s social security number, do not ask for or collect this information. The social security number is intricately linked to a person’s identity, and should only be used when absolutely required for identification purposes.


### What's the solution
Provide a single text field to enter the social security number. 

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do allow users to enter a social security number with as much fault tolerance as possible. Hyphens and blank spaces in the social security number field should be accommodated if at all possible, since users may be accustomed to entering separators to the numeric groups that make up a social security number.</li>
            <li>Do consider using input masking to guide correct entry of the social security number.</li>
            <li>Do use both client-side and server-side validation if possible to enforce format consistency and flag <a href="https://www.ssa.gov/kc/SSAFactSheet--IssuingSSNs.pdf">invalid social security numbers</a></li>
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
            <li>Do not separate the social security number entry into three separate fields.</li>
            <li>Do not use placeholder text</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<b>Confirm you need this information.</b> As with all personal information, consider whether you need to collect it at all, and clearly explain the reason for asking for the information and what will be done to secure the user’s privacy. For example, if you aren’t validating identity, you might not need to collect someone’s name, since a username will meet the need for account login.

<b>People without social security numbers.</b> Some people do not have social security numbers, and may not be easily able to provide the documentation required to apply for a social security number. Consider whether there are other methods you can use to validate identity in the absence of a social security number.

## Usability Guidance
<b>Avoid multiple fields.</b> If possible, let users type the entire social security number into a single field, not across three separate fields.

<b>Consider using an input mask.</b> If you use an input mask, it should be “###-##-####” so that the social security number maps to users' experience with social security numbers and is properly formatted. Input masks can help a user more confidently fill out restricted fields, reduce  user anxiety about making a mistake, and reduce validation errors and web form abandonment, particularly on mobile devices.

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
        <h3 class="usa-card__heading font-lang-lg">Text Input</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.</p>
        <a href="/components/text-input/">Visit Text Input</a>
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

## References
- <a href="https://design.cms.gov/components/masked-field">Masked Field</a>, CMS Design 
- <a href="https://design-system.service.gov.uk/patterns/national-insurance-numbers/">National Insurance Numbers</a>, Gov.uk 
- <a href="https://www.nngroup.com/articles/form-design-placeholders/">Placeholders in a form field</a>, nngroup 
- <a href="https://baymard.com/learn/input-fields">8 Recommendations for Creating effective input fields</a>, Baymard 
- <a href="https://baymard.com/blog/mobile-form-usability-single-input-fields">Mobile Form Usability: Avoid Splitting Single Input Entities</a>, Baymard 
- <a href="https://baymard.com/blog/input-masking-form-field">Consider Using Localized Input Masks for ‘Phone” and Other Restricted Inputs</a>, Bayard 

## Changelog
- Created 07.07.22
