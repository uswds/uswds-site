---
permalink: /components/icons/
layout: styleguide
type: component
title: Icons
category: Components
lead: Icons help communicate meaning, actions, status, or feedback.
subnav:
- text: All icons
  href: '#all-icons'
---

Icons are a simple, easily graspable way to add visual emphasis or interest, signal an action, or indicate a feedback state — all while reducing a user's cognitive load.

Using a consistent set of icons helps establish a familiar look and feel across a site or service, while using individual icons consistently establishes a reliable relationship between the image and a specific concept or action. For example, don’t use an envelope icon to indicate email on one page and mailing address on another. Users should be able to trust that a certain icon always means the same thing, no matter where it’s used on your site. It’s important that icons always serve a single functional purpose throughout a site or service.

[View all icons included in the USWDS default set](#all-icons).

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

- **To draw attention to actions.** Icons are helpful when combined with text to inform users about performing an action. The icon should directly relate to the text it accompanies.
- **To help readers find key information.** Use icons as scannable, easy-to-understand visual indicators for key information like a phone number or email address.
- **To enhance an actionable target.** Icons make great touch or click targets. Use an icon for common actions like opening a menu or sharing an article.

### When to consider something else

{:.usa-content-list}

- **Meaning is ambiguous.** Use icons in a common or conventional way only. If the meaning of an icon is ambiguous by itself, it needs accompanying text.
- **Compensating for page structure.** Icons don’t fix unclear page hierarchy or confusing content organization. Don’t rely on an icon to help draw attention to something important that’s hard to find. Fix the content’s placement first.
- **You need illustrative artwork.** Icons have a specific, functional meaning. Avoid using icons outside their intended usage for illustrative purposes (like using the "visibility" eye icon to illustrate an actual eye). If you want to use a graphic to enhance your content or explain a more in-depth concept, consider using an illustration instead of an icon.

### Usability guidance

{:.usa-content-list}

- **Combine with text.** Users will not always understand the meaning of icons alone. Use icons combined with text to improve usability.
- **Be consistent with icon meaning.** Icons that are used a number of times throughout an application or site must have a consistent meaning and text description throughout. For example, if an icon of a blank piece of paper means "new document" on most screens, the same icon shouldn’t be used elsewhere to mean "reformat document." Consistency aids users with cognitive disabilities and creates a better user experience for all users.
- **When interactive, combine with other components.** If the icon is part of an interactive element, it should be implemented within another functional component, like as part of a button or list.

### Accessibility

{:.usa-content-list}

- **Hide decorative icons from screen readers.** Use the `aria-hidden="true"` and `role=”img”` if the icon is redundant and used solely as visual progressive enhancement.
  ```
  <a href="https://twitter.com/uswds">
    <svg class="usa-icon" aria-hidden="true" role="img">
      <use xlink:href="/assets/img/sprite.svg#arrow_forward"></use>
    </svg>
    USWDS' Twitter account
  </a>
  ```
- **Provide descriptive text if a standalone icon has semantic meaning.** If you need to expose an icon to screen readers, remove the `aria-hidden="true"` attribute and add a `aria-labelledby` attribute with a value that matches the `id` of a `<title>` element added inside the svg.
  ```
  <a href="https://twitter.com/uswds">
    <svg aria-labelledby="twitter-title" role="img">
      <title id="twitter-title">USWDS' Twitter account</title>
      <use xlink:href="/path/to/sprite.svg#twitter"></use>
    </svg>
  </a>
  ```
- **Place icons inside links.** If icons accompany a text link, place the icon inside the link to prevent the screen reader from announcing the link twice.


### Implementation

{:.usa-content-list}

- **Don’t alter icons.** You shouldn’t customize, combine, or change the icons (other than updating the color) due to their [license](https://github.com/uswds/uswds/blob/develop/LICENSE.md).
- **Icons are available for use in `src/img/usa-icons`.** Any icons not included in the curated set are located in `src/img/usa-icons-unused`. You can move them into your project and rebuild the SVG sprite using [uswds-gulp](https://github.com/uswds/uswds-gulp/).
- **Using color in icons.** Icons use `currentColor`, so the color of the icon will be the text color of its parent element. Change colors with the [color utility]({{ site.baseurl }}/utilities/color/).
- **Relative to font size.** By default, icons will scale with font size. If you want to specify an icon size, use one of the component’s size variants.
- **Icon names are identifiers.** To use an individual, simply change the identifier after the pound sign in the sprite path to the icon name. For example, to use the `accessibility_new` icon, the path will be `<use xlink:href="/path/to/sprite.svg#accessibility_new">` or to use the `info` icon, the path will be `<use xlink:href="/path/to/sprite.svg#info">`.


#### Icon variants

<table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="icon-variants">
  <thead>
    <tr>
      <th scope="col" class="flex-6">Variant</th>
      <th scope="col" class="flex-6">Description</th>
    </tr>
  </thead>
  <tbody class="font-mono-2xs">
    <tr>
      <td data-title="Variant" class="flex-6">.usa-icon--size-3</td>
      <td data-title="Description" class="flex-6">
        <span class="font-lang-3xs">
          <code>24px</code> x <code>24px</code> icon
        </span>
      </td>
    </tr>
    <tr>
      <td data-title="Variant" class="flex-6">.usa-icon--size-4</td>
      <td data-title="Description" class="flex-6">
        <span class="font-lang-3xs">
          <code>32px</code> x <code>32px</code> icon
        </span>
      </td>
    </tr>
    <tr>
      <td data-title="Variant" class="flex-6">.usa-icon--size-5</td>
      <td data-title="Description" class="flex-6">
        <span class="font-lang-3xs">
          <code>40px</code> x <code>40px</code> icon
        </span>
      </td>
    </tr>
    <tr>
      <td data-title="Variant" class="flex-6">.usa-icon--size-6</td>
      <td data-title="Description" class="flex-6">
        <span class="font-lang-3xs">
          <code>48px</code> x <code>48px</code> icon
        </span>
      </td>
    </tr>
    <tr>
      <td data-title="Variant" class="flex-6">.usa-icon--size-7</td>
      <td data-title="Description" class="flex-6">
        <span class="font-lang-3xs">
          <code>56px</code> x <code>56px</code> icon
        </span>
      </td>
    </tr>
    <tr>
      <td data-title="Variant" class="flex-6">.usa-icon--size-8</td>
      <td data-title="Description" class="flex-6">
        <span class="font-lang-3xs">
          <code>64px</code> x <code>64px</code> icon
        </span>
      </td>
    </tr>
    <tr>
      <td data-title="Variant" class="flex-6">.usa-icon--size-9</td>
      <td data-title="Description" class="flex-6">
        <span class="font-lang-3xs">
          <code>72px</code> x <code>72px</code> icon
        </span>
      </td>
    </tr>
  </tbody>
</table>

### Package information

{:.usa-content-list}

- **Package usage:** `@import usa-icon`
- **Requires:** `required`, `global`

## All icons

{% include code/preview.html component="icons" %}
{% include code/accordion.html component="icons" %}
