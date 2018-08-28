---
permalink: /style/
layout: styleguide
title: Style
category: Style
lead: We build USWDS components from consistent palettes of type scale, spacing units, and color. Your project’s custom theme settings provide a subset of the system palettes tailored to your project’s needs.
type: docs
---

## The benefits of global style palettes

Our system palettes of [typescale]({{ site.baseurl }}/style/typescale/), [spacing units]({{ site.baseurl }}/style/spacing-units/), and [color]({{ site.baseurl }}/style/color/) are the visual building blocks any component. When we use these palettes consistently, not only do individual components fit better within the design of the larger website, but USWDS websites have better coherence across the entire federal government. This coherence provides a more familiar, reliable user experience.

We recommend building exclusively with elements of the system palettes. Not only does this provide the improvements to cross-government user experience mentioned above, it allows individual projects to contribute their unique components and solutions back in to the System.

## Using system palettes and project theme palettes

The complete system spacing units palette is available to any USWDS project by default. The system color palette and the system type scale palette can be subsetted into a smaller theme palette using the project theme settings in `_uswds-project-settings.scss`. Whether you use items from the system palettes or the project theme palettes, you can access these values in your Sass using palette-specific variables and functions. The following is an overview of the functions and variables available — see the individual style sections for more detail.

<div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2">
  <div class="grid-col-2">Palette item</div>
  <div class="grid-col-3">Setting</div>
  <div class="grid-col-3">Variable</div>
  <div class="grid-col-4">Function</div>
</div>
<div class="grid-row font-sans-3xs padding-y-05 border-bottom border-base-light text-bold margin-top-2">
  <div class="grid-col-2 font-sans-3xs">Color</div>
  <div class="grid-col-3">[family], [grade][, vivid]*</div>
  <div class="grid-col-3">$[family]-[grade][v]*</div>
  <div class="grid-col-4">color(family, grade[, vivid]*)</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2 font-sans-2xs">Red warm 50</div>
  <div class="grid-col-3">'red-warm', 50</div>
  <div class="grid-col-3">$red-warm-50</div>
  <div class="grid-col-4">color('red-warm', 50)</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2 font-sans-2xs">Red warm 50 vivid</div>
  <div class="grid-col-3">'red-warm', 50, vivid</div>
  <div class="grid-col-3">$red-warm-50v</div>
  <div class="grid-col-4">color('red-warm', 50, vivid)</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2 font-sans-2xs">Accent cool dark</div>
  <div class="grid-col-3">'accent-cool', 'dark'</div>
  <div class="grid-col-3">$accent-cool-dark</div>
  <div class="grid-col-4">color('accent-cool', 'dark')</div>
</div>

<div class="grid-row font-sans-3xs padding-y-05 border-bottom border-base-light text-bold margin-top-2">
  <div class="grid-col-2 font-sans-3xs">Spacing units</div>
  <div class="grid-col-3">[value]</div>
  <div class="grid-col-3">$units-[value]</div>
  <div class="grid-col-4">units([value])</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2 font-sans-2xs">Half grid unit</div>
  <div class="grid-col-3">0.5<br/><span class="display-inline-block padding-top-05">'05'</span></div>
  <div class="grid-col-3">$units-05</div>
  <div class="grid-col-4">units(0.5)<br/><span class="display-inline-block padding-top-05">units('05')</span></div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2 font-sans-2xs">2 grid units</div>
  <div class="grid-col-3">2</div>
  <div class="grid-col-3">$units-2</div>
  <div class="grid-col-4">units(2)</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2 font-sans-2xs">Card large unit</div>
  <div class="grid-col-3">'card-lg'</div>
  <div class="grid-col-3">$units-card-lg</div>
  <div class="grid-col-4">units('card-lg')</div>
</div>

<div class="grid-row font-sans-3xs padding-y-05 border-bottom border-base-light text-bold margin-top-2">
  <div class="grid-col-2 font-sans-3xs">Type scale</div>
  <div class="grid-col-3">[family], [size]</div>
  <div class="grid-col-3">$[family]-[size]</div>
  <div class="grid-col-4">units([value])</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2 font-sans-2xs">Sans 3xs</div>
  <div class="grid-col-3">'sans', 3xs</div>
  <div class="grid-col-3">$sans-3xs</div>
  <div class="grid-col-4">scale('sans', 3xs)</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2 font-sans-2xs">Body micro</div>
  <div class="grid-col-3">'body', 'micro'</div>
  <div class="grid-col-3">$body-micro</div>
  <div class="grid-col-4">scale('body', 'micro')</div>
</div>
<div class="grid-row font-mono-2xs padding-y-05 border-bottom border-base-light">
  <div class="grid-col-2 font-sans-2xs">Heading 15</div>
  <div class="grid-col-3">'heading', 15</div>
  <div class="grid-col-3">$heading-15</div>
  <div class="grid-col-4">scale('heading', 15)</div>
</div>
