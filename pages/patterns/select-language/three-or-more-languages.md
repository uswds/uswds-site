---
title: Three or more languages
story: Help a user choose from multiple available languages
permalink: /patterns/select-a-language/three-or-more-languages/
layout: pattern
category: Patterns
sub-category: Select a language
lead: This pattern helps users, especially those with limited English proficiency, select their preferred language when visiting a website available in three or more languages, like English, Spanish, and Arabic.
changelog:
  key: pattern-select-language-three-or-more-languages
---

{:.site-component-section-title}
## About this pattern

### What problem does this solve?
Inconsistent placement and treatment of language selection interface components can be a barrier to users, especially those with limited English-language skills, preventing them from easily finding and accessing content in other languages.

### When to use this pattern 
Use this pattern when the content is available in three or more languages and all content is available in each language. 

### When to consider something else
When content is available in only two languages, see the <a href="{{ site.baseurl }}/patterns/select-a-language/two-languages/">Select from two languages</a> pattern. When only selected multilingual content is available in some languages, see the <a href="{{ site.baseurl }}/patterns/select-a-language/selected-content/">Selected content available</a> pattern.

### What's the solution?
Place the language selector menu at the top of the screen above site navigation, allowing site visitors to use a dropdown menu to select their language of choice. Place the language selector on the top right for left-to-right languages and on the top left for right-to-left languages if possible.

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
            <li>Place the language menu button in the upper corner of the screen for consistency. If possible, flip the arrangement of the header for right-to-left languages. The language button should be positioned at the top right of the page for left-to-right languages and on the top left for right-to-left languages.</li>
            <li>Make the language access button a single, independent element.</li>
            <li>Include the language dropdown in the header so that it remains visible and in the same position as the user scrolls up and down a webpage if the website has a “sticky” or “fixed” header.</li>
            <li>Take users to an equivalent page that includes the same or similar content.</li>
            <li>Label the dropdown menu <code>Languages</code>.</li>
            <li>Capitalize the name of each language (for example, English, Español).</li>
            <li>Do order the languages alphabetically by the common, native language name. For example:<br/> 
            <span lang="ar" xml:lang="ar">العربية</span> (Arabic)<br/>
            <span lang="zh" xml:lang="zh">简体字</span> (Chinese - Simplified)<br/>
            <span lang="en" xml:lang="en">English</span><br/>
            <span lang="es" xml:lang="es">Español</span> (Spanish)<br/>
            <span lang="fr" xml:lang="fr">Français</span> (French)<br/>
            <span lang="it" xml:lang="it">Italiano</span> (Italian)<br/>
            <span lang="ru" xml:lang="ru">Pусский</span> (Russian)</li>
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
              <li>Do not create a dead end for users by taking them to a page with little or no meaningful content.</li>
              <li>Strongly consider whether including icons or graphics on the language selection button offers communication value, as these may represent different concepts to different cultures.</li>
              <li>Do not use flags or country codes to indicate languages. Flags do not map to languages; Arabic, for example, is spoken in many countries. The country code <code>ES</code> may not be universally understood to indicate Spanish.</li>
              <li>Avoid auto-redirecting language based on detecting location or browser settings. This can be confusing and disorienting.</li>
              <li>Do not combine this element with other navigation items.</li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview margin-top-2">
  <button class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true"><h3 id="pattern-preview">Pattern preview</h3></button>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/three-languages.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false"><h3 id="pattern-code">Pattern code</h3></button>
  <div id="accordion-code" class="usa-accordion__content highlight-code copy-code">
    <div class="usa-sr-only">
      {% highlight text%}{% include patterns/three-languages-code.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/three-languages-code.html %}{% endhighlight %}
  </div>
</div>

### Usability guidance

{:.usa-content-list}
- Consider including a <strong>prominent in-page notice or link</strong> in addition to the link in the header, in order to increase visibility for the user.
- <strong>Ensure there’s enough color contrast</strong> between the button, the text inside the button, and the site background to ensure readability.

### Accessibility

{:.usa-content-list}
- If the text will be visually presented as a button but coded as a link, it is recommended to <strong>add ARIA role="button"</strong> so that screen readers announce it as a button. Additionally, JavaScript will also need to be added so that keyboard users can activate the button using both the Enter and Spacebar keys. See [Understanding Success Criterion 4.1.2 - Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html) for more information.
- <strong>Use the HTML `lang` attributes</strong> to set the language of the page (`<html lang='en'>`, for example). See [H57: Using the language attribute on the HTML element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57) for more information.
- <strong>All logically related items and links</strong> must be presented as an HTML unordered list. 

{:.site-component-section-title}
## See pattern in use

{:.usa-content-list}
- <a href="https://www.ed.gov/notices/english-la">U.S. Department of Education</a>
- <a href="https://www.vote.gov">Vote.gov</a>

{:.site-component-section-title}
## Related components, patterns, and templates

{:.usa-content-list}
- <a href="{{ site.baseurl }}/components/button/">Button</a> component
- <a href="{{ site.baseurl }}/components/header/">Header</a> component
- <a href="{{ site.baseurl }}/components/language-selector/">Language selector</a> component
- <a href="{{ site.baseurl }}/patterns/select-a-language/selected-content/">Find selected multilingual content</a> pattern
- <a href="{{ site.baseurl }}/patterns/select-a-language/two-languages">Select from two languages</a> pattern

{:.site-component-section-title}
## References
- Community research explores ways to improve access to multilingual content. (August 9, 2022) Retrieved on August 24, 2022, from [https://digital.gov/2022/08/09/community-research-explores-ways-to-improve-access-to-multilingual-content/](https://digital.gov/2022/08/09/community-research-explores-ways-to-improve-access-to-multilingual-content/)
- Designing a perfect language selector UX. (May 4, 2022) Retrieved on July 21, 2022, from [https://www.smashingmagazine.com/2022/05/designing-better-language-selector/](https://www.smashingmagazine.com/2022/05/designing-better-language-selector/)
- Flag problems. (August 1, 1996) Retrieved on July 22, 2022, from [https://www.nngroup.com/articles/flag-problems/](https://www.nngroup.com/articles/flag-problems/)
- Top 10 Best practices for multilingual websites. (June 21, 2022) Retrieved on July 21, 2022, from [https://digital.gov/resources/top-10-best-practices-for-multilingual-websites/](https://digital.gov/resources/top-10-best-practices-for-multilingual-websites/)
- White paper on best practices for multilingual access to digital libraries. (June 23, 2016) Retrieved on July 21, 2022, from [https://pro.europeana.eu/files/Europeana_Professional/Publications/BestPracticesForMultilingualAccess_whitepaper.pdf](https://pro.europeana.eu/files/Europeana_Professional/Publications/BestPracticesForMultilingualAccess_whitepaper.pdf)

{:.site-component-section-title}
## Disclaimer
Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.