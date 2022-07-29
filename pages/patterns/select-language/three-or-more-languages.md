---
title: Three or more languages
permalink: /patterns/language-selector/three-or-more-languages/
layout: styleguide
category: Patterns
lead: This pattern helps users, especially those with limited English proficiency, select their preferred language when visiting a website available in three or more languages, e.g., English, Spanish, and Arabic.
---

## What problem does this solve?
Inconsistent placement and treatment of language selection interface components can be a barrier to users, especially those with limited English-language skills, preventing them from easily finding and accessing content in other languages.

## When to use this pattern 
Use this pattern when the content is available in three or more languages and all content is available in each language. When content is available in only two languages, see the pattern <a href="../two-languages/">Select from two languages</a> pattern. When only selected content is available in some languages, see <a href="../selected-content/">Find selected content in preferred language</a> pattern.

## What's the solution
Place the language selector menu at the top right of the screen above site navigation, allowing site visitors to use a dropdown menu to select their language of choice. 

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Place the button in the top right of the screen for consistency.</li>
            <li>Make the language access button a single, independent element.</li>
            <li>Include the language toggle in the header so that it remains visible and in the same position as the user scrolls up and down a webpage if a website has a “sticky” or “fixed” header.</li>
            <li>Take the users to an equivalent page (i.e., the same/similar content).</li>
            <li>Capitalize the name of the language (e.g., English, Spanish, or Vietnamese).</li>
            <li>Strongly consider labeling the name in the common, native language (e.g., Español).</li>
            <li>Order the languages alphabetically in English or by population size.<br/>
            English - English<br/>
            French - Français<br/>
            Spanish - Español</li>
            <li>Alternatively, you can order the languages alphabetically by Language Name (non-English version), unless the direction of the language is right to left. For example:<br/>
            English - English<br/>
            Español - Spanish<br/>
            Français - French</li>
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
            <li>Do not create a dead end for users by taking them to a page with little or no meaningful content.</li>
            <li>Do not use icons or graphics, since they may mean different things in different languages and cultures.</li>
            <li>Do not use flags or country codes to indicate languages. Flags do not map to languages; Arabic, for example, is spoken in many countries. ES may not be universally understood to indicate Spanish.</li>
            <li>Avoid auto-redirecting language based on detecting location or browser settings. This can be confusing and disorienting.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
<b>Ensure there’s enough color contrast</b> between the button, the text inside the button, and the site background to ensure readability.

Provide a <b>visual indicator that the text is a link</b>. For example, permanently underline text or when hovering.

<b>Use the HTML lang attributes</b> to set the language of the page (`<html lang='en'>`, for example). See [H57: Using the language attribute on the HTML element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57) for more information.

All logically related items/links must be presented as an <b>HTML unordered list</b>.

Consider including a <b>prominent in-page notice or link</b> in addition to the link in the header, in order to increase visibility for the user.

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
        <h3 class="usa-card__heading font-lang-lg">Language selector</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A dropdown menu that allows the user to select the language.</p>
        <a href="#">Visit Language selector</a>
      </div>
    </div>
  </li>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true"><h2 id="pattern-preview">Pattern preview</h2></button>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/contact-preferences.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      <figure class="highlight"><pre><code class="language-html" data-lang="html">{% include patterns/contact-preferences.html %}</code></pre></figure>
    </div>
    <figure class="highlight"><pre><code class="language-html" data-lang="html">{% highlight html%}{% include patterns/contact-preferences.html %}{% endhighlight %}</code></pre></figure>
  </div>
</div>

## See pattern in use

- <a href="https://www.ed.gov/notices/english-la">U.S. Department of Education</a>

## Related

- <a href="https://designsystem.digital.gov/components/header/">Header</a> component
- <a href="../selected-content/">Find selected content in preferred language</a> pattern
- <a href="../two-languages/">Select from two languages</a> pattern


## References
- Top 10 Best practices for multilingual websites. (June 21, 2022) Retrieved on July 21, 2022, from [https://digital.gov/resources/top-10-best-practices-for-multilingual-websites/](https://digital.gov/resources/top-10-best-practices-for-multilingual-websites/)
- White paper on best practices for multilingual access to digital libraries. (June 23, 2016) Retrieved on July 21, 2022, from [https://pro.europeana.eu/files/Europeana_Professional/Publications/BestPracticesForMultilingualAccess_whitepaper.pdf](https://pro.europeana.eu/files/Europeana_Professional/Publications/BestPracticesForMultilingualAccess_whitepaper.pdf)
- Designing a perfect language selector UX. (May 4, 2022) Retrieved on July 21, 2022, from [https://www.smashingmagazine.com/2022/05/designing-better-language-selector/](https://www.smashingmagazine.com/2022/05/designing-better-language-selector/)
- Flag problems. (August 1, 1996) Retrieved on July 22, 2022, from [https://www.nngroup.com/articles/flag-problems/](https://www.nngroup.com/articles/flag-problems/)


## Changelog
- Created July 28, 2022. Guidance informed by research conducted by USAgov in cooperation with multiple agencies and the Multilingual Community of Practice.
