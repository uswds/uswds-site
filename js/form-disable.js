// Prevent form submission in component preview examples
var previewForms = document.querySelectorAll(".site-component-preview form");
previewForms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    return false;
  });
});
