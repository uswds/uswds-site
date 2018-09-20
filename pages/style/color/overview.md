---
permalink: /style/color/overview/
layout: styleguide
title: Overview
category: Style
lead: Color is a practical and emotional tool. It conveys personality, sets a tone, attracts attention, and indicates importance.
type: docs
redirect_from:
  - /components/colors/
  - /style/color/
  - /colors/
subnav:
  - text: Introduction
    href: '#introduction'
  - text: Color and accessibility
    href: '#color-and-accessibility'
  - text: USWDS color wheels
    href: '#uswds-color-wheels'
  - text: Using color
    href: '#using-color'
---

## Introduction
USWDS organizes its colors into two related palettes: the [project theme palette]({{ site.baseurl }}/style/color/theme-palette/) and the [system palette]({{ site.baseurl }}/style/color/system-palette/). The project theme palette is a subset of the broader system palette — your project’s theme should reflect your project’s individual identity, tone, and needs. It will use only a few color families from the broader set of 23 color families available to all users of the system.

{:.measure-5 .margin-top-5}
![System color palette]({{ site.baseurl }}/assets/img/style/color-system-overview.png)

{:.font-sans-2xs}
**Above:** The 26 color families of the USWDS system palette, including all grades and variants. Together, they form a broad, expressive, and practical palette designed to encourage a diversity of tone as well as overall consistency and coherence.

Use USWDS colors and avoid custom colors whenever possible. In the long run, it’s a better user experience across government when there’s coherence across sites and services. Of course, your mission, project needs, and user needs always come first, but if you plan to contribute your work back into the system — which helps the system learn, adapt, and improve — that work will need to conform to system standards and use system colors.

<div>
<style>code {mix-blend-mode: multiply;}</style>
<div class="bg-base-lighter measure-3 padding-3 usa-section" markdown="1">
{:.font-sans-xs}
### COLOR, COLOR FAMILY, AND GRADE

Throughout our documentation and guidance, we’ll use use the terms color, color family, and grade, but what do we mean when we use them?

**Color** is any specific swatch in our palettes, like `red 50`, `primary base`, or `indigo warm 60v`.

**Color family** is a group of colors that all have the same hue on a color wheel (See [USWDS color wheels](#uswds-color-wheels) below). They contain a number of individual colors, distinguished by the brightness or saturation of each individual color. A color family is typically a conventional color name like `red` or `blue warm`, or could be a use-based name in the project theme palette, like `primary`.

**Grade** is a way to express how light or dark a color is. USWDS uses a 100-point scale to communicate the grade, where 0 is pure white and 100 is pure black. We’ve regularized these grades across color families: a color of grade `50` in one color family should be the same level of lightness as a color of grade `50` in another color family. This has important color contrast and accessibility implications that we’ll discuss later.
</div>
</div>

## Color and accessibility
Color is powerful but unreliable — its effects are neither consistent nor predictable across a population. [Approximately 8–9% of adults](https://nei.nih.gov/health/color_blindness/facts_about) have some kind of color insensitivity. Color insensitivity can make it difficult to distinguish hues (red/green color blindness is the most common form), and some rare conditions prevent the perception of hue altogether. Commonplace vision problems like short- and near-sightedness and astigmatism (among others) also affect how well folks perceive color and contrast.

[Section 508](https://section508.gov/), which aligns with [WCAG 2.0 Level AA](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0), sets a legal standard for the contrast level necessary between text and its background. The baseline AA contrast standard is 4.5:1 for most text and 3:1 for large text (19px+ bold or 24px+ normal text).


<!-- Accessibility is not a special case.

Last quarter (Q2 2018), [sites using USWDS topped 1.4 billion pageviews]({{ site.baseurl }}/about/whats-new/). 8-9% of 1.4 billion is around 100 million pageviews — when it comes to accessibility, thinking broadly and inclusively isn’t just a good idea, it’s our mandate and mission. 

Contrast is key. [Section 508](https://section508.gov/) — and, by extension, [WCAG 2.0](https://www.w3.org/WAI/WCAG20/quickref/) — sets a legal standard for the contrast level necessary between text and its background. The baseline [AA contrast standard](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) is 4.5:1 for most text and 3:1 for large text (19px+ bold or 24px+ normal text). -->

### Accessible color pairings

USWDS helps teams choose accessible colors with a color grade system. Let’s look at the `gray` color family, in grades 5-90 (grade 0 is `white`):

{% capture gray-grade %}
<div class="padding-2 border measure-5">
  <span><strong>Gray</strong></span>
  <div class="grid-row font-mono-2 text-400">
    <div class="grid-col-fill">
      <div class="bg-gray-5 height-4"></div>
      <div class="text-center margin-top-2px">5</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-10 height-4"></div>
      <div class="text-center margin-top-2px">10</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-20 height-4"></div>
      <div class="text-center margin-top-2px">20</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-30 height-4"></div>
      <div class="text-center margin-top-2px">30</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-40 height-4"></div>
      <div class="text-center margin-top-2px">40</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-50 height-4"></div>
      <div class="text-center margin-top-2px">50</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-60 height-4"></div>
      <div class="text-center margin-top-2px">60</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-70 height-4"></div>
      <div class="text-center margin-top-2px">70</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-80 height-4"></div>
      <div class="text-center margin-top-2px">80</div>
    </div><!-- swwatch -->
    <div class="grid-col-fill">
      <div class="bg-gray-90 height-4"></div>
      <div class="text-center margin-top-2px">90</div>
    </div><!-- swwatch -->
  </div>
</div>
{% endcapture %}
{{ gray-grade }}

{:.font-sans-2xs}
**Above:** Each color family has ten grades, from 5-90. Pure `white` is the equivalent of grade 0, and pure `black` is the equivalent of grade 100. Across families, grades have the same gray value — that is, when seen in grayscale any color of the same grade will look the same.

### Magic number
We call the difference in grade between any two colors the _magic number_. Magic numbers have important contrast implications:
- **A magic number of `40`** or higher achieves Section 508 AA Large contrast (For example: between `gray 90` and `indigo warm 50v`).
- **A magic number of `50`** or higher achieves Section 508 AA contrast (For example: between `gray 90` and `red 40`).
- **Colors of grade `50`** achieve Section 508 AA contrast against both pure white (grade `0`) and pure black (grade `100`).

Use USWDS magic numbers to choose accessible color combinations from any palette and color family.

<!-- The difference in grades between two colors is meaningful. Use this difference to calculate contrast. Across all colors and color familes:

**Grade differences (deltas) of 50** between any two colors assure that the contrast between the two colors conforms to WCAG 2.0 AA. (For example: between `gray 90` and `red 40`.)

**Grade differences (deltas) of 40** between any two colors assure that the contrast between the two colors conforms to WCAG 2.0 AA Large. (For example: between `gray 90` and `indigo warm 50v`.) -->

#### Accessible color combination examples

{:.measure-5}
![gray color contrast example]({{ site.baseurl }}/assets/img/style/gray-example.png)

{:.font-sans-2xs}
**Above:** Since `90 – 50 = 40`, on a background of `gray 90` use grades of `40` and below to assure Section 508 AA contrast. Grades of `50` and below are acceptable for large text.

{:.measure-5 .margin-top-5}
![indigo color contrast example]({{ site.baseurl }}/assets/img/style/indigo-warm-example.png)

{:.font-sans-2xs}
**Above:** The color grade system works across color families.

{:.measure-5 .border .border-radius-small .padding-4 .margin-top-5}
![color grades chart]({{ site.baseurl }}/assets/img/style/color-grades-chart.webp)

{:.font-sans-2xs}
**Above:** This data visualization shows the ten standard grades of a USWDS color family, as well as grade 0 (white) and grade 100 (black). Lightness is the lightness level of gray in the HSL color model. The delta column shows the difference in gray level between grades. The bars on the right show minimum conformant color pairs. Grade 50 will be WCAG 2.0 AA conformant against both pure black and pure white.

There should be no need for additional manual checking, but this system is relatively new, and it’s worth confirming contrast using a tool like [Colorable](http://jxnblk.com/colorable/demos/text/) to assure system integrity. If you find any problems, [file an issue](https://github.com/uswds/uswds/issues) in the USWDS Github repo.

## USWDS color wheels

The following color wheels are a way to visualize the entire [USWDS system palette]({{ site.baseurl }}/style/color/system-palette/) and its color family naming rubric. The color wheels are arranged around the 360° of the [HSL color model](https://en.wikipedia.org/wiki/HSL_and_HSV). Each color family is labelled with its position (in degrees) on this model. In general, colors within color families stay close to the hue value listed, but it is a custom palette, not generated by an algorithm. Hue variation within color families is intentional — we are trying to find good colors, not just those that fit a function.

The vivid palette is incomplete. We’ve added vivid variants as we’ve found a project need. This number will continue to grow and we [welcome new suggetions](https://github.com/uswds/uswds/issues) in our Github repo for vivid variants where none currently exist.

![standard color wheel]({{ site.baseurl }}/assets/img/style/uswds-standard-color-wheel.webp)

---

![vivid color wheel]({{ site.baseurl }}/assets/img/style/uswds-vivid-color-wheel.webp)

## Using color

If we use color intentionally, consistently, and sensitively, it can make a big difference in the way people understand and connect with our pages, our products and services, and our message. Color is an important component of visual and emotional cognition, and that’s precisely what makes it difficult to use well — what’s strong and confident to one person can be jarring or alarming to another.

**Start in black and white.** Start with your core message and use type scale and heierarchy to test and refine its effectiveness. Then introduce color to support that message. Color can overwhelm interpretation, and since [approximately 8–9% of the population](https://nei.nih.gov/health/color_blindness/facts_about) has some kind of color insensitivity, it’s important not to rely on color to convey information critical to your message.

**Put the practical before the emotional.** Because color can do so much, it can be smart to be focused. Limit the complexity of color by concentrating on functional requirements (like status states or directions) first. Then, use color as progressive enhancement to reinforce or balance the emotional needs of the content. Even so, bear in mind that the effects of color are often personal and cultural as much, or more so, than physiological. Understand that using color to optimize for tone necessarily exludes in in subtle and not-so-subtle ways.

**Use mood boards for guidance.** It can be challenging to derive appropriate color palettes, and it makes sense to let existing colors and palettes be your guide. Collect images from other sources that evoke the desired tone to find commonalities. Then, find close matches in the system palette to help build your theme.

**Ask visual designers.** Your group or agency may have visual designers either on staff or available as contractors. They can be an invaluable resource for building palettes or getting feedback on existing ones. USWDS benefits from the collective experience of visual designers across agencies to build our system palette, and to provide a range of prebuilt project theme palettes. If you have visual design resources, use them.

**Don’t use color exclusively to convey meaning.** Even Section 508 conformant contrast doesn’t ensure that colors are distinguishable for a significant percentage of your audience. [Approximately 8–9% of the population](https://nei.nih.gov/health/color_blindness/facts_about) has some kind of color insensitivity, especially between red and green. Color should only be used as progressive enhancement — if color is the only signal, that signal won’t get through as intended to everyone.

