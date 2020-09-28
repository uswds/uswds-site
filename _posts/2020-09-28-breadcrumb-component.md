---
title: USWDS 2.8.0 includes breadcrumb component
tags:
- blog 
- breadcrumb
- component
category: About
author: Dan O. Williams, Katie Kline
meta:
  og:image: 
excerpt: The breadcrumb component describes the hierarchical relationship between a page and the site structure. It helps users understand where they are in a site.
---
# USWDS 2.8.0 includes breadcrumb component 
## When and how to use it
This July, in USWDS 2.8.0, we released a [breadcrumb component](https://designsystem.digital.gov/components/breadcrumb/), which is a secondary navigational element to help users understand where they are in a website. A breadcrumb bar (or breadcrumbs, or breadcrumb trail) is a series of links that describes the hierarchical relationship between the current page and the overall site structure. 

Our [landscape analysis](https://github.com/uswds/uswds/wiki/Breadcrumbs-Landscape-Analysis) of other design systems and government websites, along with [user testing](https://github.com/uswds/uswds/wiki/Breadcrumbs-User-Interview-Notes), led us to i[nitial recommendations](https://github.com/uswds/uswds/wiki/Breadcrumbs-Research-Findings) of how the breadcrumb component should look and when it should be used. For example, we were able to determine guidance around:

- The difference between the browser's Back button and breadcrumbs
- When to use breadcrumbs while other navigation aids are present
- How to truncate long content
- The importance of having well-structured content within a content management system

These findings helped us determine the appropriate times to use the breadcrumb component and the best way to incorporate it into sites.

## When to use the breadcrumb component
Breadcrumbs allow a user to navigate “up” through a website’s hierarchy, which is useful when the user needs to see the full site structure, as opposed to using the browser’s “Back” button to return to the previous page. In this way, the breadcrumb component is a good way to orient users who might have landed on the page from search results or an outside link. 
It’s also useful on sites where the hierarchy isn’t immediately obvious. For example, you wouldn’t want to use it on a landing page or a simple site with a few pages.
Breadcrumbs can help search engine optimization (or SEO) as well. When you use proper breadcrumb metadata, search engines display richer results for your webpages. This helps users more easily find and click on your content when they search for it.

## How to use the breadcrumb component
This latest release provides a smart way of easily creating accessible links on any background. If you use the default link color in the breadcrumb settings, the system will pick the proper standard or reverse link color based on the value you set in $theme-breadcrumb-background-color. If you want a custom link color in the breadcrumb, you can set that with $theme-breadcrumb-link-color and the system will automatically build the hover, visited and active states, and check these for proper contrast. 

On small screens we show a link to the parent of the current page. At wider widths, we'll show the full breadcrumb trail, with truncation. Your page titles should match the items in the breadcrumb. You can also update the breakpoint at which we display the full breadcrumb trail with $theme-breadcrumb-min-width. 

We also support a wrapped breadcrumb variation, if you find that your breadcrumbs are truncating the current page past the point of usability. But long breadcrumb trails can be a usability issue of their own and could be a sign that you might want to flatten the information architecture of your site.

## Next steps
- [Learn more about the breadcrumb component](https://designsystem.digital.gov/components/breadcrumb/) →  
- [Join the USWDS community](https://digital.gov/communities/uswds/) to contribute to design and development →
- [Submit an issue](https://github.com/uswds/uswds/issues/new) if you find a bug or have an idea for an improvement →
