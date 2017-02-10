# Navigation includes

This directory is a collection of Jekyll includes that can be used to
flexibly generate lists of navigation links from data in different
contexts.

## Usage

The boilerplate for a navigation list looks like this:

```html
<ul>
{% include nav/list.html links=links %}
</ul>
```

The `links` include parameter should be a list of objects with the
following properties:

* `href` is the only required property and indicates either:
  * the `permalink` of an existing Jekyll page (in `site.pages`),
  * the `permalink` of a page in the `components` collection (`site.components`), or
  * the `href` attribute of the link to be generated.
* `text` is the link's text. If the `href` resolves to a known page, the
  text defaults to the page's `title` property.

For example, given the following navigation list data:

```yaml
# _data/nav.yml
primary:
- href: /
- href: /about/
```

You could generate a navigation list with:

```html
<ul>
{% include nav/list.html links=site.data.nav.primary %}
</ul>
```

Other allowed include parameters for `nav/list.html` include:

* `current` indicates the strategy for determining whether a link is
  highlighted as "current":
  * `'contains'` causes any page link with a permalink that "contains" the
    current `page` to be highlighted, with the one exception of `/`.
  * Otherwise, only page links for which `link.href == page.permalink` will
    be highlighted.
* `flat` if truthy, disables subnavigation rendering.
* `subnav_class` is the class to use for subnavigation lists, and defaults
  to `usa-sidenav-sub_list`.

### Subnavigation

If a page link is identified as "current", and unless `include.flat` is
truthy, then a subnavigation list is generated for that page, according to
its `subnav` frontmatter. For instance, given the following link data:

```yaml
# _data/nav.yml
primary:
- href: /page-one/
- href: /page-two/
- href: /page-three/
```

and the following page:

```markdown
---
permalink: /page-one/
title: Page one
subnav:
- text: Section one
  href: '#section-one'
- text: Section two
  href: '#section-two'
---

## Section one

...

## Section two
```

And the following template code:

```html
<ul>
{% include nav/list.html links=site.data.nav.primary %}
</ul>
```

Then the subnavigation for `/page-one/` would only be visible on that page,
and would look something like:

```html
<ul>
  <li>
    <a href="/page-one/" class="usa-current">Page one</a>
    <ul class="usa-sidenav-sub_list">
      <li><a href="#section-one">Section one</a></li>
      <li><a href="#section-two">Section two</a></li>
    </ul>
  </li>
  <li><a href="/page-two/">Page two</a></li>
  <li><a href="/page-three/">Page three</a></li>
</ul>
```
