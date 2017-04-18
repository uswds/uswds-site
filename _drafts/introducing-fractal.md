---
title: Introducing Fractal and Federalist
layout: post
tags:
- engineering
excerpt: >
  We're adding two powerful, new tools to our development toolbox.
meta:
  og:image: /img/updates/fractal_v1.0.0.png
---

Recently we've added two powerful tools to our development toolbox that allow
us to preview, test, and publish the Standards code more quickly and easily.
Read more below, or peruse our [GitHub repository] for more info.

## Fractal
[Fractal] is a powerful and flexible framework for building interactive
component libraries. At its core, Fractal is very similar to [Jekyll][] (which
we use on this site), in that it operates on simple file naming conventions:
organize your files in a specific way, using the formats that it understands,
and it generates a web site.

Check out the Standards in Fractal:

[![View the Standards in Fractal]({{ site.baseurl }}/img/updates/fractal_v1.0.0.png)][Fractal preview]


### Why Fractal?

1. **It's [open source]**, so we were able to try it for free (paying for
   services in government can be difficult), and we can modify it to suit our
   needs.

1. **It's easy to use.** Fractal supports some of the same, user-friendly file
   formats as Jekyll, including [Markdown] and [YAML].

1. It generates standalone HTML previews of each component, which we can use
   for [accessibility][accessibility testing], [cross-browser], and [visual
   regression] testing.

1. It supports many of the technologies that we either use already or intend
   to use in the future, such as [Node.js][] (the JavaScript environment in
   which we write, build, and publish our code) and [Nunjucks] templates--which
   are in turn compatible with a number other template languages, including
   [Jinja2] for Python and [Twig], the PHP templating engine
   [used by Drupal][Drupal twig].

1. It's themes are customizable, so we want to make it look and feel like the
   Standards eventually.

### Thinking in components

Fractal's component-oriented architecture forced us to consider how [our own
components]({{ site.baseurl }}/components/) really work: What are the moving
parts of each one, and how do the "variants" of one component (for instance,
our [basic]({{ site.baseurl }}/components/headers/#basic) and [extended]({{
site.baseurl }}/components/headers/#extended) headers) differ? The process of
adapting our components to Fractal gave us a basic [interface inventory], which
tells us where we are right now, and gives us the confidence by helping us
better understand the effects of every change we make on every piece of the
Standards.

, and a place (a specific URL) where we could test each of our
components in isolation. 

Before Fractal, the only place to test our components
was on this site, which made working on the Standards difficult: each person
needed to clone both of our git repositories, `npm link` them together, then
manually restart the Jekyll server for the site to see changes to the Standards
CSS and JavaScript.


## Federalist

[Federalist] is like [GitHub Pages] for government: a platform that
automatically publishes static sites whenever we push commits to our [GitHub
repository]. Unlike GitHub Pages, though, Federalist isn't limited to a handful
of [Jekyll] themes--in fact, we can run the same [Node.js] tools that we use to
develop and publish our code on Federalist, including Fractal.

[open source]: https://opensource.org/
[Federalist]: https://federalist.18f.gov
[Fractal]: http://fractal.build
[GitHub Pages]: https://pages.github.com/
[GitHub repository]: https://github.com/18F/web-design-standards
[Node.js]: https://nodejs.org/
[Nunjucks]: https://mozilla.github.io/nunjucks/
[Jekyll]: https://jekyllrb.com/
[Jinja2]: http://jinja.pocoo.org/
[Twig]: https://twig.sensiolabs.org/
[Drupal twig]: https://www.drupal.org/docs/8/theming/twig
[accessibility testing]: https://www.w3.org/wiki/Accessibility_testing
[cross-browser]: https://www.smashingmagazine.com/2016/02/high-impact-minimal-effort-cross-browser-testing/
[visual regression]: https://visualregressiontesting.com/
[Fractal preview]: https://federalist.fr.cloud.gov/preview/18f/web-design-standards/develop/
[Markdown]: https://en.wikipedia.org/wiki/Markdown
[YAML]: https://en.wikipedia.org/wiki/YAML
[interface inventory]: http://bradfrost.com/blog/post/conducting-an-interface-inventory/
