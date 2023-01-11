---
title: Recognize and fix errors
story: Help the user to understand when an error has been made in form entry, how to fix the error, and when the information has been correctly entered
permalink: /patterns/complete-a-complex-form/recognize-fix-errors/
layout: pattern
category: Patterns
sub-category: Complete a complex form
lead: The recognize and fix errors pattern helps users quickly and efficiently recover from errors. The messaging is calm and clear and is designed to help users find a successful resolution without undue stress.
changelog:
  key: pattern-complex-form-recognize-fix-errors
---

{:.site-component-section-title}
## About this pattern

### What problem does this solve?
Forms can be confusing to complete. This is especially true if users have low literacy or limited English proficiency, use assistive technologies, or are under a great deal of stress. Well-designed feedback on form field completion, including error messages, can help users understand form field requirements.

### When to use this pattern 
Use this pattern when you are creating digital forms that have required fields or fields with specific requirements.

### What’s the solution
Provide contextual guidance that clearly states both the problem and the solution.

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
            <li>Use feedback styling for error messaging that is unique.</li>
            <li>Make the error messaging noticeable.</li>
            <li>Place the error message in close proximity to the field with an error.</li>
            <li>Use language that helps the user, not language that admonishes them.</li>
            <li>Keep as much of the user’s work as possible. If possible, allow them to edit content they’ve already entered.</li>
            <li>Provide feedback on successful interactions in addition to problems. For example, “You have successfully updated your account information.”</li>
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
            <li>Do not rely on color only to indicate errors.</li>
            <li>Do not display error messages before the error has occurred. For example, don’t validate an email address while the user is in the process of typing the email address, but has not yet completed it.</li>
            <li>Do not imply the user is at fault.</li>
            <li>Don’t use exclamation marks or all caps.</li>
            <li>Do not attempt to use humor. Tone is not universal and error messages may be confusing or perceived as patronizing.</li>
            <li>Don’t require the error be fixed within a specific time frame, unless the time frame can be easily extended.</li>
            <li>Don’t create a sense of urgency that might add to the user's stress.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview margin-top-2">
  <button class="usa-accordion__button" aria-controls="accordion-preview-01" aria-expanded="true"><h3 id="pattern-preview">Pattern preview</h3></button>
  <div id="accordion-preview-01" class="usa-accordion__content">
    {% include patterns/establish-trust.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code-01" aria-expanded="false"><h3 id="pattern-code">Pattern code</h3></button>
  <div id="accordion-code-01" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
       {% highlight text%}{% include patterns/establish-trust.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/establish-trust.html %}{% endhighlight %}
  </div>
</div>

### Considerations

{:.usa-content-list}
- <strong>Prevent errors, if possible.</strong> Wherever possible, structure your form to <a href="{{ site.baseurl }}/patterns/complex-forms/prevent-mistakes/">help the user avoid making mistakes</a> using hint text and constraints. 
- <strong>Validate, where possible.</strong> Validate format and content for fields like addresses. If possible, allow the user to override validation flags if it’s likely a specific type of field may require more flexibility. For example, certain ZIP codes may be shared by several cities or towns. Offering the user a choice between the information entered and the information the system expects will allow them to proceed through the form. 
- <strong>Use clear, unambiguous language.</strong> Use jargon-free language to communicate the error state. Note what the user needs to provide, not what has been incorrectly entered. For example, instead of “Incorrect file type” try something like “Please make sure the file you are uploading is a .PDF or .DOC file, and try again.” 
- <strong>Avoid blame.</strong> Don’t use language that blames the user. The user may be confused, under stress, or in a difficult situation. Take ownership of the problem. For example, “We’re sorry, we can’t find your record in our system.”
- <strong>Combining multiple error communication strategies</strong> can help make errors more noticeable for users and help them resolve issues faster. For example, in addition to error states and error messages near specific form fields, a top of page error summary with a link for each invalid field may be useful in many situations.
- <strong>Error focus.</strong> Don’t make the user search for the problem. Transfer focus to the specific field with an error when validation fails. 
- <strong>Multiple errors.</strong> When the user has more than one field with errors, flag the error in close proximity to each field, and consider putting a list of all the errors at the top.
- <strong>Provide a solution.</strong> If possible, provide a solution, such as a look-up table of school district codes.
- <strong>Provide a way out.</strong> Allow the user to continue working on the form or to save and resume the form without correcting the error. Don’t force the user to resolve an issue with a specific field or lose all their data by leaving the form.
- <strong>Reward progress.</strong> Consider whether success indicators will be helpful. This can be associated with fields or sections of a form. It can be used to communicate successful completion of the field or section and may encourage completion of the entire form.

### Accessibility

{:.usa-content-list}
- <strong>Customization.</strong> As you customize, make sure you follow <a href="{{ site.baseurl }}/templates/form-templates/">accessibility guidelines for form templates</a> and <a href="{{ site.baseurl }}/components/form/">accessibility guidelines for form controls</a>.
- <strong>Don’t visually hide alert messages and then make them visible when they are needed.</strong> Users of older assistive technologies may still be able to perceive the alert messages even if they are not currently applicable.
- <strong>Use the proper ARIA role.</strong> The ARIA `role` attribute can notify users of assistive technologies of time-sensitive and important messages. See the <a href="{{ site.baseurl }}/components/alert/">Alert component</a> for more information on ARIA roles.
- <strong>Don’t rely on color alone to indicate errors.</strong> Users should be able to distinguish error states from surrounding text and nearby form fields. When error messages are communicated inside a user interface element like a container div, text needs a contrast level of at least 3:1 with adjacent colors (the same as AA Large, or a USWDS magic number of 40). See [WCAG SC 1.4.11: Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html#dfn-user-interface-component) for additional recommendations. 
- When <strong>combining an error message with an icon</strong>, make sure to use a recognizable icon like the USWDS `error` or `error outline` icons. Ensure the error icon has at least a 3:1 contrast ratio with surrounding colors. Icons should always be paired with a text error message, a short alt-text message like “Error”, or a programmatic error state like aria-invalid.
- <strong>Avoid overwhelming use of color.</strong> While there is a strong convention for using red to highlight errors, be judicious in how much red you use. Bright red and orange can produce strong negative emotional reactions such as fear or panic. 


### Messaging

Generally, the most effective guidance or interaction feedback will be clear, concise, and friendly but not intimate. 

Each agency or program has their own approach to messaging, style, and voice and tone. The suggestions below are examples of good, human-centered messaging, but do not replace agency- or program-level guidance.

{:.usa-content-list}
- <strong>Instead of:</strong> The applicant, the patient<br/>
    <strong>Try:</strong> You, the person
- <strong>Instead of:</strong> If you need immediate assistance<br/>
    <strong>Try:</strong> If you need help right now
- <strong>Instead of:</strong> You’re not in our system.<br/>
    <strong>Try:</strong> We can’t find your records under that login information. For help accessing your records, please call...
- <strong>Instead of:</strong> Something went wrong<br/>
    <strong>Try:</strong> We weren’t able to upload your file. Please make sure it is a .pdf or a .doc file, and try again.
- <strong>Instead of:</strong> Invalid credentials<br/>
    <strong>Try:</strong> The email or password you entered do not match our records. Please double-check and try again. (Also see the <a href="{{ site.baseurl }}/templates/authentication-pages/sign-in/">Sign-in template</a> for more information.)
- <strong>Instead of:</strong> Warning! You are about to delete your record.<br/>
    <strong>Try:</strong> Are you sure you want to delete your record? This cannot be undone.
- <strong>Instead of:</strong> Please try again later.<br/>
    <strong>Try:</strong> Our system isn’t working right now. Please try again in a few minutes.

### Special cases

{:.usa-content-list}
- <strong>Complex errors.</strong> Some errors are more complex and will require greater effort to resolve. In this case, longer messaging may be required. If this is the case, structure the message to <a href="{{ site.baseurl }}/patterns/complete-a-complex-form/establish-trust/">establish trust</a> and provide a solution. For example,<br/>
    <ul>
        <li><strong>Clear title:</strong> Summarize the problem and why you need the information (We need to match your address and verify your identity to confirm eligibility.</li>
        <li><strong>Description:</strong> Longer description of why the information is needed, generally 2-3 sentences.</li>
        <li><strong>What action they can take:</strong> A description of the action they can take, with multiple paths if possible (such as calling a phone number or saving the form and getting the information to enter later.)</li>
    </ul>


{:.site-component-section-title}

## Related components, patterns, and templates

{:.usa-content-list}

- <a href="{{ site.baseurl }}/components/alert/">Alert</a> component
- <a href="{{ site.baseurl }}/components/modal/">Modal</a> component
- <a href="{{ site.baseurl }}/patterns/complete-a-complex-form/avoid-errors/">Avoid errors</a> pattern
- <a href="{{ site.baseurl }}/patterns/complete-a-complex-form/progress-easily/">Progress easily</a> pattern


{:.site-component-section-title}
## References
- 10 best examples and guidelines for error messages. (January 14, 2021) Retrieved on December 29, 2022 from [https://uxwritinghub.com/error-message-examples/](https://uxwritinghub.com/error-message-examples/). 
- CFPB Design System notification pattern. (December 29, 2022) Retrieved on December 29, 2022 from [https://cfpb.github.io/design-system/components/notifications](https://cfpb.github.io/design-system/components/notifications).
- Confirmation dialogs can prevent user errors  —  if not overused. (February 18, 2018) Retrieved on December 30, 2022 from [https://www.nngroup.com/articles/confirmation-dialog/](https://www.nngroup.com/articles/confirmation-dialog/). 
- Designing better error messages UX. (August 25, 2022) Retrieved on December 29, 2022 from [https://www.smashingmagazine.com/2022/08/error-messages-ux-design/](https://www.smashingmagazine.com/2022/08/error-messages-ux-design/).
- Error message guidelines. (June 23, 2001) Retrieved on December 29, 2022 from [https://www.nngroup.com/articles/error-message-guidelines/](https://www.nngroup.com/articles/error-message-guidelines/)
- Hostile patterns in error messages. (October 30, 2022) Retrieved on December 29, 2022 from [https://www.nngroup.com/articles/hostile-error-messages/](https://www.nngroup.com/articles/hostile-error-messages/).
- Ontario, Canada error messaging pattern. (n.d.) Retrieved on December 29, 2022 from [https://designsystem.ontario.ca/components/detail/error-messaging.html](https://designsystem.ontario.ca/components/detail/error-messaging.html).
- Preventing user errors: Avoiding conscious mistakes. (September 7, 2015) Retrieved on December 30, 2022 from [https://www.nngroup.com/articles/user-mistakes/](https://www.nngroup.com/articles/user-mistakes/).
- Preventing user errors: Avoiding unconscious slips. (August 23, 2015) Retrieved on December 30, 2022 from [https://www.nngroup.com/articles/slips/](https://www.nngroup.com/articles/slips/). 
- UK’s error message pattern. (n.d.) Retrieved on December 29, 2022 from [https://design-system.service.gov.uk/components/error-message/](https://design-system.service.gov.uk/components/error-message/). 
- Veterans Affairs' help users to recover from errors pattern. (August 26, 2022) Retrieved on December 29, 2022 from [https://design.va.gov/patterns/help-users-to/recover-from-errors](https://design.va.gov/patterns/help-users-to/recover-from-errors).


{:.site-component-section-title}
## Disclaimer
 Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.
