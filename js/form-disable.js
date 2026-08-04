// Prevent form submission in component preview examples
var previewForms = document.querySelectorAll(".site-component-preview form");
previewForms.forEach(function (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    return false;
  });
});
