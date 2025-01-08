# Adding content to the "Updates" section

Our [What's new page](https://designsystem.digital.gov/about/whats-new/) is powered by [Jekyll posts](https://jekyllrb.com/docs/posts/). See below for instructions for [creating new posts](#creating-a-new-post), [customizing the post's metadata](#customizing-post-metadata), and following [post conventions](#post-conventions).

## Creating a new post

To create a new post via the GitHub UI, create a new branch then add a new file to this directory (`_posts`) with a filename in the form:

```
YYYY-MM-DD-title.md
```

where:

- `YYYY` is the 4-digit year (`2024`) of the publish date
- `MM` is the 2-digit month, with a leading zero (`01` for January, `02` for February, etc.)
- `DD` is the 2-digit day of the month, also with a leading zero
- `title` is the so-called "slug" used in the post URL, and should be all lowercase with no spaces (e.g. `my-post-title`)

See the [Jekyll documentation about creating posts](https://jekyllrb.com/docs/posts/#creating-post-files) for more info.

Next, in the file's contents, copy and paste the following:

```
---
title: My post title
category: About
---

This is my introductory paragraph.

## This is a heading

And this is another paragraph.
```

## Customizing post metadata

You can customize the post's metadata by defining the following in the file's [front matter](https://jekyllrb.com/docs/front-matter/):

| Key | Description | Required |
|--------|--------|--------|
| title | The title of the post | Yes |
| category | The site category that ties the post to the side navigation. The value for this should always be "About" | Yes|
| author | The author(s) listed in the byline | No |
| tags | The tag that describes the category of the post. Multiply tags can be added. The first tag will appear above the post title. | Yes |
| excerpt | The post summary that will be included in the post preview | Yes |
| lead | The first paragraph of your post displayed in large ("lead") text. When present, the lead will be used as the "excerpt" in the post preview. | No |
| preview_url | The alternate url that will be added to the link in the post preview header. When this key is present, there is no need to add content outside of the post's front matter. | No |
| expiration_date | The date when this post will receive the "This content is outdated" alert. This is typically set 2 years from the publication date. | No | 

Here is a sample front matter customization:

```md
---
title: Lorem ipsum dolor
category: About
author: Suzy Q, Jane Doe, and Joe Schmoe
tags:
- discussion
- news
excerpt: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas sed felis eget sodales.
preview_url: https://github.com/uswds/uswds/discussions/
---
```
 
## Post conventions

In general, the following conventions should be followed in your posts:

1. Prefer Markdown files (`.md`) to HTML (`.html`), and remember: You can always embed HTML in Markdown, but not the other way around.

1. When linking to other pages on the site, **always** prefix URIs with the Jekyll base URL (`{{ site.baseurl }}`):

    ```md
    ## Good
    Check out [what's new]({{ site.baseurl }}/whats-new/)!

    ## Bad
    Check out [what's new](/whats-new/)!
