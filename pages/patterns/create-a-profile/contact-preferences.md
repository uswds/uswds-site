---
title: Contact preferences
story: Help users indicate their contact preferences
permalink: /patterns/create-a-user-profile/contact-preferences/
layout: pattern
category: Patterns
sub-category: Create a user profile
lead: The contact preferences design pattern allows users to easily indicate how they would like to be contacted in the future.
changelog:
  key: pattern-user-profile-contact-preferences
---

{:.site-component-section-title}
## About this pattern

### What problem does this solve?

Effectively reaching the user is critical to good communication and building trust. Users have different preferred methods of communication, which become especially important during times of stress, disaster, or emergency response.

### When to use this pattern

Use this pattern when collecting contact preference information from the user. Contact preferences options should only be offered if you can support the listed contact methods.

### When to consider something else

If you do not have the current capability of contacting the user via multiple channels of communication, do not ask the user for their communication preferences. Allowing a user to select a preferred communication option that is not operational risks communication gaps and can destroy a user's trust in a program or service.

### What's the solution?

Allow the user to select from available options, and to include a brief message in a text input or textarea field if explanation is required. Use hint text to better explain the field's purpose, for example, if the preferred contact method is dependent on time or date, or if there’s another factor that needs to be considered when communicating with the user.

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
            <li>Offer options for how to be contacted, if possible, since some users may not have a permanent physical or mailing address, due to displacement, infrastructure problems following a disaster or other reasons.</li>
            <li>Only collect contact preference information if you need it and can deliver on the promise to the user that you will contact them via their preferred communications channel.</li>
            <li>Explain under what conditions you will reach out to the user and what the anticipated timeline will be, if possible.</li>
            <li>Do consider the safety implications of users who share their phone, voicemail, or email with other members of their household. Consider asking for permission to leave potentially sensitive messages.</li>
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
            <li>Do not provide the user with preference options for a communication channel you don’t currently support. If you cannot SMS message a user, for example, don’t provide that as a preference option.</li>
            <li>Do not ask for preferred means of communication if you will not be communicating with the user.</li>
            <li>Do not assume that communication channels are private unless explicitly stated through permission-based settings or in the message itself.</li>
            <li>Do not make answering this question required for form completion.</li>
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
    {% include patterns/contact-preferences.html %}
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
     {% highlight text%}{% include patterns/contact-preferences.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/contact-preferences.html %}{% endhighlight %}
  </div>
</div>

### Considerations

{:.usa-content-list}
- **Consider multiple means of communication for critical messaging.** While prioritizing the user’s preferred communication method (for example, text message), do follow up with alternate methods (for example, email) to improve the likelihood of the user seeing your communication.
- **User needs.** Strongly consider allowing users to specify any accessibility or language accommodations they require, such as needing an ASL interpreter, preferring braille formatted mailed communications, or preferring audio communication when available.

### Usability guidance

{:.usa-content-list}
- See [usability guidance for radio buttons]({{ site.baseurl }}/components/radio-buttons/#usability-guidance-radio-buttons).

### Accessibility

{:.usa-content-list}
- **Follow input guidance.** These text fields should follow the accessibility [guidelines for all text inputs]({{ site.baseurl }}/components/text-input/).
- **Customization.** As you customize, make sure you follow [accessibility guidelines for form templates]({{ site.baseurl }}/templates/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/components/form/).

{:.site-component-section-title}
## Related components, patterns, and templates

{:.usa-content-list}
- [Radio buttons]({{ site.baseurl }}/components/radio-buttons/) component
- [Text input]({{ site.baseurl }}/components/text-input/) component
- [Address]({{ site.baseurl }}/patterns/create-a-user-profile/address) pattern
- [Email address]({{ site.baseurl }}/patterns/create-a-user-profile/email-address) pattern
- [Phone number]({{ site.baseurl }}/patterns/create-a-user-profile/phone-number) pattern
- [Address form]({{ site.baseurl }}/templates/form-templates/address-form/) template

{:.site-component-section-title}
## References

- Explicitly state the difference between options. (November 3, 2013) Retrieved on July 20, 2022, from <https://www.nngroup.com/articles/explicit-differences/>
- Seamlessness in the omnichannel user experience. (March 19, 2017) Retrieved on July 20, 2022, from <https://www.nngroup.com/articles/seamless-cross-channel/>

{:.site-component-section-title}
## Disclaimer

Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.
