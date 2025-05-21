- Some `.mil` websites do not belong to an official U.S. Department of Defense organization. These sites should adapt the **Official websites use .mil** section to use more technically accurate language: “A **.mil** website operates under the approval of the U.S. Department of Defense.” This can be set by adding that text to the `domain-text` slot, as demonstrated in the **.mil** example.
- The banner should directly follow the `skipnav` component.
- We realize this documentation won’t cover all use cases, build environment, or tooling. If you have questions, you can ask USWDS community members in our [GitHub discussions](https://github.com/uswds/uswds/discussions) or [Slack channel](https://designsystem.digital.gov/about/community/#join-the-community-2), or contact us directly at [uswds@gsa.gov](mailto:uswds@gsa.gov). We’ll be expanding this documentation in the future and your questions and feedback help us understand what you need to get started with this variant.


<h4>Web Component Settings</h4>

<h5>Attributes</h5>
<table class="usa-table--borderless site-table-responsive site-table-simple">
    <thead>
      <tr>
        <th scope="col" class="flex-6 display-inline-flex">Attribute</th>
        <th scope="col" class="flex-6 display-inline-flex">Description</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      
      <tr>
        <td data-title="Variable" class="flex-6 display-inline-flex flex-align-start">
          <code>
            lang
          </code>
        </td>
        <td data-title="Description" class="flex-6 display-inline-flex flex-align-start">
          <span class="font-lang-3xs">
            <p>The element's language. Defaults to <code>en</code></p>
          </span>
        </td>
      </tr>
      <tr>
        <td data-title="Variable" class="flex-6 display-inline-flex flex-align-start">
          <code>
            label
          </code>
        </td>
        <td data-title="Description" class="flex-6 display-inline-flex flex-align-start">
          <span class="font-lang-3xs">
            <p>The custom aria label users can override.</p>
          </span>
        </td>
      </tr>
      <tr>
        <td data-title="Variable" class="flex-6 display-inline-flex flex-align-start">
          <code>
            tld
          </code>
        </td>
        <td data-title="Description" class="flex-6 display-inline-flex flex-align-start">
          <span class="font-lang-3xs">
            <p>The top level domain for the site. Defaults to <code>.gov</code></p>
          </span>
        </td>
      </tr>
    </tbody>
  </table>

<h5>Slots</h5>
<table class="usa-table--borderless site-table-responsive site-table-simple">
    <thead>
      <tr>
        <th scope="col" class="flex-6 display-inline-flex">Slot</th>
        <th scope="col" class="flex-6 display-inline-flex">Description</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      
      <tr>
        <td data-title="Variable" class="flex-6 display-inline-flex flex-align-start">
          <code>
            banner-text
          </code>
        </td>
        <td data-title="Description" class="flex-6 display-inline-flex flex-align-start">
          <span class="font-lang-3xs">
            <p>The text for official government website text.</p>
          </span>
        </td>
      </tr>
      <tr>
        <td data-title="Variable" class="flex-6 display-inline-flex flex-align-start">
          <code>
            banner-action
          </code>
        </td>
        <td data-title="Description" class="flex-6 display-inline-flex flex-align-start">
          <span class="font-lang-3xs">
            <p>Action text label "Here's how you know."</p>
          </span>
        </td>
      </tr>
      <tr>
        <td data-title="Variable" class="flex-6 display-inline-flex flex-align-start">
          <code>
            domain-heading 
          </code>
        </td>
        <td data-title="Description" class="flex-6 display-inline-flex flex-align-start">
          <span class="font-lang-3xs">
            <p>Heading text for the domain section.</p>
          </span>
        </td>
      </tr>
      <tr>
        <td data-title="Variable" class="flex-6 display-inline-flex flex-align-start">
          <code>
            domain-text
          </code>
        </td>
        <td data-title="Description" class="flex-6 display-inline-flex flex-align-start">
          <span class="font-lang-3xs">
            <p>Body text for domain section.</p>
          </span>
        </td>
      </tr>
      <tr>
        <td data-title="Variable" class="flex-6 display-inline-flex flex-align-start">
          <code>
            https-heading
          </code>
        </td>
        <td data-title="Description" class="flex-6 display-inline-flex flex-align-start">
          <span class="font-lang-3xs">
            <p>Heading for HTTPs section.</p>
          </span>
        </td>
      </tr>
      <tr>
        <td data-title="Variable" class="flex-6 display-inline-flex flex-align-start">
          <code>
            https-text
          </code>
        </td>
        <td data-title="Description" class="flex-6 display-inline-flex flex-align-start">
          <span class="font-lang-3xs">
            <p>Body text for HTTPs section.</p>
          </span>
        </td>
      </tr>
    </tbody>
  </table>

<h5>Custom Properties</h5>
<table class="usa-table--borderless site-table-responsive site-table-simple">
    <thead>
      <tr>
        <th scope="col" class="flex-6 display-inline-flex">Custom Property</th>
        <th scope="col" class="flex-6 display-inline-flex">Description</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      
      <tr>
        <td data-title="Variable" class="flex-6 display-inline-flex flex-align-start">
          <code>
            --theme-banner-text-color
          </code>
        </td>
        <td data-title="Description" class="flex-6 display-inline-flex flex-align-start">
          <span class="font-lang-3xs">
            <p>Sets banner text color.</p>
          </span>
        </td>
      </tr>
      
      <tr>
        <td data-title="Variable" class="flex-6 display-inline-flex flex-align-start">
          <code>
            --theme-banner-background-color
          </code>
        </td>
        <td data-title="Description" class="flex-6 display-inline-flex flex-align-start">
          <span class="font-lang-3xs">
            <p>Sets banner background color.</p>
          </span>
        </td>
      </tr>
      
      <tr>
        <td data-title="Variable" class="flex-6 display-inline-flex flex-align-start">
          <code>
            --theme-banner-font-family
          </code>
        </td>
        <td data-title="Description" class="flex-6 display-inline-flex flex-align-start">
          <span class="font-lang-3xs">
            <p>Sets banner font family</p>
          </span>
        </td>
      </tr>

      <tr>
        <td data-title="Variable" class="flex-6 display-inline-flex flex-align-start">
          <code>
            --theme-banner-link-color
          </code>
        </td>
        <td data-title="Description" class="flex-6 display-inline-flex flex-align-start">
          <span class="font-lang-3xs">
            <p>Sets the default link/button color.</p>
          </span>
        </td>
      </tr>

      <tr>
        <td data-title="Variable" class="flex-6 display-inline-flex flex-align-start">
          <code>
            --theme-banner-link-hover-color
          </code>
        </td>
        <td data-title="Description" class="flex-6 display-inline-flex flex-align-start">
          <span class="font-lang-3xs">
            <p>Sets the default link/banner hover color.</p>
          </span>
        </td>
      </tr>

      <tr>
        <td data-title="Variable" class="flex-6 display-inline-flex flex-align-start">
          <code>
            --theme-banner-chevron-color
          </code>
        </td>
        <td data-title="Description" class="flex-6 display-inline-flex flex-align-start">
          <span class="font-lang-3xs">
            <p>Sets the default chevron color.</p>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
