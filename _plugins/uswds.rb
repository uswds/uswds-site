module USWDS

  def contains_url(top, url, rule=nil)
    return url === top || (
      rule == 'contains' and top.start_with?(url)
    )
  end

end

Liquid::Template.register_filter(USWDS)
