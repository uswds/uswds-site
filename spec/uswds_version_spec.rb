require './_plugins/uswds_version'

include USWDSVersion

RSpec.describe USWDSVersion do
  describe 'make_version_nice' do
    it 'returns its argument in most cases' do
      expect(make_version_nice('blarg')).to eq('blarg')
    end

    it 'supports the github: protocol' do
      expect(make_version_nice('github:uswds/uswds#foo')).to \
        eq('foo')
    end

    it 'gets the commit-ish if based on official repo' do
      expect(make_version_nice('uswds/uswds#foo')).to eq('foo')
    end

    it 'removes the "v" in a version tag if needed' do
      expect(make_version_nice('uswds/uswds#v1.2.3')).to \
        eq('1.2.3')
    end
  end
end
