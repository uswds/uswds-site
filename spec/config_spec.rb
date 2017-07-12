require 'yaml'
require 'json'

RSpec.describe "Configuration" do
  it '_config.yml version matches USWDS version in package.json' do
    site = YAML.load(File.read('_config.yml'))
    package = JSON.load(File.read('package.json'))
    expect(site['version']).to eq(package['dependencies']['uswds'])
  end
end
