- **Don’t visually hide alert messages and then make them visible when they are needed.** Users of older assistive technologies may still be able to perceive the alert messages even if they are not currently applicable.
- **Use the proper ARIA role.** The ARIA `role` attribute can notify assistive technologies of time-sensitive and important messages. To elevate importance, add the appropriate `role` to the `.usa-alert` element, chosen from the following table:

{% assign col1Title = 'Attribute' %}
{% assign col2Title = 'Use Case' %}

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
          Messages that are important enough to include in the landmarks of the page, but do not warrant interrupting the user's workflow.
          <br/>Example: Informative or warning alert
        </td>
      </tr>
    </tbody>
</table>

{: .font-lang-3xs }
Reference: [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#alert)