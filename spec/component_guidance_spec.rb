RSpec.describe 'component guidance content' do
  GUIDANCE_FILES = Dir.glob('./_components/*/guidance/*.md').sort.freeze

  # Accessibility and usability guidance renders as scannable bullet lists;
  # each bullet is expected to lead with a bolded summary phrase. Files listed
  # here predate the convention — don't add new ones.
  BOLD_LEAD_EXCEPTIONS = ['./_components/sidenav/guidance/accessibility.md'].freeze

  it 'finds guidance files to check' do
    expect(GUIDANCE_FILES).not_to be_empty
  end

  GUIDANCE_FILES.each do |path|
    describe path do
      let(:lines) { File.readlines(path) }

      # Empty guidance files are valid placeholders, so no emptiness check.
      it 'has balanced bold markers on every line' do
        lines.each_with_index do |line, index|
          expect(line.scan('**').size).to be_even,
            "#{path}:#{index + 1} has an unclosed ** bold marker"
        end
      end
    end
  end

  (Dir.glob('./_components/*/guidance/{accessibility,usability}.md').sort - BOLD_LEAD_EXCEPTIONS).each do |path|
    it "#{path} starts each top-level bullet with a bolded lead phrase" do
      File.readlines(path).each_with_index do |line, index|
        next unless line.start_with?('- ')

        expect(line).to start_with('- **'),
          "#{path}:#{index + 1} bullet is missing its bolded lead phrase"
      end
    end
  end

  describe 'table caption guidance' do
    let(:content) { File.read('./_components/table/guidance/accessibility.md') }

    # https://github.com/uswds/uswds-site/issues/3100 — approved copy asks
    # tables to use a caption as their title in almost all cases and to style
    # it distinctly, rather than only mentioning captions for attribution.
    it 'tells authors to use a caption to describe the purpose of the table' do
      expect(content).to include('**Use a caption to describe the purpose of the table.**')
      expect(content).to include('Keep the caption wording short.')
    end

    it 'tells authors to style the caption as a visually distinct title' do
      expect(content).to include('**Ensure sighted users are able to identify the caption as the title of the table.**')
      expect(content).to include('noticeable yet distinct')
    end
  end
end
