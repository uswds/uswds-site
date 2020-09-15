---
permalink: /about/security/
redirect_from:
- /security/
- /about/security-information/
layout: styleguide
title: Security
category: About
lead: Developing and using USWDS with security in mind
---

{{ site.data.security.decoded
  | markdownify
  | split: '</h1>'
  | last }}
