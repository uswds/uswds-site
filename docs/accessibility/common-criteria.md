# Common criteria for component accessibility checklists

Status: Proposed shared authoring reference for [USWDS #6247](https://github.com/uswds/uswds/issues/6247). Review the wording with accessibility maintainers before adopting it in component checklists. This document does not change published component test results.

The [common criteria CSV](common-criteria.csv) provides a repository-owned source that can be imported as a **Common criteria** sheet in the checklist workbook. It includes stable identifiers, WCAG criterion numbers and levels, technology areas, and reusable Given/When/Then wording. Each row describes a focused check, not the complete requirements or exceptions of its associated criterion.

## Use the common criteria

1. Choose rows relevant to the component and the behavior being tested. Read the linked W3C criterion and its exceptions before adapting a row.
2. Replace generic references to the component with its actual name, controls, states, content, and expected behavior. Include all relevant variants and interaction states.
3. Use the `test_type` value to group the result in the [component checklist schema](../../_data/accessibility-tests/_README.md). The technology area identifies the main method, not every method needed to assess the criterion.
4. Record the USWDS version, browser, operating system, assistive technology and version, fixture URL, steps, observed result, and evidence in the test record.
5. Have another tester or reviewer confirm that the instructions are reproducible and the expected result is observable. Resolve differences in wording in this shared source before copying the revision into additional checklists.

Use `summary` for a short statement of the expected behavior. Combine the Given, When, and Then text into `summary_additional` when publishing a component-specific test. Keep the CSV identifier in the working test record so wording changes can be traced back to the shared criterion.

The CSV uses WCAG 2.2 numbering and levels as reference metadata. This does not establish a new conformance target for USWDS or an agency. Passing these selected checks does not demonstrate conformance with every requirement in WCAG. Component-specific checks and testing in complete pages and processes remain necessary.

## Keep conditions separate from results

The shared rows do not contain pass or fail values. Record a result only after performing the specific check. Explain untested environments and limitations in the working test record; do not translate an unavailable assistive technology into a pass or fail.

A test may depend on implementation details, such as author-supplied labels. Describe that condition in the published checklist according to the existing schema. Do not use a conditional result to hide a known failure. Link defects to issues and retain the evidence used to evaluate them.

## Write a Gherkin scenario

Use one observable behavior per scenario. The Given step describes the fixture and starting state, the When step describes the user's action, and the Then step describes the expected result. Keep detailed environment metadata in the test record instead of repeating it in every step.

```gherkin
Feature: Button keyboard focus
  Scenario: A keyboard user can locate the focused button
    Given the default button example is visible on the page
    When I press Tab until the button receives focus
    Then the focused button has a visible focus indicator
```

```gherkin
Feature: Modal keyboard navigation
  Scenario: A keyboard user can leave the open modal
    Given the modal is open and focus is inside it
    When I use the documented keyboard action to close it
    Then the modal closes and focus returns to the expected trigger
```

The modal intentionally keeps focus inside while it is open. A no-trap check verifies that the user can leave through the expected keyboard interaction; it does not require Tab to move behind an open modal.

```gherkin
Feature: Form error identification
  Scenario: A required field has a text error
    Given a required field is empty
    When I submit the form
    Then a text message identifies the field and describes the error
```

These are authoring examples, not executable test definitions or evidence that a component passed.

## Maintain the shared sheet

Treat the repository CSV as the proposed source for common wording. Import it into the workbook without changing identifier values. Submit changes to shared wording through a PR and identify which component checklists reuse it. Keep component-specific results in their own records. A maintainer with access to the existing workbook must import the reviewed CSV; this PR does not modify an external spreadsheet.

Add a row when a recurring behavior needs different setup or expected results. Reuse a row when only the component name changes. Do not combine multiple WCAG criteria in a single row just to shorten the sheet.
