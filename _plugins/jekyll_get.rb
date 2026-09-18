require 'json'
require 'open-uri'
require 'base64'
require 'fileutils'

module Jekyll_Get
  class Generator < Jekyll::Generator
    safe true
    priority :highest

    def decode_content(source)
      encoding = source['encoding']
      target_content = source['content']
      if encoding == 'base64'
        source['decoded'] = Base64.decode64(target_content).force_encoding(Encoding::UTF_8)
      else
        source['decoded'] = target_content
      end
    end

    def request_headers(url)
      uri = URI(url)
      access_token = ENV['GITHUB_ACCESS_TOKEN']
      return {} unless uri.scheme == 'https' && uri.host == 'api.github.com'
      return {} if access_token.nil? || access_token.empty?

      { 'Authorization' => "Bearer #{access_token}" }
    end

    def load_json(site, d)
      name = d['data']
      url = d['json']
      data_source = '.jekyll_get_cache'
      path = "#{data_source}/#{name}.json"
      if not File.exist?(path)
        FileUtils.mkpath File.dirname(path)
        print "Caching #{url} in #{path}...\n"
        data = URI.open(url, request_headers(url)) { |response| JSON.parse(response.read) }
        File.open(path, 'wb') do |file|
          file << JSON.pretty_generate(data)
        end
      end
      site.data[name] = JSON.parse(File.read(path))
      if d['decode_content']
        decode_content site.data[name]
      end
    end

    def generate(site)
      config = site.config['jekyll_get']
      if !config
        return
      end
      if !config.kind_of?(Array)
        config = [config]
      end
      config.each do |d|
        url = d['json']
        begin
          load_json(site, d)
        rescue => e
          raise Jekyll::Errors::FatalException,
            "jekyll_get: could not load required '#{d['data']}' data from #{url} (#{e.class}). " \
            "Check GitHub API access and the matching .jekyll_get_cache file before rebuilding."
        end
      end
    end
  end
end
