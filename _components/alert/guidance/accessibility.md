- **Don’t visually hide alert messages and then make them visible when they are needed.** Users of older assistive technologies may still be able to perceive the alert messages even if they are not currently applicable.
- **Use the proper ARIA role.** The ARIA `role` attribute can notify assistive technologies of time-sensitive and important messages. To elevate the importance of the alert, choose the appropriate `role` from the [ARIA roles table](#alert-aria-roles) and add it to the `.usa-alert` element.

{% assign col1Title = 'Attribute' %}
{% assign col2Title = 'Use Case' %}
#### Alert ARIA roles

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
          Important messages that demand the user's immediate attention.
          <br/>Example: Error alert
        </td>
      </tr>
      <tr>
        <td data-title="{{ col1Title }}">
          <code>role="status"</code>
        </td>
        <td data-title="{{ col2Title }}">
          Messages that provide advisory information but do not have the same urgency as alerts.
          <br/>Example: Success alert
        </td>
      </tr>
      <tr>
        <td data-title="{{ col1Title }}">
          <code>role="region"</code>
        </td>
        <td data-title="{{ col2Title }}">
          Messages that provide information the user would want to be able to easily find, but are not important enough to interrupt user workflow.
          <br/>Example: Informative or warning alert<br/>
          Note: you must add an appropriate <code>aria-label</code> or <code>aria-labelledby</code> attribute when using this role.
        </td>
      </tr>
    </tbody>
</table>

{: .font-lang-3xs }
Reference: [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#alert)