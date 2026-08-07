---
title: Email address
story: Help users to enter their email address
permalink: /patterns/create-a-user-profile/email-address/
layout: pattern
category: Patterns
sub-category: Create a user profile
lead: The email address pattern allows users to confidently and accurately enter their email address and ensures that it is properly formatted.
changelog:
  key: pattern-user-profile-email-address
---

{:.site-component-section-title}
## About this pattern

### What problem does this solve?

Email addresses can be confusing to enter and users often make mistakes. Some users find it very frustrating to try to identify problems in email formatting.

### When to use this pattern

Use this pattern whenever you are collecting email addresses.

### What's the solution?

A text input field with validation and robust error messaging to guide users in providing the correct information.

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
            <li>Tell users why you need their email address, why you might contact them, and when.</li>
            <li>Do validate formatting by checking for an at symbol (@) that is preceded and followed by one or more characters (not spaces).</li>
            <li>Do use both client-side and server-side validation to support properly formatted email addresses if possible.</li>
            <li>Do consider checking for common misspellings of popular email providers. Warn users if you detect a likely misspelling, but allow them to continue since it might be a genuine email address. </li>
            <li>Do accommodate up to 256 characters. Email addresses cannot be longer than 256 characters.</li>
            <li>Do allow users to paste their email address.</li>
            <li>Do consider enabling autocomplete to allow autofill to enter the email address if they’ve entered it previously.</li>
            <li>Do use fieldset and legend to group related fields together, and clear labels and attributes on these form elements.</li>
            <li>Do provide meaningful error messages that suggest the correct format for an email address.</li>
            <li>Do consider the safety implications of users who share email addresses with others. Consider asking for permission to leave potentially sensitive messages.</li>
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
            <li>Do not require users to re-enter their email address, unless you have a good reason for doing so.</li>
            <li>Do not set arbitrary minimum lengths for the local portion of the email address (occurring before the @ symbol) or domain (after the @ symbol) parts.</li>
            <li>Do not invalidate characters frequently seen in email addresses including hyphens (-), underscores (_), plus signs (+), or periods (.) in the local portion of an email address. <a href="https://datatracker.ietf.org/doc/html/rfc822">See RFC 822</a> for the exhaustive list of permitted characters in the local portion of an email address.</li>
            <li>Do not restrict top-level domains for email address unless your use case is very specific, for example, only .gov or .mil addresses.</li>
            <li>Do not assume that email messages are private unless explicitly stated through permission-based settings.</li>
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
    {% include patterns/email.html %}
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
      {% highlight text%}{% include patterns/email.html %}{% endhighlight %}
    </div>
      {% highlight html%}{% include patterns/email.html %}{% endhighlight %}
  </div>
</div>

### Considerations

{:.usa-content-list}
- **Confirm you need this information.** As with all personal information, consider whether you need to collect it at all. Clearly explain the reason for asking for the information and what will be done to secure the user’s privacy.
- **Sensitive information.** If you plan on using the email address to follow up with the user, consider whether you need to ask the user whether potentially sensitive information can be included in the message. Some users may not want sensitive information left in email messages for privacy or safety reasons.

### Usability guidance

{:.usa-content-list}
- **Do not require users to re-enter their email address, unless you have a good reason for doing so.** If you're collecting email addresses for the purpose of communicating with the user, verifying that a user's email address is correctly spelled reduces the risk of sending sensitive information to the wrong individual.
- **Consider validating a user's email address by requiring them to click an emailed verification link.** When creating an account based on an email address, requiring users to click an emailed verification link and successfully authenticate  ensures information will be shared with the correct individual.
- This pattern uses radio buttons. See [usability guidance for radio buttons]({{ site.baseurl }}/components/radio-buttons/#usability-guidance-radio-buttons).

### Accessibility

{:.usa-content-list}
- **Follow input guidance.** These text fields should follow the accessibility [guidelines for all text inputs]({{ site.baseurl }}/components/text-input/).
- **Use fieldset and legend.** Group related radio buttons together with `<fieldset>` and describe the group with `<legend>`.
- **Use proper labels and attributes.** Each radio button should have a `<label>`. Associate the two by matching the label's `for` attribute to the input's `id` attribute.
- **Customization.** As you customize, make sure you follow [accessibility guidelines for form templates]({{ site.baseurl }}/templates/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/components/form/).

{:.site-component-section-title}
## Related components, patterns, and templates

{:.usa-content-list}
- [Radio buttons]({{ site.baseurl }}/components/radio-buttons/) component
- [Text input]({{ site.baseurl }}/components/text-input/) component
- [Phone number]({{ site.baseurl }}/patterns/create-a-user-profile/phone-number/) pattern
- [Social Security Number]({{ site.baseurl }}/patterns/create-a-user-profile/social-security-number/) pattern

{:.site-component-section-title}
## References

- Mobile form usability: avoid splitting single input entities. (February 12, 2013) Retrieved on July 20, 2022, from <https://baymard.com/blog/mobile-form-usability-single-input-fields>.
- RFC 822. (August 13, 1982) Retrieved on July 20, 2022, from <https://datatracker.ietf.org/doc/html/rfc822>. See also [RFC Editor Errata](https://www.rfc-editor.org/errata_search.php?rfc=822).
- Validate email addresses (Regular Expressions Cookbook). (n.d). Retrieved on July 20, 2022, from <https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s01.html>.

{:.site-component-section-title}
## Disclaimer

Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.
