---
permalink: /utilities/font-size-and-family/
layout: styleguide
type: utility
title: Font size and family
category: Utilities
lead: Set the font size and the font family together.
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
    <p class="grid-col-fill utilities-section-helper">Utilities, values, and variants may be activated and deactivated in <a href="#0" class="text-ink text-no-wrap">advanced settings</a>.</p>
  </div>

  <section class="utility" id="utility-float">
    <section class="utility-title-bar">
      <div class="grid-row flex-align-center">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Font size and family</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">font-size, font-family</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-active"><a href="#0">responsive</a></li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>

    <section class="utility-examples">

      <h4 class="utility-examples-title margin-bottom-2">Style-based size and family utilities</h4>

      <p class="utility-note font-sans-2xs margin-bottom-2 margin-top-0"><strong>Note:</strong> You can modify both the default theme sizes and default typefaces in your project’s <a href="#0">project settings</a>. Use font size values from the <a href="#0">global system type scale palette</a>. Use typefaces from the <a href="#0">system type library</a> or <a href="#0">add new faces manually</a>.</p>

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

      <p class="utility-note font-sans-2xs margin-bottom-2 margin-top-0"><strong>Note:</strong> You can modify these roles, the default theme sizes, and the default typefaces in your project’s <a href="#0">project settings</a>. Use font size values from the <a href="#0">global system type scale palette</a>. Use typefaces from the <a href="#0">system type library</a> or <a href="#0">add new faces manually</a>.</p>

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
</section><!-- utilities -->

{% include utilities/responsive-variants.html %}

{% include utilities/state-variants.html %}

<section class="utilities-section">
  <h2 class="utilities-section-title">Default output</h2>
  <div class="grid-row font-sans-1 text-bold border-bottom padding-bottom-05 margin-top-2 border-base-light">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-6">Output SCSS</div>
    <div class="grid-col-2">Default variable value</div>
  </div>
  <dl class="output-list">

    {% assign utility_base = 'flex' %}
    {% assign utility_modifiers = 'none' | split: ' ,' %}
    {% assign utility_values = page.values.flex %}
    {% assign utility_properties = 'flex' | split: ', ' %}
    {% assign utility_additional_rules = 'none' | split: ', ' %}
    {% include utilities/output-utilities-loop.html %}

  </dl>
</section>

{% include utilities/advanced-settings.html %}
