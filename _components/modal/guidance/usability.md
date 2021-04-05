- **Users should trigger modals.** Modals should appear as a result of an action made by the user or (less commonly) inactivity. A modal should not surprise the user, so don’t automatically display them. Some **exceptions** would be to alert the user that their authenticated session in a web application is about to expire due to inactivity or if information needs to be displayed when arriving at a webpage for the first time (like accepting the use of cookies).

- **Choose the modal size that fits your content.** There are two sizes to choose from: default and large. If a modal’s content can’t fit without scrolling, you may need to use the large variant or consider moving the content to its own page.

- **Use clear header and button text.** The header should clearly state what’s happening or what action the modal is prompting the user to do. The button text should indicate what will happen when selected and avoid ambiguity. For example, if a modal asks “Do you want to cancel?” the button options should not be “yes” and “cancel” — instead use something like “Yes, cancel” and “No, don’t cancel.”

- **Limit in-modal interactions.** Avoid using components other than buttons inside the modal. Components such as accordions and form fields often don’t scale well for mobile users and they can easily lose context that they’re viewing a modal. If you need to include links that navigate away from a modal to another webpage, refer to our link guidance about how to handle external links.

- **Consider what happens when the modal is dismissed.** The page underneath should not reload or change to new content.

- **Avoid long content that requires scrolling.** If a lot of content is needed, make sure it’s clear that users have to scroll to see all of it. Lengthy content can be problematic because it pushes buttons out of a user’s initial view, which may cause confusion.

- **Don't roadblock external links with a modal window or dialog box.** Allow users to follow external links without taking a separate action to acknowledge leaving your site. Roadblock notices result in a poor user experience and are redundant with both the link's destination context and your site's policies and notices page (see [Link guidance]({{ site.baseurl }}/components/link)).