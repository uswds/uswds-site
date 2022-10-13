---
title: Date of birth
story: Help a user enter their birth date or other memorable date
permalink: /patterns/create-a-profile/date-of-birth/
layout: pattern
category: Patterns
sub-category: Create a user profile
lead: Date of birth, and other memorable dates, can be an essential piece of information used to validate identity or eligibility for services or benefits. This pattern allows users to enter their date of birth or another memorable date (e.g., birth of child, death of loved one) without friction. 
---
<div></div>

{:.border-top-05.border-primary.padding-top-2.margin-bottom-2}

## What problem does this solve?
{% include_relative what-problem-does-this-solve.md %}

## When to use this pattern 
{% include_relative when-to-use-this-pattern.md %}

## What's the solution
{% include_relative whats-the-solution.md %}

## Guidance
<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          {% capture what_to_do %}{% include_relative what-to-do.md %}{% endcapture %}
          {{ what_to_do | markdownify }}
        </div>
      </div>
    </div>
  </div>
  <div class="tablet:grid-col-5">
    <div class="do-dont__dont">
    <h3 class="do-dont__heading">What not to do</h3>
      <div class="do-dont__content">
          {% capture what_not_to_do %}{% include_relative what-not-to-do.md %}{% endcapture %}
          {{ what_not_to_do | markdownify }}
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
{% include_relative whether-you-need-this-data.md %}

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

## Components used in this pattern

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
- Asking for a date of birth. (December 5, 2013) Retrieved on July 20, 2022, from <a href="https://designnotes.blog.gov.uk/2013/12/05/asking-for-a-date-of-birth/">https://designnotes.blog.gov.uk/2013/12/05/asking-for-a-date-of-birth/</a>
- Dates. (n.d.) Retrieved on July 20, 2022, from <a href="https://design-system.service.gov.uk/patterns/dates/">https://design-system.service.gov.uk/patterns/dates/</a>
- Why the GOV.UK Design System team changed the input type for numbers. (February 24, 2020) Retrieved on July 20, 2022, from <a href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/</a>

## Changelog
- publishdate

Disclaimer: Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.
