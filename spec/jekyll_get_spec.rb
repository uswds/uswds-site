require 'jekyll'
require 'tmpdir'
require 'stringio'
require './_plugins/jekyll_get'

RSpec.describe Jekyll_Get::Generator do
  let(:generator) { described_class.new }
  let(:source) { { 'data' => 'releases', 'json' => 'https://api.github.com/repos/uswds/uswds/releases?per_page=1' } }
  let(:site) { Struct.new(:config, :data).new({ 'jekyll_get' => [source] }, {}) }

  around do |example|
    original_token = ENV['GITHUB_ACCESS_TOKEN']
    ENV['GITHUB_ACCESS_TOKEN'] = 'test-token'
    Dir.mktmpdir('jekyll-get-spec') do |directory|
      Dir.chdir(directory) { example.run }
    end
  ensure
    ENV['GITHUB_ACCESS_TOKEN'] = original_token
  end

  def with_response(body = '[]', error: nil)
    original_open = URI::HTTP.instance_method(:open)
    originally_defined = URI::HTTP.instance_methods(false).include?(:open)
    requests = []
    URI::HTTP.define_method(:open) do |headers, &block|
      requests << [to_s, headers]
      raise error if error
      block.call(StringIO.new(body))
    end
    yield requests
  ensure
    if originally_defined
      URI::HTTP.define_method(:open, original_open)
    else
      URI::HTTP.remove_method(:open)
    end
  end

  it 'authenticates GitHub requests without changing existing query parameters' do
    with_response('[{"tag_name":"v3.14.0"}]') do |requests|
      generator.generate(site)
      expect(requests).to eq([[source['json'], { 'Authorization' => 'Bearer test-token' }]])
      expect(site.data['releases']).to eq([{ 'tag_name' => 'v3.14.0' }])
      expect(File.read('.jekyll_get_cache/releases.json')).not_to include('test-token')
    end
  end

  it 'does not send GitHub credentials to other hosts or insecure endpoints' do
    ['https://example.com/data.json', 'https://api.github.com.example.com/data.json', 'http://api.github.com/data.json'].each do |url|
      expect(generator.request_headers(url)).to eq({})
    end
  end

  it 'supports unauthenticated builds when no token is configured' do
    [nil, ''].each do |token|
      ENV['GITHUB_ACCESS_TOKEN'] = token
      expect(generator.request_headers(source['json'])).to eq({})
    end
  end

  it 'reuses valid cached content without a network request' do
    FileUtils.mkdir_p('.jekyll_get_cache')
    File.write('.jekyll_get_cache/releases.json', '[{"tag_name":"v3.14.0"}]')
    with_response(error: RuntimeError.new('network should not be used')) do |requests|
      generator.generate(site)
      expect(requests).to be_empty
      expect(site.data['releases'].first['tag_name']).to eq('v3.14.0')
    end
  end

  it 'still decodes cached repository file contents' do
    source['decode_content'] = true
    FileUtils.mkdir_p('.jekyll_get_cache')
    File.write('.jekyll_get_cache/releases.json', JSON.generate({ 'encoding' => 'base64', 'content' => Base64.strict_encode64('# Installation') }))
    generator.generate(site)
    expect(site.data['releases']['decoded']).to eq('# Installation')
  end

  it 'stops the build on a rate limit error instead of leaving required data empty' do
    with_response(error: OpenURI::HTTPError.new('403 Forbidden', StringIO.new)) do
      expect { generator.generate(site) }.to raise_error(Jekyll::Errors::FatalException, /required 'releases' data/)
      expect(File.exist?('.jekyll_get_cache/releases.json')).to eq(false)
    end
  end

  it 'stops the build if a cached response is malformed' do
    FileUtils.mkdir_p('.jekyll_get_cache')
    File.write('.jekyll_get_cache/releases.json', '{broken')
    expect { generator.generate(site) }.to raise_error(Jekyll::Errors::FatalException, /JSON::ParserError/)
  end

  it 'does not include secret-bearing exception messages in the build error' do
    with_response(error: RuntimeError.new('test-token')) do
      expect { generator.generate(site) }.to raise_error(Jekyll::Errors::FatalException) { |error| expect(error.message).not_to include('test-token') }
    end
  end
end
