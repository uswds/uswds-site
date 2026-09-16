---
title: Monthly call archive
permalink: /about/monthly-calls/
redirect_from:
- /documentation/video-tutorials/
- /about/monthly-call/
layout: styleguide
category: About
lead: Explore recordings and resources from past USWDS monthly calls for updates and tips about how to use the design system.
subnav:
- text: Latest updates
  href: '#changelog'
changelog:
  key: about-monthly-calls

---

Join the community in [USWDS GitHub Discussions](https://github.com/uswds/uswds/discussions) to ask questions, share ideas, and learn from others using the design system.

Browse past monthly calls below. All USWDS videos are available on [our YouTube page](https://www.youtube.com/playlist?list=PLd9b-GuOJ3nGqDYCNsCMHCQ9MdD5jfB01).

{% for video in site.data.monthly-calls.videos %}

{:.border-bottom-1px .padding-bottom-1 .border-base-lighter .measure-5}
## {{ video.date }} {% if video.title %}: {{ video.title }}{% endif %}

{% if video.subtitle %}
**{{ video.subtitle }}**
{% endif %}

{{ video.description }}

{% if video.slides.link or video.event_link %}
<ul class="usa-list">
  {% if video.slides.link %}
    <li>
      <a href="{{ video.slides.link}}">
      {% if video.date %}
        {{ video.date }} slides
      {% endif %}
      {% if video.slides.size or video.slides.pages %}
        (PowerPoint presentation{% if video.slides.size %}, {{ video.slides.size }} MB{% endif %}{% if video.slides.pages %}, {{ video.slides.pages }} pages{% endif %})
      {% endif %}
      </a>
    </li>
  {% endif %}
  {% if video.event_link %}
    {% if video.missing_script %}
      <li><a href="{{ video.event_link }}">{{ video.date }} event page at Digital.gov</a></li>
    {% else %}
      <li><a href="{{ video.event_link }}">{{ video.date }} script and more at Digital.gov</a></li>
    {% endif %}
  {% endif %}
  {% if video.questions_link %}
    <li><a href="{{ video.questions_link }}"> Q&A from the {{ video.date }} USWDS monthly call</a></li>
  {% endif %}
</ul>
{% endif %}

{% if video.id %}
  <div class="usa-embed-container margin-top-4">
    <iframe src="https://www.youtube.com/embed/{{ video.id }}" title="{{ video.title }}" frameborder="0" allowfullscreen></iframe>
  </div>
{% endif %}

{% endfor %}
