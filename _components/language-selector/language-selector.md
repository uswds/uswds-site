---
category: Components
component:
  name: language-selector
  status: ready
  package: usa-language-selector
layout: styleguide
lead: The consistent placement, interface, and behavior of the language selection component allows users to easily find and access content in the language the user is most comfortable in.
permalink: /components/language-selector/
redirect_from:
  - /language-selector/
  - /components/language/
variants:
  - variant: "`.usa-button--secondary`"
    description: Button uses `secondary` color.
  - variant: "`.usa-button--accent-cool`"
    description: Button uses `accent-cool` color.
  - variant: "`.usa-button--accent-warm`"
    description: Button uses `accent-warm` color.
  - variant: "`.usa-button--base`"
    description: Button uses `base` color.
  - variant: "`.usa-button--outline`"
    description: Transparent button with a color stroke.
  - variant: "`.usa-button--inverse`"
    description: Light color button for dark backgrounds.
  - variant: "`.usa-button--big`"
    description: A bigger button.
  - variant: "`.usa-button--unstyled`"
    description: A button that looks like a link.
subnav:
  - text: Two languages
    href: '#language-selector-with-two-languages'
  - text: Three or more
    href: '#language-selector-with-three-or-more-languages'
  - text: Unstyled example
    href: '#language-selector-unstyled'
  - text: Latest updates
    href: '#changelog'
title: Language selector
type: component
changelog:
  key: component-language-selector
in_page_nav_headings: "h2"
---

## Language selector pattern guidance
For more specific guidance about language selection design patterns, see the <a href="{{ site.baseurl }}/patterns/select-a-language/">Select a language</a> pattern family. This pattern family includes several language selection patterns that use this component:
- <a href="{{ site.baseurl }}/patterns/select-a-language/two-languages/">Select between two languages</a>
- <a href="{{ site.baseurl }}/patterns/select-a-language/three-or-more-languages/">Select from three or more languages</a>
- <a href="{{ site.baseurl }}/patterns/select-a-language/selected-content/">Find selected content in other languages</a>

{% include child-sections.html parent='Language selector' %}
