---
title: News and updates
layout: post
permalink: /whats-new/updates/
category: What’s new
subnav:
  type: posts
---
{% capture lead %}
From time to time we post product updates, guidance, and interviews
we've conducted with users of the {{ site.title }}.
{% endcapture %}
{% include lead.html text=lead %}

{% for post in site.posts %}
  {% include post.html post=post excerpt=true %}
{% endfor %}
