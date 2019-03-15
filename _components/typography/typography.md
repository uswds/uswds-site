---
permalink: /components/typography/
redirect_from:
- /typography/
layout: styleguide
title: Typography
category: Components
lead: "Government websites need clear and consistent headings, highly legible body paragraphs, clear labels, and easy-to-use input fields. Our default typefaces are designed for legibility and can adapt to a variety of visual tones."
subnav:
- text: Typesetting with USWDS
  href: '#typesetting-with-uswds'
- text: Included typefaces
  href: '#included-typefaces'
- text: Prose
  href: '#prose'
- text: Links
  href: '#links'
- text: Lists
  href: '#lists'
---

<h2>Typesetting with USWDS</h2>
<p>Typesetting controls the readability of a text with the size, style, and spacing of its type. The more readable a text the more easily users can understand its content. Text with poor readability turns off readers and can make it challenging for them to stay focused. The following guidelines promote good readability.</p>
<p>In USWDS we control typesetting values with a token system. You can read more about typesetting tokens in the <a href="{{ site.baseurl }}/design-tokens/typesetting/">Typesetting tokens</a> section and in the <a href="{{ site.baseurl }}/utilities/">Utilities</a> section.</p>
<p><a href="https://accessibility.digital.gov/visual-design/typography/"> Accessibility for Teams</a> also provides good guidance around typesetting.</p>

### Font size

{:.usa-content-list}
- **Use a comfortable reading size for body text.** For most text, including body copy, use at least an effective size of 16px ([USWDS font-size 5]({{ site.baseurl }}/design-tokens/typesetting/font-size/){:.token}). Smaller and larger text can be used sparingly for special purposes (like headings, captions, photo credits, footnotes, or data tables).
- **Font size tokens:**
  - Use tokens between [USWDS font-size 5]({{ site.baseurl }}/design-tokens/typesetting/font-size/){:.token} and [USWDS font-size 8]({{ site.baseurl }}/design-tokens/typesetting/font-size/){:.token} for most running text.
  - Tokens smaller than [USWDS font-size 5]({{ site.baseurl }}/design-tokens/typesetting/font-size/){:.token} should be used more sparingly — for shorter companion text like captions, footnotes, and photo credits.
- **Font size utilities:** See the [Font size and family]({{ site.baseurl }}/utilities/font-size-and-family/) utilities section for more detail.

### Text alignment
While right-aligned, centered, and justified text have their place, most websites benefit from a consistent use of left-aligned text. Justified text, common in print, does not yet display well enough in a web browser to be considered a best practice.

{:.usa-content-list}
- **Set type flush left.** Type set flush left provides the eye a constant starting point for each line, making text easier to read.
- **Alignment tokens:** none
- **Utilities**: [text-left]({{ site.baseurl }}/utilities/paragraph-styles/#text-align){:.token}

### Measure (line length)
Controlling the length of lines of text (also known as _measure_) helps readers’ eyes flow easily from one line to the next, making reading more natural and comfortable.

{:.usa-content-list}
- **Most lines of text should be 50-75 characters.** Somewhere between 50 ([USWDS measure 1]({{ site.baseurl }}/design-tokens/typesetting/measure/){:.token}) and 75 characters per line ([USWDS measure 4]({{ site.baseurl }}/design-tokens/typesetting/measure/){:.token}) is broadly considered to be a readable line length, with 66 characters ([USWDS measure 2]({{ site.baseurl }}/design-tokens/typesetting/measure/){:.token}) considered a comfortable target.
- **Text with greater line height can have a longer measure.** Since of the functions of measure is to help readers move from one line of text to another more naturally, the effects of a long measure can be lessened by increasing the space between lines. This, text with more space between lines can have somewhat longer line length.
- **Short passages can have measure outside the idea range.** Contexts in which users will not be reading long passages of text (such as footnotes or alerts) can safely be set with somewhat longer or shorter lines than usual.
- **Measure tokens:** none
- **Measure utilities**: [text-left]({{ site.baseurl }}/utilities/paragraph-styles/#text-align){:.token}

### Line height
Controlling the length of lines of text (also known as _measure_) helps readers’ eyes flow easily from one line to the next, making reading more natural and comfortable.

### Whitespace
Controlling the length of lines of text (also known as _measure_) helps readers’ eyes flow easily from one line to the next, making reading more natural and comfortable.

### Font style
Controlling the length of lines of text (also known as _measure_) helps readers’ eyes flow easily from one line to the next, making reading more natural and comfortable.

<ul class="usa-content-list">
  <li><strong>Set type flush left.</strong> Type set flush left provides the eye a constant starting point for each line, making text easier to read.</li>
  <li><strong>Typesetting tokens:</strong> none</li>
  <li><strong>Utilities:</strong> Type set flush left provides the eye a constant starting point for each line, making text easier to read.</li>
</ul>


<li><strong>Line length matters.</strong> Controlling the length of lines of text in extended copy makes reading more comfortable by helping readers’ eyes flow easily from one line to the next. Somewhere between 50 and 75 characters per line is broadly considered to be a readable line length, while 66 characters is considered the ideal. Other factors beyond line length also affect reading comfort. Text with more space between lines can have somewhat longer line length. Also, contexts in which users will not be reading long passages of text (such as footnotes or alerts) can safely be set with somewhat longer lines as well.</li>
<li><strong>Spacing establishes grouping patterns.</strong> White space affects how the user focuses their attention on the content. It makes it easier to know what to read and where to begin. Spacing between typographic elements should be open enough to feel light, but close enough to establish a proper relationship between elements. When setting headers and body copy, white space should be 60px, 30px, 20px, or 15px.</li>

<h2>Included typefaces</h2>
<h3 class="usa-heading-alt">Source Sans Pro</h3>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col usa-prose site-prose">
    <p>Source Sans Pro, designed by Paul D. Hunt, is an open-source sans serif typeface created for legibility in UI design. With a variety of weights that read easily at all sizes, Source Sans Pro provides clear headers as well as highly-readable body text.</p>
    <p>Inspired by twentieth-century American gothic typeface design, its slender but open letters offer a clean and friendly simplicity. Advanced hinting allows Source Sans Pro to render well on Windows systems which run Cleartype, and across browsers and devices. Moreover, it supports a variety of languages and alphabets, including Western and European language, Vietnamese, pinyin Romanization of Chinese, and Navajo.</p>
  </div>

  <div class="typography-sans-intro tablet:grid-col">
    <span class="text-huge">Aa</span>
    <div>
      <p class="text-tiny">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
      <p class="text-tiny">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
      <p class="text-tiny">0 1 2 3 4 5 6 7 8 9</p>
    </div>
  </div>
</div>

<h3 class="usa-heading-alt">Merriweather</h3>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    <p>Merriweather, designed by Sorkin Type, is an open-source serif typeface designed for on-screen reading. This font is ideal for text-dense design: the letterforms have a tall x-height but remain relatively small, making for excellent readability across screen sizes while not occupying extra horizontal space.</p>
    <p>The combination of slim and thick weights gives the font family stylistic range, while conveying a desirable mix of classic, yet modern simplicity. Merriweather communicates warmth and credibility at both large and smaller font sizes.</p>
  </div>

  <div class="typography-serif-intro tablet:grid-col font-alt-md">
    <span class="text-huge">Aa</span>
    <div>
      <p class="text-tiny">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
      <p class="text-tiny">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
      <p class="text-tiny">0 1 2 3 4 5 6 7 8 9</p>
    </div>
  </div>
</div>

<h3 class="usa-heading-alt">Public Sans</h3>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    <p><a href="https://github.com/uswds/public-sans">Public Sans</a> is an open-source sans serif typeface designed and maintained by USWDS. It is a strong, neutral, principles-driven typeface for text or display based on a traditionally American Franklin form. It uses metrics similar to common system fonts for smoother progressive enhancement. It has a plain, straightforward style, appropriate for interfaces and running text. Its large x-height makes it legible at small sizes. Its heavier weights have tighter letterspacing than its lighter weights, meaning running text (which tends to be relatively small) is spaced more generously and headings (which tend to be relatively large) are more compact. It has tabular numerals for aligning numbers in tables.</p>
  </div>
  <div class="typography-lang-intro tablet:grid-col font-alt-md">
    <span class="text-huge">Aa</span>
    <div>
      <p class="text-tiny">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
      <p class="text-tiny">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
      <p class="text-tiny">0 1 2 3 4 5 6 7 8 9</p>
    </div>
  </div>
</div>

<h3 class="usa-heading-alt">Roboto Mono</h3>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    <p>Roboto Mono, designed by Christian Robinson, is a monospaced addition to the Roboto type family. Like the other members of the Roboto family, the fonts are optimized for readability on screens across a wide variety of devices and reading environments.</p>
    <p>Special consideration is given to glyphs important for reading and writing software source code. Letters with similar shapes are easy to tell apart.</p>
  </div>

  <div class="typography-mono-intro tablet:grid-col font-alt-md">
    <span class="text-huge">Aa</span>
    <div>
      <p class="text-tiny">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
      <p class="text-tiny">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
      <p class="text-tiny">0 1 2 3 4 5 6 7 8 9</p>
    </div>
  </div>
</div>

<h2>Pairing and styles</h2>
<div class="bg-warning padding-1 radius-sm measure-4"><strong>Note:</strong> This section is changing in USWDS 2.0. Updated guidance will appear soon.</div>

{% include child-sections.html parent='typography' %}
