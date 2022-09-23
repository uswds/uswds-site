- **Don’t visually hide alert messages and then make them visible when they are needed.** Users of older assistive technologies may still be able to perceive hidden alert messages. Fully remove alert messages when they’re not needed.
- **Include a descriptive ARIA label.** Add an `aria-label` or `aria-labelledby` attribute to the `.usa-site-alert` element to ensure that your site alert appears in the landmarks menu. A well-written label can help assistive technology users easily find and understand the top-level information of your site alert.
- **Add an ARIA role to dynamically-updated site alerts.** For important, time-sensitive site alerts that will receive new content mid-session, for example if your site pushes out an updated emergency alert, add an ARIA `role` attribute that will notify users of changes. To do this, choose the appropriate `role` from the [ARIA roles table](#site-alert-aria-roles) and add it to the `.usa-site-alert` element.

{% assign col1Title = 'Attribute' %}
{% assign col2Title = 'Use Case' %}

#### Site alert ARIA roles

<table class="usa-table--borderless site-table-responsive site-table-simple margin-top-2">
  <thead>
      <tr>
        <th scope="col">{{ col1Title }}</th>
        <th scope="col">{{ col2Title }}</th>
      </tr>
    </thead>
    <tbody class="font-lang-3xs">
      <tr>
        <td data-title="{{ col1Title }}">
          <code>role="alert"</code>
        </td>
        <td data-title="{{ col2Title }}">
          Important messages that demand the user's immediate attention. Use this role sparingly because it interrupts the user's workflow.
        </td>
      </tr>
      <tr>
        <td data-title="{{ col1Title }}">
          <code>role="status"</code>
        </td>
        <td data-title="{{ col2Title }}">
          Messages that provide advisory information but do not have the same urgency as alerts.
        </td>
      </tr>
    </tbody>
</table>

{: .font-lang-3xs }
Reference: [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#alert)

