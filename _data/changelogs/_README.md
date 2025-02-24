# Creating changelogs

## Available data keys
| Key                  | Description                                                | Optional | Value type | Standard values                                             | Displayed |
| :------------------- | :--------------------------------------------------------- | -------- | ---------- | ----------------------------------------------------------- | --------- |
| title                | Page title                                                 | yes      | string     | N/A                                                         | No        |
| type                 | Identify page type                                         | no       | string     | component, documentation, pattern, template, token, utility | No        |
| changelogURL         | url for CHANGELOG.MD                                       | yes      | string     | N/A                                                         | yes       |
| date                 | Merge date (YYYY-MM-DD). Use `NNNN-NN-NN` for placeholder. | no       | date       | N/A                                                         | yes       |
| summary              | Short description of change                                | no       | string     | N/A                                                         | yes       |
| summaryAdditional    | Additional description                                     | yes      | string     | N/A                                                         | yes       |
| isBreaking           | Breaking change                                            | no       | boolean    | true, false                                                 | yes       |
| isAddition           | Added page                                                 | no       | boolean    | true, false                                                 | yes       |
| isRemoval            | Deleted page                                               | no       | boolean    | true, false                                                 | yes       |
| affectsAccessibility | Change affects accessibility                               | yes      | boolean    | true, false                                                 | yes       |
| affectsMarkup        | Change affects component markup                            | yes      | boolean    | true, false                                                 | yes       |
| affectsJavascript    | Change affects component JS                                | yes      | boolean    | true, false                                                 | yes       |
| affectsStyles        | Change affects component styles, appearance, or settings   | yes      | boolean    | true, false                                                 | yes       |
| affectsContent       | Change affects content in the component itself             | yes      | boolean    | true, false                                                 | yes       |
| affectsPageContent   | Change affects page content                                | yes      | boolean    | true, false                                                 | yes       |
| affectsGuidance      | Change affects component guidance                          | yes      | boolean    | true, false                                                 | yes       |
| affectsAssets        | Change affects assets related to a component, like images  | yes      | boolean    | true, false                                                 | yes       |
| affectsSettings      | Change affects settings                                    | yes      | boolean    | true, false                                                 | yes       |
| affectsLinks         | Change affects links                                       | yes      | boolean    | true, false                                                 | yes       |
| githubPr             | Pull request number                                        | no       | number     | N/A                                                         | yes       |
| githubRepo           | Pull request repo name                                     | no       | string     | uswds, uswds-site                                           | yes       |
| versionUswds         | USWDS Version Number                                       | no       | number     | N/A                                                         | yes       |

## Using .yml files
 - Tab spacing matters. Incorrect spacing can cause errors, so make sure your items line up.
 - The name of the changelog .yml file must match either:
 - the `title` declared in the corresponding page's front matter OR
 - the `changelog.key` that can be added to the corresponding page's front matter (Instructions for adding this key are outlined in Step 3 of [Creating a new changelog file](#creating-a-new-changelog-file)).

## Creating data items
 - If a single release item accomplished multiple tasks, break the tasks up into separate data items. The goal is to itemize and highlight user benefits and actions required.
 - If a change item requires user action, make sure that the related pull request clearly states a summary of the action required.

## Writing a good summary
 - Changelog summaries should be written in the past tense, use plain language, and begin with a consistent set of verbs whenever possible:
 - Examples: "Fixed", "Added", "Improved", "Optimized", "Updated", "Introduced", "Styled"
 - Do not use pronouns like "you" or conversational time indicators like "now,".
 - Often, a summary can be pulled from the related release notes or pull request. If needed, these summaries should be adjusted to fit the changelog format.

## Creating a new changelog file
### Step 1
Create a new .yml file in the _data/changelogs directory and name it using the appropriate prefix. Then, copy the following template into the file. Fill it in with content according to the guides above.

```yaml
title:
type:
changelogURL:
items:
  - date: NNNN-NN-NN
    summary:
    summaryAdditional:
    isBreaking:
    isAddition:
    isDeletion:
    affectsAccessibility:
    affectsAssets:
    affectsGuidance:
    affectsJavascript:
    affectsLinks:
    affectsMarkup:
    affectsStyles:
    affectsPageContent:
    githubPr:
    githubRepo:
    versionUswds:
```

### Step 2:
Add a link to "Latest updates" section on the related page by copying the following code into the front matter of the related page's markdown (.md) file.

```markdown
<!-- only add `subnav` line if it doesn't already exist in the front matter. -->
subnav:
- text: Latest updates
  href: '#changelog'
```

### Step 3 (Optional):
Add a custom changelog key to match the corresponding changelog `.yml` file name. Then, copy the following code into the front matter of the related page's markdown (.md) file.

```markdown
changelog:
  key:
```
