---
title: Selected Multilingual Content
permalink: /patterns/language-selector/selected-content/
layout: styleguide
category: Patterns
lead: This pattern helps users, especially those with limited English proficiency, find content in their preferred language when only selected pieces of content have been translated. For example, the site may be available only in English, or in English and Spanish, but specific information—FAQs, fact sheets, overviews—might be available in several other languages. 
---
## What problem does this solve?
Inconsistent placement of language selection components prevent users, especially people with limited English-language skills, from easily finding and accessing content in other languages. When only select content is available in languages other than English, this problem can be compounded as users are forced to navigate to a specific section of the site to discover the content.

## When to use this pattern 
Use this pattern if your site offers a limited set of content available in additional languages. Note: this may apply to a single language site, two language site, or three or more language site if only a small subset of content is available in additional languages.

## When to consider something else
If your site is available in two or more languages and all content is available in each language, see related patterns <a href="../two-languages/">Select from two languages</a> or <a href="../three-or-more-languages/">Select from three or more languages</a>.

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
            <li>Place the button in the top right of the screen for consistency.</li>
            <li>Make the language access button a single, independent element.</li>
            <li>Include the language toggle in the header so that it remains visible and in the same position as the user scrolls up and down a webpage if a website has a “sticky” or “fixed” header.</li>
            <li>Label the drop down menu "Languages."</li>
            <li>Capitalize the name of each language (e.g., English, Spanish, or Vietnamese).</li>
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

### When to use

Whether you decide to use this pattern may depend on how focused your site's content is.

<b>You have a broad and deep website, with only a few pages of multilingual content.</b> Consider providing in-page contextual links instead of using this pattern. If your website includes a wide range of topics but only a few are linked from the language menu, it may deter people from finding the broader information.

<b>You have a very focused website and key pieces of multilingual content.</b> Consider providing a menu of the content in the header.

- If users need to <b>navigate to a single page</b> from which multiple links to content in multiple languages are provided, use the label to link to that page.
- If <b>very specific content is available in select languages</b>, provide a label in the dropdown that communicates what is available. For example, “Fact sheets are available in selected languages.”
- If the <b>content available is more varied or hard to describe</b>, use more general language. For example, “Other languages supported with limited content.”
- If <b>each language has its own page with content</b> in that language provided or linked, provide a list of the languages under the label and link to the appropriate pages there.


### Usability guidance
<b>Ensure there’s enough color contrast</b> between the button, the text inside the button, and the site background to ensure readability.

Provide a <b>visual indicator that the text is a link</b>. For example, permanently underline text or when hovering.

If the text will be visually presented as a button but coded as a link, it is recommended to <b>add ARIA role="button" so that screen readers announce it as a button</b>. Additionally, JavaScript will also need to be added so that keyboard users can activate the button using both the Enter and Spacebar keys. See [Understanding Success Criterion 4.1.2 - Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html) for more information.

<b>Use the HTML lang attributes</b> to set the language of the page (`<html lang='en'>`, for example). See [H57: Using the language attribute on the HTML element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57) for more information.

Consider including a <b>prominent in-page notice or link</b> in addition to the link in the header, in order to increase visibility for the user.

All logically related items/links must be presented as an <b>HTML unordered list</b>.


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
- <a href="../more-than-three-languages/">Select from three or more languages</a> pattern
- <a href="../two-languages/">Select from two languages</a> pattern

## References
- Top 10 Best practices for multilingual websites. (June 21, 2022) Retrieved on July 21, 2022, from [https://digital.gov/resources/top-10-best-practices-for-multilingual-websites/](https://digital.gov/resources/top-10-best-practices-for-multilingual-websites/)
- White paper on best practices for multilingual access to digital libraries. (June 23, 2016) Retrieved on July 21, 2022, from [https://pro.europeana.eu/files/Europeana_Professional/Publications/BestPracticesForMultilingualAccess_whitepaper.pdf](https://pro.europeana.eu/files/Europeana_Professional/Publications/BestPracticesForMultilingualAccess_whitepaper.pdf)
- Designing a perfect language selector UX. (May 4, 2022) Retrieved on July 21, 2022, from [https://www.smashingmagazine.com/2022/05/designing-better-language-selector/](https://www.smashingmagazine.com/2022/05/designing-better-language-selector/)
- Flag problems. (August 1, 1996) Retrieved on July 22, 2022, from [https://www.nngroup.com/articles/flag-problems/](https://www.nngroup.com/articles/flag-problems/)


## Changelog
- Created July 28, 2022. Guidance informed by research conducted by USAgov in cooperation with multiple agencies and the Multilingual Community of Practice.

