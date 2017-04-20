---
title: Introducing Fractal and Federalist
layout: post
tags:
- devops
- deployment
- testing
excerpt: >
  We're adding two powerful, new tools to our development workflow.
meta:
  og:image: /img/updates/fractal_v1.0.0.png
preview_baseurl: https://federalist.fr.cloud.gov/preview/18f/web-design-standards
---

Recently we've added two powerful tools to our development workflow that allow
us to preview, test, and publish the Standards code more quickly and easily.
Read more below, or peruse our [GitHub repository] for more info.

## Fractal
[Fractal] is a powerful and flexible framework for building interactive
component libraries. At its core, Fractal is very similar to [Jekyll][] (which
we use on this site) in that it operates on simple file naming conventions:
organize your files in a specific way, using the formats that it understands,
and it generates a web site.

**Check out the Standards in Fractal:**

[![View the Standards in Fractal]({{ site.baseurl }}/img/updates/fractal_v1.0.0.png)]({{ page.preview_baseurl }}/develop/)


### Why Fractal?

1. **It's [open source]**, so we were able to try it for free (paying for
   services in government can be difficult), and we can modify it to suit our
   needs.

1. **It's easy to use.** Fractal supports some of the same, user-friendly file
   formats as Jekyll (including [Markdown] and [YAML]), and operates on similar
   naming conventions.

1. It generates **standalone HTML previews of each component**, which we can
   use for [accessibility][accessibility testing], [cross-browser], and [visual
   regression] testing.

1. **It uses or supports many of the technologies that we use already** (or
   intend to use in the future), such as [Node.js][] (the JavaScript
   environment in which we write, build, and publish our code) and [Nunjucks]
   templates --- which, in turn, are compatible with a number other template
   languages, including [Jinja2] for Python and [Twig], the PHP templating
   engine [used by Drupal][Drupal twig].

1. Fractal offers a [customizable theme engine], so we can make it look and
   feel like the Standards eventually.


### Thinking in components

Fractal's component-oriented architecture forced us to consider how [our own
components]({{ site.baseurl }}/components/) really work: What are the moving
parts of each one, and how do the "variants" of one component (for instance,
our [basic]({{ site.baseurl }}/components/headers/#basic) and [extended]({{
site.baseurl }}/components/headers/#extended) headers) differ? The process of
adapting our components to Fractal produced a basic [interface inventory],
which tells us where we are right now and gives us the confidence to make
bigger changes in the future because we can see their impacts on various
aspects of the Standards.

Before Fractal, the only place to test our components was on this site, which
made working on the Standards difficult: each person needed to clone both of
our git repositories, `npm link` them together, then manually restart the
Jekyll server for the site to see changes to the Standards CSS and JavaScript.
Now we've got a single, predictable URL where we can test each of our
components and page templates in the code repository, and without any of the
customizations that we've made here. Finally, each component's suggested markup
has a _source of truth_.

But where does these components "live", if not on the site? That's where
Federalist comes in...


## Federalist

[Federalist] is kind of like [GitHub Pages] for government: a platform that
automatically publishes static sites whenever we push commits to our [GitHub
repository]. Unlike GitHub Pages, though, Federalist isn't limited to a handful
of [Jekyll] themes; In fact, we can run the same [Node.js] tools that we use
to develop and publish our code on Federalist, including Fractal.

The other killer feature of Federalist is its ability to publish "branch
previews": whenever we push commits to a branch on GitHub, Federalist builds a
new version of the site and publishes it at a predictable URL. For instance,
you can see the current state of the art on our [`develop` branch
preview]({{ page.preview_baseurl }}/develop/),
or you can give our [version 1.1.0
pre-release](https://github.com/18F/web-design-standards/releases/tag/v1.1.0-pre)
a spin on the [`release-1.1.0-pre` branch
preview]({{ page.preview_baseurl }}/release-1.1.0-pre/).

Equipped with Fractal and the ability to publish each branch to predictable
URLs, we can add preview links to each of our GitHub pull requests, and more
quickly collect feedback on [proposed changes][example PR]:

[![A GitHub pull request with Fractal preview link]({{ site.baseurl }}/img/updates/federalist-preview-link.png)][example PR]


And, if necessary, we can link directly to [individual]({{ page.preview_baseurl
}}/release-1.1.0/components/detail/header--basic.html) [components]({{ page.preview_baseurl
}}/release-1.1.0/components/detail/header--extended.html), or
even their standalone [previews]().


[Drupal twig]: https://www.drupal.org/docs/8/theming/twig
[Federalist]: https://federalist.18f.gov
[Fractal]: http://fractal.build
[GitHub Pages]: https://pages.github.com/
[GitHub repository]: https://github.com/18F/web-design-standards
[Jekyll]: https://jekyllrb.com/
[Jinja2]: http://jinja.pocoo.org/
[Markdown]: https://en.wikipedia.org/wiki/Markdown
[Node.js]: https://nodejs.org/
[Nunjucks]: https://mozilla.github.io/nunjucks/
[Twig]: https://twig.sensiolabs.org/
[YAML]: https://en.wikipedia.org/wiki/YAML
[accessibility testing]: https://www.w3.org/wiki/Accessibility_testing
[cross-browser]: https://www.smashingmagazine.com/2016/02/high-impact-minimal-effort-cross-browser-testing/
[customizable theme engine]: http://fractal.build/guide/customisation/web-themes
[example PR]: https://github.com/18F/web-design-standards/pull/1836
[interface inventory]: http://bradfrost.com/blog/post/conducting-an-interface-inventory/
[open source]: https://opensource.org/
[visual regression]: https://visualregressiontesting.com/
