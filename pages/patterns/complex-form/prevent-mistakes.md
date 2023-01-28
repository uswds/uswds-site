---
title: Prevent mistakes
story: Help prevent user errors in form inputs and selections
permalink: /patterns/complete-a-complex-form/prevent-mistakes/
layout: pattern
category: Patterns
sub-category: Complete a complex form
lead: The prevent mistakes pattern helps users to avoid making errors when they complete forms. This pattern is used to support easy and clear form design that minimizes confusion and supports successful completion.
changelog:
  key: pattern-complex-form-prevent-mistakes
---

{:.site-component-section-title}
## About this pattern

### What problem does this solve?
Forms can be confusing to complete. This is especially true if users have low literacy or limited English proficiency, use assistive technologies, or are under a great deal of stress. Good design and copy can help prevent a lot of errors before they are made.

### When to use this pattern 
Use this pattern when you are creating digital forms that have required fields or fields with specific requirements and when you are providing feedback on user actions. 

### What’s the solution
Provide helpful design constraints, clear affordances, and concise guidance for form elements.

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
            <li>Provide gentle warnings or guidance to prevent errors. For example, clearly state file size limitations.</li>
            <li>Provide robust hint text.</li>
            <li>Clearly mark required fields.</li>
            <li>Use <a href="{{ site.baseurl }}/components/input-mask/">input masks</a> where appropriate, to structure form inputs.</li>
            <li>Use in-line validation in addition to error messages.</li>
            <li>Provide helpful constraints, offer suggestions, or autofill content where appropriate.</li>
            <li>Offer good defaults. For example, an appointment selection component might default to the next available appointment. </li>
            <li>Provide lookup tables or links to find the information, if available. For example, if you require a numeric school district or county code, allow the user to look it up.</li>
            <li>Prompt the user to confirm prior to completing any destructive action. For example, “Do you really want to exit this form without saving? You will lose all the data you entered.”</li>
            <li>Support "undo" if possible.</li>
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
            <li>Do not use language that blames the user.</li>
            <li>Do not attempt to use humor. Tone is not universal and error messages may be confusing or perceived as patronizing.</li>
            <li>Do not use jargon or highly technical language.</li>
            <li>Do not show options that aren’t available to the user. For example, don’t show dates that are unavailable for appointments, or clearly indicate that those dates are unavailable.</li>
            <li>Don’t create a sense of urgency that might add to the user's stress.</li>
            <li>Don’t require the user to complete the form within a specified period of time, unless that time can be easily extended.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview margin-top-2">
  <button class="usa-accordion__button" aria-controls="accordion-preview-01" aria-expanded="true"><h3 id="pattern-preview">Pattern preview</h3></button>
  <div id="accordion-preview-01" class="usa-accordion__content">
    {% include patterns/prevent-errors.html %}
  </div>
</div>

### Considerations

{:.usa-content-list}
- <strong>Prevent errors, if possible.</strong> Wherever possible, structure your form to help the user avoid making mistakes. Provide helpful constraints, such as using <a href="{{ site.baseurl }}/patterns/create-a-user-profile/date-of-birth/">three, clearly marked fields to collect dates</a>. Use an <a href="{{ site.baseurl }}/components/input-mask/">input mask</a> to provide guidance for phone numbers and ZIP codes. 
- <strong>Provide guidance before errors are entered.</strong> If your field has specific requirements, such as a character count limit or a specific required structure, provide guidance on those requirements before the user begins entering content, using hint text, examples, or other instruction. For example, provide the file size limit and types of file supported for file attachments.
- <strong>Avoid putting hint text as a placeholder in form entry fields.</strong> Place hint text in close proximity and before the data entry field, but not within the field itself as a placeholder. When users start to type, placeholder text will disappear, which means users won’t be able to reference it.
- <strong>Provide clear warnings if the user is about to make a mistake.</strong> For example, if the user is approaching the character limit in a text box, consider changing the color of the character count to red and bolding the character limit guidance.
- <strong>Use polite, simple, conversational language.</strong> Provide guidance that can help a user avoid an error. Provide examples of what information is expected in the field. Keep the information short, but polite. 
- <strong>Incorporate trauma-informed design considerations.</strong> If you are collecting information from someone in crisis (and most people are at some point), be especially careful with the language in your guidance. For resources on trauma-informed design, see the <a href="{{ site.baseurl }}/patterns/complex-forms/progress-easily#trauma-informed-design">Progress easily</a> complex forms pattern references.

### Accessibility

{:.usa-content-list}
- <strong>Customization.</strong> As you customize, make sure you follow <a href="{{ site.baseurl }}/templates/form-templates/">accessibility guidelines for form templates</a> and <a href="{{ site.baseurl }}/components/form/">accessibility guidelines for form controls</a>.
- <strong>Don’t visually hide alert messages and then make them visible when they are needed.</strong> Users of older assistive technologies may still be able to perceive the alert messages even if they are not currently applicable.
- <strong>Use the proper ARIA role.</strong> The ARIA `role` attribute can notify users of assistive technologies of time-sensitive and important messages. See the <a href="{{ site.baseurl }}/components/alert/">Alert component</a> for more information on ARIA roles.
- <strong>Help users avoid serious consequences as the result of a mistake</strong> when performing an action that cannot be reversed. Make sure that you provide the ability to check, confirm, or reverse data entered by the user. See [WCAG SC 3.3.4: Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html) for more information.

{:.site-component-section-title}
## Related components, patterns, and templates

{:.usa-content-list}

- <a href="{{ site.baseurl }}/components/alert/">Alert</a> component
- <a href="{{ site.baseurl }}/components/input-mask/">Input mask</a> component
- <a href="{{ site.baseurl }}/patterns/complete-a-complex-form/establish-trust/">Establish trust</a> pattern


{:.site-component-section-title}
## References
- Build trust with these UX guidelines (March 16, 2019) Retrieved on July 19, 2022, from [https://uxdesign.cc/build-trust-with-these-ux-guidelines-f3d547bb2014.](https://uxdesign.cc/build-trust-with-these-ux-guidelines-f3d547bb2014)

- 10 best examples and guidelines for error messages. (January 14, 2021) Retrieved on December 29, 2022 from [https://uxwritinghub.com/error-message-examples/](https://uxwritinghub.com/error-message-examples/). 
- CFPB Design System notification pattern. (December 29, 2022) Retrieved on December 29, 2022 from [https://cfpb.github.io/design-system/components/notifications](https://cfpb.github.io/design-system/components/notifications).
- Confirmation dialogs can prevent user errors  —  if not overused. (February 18, 2018) Retrieved on December 30, 2022 from [https://www.nngroup.com/articles/confirmation-dialog/](https://www.nngroup.com/articles/confirmation-dialog/). 
- Designing better error messages UX. (August 25, 2022) Retrieved on December 29, 2022 from [https://www.smashingmagazine.com/2022/08/error-messages-ux-design/](https://www.smashingmagazine.com/2022/08/error-messages-ux-design/).
- Error message guidelines. (June 23, 2001) Retrieved on December 29, 2022 from [https://www.nngroup.com/articles/error-message-guidelines/](https://www.nngroup.com/articles/error-message-guidelines/).
- Error prevention (Legal, Financial, Data). (December 24, 2022) Retrieved on January 27, 2023 from [https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html](https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html)
- Hostile patterns in error messages. (October 30, 2022) Retrieved on December 29, 2022 from [https://www.nngroup.com/articles/hostile-error-messages/](https://www.nngroup.com/articles/hostile-error-messages/).
- Ontario, Canada error messaging pattern. (n.d.) Retrieved on December 29, 2022 from [https://designsystem.ontario.ca/components/detail/error-messaging.html](https://designsystem.ontario.ca/components/detail/error-messaging.html).
- Preventing user errors: Avoiding conscious mistakes. (September 7, 2015) Retrieved on December 30, 2022 from [https://www.nngroup.com/articles/user-mistakes/](https://www.nngroup.com/articles/user-mistakes/).
- Preventing user errors: Avoiding unconscious slips. (August 23, 2015) Retrieved on December 30, 2022 from [https://www.nngroup.com/articles/slips/](https://www.nngroup.com/articles/slips/). 
- UK’s error message pattern. (n.d.) Retrieved on December 29, 2022 from [https://design-system.service.gov.uk/components/error-message/](https://design-system.service.gov.uk/components/error-message/). 
- Veterans Affairs' help users to recover from errors pattern. (August 26, 2022) Retrieved on December 29, 2022 from [https://design.va.gov/patterns/help-users-to/recover-from-errors](https://design.va.gov/patterns/help-users-to/recover-from-errors).


{:.site-component-section-title}
## Disclaimer
 Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.
