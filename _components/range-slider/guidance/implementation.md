- Set the `min` and `max` attribute of the `input` element to correspond to the instructions or labels that accompany the slider.

#### Label the limits of a range

This example places visible endpoint labels below the slider and describes the range in a hint associated with the input. Use explicit `min`, `max`, and `step` values. The endpoint labels are hidden from assistive technology because the same information is available from the native range input and its hint.

```html
<form class="usa-form">
  <label class="usa-label" for="range-limits">Satisfaction</label>
  <span class="usa-hint" id="range-limits-hint">
    Choose a value from 0 (not satisfied) to 100 (very satisfied).
  </span>
  <input
    class="usa-range"
    id="range-limits"
    type="range"
    min="0"
    max="100"
    step="10"
    value="50"
    aria-describedby="range-limits-hint"
  />
  <div class="display-flex flex-justify" aria-hidden="true">
    <span>0</span>
    <span>100</span>
  </div>
</form>
```

Keep the visible labels, hint, and numeric limits consistent. For a scale described with words, explain what the endpoints mean in the hint. Test the wording with the people who will use it.

#### Understand the enhanced markup

USWDS JavaScript wraps the input in `.usa-range__wrapper` and adds an `aria-hidden="true"` `.usa-range__value` element for the visible current value. It also sets `aria-valuetext` from the current value and maximum, using the optional properties below. For example, a value of `50` and maximum of `100` produce `50 of 100`. The value and text update when the input's `change` event fires.

Use the original input markup when copying an example. Do not copy the generated wrapper or value display, or add a second `role="slider"` to the native range input. Verify keyboard operation and announcements in your implementation, including any custom scale or unit.

#### Range slider initialization properties
{% include settings-table-flex.html
  content=page.implementation.initProps
  cols="flex-2, flex-3, flex-1"
  section="initialization properties"
%}
