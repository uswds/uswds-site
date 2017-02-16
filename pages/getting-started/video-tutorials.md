---
permalink: /getting-started/video-tutorials/
layout: styleguide
title: Video tutorials
category: Getting started
lead: We've curated a list of videos from around the web and videos we've created to help you get familiar with key concepts of the U.S. Web Design Standards and open source development.
---

{% for video in site.data.videos %}

<h3>{{ video.title }}</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/{{ video.id }}" frameborder="0" allowfullscreen></iframe>

{% endfor %}