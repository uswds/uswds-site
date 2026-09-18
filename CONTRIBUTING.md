# Contributing to U.S. Web Design System Documentation

We’re so glad you’re thinking about contributing to a Technology Transformation Services (TTS) open source project! If you’re unsure where to start, [ask in Discussions Q&A](https://github.com/uswds/uswds/discussions/new?category=q-a). The worst that can happen is we’ll politely ask you to change something. We appreciate all friendly contributions.

By contributing to this repository, you agree to adhere to the [GSA Social Media Policy](https://www.gsa.gov/directives-library/gsa-social-media-policy-2) (Section 10 Engagement). We expect all contributors, both internal and external, to engage respectfully and professionally in all project-related public communications.

We encourage you to read this project’s CONTRIBUTING policy (you are here), its [LICENSE](LICENSE.md), [README](README.md) and its [Workflow](https://github.com/uswds/uswds/wiki/Workflow) process.

For questions about contributing to USWDS, ask in [Discussions Q&A](https://github.com/uswds/uswds/discussions/new?category=q-a) or [email the USWDS team](mailto:uswds@gsa.gov). For background on open source practices, see the [18F Open Source Policy](https://github.com/18f/open-source-policy).

## Choose the right place

Use this repository's [Issues](https://github.com/uswds/uswds-site/issues/new/choose) for documentation corrections, website bugs, and concrete website enhancements. Report bugs in the USWDS library in [uswds/uswds](https://github.com/uswds/uswds/issues/new/choose).

Ask setup, usage, and contribution questions in [Discussions Q&A](https://github.com/uswds/uswds/discussions/new?category=q-a). Explore early suggestions in [Ideas](https://github.com/uswds/uswds/discussions/new?category=ideas), and new components or patterns in [Proposals](https://github.com/uswds/uswds/discussions/new?category=proposals). See the [USWDS contribution routing guide](https://github.com/uswds/uswds/blob/develop/CONTRIBUTING.md#choose-the-right-place) for more detail.

## Issues and labels

To help us get a better understanding of the issue you’re submitting, follow our `ISSUE TEMPLATE` and the guidelines it describes in the template.

Also, here are some definitions around the labels we use to help us organize our issues:

### Category
* Accessibility
* Content Design
* DevOps
* Documentation
* Engineering
* Front end
* User Experience
* Visual Design

### Work Status
* **Abandoned:** Contributor no longer responsive in correspondence.
* **Accepted:** Reviewed and approved by core teammate and included on product roadmap.
* **Backlog:** A build up of work that’s been initially reviewed and correlating labels applied. It needs to be reviewed before moving to “Accepted”.
* **Blocked:** Not able to move forward with work due to conflict.
* **Completed:** Merged in and closed.
* **Help wanted:** Contributors open to claiming and tackling. Description and acceptance criteria have been written.
* **Idea:** New idea or request; team has yet to evaluate.
* **In progress:** Work that has been assigned and is currently being worked on.
* **Need more info:** There is not enough information in order to move forward. A team member may request more information from the submitter or do some research to find the necessary information.
* **On Hold:** Work is currently paused (or not able to move forward) due to conflict.
* **Review needed:** Pull request review needed.
* **Revisions needed:** Requires corrections based on team feedback.

### Priority
* **Blocker:** Needs immediate attention. Prevents the product from working if it were released in that state. (For example: build failing, tests not passing)
* **Critical:** A critical requirement without which it is unacceptable to stakeholders. Impacts the application’s functionality. (For example: feature not working in all browsers, content not accessible to screen readers)
* **Major:** A necessary but deferrable requirement that makes the product less usable but still functional. Does not impact the application’s functionality. (For example: typos)
* **Minor:** A nice feature to have if there are resources, but the product functions well without it. Also known as “could be betters.” (For example: feature requests, cosmetic enhancements)

### Type
* **Bug:** Error, failure, or flaw in the product.
* **Enhancement:** Modification of product to enhance performance or correct faults for items that already exist.
* **Maintenance:** Fixing product defects.
* **Question:** A support inquiry to route to Discussions Q&A. Keep actionable defects and enhancements in Issues.
* **New:** A completely new, discrete unit added to the package.

## Pull requests

Here are a few guidelines to follow when submitting a pull request:

1. Create a GitHub account or sign in to your existing account.
1. Fork this repo into your GitHub account (or just clone it if you’re an 18F team member). Read more about forking a repo here on GitHub:
[https://help.github.com/articles/fork-a-repo/](https://help.github.com/articles/fork-a-repo/)
1. Create a branch from `main` that lightly defines what you’re working on (for example, add-styles).
1. Once you’re ready to submit a pull request, fill out the `PULL REQUEST TEMPLATE` provided.
1. Submit your pull request against the `main` branch.

Have questions or need help with setup? [Ask in Discussions Q&A](https://github.com/uswds/uswds/discussions/new?category=q-a).

## Coding guidelines

### CSS

The purpose of the CSS coding styleguide is to create consistent CSS or preprocessor CSS code across 18F. The styleguide should be treated as a guide — rules can be modified according to project needs.

This project follows the [18F Front End Guide - CSS](https://pages.18f.gov/frontend/#css). Please use this guide for your reference, as well as running `npm run lint` to check for consistency.

### JavaScript

This project follows the [18F Front End Guide - JavaScript](https://pages.18f.gov/frontend/#javascript). Please use this guide for your reference, as well as running `npm run lint` to check for consistency.
