module USWDS

  # determine whether one page object (a Hash) "contains" another, according to
  # the logic in contains_url(). The URL for each page is either its
  # 'permalink' or its 'url' key.
  def contains_page(top, page, rel=nil)
    def get_url(page)
      page['permalink'] || page['url']
    end
    contains_url(get_url(top), get_url(page), rel)
  end

  # return true if one high-level URL (specifically, a URI) "contains" another:
  #
  # {{ '/foo/' | contains_url: '/foo/bar' %} => true
  # {{ '/foo/bar/' | contains_url: '/foo/' %} => false
  # {{ '/' | contains_url: '/foo/bar' %} => false
  def contains_url(top, url, rel=nil)
    url === top || (
      rel == 'contains' and
        url != '/' and
        top.start_with?(url)
    )
  end

  # Return true if a == b, false otherwise:
  #
  # {% assign x = a | eq: b %}
  #
  # This is much shorter than:
  #
  # {% assign x = false %}
  # {% if a == b %}{% assign x = true %}{% endif %}
  def eq(a, b)
    a == b
  end

  # Resolve a permalink URI into a page or collection document:
  #
  # {{ '/' | resolve_permalink %} => home page
  # {{ '/components/foo/' | resolve_permalink %} => from a collection
  def resolve_permalink(href)
    site = @context.registers[:site]
    page = _resolve_from(href, site.pages)
    if page
      return page
    end
    found = nil
    site.collections.each do |name, collection|
      found = _resolve_from(href, collection.docs)
      break if found
    end
    found
  end

  private def _resolve_from(href, pages)
    pages
      .select { |page| page.permalink == href }
      .first
  end

end

Liquid::Template.register_filter(USWDS)
