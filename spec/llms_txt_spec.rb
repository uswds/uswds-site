require 'yaml'
require 'set'

# https://github.com/uswds/uswds-site/issues/3284 — the site publishes an
# llms.txt so AI coding agents can find authoritative USWDS guidance instead of
# scraping HTML or inventing markup.
#
# The llms.txt convention (https://llmstxt.org/) is an H1, a blockquote summary,
# then H2 link lists, with `## Optional` reserved for links an agent may skip.
# These specs hold the file to that shape, keep its component list tied to the
# components overview page, and check that every curated link points at a page
# this repo actually publishes.
RSpec.describe 'llms.txt' do
  SOURCE_PATH = './pages/llms.txt'.freeze
  OVERVIEW_PATH = './pages/ui-components/overview.md'.freeze
  BUILT_PATH = './_site/llms.txt'.freeze
  BUILT_OVERVIEW_PATH = './_site/components/overview/index.html'.freeze

  SITE_URL = 'https://designsystem.digital.gov'.freeze

  # Every page and collection document in this repo declares its own permalink,
  # so the site's published URLs can be gathered without building the site.
  CONTENT_GLOB =
    './{pages,_components,_utilities,_templates,_patterns,_next,_security_updates}/**/*.{md,html,txt}'.freeze

  FRONT_MATTER = /\A---\s*\n(.*?)\n---\s*\n(.*)\z/m
  # Link targets are written as `{{ site_url }}/path/`, so the pattern has to
  # tolerate the spaces inside a Liquid tag.
  MARKDOWN_LINK = /\[[^\]]+\]\(([^)]+)\)/
  COMPONENT_QUERY = /\{%-?\s*assign\s+uswdsComponents\s*=\s*(.+?)\s*-?%\}/

  def split_front_matter(source, path)
    match = FRONT_MATTER.match(source)
    raise "#{path} has no YAML front matter" if match.nil?

    [YAML.safe_load(match[1], permitted_classes: [Date, Time], aliases: true), match[2]]
  end

  # Permalinks (and the older URLs redirected to them) of every page this site
  # publishes — the set an llms.txt link has to land in to avoid a 404.
  def published_paths
    Dir.glob(CONTENT_GLOB).each_with_object(Set.new) do |path, paths|
      source = File.read(path)
      next unless source.start_with?('---')

      front_matter, = begin
        split_front_matter(source, path)
      rescue StandardError
        next
      end
      next unless front_matter.is_a?(Hash)

      paths << front_matter['permalink'] if front_matter['permalink']
      Array(front_matter['redirect_from']).each { |redirect| paths << redirect }
    end
  end

  let(:source) { File.read(SOURCE_PATH) }
  let(:front_matter) { split_front_matter(source, SOURCE_PATH).first }
  let(:body) { split_front_matter(source, SOURCE_PATH).last }
  let(:links) { body.scan(MARKDOWN_LINK).flatten }

  it 'is published at the site root' do
    expect(front_matter['permalink']).to eq('/llms.txt')
  end

  it 'opens with a single H1 followed by a blockquote summary' do
    # Liquid tags and comments run before the content, so compare what is left
    # once they are stripped — the same text an agent reads.
    content = body.gsub(/\{%-?\s*comment\s*-?%\}.*?\{%-?\s*endcomment\s*-?%\}/m, '')
                  .gsub(/\{%.*?%\}/m, '')
                  .sub(/\A\s+/, '')

    expect(content.scan(/^# /).length).to eq(1)
    expect(content).to match(/\A# .+\n\n> .+/)
  end

  it 'keeps an Optional section for links an agent may skip' do
    expect(body).to match(/^## Optional$/)
  end

  it 'draws its component list from the same query as the components overview' do
    overview_query = File.read(OVERVIEW_PATH)[COMPONENT_QUERY, 1]
    expect(overview_query).not_to be_nil,
                                 "#{OVERVIEW_PATH} no longer assigns uswdsComponents"

    expect(source[COMPONENT_QUERY, 1]).to eq(overview_query)
  end

  it 'writes every link as an absolute URL' do
    relative = links.reject { |url| url.start_with?("{{ site_url }}", 'https://') }
    expect(relative).to be_empty
  end

  it 'links only to pages this site publishes' do
    # Generated links end in a Liquid variable rather than a literal path; the
    # built-site checks below cover those.
    site_paths = links.select { |url| url.start_with?("{{ site_url }}") }
                      .map { |url| url.sub("{{ site_url }}", '') }
                      .reject { |path| path.include?('{{') }
    expect(site_paths).not_to be_empty

    missing = site_paths.uniq - published_paths.to_a
    expect(missing).to be_empty,
                       "llms.txt links to pages that do not exist: #{missing.join(', ')}"
  end

  it 'lists each link once' do
    duplicates = links.tally.select { |_url, count| count > 1 }.keys
    expect(duplicates).to be_empty
  end

  # The remaining checks read the generated file. CircleCI builds the site
  # before running rspec, so they run there; locally they need a build first.
  context 'once the site is built' do
    before do
      skip "build the site first: `bundle exec jekyll build`" unless File.exist?(BUILT_PATH)
    end

    let(:built) { File.read(BUILT_PATH) }

    # The body of one `## Heading` section, up to the next heading.
    def section(text, heading)
      text[/^## #{Regexp.escape(heading)}$\n(.*?)(?=^## |\z)/m, 1].to_s
    end

    it 'renders every Liquid tag' do
      expect(built).not_to include('{%')
      expect(built).not_to include('{{')
    end

    it 'lists the same components as the components overview page' do
      overview = File.read(BUILT_OVERVIEW_PATH)
      overview_urls =
        overview.scan(/class="usa-card__heading[^"]*"><a href="([^"]+)"/).flatten.uniq
      expect(overview_urls).not_to be_empty

      listed = section(built, 'Components')
               .scan(/\(#{Regexp.escape(SITE_URL)}([^)]+)\)/).flatten
      expect(listed).to include('/components/overview/')

      expect(listed - ['/components/overview/']).to match_array(overview_urls)
    end

    it 'gives every component a one-line description' do
      entries = section(built, 'Components').scan(/^- \[.+$/)
      expect(entries.length).to be > 1
      expect(entries.reject { |entry| entry.match?(/\): \S/) }).to be_empty
    end
  end
end
