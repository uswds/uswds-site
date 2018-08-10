---
permalink: /documentation/video-tutorials/
layout: styleguide
title: Video tutorials
category: Documentation
lead: Watch these videos to familiarize yourself with key concepts from the U.S. Web Design System and open source development.
---

{% for video in site.data.videos %}

### {{ video.title }}

<div class="usa-embed-container">
  <iframe src="https://www.youtube.com/embed/{{ video.id }}" frameborder="0" allowfullscreen></iframe>
</div>

{% endfor %}
