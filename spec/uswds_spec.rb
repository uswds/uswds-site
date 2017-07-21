require 'liquid'
require './_plugins/uswds'

include USWDS

RSpec.describe USWDS do
  describe 'absolutify_links' do
    it 'replaces relative links with absolute ones' do
      html = 'hello <a href="blah">there</a>'
      expect(absolutify_links(html, "http://boop")).to eq(
        'hello <a href="http://boop/blah">there</a>'
      )
    end

    it 'does not affect links that are already absolute' do
      html = 'hi <a href="http://boink">a</a> <a href="https://boink">b</a>'
      expect(absolutify_links(html, "http://boop")).to eq(html)
    end
  end

  describe 'remove_relative_links' do
    it 'removes relative links, but leaves their inner content behind' do
      html = 'hello <a href="blah">there</a> <a href="flarg"><i>human</i></a>'
      expect(remove_relative_links(html)).to eq('hello there <i>human</i>')
    end

    it 'does not affect links that are already absolute' do
      html = 'hi <a href="http://boink">a</a> <a href="https://boink">b</a>'
      expect(remove_relative_links(html)).to eq(html)
    end
  end
end
