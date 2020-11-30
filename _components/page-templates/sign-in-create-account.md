---
permalink: /page-templates/authentication-pages/
title: Authentication pages
layout: styleguide
category: Page templates
lead: Allow users to create or sign in to their account
subnav:
- text: Create account
  href: '#create-account'
- text: Sign in
  href: '#sign-in'
- text: Third-party options
  href: '#third-party-options'
---

Users can have difficulty creating accounts or signing in to a website. The best way to help them is to provide context about what they’re creating an account for and remove unnecessary distractions from the page so they can focus on the task at hand.

## Shared services

Government websites requiring account creation can use [login.gov](https://login.gov), a FedRAMP-authorized, single sign-on shared service. Login.gov is simple and secure, and it includes our sign-in guidance “out of the box.” This benefits the public because they can sign in to any government website that uses login.gov with the same username and password, giving them a more consistent experience across websites and digital services..

<div class="site-component-section" markdown="1">

## Create account

{:.site-text-intro}

Explain the benefits of setting up an account

Site users will be more likely to create an account if it’s easy to do and they understand the benefits it provides. Keep the account creation process simple and clear with limited distractions (e.g., other calls-to-action, messaging, or interactions) and a single “create account” button. Briefly point out the benefits of setting up an account, emphasizing what they can do and how it can help them.

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

- **Users can create an account directly on your website.** This template is great for agencies who have a self-hosted authentication system to leverage a design that’s simple, mobile-friendly, and consistent across government websites.

### When to consider something else

{:.usa-content-list}

- **Your agency uses a third-party authentication system.** If you’re leveraging a shared service (as we recommend), follow the UX guidelines from that service. For instance, login.gov recommends placing a “sign in” link in the header of your website that takes users through the entire “sign in” or “create an account” experience on the login.gov site.

### Usability guidance

{:.usa-content-list}

- **Focus on the task.** Remove extra, unneeded information, and don’t overcomplicate the value propositions. A “create account” page works best when it’s simple, focused, and to-the-point.
- **Use specific field labels.** If you’re asking for a username, say username. If it’s an email, say email address. Don’t make the user guess which one you mean. 
- **Keep the form short.** Only ask for the essential things a user needs to create an account. Eliminate optional fields whenever possible, and keep the information pertinent to the account creation process (e.g., username, email, password, security questions, etc.). If you need to ask for something outside common account creation information, explain to the user why it’s needed.
- **Convey clear password requirements.** Clearly indicate your password requirements when users are creating a password. If possible, visually indicate to the user if they've met password strength requirements as they type, and use a password meter to show the user how strong their password is.
- **Allow users to toggle password visibility.** This helps ensure users are entering it correctly while maintaining privacy when it’s needed as well. 
- **Enable copy/paste and autocomplete.** Many users rely on password generators because they provide secure passwords and phrases that a user doesn’t have to memorize. Forcing a user to type these in is a large barrier to usability. Allowing autocomplete also helps reduce user burden and typos.
- **Use consistent, accurate language.** Use the phrase “create account” instead of “sign up,” which can be more easily confused with “sign in.” It’s also more accurate, since users aren’t necessarily “signing up” for something when accessing a government service or site. 
- **Allow users to switch between creating an account and signing in.** Users should be able to easily find where to sign in from the create account page, and vice versa. This also applies to the global header of the site, where users should have “one-click” access to either the sign-in or create an account page. 
- **Include required legal agreements.** Work with your agency’s security officer and general counsel to determine how to handle legal copy placement regarding terms and conditions. Use a checkbox to affirm that your users accept terms and conditions. Make the terms and conditions easy to find without distracting from the primary purpose of creating an account.

### Components used in this template
- Extended header with `.usa-nav` and `.usa-menu-btn` removed
- Form controls
- Grid
- Buttons
- Graphic list
- Medium footer

{:.usa-content-list}

### Component definitions

{:.usa-content-list}

- **Graphic list:** The graphic list is used to showcase a number of related items and their respective images in a grid pattern. In this template, we have removed the grid classes.

### Additional Information

NIST Special Publication 800-63-3, [Digital Identity Guidelines](https://pages.nist.gov/800-63-3/), provides technical requirements for federal agencies implementing digital identity services. The guidelines cover identity proofing and authentication of users (such as employees, contractors, or private individuals) interacting with government IT systems over open networks.


</div>
</div>
</div>

<div class="site-component-section" markdown="1">

## Sign-in

{:.site-text-intro}

Provide users with a clear and uncluttered sign-in experience.

Users signing in to your website need to know that they’re in the right place. Keep the user on task with a simple sign-in process, free of unrelated content or actions.

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

- **Users have accounts directly on your website.** This template is great for agencies who have a self-hosted authentication system to leverage a design that’s simple, mobile-friendly, and consistent across government websites.

### When to consider something else

{:.usa-content-list}

- **Your agency uses a third-party authentication system.** If you’re leveraging a shared service (as we recommend), follow the sign-in guidelines from that service. For instance, login.gov recommends placing a “sign-in” link in the header of your website that takes users through the entire “sign in” or “create an account” experience on the login.gov site.

### Usability guidance

{:.usa-content-list}

- **Clearly provide a way to reset passwords or recover usernames.** Provide a clearly marked link for users to reset a password or recover a forgotten username.  
- **Provide error feedback.** If a sign-in attempt fails, let users know there was an error, but don’t indicate which field was invalid, for example “Incorrect password” or “Username not found.” This helps maintain stronger protection against hackers or unauthorized users.
- **Focus on the task.** Remove extra, unneeded information to prevent the user from getting distracted.
- **Use specific field labels.** If you’re asking for a username, say username. If it’s an email, say email address. Don’t make the user guess which one you mean. 
- **Allow users to toggle password visibility.** This helps ensure users are entering it correctly while maintaining privacy when it’s needed as well. 
- **Enable copy/paste and autocomplete.** Many users rely on password generators because they provide secure passwords and phrases that a user doesn’t have to memorize. Forcing a user to type these in is a large barrier to usability. Allowing autocomplete also helps reduce user burden and typos.
- **Use consistent, accurate language.** Use “sign in” or “sign-in”—depending on if it’s a verb (link in a call-to-action or button) or noun/adjective form (sign-in page)“. Don’t use “login” or “log in.”
- **Allow users to switch between creating an account and signing in.** Users should be able to easily find where to sign in from the create account page, and vice versa. This also applies to the global header of the site, where users should have “one-click” access to either the sign-in or create an account page.

### Components used in this template
- Extended header with `.usa-nav` and `.usa-menu-btn` removed
- Form controls
- Buttons
- Medium footer

{:.usa-content-list}

### Component definitions
- **Graphic list:** The graphic list is used to showcase a number of related items and their respective images in a grid pattern. In this template, we have removed the grid classes.

</div>
</div>
</div>

<div class="site-component-section" markdown="1">

## Third-party options

{:.site-text-intro}

One landing page for all sign-in options.

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
      aria-expanded="true" aria-controls="third-party-docs">
    Guidance
  </button>
<div id="third-party-docs" aria-hidden="false" class="usa-accordion__content site-component-usage" markdown="1">

### When to use this component

{:.usa-content-list}

- **Multiple, legacy authentication systems.** If you have more than one authentication system in place and no current ability to consolidate, this template allows you to prioritize one system for account creation while providing multiple options for signing in.

### When to consider something else

{:.usa-content-list}

- **Just one sign-in option.** If you can reduce your sign-in options to one authentication system, we recommend avoiding this pattern.

### Usability guidance

{:.usa-content-list}

- **Emphasize one method over others.** Indicate a preferred method by giving it more prominence in your design.
- **Focus on the task.** Remove extra, unneeded information to prevent the user from getting distracted.
- **Use consistent, accurate language.** Use “sign in” or “sign-in”—depending on if it’s a verb (link in a call-to-action or button) or noun/adjective form (sign-in page)“. Don’t use “login” or “log in.”
- **Explain why and how.** Let users know the value of accessing their account and provide context on their sign-in options.


### Components used in this template
- Extended header with `.usa-nav` and `.usa-menu-btn` removed
- Form controls
- Grid
- Buttons
- Graphic list
- Medium footer

### Component definitions

{:.usa-content-list}

- **Graphic list:** The graphic list is used to showcase a number of related items and their respective images in a grid pattern. In this template, we have removed the grid classes.

</div>
</div>
</div>