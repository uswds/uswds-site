require 'json'
require 'hash-joiner'
require 'open-uri'
require 'base64'

module Jekyll_Get
  class Generator < Jekyll::Generator
    safe true
    priority :highest

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
        begin
          target = site.data[name_of_target]
          source = JSON.load(open(d['json']))
          if target
            HashJoiner.deep_merge target, source
          else
            site.data[name_of_target] = source
          end
          encoding = site.data[name_of_target]['encoding']
          target_content = site.data[name_of_target]['content']
          if encoding == 'base64'
            site.data[name_of_target]['decoded'] = Base64.decode64(target_content).force_encoding(Encoding::UTF_8)
          else
            site.data[name_of_target]['decoded'] = target_content
          end
          if d['cache']
            data_source = (site.config['data_source'] || '_data')
            path = "#{data_source}/#{name_of_target}.json"
            open(path, 'wb') do |file|
              file << JSON.generate(site.data[name_of_target])
            end
          end
        rescue
          next
        end
      end
    end
  end
end