---
title: Pronouns
story: Help users to provide their pronouns to ensure they are addressed in the manner they prefer
permalink: /patterns/create-a-user-profile/pronouns/
layout: pattern
category: Patterns
sub-category: Create a user profile
lead: The pronouns pattern helps users to provide information that will allow them to feel confident they will be addressed with the pronouns they use.
changelog:
  key: pattern-user-profile-pronouns
---

{:.site-component-section-title}
## About this pattern

### What problem does this solve?
A person's name or sex are not indicative of the pronouns they use. Allowing users to specify their pronouns creates a more comfortable environment by removing the potential for frustration and alienation.

### When to use this pattern
Follow this pattern when you are planning on referring to the person using pronouns instead of their name.

### What's the solution?
Provide a text entry field that supports a rich array of special characters and accents that allows the user to inform you of their pronouns. This pattern best supports verbal communication. This pattern is not appropriate for automated communication.

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
            <li>Do understand why you are collecting this information.</li>
            <li>Do provide examples and clear hint text. Many people may not be familiar with the concept of specifying pronouns.</li>
            <li>Do provide an open text field. Language is evolving and forced choice can make a user feel as though they need to fit themselves into a label determined by the form designer.</li>
            <li>Do support a <a href="https://web.library.yale.edu/cataloging/music/diacrit">rich array of diacritics, accents, and alternative characters.</a></li>
            <li>Allow users to enter hyphens, apostrophes, and blank spaces in each field.</li>
            <li>Do allow both upper and lowercase letters throughout each field.</li>
            <li>Do support long text fields. Allow users to enter up to 128 characters per field, but follow form norms for field display size.</li>
            <li>Do be prepared for a complex answer.</li>
            <li>Do allow users to opt out of answering with a "Prefer not to answer" option.</li>
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
            <li>Do not make the field mandatory. While the information can be helpful, there are neutral options that can be used.</li>
            <li>Do not assume pronouns. If a user chooses not to answer, use inclusive language like “they” or “you” instead of “he” or “she.”</li>
            <li>Do not overwhelm the user with options. Default to a text entry field to allow user-provided pronouns.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview margin-top-2">
  <button class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true"><h3 id="pattern-preview">Pattern preview</h3></button>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/pronouns.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false"><h3 id="pattern-code">Pattern code</h3></button>
  <div id="accordion-code" class="usa-accordion__content highlight-code copy-code">
    <div class="usa-sr-only">
      {% highlight text%}{% include patterns/pronouns.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/pronouns.html %}{% endhighlight %}
  </div>
</div>

### Considerations

{:.usa-content-list}
- <strong>Confirm you need this information.</strong> As with all personal information, consider whether you need to collect it at all. Clearly explain the reason for asking for the information and what will be done to secure the user’s privacy.
- <strong>If you don't need a controlled vocabulary.</strong> Strongly consider allowing for user-provided pronouns with an open-ended text field. Users should also have the ability to opt out of providing this information.

### Usability guidance

{:.usa-content-list}
- <strong>Provide clear hint text.</strong> Some users may be unfamiliar with this question and unsure how to answer. Provide clear hint text, such as, "For example, he, she, they, ze, he/they." Do allow users to opt out with a "Prefer not to answer" option.

### Accessibility

{:.usa-content-list}
- <strong>Follow input guidance.</strong> These text fields should follow the accessibility [guidelines for all text inputs]({{ site.baseurl }}/components/text-input/).
- <strong>Customization.</strong> As you customize, make sure you follow [accessibility guidelines for form templates]({{ site.baseurl }}/templates/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/components/form/).

{:.site-component-section-title}
## Related components, patterns, and templates

{:.usa-content-list}
- <a href="{{ site.baseurl }}/components/checkbox/">Checkbox</a> component
- <a href="{{ site.baseurl }}/components/text-input/">Text input</a> component
- <a href="{{ site.baseurl }}/patterns/create-a-user-profile/gender-identity-and-sex/">Gender identity and sex</a> pattern

{:.site-component-section-title}
## References
- Ask users for gender or sex. (n.d.) Retrieved on July 19, 2022, from [https://design-system.service.gov.uk/patterns/gender-or-sex/](https://design-system.service.gov.uk/patterns/gender-or-sex/)
- Asking about gender in online forms. (September 18, 2015) Retrieved on July 19, 2022, from http://www.practicemakesprogress.org/blog/2015/9/18/asking-about-gender-on-online-forms
- DOL policies on gender identity: rights and responsibi (n.d.) Retrieved on November 1, 2022, from [https://www.dol.gov/agencies/oasam/centers-offices/civil-rights-center/internal/policies/gender-identity](https://www.dol.gov/agencies/oasam/centers-offices/civil-rights-center/internal/policies/gender-identity)
- Gender pronouns. (October 23, 2017) Retrieved on November 1, 2022, from
[https://www1.nyc.gov/assets/hra/downloads/pdf/services/lgbtqi/Gender%20Pronouns%20final%20draft%2010.23.17.pdf](https://www1.nyc.gov/assets/hra/downloads/pdf/services/lgbtqi/Gender%20Pronouns%20final%20draft%2010.23.17.pdf)
- Gender pronouns & their use in workplace communications. (n.d.) Retrieved on November 1, 2022 from, [https://dpcpsi.nih.gov/sgmro/gender-pronouns-resource](https://dpcpsi.nih.gov/sgmro/gender-pronouns-resource)
- Gender-inclusive language. (n.d.) Retrieved on July 19, 2022, from [https://www.digital.govt.nz/standards-and-guidance/design-and-ux/content-design-guidance/inclusive-language/gender-inclusive-language/](https://www.digital.govt.nz/standards-and-guidance/design-and-ux/content-design-guidance/inclusive-language/gender-inclusive-language/)
- The importance of personal pronouns. (September 16, 2022) Retrieved on November 1, 2022 from, [https://digital.va.gov/people-excellence/the-importance-of-personal-pronouns/](https://digital.va.gov/people-excellence/the-importance-of-personal-pronouns/)
- Inclusive forms. (n.d.) Retrieved on July 19, 2022, from [https://equity.ubc.ca/resources/gender-diversity/inclusive-forms/](https://equity.ubc.ca/resources/gender-diversity/inclusive-forms/)
- Living up to our value of inclusion: Why we should use pronouns. (September 14, 2021) Retrieved on November 1, 2022 from, [https://www.fs.usda.gov/inside-fs/leadership/living-our-value-inclusion-why-we-should-use-preferred-pronouns](https://www.fs.usda.gov/inside-fs/leadership/living-our-value-inclusion-why-we-should-use-preferred-pronouns)
- Pronoun use in email signatures. (June 29, 2020) Retrieved on November 1, 2022, from [https://www.publicservice.govt.nz/guidance/pronoun-use-in-email-signatures/](https://www.publicservice.govt.nz/guidance/pronoun-use-in-email-signatures/)
- They, their. (April 10, 2019). Retrieved on July 19, 2022, from [https://design.va.gov/content-style-guide/they-their](https://design.va.gov/content-style-guide/they-their)

{:.site-component-section-title}
## Disclaimer
Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.
