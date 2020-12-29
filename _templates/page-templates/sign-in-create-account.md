---
permalink: /templates/authentication-pages/
redirect_from:
- /page-templates/authentication-pages/
title: Authentication pages
layout: styleguide
category: Templates
lead: Allow users to create an account or sign in.
subnav:
- text: Create account
  href: '#create-account'
- text: Sign in
  href: '#sign-in'
- text: Multiple sign-in options
  href: '#multiple-sign-in-options'
---

It can be difficult or confusing for users to create accounts or sign in to a website. The best way to help is to provide context about why they’re creating an account and to remove unnecessary distractions from the page.

You should use a shared service or the authentication page templates to create a more consistent experience across sites and services.

Government websites requiring account creation can use [login.gov](https://login.gov), a FedRAMP-authorized, single sign-on shared service. Login.gov is simple, secure, and follows our sign-in guidance. Users can also sign in to any government website that uses login.gov with the same username and password.

If you’re unable to use a shared service like login.gov, use our authentication page templates:

- [Create account template](#create-account)
- [Sign-in template](#sign-in)
- [Multiple sign-in options](#multiple-sign-in-options)


<div class="site-component-section" markdown="1">

## Create account

### Explain the benefits of setting up an account

Site users will be more likely to create an account if it’s easy and they understand the benefits. Keep the account creation process simple with a single “create account” button and limited distractions (like other calls-to-action). Succinctly outline the benefits of setting up an account, emphasizing what they can do and how it can help them.

<div class="preview">
  <a class="media_link" href={% include component-preview-link.html component="layout--create-account" %}>
    <img src="{{ site.baseurl }}/assets/img/templates/layout--create-account.png" alt="Create account">
  </a>
  <a class="usa-button" href={% include component-preview-link.html component="layout--create-account" %}>Demo create account page template</a>
</div>
{% include code/accordion.html component="template-create-account" %}
<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="create-account-docs">
    Guidance
  </button>
<div id="create-account-docs" aria-hidden="false" class="usa-accordion__content site-component-usage" markdown="1">

### When to use the create account template

{:.usa-content-list}

- **Users can create an account directly on your website.** This template is intended for agencies who have a self-hosted authentication system and need a design that’s simple, usable, and mobile-friendly.

### When to consider something else

{:.usa-content-list}

- **Your agency uses a third-party authentication system.** If you’re leveraging a shared service, follow the user experience guidelines from that service. For example, login.gov recommends placing a “sign in” link in the header of your website that takes users through the entire “sign in” or “create an account” experience on the login.gov site.

### Usability guidance

{:.usa-content-list}

- **Help users focus on the task.** Remove extraneous content. A “create account” page works best when it’s simple, focused, and to-the-point.
- **Use specific field labels.** If you’re asking for a username, say username. If it’s an email, say email address. Don’t make the user guess which one you mean.
- **Keep the form short.** Only ask for what's necessary to create an account. Eliminate optional fields whenever possible, and keep the information pertinent to the account creation process (like username, email, password, and security questions). If you need to ask for something outside this common account creation information, explain why it’s needed.
- **Convey clear password requirements.** Clearly indicate any password requirements. If possible, validate these requirements as users type, and use a password meter to show password strength.
- **Allow users to toggle password visibility.** This helps ensure users are entering passwords correctly while maintaining privacy when needed.
- **Enable copy and paste.** Many users rely on password generators because they provide secure passwords and phrases they don't have to memorize. Forcing manual entry is a barrier to usability and can cause mistakes.
- **Use consistent, accurate language.** Use the phrase “create account” instead of “sign up,” which can be more easily confused with “sign in.” It’s also more accurate, since users aren’t necessarily “signing up” for anything when accessing a government site or service.
- **Allow users to switch between creating an account and signing in.** Users should be able to easily find where to sign in from the create account page, and vice versa. This also applies to the global header of the site, where users should have direct access to either the sign-in or create an account page.
- **Include required legal agreements.** Work with your agency’s information security officer and general counsel to determine how to handle legal copy placement regarding terms and conditions. Use a checkbox to affirm that your users accept terms and conditions. Make the terms and conditions easy to find without distracting from the primary purpose of creating an account.

### Components used in this template

- [Extended header]({{ site.baseurl }}/components/header/#extended) with `.usa-nav` and `.usa-menu-btn` removed
- [Form controls]({ site.baseurl }}/components/form-controls/)
- [Grid]({{ site.baseurl }}/utilities/layout-grid/)
- [Buttons]({{ site.baseurl }}/components/button/)
- Graphic list
- [Medium footer]({{ site.baseurl}}/components/footer/#medium-footer)

### Additional Information

NIST Special Publication 800-63-3, [Digital Identity Guidelines](https://pages.nist.gov/800-63-3/), provides technical requirements for federal agencies implementing digital identity services. The guidelines cover identity proofing and authentication of users (such as employees, contractors, or private individuals) interacting with government IT systems over open networks.


</div>
</div>
</div>

<div class="site-component-section" markdown="1">

## Sign-in

{:.site-text-intro}

Provide users with a clear and uncluttered sign-in experience.

<div class="preview">
  <a class="media_link" href={% include component-preview-link.html component="layout--sign-in" %}>
    <img src="{{ site.baseurl }}/assets/img/templates/layout--sign-in.png" alt="Sign in">
  </a>
  <a class="usa-button" href={% include component-preview-link.html component="layout--sign-in" %}>Demo sign in page template</a>
</div>
{% include code/accordion.html component="template-sign-in" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="sign-in-docs">
    Guidance
  </button>
<div id="sign-in-docs" aria-hidden="false" class="usa-accordion__content site-component-usage" markdown="1">

### When to use the sign-in template

{:.usa-content-list}

- **Users have accounts directly on your website.** This template is intended for agencies who have a self-hosted authentication system and need a design that’s simple, usable, and mobile-friendly.

### When to consider something else

{:.usa-content-list}

- **Your agency uses a third-party authentication system.** If you’re leveraging a shared service, follow the sign-in guidelines from that service. For example, login.gov recommends placing a “sign-in” link in the header of your website that takes users through the entire “sign in” or “create an account” experience on the login.gov site.

### Usability guidance

{:.usa-content-list}

- **Clearly provide a way to reset passwords or recover usernames.** Provide a clearly marked link for users to reset a password or recover a forgotten username.
- **Provide secure error feedback.** If a sign-in attempt fails, let users know there was an error, but don’t indicate which field was invalid, for example “Incorrect password” or “Username not found.” This helps maintain stronger protection against hackers and unauthorized users.
- **Help users focus on the task.** Remove extraneous content to minimize distractions.
- **Use specific field labels.** If you’re asking for a username, say username. If it’s an email, say email address. Don’t make the user guess which one you mean.
- **Allow users to toggle password visibility.** This helps ensure users are entering passwords correctly while maintaining privacy when needed.
- **Enable copy/paste.** Many users rely on password generators because they provide secure passwords and phrases they don't have to memorize. Forcing manual entry is a barrier to usability and can cause mistakes.
- **Use consistent, accurate language.** Use “sign in” if it’s a verb (like a link in a call-to-action or button) or “sign-in” if it's a noun or adjective (like "sign-in page"). Don’t use “login” or “log in.”
- **Allow users to switch between creating an account and signing in.** Users should be able to easily find where to sign in from the create account page, and vice versa. This also applies to the global header of the site, where users should have “one-click” access to either the sign-in or create an account page.

### Components used in this template
- [Extended header]({{ site.baseurl }}/components/header/#extended) with `.usa-nav` and `.usa-menu-btn` removed
- [Form controls]({ site.baseurl }}/components/form-controls/)
- [Grid]({{ site.baseurl }}/utilities/layout-grid/)
- [Buttons]({{ site.baseurl }}/components/button/)
- Graphic list
- [Medium footer]({{ site.baseurl}}/components/footer/#medium-footer)

</div>
</div>
</div>

<div class="site-component-section" markdown="1">

## Multiple sign-in options

{:.site-text-intro}

Use one landing page for all sign-in options.

If you have multiple sign-in options, use this template to guide users to access their account through a prioritized option.

<div class="preview">
  <a class="media_link" href={% include component-preview-link.html component="layout--sign-in-multiple" %}>
    <img src="{{ site.baseurl }}/assets/img/templates/layout--multiple-sign-in-options.png" alt="Sign in">
  </a>
  <a class="usa-button" href={% include component-preview-link.html component="layout--sign-in-multiple" %}>Demo multiplesign-in-options page template</a>
</div>
{% include code/accordion.html component="template-sign-in-multiple" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="multiple-sign-in-docs">
    Guidance
  </button>
<div id="multiple-sign-in-docs" aria-hidden="false" class="usa-accordion__content site-component-usage" markdown="1">

### When to use the multiple sign-in options template

{:.usa-content-list}

- **Multiple, legacy authentication systems.** If you have more than one authentication system in place and no current ability to consolidate, this template allows you to prioritize one system for account creation while providing multiple options for signing in.

### When to consider something else

{:.usa-content-list}

- **Just one sign-in option.** If you can reduce your sign-in options to one authentication system, we recommend avoiding this pattern.

### Usability guidance

{:.usa-content-list}

- **Emphasize one method over others.** Indicate a preferred method by giving it more prominence in your design.
- **Focus on the task.** Remove extraneous content to minimize distractions.
- **Use consistent, accurate language.** Use “sign in” if it’s a verb (like link in a call-to-action or button) or “sign-in” if it's a noun or adjective form (like "sign-in page"). Don’t use “login” or “log in.”
- **Explain why and how.** Let users know the value of accessing their account and explain the purpose of any additional sign-in options.


### Components used in this template
- [Extended header]({{ site.baseurl }}/components/header/#extended) with `.usa-nav` and `.usa-menu-btn` removed
- [Form controls]({ site.baseurl }}/components/form-controls/)
- [Grid]({{ site.baseurl }}/utilities/layout-grid/)
- [Buttons]({{ site.baseurl }}/components/button/)
- Graphic list
- [Medium footer]({{ site.baseurl}}/components/footer/#medium-footer)

</div>
</div>
</div>