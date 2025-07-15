---
title: Contribute to USWDS
permalink: /about/contribute/
redirect_from:
- /contribute
layout: styleguide
category: About
lead: Your contribution helps make the design system better for the next team that uses it.
subnav:
- text: Latest updates
  href: '#changelog'
changelog:
  key: about-contribute
---
## Get started with your contribution

Whether it’s submitting a bug, requesting an enhancement, or proposing a new component, we welcome your ideas on how to improve the design system.

Before submitting a contribution, [create a GitHub account](https://github.com/join) or [sign in to your existing account](https://github.com/login).

If you’ve got questions, [reach out to us](mailto:{{ site.uswds_email }}).
We’ll help you through the process, even if you don’t have a technical background in web development.

## Suggest a new component

Anyone can suggest a new U.S. Web Design System (USWDS) component.
If you have a new component idea, get a conversation started with a [GitHub discussion](https://github.com/uswds/uswds/discussions/categories/component-proposals).
The USWDS team uses the information from these new component discussions to create formal component proposals.

1. First, review the component proposals category in GitHub discussions to see if anyone has already suggested the component.
  If the component has been suggested, you can share ideas and add information or context to the discussion, or just express your interest.
1. If a discussion doesn’t exist, [create a new component discussion](https://github.com/uswds/uswds/discussions/new?category=component-proposals).
  This discussion is the place to discuss the merits of the new component, in collaboration with the community and the USWDS team.
  What makes a good case for a USWDS component? We've outlined the criteria in our [USWDS proposal template](https://github.com/uswds/uswds-proposals/blob/main/proposals/_proposal-template.md).
1. Use the [uswds-public Slack channel](https://gsa-tts.slack.com/archives/C3F14AHSQ) or reach out to peers to get feedback and support.
1. If the discussion tends toward support for including the component in the design system, the USWDS core team collects this information to create a formal component proposal.
1. The USWDS team will share the proposal on the discussion thread.
  When it's complete, there'll be a  45-day comment period where the community has an opportunity to provide feedback on the proposal.
1. Finally, the USWDS core team will evaluate the proposal and update you and the community about the outcome with comments in the GitHub discussion.

## Propose a feature request or enhancement

Have an idea for something other than a new component? We want to hear about it. Here are the steps to submit a feature request or enhancement.
If you want to see other contributions before submitting your own, check out <a href="https://github.com/uswds/uswds/issues?q=is%3Aissue%20label%3A%22Good%20First%20Issue%22" data-proofer-ignore>some good first issues</a> from other community members.

1. Check our [feature requests backlog](https://github.com/uswds/uswds/issues?q=is%3Aissue+is%3Aopen+label%3A%22Type%3A+Feature+Request%22).
    If your idea has already been suggested, upvote that feature request with a thumbs up emoji.
    Comment on the issue to let us know why you need it and share supporting information. Comments and upvotes help us prioritize feature requests.

    If you want to find other feature requests open for upvoting, check out our [“Voting open” feature requests](https://github.com/uswds/uswds/issues?q=is%3Aissue+is%3Aopen+label%3A%22Status%3A+Voting+Open+%F0%9F%91%8D%22+sort%3Areactions-%2B1-desc) (sorted by those with the most upvotes).
1. If your idea is not in the [current issues backlog](https://github.com/uswds/uswds/issues?q=is%3Aissue+is%3Aopen+label%3A%22Type%3A+Feature+Request%22), submit a [feature request](https://github.com/uswds/uswds/issues/new?assignees=&labels=Type%3A+Feature+Request&projects=&template=feature_request.yaml&title=USWDS+-+Feature%3A+%5BYOUR+TITLE%5D).
    A USWDS core team member may reach out to you if we need clarification.
1. You may attach a pull request to your issue, but it isn’t required.

## Report bugs

If something isn’t working the way it’s supposed to, here’s how you can let us know.
Our list of <a href="https://github.com/uswds/uswds/issues?q=is%3Aissue%20label%3A%22Good%20First%20Issue%22" data-proofer-ignore>good first issues from the community</a> might help if you’re new to GitHub.

1. Check our [current bugs backlog](https://github.com/uswds/uswds/issues?q=is%3Aissue+is%3Aopen+label%3A%22Type%3A+Bug%22+) to see if your bug has already been reported.
1. If your bug has already been reported, leave a comment in the original issue and provide any additional context.
1. Document the steps we can take to reproduce the bug. If you can, take screen shots to capture specific details about the bug.
1. Submit a [bug report](https://github.com/uswds/uswds/issues/new?assignees=&labels=Type%3A+Bug%2CNeeds%3A+Confirmation&projects=&template=bug_report.yaml&title=USWDS+-+Bug%3A+%5BYOUR+TITLE%5D).
  A USWDS core team member may reach out to you if we need clarification or help testing solutions. Be sure to check in on your issue to answer any questions we may have about it.

## Submit a pull request

If you want to propose a code change, here are the steps to submit a pull request:

1. First, make sure there is an issue that describes the problem you are solving.
  Search the [open issues backlog](https://github.com/uswds/uswds/issues?q=is%3Aissue+is%3Aopen) to find an existing issue.
  If none exists, create your own [bug report](#report-bugs) or [feature request](#propose-a-feature-request-or-enhancement).
1. Fork this repo into your GitHub account. Read more about [forking a repo on GitHub](https://help.github.com/articles/fork-a-repo/).
1. Create a branch from `develop` with a name that describes what you’re working on (for example, `add-border-styles`).
1. When your code changes are ready for review, [open a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request). Be sure to fill out all the applicable fields in the generated PR description.
1. Link your pull request to the related GitHub issue.
  This important step helps us know which issue this solution fixes.
  Tip: You can link your pull request to the related issue in the body of the pull request description by adding the text “Closes #[issue number]” or “Resolves #[issue number]”.
1. Submit your pull request against the `develop` branch.

If the pull request is accepted, we will schedule the issue and merge the pull request for you.

## Want to contribute something else?
If you’d like to contribute something else that doesn’t fall into any of the above, we’d still love to hear about it.
Just [create an issue](https://github.com/uswds/uswds/issues/new/choose) or [create a discussion](https://github.com/uswds/uswds/discussions/new?category=component-proposals), and we can talk about it.

## How we prioritize bug reports and feature requests
If you’ve submitted a bug or feature request, we’ll triage it based on the following considerations:

1. **Size:** Can we accomplish this in a sprint or will this take longer?
1. **Severity:** What type of functionality is impacted? Is there a workaround?
1. **Priority:** Does this align with our vision and roadmap goals?

**Note:** We prioritize issues that affect accessibility.

These considerations help us decide if and when we can work on the issue. If the issue is accepted, we scheduled them for an upcoming sprint (a two-week work period).

You can stay up to date on the status of your contributions through [GitHub email notifications](https://docs.github.com/en/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications) and the assigned labels on the issue.

## Code of Conduct
USWDS is committed to building a safe, welcoming, harassment-free culture for everyone.
USWDS is a part of the Technology Transformation Services (TTS) within the General Services Administration (GSA) and we expect everyone to follow the GSA TTS Code of Conduct.

We encourage you to read the [LICENSE](https://github.com/uswds/uswds/blob/develop/LICENSE.md) and the [LICENSE’s README](https://github.com/uswds/uswds/blob/develop/README.md).
If you want to read more about our open source policy or have questions, check out the [18F Open Source Policy GitHub repository](https://github.com/18f/open-source-policy) or [send us an email](mailto:{{ site.uswds_email }}).

## Licenses and attribution

### A few parts of this project are not in the public domain

For complete attribution and licensing information for parts of the project that are not in the public domain, see the [LICENSE](https://github.com/uswds/uswds/blob/develop/LICENSE.md).

### The rest of this project is in the public domain

The rest of this project is in the worldwide [public domain](https://github.com/uswds/uswds/blob/develop/LICENSE.md).

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

### Contributions will be released into the public domain

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
