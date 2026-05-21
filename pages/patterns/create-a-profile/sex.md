---
title: Sex
story: Help users select their sex
permalink: /patterns/create-a-user-profile/sex/
redirect_from:
  - /patterns/create-a-user-profile/gender-identity-and-sex/
layout: pattern
category: Patterns
sub-category: Create a user profile
lead: This helps users to provide sex information.
changelog:
  key: pattern-user-profile-sex
---

{:.site-component-section-title}
## About this pattern

Services collect sex information as part of a user profile, to match documents for identity proofing purposes, and to provide biological information in a clinical context.

By [Executive Order](https://www.federalregister.gov/documents/2025/01/30/2025-02090/defending-women-from-gender-ideology-extremism-and-restoring-biological-truth-to-the-federal), "it is the policy of the United States to recognize two sexes, male and female [...] 'Sex' is not a synonym for and does not include the concept of 'gender identity.' [...] When administering or enforcing sex-based distinctions, every agency and all Federal employees acting on an official capacity on behalf of their agency shall use the term 'sex' and not 'gender' in all applicable Federal policies and documents."

Some states have policies that differ, which may be reflected on state identity documents.

### When to use this pattern

Follow this pattern when you need to ask for a user's sex as a part of your service. Only ask for sex if you need that information.

### What's the solution?

Understand why you are collecting this information. When asking for sex information, include only "Male" and "Female" as options. 

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
            <li>Do determine if you need to collect sex data.</li>
            <li>Do understand that collecting sex information for identity proofing purposes may be complicated by state identity document approaches.</li>
            <li>Do provide helper text that explains why you are asking for this data and who it will be shared with.</li>
            <li>Do provide a controlled vocabulary when collecting sex data (<code>Male</code> and <code>Female</code>)</li>
            <li>Do use fieldset and legend to group related radio buttons together, and clear labels and attributes on these form elements.</li>
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
            <li>Do not use the word "gender" when you are asking for sex data.</li>
            <li>Do not include “prefer not to answer.” If you are considering adding this option, then consider whether the question is needed at all.</li>
            <li>Do not include <code>X</code> as an option when collecting sex data.</li>
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
- **Make sure the data you collect match what's required by your system.** Be aware that for identity proofing, especially when integrating state information, there may be data that differs from the federal requirements.

#### Accessibility

{:.usa-content-list}
- **Customization.** As you customize, make sure you follow [accessibility guidelines for form templates]({{ site.baseurl }}/templates/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/components/form/).


{:.site-component-section-title}
## Related components, patterns, and templates

{:.usa-content-list}
- [Radio buttons]({{ site.baseurl }}/components/radio-buttons/) component

{:.site-component-section-title}
## References

- Defending Women from Gender Ideology Extremism And Restoring Biological Truth To The Federal Government (January 20, 2025) Retrieved on January 30, 2025 from <https://www.federalregister.gov/documents/2025/01/30/2025-02090/defending-women-from-gender-ideology-extremism-and-restoring-biological-truth-to-the-federal>. [Archive of Defending Women EO](https://web.archive.org/web/20250130100632/https://www.federalregister.gov/documents/2025/01/30/2025-02090/defending-women-from-gender-ideology-extremism-and-restoring-biological-truth-to-the-federal)
- Initial Guidance Regarding President Trump's Executive Order Defending Women (January 29, 2025) Retrieved on January 30, 2025 from <https://www.opm.gov/media/yvlh1r3i/opm-memo-initial-guidance-regarding-trump-executive-order-defending-women-1-29-2025-final.pdf>. [Archive of initial guidance](https://web.archive.org/web/20250131125317/https://www.opm.gov/media/yvlh1r3i/opm-memo-initial-guidance-regarding-trump-executive-order-defending-women-1-29-2025-final.pdf).

{:.site-component-section-title}
## Disclaimer

Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.
