---
title: Date of birth
permalink: /patterns/create-a-profile/date-of-birth/
layout: styleguide
category: Patterns
lead: Date of birth, and other memorable dates, can be an essential piece of information used to validate identity or eligibility for services or benefits. This pattern allows users to enter their date of birth or another memorable date (e.g., birth of child, death of loved one) without friction. 
---

## What problem does this solve?
Date entry fields are context-specific, and culture dependent. With many competing patterns for date formatting, users may become frustrated, confused, and more prone to making mistakes. 

## When to use this pattern 
Use this pattern when you need a user's date of birth or another memorable date. 

## What's the solution
Allowing a user to type a memorable date using three clearly labeled text fields provides the simplest and most inclusive digital experience. This is especially helpful when the date is in the past like a date of birth. By providing a clearly labeled text input for month, date, and year, users will understand what is being asked and not struggle to input the information or question what order the information should be entered in.

Mobile device users in particular may benefit from being able to type a year rather than using a scrolling date picker for date of birth or other memorable dates.

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do provide three text entry fields for date input.</li>
            <li>Do label the fields clearly. Some countries use a day/month/year format and it’s important that date and month are clearly distinguished to ensure correct date entry.</li>
            <li>Do limit individual field character length.</li>
            <li>Do provide examples. Make sure hint text with representative examples are displayed.</li>
            <li>Do consider your data requirements. Use both client-side and server-side validation to support properly formatted dates if possible. If you are unable to parse month or date without two digits,  provide examples that reflect a leading zero and use clear validation messaging if a single digit only is entered.</li>
            <li>Do consider requiring a four-digit year to avoid potential confusion.</li>
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
            <li>Do not use visual separators between fields.</li>
            <li>Do not auto-advance focus from field to field.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<b>Confirm you need this information.</b> As with all personal information, consider whether you need to collect it at all, and clearly explain the reason for asking for the information and what will be done to secure the user’s privacy. 

### When to use 
<b>Appropriate for most dates.</b> This pattern is appropriate for most dates but particularly past and future dates, or when there’s a high expectation of mobile device usage for form completion.

### When to consider something else

<b>Consider a date picker for scheduling.</b> If users are trying to schedule something, the date picker might make more sense. Be sure to also provide an option for text entry as well.

## Usability Guidance
<b>Label each field.</b> Be sure each field is properly labeled&#8212;some countries enter dates in day, month, year order. 

<b>Avoid select elements.</b> It may be tempting to switch all or some of these text fields to select elements, but these tend to be more difficult to use than text boxes.

## Accessibility 
<b>Follow input guidance.</b> These text fields should follow the accessibility  <a href="https://designsystem.digital.gov/components/text-input/">guidelines for all text inputs</a>. 

<b>Don't auto-advance focus.</b> Do not use JavaScript to auto advance the focus from one field to the next. This makes it difficult for keyboard-only users to navigate and correct mistakes. 

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
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true"><h2 id="pattern-preview">Pattern preview</h2></button>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/date-of-birth.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      <figure class="highlight"><pre><code class="language-html" data-lang="html">{% include patterns/date-of-birth.html %}</code></pre></figure>
    </div>
    <figure class="highlight"><pre><code class="language-html" data-lang="html">{% highlight html%}{% include patterns/date-of-birth.html %}{% endhighlight %}</code></pre></figure>
  </div>
</div>

## Related

- <a href="https://designsystem.digital.gov/components/memorable-date/">Memorable date component</a>
- <a href="#">Phone number</a> pattern
- <a href="#">Social Security Number</a> pattern

## References
- Dates. (n.d.) Retrieved on July 20, 2022, from <a href="https://design-system.service.gov.uk/patterns/dates/">https://design-system.service.gov.uk/patterns/dates/</a>
- Asking for a date of birth. (December 5, 2013) Retrieved on July 20, 2022, from <a href="https://designnotes.blog.gov.uk/2013/12/05/asking-for-a-date-of-birth/">https://designnotes.blog.gov.uk/2013/12/05/asking-for-a-date-of-birth/</a>
- Why the GOV.UK Design System team changed the input type for numbers. (February 24, 2020) Retrieved on July 20, 2022, from <a href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/</a>

## Changelog
- Created July 7, 2022
