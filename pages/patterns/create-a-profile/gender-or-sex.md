---
title: Gender or sex
permalink: /patterns/create-a-profile/gender-or-sex/
layout: styleguide
category: Patterns
lead: The Sex or Gender pattern helps users to feel comfortable and confident that their information is being used to identify them the way they choose or in a manner that will assist the user.
---

## What problem does this solve?
Sex and gender are often used synonymously. Users have struggled to provide accurate information that best identifies and/or represents them within a limited or overwhelming amount of provided options.

Sex assigned at birth is a biological attribute and does not necessarily represent how an individual identifies. In the digital space, male and female are often the only provided options, but there are instances where an individual is born with both male and female sexual characteristics. 

Gender is an expression of a user’s identity and is integral to their sense of self. There is a wide variety of gendered experience in the world.
 
## When to use this pattern 
Follow this pattern when you are collecting sex or gender as part of your service. Only ask for the sex and/or gender if you need it. Sometimes it’s prudent to skip collecting this information altogether.

## What's the solution
Provide sex and/or gender if needed and present the user with the environment to accurately depict their identity. 

Provide direction on how to complete the form and what to do if the information doesn’t fit into the provided format.

## Guidance
### When you need to collect biological sex

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do determine if you need to collect biological sex and only use if the information is essential to the user's experience.</li>
            <li>Do only provide biological options when asking for biological sex (male, female, and X)</li>
            <li>Do be clear about why you are asking for the information.</li>
            <li>Do be transparent about what you are asking for. To some people sex and gender can mean the same so ensure you use clear language.</li>
            <li>Do think about the end result and how information may be aggregated as raw data outputs.</li>
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
            <li>Do not assume identity based on the user's sex.</li>
            <li>Do not include “prefer not to answer.” If you are considering adding this option, then consider whether the question is needed at all.</li>
            <li>Do not combine biological sex and gender identity into a single field.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

### When you need to collect gender

<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          <ul>
            <li>Do support long text fields for gender. The language behind gender identity is constantly evolving.</li>
            <li>Do consider safety implications of the information provided. (Regional and state laws are not created equal.)</li>
            <li>Do be transparent about what you are asking for (e.g., sex or gender identity).</li>
            <li>Do use inclusive language. Consider using “they” or “you” instead of “he” or “she.”</li>
            <li>Do think about the end result and how the information users enter may be aggregated in data outputs.</li>
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
            <li>Do not assume identity based on gender.</li>
            <li>Do not use “other” as a gender option. Instead use an empty text field.</li>
            <li>Do not limit the user's choice of gender. Not everyone will fit into a specific classification determined by the form designer.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
<b>Confirm you need this information.</b> As with all personal information, consider whether you need to collect it at all, and clearly explain the reason for asking for the information and what will be done to secure the user’s privacy.

### What to use 
<b>If you don’t need a controlled vocabulary.</b> If you don’t need to enforce a controlled vocabulary of gender options, strongly consider letting the user self-identify using a single text field.

<b>If biological sex information is used for identity validation.</b> Clearly state that the user needs to input their biological sex. Often times gender and sex are used synonomously and users have difficulty determining which information is being requested.

## Usability Guidance

Label Gender field:
- Gender identity:

Biological sex selection fields:
- Male
- Female
- X

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
        <h3 class="usa-card__heading font-lang-lg">Radio Button</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>Radio buttons allow users to select exactly one choice from a group.</p>
        <a href="/components/radio-buttons/">Visit Radio buttons</a>
      </div>
    </div>
  </li>
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
        <a href="/components/text-input/">Visit Text input</a>
      </div>
    </div>
  </li>
  <li
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit Toggle"
  data-meta="Visit Toggle">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Checkbox</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>Checkboxes allow users to select one or more options from a list.</p>
        <a href="/components/radio-buttons/">Visit Checkbox</a>
      </div>
    </div>
  </li>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true"><h2 id="pattern-preview">Pattern preview</h2></button>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/gender-or-sex.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      <figure class="highlight"><pre><code class="language-html" data-lang="html">{% include patterns/gender-or-sex.html %}</code></pre></figure>
    </div>
    <figure class="highlight"><pre><code class="language-html" data-lang="html">{% highlight html%}{% include patterns/gender-or-sex.html %}{% endhighlight %}</code></pre></figure>
  </div>
</div>

## References
- <a href="https://uxdesign.cc/beyond-the-binary-5-steps-to-designing-gender-inclusive-fields-in-your-product-ff9230337b4f">Beyond the Binary: 5 steps to designing gender inclusive fields in your product</a>
- <a href="https://www.dictionary.com/e/gender-terms-you-may-not-know/">Demigender, Maverique, And Other Gender Terms You May Not Know</a>

## Changelog
- Created 06.21.22