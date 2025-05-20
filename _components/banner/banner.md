---
category: Components
component:
  about: false
  name: banner
  status: ready
  package: usa-banner
lead: Banners identify official websites of government organizations in the United States. They also help visitors understand whether a website is official and secure.
permalink: /components/banner/
redirect_from:
  - /banner/
  - /components/banners/
subnav:
- text: Banner accessibility tests
  href: /components/banner/accessibility-tests/
title: Banner
type: component
variants:
  - variant: "`<usa-banner>`"
    description: 'An HTML Web Component version of Banner. Easier to implement and update but potentially harder to customize. <a href="#banner-web-component">See above</a> for details.'
changelog:
  key: component-banner
regenerate: true
---

{:.site-note}
**Note:** Banners and [identifiers]({{ site.baseurl }}/components/identifier) are core components. We recommend using both core components on most sites. Together, they are the most recognizable and standardized design elements of a government site.

You should use the banner to identify your site as an official government site.

The banner explains how to identify an official `.gov` or `.mil` domain and that these sites have secure HTTPS connections. Using the banner component is the best way to assure visitors that they're connected to an official site.

Most government sites should use the banner, but some should not use the banner. Do NOT use the banner on non-government domains such as a .com or .org.

If you are unable to update to [USWDS 2.8.0](https://github.com/uswds/uswds/releases) (described on GitHub) or higher but still want to include the new language in your banner, we recommend editing your content to the language outlined in the component preview.

{% include child-sections.html parent='Banner' %}