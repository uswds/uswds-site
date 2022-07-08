---
title: Name
permalink: /patterns/create-a-profile/name/
layout: styleguide
category: Patterns
lead: The name pattern makes it as easy as possible for users to enter their name in the format required to validate their identity and to allow the collection of name elements in the most effective and least intrusive manner possible.
---

## What problem does this solve?
People have a wide variety of names in various formats. It can be confusing and alienating for them to enter their name if it doesn’t conform to the form fields provided, or if the form fields don’t support the characters, length, or language they require. At the same time, the name fields are often used as a primary form of identity validation, and so the agency  —  and privacy issues  — require that the information be entered in a specific and consistent way. 

### When to use this pattern 
Follow this pattern when you need to ask for a user’s name as part of your service. Only ask for the name if you need it. 

### What's the solution
Provide multiple free-form fields that support a rich array of special characters and accents. Provide direction on how to complete the form and what to do if the name doesn’t fit into the provided format.


## Guidance

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do support long text fields for each name. Allow users to enter up to 128 characters per field. You may choose not to display an empty field of that length.</li>
            <li>Do display the complete name wherever the information is displayed (even if it is long), including on a confirmation page. You may display a truncated version of the name to acknowledge logged-in- status in the header.</li>
            <li>Do support a rich array of <a href="https://web.library.yale.edu/cataloging/music/diacrit">diacritics, accents, and alternative characters.</a></li>
            <li>Allow users to enter more than one name in each field. Spanish-speaking people will often have two family names. Brazilians may have three or four family names.</li>
            <li>Do allow both upper and lowercase letters throughout each field.</li>
            <li>Allow users to enter hyphens, apostrophes, and blank spaces in each name field.</li>
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
            <li>Do not label the personal or given name “first name” only or the surname field “last name.” In Chinese, Korean, Hungarian, as well as other languages, the first name is the family name.</li>
            <li>Do not require users to enter something in each field. In some cultures, such as Indonesian and Icelandic, people may have only one name.</li>
            <li>If you need to request a middle name, don’t request just an initial. In the United Kingdom, people often have multiple middle names and don’t abbreviate them with initials.</li>
            <li>Do not assume that a single character is an initial. Some names are one character long. Don’t have a character requirement for each field.</li>
            <li>Do not normalize casing in names. In some names, such as McNamara and van der Waals, casing is part of the name.</li>
            <li>Do not ask for “maiden name.” Women are not the only ones who change their names. Ask for “previous name.”</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<b>Confirm you need this information.</b> As with all personal information, consider whether you need to collect it at all, and clearly explain the reason for asking for the information and what will be done to secure the user’s privacy. For example, if you aren’t validating identity, you might not need to collect someone’s name, since a username will meet the need for account login.

### What to use 
<b>If you don’t need separate data elements.</b> If you don’t need to parse out the separate pieces of a person’s name, consider letting the user enter it into a single text field.

<b>If the name information is for identity validation.</b> Clearly state that the user needs to input their legal name. Many people routinely use variations on their legal name. Do specify if they need to enter their legal name or the name they typically use.

### Special use cases
<b>If you need the name for correspondence.</b> If you are going to use the name information to address correspondence to the user, consider including a separate field that allows the user to specify how they’d like to be addressed. This reduces the potential for addressing someone in a way that they find disrespectful. <a href="https://www.w3.org/International/questions/qa-personal-names">Some cultures find it disrespectful</a> not to include an honorific (Dr., Professor, Mrs.), while others find it overly formal. 

If you won’t be addressing correspondence, avoid asking for the user’s title. Doing so may reveal their gender and marital status, which they might not want to do. If you do ask for their title, use an optional text input field, not a select.

<b>If you are collecting information on a family.</b> Do not assume that partners or dependents of the person completing the form will have the same family name. In many cultures, children have a variation of their parent’s family name.

<b>If you will be displaying the names in a list.</b> Consider that some cultures expect names to be sorted by personal name, not surname.

## Usability Guidance

Label single name field:
- Full Name

Label multiple name fields: 
- Given name
- Middle name
- Family name

Label preferred way to be addressed:
- Full name (how you like to be addressed, such as Prof. Vee Smith or Darren Chung)

## Ingredients
Related components

<div class="usa-card-group flex-row margin-top-2">
  <li
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit Toggle"
  data-meta="Visit Toggle">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Text Input</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.</p>
        <a href="/components/text-input/">Visit Text Input</a>
      </div>
    </div>
  </li>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true"><h2 id="pattern-preview">Pattern preview</h2></button>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/name.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      <figure class="highlight"><pre><code class="language-html" data-lang="html">{% include patterns/name.html %}</code></pre></figure>
    </div>
    <figure class="highlight"><pre><code class="language-html" data-lang="html">{% highlight html%}{% include patterns/name.html %}{% endhighlight %}</code></pre></figure>
  </div>
</div>

## References
- <a href="https://web.library.yale.edu/cataloging/music/diacrit">Diacritics and special characters by language</a>, Yale University Library
- <a href="https://www.w3.org/International/questions/qa-personal-names">Personal names around the world</a>, WC3

## Changelog
- Created 06.21.22


