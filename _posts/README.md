# Adding content to the "Updates" section

Our [What's new page](https://designsystem.digital.gov/about/whats-new/) is powered by [Jekyll posts](https://jekyllrb.com/docs/posts/). See below for instructions for [creating new posts](#creating-a-new-post) and following [post conventions](#post-conventions).

## Creating a new post

To create a new post via the GitHub UI, [add a new file](https://github.com/uswds/uswds-site/new/main/_posts?filename=YYYY-MM-DD-post-title.md) to this directory (`_posts`) with a filename in the form:

```
YYYY-MM-DD-title.md
```

where:

- `YYYY` is the 4-digit year (`2024`) of the publish date
- `MM` is the 2-digit month, with a leading zero (`01` for January, `02` for February, etc.)
- `DD` is the 2-digit day of the month, also with a leading zero
- `title` is the so-called "slug" used in the post URL, and should be all lowercase with no spaces (e.g. `my-post-title`)

See the [Jekyll documentation](https://jekyllrb.com/docs/posts/#creating-post-files) for more info.

Next, in the file's contents, copy and paste the following:

```
---
title: My update title
---

This is my introductory paragraph.

## This is a heading

And this is another paragraph.
```

## Post conventions

In general, the following conventions should be followed in your posts:

1. Prefer Markdown files (`.md`) to HTML (`.html`), and remember: You can always embed HTML in Markdown, but not the other way around.

1. To have the first paragraph of your post displayed in large ("lead") text, move it to the front matter like so:

    ```md
    ---
    title: My update title
    lead: This is my lead paragraph.
    ---
    ```

    The lead will be treated as the [excerpt] in update listings.

1. When linking to other pages on the site, **always** prefix URIs with the Jekyll base URL:

    ```md
    ## Good
    Check out [what's new]({{ site.baseurl }}/whats-new/)!

    ## Bad
    Check out [what's new](/whats-new/)!
    ```