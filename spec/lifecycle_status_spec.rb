require 'yaml'

RSpec.describe 'lifecycle status data' do
  let(:components) do
    YAML.load_file('./_data/lifecycle-status.yml')['components']
  end

  # The status page template (pages/ui-components/lifecycle-status.md) only
  # assigns a color class when status_major is one of these values; anything
  # else renders an unstyled cell.
  VALID_STATUS_MAJOR = ['proposal', 'development', 'released', 'deprecated'].freeze

  it 'lists every component with a name, url, and known status_major' do
    components.each do |component|
      expect(component['name']).not_to be_nil
      expect(component['url']).not_to be_nil
      expect(component['status_minor']).not_to be_nil
      expect(VALID_STATUS_MAJOR).to include(component['status_major']),
        "#{component['name']} has unknown status_major #{component['status_major'].inspect}"
    end
  end

  describe 'Input mask' do
    let(:input_mask) do
      components.find { |component| component['name'] == 'Input mask' }
    end

    # https://github.com/uswds/uswds-site/issues/3185 — input mask failed
    # WCAG 2.1 AA, so the status page must say "Use with caution" to match
    # the component page and its accessibility-tests page.
    it 'is marked use with caution' do
      expect(input_mask['status_major']).to eq('released')
      expect(input_mask['status_minor']).to eq('use with caution')
    end
  end
end
