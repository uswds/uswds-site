---
title: Phone number
story: Help users to enter their phone number or numbers to ensure effective communication
permalink: /patterns/create-a-user-profile/phone-number/
layout: pattern
category: Patterns
sub-category: Create a user profile
lead: The phone number pattern allows users to easily enter their phone number and ensures the phone number is properly formatted.
changelog:
  key: pattern-user-profile-phone-number
---

{:.site-component-section-title}
## About this pattern

### What problem does this solve?
People format their phone number in varying ways &#8212; with or without extra spaces, hyphens, periods, and parentheses. Some may be more accustomed to providing only seven digits. This pattern was designed to reduce confusion and frustration and ensure accurate entry.

### When to use this pattern
Use this pattern if you need to collect the user’s phone number. Only ask for the phone number if you need it. This pattern is designed to support U.S. phone numbers and their specific format.

### What's the solution?
Help users enter their phone numbers in a consistent, correct, usable format. Use the form label and hint text to show users the expected format, and if you specifically need a U.S. or SMS-capable mobile phone number. When possible, use input masking and both client- and server-side validation to ensure the phone number they enter can be successfully used to contact them if needed.

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
            <li>Tell users why you need their phone number, why you might contact them, and when.</li>
            <li>Do clearly state if you need a U.S. telephone number.</li>
            <li>Do clearly state if you need an SMS-capable mobile phone number, such as when you need to text a security code for validation.</li>
            <li>Use clear hint text and input masking to ensure proper formatting.</li>
            <li>Do use a "text" vs "numeric" input type.</li>
            <li>Do use fieldset and legend to group related radio buttons together, and clear labels and attributes on these form elements.</li>
            <li>Consider using the autocomplete attribute on telephone number inputs, to allow the browser to autofill information if it has been previously entered.</li>
            <li>Offer very clear validation messages to help users successfully meet format requirements.</li>
            <li>Allow a user to supply multiple phone numbers, labeling options <code>Primary</code> and <code>Secondary</code>.</li>
            <li>Consider offering an extension field for a business line or other temporary residences/shelters.</li>
            <li>Do consider the safety implications of users who share phones and voicemail boxes. Ask for permission to leave potentially sensitive messages.</li>
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
            <li>Do not require users to enter hyphens or other characters.</li>
            <li>Do not split the phone number into separate fields. Separate fields have a <a href="https://uxpro.cc/publications/phone-number-field-design-best-practices/">high user interaction cost</a></li>
            <li>Do not assume that voicemail boxes are private unless explicitly stated through permission-based settings or in the message itself.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview margin-top-2">
  <h3 id="pattern-preview" class="usa-accordion__heading site-accordion-heading">
    <button class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true">
      Pattern preview
    </button>
  </h3>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/phone-number.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <h3 id="pattern-code" class="usa-accordion__heading site-accordion-heading">
    <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false">
      Pattern code
    </button>
  </h3>
  <div id="accordion-code" class="usa-accordion__content highlight-code copy-code">
    <div class="usa-sr-only">
      {% highlight text%}{% include patterns/phone-number.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/phone-number.html %}{% endhighlight %}
  </div>
</div>

### Considerations

{:.usa-content-list}
- <strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all. Clearly explain the reason for asking for the information and what will be done to secure the user’s privacy.
- <strong>Notifications.</strong> If the phone number will be used to subscribe the user to any type of follow-up calls, including automated notifications, reminders, or informational call lists, clearly inform the user and provide a way for the user to opt out.
- <strong>Sensitive information.</strong> If you plan on using the phone number to follow up with the user, consider whether you need to ask the user for permission to leave a voice or text message, and ask them whether sensitive information can be included in the message. Some users may not want sensitive information left in messages for privacy or safety reasons.

### Usability guidance

{:.usa-content-list}
- <strong>Consider using an input mask.</strong> In fields with a specific expected format, an input mask allows you to constrain and shape the information being entered into that format, without impairing the user’s ability to copy/paste or correct mistyping. If you use an input mask to support formatting the phone field, it should be `___-___-____` for U.S. phone numbers so that the phone number maps to users' experience and is properly formatted. Input masks can help a user more confidently fill out restricted fields, reduce user anxiety about making a mistake, and reduce validation errors and web form abandonment, particularly on mobile devices.
- <strong>Validate client-side and server-side if possible.</strong> Use client-side and ideally server-side validation to ensure proper formatting and usable phone numbers.
- This pattern uses radio buttons. See [usability guidance for radio buttons]({{ site.baseurl }}/components/radio-buttons/#usability-guidance-radio-buttons).

### Accessibility

{:.usa-content-list}
- <strong>Follow input guidance.</strong> These text fields should follow the accessibility  <a href="{{ site.baseurl }}/components/text-input/">guidelines for all text inputs</a>.
- <strong>Use “text” instead of “number” inputs.</strong> Research indicates that <a href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">numeric inputs still carry many usability problems</a>. The way the user enters the data may differ from what the browser expects. Use `<input type="text" inputmode="numeric" pattern="[0-9]*">` to better support mobile users.
- <strong>Use fieldset and legend.</strong> Group related radio buttons together with <code><fieldset></code> and describe the group with <code><legend></code>.
- <strong>Use proper labels and attributes.</strong> Each radio button should have a `<label>`. Associate the two by matching the label's `for` attribute to the input's `id` attribute.
- <strong>Customization.</strong> As you customize, make sure you follow [accessibility guidelines for form templates]({{ site.baseurl }}/templates/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/components/form/).

{:.site-component-section-title}
## Related components, patterns, and templates

{:.usa-content-list}
- <a href="{{ site.baseurl }}/components/radio-buttons/">Radio buttons</a> component
- <a href="{{ site.baseurl }}/components/text-input/">Text input</a> component
- <a href="{{ site.baseurl }}/patterns/create-a-user-profile/email-address/">Email address</a> pattern
- <a href="{{ site.baseurl }}/patterns/create-a-user-profile/social-security-number/">Social Security Number</a> pattern

{:.site-component-section-title}
## References
- Bad practices on phone number form fields. (October 16, 2018) Retrieved on July 20, 2022, from [https://uxmovement.com/forms/bad-practices-on-phone-number-form-fields/](https://uxmovement.com/forms/bad-practices-on-phone-number-form-fields/)
- Consider using localized input masks for ‘phone’ and other restricted inputs (64% aren’t taking advantage of input masking). (November 28, 2017) Retrieved on July 20, 2022, from [https://baymard.com/blog/input-masking-form-field](https://baymard.com/blog/input-masking-form-field)
- Phone number field design best practices. (August 2, 2019) Retrieved on July 20, 2022, from [https://uxpro.cc/publications/phone-number-field-design-best-practices/](https://uxpro.cc/publications/phone-number-field-design-best-practices/)
- Phone number UX: Always explain why the ‘phone field’ is required. (March 16, 2020) Retrieved on July 20, 2022, from [https://baymard.com/blog/explain-phone-number-field](https://baymard.com/blog/explain-phone-number-field)
- Telephone numbers. (n.d.) Retrieved on July 20, 2022, from [https://design-system.service.gov.uk/patterns/telephone-numbers/](https://design-system.service.gov.uk/patterns/telephone-numbers/)

{:.site-component-section-title}
## Disclaimer
Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.