---
title: Selected multilingual content
story: Help a user find content in their preferred language when only selected content has been translated
permalink: /patterns/language-selector/selected-content/
layout: pattern
category: Patterns
sub-category: Select a language
lead: This pattern helps users, especially those with limited English proficiency, find content in their preferred language when only selected pieces of content have been translated. For example, the site may be available in several languages, but specific information — fact sheets, overviews, videos, instructions — might be available in several other languages. 
---

<div></div>

{:.border-top-05.border-primary.padding-top-2.margin-bottom-2}

## What problem does this solve?
Inconsistent placement of language selection components prevent users, especially people with limited English-language skills, from easily finding and accessing content in other languages. When only select content is available in languages other than English, this problem can be compounded as users are forced to navigate to a specific section of the site to discover the content.

## When to use this pattern 
Use this pattern if your site offers a select set of content available in additional languages. Note: while this situation could apply to a single language or two language site, this pattern specifically describes a site with three or more languages as well as a small subset of content that is available in additional languages. 

## When to consider something else
If your site is available in two or more languages and all content is available in each language, see related patterns <a href="{{ site.baseurl }}/patterns/language-selector/two-languages/">Select from two languages</a> or <a href="{{ site.baseurl }}/patterns/language-selector/three-or-more-languages/">Select from three or more languages</a>.

## What's the solution
Place the language selector button at the top right of the screen above site navigation to allow the user to access a dropdown with links to content in other languages.

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Place the language menu button in the upper corner of the screen for consistency. If possible, flip the arrangement of the header for right-to-left languages. The language button should be positioned at the top right of the page for left-to-right languages and on the top left for right-to-left languages.</li>
            <li>Make the language access button a single, independent element.</li>
            <li>Include the language dropdown in the header so that it remains visible and in the same position as the user scrolls up and down a webpage if the website has a “sticky” or “fixed” header.</li>
            <li>Label the dropdown menu <code>Languages</code>.</li>
            <li>Capitalize the name of each language (for example, English, Español).</li>
            <li>Do order the languages alphabetically by the common, native language name. For example:<br/> 
            العربية<br/>
            简体字<br/>
            English<br/>
            Español<br/>
            Français<br/>
            Pусский</li>
            <li>Consider including the English label for the language after the common, native language name if this approach has been validated by user testing.</li>
            <li>Use a label like "Featured content in additional languages" or "Selected content in additional languages" as the last entry of the menu to link to the landing page for your additional language content.</li>
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
            <li>Do not use icons or graphics, as they may represent different concepts to different languages and cultures.</li>
            <li>Do not use flags or country codes to indicate languages. Flags do not map to languages; Arabic, for example, is spoken in many countries. The country code <code>ES</code> may not be universally understood to indicate Spanish.</li>
            <li>Avoid auto-redirecting language based on detecting location or browser settings. This can be confusing and disorienting.</li>
            <li>Do not combine this element with other navigation items.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations

### Content organization

Use this pattern when your site supports three or more languages, but offers a limited amount of content in additional languages. Multilingual sites with select content in additional languages generally take one of two structural approaches:

 - <strong>Topic-driven approach.</strong> A landing page is arranged topically, with links to specific content in the larger set of supported languages. This is generally recommended for sites that have rich topical content in a variety of supported languages.
 - <strong>Language-driven approach.</strong> a landing page is arranged by language, showcasing the specific additional languages and the content available in that language. This is generally recommended for sites that have a disparate set of content available in additional languages.

 Regardless of how the information is structured, consider providing <strong>prominent in-page notices and links</strong> where appropriate within your site to help surface this additional language content. 

### Usability guidance

<strong>Ensure there’s enough color contrast</strong> between the button, the text inside the button, and the site background to ensure readability.

Provide a <strong>visual indicator that the text is a link</strong>. For example, permanently underline text or when hovering.

If the text will be visually presented as a button but coded as a link, it is recommended to <strong>add ARIA role="button" so that screen readers announce it as a button</strong>. Additionally, JavaScript will also need to be added so that keyboard users can activate the button using both the Enter and Spacebar keys. See [Understanding Success Criterion 4.1.2 - Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html) for more information.

<strong>Use the HTML `lang` attributes</strong> to set the language of the page (`<html lang='en'>`, for example). See [H57: Using the language attribute on the HTML element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57) for more information.

All logically related items/links must be presented as an <strong>HTML unordered list</strong>.


## Accessibility 

<strong>Customization.</strong> As you customize, make sure you follow [accessibility guidelines for buttons](https://designsystem.digital.gov/components/button/#button-guidance).

## Components used in this pattern

<div class="usa-card-group flex-row margin-top-2">
   <div
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit language selector component"
  data-meta="Visit language selector component">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Language selector</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A dropdown menu that allows the user to select the language.</p>
        <a href="{{ site.baseurl }}/components/language-selector">Visit Language selector</a>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true"><h2 id="pattern-preview">Pattern preview</h2></button>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/selected-content.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      {% highlight text%}{% include patterns/three-languages-code.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/three-languages-code.html %}{% endhighlight %}
  </div>
</div>

## See pattern in use

- <a href="https://www.ed.gov/notices/english-la">U.S. Department of Education</a>

## Related

- <a href="{{ site.baseurl }}/components/header/">Header</a> component
- <a href="{{ site.baseurl }}/patterns/language-selector/three-or-more-languages">Select from three or more languages</a> pattern
- <a href="{{ site.baseurl }}/patterns/language-selector/two-languages">Select from two languages</a> pattern

## References
- Community research explores ways to improve access to multilingual content. (August 9, 2022) Retrieved on August 24, 2022, from [https://digital.gov/2022/08/09/community-research-explores-ways-to-improve-access-to-multilingual-content/](https://digital.gov/2022/08/09/community-research-explores-ways-to-improve-access-to-multilingual-content/)
- Designing a perfect language selector UX. (May 4, 2022) Retrieved on July 21, 2022, from [https://www.smashingmagazine.com/2022/05/designing-better-language-selector/](https://www.smashingmagazine.com/2022/05/designing-better-language-selector/)
- Flag problems. (August 1, 1996) Retrieved on July 22, 2022, from [https://www.nngroup.com/articles/flag-problems/](https://www.nngroup.com/articles/flag-problems/)
- Top 10 Best practices for multilingual websites. (June 21, 2022) Retrieved on July 21, 2022, from [https://digital.gov/resources/top-10-best-practices-for-multilingual-websites/](https://digital.gov/resources/top-10-best-practices-for-multilingual-websites/)
- White paper on best practices for multilingual access to digital libraries. (June 23, 2016) Retrieved on July 21, 2022, from [https://pro.europeana.eu/files/Europeana_Professional/Publications/BestPracticesForMultilingualAccess_whitepaper.pdf](https://pro.europeana.eu/files/Europeana_Professional/Publications/BestPracticesForMultilingualAccess_whitepaper.pdf)

## Changelog
- publishdate

