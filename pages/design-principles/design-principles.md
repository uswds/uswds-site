---
title: Design principles
permalink: /design-principles/
layout: styleguide
category: Design principles
lead: USWDS design principles support and reflect the important guidance codified in the [21st Century Integrated Digital Experience Act](https://digital.gov/resources/21st-century-integrated-digital-experience-act/). These design principles are intended to help teams across government align on  common goals and better use the Design System — to be an evaluative lens for design and implementation decisions. Regardless of how you build, these principles should support your project.
redirect_from:
  - /principles/
subnav:
  - text: Start with real user needs
    href: "#start-with-real-user-needs"
  - text: Earn trust
    href: "#earn-trust"
  - text: Embrace accessibility
    href: "#embrace-accessibility"
  - text: Promote continuity
    href: "#promote-continuity"
  - text: Listen
    href: "#listen"
---
{:.border-top-05.border-primary.padding-top-2.margin-bottom-2}

## Start with real user needs

{:.font-lang-7}
**Real user needs should inform product decisions.** Whether your audience includes members of the public or government employees, decision-makers must include real people from the beginning of the design process. Test your team's assumptions and the products and services you build with real people to keep focused on what is most useful and important.

### Key considerations
The following are useful questions to ask your team as you assess users' needs:

- Does your product or service have access to the resources necessary to perform research?
- Who is your primary audience?
- What user needs will this product or service address?
- Do you use personas or other audience-segment analysis techniques to connect your solutions to different segments of your audience?
- How often are you testing with real people?
- Which people will have the most difficulty with the product or service?
- Which research methods have been used, and which methods do you plan to use?
- What are the key findings?
- How and where were are your findings being documented?

### Practical actions
The following are practical actions you can take:

- **Start early.** Early in the project, spend time with current and prospective users to better understand their perspective and the context of the problem.
- **Use a range of methods.** Use a range of qualitative and quantitative research methods (such as [18F Methods](https://methods.18f.gov/)) to determine people’s goals, needs, and behaviors.
- **Use prototypes.** Use [prototypes](https://methods.18f.gov/make/prototyping/) to test your assumptions and solutions with real people, in the field if possible.
- **Share your findings.** Document and share your research findings with team members, managers, and the public whenever practical.
- **Test regularly.** As the product is being built, regularly test it with potential users to ensure it meets people’s needs.

### Further reading

#### Government resources

- [Usability testing with Steve Krug](https://digital.gov/event/2018/06/14/usability-testing-with-steve-krug/) [digital.gov]
- [18F's human-centered design methods](https://methods.18f.gov/) [methods.18f.gov]
- [18F's research guidelines](https://handbook.18f.gov/research-guidelines/) [handbook.18f.gov]
- [Interview checklist](https://guides.18f.gov/ux-guide/interview-checklist/) [methods.18f.gov]
- [Tips for capturing the best data from user interviews](https://18f.gsa.gov/2016/02/09/tips-for-capturing-the-best-data-from-user-interviews/) [18f.gsa.gov]
- [How to address barriers to user-centered design](https://18f.gsa.gov/2019/11/07/barriers-to-governments-adoption-of-user-centered-design-and-how-to-address-them/) [18f.gsa.gov]
- [Three ways to manage research projects remotely](https://18f.gsa.gov/2017/09/27/three-ways-to-manage-research-projects/) [18f.gsa.gov]
- [Driving innovation with design education by the Lab at OPM](https://www.youtube.com/watch?v=DGDCd2ELpok) [youtube.com]
- [The Foundations of Agile, Part I](https://digital.gov/event/2019/11/04/foundations-agile-i/) [digital.gov]
- [The Foundations of Agile, Part II](https://digital.gov/event/2019/11/05/foundations-agile-ii/) [digital.gov]

#### Non-government resources

- [The laws of UX](https://lawsofux.com/) [lawsofux.com]
- [A List Apart: Articles, books, and events for people who make websites](https://alistapart.com/) [alistapart.com]


{:.border-top-05.border-primary.padding-top-2.margin-bottom-2}

## Earn trust

{:.font-lang-7}
**Trust has to be earned every time.** Federal websites and digital services can't assume it. Trust is about understanding and meeting or exceeding expectations, a process that can be established quickly and maintained over continued interactions but is easily damaged. Be reliable, consistent, and honest. Reduce the impact of failure with solid design and engineering. Be a good steward of your audience's data, resources, and time.

### Key considerations

The following are useful questions to ask your team as you strategize to build trust with users:

- Do users understand that this is a government site or service?
- What are the public’s expectations of your product?
- What private or sensitive data do you ask your users to provide?
- What are you doing to keep that data private?
- Does your product use redundancies to minimize the effect of server failure or traffic spikes?
- Does your product use continuous integration testing to prevent unintended regressions?
- Can users undo actions or edit data they've added to the system?
- How often do you check that your service works as intended?
- What components are made available to the public as open source?
- How quickly do you respond to bug reports?
- Is your content written in clear, easy-to-follow plain language?
- Do you provide meaningful access to people with limited English proficiency?

### Practical actions
The following are practical actions you can take:

- **Identify yourself.** Clearly identify your site as a federal government site.
- **Build with modern best practices.** Review the guidance outlined in [Digital Services Playbook](https://playbook.cio.gov/).
- **Review your content.** Review your content at least twice per year to assure information is correct and non-redundant.
- **Use the proper government domain.** Use a [.gov ](https://home.dotgov.gov/) top-level domain and [https](https://https.cio.gov/) with up-to-date certificates.
- **Add the USWDS banner component.** This component shows your site is an official government website and explains the benefits of secure connections.
- **Identify link rot.** Find and fix broken links on your website.
- **Keep communications simple.** Ensure content is easy, personal, and timely.
- **Write for the web.** Expect users to [skim and scan](https://plainlanguage.gov/guidelines/web/).
- **Properly manage data and records.** Reach out to your agency’s [records officer](https://www.archives.gov/records-mgmt/agency) and [privacy official](https://www.fpc.gov/council-members/). Consult with them to ensure you are properly managing data and records (review play #11, [Manage security and privacy through reusable processes](https://playbook.cio.gov/#play11), in the Digital Services Playbook).
- **Understand expectations.** Understand what your audience expects of your service, and validate the success of your service with real users.
- **Publish open code and data.** When appropriate, publish [source code](https://code.gov/) and [datasets](https://www.data.gov/) of projects or components online.
- **Work in the open.** When appropriate, share your development process and progress publicly.

### Further reading

#### Government resources

- [Digital Services Playbook](https://playbook.cio.gov/) [playbook.cio.gov]
- [U.S. Web Design System performance guidelines](https://designsystem.digital.gov/performance/) [designsystem.digital.gov]
- [The HTTPS-only standard](https://https.cio.gov/) [https.cio.gov]
- [.gov domain registration](https://home.dotgov.gov/) [dotgov.gov]
- [Federal plain language guidelines](https://plainlanguage.gov/guidelines/) [plainlanguage.gov]
- [How to design effective communications](https://oes.gsa.gov/assets/abstracts/OES%20Learnings%20on%20Writing%20Better%20Communications%202018.pdf) [PDF; oes.gsa.gov]
- [Best practices for multilingual websites](https://digital.gov/resources/top-10-best-practices-for-multilingual-websites/) [digital.gov]

#### Non-government resources

- [Ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) [nngroup.com]
- [A link is a promise](https://www.nngroup.com/articles/link-promise/) [nngroup.com]
- [Preventing user errors](https://www.nngroup.com/articles/slips/) [nngroup.com]
- [How AirBNB designs for trust](https://www.ted.com/talks/joe_gebbia_how_airbnb_designs_for_trust) [TED.com]
- [Humane by design](https://humanebydesign.com/) [humanebydesign.com]

{:.border-top-05.border-primary.padding-top-2.margin-bottom-2}

## Embrace accessibility

{:.font-lang-7}
**Accessibility affects everybody; build it into every decision.** Legal requirements are a critical starting point for factoring accessibility into your decision-making, but these requirements are only the beginning. Accessibility is about real people who use your services — it's usability for the broadest possible audience regardless of how they engage with your content. Everyone who works on government websites has a role to play in making federal resources accessible and inclusive. Design generously and celebrate accessibility requirements as a set of design constraints that help us create a better product for all users.

### Key considerations
The following are useful questions to ask your team as you account for accessibility requirements and features:
- Can users navigate your site using only a keyboard?
- Can users use a screen reader to access all page content?
- Can users quickly understand the main points of your content?
- Can users easily interpret content associated with graphic elements?
- Can users easily understand and complete key tasks?
- Are you testing your service with a broad range of users?
- Do you know your agency accessibility team?
- Is your site organized such that everyone can navigate it easily?
- Are you using accessibility-testing tools?
- Are your accessibility-testing tools providing accurate results?
- Are you providing content in [languages other than English](https://digital.gov/resources/improving-access-to-services-for-people-with-limited-english-proficiency-e-o-13166/), as appropriate for the audience?

### Practical actions
The following are practical actions you can take:

- **Humanize accessibility.** Seek out examples of the real-life impact of accessible products and services. Try to make accessibility less abstract and more personal.
- **Use agency resources.** Reach out to [your agency's accessibility team](https://www.section508.gov/tools/coordinator-listing), and build a relationship with them.
- **Learn about assistive technology.** Visit the Web Accessibility Initiative website to get familiar with the basic ways people use assistive technology and [how people with disabilities use the web](https://www.w3.org/WAI/people-use-web/).
- **Follow existing standards.** Conform to the [Revised 508 Standards](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh) and [W3C WCAG 2.0](https://www.w3.org/TR/WCAG20/).
- **Work from existing resources.** Consult [Section508.gov](https://www.section508.gov/), [Accessibility for Teams](https://accessibility.digital.gov/), and the [18F Accessibility Guide](https://accessibility.18f.gov/).
- **Design generously.** Adopt an [inclusive-design](http://inclusivedesignprinciples.org/) mentality as described on the Inclusive Design Principles website.
- **Develop accessible code.** Ensure front-end code is written accessibly and conducts manual and automated testing.
- **Write accessible content.** Ensure content is written in [plain language](https://www.plainlanguage.gov/) and [headings](https://accessibility.18f.gov/headings/), [images](https://accessibility.18f.gov/images/), and [links](https://accessibility.18f.gov/links/) are accurately labeled.
- **Build accessible designs.** Ensure designs are accessible, pages are laid out in a logical order, and content meets color-contrast requirements.
- **Test broadly.** Test with a broad range of users and abilities throughout the design and development process, including manual accessibility testing against the [Trusted Tester and ICT Testing Baseline](https://www.section508.gov/test/trusted-tester).
- **Be responsive.** Remediate accessibility issues when you discover them.
- **Contract for accessibility.** Use the [Accessibility Requirements Tool](https://www.section508.gov/buy/accessibility-requirements-tool) (ART) to incorporate accessibility requirements into your contracts.

### Further reading

#### Government resources

- [The Section 508 accessibility program](https://www.section508.gov/) [section508.gov]
- [Accessibility for Teams guide](https://accessibility.digital.gov/) [accessibility.digital.gov]
- [Find your Section 508 Coordinator](https://www.section508.gov/tools/coordinator-listing) [section508.gov]
- [Section 508 ICT Testing Baseline](https://section508coordinators.github.io/ICTTestingBaseline/) [section508coordinators.github.com ]
- [Learn about writing in plain language](https://www.plainlanguage.gov/) [plainlanguage.gov]
- [Plain language resources](https://www.plainlanguage.gov/resources/) [plainlanguage.gov]
- [18F's accessibility guide](https://accessibility.18f.gov/) [accessibility.18f.gov]
- [Accessibility Requirements Tool (ART) for contracting](https://www.section508.gov/buy/accessibility-requirements-tool) [section508.gov]
- [Understanding universal design](https://www.section508.gov/blog/Universal-Design-What-is-it) [section508.gov]

#### Non-government resources

- [Web accessibility perspectives videos](https://www.w3.org/WAI/perspective-videos/) [w3.org]
- [Inclusive design principles](https://inclusivedesignprinciples.org/) [inclusivedesignprinciples.org]
- [Accessibility fundamentals with Rob Dodson](https://www.youtube.com/watch?v=z8xUCzToff8) [youtube.com]
- [Microsoft's inclusive design manual](https://www.microsoft.com/design/inclusive/) [microsoft.com]
- [Inclusive components by Heydon Pickering](https://inclusive-components.design/) [inclusive-components.design]
- [Humane by design](https://humanebydesign.com/) [humanebydesign.com]


{:.border-top-05.border-primary.padding-top-2.margin-bottom-2}

## Promote continuity

{:.font-lang-7}
**Minimize disruption, and provide a consistent experience throughout services; over time; and across agencies, platforms, and devices.** Consistency is not necessarily conformity. Agencies, sites, and services may have different audiences, missions, and goals — and the way we implement our solutions may differ — but we promote continuity by starting from shared solutions and values. These design principles are one set of shared values, and the design language of the U.S. Web Design System is another. Strive to build user-centered solutions that address the whole experience, not just a user's specific task, but the context of their journey.

### Key considerations
The following are useful questions to ask your team as you work toward a consistent user experience:

- Do you know if your audience understands that your product is a government site or service?
- Do you know if your audience understands the purpose of each page or section?
- Is it always clear what users are expected to do next?
- Does your agency have established style guidance?
- Have you tried and tested shared solutions before developing your own?
- Have you considered your service in the context of customer or user journeys?
- Have you identified your highest-impact customer or user journeys? Within these journeys, have you identified specific opportunities to collect feedback?
- Have you considered your service in the broader context of a service ecosystem?
- Can you reach across agencies and silos to collaborate and share solutions?
- Does your site or service have a consistent experience on any device or browser?
- Do users have equivalent access to your information and services on any device?
- What factors outside the scope of your product or service affect its success?
- What other government products or services are related to the success of your product or service?
- Are you able to coordinate solutions with other projects that share a similar audience?

### Practical actions
The following are practical actions you can take:

- **Identify as a government site.** Clearly and consistently identify as a government site on every page.
- **Use a style guide.** Use a simple and flexible style guide for content and style throughout a product or service. Know if existing guides already exist in your agency before developing something new.
- **Connect related services with a similar style.** Use the style guide consistently for related digital services.
- **Support a wide range of devices and platforms.** Support a wide range of devices for a [mobile-friendly experience](https://digital.gov/resources/mobile/principles/).
- **Test on real devices.** Test your site on the actual mobile devices as often as possible.
- **Move or remove content with care.** Provide proper notice and forwarding when content is moved or removed.
- **Clarify multi-step processes.** Give users clear information about where they are in each step of a process.
- **Support multi-session processes.** Provide users with a way to exit and return later to complete a process.
- **Support re-use of saved data.** Assure that repeat website visitors, who have logged in, can auto-populate forms with saved information.
- **Find a community.** Participate in cross-government communities of practice.

### Further reading

#### Government resources

- [How design systems help us work together](https://digital.gov/event/2018/05/31/this-how-we-work-together-with-brad-frost/) [digital.gov]
- [The U.S. Web Design System](https://designsystem.digital.gov/) [designsystem.digital.gov]
- [The Journey Mapping method](https://methods.18f.gov/decide/journey-mapping/) [methods.18f.gov]
- [Embracing responsive design](https://digital.gov/2013/08/20/embracing-responsive-design/) [digital.gov]
- [Example: USDA's design and brand guidelines](https://www.usda.gov/digital-strategy/design-and-brand) [usda.gov]
- [Example: Centers for Medicare and Medicaid Services design system](https://design.cms.gov/) [design.cms.gov]
- [Federal Front Door research findings](https://labs.usa.gov/) [labs.usa.gov]
- [Sharing Quality Services Cross-Agency Performance goal](https://trumpadministration.archives.performance.gov/CAP/sharing-quality-services/) [performance.gov]
- [Eight Principles of Mobile-Friendliness](https://digital.gov/resources/mobile/principles/) [digital.gov]

#### Non-government resources

- [Journey mapping 101](https://www.nngroup.com/articles/journey-mapping-101/)[nngroup.com]
- [Service design 101](https://www.nngroup.com/articles/service-design-101/) [nngroup.com]
- [Service blueprints: definition](https://www.nngroup.com/articles/service-blueprints-definition/) [nngroup.com]
- [Using a service ecosystem to quickly grasp complexity](https://www.service-design-network.org/community-knowledge/using-a-service-ecosystem-to-quickly-grasp-complexity) [service-design-network.org]
- [Ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) [nngroup.com]
- [Atomic design](http://atomicdesign.bradfrost.com/table-of-contents/) [atomicdesign.bradfrost.com]

{:.border-top-05.border-primary.padding-top-2.margin-bottom-2}

## Listen

{:.font-lang-7}
**Evaluate and improve your product by listening to your audience and learning from what you hear.** Continuous feedback drives continuous improvement. Measure customer experience — how well what you've built is working for your audience — at every stage of a project and as projects grow and mature. Listen to what people say and observe how they interact with your products or services through direct observation or through analytics data.

### Key considerations
The following are useful questions to ask your team to ensure you're listening to your users:

- Does your product or service have access to people with design, development, and research skills?
- What are the key metrics your service uses to measure success?
- How are your success metrics tied to positive customer or user outcomes?
- How have these metrics performed over the life of the service?
- Do you have system monitoring tools and processes in place to identify and respond to issues?
- Which tools are in place to measure user behavior, and how do you use them?
- Do you measure customer satisfaction and take steps to improve satisfaction?
- Do you assess your customer experience maturity and develop action plans to identify focus areas for improvement?
- How are you collecting user feedback for bugs and other product issues?
- Do all members of the project team participate in user interviews and research activities?
- Do you cultivate direct community participation in your project with activities like hackathons?
- How often are you reviewing and addressing feedback and analytics?
- Do you contribute feedback to services your project uses?

### Practical actions
The following are practical actions you can take:

- **Actively collect issues.** Offer users a mechanism to report bugs and issues, and be responsive to these reports.
- **Collect direct feedback.** Actively collect, review, and address feedback about your product or service (such as through surveys or customer email).
- **Analyze analytics data.** Implement both the governmentwide [Digital Analytics Program](https://digital.gov/services/dap/) (DAP) and agency-specific analytics services and analyze the data.
- **Analyze search results.** Include a search function on your site (through [Search.gov](https://search.gov/) or another tool), and analyze the search data.
- **Analyze social media data.** If you use social media platforms, analyze the data from these platforms.
- **Publish metrics.** Publish metrics internally and externally.
- **Coordinate large projects with service design.** Conduct a service design analysis when designing, coordinating, or consolidating large sites or services.
- **Involve the team in research.** Involve all members of a project team in user interviews and research activities to hear directly from real users.
- **Use direct observation.** Use direct observation in your research whenever possible to understand the context of a user's actions.
- **Keep testing.** Test and re-test with real users.
- **Share back.** Contribute feedback and share solutions back to the internal and open source projects you use.

### Further reading

#### Government resources

- [Guide to the Digital Analytics Program (DAP)](https://digital.gov/services/dap/) [digital.gov]
- [Getting started with Search.gov [youtube.com]](https://www.youtube.com/watch?v=p-y9T23ziEg) [search.gov]
- [Office of Evaluation Sciences](https://oes.gsa.gov/) [oes.gsa.gov]
- [Delivering Excellent, Equitable, and Secure Federal Services and Customer Experience](https://www.performance.gov/pma/cx/) [performance.gov]
- [Tips for Starting Your Customer Experience Journey](https://www.performance.gov/cx/blog/tips-for-starting-your-customer-experience-journey/) [performance.gov]
- [OMB Circular A-11 Section 280: Managing Customer Experience and Improving Service Delivery](https://www.performance.gov/cx/assets/files/a11_2021-FY22.pdf) [performance.gov]
- [USDA's guidance on conducting a regular customer experience (or A-11) survey](https://www.usda.gov/digital-strategy/research/plays#research2) [usda.gov]
- [Customer Experience Maturity Self-Assessment](https://www.performance.gov/cx/assets/files/CXMaturitySelfAssessment.pdf) [performance.gov]
- [Customer Experience Action Plan Template](https://www.performance.gov/cx/assets/files/CXActionPlanTemplate.pptx) [performance.gov]
- [Customer Experience Toolkit](https://digital.gov/resources/customer-experience-toolkit/) [digital.gov]
- [Top tasks with Gerry McGovern [youtube.com]](https://www.youtube.com/watch?v=5llJ98UkXYI) [digital.gov]

#### Non-government resources

- [Google Design: Stop Talking, Start Listening](https://medium.com/google-design/stop-talking-start-listening-7a555ec8ebb1) [medium.com]
- [Design is Listening: listening as design strategy](https://www.youtube.com/watch?v=6_mHCOAAEI8) [youtube.com]
