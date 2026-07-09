require 'yaml'
require 'uri'

RSpec.describe 'identifier required links' do
  # GSA is discontinuing the redirect from this URL on September 1, 2026.
  # See https://github.com/uswds/uswds-site/issues/3228
  DEPRECATED_GSA_URLS = [
    'https://www.gsa.gov/reference/reports/budget-performance'
  ].freeze

  let(:identifier) { YAML.load_file('_data/identifier.yml') }
  let(:required_links) { identifier['requiredLinks'] }

  it 'links Performance reports to the current GSA budget and performance page' do
    performance = required_links.find { |link| link['label'] == 'Performance reports' }
    expect(performance).not_to be_nil
    expect(performance['href']).to eq('https://www.gsa.gov/about-gsa/newsroom/budget-and-performance')
  end

  it 'does not use any deprecated GSA URL' do
    hrefs = required_links.map { |link| link['href'] }
    expect(hrefs & DEPRECATED_GSA_URLS).to be_empty
  end

  it 'has a non-empty label and href for every required link' do
    required_links.each do |link|
      expect(link['label'].to_s).not_to be_empty, "missing label in #{link.inspect}"
      expect(link['href'].to_s).not_to be_empty, "missing href for #{link['label']}"
    end
  end

  it 'uses valid https URLs for every required link' do
    required_links.each do |link|
      uri = URI.parse(link['href'])
      expect(uri).to be_a(URI::HTTPS), "#{link['label']} is not https: #{link['href']}"
      expect(uri.host).not_to be_nil, "#{link['label']} has no host: #{link['href']}"
    end
  end

  it 'does not reference deprecated GSA URLs in the identifier guidance' do
    guidance = File.read('_components/identifier/guidance/implementation.md')
    DEPRECATED_GSA_URLS.each do |url|
      expect(guidance).not_to include(url)
    end
  end
end
