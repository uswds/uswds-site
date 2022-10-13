---
title: Date of birth
story: Help a user enter their birth date or other memorable date
permalink: /patterns/create-a-profile/date-of-birth/
layout: pattern
category: Patterns
sub-category: Create a user profile
lead: Date of birth, and other memorable dates, can be an essential piece of information used to validate identity or eligibility for services or benefits. This pattern allows users to enter their date of birth or another memorable date (e.g., birth of child, death of loved one) without friction. 
---
<div></div>

{:.border-top-05.border-primary.padding-top-2.margin-bottom-2}

## What problem does this solve?
{% include_relative what-problem-does-this-solve.md %}

## When to use this pattern 
{% include_relative when-to-use-this-pattern.md %}

## What's the solution
{% include_relative whats-the-solution.md %}

## Guidance
<div class="grid-row grid-gap-3">
  <div class="tablet:grid-col-5">
    <div class="do-dont">
      <div class="do-dont__do">
      <h3 class="do-dont__heading">What to do</h3>
        <div class="do-dont__content">
          {% capture what_to_do %}{% include_relative what-to-do.md %}{% endcapture %}
          {{ what_to_do | markdownify }}
        </div>
      </div>
    </div>
  </div>
  <div class="tablet:grid-col-5">
    <div class="do-dont__dont">
    <h3 class="do-dont__heading">What not to do</h3>
      <div class="do-dont__content">
          {% capture what_not_to_do %}{% include_relative what-not-to-do.md %}{% endcapture %}
          {{ what_not_to_do | markdownify }}
      </div>
    </div>
  </div>
</div>

## Considerations
### Whether you need this data
{% include_relative whether-you-need-this-data.md %}

### When to use
{% include_relative when-to-use.md %}

### When to consider something else
{% include_relative when-to-consider-something-else.md %}

## Usability Guidance
{% include_relative usability-guidance.md %}

## Accessibility 
{% include_relative accessibility.md %}

## Components used in this pattern

<div class="usa-card-group flex-row margin-top-2">
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
  <div
  class="usa-card site-component-card grid-col-4 tablet:grid-col-4 margin-bottom-2"
  role="region"
  aria-atomic="true"
  aria-label="Visit select component"
  data-meta="Visit select component">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading font-lang-lg">Select</h3>
      </header>
      <div class="usa-card__body font-lang-sm">
        <p>A select component allows users to choose one option from a temporary modal menu.</p>
        <a href="{{ site.baseurl }}/components/select/">Visit Select</a>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-preview" aria-expanded="true"><h2 id="pattern-preview">Pattern preview</h2></button>
  <div id="accordion-preview" class="usa-accordion__content">
    {% include patterns/date-of-birth.html %}
  </div>
</div>
<div class="usa-accordion usa-accordion--bordered site-accordion-code site-component-preview">
  <button class="usa-accordion__button" aria-controls="accordion-code" aria-expanded="false"><h2 id="pattern-code">Pattern code</h2></button>
  <div id="accordion-code" class="usa-accordion__content highlight-code">
    <div class="usa-sr-only">
      {% highlight text%}{% include patterns/date-of-birth.html %}{% endhighlight %}
    </div>
      {% highlight html%}{% include patterns/date-of-birth.html %}{% endhighlight %}
  </div>
</div>

## Related
{% include_relative related.md %}

## References
{% include_relative references.md %}

## Changelog
{% include_relative changelog.md %}

{% include patterns/disclaimer.md %}

