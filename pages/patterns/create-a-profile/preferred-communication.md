---
title: Preferred communication
permalink: /patterns/create-a-profile/preferred-communication/
layout: styleguide
category: Patterns
lead: The preferred communication design pattern allows users to easily indicate how they would like to be contacted in the future. 
---

## What problem does this solve?
Effectively reaching the user is critical to good communication and building trust. Users have different preferred methods of communication, which become especially important during times of stress, disaster, or emergency response.

## When to use this pattern 
Use this pattern only if you can support different contact methods and are collecting different contact information from the user. 

## When to consider something else
If you do not have the current capability of contacting the user via multiple channels of communication, do not ask the user for their communication preferences. Allowing a user to select a preferred communication option that is not operational risks communication gaps and can destroy a user's trust in a program or service.

## What's the solution
Allow the user to select from available options, and to include a brief message in a text input/textarea field if explanation is required. For example, if the preferred contact method is dependent on time or date, or if there’s another factor that needs to be considered when communicating with the user.

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do offer options for how to be contacted, if possible, since some users may not have a permanent physical or mailing address, due to displacement, infrastructure problems following a disaster, homelessness, or other reasons.</li>
            <li>Do only collect contact preference information if you need it and can deliver on the promise to the user that you will contact them via their preferred communications channel.</li>
            <li>Do explain under what conditions you will reach out to the user and what the anticipated timeline will be, if possible.</li>
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
            <li>Do not make answering this question required for form completion.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Multimodal communication
<b>Consider multiple means of communication for critical messaging.</b> While prioritizing the user’s preferred communication method (e.g., text message), do follow up with alternate methods (e.g., email) to improve the likelihood of the user seeing your communication.

## Accessibility 

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
  <li
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit Toggle"
  data-meta="Visit Toggle">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Radio button</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>Radio buttons allow users to select exactly one choice from a group.</p>
        <a href="/components/radio-buttons/">Visit Radio buttons</a>
      </div>
    </div>
  </li>  
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true"><h2 id="pattern-preview">Pattern preview</h2></button>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/preferred-communication.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      <figure class="highlight"><pre><code class="language-html" data-lang="html">{% include patterns/preferred-communication.html %}</code></pre></figure>
    </div>
    <figure class="highlight"><pre><code class="language-html" data-lang="html">{% highlight html%}{% include patterns/preferred-communication.html %}{% endhighlight %}</code></pre></figure>
  </div>
</div>

## Related

- <a href="#">Address</a> pattern
- <a href="#">Email address</a> pattern
- <a href="#">Phone number</a> pattern
- <a href="https://designsystem.digital.gov/templates/form-templates/address-form/">Address form</a> template

## References
- Seamlessness in the omnichannel user experience. (March 19, 2017) Retrieved on July 20, 2022, from [https://www.nngroup.com/articles/seamless-cross-channel/](https://www.nngroup.com/articles/seamless-cross-channel/)
- Explicitly state the difference between options. (November 3, 2013) Retrieved on July 20, 2022, from [https://www.nngroup.com/articles/explicit-differences/](https://www.nngroup.com/articles/explicit-differences/)


## Changelog
- Updated based on community feedback July 21, 2022
- Created July 7, 2022
