# Creating entries for known issues

## Data fields

| Key                | Description                                                                       | Standard values   |
| :----------------- | :-------------------------------------------------------------------------------- | ----------------- |
| title              | Name of component                                                                 | --                |
| alert_type         | Designate the type of alert that should be shown on the top of the component page | "info", "error"   |
| date               | Date the issue was created (YYYY-MM-DD)                                           | --                |
| summary            | Short description of change                                                       | --                |
| summary_additional | Additional description                                                            | --                |
| issue_repo         | Issue repo name                                                                   | uswds, uswds-site |
| issue_number       | Issue number                                                                      | --                |

## Creating a new known issues file
Create a new .yml file in the `_data/issues` directory. Name it with the component page's slug. For the purposes of this guidance, a slug just means using the page's title and replacing spaces with dashes. For example, `Character count` would have a file named `character-count.yml`.

Then, copy the following template into the file:

```yaml
title:
alert_type: info
items:
- date:
  summary:
  summary_additional:
  issue_repo:
  issue_number:
```

Fill it in with content according to the guides above.

If the name of the YAML file matches the slug of the component page title, the known issues section should automatically appear on the page.

## Sharing known issues across pages
When you need to share known issues data across pages (for example, date picker and date range picker), add the `known_issues_key` data key to the front matter of the page that should ingest another page's known issues data.

Here is an example of sharing date picker data on the date range picker page:

```yaml
# date-range-picker.md
known_issues_key : date-picker
```
