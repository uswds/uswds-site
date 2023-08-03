---
category: Components
component:
  name: card
  status: ready
  package: usa-card
  dependencies:
layout: component
permalink: /components/card/
redirect_from:
- /cards/
- /card/
- /components/cards/
layout: component
lead: Cards contain content and actions about a single subject.
subnav:
- text: Preview
  href: '#card-preview'
- text: Code
  href: '#card-code'
- text: Guidance
  href: '#card-guidance'
- text: Package
  href: '#card-package'
- text: Latest updates
  href: '#changelog'
type: component
variants:
  - variant: "`.usa-card--flag`"
    description: Display in a horizontal ("flag") orientation at a specified width (`$theme-card-flag-min-width`).
  - variant: "`.usa-card--header-first`"
    description: Displays the header element before the media element.
  - variant: "`.usa-card--media-right`"
    description: In combination with `usa-card--flag`, sets the media element on the right. (Flag cards display media on the left by default.)
  - variant: "`.usa-card__media--inset`"
    description: Indents the media element so it doesn't extend to the edge of the card.
  - variant: "`.usa-card__media--exdent`"
    description: Extends the media element out over the card border. Useful for light-bordered cards.
  - variant: "`.usa-card__header--exdent`"
    description: Extends the header element out over the card border. Useful for light-bordered cards.
  - variant: "`.usa-card__body--exdent`"
    description: Extends the body element out over the card border. Useful for light-bordered cards.
  - variant: "`.usa-card__footer--exdent`"
    description: Extends the footer element out over the card border. Useful for light-bordered cards.
changelog:
  key: component-card
---

A **card** is often a subset or summary of a larger idea. It acts as an entry point to more detailed information. This summary can contain a variety of content types, such as text, images and multimedia, or buttons and links.

An individual card is typically **a member of a collection** of similar cards, not a single card in isolation. A card is distinguished from others in its collection by its content, and cards are distinguished from the broader page context in form — usually with a border or a shadow.

Finally, a card is **modular**, which means you can vary the order of cards in a collection without destroying any individual card’s meaning.
