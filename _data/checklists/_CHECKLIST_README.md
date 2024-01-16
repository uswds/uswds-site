# Creating checklists

## Available data keys

| Key                 | Description                              | Optional | Value type | Standard values                    | Displayed |
| :------------------ | :--------------------------------------- | -------- | ---------- | ---------------------------------- | --------- |
| title               | Component name                           | no       | string     | N/A                                | No        |
| component_status    | WCAG status for entire component         | no       | string     | pass, fail                         | Yes       |
| summary             | Short description of the test            | no       | string     | N/A                                | yes       |
| summary_additional  | Additional description of the test       | no       | string     | N/A                                | yes       |
| test_status         | Outcome of the individual test           | no       | string     | pass, fail, conditional, exception | yes       |
| test_type           | Assistive technology                     | no       | string     | zoom, keyboard, screenReader       | yes       |
| status_details      | Additional details about the status      | yes      | string     | N/A                                | yes       |
| status_details      | Additional details about the status      | yes      | string     | N/A                                | yes       |
| github_issue_number | Related GitHub issue number              | No       | number     | N/A                                | Yes       |
| github_issue_repo   | Related GitHub issue repo                | No       | string     | uswds, uswds-site                  | Yes       |
| version_tested      | The USWDS version number that was tested | no       | string     | N/A                                | yes       |
| wcag_criterion      | The related WCAG criterion number        | no       | string     | N/A                                | yes       |


## Creating a new checklist file

1. Create a new .yml file in the _data/checklists directory.
2. Give it a name that matches the component.name on the related component's checklist markdown file.
3. Copy the following template into the file:
```yaml
title:
component_status:
testItems:
# Zoom/screen magnification items
  - summary:
    summary_additional:
    test_status:
    test_type: zoom
    version_tested:
    wcag_criterion:
# Keyboard navigation items
  - summary:
    summary_additional:
    test_status:
    test_type: keyboard
    version_tested:
    wcag_criterion:
# Screen reader items
  - summary:
    summary_additional:
    test_status:
    test_type: screenReader
    version_tested:
    wcag_criterion:
```
4. Fill in the data according to the data table above.
   Create a new data item for each test performed and group the items by the type of assistive technology used in the test.

## Using .yml files

 - Tab spacing matters in yaml files. Incorrect spacing can cause errors, so make sure your items line up.