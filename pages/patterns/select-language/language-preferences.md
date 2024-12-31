---
title: Preferred language
story: Help a user to choose the languages they prefer for communication
permalink: /patterns/select-a-language/language-preferences/
layout: pattern
category: Patterns
sub-category: Select a language
lead: This pattern allows users to indicate the languages they prefer to use for either written or spoken communications.
changelog:
  key: pattern-select-language-language-preferences
---

{:.site-component-section-title}
## About this pattern

### What problem does this solve?

Approximately 8 percent of the total U.S. population over the age of five is considered Limited English Proficient (LEP). They may speak English, but speak it less than “very well,” and they may not read it well, either. Limited English proficiency can lead to misunderstandings and frustration. Individuals may miss important deadlines or may submit the wrong material. In some circumstances, the miscommunication can be critical—but it is always alienating.

### When to use this pattern

Use this pattern when collecting information on the preferred written or spoken language of a user, in order to provide documentation in their preferred language, consultation with a speaker of their preferred language, or translation/interpretation services.

### What's the solution?

The pattern allows users to select their language preferences for both written and spoken communication and to indicate their preferred language if it is not in the list.

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
            <li>Do list the languages in their native spelling</li>
            <li>Capitalize the name of each language (for example, English, Español).</li>
            <li>Do include American Sign Language (ASL) in spoken preferences if you are committed to supporting in-person communications, such as in a health care setting.</li>
            <li>Do order the languages alphabetically by the common, native language name. For example:<br/>
            <span lang="ar" xml:lang="ar">عربي</span> (Arabic)<br/>
            <span lang="zh" xml:lang="zh">简体字</span> (Chinese - Simplified)<br/>
            <span lang="en" xml:lang="en">English</span><br/>
            <span lang="es" xml:lang="es">Español</span> (Spanish)<br/>
            <span lang="fr" xml:lang="fr">Français</span> (French)<br/>
            <span lang="it" xml:lang="it">Italiano</span> (Italian)<br/>
            <span lang="ru" xml:lang="ru">Pусский</span> (Russian)</li>
            <li>Provide an “other” selection that allows the user to specify the specific language, if you are committed to supporting their language needs, such as in a health care setting.</li>
            <li>Do allow the user to select more than one language.</li>
            <li>Do consider providing an option for an individual to indicate “I need help completing this form,” if your program can support providing assistance. Some people with limited English-language skills or low literacy may not be able to complete the form themselves.</li>
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
              <li>Do not include languages other than those you can support. </li>
              <li>Do not use icons or graphics, since they may mean different things in different languages and cultures.</li>
              <li>Do not use flags or country codes to indicate languages. Flags do not map to languages; Arabic, for example, is spoken in many countries. It may not be universally understood that <code>ES</code> indicates Spanish. </li>
              <li>Do not assume that the language a user prefers to speak is the same language they prefer to read.</li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview margin-top-2">
  <h3 id="pattern-preview" class="usa-accordion__heading site-accordion-heading">
    <button type="button" class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true">
      Pattern preview
    </button>
  </h3>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/language-preference.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <h3 id="pattern-code" class="usa-accordion__heading site-accordion-heading">
    <button type="button" class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false">
      Pattern code
    </button>
  </h3>
  <div id="accordion-code" class="usa-accordion__content highlight-code copy-code">
    <div class="usa-sr-only">
       {% highlight text%}{% include patterns/language-preference.html %}{% endhighlight %}
    </div>
    {% highlight html%}{% include patterns/language-preference.html %}{% endhighlight %}
  </div>
</div>

### Considerations

{:.usa-content-list}
- Strongly consider providing language to **reassure the user that there are no penalties** associated with accessing information or completing forms in languages other than English. Some people with limited English-language skills have concerns about stigma or that use of a language other than English will impact their immigration status, program eligibility, or future opportunities.
- Once a user has saved a preference setting other than English, default to their preferred language for future mail or email communications whenever possible.
- Consider that individuals may have **other challenges in addition to limited English proficiency**, and may require other types of support.
- Translation and navigation functions in languages other than English should still meet appropriate accessibility standards to ensure equal access.

### Accessibility

{:.usa-content-list}
- **Use the HTML lang attributes** to set the language of the page (`<html lang='en'>`, for example). See [H57: Using the language attribute on the HTML element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57.html) for more information.

{:.site-component-section-title}
## Related components, patterns, and templates

{:.usa-content-list}
- [Checkbox]({{ site.baseurl }}/components/checkbox/) component
- [Text input]({{ site.baseurl }}/components/text-input/) component
- [Contact preferences]({{ site.baseurl }}/patterns/create-a-user-profile/contact-preferences/) pattern
- [Find selected multilingual content]({{ site.baseurl }}/patterns/select-a-language/selected-content/) pattern
- [Select from three or more languages]({{ site.baseurl }}/patterns/select-a-language/three-or-more-languages/) pattern
- [Select from two languages]({{ site.baseurl }}/patterns/select-a-language/two-languages/) pattern

{:.site-component-section-title}
## References

- Improving access to services for persons with limited English proficiency, executive order 13166. (August 11, 2000) Retrieved on July 25, 2022, from <https://www.govinfo.gov/content/pkg/FR-2000-08-16/pdf/00-20938.pdf>
- CMS Appendix A - top 15 non-English languages by states. (n.d.) Retrieved on July 25, 2022, from <https://www.cms.gov/CCIIO/Resources/Regulations-and-Guidance/Downloads/Appendix-A-Top-15-non-english-by-state-MM-508_update12-20-16.pdf>
- CMS’s guide to developing a language access plan. (n.d.) Retrieved on July 25, 2022, from <https://www.cms.gov/About-CMS/Agency-Information/OMH/Downloads/Language-Access-Plan-508.pdf>
- Improving access to public websites and digital services for limited English proficient (LEP) persons. (December 2021) Retrieved on July 25, 2022, from <https://www.lep.gov/sites/lep/files/media/document/2021-12/2021_12_07_Website_Language_Access_Guide_508.pdf>
- LEP.gov. (n.d.) Retrieved on July 25, 2022, from <https://www.lep.gov/>
- The limited English proficient population in the United States in 2013. (July 8, 2015) Retrieved on July 25, 2022, from <https://www.migrationpolicy.org/article/limited-english-proficient-population-united-states-2013>
- OMB memorandum m-17-06, page 16. (November 2016) Retrieved on July 25, 2022, from <https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2017/m-17-06.pdf>

{:.site-component-section-title}
## Disclaimer

Links to nongovernment sources are made for educational or source citation purposes only, and do not represent an endorsement of the organizations by the General Services Administration. The General Services Administration does not assume any responsibility for the content, operation, or policies of other entities' websites.
