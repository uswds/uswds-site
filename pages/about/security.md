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

{% assign latest_release = site.data.releases | first %}
{{ site.data.security.decoded
  | markdownify
  | split: '</h1>'
  | last }}

### Verify hash

If you have the latest version of USWDS you can verify the authenticity using
this hash:

{{ site.data.hash.decoded | markdownify }}

#### OSX / Linux
Open a new terminal window and type:

```
sha256sum path/to/uswds-zip/uswds-{{ latest_release.name }}
```

#### Windows

If you're on windows open up a powershell window and run:

```
powershell get-filehash -algorithm sha256 .\path\to\uswds-zip\uswds-{{ latest_release.name }}
```
