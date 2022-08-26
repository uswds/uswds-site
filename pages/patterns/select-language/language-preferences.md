---
title: Preferred Language
permalink: /patterns/language-selector/language-preferences/
layout: styleguide
category: Patterns
lead: This pattern helps users to indicate the language they prefer to use for either written or spoken communication.
---

## What problem does this solve?
Approximately 8 percent of the total U.S. population over the age of five is considered Limited English Proficient (LEP). They may speak English, but speak it less than “very well,” and they may not read it well, either. Limited English proficiency can lead to misunderstandings and frustration. Individuals may miss important deadlines or may submit the wrong material. In some circumstances, the miscommunication can be critical—but it is always alienating.


## When to use this pattern 
Use this pattern when collecting information on the preferred written or spoken language of a user, in order to provide documentation in their preferred language, consultation with a speaker of their preferred language, or translation/interpretation services.

## What's the solution
The pattern allows users to select their language preferences for both written and spoken communication and to indicate their preferred language if it is not in the list.

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do list the languages available in both their native spelling and English.</li>
            <li>Capitalize the name of each language (for example, English, Spanish, or Vietnamese).</li>
            <li>Do order the languages alphabetically by the common, native language name (non-English version). For example:<br/>
            عربى - Arabic<br/>
            公司简介 - Chinese (Simplified)<br/>
            English - English<br/>
            Español - Spanish<br/>
            Français - French<br/>
            Россия - Russian</li>
            <li>Alternatively, consider ordering the languages alphabetically in English or by population size if this approach has been validated by user testing.<br/> 
            Arabic - عربى<br/>
            Chinese (Simplified) - 公司简介<br/>
            English - English<br/>
            French - Français<br/>
            Russian - Россия<br/>
            Spanish - Español</li>
            <li>Provide an “other” selection that allows the user to specify the specific language, if you are committed to supporting their language needs, such as in a health care setting.</li>
            <li>Do allow the user to select more than one language.</li>
            <li>Do consider providing an option for an individual to indicate “I need help completing this form,” if your program can support providing assistance. Some people with limited English-language skills or low literacy may not be able to complete the form themselves.</li>
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
            <li>Do not include languages other than those you can support. </li>
            <li>Do not use icons or graphics, since they may mean different things in different languages and cultures.</li>
            <li>Do not use flags or country codes to indicate languages. Flags do not map to languages; Arabic, for example, is spoken in many countries. It may not be universally understood that <code>ES</code> indicates Spanish. </li>
            <li>Do not assume that the language a user prefers to speak is the same language they prefer to read.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
Strongly consider providing language to <strong>reassure the user that there are no penalties</strong> associated with accessing information or completing forms in languages other than English. Some people with limited English-language skills have concerns about stigma or that use of a language other than English will impact their immigration status, program eligibility, or future opportunities.

Once a user has saved a preference setting other than English, default to their preferred language for future mail or email communications whenever possible.

Consider that individuals may have <strong>other challenges in addition to limited English proficiency</strong>, and may require other types of support.

Translation and navigation functions in languages other than English should still meet appropriate accessibility standards to ensure equal access.

<strong>Use the HTML lang attributes</strong> to set the language of the page (`<html lang='en'>`, for example). See [H57: Using the language attribute on the HTML element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57) for more information.


## Ingredients

<div class="usa-card-group flex-row margin-top-2">
  <div
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit checkbox component"
  data-meta="Visit checkbox component">
      <div class="usa-card__container">
      <header class="usa-card__header">
          <h3 class="usa-card__heading font-lang-lg">Checkbox</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
          <p>Checkboxes allow users to select one or more options from a list.</p>
          <a href="{{ site.baseurl }}/components/checkbox/">Visit Checkbox</a>
      </div>
      </div>
  </div>
  <div
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit text input component"
  data-meta="Visit text input component">
      <div class="usa-card__container">
      <header class="usa-card__header">
          <h3 class="usa-card__heading font-lang-lg">Text input</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
          <p>A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.</p>
          <a href="{{ site.baseurl }}/components/text-input/">Visit Text input</a>
      </div>
      </div>
  </div>
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
       {% highlight text%}{% include patterns/contact-preferences.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/contact-preferences.html %}{% endhighlight %}
  </div>
</div>

## Related

- <a href="{{ site.baseurl }}/patterns/create-a-profile/contact-preferences/">Contact preferences</a> pattern
- <a href="{{ site.baseurl }}/patterns/language-selector/selected-content/">Find selected content in preferred language</a> pattern
- <a href="{{ site.baseurl }}/patterns/language-selector/more-than-three-languages/">Select from three or more languages</a> pattern
- <a href="{{ site.baseurl }}/patterns/language-selector/two-languages/">Select from two languages</a> pattern


## References
- CMS Appendix A - top 15 non-English languages by states. (n.d.) Retrieved on July 25, 2022, from [https://www.cms.gov/CCIIO/Resources/Regulations-and-Guidance/Downloads/Appendix-A-Top-15-non-english-by-state-MM-508_update12-20-16.pdf](https://www.cms.gov/CCIIO/Resources/Regulations-and-Guidance/Downloads/Appendix-A-Top-15-non-english-by-state-MM-508_update12-20-16.pdf)
- CMS’s guide to developing a language access plan. (n.d.) Retrieved on July 25, 2022, from [https://www.cms.gov/About-CMS/Agency-Information/OMH/Downloads/Language-Access-Plan-508.pdf](https://www.cms.gov/About-CMS/Agency-Information/OMH/Downloads/Language-Access-Plan-508.pdf)
- Improving access to public websites and digital services for limited English proficient (LEP) persons. (December 2021) Retrieved on July 25, 2022, from [https://www.lep.gov/sites/lep/files/media/document/2021-12/2021_12_07_Website_Language_Access_Guide_508.pdf](https://www.lep.gov/sites/lep/files/media/document/2021-12/2021_12_07_Website_Language_Access_Guide_508.pdf)
- Improving access to services for persons with limited English proficiency, executive order 13166. (August 11, 2000) Retrieved on July 25, 2022, from [https://www.govinfo.gov/content/pkg/FR-2000-08-16/pdf/00-20938.pdf](https://www.govinfo.gov/content/pkg/FR-2000-08-16/pdf/00-20938.pdf)
- LEP.gov. (n.d.) Retrieved on July 25, 2022, from [https://www.lep.gov/](https://www.lep.gov/)
- The limited english proficient population in the United States in 2013. (July 8, 2015) Retrieved on July 25, 2022, from [https://www.migrationpolicy.org/article/limited-english-proficient-population-united-states-2013](https://www.migrationpolicy.org/article/limited-english-proficient-population-united-states-2013)
- OMB memorandum m-17-06, 16. (November 2016) Retrieved on July 25, 2022, from [https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2017/m-17-06.pdf#page=16](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2017/m-17-06.pdf#page=16)


## Changelog
- Created July 22, 2022.
