# Authoring What's new posts

Add posts to `_posts` using the filename `YYYY-MM-DD-short-descriptive-title.md`. Follow the front matter in a recent post and the fields used by [`_includes/post.html`](../_includes/post.html) and [`_includes/post-meta.html`](../_includes/post-meta.html):

```yaml
---
title: "A specific announcement title"
date: 2026-09-17
author: USWDS team
tags:
  - updates
category: About
excerpt: "A short description of what readers will learn."
---
```

Use the publication date and byline for the post. Quote values that contain colons or other YAML punctuation. The post template supplies the level-one heading, so start headings in the body at level two.

Jekyll uses the post date when generating its URL. This site's [`_config.yml`](../_config.yml) sets `future: true`, so future-dated posts are included in builds. A future date does not delay publication; keep a post in its PR until it is ready to publish.

## Check the rendered post

Use the [local preview instructions](../README.md#running-the-website-locally) to inspect the post and its entry in [What's new](../pages/whats-new/all-news.md). Check:

- The title, date, byline, tags, and summary.
- Heading order, images, and alternative text.
- Links and code examples.
- The generated URL and the link from the What's new index.

If a published URL changes, preserve the old URL with a redirect.
