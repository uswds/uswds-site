# Creating checklists

## Available data keys

| Key               | Description                                          | Optional | Value type | Standard values                   | Displayed |
| :---------------- | :--------------------------------------------------- | -------- | ---------- | --------------------------------- | --------- |
| title             | Component name                                       | no       | string     | N/A                               | No        |
| component_status   | WCAG status for entire component                     | no       | string     | pass, fail                        | Yes       |
| summary           | Short description of the test                        | no       | string     | N/A                               | yes       |
| summaryAdditional | Additional description of the test                   | no       | string     | N/A                               | yes       |
| testStatus        | Outcome of the individual test                       | no       | string     | pass, fail, conditional, exception | yes       |
| testType          | Assistive technology                                 | no       | string     | zoom, keyboard, screenReader      | yes       |
| versionTested     | The USWDS version number that was tested             | no       | string     | N/A                               | yes       |
| wcagCriterion     | The number of the WCAG criterion related to the test | no       | string     | N/A                               | yes       |


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
    summaryAdditional:
    testStatus:
    testType: zoom
    versionTested:
    wcagCriterion:
# Keyboard navigation items
  - summary:
    summaryAdditional:
    testStatus:
    testType: keyboard
    versionTested:
    wcagCriterion:
# Screen reader items
  - summary:
    summaryAdditional:
    testStatus:
    testType: screenReader
    versionTested:
    wcagCriterion:
```
4. Fill in the data according to the data table above.
   Create a new data item for each test performed and group the items by the type of assistive technology used in the test.

## Using .yml files

 - Tab spacing matters in yaml files. Incorrect spacing can cause errors, so make sure your items line up.