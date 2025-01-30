---
title: Sex
story: Help a user select their sex
permalink: /patterns/create-a-user-profile/sex/
redirect_from:
  - /patterns/create-a-user-profile/gender-identity-and-sex/
layout: pattern
category: Patterns
sub-category: Create a user profile
lead: This pattern helps users to provide sex information.
changelog:
  key: pattern-user-profile-sex
---

{:.site-component-section-title}
## About this pattern

Content update TK

### What problem does this pattern solve?

Content update TK

Gender and sex are often used synonymously. Many users struggle to provide gender identity information that best represents them. An overwhelming number of choices for gender identity can be as alienating as too limited a set of provided options.

{:.site-component-name}
## Sex

### When to use this pattern

Content update TK

Services collect sex information to match documents for identity proofing purposes, on certain statistical surveys, and to provide biological information in a clinical context. Only ask for this information if you need it. Even for identity proofing, sex data is not always needed. Asking for gender identity instead of sex is generally more important for ensuring respectful communication.

### What's the solution?

Content update TK

Know what information you need and ask for it with specificity. If you are collecting sex information to match documents for identity proofing, be clear about whether you need the sex marker listed on an original birth certificate (“Sex listed at birth”) or the sex marker listed on any qualifying legal document (“Legal sex”).

{:.site-component-section-title}
### Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col">
    <div class="do-dont">
      <div class="do-dont__do">
        <h4 class="do-dont__heading">
          {% include icon.html icon="check_circle" %}
          What to do
        </h4>
        <div class="do-dont__content">
          <ul>
            <li>Do determine if you need to collect sex data and only use if the information is essential to the user's experience. Services collect sex information to match documents for identity proofing purposes, on certain statistical surveys, or to provide biological information in a clinical context.</li>
            <li>Do provide a controlled vocabulary when asking for sex listed at birth or legal sex (<code>Male</code>, <code>Female</code>, and <code>X</code>). Use helper text to explain that <code>X</code> should be used for any marker that is neither male nor female.</li>
            <li>Do provide helper text that explains why you are asking for this data and who it will be shared with.</li>
            <li>Do be transparent about what you are asking for. To some people gender and sex are synonymous, so use clear language.</li>
            <li>Do use fieldset and legend to group related radio buttons together, and clear labels and attributes on these form elements.</li>
            <li>When collecting both gender identity and sex, gender identity should precede sex.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="tablet:grid-col">
    <div class="do-dont">
      <div class="do-dont__dont">
        <h4 class="do-dont__heading">
          {% include icon.html icon="cancel" %}
          What not to do
        </h4>
        <div class="do-dont__content">
          <ul>
            <li>Do not assume gender identity based on the user's sex.</li>
            <li>Do not include “prefer not to answer.” If you are considering adding this option, then consider whether the question is needed at all.</li>
            <li>Do not combine gender identity and sex into a single question.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview margin-top-2">
  <h4 id="pattern-preview-sex" class="usa-accordion__heading site-accordion-heading">
    <button type="button" class="usa-accordion__button" aria-controls="accordion-preview-01" aria-expanded="true">
      Pattern preview
    </button>
  </h4>
  <div id="accordion-preview-01" class="usa-accordion__content">
    {% include patterns/sex.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <h4 id="pattern-code-sex" class="usa-accordion__heading site-accordion-heading">
    <button type="button" class="usa-accordion__button" aria-controls="accordion-code-01" aria-expanded="false">
      Pattern code
    </button>
  </h4>
  <div id="accordion-code-01" class="usa-accordion__content copy-code">
    <div class="usa-sr-only">
      {% highlight text%}{% include patterns/sex.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/sex.html %}{% endhighlight %}
  </div>
</div>

#### Considerations

{:.usa-content-list}
- **Confirm you need this information.** As with all personal information, consider whether you need to collect it at all. Clearly explain the reason for asking for the information and what will be done to secure the user’s privacy and safety.
- **Be specific about the information you are requesting.** Clearly state the context, such as, “Please enter the sex that appears on your driver's license, state ID, passport, or passport card.” so that users can successfully provide the information required.

#### Accessibility

{:.usa-content-list}
- **Customization.** As you customize, make sure you follow [accessibility guidelines for form templates]({{ site.baseurl }}/templates/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/components/form/).


{:.site-component-section-title}
## Related components, patterns, and templates

{:.usa-content-list}
- [Checkbox]({{ site.baseurl }}/components/checkbox/) component

{:.site-component-section-title}
## References

- Initial Guidance Regarding President Trump's Executive Order Defending Women (January 29, 2025) Retrieved on January 30, 2025 from <https://chcoc.gov/content/initial-guidance-regarding-president-trump%E2%80%99s-executive-order-defending-women.> [Archive of initial guidance](https://web.archive.org/web/20250129235334/https://chcoc.gov/content/initial-guidance-regarding-president-trump%E2%80%99s-executive-order-defending-women).
- Defending Women from Gender Ideology Extremism And Restoring Biological Truth To The Federal Government (January 20, 2025) Retrieved on January 30, 2025 from <https://www.whitehouse.gov/presidential-actions/2025/01/defending-women-from-gender-ideology-extremism-and-restoring-biological-truth-to-the-federal-government/> [Archive of Defending Women EO](https://web.archive.org/web/20250130171225/https://www.whitehouse.gov/presidential-actions/2025/01/defending-women-from-gender-ideology-extremism-and-restoring-biological-truth-to-the-federal-government/)

{:.site-component-section-title}
## Disclaimer

Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.
