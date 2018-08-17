---
permalink: /style/color/system-color-palette-alt/
layout: styleguide
title: System color palette
category: Style
lead: The USWDS system color palette is the complete set of colors from which any project can build a theme palette
type: docs
subnav:
- text: Red
href: '#red'
- text: Orange warm
href: '#orange-warm'
- text: Orange
href: '#orange'
- text: Gold
href: '#gold'
- text: Yellow
href: '#yellow'
- text: Green warm
href: '#green-warm'
- text: Green
href: '#green'
- text: Green cool
href: '#green-cool'
- text: Mint
href: '#mint'
- text: Mint cool
href: '#mint-cool'
- text: Cyan
href: '#cyan'
- text: Blue
href: '#blue'
- text: Blue warm
href: '#blue-warm'
- text: Indigo cool
href: '#indigo-cool'
- text: Indigo
href: '#indigo'
- text: Indigo warm
href: '#indigo-warm'
- text: Violet
href: '#violet'
- text: Violet warm
href: '#violet-warm'
- text: Magenta
href: '#magenta'
- text: Gray warm
href: '#gray-warm'
- text: Gray
href: '#gray'
- text: Gray cool
href: '#gray-cool'
---
<div class="grid-row padding-top-3 text-normal">
<div class="grid-col-fill content">
<div class="utility-example-container-condensed grid-row grid-gap flex-align-center">
<span class="grid-col-1">
<span class="square-4 radius-sm display-inline-block text-middle margin-right-1 bg-{{ color.token }}"></span>
</span>
<span class="grid-col-2">
<span class="utility-class">'{{ color.family_token }}'</span>
</span>
<span class="grid-col-2">
{% if color.grade_token %}
<span class="utility-class">'{{ color.grade_token }}'</span>
{% else %}
<span>—</span>
{% endif %}
</span>
<span class="grid-col-4 font-mono-3">
<span>{{ color.theme_var }}</span>
</span>
<span class="grid-col-2 font-mono-3">
<span>{{ color.system }}</span>
</span>
<span class="grid-col-1 text-right font-mono-3">
{{ color.value }}
</span>
</div>

<div id="red"></div>
<div class="color">'red', 5</div>
<div class="color">'red', 10</div>
<div class="color">'red', 20</div>
<div class="color">'red', 30</div>
<div class="color">'red', 40</div>
<div class="color">'red', 50</div>
<div class="color">'red', 60</div>
<div class="color">'red', 70</div>
<div class="color">'red', 80</div>
<div class="color">'red', 90</div>
<div class="color">'red', 5, 'vivid'</div>
<div class="color">'red', 10, 'vivid'</div>
<div class="color">'red', 20, 'vivid'</div>
<div class="color">'red', 30, 'vivid'</div>
<div class="color">'red', 40, 'vivid'</div>
<div class="color">'red', 50, 'vivid'</div>
<div class="color">'red', 60, 'vivid'</div>
<div class="color">'red', 70, 'vivid'</div>
<div class="color">'red', 80, 'vivid'</div>
<div class="color">'red', 90, 'vivid'</div>
<div class="color">'red-warm', 5</div>
<div class="color">'red-warm', 10</div>
<div class="color">'red-warm', 20</div>
<div class="color">'red-warm', 30</div>
<div class="color">'red-warm', 40</div>
<div class="color">'red-warm', 50</div>
<div class="color">'red-warm', 60</div>
<div class="color">'red-warm', 70</div>
<div class="color">'red-warm', 80</div>
<div class="color">'red-warm', 90</div>
<div class="color">'red-warm', 5, 'vivid'</div>
<div class="color">'red-warm', 10, 'vivid'</div>
<div class="color">'red-warm', 20, 'vivid'</div>
<div class="color">'red-warm', 30, 'vivid'</div>
<div class="color">'red-warm', 40, 'vivid'</div>
<div class="color">'red-warm', 50, 'vivid'</div>
<div class="color">'red-warm', 60, 'vivid'</div>
<div class="color">'red-warm', 70, 'vivid'</div>
<div class="color">'red-warm', 80, 'vivid'</div>
<div class="color">'red-warm', 90, 'vivid'</div>
<div id="orange-warm"></div>
<div class="color">'orange-warm', 5</div>
<div class="color">'orange-warm', 10</div>
<div class="color">'orange-warm', 20</div>
<div class="color">'orange-warm', 30</div>
<div class="color">'orange-warm', 40</div>
<div class="color">'orange-warm', 50</div>
<div class="color">'orange-warm', 60</div>
<div class="color">'orange-warm', 70</div>
<div class="color">'orange-warm', 80</div>
<div class="color">'orange-warm', 90</div>
<div class="color">'orange-warm', 5, 'vivid'</div>
<div class="color">'orange-warm', 10, 'vivid'</div>
<div class="color">'orange-warm', 20, 'vivid'</div>
<div class="color">'orange-warm', 30, 'vivid'</div>
<div class="color">'orange-warm', 40, 'vivid'</div>
<div class="color">'orange-warm', 50, 'vivid'</div>
<div class="color">'orange-warm', 60, 'vivid'</div>
<div class="color">'orange-warm', 70, 'vivid'</div>
<div class="color">'orange-warm', 80, 'vivid'</div>
<div class="color">'orange-warm', 90, 'vivid'</div>
<div id="orange"></div>
<div class="color">'orange', 5</div>
<div class="color">'orange', 10</div>
<div class="color">'orange', 20</div>
<div class="color">'orange', 30</div>
<div class="color">'orange', 40</div>
<div class="color">'orange', 50</div>
<div class="color">'orange', 60</div>
<div class="color">'orange', 70</div>
<div class="color">'orange', 80</div>
<div class="color">'orange', 90</div>
<div class="color">'orange', 5, 'vivid'</div>
<div class="color">'orange', 10, 'vivid'</div>
<div class="color">'orange', 20, 'vivid'</div>
<div class="color">'orange', 30, 'vivid'</div>
<div class="color">'orange', 40, 'vivid'</div>
<div class="color">'orange', 50, 'vivid'</div>
<div class="color">'orange', 60, 'vivid'</div>
<div class="color">'orange', 70, 'vivid'</div>
<div class="color">'orange', 80, 'vivid'</div>
<div class="color">'orange', 90, 'vivid'</div>
<div id="gold"></div>
<div class="color">'gold', 5</div>
<div class="color">'gold', 10</div>
<div class="color">'gold', 20</div>
<div class="color">'gold', 30</div>
<div class="color">'gold', 40</div>
<div class="color">'gold', 50</div>
<div class="color">'gold', 60</div>
<div class="color">'gold', 70</div>
<div class="color">'gold', 80</div>
<div class="color">'gold', 90</div>
<div class="color">'gold', 5, 'vivid'</div>
<div class="color">'gold', 10, 'vivid'</div>
<div class="color">'gold', 20, 'vivid'</div>
<div class="color">'gold', 30, 'vivid'</div>
<div class="color">'gold', 40, 'vivid'</div>
<div class="color">'gold', 50, 'vivid'</div>
<div class="color">'gold', 60, 'vivid'</div>
<div class="color">'gold', 70, 'vivid'</div>
<div class="color">'gold', 80, 'vivid'</div>
<div class="color">'gold', 90, 'vivid'</div>
<div id="yellow"></div>
<div class="color">'yellow', 5</div>
<div class="color">'yellow', 10</div>
<div class="color">'yellow', 20</div>
<div class="color">'yellow', 30</div>
<div class="color">'yellow', 40</div>
<div class="color">'yellow', 50</div>
<div class="color">'yellow', 60</div>
<div class="color">'yellow', 70</div>
<div class="color">'yellow', 80</div>
<div class="color">'yellow', 90</div>
<div class="color">'yellow', 5, 'vivid'</div>
<div class="color">'yellow', 10, 'vivid'</div>
<div class="color">'yellow', 20, 'vivid'</div>
<div class="color">'yellow', 30, 'vivid'</div>
<div class="color">'yellow', 40, 'vivid'</div>
<div class="color">'yellow', 50, 'vivid'</div>
<div class="color">'yellow', 60, 'vivid'</div>
<div class="color">'yellow', 70, 'vivid'</div>
<div class="color">'yellow', 80, 'vivid'</div>
<div class="color">'yellow', 90, 'vivid'</div>
<div id="green-warm"></div>
<div class="color">'green-warm', 5</div>
<div class="color">'green-warm', 10</div>
<div class="color">'green-warm', 20</div>
<div class="color">'green-warm', 30</div>
<div class="color">'green-warm', 40</div>
<div class="color">'green-warm', 50</div>
<div class="color">'green-warm', 60</div>
<div class="color">'green-warm', 70</div>
<div class="color">'green-warm', 80</div>
<div class="color">'green-warm', 90</div>
<div class="color">'green-warm', 5, 'vivid'</div>
<div class="color">'green-warm', 10, 'vivid'</div>
<div class="color">'green-warm', 20, 'vivid'</div>
<div class="color">'green-warm', 30, 'vivid'</div>
<div class="color">'green-warm', 40, 'vivid'</div>
<div class="color">'green-warm', 50, 'vivid'</div>
<div class="color">'green-warm', 60, 'vivid'</div>
<div class="color">'green-warm', 70, 'vivid'</div>
<div class="color">'green-warm', 80, 'vivid'</div>
<div class="color">'green-warm', 90, 'vivid'</div>
<div id="green"></div>
<div class="color">'green', 5</div>
<div class="color">'green', 10</div>
<div class="color">'green', 20</div>
<div class="color">'green', 30</div>
<div class="color">'green', 40</div>
<div class="color">'green', 50</div>
<div class="color">'green', 60</div>
<div class="color">'green', 70</div>
<div class="color">'green', 80</div>
<div class="color">'green', 90</div>
<div class="color">'green', 5, 'vivid'</div>
<div class="color">'green', 10, 'vivid'</div>
<div class="color">'green', 20, 'vivid'</div>
<div class="color">'green', 30, 'vivid'</div>
<div class="color">'green', 40, 'vivid'</div>
<div class="color">'green', 50, 'vivid'</div>
<div class="color">'green', 60, 'vivid'</div>
<div class="color">'green', 70, 'vivid'</div>
<div class="color">'green', 80, 'vivid'</div>
<div class="color">'green', 90, 'vivid'</div>
<div id="green-cool"></div>
<div class="color">'green-cool', 5</div>
<div class="color">'green-cool', 10</div>
<div class="color">'green-cool', 20</div>
<div class="color">'green-cool', 30</div>
<div class="color">'green-cool', 40</div>
<div class="color">'green-cool', 50</div>
<div class="color">'green-cool', 60</div>
<div class="color">'green-cool', 70</div>
<div class="color">'green-cool', 80</div>
<div class="color">'green-cool', 90</div>
<div class="color">'green-cool', 5, 'vivid'</div>
<div class="color">'green-cool', 10, 'vivid'</div>
<div class="color">'green-cool', 20, 'vivid'</div>
<div class="color">'green-cool', 30, 'vivid'</div>
<div class="color">'green-cool', 40, 'vivid'</div>
<div class="color">'green-cool', 50, 'vivid'</div>
<div class="color">'green-cool', 60, 'vivid'</div>
<div class="color">'green-cool', 70, 'vivid'</div>
<div class="color">'green-cool', 80, 'vivid'</div>
<div class="color">'green-cool', 90, 'vivid'</div>
<div id="mint"></div>
<div class="color">'mint', 5</div>
<div class="color">'mint', 10</div>
<div class="color">'mint', 20</div>
<div class="color">'mint', 30</div>
<div class="color">'mint', 40</div>
<div class="color">'mint', 50</div>
<div class="color">'mint', 60</div>
<div class="color">'mint', 70</div>
<div class="color">'mint', 80</div>
<div class="color">'mint', 90</div>
<div class="color">'mint', 5, 'vivid'</div>
<div class="color">'mint', 10, 'vivid'</div>
<div class="color">'mint', 20, 'vivid'</div>
<div class="color">'mint', 30, 'vivid'</div>
<div class="color">'mint', 40, 'vivid'</div>
<div class="color">'mint', 50, 'vivid'</div>
<div class="color">'mint', 60, 'vivid'</div>
<div class="color">'mint', 70, 'vivid'</div>
<div class="color">'mint', 80, 'vivid'</div>
<div class="color">'mint', 90, 'vivid'</div>
<div id="mint-cool"></div>
<div class="color">'mint-cool', 5</div>
<div class="color">'mint-cool', 10</div>
<div class="color">'mint-cool', 20</div>
<div class="color">'mint-cool', 30</div>
<div class="color">'mint-cool', 40</div>
<div class="color">'mint-cool', 50</div>
<div class="color">'mint-cool', 60</div>
<div class="color">'mint-cool', 70</div>
<div class="color">'mint-cool', 80</div>
<div class="color">'mint-cool', 90</div>
<div class="color">'mint-cool', 5, 'vivid'</div>
<div class="color">'mint-cool', 10, 'vivid'</div>
<div class="color">'mint-cool', 20, 'vivid'</div>
<div class="color">'mint-cool', 30, 'vivid'</div>
<div class="color">'mint-cool', 40, 'vivid'</div>
<div class="color">'mint-cool', 50, 'vivid'</div>
<div class="color">'mint-cool', 60, 'vivid'</div>
<div class="color">'mint-cool', 70, 'vivid'</div>
<div class="color">'mint-cool', 80, 'vivid'</div>
<div class="color">'mint-cool', 90, 'vivid'</div>
<div id="cyan"></div>
<div class="color">'cyan', 5</div>
<div class="color">'cyan', 10</div>
<div class="color">'cyan', 20</div>
<div class="color">'cyan', 30</div>
<div class="color">'cyan', 40</div>
<div class="color">'cyan', 50</div>
<div class="color">'cyan', 60</div>
<div class="color">'cyan', 70</div>
<div class="color">'cyan', 80</div>
<div class="color">'cyan', 90</div>
<div class="color">'cyan', 5, 'vivid'</div>
<div class="color">'cyan', 10, 'vivid'</div>
<div class="color">'cyan', 20, 'vivid'</div>
<div class="color">'cyan', 30, 'vivid'</div>
<div class="color">'cyan', 40, 'vivid'</div>
<div class="color">'cyan', 50, 'vivid'</div>
<div class="color">'cyan', 60, 'vivid'</div>
<div class="color">'cyan', 70, 'vivid'</div>
<div class="color">'cyan', 80, 'vivid'</div>
<div class="color">'cyan', 90, 'vivid'</div>
<div id="blue"></div>
<div class="color">'blue', 5</div>
<div class="color">'blue', 10</div>
<div class="color">'blue', 20</div>
<div class="color">'blue', 30</div>
<div class="color">'blue', 40</div>
<div class="color">'blue', 50</div>
<div class="color">'blue', 60</div>
<div class="color">'blue', 70</div>
<div class="color">'blue', 80</div>
<div class="color">'blue', 90</div>
<div class="color">'blue', 5, 'vivid'</div>
<div class="color">'blue', 10, 'vivid'</div>
<div class="color">'blue', 20, 'vivid'</div>
<div class="color">'blue', 30, 'vivid'</div>
<div class="color">'blue', 40, 'vivid'</div>
<div class="color">'blue', 50, 'vivid'</div>
<div class="color">'blue', 60, 'vivid'</div>
<div class="color">'blue', 70, 'vivid'</div>
<div class="color">'blue', 80, 'vivid'</div>
<div class="color">'blue', 90, 'vivid'</div>
<div id="blue-warm"></div>
<div class="color">'blue-warm', 5</div>
<div class="color">'blue-warm', 10</div>
<div class="color">'blue-warm', 20</div>
<div class="color">'blue-warm', 30</div>
<div class="color">'blue-warm', 40</div>
<div class="color">'blue-warm', 50</div>
<div class="color">'blue-warm', 60</div>
<div class="color">'blue-warm', 70</div>
<div class="color">'blue-warm', 80</div>
<div class="color">'blue-warm', 90</div>
<div class="color">'blue-warm', 5, 'vivid'</div>
<div class="color">'blue-warm', 10, 'vivid'</div>
<div class="color">'blue-warm', 20, 'vivid'</div>
<div class="color">'blue-warm', 30, 'vivid'</div>
<div class="color">'blue-warm', 40, 'vivid'</div>
<div class="color">'blue-warm', 50, 'vivid'</div>
<div class="color">'blue-warm', 60, 'vivid'</div>
<div class="color">'blue-warm', 70, 'vivid'</div>
<div class="color">'blue-warm', 80, 'vivid'</div>
<div class="color">'blue-warm', 90, 'vivid'</div>
<div id="indigo-cool"></div>
<div class="color">'indigo-cool', 5</div>
<div class="color">'indigo-cool', 10</div>
<div class="color">'indigo-cool', 20</div>
<div class="color">'indigo-cool', 30</div>
<div class="color">'indigo-cool', 40</div>
<div class="color">'indigo-cool', 50</div>
<div class="color">'indigo-cool', 60</div>
<div class="color">'indigo-cool', 70</div>
<div class="color">'indigo-cool', 80</div>
<div class="color">'indigo-cool', 90</div>
<div class="color">'indigo-cool', 5, 'vivid'</div>
<div class="color">'indigo-cool', 10, 'vivid'</div>
<div class="color">'indigo-cool', 20, 'vivid'</div>
<div class="color">'indigo-cool', 30, 'vivid'</div>
<div class="color">'indigo-cool', 40, 'vivid'</div>
<div class="color">'indigo-cool', 50, 'vivid'</div>
<div class="color">'indigo-cool', 60, 'vivid'</div>
<div class="color">'indigo-cool', 70, 'vivid'</div>
<div class="color">'indigo-cool', 80, 'vivid'</div>
<div class="color">'indigo-cool', 90, 'vivid'</div>
<div id="indigo"></div>
<div class="color">'indigo', 5</div>
<div class="color">'indigo', 10</div>
<div class="color">'indigo', 20</div>
<div class="color">'indigo', 30</div>
<div class="color">'indigo', 40</div>
<div class="color">'indigo', 50</div>
<div class="color">'indigo', 60</div>
<div class="color">'indigo', 70</div>
<div class="color">'indigo', 80</div>
<div class="color">'indigo', 90</div>
<div class="color">'indigo', 5, 'vivid'</div>
<div class="color">'indigo', 10, 'vivid'</div>
<div class="color">'indigo', 20, 'vivid'</div>
<div class="color">'indigo', 30, 'vivid'</div>
<div class="color">'indigo', 40, 'vivid'</div>
<div class="color">'indigo', 50, 'vivid'</div>
<div class="color">'indigo', 60, 'vivid'</div>
<div class="color">'indigo', 70, 'vivid'</div>
<div class="color">'indigo', 80, 'vivid'</div>
<div class="color">'indigo', 90, 'vivid'</div>
<div id="indigo-warm"></div>
<div class="color">'indigo-warm', 5</div>
<div class="color">'indigo-warm', 10</div>
<div class="color">'indigo-warm', 20</div>
<div class="color">'indigo-warm', 30</div>
<div class="color">'indigo-warm', 40</div>
<div class="color">'indigo-warm', 50</div>
<div class="color">'indigo-warm', 60</div>
<div class="color">'indigo-warm', 70</div>
<div class="color">'indigo-warm', 80</div>
<div class="color">'indigo-warm', 90</div>
<div class="color">'indigo-warm', 5, 'vivid'</div>
<div class="color">'indigo-warm', 10, 'vivid'</div>
<div class="color">'indigo-warm', 20, 'vivid'</div>
<div class="color">'indigo-warm', 30, 'vivid'</div>
<div class="color">'indigo-warm', 40, 'vivid'</div>
<div class="color">'indigo-warm', 50, 'vivid'</div>
<div class="color">'indigo-warm', 60, 'vivid'</div>
<div class="color">'indigo-warm', 70, 'vivid'</div>
<div class="color">'indigo-warm', 80, 'vivid'</div>
<div class="color">'indigo-warm', 90, 'vivid'</div>
<div id="violet"></div>
<div class="color">'violet', 5</div>
<div class="color">'violet', 10</div>
<div class="color">'violet', 20</div>
<div class="color">'violet', 30</div>
<div class="color">'violet', 40</div>
<div class="color">'violet', 50</div>
<div class="color">'violet', 60</div>
<div class="color">'violet', 70</div>
<div class="color">'violet', 80</div>
<div class="color">'violet', 90</div>
<div class="color">'violet', 5, 'vivid'</div>
<div class="color">'violet', 10, 'vivid'</div>
<div class="color">'violet', 20, 'vivid'</div>
<div class="color">'violet', 30, 'vivid'</div>
<div class="color">'violet', 40, 'vivid'</div>
<div class="color">'violet', 50, 'vivid'</div>
<div class="color">'violet', 60, 'vivid'</div>
<div class="color">'violet', 70, 'vivid'</div>
<div class="color">'violet', 80, 'vivid'</div>
<div class="color">'violet', 90, 'vivid'</div>
<div id="violet-warm"></div>
<div class="color">'violet-warm', 5</div>
<div class="color">'violet-warm', 10</div>
<div class="color">'violet-warm', 20</div>
<div class="color">'violet-warm', 30</div>
<div class="color">'violet-warm', 40</div>
<div class="color">'violet-warm', 50</div>
<div class="color">'violet-warm', 60</div>
<div class="color">'violet-warm', 70</div>
<div class="color">'violet-warm', 80</div>
<div class="color">'violet-warm', 90</div>
<div class="color">'violet-warm', 5, 'vivid'</div>
<div class="color">'violet-warm', 10, 'vivid'</div>
<div class="color">'violet-warm', 20, 'vivid'</div>
<div class="color">'violet-warm', 30, 'vivid'</div>
<div class="color">'violet-warm', 40, 'vivid'</div>
<div class="color">'violet-warm', 50, 'vivid'</div>
<div class="color">'violet-warm', 60, 'vivid'</div>
<div class="color">'violet-warm', 70, 'vivid'</div>
<div class="color">'violet-warm', 80, 'vivid'</div>
<div class="color">'violet-warm', 90, 'vivid'</div>
<div id="magenta"></div>
<div class="color">'magenta', 5</div>
<div class="color">'magenta', 10</div>
<div class="color">'magenta', 20</div>
<div class="color">'magenta', 30</div>
<div class="color">'magenta', 40</div>
<div class="color">'magenta', 50</div>
<div class="color">'magenta', 60</div>
<div class="color">'magenta', 70</div>
<div class="color">'magenta', 80</div>
<div class="color">'magenta', 90</div>
<div class="color">'magenta', 5, 'vivid'</div>
<div class="color">'magenta', 10, 'vivid'</div>
<div class="color">'magenta', 20, 'vivid'</div>
<div class="color">'magenta', 30, 'vivid'</div>
<div class="color">'magenta', 40, 'vivid'</div>
<div class="color">'magenta', 50, 'vivid'</div>
<div class="color">'magenta', 60, 'vivid'</div>
<div class="color">'magenta', 70, 'vivid'</div>
<div class="color">'magenta', 80, 'vivid'</div>
<div class="color">'magenta', 90, 'vivid'</div>
<div id="gray-warm"></div>
<div class="color">'gray-warm', 1</div>
<div class="color">'gray-warm', 2</div>
<div class="color">'gray-warm', 3</div>
<div class="color">'gray-warm', 4</div>
<div class="color">'gray-warm', 5</div>
<div class="color">'gray-warm', 10</div>
<div class="color">'gray-warm', 20</div>
<div class="color">'gray-warm', 30</div>
<div class="color">'gray-warm', 40</div>
<div class="color">'gray-warm', 50</div>
<div class="color">'gray-warm', 60</div>
<div class="color">'gray-warm', 70</div>
<div class="color">'gray-warm', 80</div>
<div class="color">'gray-warm', 90</div>
<div id="gray"></div>
<div class="color">'black', 1</div>
<div class="color">'black', 2</div>
<div class="color">'black', 3</div>
<div class="color">'black', 4</div>
<div class="color">'black', 5</div>
<div class="color">'black', 10</div>
<div class="color">'black', 20</div>
<div class="color">'black', 30</div>
<div class="color">'black', 40</div>
<div class="color">'black', 50</div>
<div class="color">'black', 60</div>
<div class="color">'black', 70</div>
<div class="color">'black', 80</div>
<div class="color">'black', 90</div>

<div id="gray-cool"></div>
<div class="color">'gray-cool', 1</div>
<div class="color">'gray-cool', 2</div>
<div class="color">'gray-cool', 3</div>
<div class="color">'gray-cool', 4</div>
<div class="color">'gray-cool', 5</div>
<div class="color">'gray-cool', 10</div>
<div class="color">'gray-cool', 20</div>
<div class="color">'gray-cool', 30</div>
<div class="color">'gray-cool', 40</div>
<div class="color">'gray-cool', 50</div>
<div class="color">'gray-cool', 60</div>
<div class="color">'gray-cool', 70</div>
<div class="color">'gray-cool', 80</div>
<div class="color">'gray-cool', 90</div>
