---
permalink: /getting-started/showcase/all/
layout: styleguide
title: Standards Powered Sites
category: Getting started
lead: Below are a list of website and applications currently using the U.S. Web Design Standards. If your project is currently using the Standards and you do not see it on this list, please feel free to [submit a pull request](https://github.com/18F/web-design-standards/pulls/) or email the core team at [uswebdesignstandards@gsa.gov](mailto:uswebdesignstandards@gsa.gov).
---
##Sites using the U.S. Web Design Standards
{{ site.data.standards-sites.decoded | newline_to_br | split: '<br />' | where_exp: 'line', 'line contains "- ["' | join: '<br />' | markdownify | absolutify_links: site.data.standards-sites.html_url }}
