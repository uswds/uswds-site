---
title: Two languages
permalink: /patterns/preferred-language/two-languages/
layout: styleguide
category: Patterns
lead: This pattern helps users, especially those with limited English proficiency, select their preferred language when visiting a website in two languages, e.g., English and Spanish.
---

## What problem does this solve?
Inconsistent placement and language selection interface components can be a barrier to users with limited English-language skills, preventing them from easily finding and accessing content in another language.

## When to use this pattern 
Use this pattern when the content is available in two languages. When content is available in three or more languages, see related pattern <a href="../three-or-more-languages/">Select from three or more languages</a>.

## When to consider something else
If your site is primarily one language with a limited set of content available in additional languages, see related pattern <a href="../selected-content/">Find selected content in preferred language</a>.

## What's the solution
Place the language selector button at the top right of the screen above site navigation to allow the user to toggle between two languages.

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
            <li>Take users to an equivalent page (i.e., the same/similar content).</li>
            <li>Label the drop down menu "Languages."</li>
            <li>Capitalize the name of the language (e.g., English, Spanish, or Vietnamese).</li>
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

If the text will be visually presented as a button but coded as a link, it is recommended to <b>add ARIA role="button"</b> so that screen readers announce it as a button. Additionally, JavaScript will also need to be added so that keyboard users can activate the button using both the Enter and Spacebar keys. See [Understanding Success Criterion 4.1.2 - Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html) for more information.

<b>Use the HTML lang attributes</b> to set the language of the page (`<html lang='en'>`, for example). See [H57: Using the language attribute on the HTML element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57) for more information.

Consider including a <b>prominent in-page notice or link</b> in addition to the link in the header, in order to increase visibility for the user.

## Accessibility 

<b>Customization.</b> As you customize, make sure you follow [accessibility guidelines for buttons](https://designsystem.digital.gov/components/button/#button-guidance).


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
        <h3 class="usa-card__heading font-lang-lg">Button</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A button draws attention to important actions with a large selectable surface.</p>
        <a href="/components/button/">Visit Button</a>
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

- <a href="https://www.usa.gov/">USA.gov</a>

## Related

- <a href="https://designsystem.digital.gov/components/header/">Header</a> component
- <a href="../selected-content/">Find selected content in preferred language</a> pattern
- <a href="../more-than-three-languages/">Select from three or more languages</a> pattern


## References
- Top 10 Best practices for multilingual websites. (June 21, 2022) Retrieved on July 21, 2022, from [https://digital.gov/resources/top-10-best-practices-for-multilingual-websites/](https://digital.gov/resources/top-10-best-practices-for-multilingual-websites/)
- White paper on best practices for multilingual access to digital libraries. (June 23, 2016) Retrieved on July 21, 2022, from [https://pro.europeana.eu/files/Europeana_Professional/Publications/BestPracticesForMultilingualAccess_whitepaper.pdf](https://pro.europeana.eu/files/Europeana_Professional/Publications/BestPracticesForMultilingualAccess_whitepaper.pdf)
- Designing a perfect language selector UX. (May 4, 2022) Retrieved on July 21, 2022, from [https://www.smashingmagazine.com/2022/05/designing-better-language-selector/](https://www.smashingmagazine.com/2022/05/designing-better-language-selector/)
- Flag problems. (August 1, 1996) Retrieved on July 22, 2022, from [https://www.nngroup.com/articles/flag-problems/](https://www.nngroup.com/articles/flag-problems/)


## Changelog
- July 28, 2022. Created: Guidance informed by research conducted by USAgov in cooperation with multiple agencies and the Multilingual Community of Practice.

