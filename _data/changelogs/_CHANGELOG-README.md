<!--
  This is a guide for adding data to the "Latest Updates" section.
  There are some important things to remember:
  - Tab spacing matters in .yml files.
    Incorrect spacing can cause errors, so make sure your items line up.
  - All comments here are instructional only and should be deleted if copied into the changelog .yml file.
  - The name of the changelog .yml file must match the `title` declared in the corresponding page's front matter.
-->
title: [Add the page title from the corresponding page. Ex: Accordion, Accessibility.]
type: [Add page type. Standard values: component, documentation, pattern, template, token, utility]
<!-- At this time, we do not have any packages with their own changelog files, so this item can be ignored. -->
changelogURL:[Provide url for the package CHANGELOG.md.]
<!-- Add a list of changelog items in reverse chronological order -->
items:
  <!-- Start new data item -->
  - date: [Add item release date in YYYY-MM-DD format.]
    <!--
    - Add a concise summary of the change.
      This summary can often be pulled from the related release notes or pull request summary.
      If needed, they should be adjusted to fit the following format:
        - Changelog summaries should be written in the past tense, use plain language, and begin with a consistent set of verbs whenever possible:
          Examples: "Fixed", "Added", "Improved", "Optimized", "Updated", "Introduced", "Styled"
    - If a single release item accomplished multiple tasks, break the tasks up into separate data items.
      The goal is to itemize and highlight user benefits and actions required.
    - If a change item necessitates user action, make sure that the related pull request clearly states a summary of the action required.
    -->
    summary: [Add a short, clear sentence that summarizes the change.]
    summaryAdditional: [If needed, add more detail in 1-2 short sentences.]
    isBreaking: [Indicate if additional user action is required to prevent the system from breaking. Standard values: bool]
   <!-- Indicate what type of change it is -->
    affectsAccessibility: [Indicate if the change affects accessibility. Standard values: bool]
    affectsAssets: [Indicate if the change affects non-JavaScript, non-Sass assets. Standard values: bool]
    affectsGuidance: [Indicate if the change affects guidance/documentation. Standard values: bool]
    affectsJavascript: [Indicate if the change affects JavaScript. Standard values: bool]
    affectsMarkup: [Indicate if the change affects markup that a user would need to incorporate. Standard values: bool]
    affectsStyles: [Indicate if the change affects stylesheets or visual appearance. Standard values: bool]
   <!-- Indicate where users can find more information -->
    githubPr: [Add related pull request (PR) number. Ex: 4695]
    githubRepo: [Declare the GitHub repo that houses the related PR. Standard values: uswds, uswds-site]
    versionUswds: [Add related USWDS or package release number. Ex: 3.1.0. Guidance-related updates will likely not have a related release.]
  <!-- End new data item -->


<!-- Empty data template -->
title:
type:
changelogURL:
items:
  - date:
    summary:
    summaryAdditional:
    isBreaking:
    affectsAccessibility:
    affectsAssets:
    affectsGuidance:
    affectsJavascript:
    affectsMarkup:
    affectsStyles:
    githubPr:
    githubRepo:
    versionUswds: