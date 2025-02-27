# Short posts

Short posts and [posts](../_posts/README.md) and  are the two content types that generate the [What's new](../README.md#adding-content-to-the-whats-new-feed) feed.

Unlike posts, short post files generate only a preview for the news feed and do _not_ generate a full post page. Use short posts to link to different pages of the site or other locations.

This document provides instructions for [creating a new short post](#creating-a-new-short-post) and [customizing a short post's metadata](#customizing-short-post-metadata).

## Creating a new short post

1. To create a new short post, create a new branch then add a new file to this directory (`/_posts_short`) with a filename in the form:

    ```
    YYYY-MM-DD-title.md
    ```
    where:
    - `YYYY` is the 4-digit year (`2025`) of the publish date
    - `MM` is the 2-digit month, with a leading zero (`01` for January, `02` for February, etc.)
    - `DD` is the 2-digit day of the month, also with a leading zero
    - `title` is the so-called "slug" used in the post URL, and should be all lowercase replace spaces with dashes (e.g. `my-post-title`)

    The YYYY-MM-DD date set in the file name will:
    - Display as the "date" in the post
    - Sort the post in reverse chronological order (newest items first) in the news feed.

2. Next, in the file's contents, copy and paste the following blank template:
    ```
    ---
    title:
    author:
    tags:
    excerpt:
    preview_url:
    ---
    ```

    The content inside the triple-dashed lines (`---`) is the post's [front matter](https://jekyllrb.com/docs/front-matter/). You will need to customize the the front matter to define the post's title, author, and more. See the table and code example in the [customizing short post metadata](#customizing-short-post-metadata) section to see the available customization options. 

    Note that for short posts, no other content is needed outside of the page's front matter.

## Customizing short post metadata

The following table provides reference for the available front matter customization options:

| Key | Description | Required |
|--------|--------|--------|
| title | The title of the post | Yes |
| author | The author(s) listed in the byline | No |
| tags | The tag that describes the category of the post. Multiple tags can be added, but only the first tag will appear above the post title. | Yes |
| excerpt | The post summary that will be included in the post preview | Yes |
| preview_url | The url that will be added post preview header link. Add a value of "none" when you want the header to not have a link. | Yes |

Here is a sample implementation of a short post with a related link:

```md
---
title: Lorem ipsum dolor
author: Suzy Q, Jane Doe, and Joe Schmoe
tags:
  - Lorem ipsum
excerpt: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas sed felis eget sodales.
preview_url: https://github.com/uswds/uswds/discussions/
---
```

Here is a sample implementation of a short post without a link:

```md
---
title: Lorem ipsum dolor
author: Suzy Q, Jane Doe, and Joe Schmoe
tags:
  - Lorem ipsum
excerpt: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas sed felis eget sodales.
preview_url: none
---
```
