---
title: Updates
layout: post
permalink: /whats-new/updates/
category: What’s new
---
This is where updates go.

{% for post in site.posts %}
  {% include post.html post=post excerpt=true %}
{% endfor %}
