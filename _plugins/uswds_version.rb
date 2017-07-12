module USWDSVersion
  class Generator < Jekyll::Generator
    def generate(site)
      package = JSON.load(File.read('package.json'))
      site.data['uswds_version'] = package['dependencies']['uswds']
    end
  end
end
