---
title: Date of birth
story: Help a user enter their birth date or other memorable date
permalink: /patterns/create-a-user-profile/date-of-birth/
layout: pattern
category: Patterns
sub-category: Create a user profile
lead: Date of birth, and other memorable dates, can be an essential piece of information used to validate identity or eligibility for services or benefits. This pattern allows users to enter their date of birth or another memorable date (such as, birth of child, death of loved one) without friction.
changelog:
  key: pattern-user-profile-date-of-birth
---

{:.site-component-section-title}
## About this pattern

### What problem does this solve?

With many competing patterns for date formatting, users may become frustrated, confused, and more prone to make mistakes when entering a date of birth or other memorable date.

### When to use this pattern

Use this pattern when you need a user's date of birth or another memorable date.

### What's the solution?

Allowing a user to enter a memorable date using three clearly labeled fields provides the simplest and most inclusive digital experience. This is especially helpful when the date is in the past like a date of birth. By providing the Select component for month, and clearly labeled text input for date and year, users will understand what is being asked and not struggle to input the information or question what order the information should be entered in.

Mobile device users in particular may benefit from being able to type a year rather than using a scrolling date picker for date of birth or other memorable dates.

{:.site-component-section-title}
## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col">
    <div class="do-dont">
      <div class="do-dont__do">
        <h3 class="do-dont__heading">
          {% include icon.html icon="check_circle" %}
          What to do
        </h3>
        <div class="do-dont__content">
          <ul>
            <li>Do provide text entry fields for day and year inputs, and the Select component for month.</li>
            <li>Do label the fields clearly, including the month select. Some countries use a day/month/year format and it’s important that date and month are clearly distinguished to ensure correct date entry.</li>
            <li>Do use a "text" vs "numeric" input type.</li>
            <li>Do limit individual field character length.</li>
            <li>Do consider your data requirements. Use both client-side and server-side validation to support properly formatted dates if possible. If you are unable to parse date without two digits, provide an example that reflects a leading zero and use clear validation messaging if a single digit without a leading zero is entered.</li>
            <li>Do consider requiring a four-digit year to avoid potential confusion.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="tablet:grid-col">
    <div class="do-dont">
      <div class="do-dont__dont">
        <h3 class="do-dont__heading">
          {% include icon.html icon="cancel" %}
          What not to do
        </h3>
        <div class="do-dont__content">
          <ul>
            <li>Don't auto-advance focus from one field to the next. This makes it difficult for keyboard-only users to navigate and correct mistakes.</li>
            <li>Do not use visual separators between fields.</li>
            <li>Do not auto-advance focus from field to field.</li>
            <li>Do not require leading zeros if possible.</li>
            <li>Do not use a date picker.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview margin-top-2">
  <h3 id="pattern-preview" class="usa-accordion__heading site-accordion-heading">
    <button type="button" class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true">
      Pattern preview
    </button>
  </h3>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/date-of-birth.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <h3 id="pattern-code" class="usa-accordion__heading site-accordion-heading">
    <button type="button" class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false">
      Pattern code
    </button>
  </h3>
  <div id="accordion-code" class="usa-accordion__content highlight-code copy-code">
    <div class="usa-sr-only">
      {% highlight text%}{% include patterns/date-of-birth.html %}{% endhighlight %}
    </div>
      {% highlight html%}{% include patterns/date-of-birth.html %}{% endhighlight %}
  </div>
</div>

### Considerations

{:.usa-content-list}
- **Confirm you need this information.** As with all personal information, consider whether you need to collect it at all. Clearly explain the reason for asking for the information and what will be done to secure the user’s privacy.
- **Appropriate for most dates.** This pattern is appropriate for most dates but particularly past and memorable dates, and dates that appear on items like drivers licenses or passports. This pattern is especially applicable when there’s a high expectation of mobile device usage for form completion.
- **Consider a date picker for scheduling.** If users are trying to schedule something, the date picker might make more sense, especially when the day of the week or availability of timeslots is required. Be sure to also provide an option for text entry as well.

### Usability guidance

{:.usa-content-list}
- **Label each field.** Be sure each field is properly labeled &#8212; some countries enter dates in day, month, year order.
- **Avoid the Select component for day or year.** It may be tempting to switch all or some of these text fields to the Select component, but these tend to be more difficult to use than text inputs.

### Accessibility

{:.usa-content-list}
- **Follow input guidance.** These text fields should follow the accessibility [guidelines for all text inputs]({{ site.baseurl }}/components/text-input/).
- **Don't auto-advance focus.** Do not use JavaScript to auto advance the focus from one field to the next. This makes it difficult for keyboard-only users to navigate and correct mistakes.
- **Use “text” instead of “number” inputs.** Research indicates that [numeric inputs still carry many usability problems](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/). While dates and years are some of the few kinds of numbers that can work reliably with numeric inputs, the way the user enters the data may still differ from what the browser expects. Use `<input type="text" inputmode="numeric" pattern="[0-9]*">` to better support mobile users.
- **Always use a label on the Select component.** Don’t replace it with the default menu option (for example, removing the “Month” label and just having the menu read “Select a month” by default).
- **Avoid auto-submission.** Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them.
- **Customization.** As you customize, make sure you follow [accessibility guidelines for form templates]({{ site.baseurl }}/templates/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/components/form/).

{:.site-component-section-title}
## Related components, patterns, and templates

{:.usa-content-list}
- [Memorable date]({{ site.baseurl }}/components/memorable-date/) component
- [Select]({{ site.baseurl }}/components/select/) component
- [Text input]({{ site.baseurl }}/components/text-input/) component
- [Phone number]({{ site.baseurl }}/patterns/create-a-user-profile/phone-number/) pattern
- [Social Security Number]({{ site.baseurl }}/patterns/create-a-user-profile/social-security-number/) pattern

{:.site-component-section-title}
## References

- Asking for a date of birth. (December 5, 2013) Retrieved on July 20, 2022, from <https://designnotes.blog.gov.uk/2013/12/05/asking-for-a-date-of-birth/>
- Dates. (n.d.) Retrieved on July 20, 2022, from <https://design-system.service.gov.uk/patterns/dates/>
- Why the GOV.UK Design System team changed the input type for numbers. (February 24, 2020) Retrieved on July 20, 2022, from <https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/>

{:.site-component-section-title}
## Disclaimer

Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.
