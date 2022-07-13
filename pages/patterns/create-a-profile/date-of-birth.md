---
title: Date of birth
permalink: /patterns/create-a-profile/date-of-birth/
layout: styleguide
category: Patterns
lead: This pattern allows users to easily enter their date of birth or memorable date with ease and discretion. 
---

## What problem does this solve?
Age in many cultures can be different than what is portrayed in the United States; by asking for the date of birth, you can collect the correct data for your needs. There are also many competing patterns for date entry that make it difficult for the user to enter correct dates within complicated and inconsistent interfaces. 

### When to use this pattern 
Use this pattern when you need to confirm a user's identity by asking for their date of birth or age or when asking for any memorable date.

### What's the solution
Three text fields provide an inclusive digital experience that allow users to move through the section with ease. By providing the information for each field with an open text field users will be able to understand what is being asked and not struggle to input the information.


## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do label the fields clearly. Some countries use a  day month year format.</li>
            <li>Do provide three blank fields for text input.</li>
            <li>Do shadow fill the text inputs with the information character count that is expected (Ex: if you are seeking a four digit year use YYYY, if you are seeking the last two digits use YY)</li>
            <li>Do use an example for the month input. If you require the user to use a 0 before a single digit use an example.</li>
            <li>Do use input separators to ensure clean data collection and data masking process’. ( Ex: [01] - [17] - [2022])</li>
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
            <li>Do not assume age based on the provided date of birth.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<b>Confirm you need this information.</b> As with all personal information, consider whether you need to collect it at all, and clearly explain the reason for asking for the information and what will be done to secure the user’s privacy. For example, if you aren’t validating identity, you might not need to collect someone’s name, since a username will meet the need for account login.

### When to use 
<b>Appropriate for most dates.</b> Appropriate for most dates.

<b>Consider a date picker for scheduling.</b> If users are trying to schedule something, the date picker might make more sense. Be sure to also provide an option for text entry as well.

## Usability Guidance
<b>Label each field.</b> Be sure each field is properly labeled- some countries enter dates in day, month, year order. 

<b>Avoid select elements.</b> It may be tempting to switch all or some of these text fields to select elements, but these tend to be more difficult to use than text boxes.

## Accessibility 
<b>Follow input guidance.</b> These text fields should follow the accessibility guidelines for all <a href="https://designsystem.digital.gov/components/text-input/">text inputs</a>. 

<b>Don't auto-advance focus.</b> Do not use JavaScript to auto advance the focus from one field to the next. This makes it difficult for keyboard-only users to navigate and correct mistakes. 

<b>Use “text” instead of “number” inputs.</b> Research indicates that <a href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">numeric inputs still carry many usability problems</a>, according to the gov.uk Technology in Government blog. 

## Ingredients
Related components

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

## References
- <a href="https://designsystem.digital.gov/components/memorable-date/">Components-memorable date</a>, USWDS
- <a href="https://design-system.service.gov.uk/patterns/dates/">Dates</a>, Gov.uk
- <a href="https://designnotes.blog.gov.uk/2013/12/05/asking-for-a-date-of-birth/">Asking for a date of birth</a>, Gov.uk
- <a href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">Why the GOV.UK Design System team changed the input type for numbers</a>, Gov.uk

## Changelog
- Created 07.07.22
