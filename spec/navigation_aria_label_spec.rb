RSpec.describe 'navigation landmark labels' do
  TEMPLATE_FILES = Dir.glob('./**/*.{html,md}')
                      .reject { |path| path.match?(%r{\A\./(_site|node_modules|vendor)/}) }
                      .sort.freeze

  # Screen readers announce the navigation role after the label, so a label
  # containing "navigation" on a navigation landmark is read twice
  # ("Primary navigation navigation").
  # https://github.com/uswds/uswds-site/issues/3059
  it 'does not repeat "navigation" in aria-labels on navigation landmarks' do
    offenders = []

    TEMPLATE_FILES.each do |path|
      File.read(path).scan(/<nav(?![\w-])[^>]*|<[a-z-]+\b[^>]*role=["']navigation["'][^>]*/i) do |tag|
        label = tag[/aria-label=["']([^"']*)["']/i, 1]
        offenders << "#{path}: aria-label=\"#{label}\"" if label&.match?(/navigation/i)
      end
    end

    expect(offenders).to be_empty,
      "aria-label repeats the announced navigation role in:\n#{offenders.join("\n")}"
  end
end
