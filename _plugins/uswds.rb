require 'uri'

module USWDS

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

  def remove_relative_links(content)
    content.gsub(/\<a href="(?!https?:)([^"]+)"\>(.+?)\<\/a\>/, '\2')
  end

  def absolutify_links(content, base_url)
    content.gsub(/href="(?!https?:)([^"]+)"/){
      absolute = URI.join(base_url, $1)
      "href=\"#{absolute}\""
    }
  end
end

Liquid::Template.register_filter(USWDS)
