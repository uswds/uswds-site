- **Customize form controls accessibly.** If you customize this component, ensure that it continues to meet the [accessibility requirements that apply to all form controls]({{ site.baseurl }}/components/form).
- **Avoid auto-submission.** Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them.
- **Instructions for navigating are not announced.** By default, instructions for using this component are not announced by screen readers. If you would like screen readers to announce instructions for use, include the following:
```
{
"You can navigate by day using left and right arrows", 
 "Weeks by using up and down arrows", 
 "Months by using page up and page down keys", 
 "Years by using shift plus page up and shift plus page down", 
 "Home and end keys navigate to the beginning and end of a week" 
 }
 ```
