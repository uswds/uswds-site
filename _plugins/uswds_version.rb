require 'jekyll'

module USWDSVersion
  def make_version_nice(version)
    # If we're using a particular 'commit-ish' of the official repo,
    # just grab the 'commit-ish' part.
    m = /^18F\/web-design-standards#(.+)/.match(version)
    if m
      version = m[1]

      # If it's e.g. "v1.2.0" change it to just "1.2.0".
      if version.start_with? 'v'
        version = version[1..-1]
      end
    end

    version
  end

  class Generator < Jekyll::Generator
    include USWDSVersion

    def generate(site)
      package = JSON.load(File.read('package.json'))
      version = make_version_nice(package['dependencies']['uswds'])
      site.data['uswds_version'] = version
    end
  end
end
