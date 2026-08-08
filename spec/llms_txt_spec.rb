require 'date'
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
  CONFIG_PATH = './_config.yml'.freeze
  SITE_DIR = './_site'.freeze
  BUILT_PATH = "#{SITE_DIR}/llms.txt".freeze
  BUILT_OVERVIEW_PATH = "#{SITE_DIR}/components/overview/index.html".freeze
  BUILT_SITEMAP_PATH = "#{SITE_DIR}/sitemap.xml".freeze
  UTILITIES_GLOB = './_utilities/**/*.{md,html}'.freeze

  SITE_URL = 'https://designsystem.digital.gov'.freeze

  SITE_CONFIG = YAML.safe_load_file(CONFIG_PATH, permitted_classes: [Date, Time], aliases: true).freeze

  # Jekyll publishes `pages/` and the collections declared with `output: true`,
  # and nothing else: a directory such as `_patterns/` is not a collection, so
  # its front matter describes URLs the build never writes. Deriving the list
  # from the config rather than hard-coding it keeps this honest when a
  # collection is added, renamed, or stops being output.
  PUBLISHED_DIRS = (
    ['pages'] + SITE_CONFIG.fetch('collections').select { |_name, options| options['output'] }
                           .keys.map { |name| "_#{name}" }
  ).freeze
  CONTENT_GLOB = "./{#{PUBLISHED_DIRS.join(',')}}/**/*.{md,html,txt}".freeze

  # A handful of pages — the per-component accessibility-tests stubs — are front
  # matter and nothing else, and end at the closing `---`, so the body and the
  # newline before it both have to be optional.
  FRONT_MATTER = /\A---\s*\n(.*?)\n---[ \t]*(?:\n(.*))?\z/m
  # Link targets are written as `{{ site_url }}/path/`, so the pattern has to
  # tolerate the spaces inside a Liquid tag.
  MARKDOWN_LINK = /\[[^\]]+\]\(([^)]+)\)/
  COMPONENT_QUERY = /\{%-?\s*assign\s+uswdsComponents\s*=\s*(.+?)\s*-?%\}/

  def split_front_matter(source, path)
    match = FRONT_MATTER.match(source)
    raise "#{path} has no YAML front matter" if match.nil?

    [YAML.safe_load(match[1], permitted_classes: [Date, Time], aliases: true), match[2].to_s]
  end

  # The front matter of a content file, or nil when the file has none. Only a
  # malformed document is tolerated here; anything else — a missing require, a
  # typo in this file — should fail the suite rather than quietly shrink the
  # set of pages we believe the site publishes.
  def front_matter_of(path)
    source = File.read(path)
    return nil unless source.start_with?('---')

    front_matter, = begin
      split_front_matter(source, path)
    rescue Psych::Exception
      return nil
    end
    front_matter.is_a?(Hash) ? front_matter : nil
  end

  # Permalinks (and the older URLs redirected to them) of every page this site
  # publishes — the set an llms.txt link has to land in to avoid a 404.
  def published_paths
    Dir.glob(CONTENT_GLOB).each_with_object(Set.new) do |path, paths|
      front_matter = front_matter_of(path)
      next if front_matter.nil?

      paths << front_matter['permalink'] if front_matter['permalink']
      Array(front_matter['redirect_from']).each { |redirect| paths << redirect }
    end
  end

  # The body of one `## Heading` section, up to the next heading.
  def section(text, heading)
    text[/^## #{Regexp.escape(heading)}$\n(.*?)(?=^## |\z)/m, 1].to_s
  end

  # Site paths (`/components/alert/`) linked from a rendered llms.txt.
  def site_links_in(text)
    text.scan(/\(#{Regexp.escape(SITE_URL)}([^)]*)\)/).flatten
  end

  # Jekyll writes a permalink ending in a slash as `<path>/index.html`, and one
  # that names a file — `/llms.txt` — as the file itself.
  def written_by_build?(path)
    ["#{SITE_DIR}#{path}index.html", "#{SITE_DIR}#{path}"].any? { |candidate| File.file?(candidate) }
  end

  let(:source) { File.read(SOURCE_PATH) }
  let(:front_matter) { split_front_matter(source, SOURCE_PATH).first }
  let(:body) { split_front_matter(source, SOURCE_PATH).last }
  let(:links) { body.scan(MARKDOWN_LINK).flatten }
  let(:headings) { body.scan(/^## (.+)$/).flatten }

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

  # The convention puts `## Optional` last so an agent short on context can stop
  # reading at the first optional heading and still have everything essential.
  it 'puts the Optional section last' do
    expect(headings.last).to eq('Optional')
    expect(headings.count('Optional')).to eq(1)
  end

  # A heading with nothing under it tells an agent a topic is undocumented.
  it 'gives every section at least one link' do
    empty = headings.reject { |heading| section(body, heading).match?(MARKDOWN_LINK) }
    expect(empty).to be_empty, "llms.txt sections with no links: #{empty.join(', ')}"
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

  # The site config sets no `url:`, so this file carries the domain itself.
  # Pinning it keeps the page and the built-file checks below in agreement.
  it 'builds its links from the production domain' do
    expect(source[/\{%-?\s*assign\s+site_url\s*=\s*"([^"]+)"/, 1]).to eq(SITE_URL)
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
    let(:built_links) { built.scan(MARKDOWN_LINK).flatten }

    it 'renders every Liquid tag' do
      expect(built).not_to include('{%')
      expect(built).not_to include('{{')
    end

    it 'lists the same components as the components overview page' do
      overview = File.read(BUILT_OVERVIEW_PATH)
      overview_urls =
        overview.scan(/class="usa-card__heading[^"]*"><a href="([^"]+)"/).flatten.uniq
      expect(overview_urls).not_to be_empty

      listed = site_links_in(section(built, 'Components'))
      expect(listed).to include('/components/overview/')

      expect(listed - ['/components/overview/']).to match_array(overview_urls)
    end

    it 'gives every component a one-line description' do
      entries = section(built, 'Components').scan(/^- \[.+$/)
      expect(entries.length).to be > 1
      expect(entries.reject { |entry| entry.match?(/\): \S/) }).to be_empty
    end

    # The utility loop skips the overview because the section hand-writes it
    # with a description; without that guard the overview appears twice.
    it 'lists every utility page once, and the overview only once' do
      listed = site_links_in(section(built, 'Utilities'))
      utilities = Dir.glob(UTILITIES_GLOB).filter_map { |path| front_matter_of(path)&.fetch('permalink', nil) }
      expect(utilities).not_to be_empty

      expect(listed.tally.select { |_url, count| count > 1 }.keys).to be_empty
      expect(listed).to match_array(utilities)
    end

    # The source-level link check can only see hand-written paths. This is the
    # one that covers the generated component and utility links, and it is the
    # check that actually proves an agent following this file will not 404.
    it 'links only to paths the build wrote' do
      paths = site_links_in(built).uniq
      expect(paths.length).to be > 50

      missing = paths.reject { |path| written_by_build?(path) }
      expect(missing).to be_empty,
                         "llms.txt links to paths absent from #{SITE_DIR}: #{missing.join(', ')}"
    end

    # A blank path renders as a bare `https://designsystem.digital.gov`, which
    # is what a missing or misspelled permalink looks like after rendering.
    it 'never renders a link to the bare domain' do
      expect(site_links_in(built).reject { |path| path.start_with?('/') }).to be_empty
      expect(built).not_to include('](/')
    end

    it 'lists each link once' do
      duplicates = built_links.tally.select { |_url, count| count > 1 }.keys
      expect(duplicates).to be_empty,
                            "llms.txt repeats links after rendering: #{duplicates.join(', ')}"
    end

    it 'writes every link as an absolute URL' do
      expect(built_links.reject { |url| url.start_with?('https://') }).to be_empty
    end

    # A component lead beginning with `# ` would render a second H1 and split
    # the file into two documents as far as a parser is concerned.
    it 'still opens with a single H1 followed by a blockquote summary' do
      expect(built.scan(/^# /).length).to eq(1)
      expect(built).to match(/\A# .+\n\n> .+/)
    end

    it 'states the release recorded in site config' do
      expect(built).to include("The current USWDS release is #{SITE_CONFIG['uswds_version']}.")
    end

    # pa11y-ci crawls sitemap.xml, and a plain-text file in there fails the
    # accessibility job. jekyll-sitemap leaves non-HTML output alone; this
    # keeps that true if the file ever grows a layout or changes extension.
    it 'stays out of the sitemap' do
      expect(File.read(BUILT_SITEMAP_PATH)).not_to include('llms.txt')
    end

    it 'ends with a single trailing newline' do
      expect(built).to end_with("\n")
      expect(built).not_to end_with("\n\n")
    end
  end
end
