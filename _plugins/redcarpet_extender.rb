require 'redcarpet'

class RedcarpetExtender < Redcarpet::Render::HTML
  def initialize(opts = {})
    super
    @anchors = []
  end

  # This resolves duplicate header IDs the "numeric" way: if you have the
  # same title twice then a number is appended to the anchor.
  #
  # Taken from https://github.com/vmg/redcarpet/issues/307.
  def header(text, level)
    number = 2

    # https://stackoverflow.com/a/4308399
    anchor = text.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

    while @anchors.include?(anchor)
      if number > 2
        anchor[-1] = number.to_s
      else
        anchor += "-#{number}"
      end

      number += 1
    end

    @anchors << anchor

    %(<h#{level} id="#{anchor}">#{text}</h#{level}>)
  end
end

class Jekyll::Converters::Markdown::RedcarpetExtender < Jekyll::Converters::Markdown::RedcarpetParser
  # This is the exact same code as the superclass method, only
  # we're substituting Redcarpet::Render::HTML for our custom
  # subclass of it. Unfortunately, this means that as the
  # original superclass implementation changes, we'll want to
  # keep this trivial override up-to-date.
  def class_with_proper_highlighter(highlighter)
    Class.new(RedcarpetExtender) do
      case highlighter
      when "pygments"
        include WithPygments
      when "rouge"
        Jekyll::External.require_with_graceful_fail(%w(
          rouge rouge/plugins/redcarpet
        ))

        unless Gem::Version.new(Rouge.version) > Gem::Version.new("1.3.0")
          abort "Please install Rouge 1.3.0 or greater and try running Jekyll again."
        end

        include Rouge::Plugins::Redcarpet
        include CommonMethods
        include WithRouge
      else
        include WithoutHighlighting
      end
    end
  end
end
