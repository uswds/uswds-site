---
permalink: /getting-started/video-tutorials/
layout: styleguide
title: Video tutorials
category: Getting started
lead: Watch these videos to familiarize yourself with key concepts from the U.S. Web Design Standards and open source development.
---

{% for video in site.data.videos %}

### {{ video.title }}

<div class="embed-container">
  <iframe src="https://www.youtube.com/embed/{{ video.id }}" frameborder="0" allowfullscreen></iframe>
</div>

{% endfor %}
