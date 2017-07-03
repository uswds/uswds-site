require 'json'
require 'hash-joiner'
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

    def generate(site)
      config = site.config['jekyll_get']
      if !config
        return
      end
      if !config.kind_of?(Array)
        config = [config]
      end
      config.each do |d|
        name_of_target = d['data']
        url = d['json']
        begin
          target = site.data[name_of_target]
          source = JSON.load(open(get_final_url(url)))
          if target
            HashJoiner.deep_merge target, source
          else
            site.data[name_of_target] = source
          end
          if d['decode_content']
            decode_content site.data[name_of_target]
          end
          if d['cache']
            data_source = (site.config['data_source'] || '_data')
            path = "#{data_source}/#{name_of_target}.json"
            open(path, 'wb') do |file|
              file << JSON.generate(site.data[name_of_target])
            end
          end
        rescue => e
          print "jekyll_get: error fetching #{url}: #{e}\n"
          next
        end
      end
    end
  end
end