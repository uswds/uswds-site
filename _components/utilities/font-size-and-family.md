---
permalink: /utilities/font-size-and-family/
layout: styleguide
type: utility
title: Font size and family
category: Utilities
lead: Set the font size and the font family together.
subnav:
- text: Font size and family
  href: '#utility-font'
- text: Font family
  href: '#utility-font-family'
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         font
  var:          font
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         font-family
  var:          font-family
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
---

{% assign our_faces = site.data.uswds_tokens.fonts.faces %}
{% assign our_system_scale = site.data.uswds_tokens.typescale.system %}
{% assign our_theme_scale = site.data.uswds_tokens.typescale.theme %}
{% assign font_normal = site.data.uswds_tokens.fonts.meta.normal %}

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="token utilities-property">font-family</span>
    <span class="token utilities-property">font-size</span>
  </div>
</div>

<section class="utilities-section">

  <div class="grid-row flex-align-center margin-bottom-2">
    <h2 class="grid-col-auto utilities-section-title">Examples and usage</h2>
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#advanced-settings" class="text-ink text-no-wrap">advanced settings</a>.</p>
  </div>

  <section class="utility" id="utility-font">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Font size and family</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">font-size, font-family</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-active"><a href="#responsive-variants">responsive</a></li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>

    <section class="utility-examples">

      <h4 class="utility-examples-title margin-bottom-2">Style-based size and family utilities</h4>

      <p class="utility-note font-sans-2xs margin-bottom-2 margin-top-0"><strong>Note:</strong> You can modify both the default theme sizes and default typefaces in your project’s <a href="#0">project settings</a>. Use font size values from the <a href="#0">global system type scale palette</a>. Use typefaces from the <a href="#0">system type library</a>.</p>

      <div class="grid-row flex-align-center margin-bottom-2 padding-bottom-1">
        {% for face in our_faces %}
          {% if face.default %}
            <div class="grid-col-4 text-bold font-sans-1">
              <div class="text-normal line-height-sans-1">{{ face.name }}</div>
              <div class="margin-top-1 font-mono-3xs line-height-mono-1">font-family-{{ face.style }}</div>
            </div>
          {% endif %}
        {% endfor %}
        <div class="grid-col-12">
          <div class="border-top-2px margin-top-1 margin-bottom-2"></div>
        </div>
        {% for size in our_theme_scale %}
          {% assign size_loop = forloop.index %}
          {% assign font_size = 'font-size-' | append: size %}
          <div class="grid-col-12 grid-row text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
          {% for face in our_faces %}
            {% if face.default %}
              <div class="grid-col-4 display-flex flex-column flex-justify">
                <div class="font-{{ face.style }}-{{ size[1].token }} line-height-{{ face.style }}-1 text-gray-90 padding-bottom-105">
                  {% if size_loop < 9 %}
                  Tuscaloosa
                  {% elsif size_loop < 12 %}
                  Utica
                  {% else %}
                  LA
                  {% endif %}
                </div>
                <div>
                  <div class="padding-top-05"><span class="utility-class">.font-{{ face.style }}-{{ size[1].token }}</span></div>
                  {% for scale in our_system_scale %}
                    {% if scale[1].token == size[1].value %}
                      {% assign normal_size = scale[1].value %}
                      {% assign this_normal = font_normal | times: 1000 | divided_by: face.normal | times: 0.001 | times: normal_size | round %}
                    <div class="padding-top-05"><span class="utility-value">~{{ this_normal }}px</span></div>
                    {% endif %}
                  {% endfor %}
                </div>
              </div>
            {% endif %}
          {% endfor %}
          </div>
        {% endfor %}

        {% comment %}
        {% for size in our_system_scale %}
          {% assign size_loop = forloop.index %}
          {% assign font_size = 'font-size-' | append: size %}
          {% assign normal_size = size[1].value %}
          <div class="grid-col-12 grid-row text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
          {% for face in our_faces %}
            {% if face.default %}
              {% assign this_normal = font_normal | times: 1000 | divided_by: face.normal | times: 0.001 | times: normal_size %}
              <div class="grid-col-4 display-flex flex-column flex-justify">
                <div class="font-{{ face.style }}-{{ size[1].token }} line-height-{{ face.style }}-1 text-gray-90 padding-bottom-105">
                  {% if size_loop < 16 %}
                  Tuscaloosa
                  {% elsif size_loop < 20 %}
                  Utica
                  {% else %}
                  LA
                  {% endif %}
                </div>
                <div>
                  {% for theme in our_theme_scale %}
                    {% if theme[1].value == size[1].token %}
                    <div class="padding-top-05"><span class="utility-class">.font-{{ face.style }}-{{ theme[1].token }}</span></div>
                    {% endif %}
                  {% endfor %}
                  <div class="padding-top-05"><span class="utility-class border bg-white">.font-{{ face.style }}-{{ size[1].token }}</span></div>
                  <div class="padding-top-05"><span class="utility-value">{{ this_normal }}px</span></div>
                </div>
              </div>
            {% endif %}
          {% endfor %}
          </div>
        {% endfor %}
        {% endcomment %}
      </div>

      <h4 class="utility-examples-title margin-bottom-2">Role-based size and family utilities</h4>

      <p class="utility-note font-sans-2xs margin-bottom-2 margin-top-0"><strong>Note:</strong> You can modify these roles, the default theme sizes, and the default typefaces in your project’s <a href="#0">project settings</a>. Use font size values from the <a href="#0">global system type scale palette</a>. Use typefaces from the <a href="#0">system type library</a>.</p>

      <div class="grid-row flex-align-center margin-bottom-2 padding-bottom-1">
        {% for face in our_faces %}
          {% if face.default %}
            {% for role in face.role %}
              <div class="grid-col text-bold font-sans-1">
                <div class="text-normal line-height-sans-1">{{ face.name }}</div>
                <div class="margin-top-1 font-mono-3xs line-height-mono-1">font-family-{{ role }}</div>
              </div>
            {% endfor %}
          {% endif %}
        {% endfor %}
        <div class="grid-col-12">
          <div class="border-top-2px margin-top-1 margin-bottom-2"></div>
        </div>
        {% for size in our_theme_scale %}
          {% assign size_loop = forloop.index %}
          {% assign font_size = 'font-size-' | append: size %}
          <div class="grid-col-12 grid-row text-400 padding-bottom-2 margin-bottom-2 border-bottom-1px border-gray-20">
          {% for face in our_faces %}
            {% if face.default %}
              {% for role in face.role %}
                <div class="grid-col display-flex flex-column flex-justify">
                  <div class="font-{{ role }}-{{ size[1].token }} line-height-{{ role }}-1 text-gray-90 padding-bottom-105">
                    {% if size_loop < 9 %}
                    Utica
                    {% else %}
                    LA
                    {% endif %}
                  </div>
                  <div>
                    <div class="padding-top-05"><span class="utility-class">.font-{{ role }}-{{ size[1].token }}</span></div>
                    {% for scale in our_system_scale %}
                      {% if scale[1].token == size[1].value %}
                        {% assign normal_size = scale[1].value %}
                        {% assign this_normal = font_normal | times: 1000 | divided_by: face.normal | times: 0.001 | times: normal_size | round %}
                      <div class="padding-top-05"><span class="utility-value">~{{ this_normal }}px</span></div>
                      {% endif %}
                    {% endfor %}
                  </div>
                </div>
              {% endfor %}
            {% endif %}
          {% endfor %}
          </div>
        {% endfor %}
      </div>

    </section><!-- examples -->
  </section><!-- utility -->

  <section class="utility" id="utility-font-family">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Font family</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">font-family</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>

    <section class="utility-examples">

      <h4 class="utility-examples-title margin-bottom-2">Style-based</h4>
      {% for face in our_faces %}
        {% if face.default %}
          <div class="utility-example-container-condensed">
            <div class="utility-class">.font-family-{{ face.style }}</div>
          </div>
        {% endif %}
      {% endfor %}

      <h4 class="utility-examples-title margin-bottom-2">Role-based</h4>
      {% for face in our_faces %}
        {% if face.default %}
          {% for role in face.role %}
            <div class="utility-example-container-condensed">
              <div class="utility-class">.font-family-{{ role }}</div>
            </div>
          {% endfor %}
        {% endif %}
      {% endfor %}

    </section><!-- examples -->
  </section><!-- utility -->
</section><!-- utilities -->

<section class="utilities-section">
  <h2 class="utilities-section-title">Default output</h2>

  <p class="utility-note font-sans-2xs margin-bottom-0 border-0"><strong>Note:</strong> The <code>font</code> utilities control both font size and font family, but, technically, the utility only outputs the font size as part of its utility rule. The font family is controlled by a separate, related rule in the format <code>[class*='font-{ family }'] { font-family: { family stack } }</code> as shown in the following code:</p>

  <div markdown="1">
  ```css
  [class*='font-mono-'] { font-family: "Roboto Mono Web" ... monospace; }
  [class*='font-sans-'] { font-family: "Source Sans Pro Web" ... sans-serif; }
  [class*='font-serif-'] { font-family: "Merriweather Web" ... serif; }
  [class*='font-alt-'] { font-family: "Source Sans Pro Web" ... sans-serif; }
  [class*='font-heading-'] { font-family: "Merriweather Web" ... serif; }
  [class*='font-ui-'] { font-family: "Source Sans Pro Web" ... sans-serif; }
  [class*='font-body-'] { font-family: "Source Sans Pro Web" ... sans-serif; }
  [class*='font-code-'] { font-family: "Roboto Mono Web" ... monospace; }
  ```
  </div>

  <div class="grid-row font-sans-1 text-bold border-bottom padding-bottom-05 margin-top-3 border-base-light">
    <div class="grid-col-3">Utility</div>
    <div class="grid-col-5">Output SCSS</div>
    <div class="grid-col-4">Default variable value</div>
  </div>
  <dl class="output-list">

    {% for size in our_theme_scale %}
      {% assign font_size = 'font-size-' | append: size %}
      {% for face in our_faces %}
        {% if face.default %}

          <dt class="output-utility grid-col-3">.font-{{ face.style }}-{{ size[1].token }}</dt>

          <dd class="output-css grid-col-5">
            <span>
                <span class="output-rule">font-size: <span class="output-token">font-size('{{ face.style }}', '{{ size[1].token }}')</span></span>
            </span>
          </dd>

          {% for scale in our_system_scale %}
            {% if scale[1].token == size[1].value %}
              {% assign normal_size = scale[1].value %}
              {% assign this_normal = font_normal | times: 1000 | divided_by: face.normal | times: 0.001 | times: normal_size %}
              <dd class="output-variable grid-col-4">{{ this_normal }}px</dd>
            {% endif %}
          {% endfor %}
        {% endif %}
      {% endfor %}
    {% endfor %}

    {% for size in our_theme_scale %}
      {% assign font_size = 'font-size-' | append: size %}
      {% for face in our_faces %}
        {% if face.default %}
          {% for role in face.role %}

            <dt class="output-utility grid-col-3">.font-{{ role }}-{{ size[1].token }}</dt>

            <dd class="output-css grid-col-5">
              <span>
                  <span class="output-rule">font-size: <span class="output-token">font-size('{{ role }}', '{{ size[1].token }}')</span></span>
              </span>
            </dd>

            {% for scale in our_system_scale %}
              {% if scale[1].token == size[1].value %}
                {% assign normal_size = scale[1].value %}
                {% assign this_normal = font_normal | times: 1000 | divided_by: face.normal | times: 0.001 | times: normal_size %}
                <dd class="output-variable grid-col-4">{{ this_normal }}px</dd>
              {% endif %}
            {% endfor %}
          {% endfor %}
        {% endif %}
      {% endfor %}
    {% endfor %}

    {% for face in our_faces %}
      {% if face.default %}
        <dt class="output-utility grid-col-3">.font-family-{{ face.style }}</dt>
        <dd class="output-css grid-col-5">
          <span>
              <span class="output-rule">font-family: <span class="output-token">font-family('{{ face.style }}')</span></span>
          </span>
        </dd>
        <dd class="output-variable grid-col-4">{{ face.stack }}</dd>
      {% endif %}
    {% endfor %}

    {% for face in our_faces %}
      {% if face.default %}
        {% for role in face.role %}
        <dt class="output-utility grid-col-3">.font-family-{{ role }}</dt>
        <dd class="output-css grid-col-5">
          <span>
            <span class="output-rule">font-family: <span class="output-token">font-family('{{ role }}')</span></span>
          </span>
        </dd>
        <dd class="output-variable grid-col-4">{{ face.stack }}</dd>
        {% endfor %}
      {% endif %}
    {% endfor %}

  </dl>
</section>

<section id="utility-mixins" class="padding-top-4">
  <h2 class="margin-y-0">Utility mixins</h2>
  {% include utilities/utility-mixin-intro.html %}

  <div class="grid-row font-sans-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2 margin-top-3">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-4">Mixin</div>
    <div class="grid-col-4">Example</div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.font-<code>family</code>-<code>scale</code></div>
    <div class="grid-col-4">u-font(<code>family</code>, <code>scale</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-font('sans', 'sm')</span>
      <span class="display-block margin-top-1">u-font('heading', 14)</span>
    </div>
  </div>

  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.font-family-<code>family</code></div>
    <div class="grid-col-4">u-font-family(<code>family</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-font-family('sans')</span>
      <span class="display-block margin-top-1">u-font-family('heading')</span>
    </div>
  </div>

  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">size only</div>
    <div class="grid-col-4">u-font-size(<code>family</code>, <code>scale</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-font-size('sans', 'sm')</span>
      <span class="display-block margin-top-1">u-font-size('heading', 14)</span>
    </div>
  </div>

  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">family, size, and line height</div>
    <div class="grid-col-4">typeset(<code>family</code>, <code>scale</code>, <code>line height</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">typeset('sans', 'sm', 4)</span>
      <span class="display-block margin-top-1">typeset('heading', 14, 1)</span>
    </div>
  </div>

  {% include utilities/utility-mixin-using.html %}
</section>

<section id="advanced-settings" class="padding-top-4">
  <h2 class="margin-y-0">Advanced settings</h2>

  {% include utilities/responsive-variants.html %}
  {% include utilities/state-variants.html %}
  {% include utilities/output-control.html %}

  <section class="utilities-section margin-top-6">
    {% include utilities/values-intro.html %}

    <aside class="example border-left-05 border-secondary-light padding-left-105 margin-top-2">
      <h4 class="font-sans-2xs margin-top-0 margin-bottom-05">Example</h4>
<pre class="font-mono-xs margin-0 padding-0 bg-transparent">
$border-color-palettes: (
  $palette-blue-warm-medium-vivid // note: no trailing comma
);
</pre>
    <h4 class="font-sans-2xs margin-top-2 margin-bottom-05">Output</h4>
<pre class=" font-mono-xs margin-0 padding-0 bg-transparent">
.border-blue-warm-40v { border-color: #5E99FF; }
.border-blue-warm-50v { border-color: #2673DF; }
.border-blue-warm-60v { border-color: #0052DE; }
</pre>
    </aside>

    {% include utilities/standard-palettes.html %}
    {% include utilities/typescale-palettes.html %}

  </section>
</section>
