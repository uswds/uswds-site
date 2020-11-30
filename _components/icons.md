---
permalink: /components/icons/
layout: styleguide
type: component
title: Icons
category: Components
lead: Icons communicate meaning in a graphical user interface.
subnav:
- text: All icons
  href: '#all-icons'
---

{:.usa-prose}

USWDS uses a curated set of [Material Design](https://material.io/resources/icons/?style=baseline) icons on the project as an SVG sprite. They are available for use in `src/img/usa-icons`. Any icons not included in the curated set are located in `src/img/usa-icons-unused`. You can move them into your project and rebuild the SVG sprite using the [USWDS Gulpfile](http://github.com/uswds/uswds-gulp/). 

{:.usa-prose}

[See all curated icons](#all-icons).

{% include code/preview.html component="icons-sizes" %}
{% include code/accordion.html component="icons-sizes" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="icon-docs">
    Guidance
  </button>
<div id="icon-docs" aria-hidden="false" class="usa-accordion__content site-component-usage" markdown="1">

### When to use icons

{:.usa-content-list}

- **Create affordance.** Icons are helpful when combined with text to inform users about performing an action.
- **Help readers find key info.** Use icons as easy-to-understand, translation-free visual indicators for key information like phone number or email.
- **Clickable symbol.** Icons make great touch targets. Use an icon for actions like opening a menu or sharing an article. This is especially beneficial on a mobile device where icons take up more percentage of the screen.

### When to consider something else

{:.usa-content-list}

- **You need a graphic illustration or artwork.** Icons and illustrations look different and serve different purposes.
  - Icons visually represent a simple idea, object or activity at-a-glance. Icons are composed of simple shapes and must be easily recognizable at small and large sizes. Icons invite action by the user and can be used as interactive elements.
  - Illustrations are more complex than icons. They tell a story and point to the main idea of a larger set of content, usually paragraphs of text. Illustrations are unrecognizable below a certain size because of the complexity of shapes and concept. Illustrations are rarely used as interactive elements on their own.
- **Text is sufficient.** Icons lose their value when used unnecessarily or their meaning is unclear.
- **Drawing attention to hard-to-find actions.** For actions, placement on the page has more impact than decoration. So if you’re trying to draw users attention to something by jazzing it up with an icon, instead, try adjusting where it sits on the page, creating consistent patterns for user flow.

### Usability guidance

{:.usa-content-list}

- **Be consistent with icon meaning.** Images that are used a number of times throughout an application (e.g., icons on navigation controls) must have a consistent meaning and text description throughout the application. For example, if an icon of a blank piece of paper means "new document" on most screens, the same icon cannot be used elsewhere to mean "reformat document". Consistency aids users with cognitive disabilities.
- **Combine with text.** Users will not always understand the meaning of icons alone. Using icons combined with text improves usability.

### Accessibility

{:.usa-content-list}

- Hide the icon with `aria-hidden="true"` if the icon is decorative.
- Provide descriptive text when an icon is meaningful or has an action associated with it. 
- Avoid redundant links with icons positioned next to linked text. Screen readers will read both links separately, even though both links point to the same content. This is a poor user experience.

### Implementation

{:.usa-content-list}

- Icons use `currentColor`, so the color of the icon will be the color of your text. You can use the [color utility]({{ site.baseurl }}/utilities/color/) to change the color.
- You might need to change the path of sprite of the sprite based on the needs of your project.

#### Icon variants

<table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
  <thead>
    <tr>
      <th scope="col" class="flex-6">Variant</th>
      <th scope="col" class="flex-6">Description</th>
    </tr>
  </thead>
  <tbody class="font-mono-2xs">
    <tr>
      <td data-title="Variant" class="flex-6">usa-icon--sm</td>
      <td data-title="Description" class="flex-6">
        <span class="font-lang-3xs">
          Small icons - <code>24px</code> x <code>24px</code>
        </span>
      </td>
    </tr>
    <tr>
      <td data-title="Variant" class="flex-6">usa-icon--lg</td>
      <td data-title="Description" class="flex-6">
        <span class="font-lang-3xs">
          Large icons - <code>48px</code> x <code>48px</code>
        </span>
      </td>
    </tr>
  </tbody>
</table>

### Package information

{:.usa-content-list}

- **Package usage:** `@import usa-icon`
- **Requires:** `required`, `global` 

</div>
</div>

## All icons

{% include code/preview.html component="icons" %}
{% include code/accordion.html component="icons" %}
