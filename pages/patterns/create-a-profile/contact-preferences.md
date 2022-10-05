---
title: Contact preferences
story: Help users indicate their contact preferences
permalink: /patterns/create-a-profile/contact-preferences/
layout: pattern
category: Patterns
sub-category: Create a user profile
lead: The contact preferences design pattern allows users to easily indicate how they would like to be contacted in the future. 
---
<div></div>

{:.border-top-05.border-primary.padding-top-2.margin-bottom-2}

## What problem does this solve?
Effectively reaching the user is critical to good communication and building trust. Users have different preferred methods of communication, which become especially important during times of stress, disaster, or emergency response.

## When to use this pattern 
Use this pattern when collecting contact preference information from the user. Contact preferences options should only be offered if you can support the listed contact methods.

## When to consider something else
If you do not have the current capability of contacting the user via multiple channels of communication, do not ask the user for their communication preferences. Allowing a user to select a preferred communication option that is not operational risks communication gaps and can destroy a user's trust in a program or service.

## What's the solution
Allow the user to select from available options, and to include a brief message in a text input or textarea field if explanation is required. Use hint text to better explain the field's purpose, for example, if the preferred contact method is dependent on time or date, or if there’s another factor that needs to be considered when communicating with the user.

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
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
  <div class="tablet:grid-col-5">
    <div class="do-dont__dont">
    <h3 class="do-dont__heading">What not to do</h3>
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

## Considerations
### Multimodal communication
<strong>Consider multiple means of communication for critical messaging.</strong> While prioritizing the user’s preferred communication method (e.g., text message), do follow up with alternate methods (e.g., email) to improve the likelihood of the user seeing your communication.

<strong>User needs.</strong> Strongly consider allowing users to specify any accessibility or language accommodations they require, such as needing an ASL interpreter, preferring braille formatted mailed communications, or preferring audio communication when available.

## Usability guidance

See [usability guidance for radio buttons](https://designsystem.digital.gov/components/radio-buttons/#usability-guidance-radio-buttons). 


## Accessibility 

<strong>Follow input guidance.</strong> These text fields should follow the accessibility  <a href="https://designsystem.digital.gov/components/text-input/">guidelines for all text inputs</a>. 

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
  aria-label="Visit radio button component"
  data-meta="Visit Toggle">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Radio button</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>Radio buttons allow users to select exactly one choice from a group.</p>
        <a href="{{ site.baseurl }}/components/radio-buttons/">Visit Radio buttons</a>
      </div>
    </div>
  </div>  
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true"><h2 id="pattern-preview">Pattern preview</h2></button>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/contact-preferences.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
     {% highlight text%}{% include patterns/contact-preferences.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/contact-preferences.html %}{% endhighlight %}
  </div>
</div>

## Related

- <a href="{{ site.baseurl }}/patterns/create-a-profile/address">Address</a> pattern
- <a href="{{ site.baseurl }}/patterns/create-a-profile/email-address">Email address</a> pattern
- <a href="{{ site.baseurl }}/patterns/create-a-profile/phone-number">Phone number</a> pattern
- <a href="{{ site.baseurl }}/templates/form-templates/address-form/">Address form</a> template

## References
- Explicitly state the difference between options. (November 3, 2013) Retrieved on July 20, 2022, from [https://www.nngroup.com/articles/explicit-differences/](https://www.nngroup.com/articles/explicit-differences/)
- Seamlessness in the omnichannel user experience. (March 19, 2017) Retrieved on July 20, 2022, from [https://www.nngroup.com/articles/seamless-cross-channel/](https://www.nngroup.com/articles/seamless-cross-channel/)

## Changelog
- publishdate

Disclaimer: Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.