- Some `.gov` websites don't represent the federal level of the U.S. government. These sites should adapt the **An official website of the United States government** and **Official websites use .gov** sections to use more accurate language specific to the site.
- Some `.mil` websites don't belong to an official U.S. Department of Defense organization. These sites should adapt the **Official websites use .mil** section to use more technically accurate language: “A **.mil** website operates under the approval of the U.S. Department of Defense.”
- The banner should directly follow the `skipnav` component.
- We realize this documentation won’t cover all use cases, build environments, or tooling. If you have questions, you can ask USWDS community members in our [GitHub discussions](https://github.com/uswds/uswds/discussions) or <a href="https://designsystem.digital.gov/about/community/#join-the-community-2" data-proofer-ignore>Slack channel</a>, or contact us directly at [uswds@gsa.gov](mailto:uswds@gsa.gov). We’ll be expanding this documentation in the future and your questions and feedback will help us understand what you need to get started with this variant and its implementation.


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


  {:.site-note}
  **Note:** As this is the first Web Component shipping in USWDS, we are still working on the best way to document its usage. We want to hear from users about challenges with adding this component to your projects. Please let us know what works, what doesn't, and what additional documentation might be helpful in this [discussion thread](https://github.com/uswds/uswds/discussions/6477).
