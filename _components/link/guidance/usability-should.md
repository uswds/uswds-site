- **Use unique, meaningful link text.** Link text should explain the link's purpose and help the user understand the link's destination. Vague and repetitive text like “click here” or “read more” is particularly unhelpful to those using screen-reading software. These users are more likely to focus on link text only. Screen-reading software has a feature to collect all page links into a single list. In these lists, links that aren't unique aren't differentiable.

- **Simplify link placement in body text.** A link has cognitive weight and this affects readability. Reduce the number of links in a single sentence to simplify its message. Consider placing links at the beginning or end of sentences to improve readability.

- **Link directly to the most relevant page.** Avoid links to pages that require further user action to locate the intended information.

- **Indicate nonpublic links that require authentication.** Use text or an indicator like a lock icon to signal any link that is not directly available on the public web. This includes links behind a login or other authentication like a paywall.

    **Example 1:**
    > We've documented our research in the [raw research notes 🔒](javascript:void(0)).

    **Example 2:**
    > We've documented our research in the [raw research notes](javascript:void(0)) (requires login).

- **If you use an external link indicator, use it consistently for all text links.** If your project uses an external link indicator (like an icon), use it for all text links across your site. If users learn to associate an external link with the indicator, they will also expect that text links without an indicator are not external links. Icon- or image-only links like social share buttons or logos do not need the same treatment as text links.

- **Use `rel="noreferrer"` property on external links.** Setting `noreferrer` on links prevents the browser from leaking information about the original web address.

- **Provide text context for external links.** Following a link is a decision. Terse links without context often don't give users enough information to make that decision. Plain, straightforward text can be the best way to communicate to users that a link will take them away from your site. This is useful whether the external link is to a government or a non-government site. When possible, use the content of the link text itself to indicate its destination. In isolation, an external link indicator (like an icon) can be ambiguous. Plain text can help make any link destination more clear.

    **Example 1:**
    > [CDC recommends using sunscreen when you’re outside](https://www.cdc.gov/cancer/skin/basic_info/sun-safety.htm) to reduce your risk of skin damage and skin cancer.

    > To ensure food safety during an emergency, [the Red Cross recommends you do not open the refrigerator or freezer](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/food-safety.html).

    **Example 2:**
    > [Sun safety guidance [cdc.gov]](https://www.cdc.gov/cancer/skin/basic_info/sun-safety.htm).

    > [Food safety during an emergency [redcross.org]](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/food-safety.html)

- **Show file type and size for links to non-HTML content.** When possible, create HTML pages instead of linking to files like PDFs. If you do link to a file, tell users ahead of time if the link may trigger a file download, and show the size and format of that file.

    We recommend including this information at the end of the link, in the format `[FILE_TYPE, SIZE]`. We recommend using the file type rather than a product name. Use uppercase for the file type and a comma for the separator. For file size, use the number of pages in the document or the size in MB or KB if the document is not paginated.

    **Example 1:**
    > GSA published a report, [Transforming the American Digital Experience [PDF, 18 pages]](https://designsystem.digital.gov/files/next/Transforming-the-American-digital-experience.pdf)

    **Example 2:**
    > Download the [Revised 508 Standards Applicability Checklist [DOCX, 2 pages]](https://assets.section508.gov/files/508-standards-applicability-checklist.docx)

    **Example 3:**
    > Download the [USWDS 2.11.2 Design Kit for Sketch [ZIP, 13.3 MB]](https://github.com/uswds/uswds-for-designers/releases/download/v2.4.0/uswds-for-designers-v2.4.0.zip)

- **Identify jump links in body text.** Jump links (or in-page links) send the user to another part of the same page. This behavior can be unexpected in body text links. In these cases, use the link text like "jump to", "above" or "below" to tell users that the destination is elsewhere on the same page.

    **Example 1:**
    > [Jump to video resources](javascript:void(0)) for more information about how to boil water.

    **Example 2:**
    > For more information on how to boil water, see [video resources](javascript:void(0)), below.

- **Write out email and phone links.** For `mailto:` and `tel:` links, write out email addresses and phone numbers so users can read or copy this information without selecting the link.

    **Example:**
    > Email us at [{{ site.uswds_email }}](mailto:{{ site.uswds_email }})

- **Encode email and phone links.** Some browsers don’t automatically display a clickable link for email addresses or phone numbers, so encode email and phone links with `mailto:` and `tel:`. Include the country code in phone numbers to support international users.

    **Example:**

    {:.site-terminal}
    ```html
    <p>Email us at <a href="mailto:program-team@agency.gov">program-team@agency.gov</a> or call us at <a href="tel:1-800-555-1234">1-800-555-1234</a> to request support.</p>
    ```

- **Check with your IT security department regarding email link best practices.** While displaying email addresses and phone numbers provides a better experience for users, it can increase spam for the email recipient. One approach is to use a group email to protect individuals. The email address will remain the same even as staff and organizational structures change. Also consider using a contact form instead of showing email addresses.
