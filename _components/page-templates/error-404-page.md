---
permalink: /page-templates/404-page/
title: "404 page"
layout: styleguide
category: Page templates
lead: A 404 page informs users when a requested page doesn’t exist.
---

<div class="site-component-section" markdown="1">

A 404 page tells users that the webpage they’re trying to view no longer exists, has moved, or can’t be found. Using [plain language](https://www.plainlanguage.gov/) on a 404 page to explain the error and provide useful instructions on what the user should do next can help minimize frustration and confusion.  

The 404 template has six sections that can be tailored to most types of error pages:

1. Describe the error - main heading
1. What caused the error - lead text
1. Possible ways to fix the error - regular text
1. Actions - buttons or links
1. Additional support channels, if available - list
1. Error code 

<div class="preview">
  <a class="media_link" href={% include component-preview-link.html component="layout--404" %}>
    <img src="{{ site.baseurl }}/assets/img/templates/layout--404.png" alt="404 page screenshot">
  </a>
  <a class="usa-button" href={% include component-preview-link.html component="layout--404" %}>Demo 404 page template</a>
</div>
{% include code/accordion.html component="template-404" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="page-not-found-docs">
    Guidance
  </button>
<div id="page-not-found-docs" aria-hidden="false" class="usa-accordion__content site-component-usage" markdown="1">

## When to use the 404 page template

{:.usa-content-list}

- **Page doesn’t exist.** Users might navigate to a missing page for a number of reasons:

  - They followed an incorrect link
  - The page was removed from the website
  - They entered a typo into the URL

## When to consider something else

{:.usa-content-list}

- **Other types of errors.** Don’t use this template for form validation errors, submission errors, or if a website has been taken down for maintenance.

- **Inline errors.** Use alerts or form input errors when displaying errors that occur from interactions on a page.

## Usability guidance

{:.usa-content-list}

- **Use concise, non-technical language.** Don’t make the error code a prominent part of the page or get into too many details about what went wrong. Be concise and don’t add unnecessary content just to fill the space.

- **Avoid funny, cutesy, or whimsical error messages.** Users might not get the joke or appreciate levity when attempting to access critical information or services. Government website content should always be authoritative and trustworthy.

- **Be apologetic.** Show empathy, and don’t blame the user. Use messaging like “We’re sorry, that page can’t be found” instead of “Whoops, you made a mistake.” 

- **Let users know what they can do next.** This might be advice such as correcting typos in the URL or reporting a problem if they think they’ve reached the 404 page in error. Also, give them a way out of the “dead end” error page by directing them to the homepage, a contact page, a search page, or a chatbot/live chat. 

- **Use a consistent layout.** The error page should look like your website to avoid confusion. Include the main navigation so that users can navigate directly to another part of the site.

- **Don’t include multiple search boxes.** Only include a search option on the error page if there isn’t already a search box in the site’s header or anywhere else on the page.

## Implementation

{:.usa-content-list}

- **Track usage.** Include the 404 error code in the page <title> to assist with analytics. Use the Digital Analytics Program’s vpv404 substring filter to identify 404 pages and their referrers and help you track down and correct problematic links. 


</div>
</div>
</div>