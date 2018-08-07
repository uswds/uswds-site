---
title: Range input
parent: Form controls
maturity: alpha
order: 07
lead: The range slider allows users to choose an approximate number from a range.
---

{% include code/preview.html component="range-input" %}
{% include code/accordion.html component="range-input" %}

<div class="usa-accordion-bordered component-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="range-docs">
    Documentation
  </button>
  <div id="range-docs" aria-hidden="false" class="usa-accordion-content" markdown="1">
#### Accessibility
- As you customize this form template, ensure it continues to follow the [accessibility guidelines for form templates]({{ site.baseurl }}/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/form-controls/).

#### Usability
##### When to use
- When you expect a user will move the slider back and forth to experiment with different inputs.
- When the exact number a user enters isn’t important, but you want to give them an opportunity to pick from a range.

##### When to consider something else 
Use a regular text input if a user needs to enter a precise number.

##### Guidance
- The slider control should change color to indicate it is active when a user selects it.
- Users should be able to drag the slider control or select somewhere along the slider itself to change the value.
- When appropriate, label the ends of the slider with the limits of the range (for example: "0/100", "small/large" or "less expensive/more expensive").
- Set the `min` and `max` attribute of the `input` element to match whatever instructions or labels accompany the slider.
- Set the `step` attribute so the slider is not too granular. Sliders should let users input approximate values. By setting the step to “10” or “20,” you keep users from inadvertently selecting values that are more precise than they intended.

#### References
- [Slider Design: Rules of Thumb](https://www.nngroup.com/articles/gui-slider-controls/)
- [Four Dangerous Navigation Approaches that Can Increase Cognitive Strain - Nielsen Norman Group](http://www.nngroup.com/articles/navigation-cognitive-strain/)
</div>
</div>
