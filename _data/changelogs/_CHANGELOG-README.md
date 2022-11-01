<!--
  This is a guide for creating data for the "Latest Updates" section. Some things to remember:
  - Tab spacing matters in .yml files. Incorrect spacing can cause errors.
  - All comments here are instructional only and should be deleted if copied into the changelog .yml file. -->
title: [Add page title. Ex: Accordion, Accessibility]
type: [Add page type. Standard values: Component, Documentation, Pattern, Template, Token, Utility]
<!-- At this time, we do not have any packages with their own changelog files, so this item can be ignored. -->
changelogURL:[Provide url for the package CHANGELOG.md.]
<!-- Add a list of changelog items in reverse chronological order-->
items:
  <!-- Start new data item -->
  - date: [Add item release date in YYYY-MM-DD format.]
    <!--
    Add a concise summary of the change.
      This summary can often be pulled from the related release notes or PR summary and adjusted to fit the changelog format.
      Changelog summaries should be written in the past tense, use plain language, and begin with a consistent set of verbs whenever possible:
        Examples: "Fixed", "Added", "Improved", "Optimized", "Updated", "Introduced"
    If a single release item accomplished multiple tasks, break the tasks up into separate data items.
        The goal is to itemize and highlight user benefits and actions required.
    If a change item requires user action, make sure that the related PR clearly states a summary of the action required.
    -->
    summary: [Add a short, clear sentence that summarizes the change.]
    summaryAdditional: [If needed, add more detail in 1-2 short sentences.]
    isBreaking: [Indicate if user action is required to prevent the system from breaking. Standard values: true, false]
    isCodeUpdate: [Indicate if this update includes code updates. Standard values: true, false]
    <!-- Indicate where users can find more information -->
    githubPr: [Add related pull request (PR) number. Ex: 4695]
    githubRepo: [Declare the GitHub repo that contains related PR. Standard values: uswds, uswds-site]
    versionUswds: [Add related USWDS or package release number. Ex: 3.1.0. Guidance updates will likely not have a related release.]
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
    isCodeUpdate:
    githubPr:
    githubRepo:
    versionUswds:
