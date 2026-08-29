require 'nokogiri'

# https://github.com/uswds/uswds-site/issues/3289 — the date-of-birth pattern
# include drifted from the usa-memorable-date component. uswds/uswds#6725 gave
# each control its own screen-reader-only hint so that assistive technology
# announces one relevant sentence per field instead of repeating a shared hint
# three times, and the numeric month prefixes ("01 - January") were dropped
# because they were read aloud as meaningless digits.
RSpec.describe '_includes/patterns/date-of-birth.html' do
  let(:fragment) do
    Nokogiri::HTML5.fragment(File.read('./_includes/patterns/date-of-birth.html'))
  end

  let(:fieldset) { fragment.at_css('fieldset.usa-fieldset') }

  # The month select and the day/year inputs, in document order.
  let(:controls) { fieldset.css('.usa-memorable-date select, .usa-memorable-date input') }

  # The hint that sits directly under the legend and describes the group.
  let(:group_hint) { fieldset.xpath('./span[contains(@class, "usa-hint")]').first }

  def hint_for(control)
    fragment.at_css("##{control['aria-describedby']}")
  end

  it 'has a month, day, and year control' do
    expect(controls.map { |c| c['id'] }.length).to eq(3)
  end

  describe 'the group hint under the legend' do
    it 'is hidden from assistive technology' do
      expect(group_hint).not_to be_nil
      expect(group_hint['aria-hidden']).to eq('true'),
        'the group hint must be aria-hidden so screen readers use the per-field hints instead'
    end

    it 'stays visible for sighted users' do
      expect(group_hint['class'].split).not_to include('usa-sr-only')
    end

    it 'is not referenced by any control' do
      described = controls.map { |control| control['aria-describedby'] }
      expect(described).not_to include(group_hint['id']),
        "controls still point at the shared group hint #{group_hint['id'].inspect}"
    end
  end

  describe 'per-field hints' do
    it 'gives every control its own hint' do
      described = controls.map { |control| control['aria-describedby'] }
      expect(described).to all(be_a(String).and(satisfy { |v| !v.strip.empty? }))
      expect(described.uniq.length).to eq(3),
        "each control needs its own hint, got #{described.inspect}"
    end

    it 'points every aria-describedby at an element that exists' do
      controls.each do |control|
        expect(hint_for(control)).not_to be_nil,
          "#{control['id']} is described by #{control['aria-describedby'].inspect}, which is not in the document"
      end
    end

    it 'marks each per-field hint screen-reader-only' do
      controls.each do |control|
        classes = hint_for(control)['class'].to_s.split
        expect(classes).to include('usa-hint', 'usa-sr-only'),
          "hint for #{control['id']} has classes #{classes.inspect}"
      end
    end

    it 'keeps each hint in the same form group as its control' do
      controls.each do |control|
        group = control.ancestors('.usa-form-group').first
        expect(group.at_css("##{control['aria-describedby']}")).not_to be_nil,
          "hint for #{control['id']} is outside its own .usa-form-group"
      end
    end
  end

  describe 'month options' do
    let(:month_labels) do
      fieldset.css('select option').map { |option| option.text.strip }.reject { |t| t.start_with?('-') }
    end

    it 'lists all twelve months' do
      expect(month_labels.length).to eq(12)
    end

    it 'uses name-only labels' do
      numbered = month_labels.select { |label| label.match?(/\A\d/) }
      expect(numbered).to be_empty,
        "month labels must not lead with digits, got #{numbered.inspect}"
    end
  end

  it 'has no duplicate ids' do
    ids = fragment.css('[id]').map { |node| node['id'] }
    expect(ids.uniq.length).to eq(ids.length), "duplicate ids: #{ids.tally.select { |_, n| n > 1 }.keys.inspect}"
  end
end
