---
title: Date of birth
permalink: /patterns/create-a-profile/date-of-birth/
layout: styleguide
category: Patterns
lead: Date of birth, and other memorable dates, can be an essential piece of information used to validate identity or eligibility for services or benefits. This pattern allows users to enter their date of birth or another memorable date (e.g., birth of child, death of loved one) without friction. 
---

## What problem does this solve?
With many competing patterns for date formatting, users may become frustrated, confused, and more prone to make mistakes when entering a date of birth or other memorable date.

## When to use this pattern 
Use this pattern when you need a user's date of birth or another memorable date. 

## What's the solution
Allowing a user to enter a memorable date using three clearly labeled fields provides the simplest and most inclusive digital experience. This is especially helpful when the date is in the past like a date of birth. By providing a select element for month, and clearly labeled text input for date and year, users will understand what is being asked and not struggle to input the information or question what order the information should be entered in.

Mobile device users in particular may benefit from being able to type a year rather than using a scrolling date picker for date of birth or other memorable dates.

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do provide text entry fields for day and year inputs, and a select or combo box element for month.</li>
            <li>Do label the fields clearly. Some countries use a day/month/year format and it’s important that date and month are clearly distinguished to ensure correct date entry.</li>
            <li>Do limit individual field character length.</li>
            <li>Do consider your data requirements. Use both client-side and server-side validation to support properly formatted dates if possible. If you are unable to parse date without two digits, provide an example that reflects a leading zero and use clear validation messaging if a single digit without a leading zero is entered.</li>
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
            <li>Do not require leading zeros if possible.</li>
            <li>Do not use a date picker.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all. Clearly explain the reason for asking for the information and what will be done to secure the user’s privacy. 

### When to use 
<strong>Appropriate for most dates.</strong> This pattern is appropriate for most dates but particularly past and memorable dates, and dates that appear on items like drivers licenses or passports. This pattern is especially applicable when there’s a high expectation of mobile device usage for form completion.

### When to consider something else

<strong>Consider a date picker for scheduling.</strong> If users are trying to schedule something, the date picker might make more sense, especially when the day of the week or availability of timeslots is required. Be sure to also provide an option for text entry as well.

## Usability Guidance
<strong>Label each field.</strong> Be sure each field is properly labeled &#8212; some countries enter dates in day, month, year order. 

<strong>Avoid select elements for day or year.</strong> It may be tempting to switch all or some of these text fields to select elements, but these tend to be more difficult to use than text inputs.

## Accessibility 
<strong>Follow input guidance.</strong> These text fields should follow the accessibility  <a href="https://designsystem.digital.gov/components/text-input/">guidelines for all text inputs</a>. 

<strong>Don't auto-advance focus.</strong> Do not use JavaScript to auto advance the focus from one field to the next. This makes it difficult for keyboard-only users to navigate and correct mistakes. 

<strong>Use “text” instead of “number” inputs.</strong> Research indicates that <a href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">numeric inputs still carry many usability problems</a>. While dates and years are some of the few kinds of numbers that can work reliably with numeric inputs, the way the user enters the data may still differ from what the browser expects. Use `<input type="text" inputmode="numeric" pattern="[0-9]*">` to better support mobile users. 

<strong>Always use a label on the select element.</strong> Don’t replace it with the default menu option (for example, removing the “Month” label and just having the menu read “Select a month” by default).

<strong>Avoid auto-submission.</strong> Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them.

<strong>Customization.</strong> As you customize, make sure you follow [accessibility guidelines for form templates](https://designsystem.digital.gov/templates/form-templates/) and the [accessibility guidelines for form controls](https://designsystem.digital.gov/components/form/).

## Ingredients

<div class="usa-card-group flex-row margin-top-2">
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
  <div
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit select component"
  data-meta="Visit select component">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Select</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A select component allows users to choose one option from a temporary modal menu.</p>
        <a href="{{ site.baseurl }}/components/select/">Visit Select</a>
      </div>
    </div>
  </div>
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
      {% highlight text%}{% include patterns/date-of-birth.html %}{% endhighlight %}
    </div>
      {% highlight html%}{% include patterns/date-of-birth.html %}{% endhighlight %}
  </div>
</div>

## Related

- <a href="{{ site.baseurl }}/components/memorable-date/">Memorable date</a> component
- <a href="{{ site.baseurl }}/patterns/create-a-profile/phone-number/">Phone number</a> pattern
- <a href="{{ site.baseurl }}/patterns/create-a-profile/social-security-number/">Social Security Number</a> pattern

## References
- Dates. (n.d.) Retrieved on July 20, 2022, from <a href="https://design-system.service.gov.uk/patterns/dates/">https://design-system.service.gov.uk/patterns/dates/</a>
- Asking for a date of birth. (December 5, 2013) Retrieved on July 20, 2022, from <a href="https://designnotes.blog.gov.uk/2013/12/05/asking-for-a-date-of-birth/">https://designnotes.blog.gov.uk/2013/12/05/asking-for-a-date-of-birth/</a>
- Why the GOV.UK Design System team changed the input type for numbers. (February 24, 2020) Retrieved on July 20, 2022, from <a href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/</a>

## Changelog
- Created July 7, 2022
