---
title: Monthly calls
permalink: /about/monthly-calls/
redirect_from:
- /documentation/video-tutorials/
- /about/monthly-call/
layout: styleguide
category: About
lead: At USWDS monthly calls, we share important updates and tips about how to use the design system.
subnav:
- text: Latest updates
  href: '#changelog'
changelog:
  key: about-monthly-calls

---

Register for [upcoming calls on Digital.gov](https://digital.gov/events/). All USWDS videos are available on [our YouTube page](https://www.youtube.com/playlist?list=PLd9b-GuOJ3nGqDYCNsCMHCQ9MdD5jfB01).

{% for video in site.data.monthly-calls.videos %}

{:.border-bottom-1px .padding-bottom-1 .border-base-lighter .measure-5}
## {{ video.date }}: {{ video.title }}

**{{ video.subtitle }}**

{{ video.description }}

{% if video.slides.link %}
<ul class="usa-list">
  <li><a href="{{ video.slides.link}}">{{ video.date }} slides (PowerPoint presentation, {{ video.slides.size }} MB, {{ video.slides.pages }} pages)</a></li>
  <li><a href="{{ video.event_link}}">{{ video.date }} script and more at Digital.gov</a></li>
</ul>
{% endif %}

<div class="usa-embed-container margin-top-4">
  <iframe src="https://www.youtube.com/embed/{{ video.id }}" title="{{ video.title }}" frameborder="0" allowfullscreen></iframe>
</div>

{% endfor %}