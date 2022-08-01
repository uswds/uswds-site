---
title: Keep a record
permalink: /patterns/complex-form/keep-a-record/
layout: styleguide
category: Patterns
lead: Help users feel confident in their form submission by providing a record to download or print. A printed or downloaded record of their answers provides a reference for future use, and helps users confirm their successful form submission.
---


{:.margin-bottom-2}
## What problem does this solve?
Hitting the “Submit” button on a form can be terrifying, especially if the form is complex or contains deeply personal information. Providing the user with a record of the answers provided, questions skipped, and the URL and date stamp of form submission can reduce fear, increase confidence, and improve the user’s trust in your program. 

This record also provides a quick reference to submitted answers that might influence eligibility, helping program support personnel work with users to identify potential misunderstandings or mistakes for easier resolution and improved service.

## When to use this pattern 
Use this pattern when you are collecting information from users that extends beyond basic contact information, especially if you are collecting information in a long, complex form.

## What’s the solution
Provide the user with a printable record of their answers using a print style sheet designed to provide a streamlined record of the user’s submission, while conserving paper and ink.

## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Use a print style sheet to create a summary of submitted information in a print-optimized format.</li>
            <li>Include a complete recap of all questions and their submitted answers.</li>
            <li>Do provide a “title block” that includes the site name, URL, date, and record of successful submission.</li>
            <li>Add any next steps, time frames, or reference numbers like case or record identifiers to the title block, if possible. Consider using a fixed-width font with very clear differentiation between letters and numbers to disambiguate any reference strings.</li>
            <li>Remove unnecessary headers, footers, images, and iconography.</li>
            <li>Ensure elements have transparent backgrounds and the text is black. Consider whether you need color to communicate critical information, such as in a chart.</li>
            <li>Fine tune page margins to maximize space and minimize pages printed, but do not make the margins smaller that .5 inches to ensure printer support.</li>
            <li>Force underlines on all anchor tags to clearly indicate a link in print.</li>
            <li>Use a CSS pseudo-element to display the full URL after anchored text hyperlinks.</li>
            <li>Add a border around pre and blockquote tags and images to clearly indicate these elements in print.</li>
            <li>Print table headers on every page. Avoid splitting tables across pages if possible by utilizing the page-break-after/page-break-before properties.</li>
            <li>Avoid splitting a table row onto more than one page.</li>
            <li>Avoid splitting headings onto more than one page.</li>
            <li>Keep lists on the same page.</li>
            <li>Include a “Print” button on the summary page.</li>
            <li>If user-uploaded images are an essential part of your form, consider the best way to represent them to the user. This might include listing filenames or providing thumbnails or a zip file, rather than full-size images.</li> 
            <li>Prevent images you do print from being cut off or extending wider than a standard portrait-oriented letter-size page.</li>
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
            <li>Don't arbitrarily choose which questions and answers are displayed on the record of submitted information. If a question was important enough to ask, it's important enough to keep in the user's record of their form submission.</li>
            <li>Don't include images that are not important to understanding the content.</li>
            <li>Don't show links that are fragment identifiers or use the javascript: pseudo protocol.</li>
            <li>Do not print-disable pages or try to suppress page numbering.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Pre-submission check
<strong>Provide the user with a summary of their answers before they submit the form.</strong> Give them the opportunity to re-check their answers and provide an easy way for them to revise answers that are incorrect.

## Usability Guidance
<strong>Test print outputs.</strong> Test printing using a variety of printers, print-to-PDF options, and assistive output devices, using <a href="https://digital.gov/2013/07/15/digital-metrics-for-federal-agencies/">representative browser and operating system combinations</a> prior to launch. Remember that mobile device users will have additional challenges printing or saving to PDF so some on-screen guidance may be necessary.

<strong>Avoid widowed or orphaned content.</strong> Widows and orphans can be disorienting and sometimes alarming if a user doesn’t see the phrase in context. 

<strong>Use a readable font size.</strong> Set the point size no smaller than 12 points. Some users will struggle to read smaller text, especially if they are under stress. 

<strong>Consider the font and color.</strong> If possible, use a white background and dark serif font to optimize readability. 

<strong>Consider swapping web resolution logos with print resolution logos.</strong> This will ensure that your logo is legible and not pixelated. While many images can and should be stripped in a print style sheet, your program name and logo are important indicators of the importance of the document, especially in the absence of design elements and color.


## Accessibility

<strong>Use semantic structures.</strong> While digital teams cannot control how individual users print to PDF because of the wide variety of built-in and add-on tools used for PDF production, good semantic structures will help ensure that PDFs are as usable as possible with screen readers. Test printing on braille printers is also recommended. 

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview-01" aria-expanded="true"><h2 id="pattern-preview">Pattern preview</h2></button>
  <div id="accordion-preview-01" class="usa-accordion__content">
    {% include patterns/physical-address.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code-01" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code-01" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      <figure class="highlight"><pre><code class="language-html" data-lang="html">{% include patterns/physical-address.html %}</code></pre></figure>
    </div>
    <figure class="highlight"><pre><code class="language-html" data-lang="html">{% highlight html%}{% include patterns/physical-address.html %}{% endhighlight %}</code></pre></figure>
  </div>
</div>

## Related
- <a href="{{ site.baseurl }}/patterns/complex-form/progress-easily/">Progress easily through a form</a> pattern
- <a href="{{ site.baseurl }}/patterns/complex-form/establish-trust/">Understand expectations and establish trust</a> pattern


## References
- A guide to the state of print stylesheets in 2018. (May 1, 2018) RRetrieved on July 29, 2022, from [https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/](https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/)
- Designing for print with CSS. (January 7, 2015) Retrieved on July 29, 2022, from h[ttps://www.smashingmagazine.com/2015/01/designing-for-print-with-css/](ttps://www.smashingmagazine.com/2015/01/designing-for-print-with-css/)
- How to create printer-friendly pages with CSS. (January 5, 2020) Retrieved on July 29, 2020, from [https://www.sitepoint.com/css-printer-friendly-pages/](https://www.sitepoint.com/css-printer-friendly-pages/) 
- What is a printer-friendly web page? (November 21, 2018) Retrieved on July 29, 2022, from [https://www.thoughtco.com/printer-friendly-web-page-3469219](https://www.thoughtco.com/printer-friendly-web-page-3469219)


## Changelog
- Created July 27, 2022

