# Adding content to the "Updates" section

Our [news and updates] section of the site is powered by [Jekyll posts]. See below for instructions for drafting and submitting updates either from the [command line](#command-line) or [on GitHub](#github).

However you choose to go about it, please follow the [post conventions](#post-conventions).

## Command line

This project incorporates the [jekyll-compose plugin][jekyll-compose],
which powers the following workflow:

1. Create a new draft entry with:

    ```sh
    bundle exec jekyll draft "title of my post"
    ```

    The above command, for example, should create `_drafts/title-of-my-post.md`.

1. Stop Jekyll if it's running, then restart it with the `--drafts` argument:

    ```sh
    bundle exec jekyll serve --drafts
    ```

    Once the server starts, you should see your draft listed at [`/whats-new/updates/`](http://localhost:4000/whats-new/updates/). 

1. Edit or rename your draft as needed. Jekyll will regenerate the pages each time you change the file.

1. When you're ready to publish, run:

    ```sh
    bundle exec jekyll publish _drafts/name-of-post.md
    ```

    where the last argument is the path of your draft. This will insert the current date into the post's file name and move it into `_posts`, where Jekyll will pick it recognized it as published without the `--drafts` argument.


## GitHub

To submit a new update via GitHub, [add a new file] to this directory (`_posts`) with a filename in the form:

```
YYYY-MM-DD-title.md
```

where:

- `YYYY` is the 4-digit year (`2017`) of the publish date
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

[Jekyll posts]: https://jekyllrb.com/docs/posts/
[add a new file]: https://github.com/18F/web-design-standards-docs/new/develop/_posts?filename=YYYY-MM-DD-post-title.md
[excerpt]: https://jekyllrb.com/docs/posts/#post-excerpts
[front matter]: https://jekyllrb.com/docs/frontmatter/
[jekyll-compose]: https://github.com/jekyll/jekyll-compose#readme
[news and updates]: https://standards.usa.gov/whats-new/updates/
