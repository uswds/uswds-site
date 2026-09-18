# Writing and publishing What's new posts

This is a proposed editorial workflow for review with [USWDS #6336](https://github.com/uswds/uswds/issues/6336). It describes the publication process to use once maintainers accept it. It does not assign new approval authority or a publication deadline.

## Choose the right format

Use What's new for a timely announcement, a useful lesson from the community, or a change readers need to understand. Put lasting instructions in the relevant documentation and link to them from the post. Use release notes for detailed lists of code changes.

Before drafting, record the intended audience, the main point, the action readers should take, the author, and the person coordinating review in the issue or PR. Confirm the proposed publication date with the reviewers. If the post depends on a release or another announcement, record that dependency.

## Draft a focused post

Aim for 300 to 600 words for a typical announcement. This is a starting point, not a requirement. Use less space for a simple update and more when a case study needs evidence or context. Move extended technical instructions to documentation.

- Write a specific, sentence-case title that explains the news.
- Put the important change and its effect on readers in the opening paragraph.
- Use descriptive level-two headings to divide longer posts. Use level-three headings only within a level-two section. The template supplies the level-one title.
- Keep paragraphs focused. Explain unfamiliar terms and link to sources for claims.
- End with a useful next action, such as reading guidance, trying a release, or joining a discussion.
- Give images meaningful alternative text. Put essential information in the text as well. Check permissions and credits before using external material.
- Use descriptive link text and verify destinations. Avoid link text that only says "here" or "read more."

## Create the post

Add a Markdown file to `_posts` named `YYYY-MM-DD-short-descriptive-title.md`. Follow the front matter in a recent post and the fields used by [`_includes/post.html`](../_includes/post.html):

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

Use a real publication date and the agreed byline. Quote values that contain colons or other YAML punctuation. Additional fields should serve a documented template behavior; do not copy stale metadata solely because it appears in an older post.

The site uses Jekyll's post date when generating URLs. Confirm the final date before publication. This site sets `future: true` in `_config.yml`, so future-dated posts are included in builds. Keep an unapproved post in its PR until the intended publication time; a future date will not delay publication.

## Review before publication

1. **Author review.** The author checks facts, links, dates, spelling, heading structure, alternative text, and the next action. Link the source issue and supporting material in the PR. Note unresolved questions.
2. **Peer editorial review.** A reviewer other than the author reads the complete draft for clarity, accuracy, tone, and accessibility. Ask a subject matter reviewer to check technical or research claims when needed. Resolve comments before requesting final review.
3. **Federal review.** The review coordinator requests the project's designated federal reviewer after peer review is complete. Make the intended publication date and any remaining decision explicit. Follow the project's existing authority for final content approval; peer review does not replace it.
4. **Preview review.** Review the rendered page, including title, date, byline, summary, heading hierarchy, images, and links. Check its entry on the What's new index. Confirm any release or announcement dependency is satisfied.
5. **Publication.** A maintainer merges after required reviews and repository checks pass. Confirm the published page and index entry after deployment. Record the published URL in the issue or PR.

If a substantive factual or policy change happens after approval, ask the affected reviewer to review that change before publication. For an urgent correction, identify the urgency and request prompt review instead of silently skipping approval.

## Publication checklist

- [ ] The audience, main point, and next action are clear.
- [ ] Facts, version numbers, dates, and external claims have sources.
- [ ] A peer reviewer has reviewed the complete draft.
- [ ] Technical or research claims have received the appropriate subject matter review.
- [ ] The designated federal reviewer has approved the content.
- [ ] The rendered post and index entry have been checked.
- [ ] Links, headings, alternative text, and image permissions have been checked.
- [ ] Publication dependencies and the intended date have been confirmed.
- [ ] The published page has been checked after deployment.

## Maintain published posts

Correct factual errors through a PR. Explain substantive corrections in a dated note in the post when readers need to understand what changed. Keep historical announcements distinct from current product guidance and link to current guidance when older advice would mislead readers. Avoid changing a published URL; if it must change, preserve access through a redirect.
