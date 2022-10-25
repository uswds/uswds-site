<!--
  This is a guide for creating data for a "Latest Updates" section. Some things to remember:
  - Tab spacing matters in .yml files. Incorrect spacing can cause errors.
  - All comments here are instructional only and should be deleted if copied into the changelog .yml file.
  First, declare general page settings -->
pageTitle: [Add page title.]
pageType: [Standard values: Component, Documentation, Pattern, Template, Token, Utility]
isCodePage: [Indicate if the related page is a component page. Standard values: true, false]
changelogURL:[Provide url for the package CHANGELOG.md. Not all pages will have a related CHANGELOG.md file.]
<!-- Next, add a list of changelog items in reverse chronological order. -->
items:
  - date: [Add item release date in YYYY-MM-DD format.]
      <!--
        Add a concise description of the change. This can often be pulled from the related release notes or PR summary.
        Summaries should be written in the past tense and use a consistent set of verbs to begin each statement:
        Examples: "Fixed", "Added", "Improved", "Optimized", "Updated", "Introduced"
      -->
    summary: [Add a short, clear sentence that summarizes the change. This sentence will link to the related PR.]
    moreSummary: [If needed, add more detail in 1-2 sentences.]
    isBreaking: [Indicate if this is a breaking change. Standard values: 'Yes', 'No', 'Potential']
    isCodeUpdate: [Indicate if this update includes code updates. Standard values: true, false]
    pr: [Add related pull request (PR) number. Ex: 4695]
    repo: [Declare the GitHub repo that has the related PR. Standard values: uswds, uswds-site]
    version:[Add related USWDS or package release number. Ex: 3.1.0. Guidance pages will not have a related release.]

<!-- Empty data template -->
pageTitle:
pageType:
changelogURL:
items:
  - date:
    summary:
    moreSummary:
    isBreaking:
    isCodeUpdate:
    pr:
    repo:
    version:
