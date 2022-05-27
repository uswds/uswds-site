---
title: Select their preferred language
permalink: /patterns/select-language/
subnav:
- text: What problem does this solve?
  href: '#what-problem-does-this-solve'
- text: Websites with two languages
  href: '#websites-with-two-languages'
- text: Websites with three or more languages
  href: '#websites-with-three-or-more-languages'
- text: See this pattern in the wild
  href: '#see-this-pattern-in-the-wild'
- text: Related
  href: '#related'
- text: References
  href: '#references'
- text: Changelog
  href: '#changelog'

layout: styleguide
category: Patterns
lead: Providing access to website content in more than one language  —  generally content in languages other than (or in addition to) English  — allows users to find information in their primary language. This supports people with limited English proficiency. Consistently using best practices in supporting access to multiple languages helps people to find and use the language that works best for them.  The guidance covers two use cases.
---

## What problem does this solve?
We envision empowered agency digital teams who share solutions and use effective human-centered design practices.

{:.margin-top-4}
## Websites with two languages
USWDS is a design system for the federal government. We make it easier to build accessible, mobile-friendly government websites.

{:.margin-top-4}
### When to use this pattern
Use when the number of languages is two

{:.margin-top-2}
### What's the solution?
Place a button in the upper right of the navigation to allow the user to toggle between the two languages

## Guidance

### What you should do
- Place the button in the top upper right of the screen for consistency.
- Make the language access button a single/independent element.
- Include the language toggle in the header so that it remains visible and in the same position as the user scrolls up and down a webpage if a website has a “sticky” or “fixed” header.
- Take the users to an equivalent page (i.e., the same/similar content).
- Capitalize the name of the language (e.g., English, Spanish, or Vietnamese).

{:.margin-top-2}
### What you shouldn't do
- Don’t create a deadend for users by taking them to a page with little or no meaningful content.
- Don’t use icons/graphics, such as flags, as they may represent different concepts to different languages and cultures.

## Considerations
- Ensure there’s enough color contrast between the button, the text inside the button, and the background to ensure readability.
- Provide a visual element that shows when the text is a link. For example, permanently underline text or when hovering.
- If the text will be visually presented as a button but coded as a link, it is recommended to add ARIA role="button" so that screen readers announce it as a button. Additionally, JavaScript will also need to be added so that keyboard users can activate the button using both the Enter and Spacebar keys. See for reference: Understanding Success Criterion 4.1.2 Understanding WCAG 2.0.
- The language of the page should be identified using the HTML lang attribute (<html lang='en'>, for example). Please see the link for reference H57: Using the language attribute on the HTML element.

## Ingredients
Related components

{:.margin-top-2}
<div class="usa-card-group flex-row margin-top-4">
  <li
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit Toggle"
  data-meta="Visit Toggle">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Toggle</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A button that allows the user to toggle between two languages</p>
        <a href="/components/button">Visit Toggle</a>
      </div>
    </div>
  </li>
</div>

## Pattern Preview

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-pattern-preview-01" aria-expanded="true"><h2 id="accordion-preview">Pattern preview</h2></button>
  <div id="accordion-pattern-preview-01" class="usa-accordion__content">
    <p>// Pattern Preview</p>  
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code-01" aria-expanded="false"><h2 id="accordion-preview">Code</h2></button>
  <div id="accordion-code-01" class="usa-accordion__content">
    <p>// Code</p>  
  </div>
</div>

<div class="grid-container margin-top-4">
  <div class="grid-row">
    <img src="{{ site.baseurl }}/img/patterns/two-languages.jpg" alt="">
  </div>
</div>

{:.margin-top-4}
## Websites with three or more languages
USWDS is a design system for the federal government. We make it easier to build accessible, mobile-friendly government websites.

{:.margin-top-4}
### When to use this pattern
Use when the number of languages is more than two

{:.margin-top-2}
### What's the solution?
Place a button in the upper right of the navigation to allow the user to access a dropdown to select the language of choice. 

## Guidance

### What you should do
- Place the button in the top right corner for consistency. 
- Include the language toggle in the header so that it remains visible and in the same position as the user scrolls up and down a webpage if a website has a “sticky” or “fixed” header.
- Make the language access button a single/independent element.
- Take users to an equivalent page (i.e., toggle between pages with the same/similar content).
- Label for the drop down menu should be “Languages”.
- Capitalize the name of each language (e.g., English, Spanish, or Vietnamese).
- Order the languages alphabetically in English or by population size. Alternatively, you can order the languages alphabetically by Language_Name (English version), unless the direction of the language is right to left.

{:.margin-top-2}
### What you shouldn't do
- Don’t create a dead end for users by taking them to a page with little or no meaningful content.
- Don’t use icons/graphics, such as flags, as they may represent different concepts to different languages and cultures.

## Considerations
- Ensure there’s enough color contrast between the button, the text inside the button, and the background to ensure readability.
- Provide a visual element that shows when the text is a link. For example, permanently underline text or when hovering.
- The language of the page should be identified using the HTML lang attribute (<html lang='en'>, for example). Please see the link for reference H57: Using the language attribute on the HTML element.
- All logically related items/links must be presented as an HTML unordered list.

## Ingredients
Related components

{:.margin-top-2}
<div class="usa-card-group flex-row margin-top-4">
  <li
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit Dropdown"
  data-meta="Visit Dropdown">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Dropdown</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A button that allows the user to toggle between more than two languagess</p>
        <a href="/components/dropdown">Visit Dropdown</a>
      </div>
    </div>
  </li>
</div>

## Pattern Preview

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-pattern-preview-02" aria-expanded="true"><h2 id="accordion-preview">Pattern preview</h2></button>
  <div id="accordion-pattern-preview-02" class="usa-accordion__content">
    <p>// Pattern Preview</p>  
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code-02" aria-expanded="false"><h2 id="accordion-preview">Code</h2></button>
  <div id="accordion-code-02" class="usa-accordion__content">
    <p>// Code</p>  
  </div>
</div>

<div class="grid-container margin-top-4">
  <div class="grid-row">
    <img src="{{ site.baseurl }}/img/patterns/two-languages.jpg" alt="">
  </div>
</div>

<div class="grid-container margin-top-4">
  <div class="grid-row">
    <img src="{{ site.baseurl }}/img/patterns/more-than-two-languages.jpg" alt="">
  </div>
</div>

## Special Cases
If not all of the content is available for each of the languages listed, include a section in the dropdown for languages offering selected content.
- Include a section on the dropdown for “More languages with selected content” with a single link to an existing landing page or language-specific links to selected content
- Ideally translate the label “More languages with selected content” into the languages being offered.

<div class="grid-container margin-top-4">
  <div class="grid-row">
    <img src="{{ site.baseurl }}/img/patterns/special-case-more.jpg" alt="">
  </div>
  <div class="grid-row margin-top-4">
    <img src="{{ site.baseurl }}/img/patterns/special-case-more-specific.jpg" alt="">
  </div>
</div>


## See this pattern in the wild

- [USA.gov](https://www.usa.gov/)
- [US Department of Education](https://www.ed.gov/)

## Related 

- <a href="/components/header/">Global header</a>
- <a href="/components/side-navigation/">Side Navigation</a>

## References

- [Top 10 Best practices for multilingual websites](https://digital.gov/resources/top-10-best-practices-for-multilingual-websites/), digital.gov
- [White paper on best practices for multilingual access to digital libraries](https://pro.europeana.eu/files/Europeana_Professional/Publications/BestPracticesForMultilingualAccess_whitepaper.pdf), Europeana v3.0.

## Changelog
- April 29, 2022. Changed. Added What problem does this solve?, When to use this pattern, and What’s the solution. Reordered content to push images and code down.
- April 20, 2022. Created: Guidance made in accordance with research conducted by USAgov in cooperation with multiple agencies.- 

### Feedback
Help us improve this pattern by providing feedback, asking questions, and leaving other comments by emailing us at <a href="mailto:patterns@uswds.gov">patterns@uswds.gov</a>.