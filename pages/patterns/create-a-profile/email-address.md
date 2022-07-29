---
title: Email address
permalink: /patterns/create-a-profile/email-address/
layout: styleguide
category: Patterns
lead: The email address pattern allows users to confidently and accurately enter their email address and ensures that it is properly formatted.
---

## What problem does this solve?
Email addresses can be confusing to enter and users often make mistakes. Some users find it very frustrating to try to identify problems in email formatting. 

## When to use this pattern 
Use this pattern whenever you are collecting email addresses.

## What's the solution
A text input field with validation and robust error messaging to guide users in providing the correct information.

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do explain why you need an email address and what you will do with it.</li>
            <li>Do validate formatting by checking for an at symbol (@) that is preceded and followed by one or more characters (not spaces).</li>
            <li>Do use both client-side and server-side validation to support properly formatted email addresses if possible.</li>
            <li>Do consider checking for common misspellings of popular email providers. Warn users if you detect a likely misspelling, but allow them to continue since it might be a genuine email address. </li>
            <li>Do accommodate up to 256 characters. Email addresses cannot be longer than 256 characters.</li>
            <li>Do allow users to paste their email address.</li>
            <li>Do consider enabling autocomplete to allow autofill to enter the email address if they’ve entered it previously.</li>
            <li>Do provide meaningful error messages that suggest the correct format for an email address.</li>
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
            <li>Do not require users to re-enter their email address, unless you have research showing this is effective for your audience.</li>
            <li>Do not set arbitrary minimum lengths for the local portion of the email address (occurring before the @ symbol) or domain (after the @ symbol) parts.</li>
            <li>Do not invalidate characters frequently seen in email addresses including hyphens (-), underscores (_), plus signs (+), or periods (.) in the local portion of an email address. <a href="https://datatracker.ietf.org/doc/html/rfc822">See RFC 822</a> for the exhaustive list of permitted characters in the local portion of an email address.</li>
            <li>Do not restrict top-level domains for email address unless your use case is very specific, e.g., only .gov or .mil addresses.</li> 
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all, and clearly explain the reason for asking for the information and what will be done to secure the user’s privacy. 

## Accessibility 
<strong>Follow input guidance.</strong> These text fields should follow the accessibility  <a href="https://designsystem.digital.gov/components/text-input/">guidelines for all text inputs</a>. 

<strong>Customization.</strong> As you customize, make sure you follow [accessibility guidelines for form templates](https://designsystem.digital.gov/templates/form-templates/) and the [accessibility guidelines for form controls](https://designsystem.digital.gov/components/form/).


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
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true"><h2 id="pattern-preview">Pattern preview</h2></button>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/email.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      <figure class="highlight"><pre><code class="language-html" data-lang="html">{% include patterns/email.html %}</code></pre></figure>
    </div>
    <figure class="highlight"><pre><code class="language-html" data-lang="html">{% highlight html%}{% include patterns/email.html %}{% endhighlight %}</code></pre></figure>
  </div>
</div>

## Related

- <a href="#">Phone number</a> pattern
- <a href="#">Social Security Number</a> pattern

## References
- Mobile form usability: avoid splitting single input entities. (February 12, 2013) Retrieved on July 20, 2022, from [https://baymard.com/blog/mobile-form-usability-single-input-fields](https://baymard.com/blog/mobile-form-usability-single-input-fields)
- Validate email addresses (Regular Expressions Cookbook) (n.d). Retrieved on July 20, 2022, from [https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s01.html](https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s01.html)
- RFC 822. (August 13, 1982) Retrieved on July 20, 2022, from [https://datatracker.ietf.org/doc/html/rfc822](https://datatracker.ietf.org/doc/html/rfc822). See also [RFC Editor Errata](https://www.rfc-editor.org/errata_search.php?rfc=822).




## Changelog
- Created July 7, 2022
