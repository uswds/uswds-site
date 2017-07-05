require 'json'
require 'open-uri'
require 'base64'

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

    def get_final_url(url)
      if url.start_with? "https://api.github.com/"
        access_token = ENV['GITHUB_ACCESS_TOKEN']
        if access_token
          return "#{url}?access_token=#{access_token}"
        end
      end
      url
    end

    def load_json(site, d)
      name = d['data']
      url = d['json']
      data_source = '.jekyll_get_cache'
      path = "#{data_source}/#{name}.json"
      if not File.exists?(path)
        FileUtils.mkpath File.dirname(path)
        print "Caching #{url} in #{path}...\n"
        data = JSON.load(open(get_final_url(url)))
        open(path, 'wb') do |file|
          file << JSON.pretty_generate(data)
        end
      end
      site.data[name] = JSON.load(open(path))
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
          print "jekyll_get: error fetching #{url}: #{e}\n"
          next
        end
      end
    end
  end
end