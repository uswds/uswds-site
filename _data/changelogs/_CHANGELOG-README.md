<!--
This is a guide for creating a "Latest Updates" section. Some things to remember:
  - Tab spacing matters in .yml files. Incorrect spacing can cause errors.
  - All comments here are instructional only and should be deleted in the changelog .yml file.
-->
<!-- First, declare general page settings -->
changelogURL: [Provide url for the package CHANGELOG.md. Not all pages will have a related CHANGELOG.md file.]
componentPage: [Indicate if the related page is a component, package, or template page. Options: true/false]
title: [Add topic title. This should be only 1-2 words. Ex: "Banner", "Accessibility"]
<!-- Next, add a list of changelog items in reverse chronological order. -->
items:
  - breaking: [Indicate if this is a breaking change. Options: "Yes", "No", "Potential"]
    date: [Add item release date in YYYY-MM-DD format.]
    description:
    <!--
      Add a concise description of the change. This can often be pulled from the related release notes or PR summary.
      Summaries should be written in the past tense and use a consistent set of verbs to begin each statement:
      Examples: "Fixed", "Added", "Improved", "Optimized", "Updated", "Introduced"
    -->
      summary: [Add a short, clear sentence that summarizes the change. This sentence will link to the related PR.]
      additional: [If needed, add more detail in 1-2 sentences.]
    pr: [Add related pull request (PR) number. Ex: 4695]
    release: [Add related USWDS or package release number. Ex: 3.1.0. Guidance pages will not have a related release.]
    repo: [Declare the GitHub repo that has the related PR. Options: uswds/uswds-site]
    typeGuidance: [Declare if this update is related to guidance only and contains no package code updates. Options: true/false]