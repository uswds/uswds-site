const COPY_BUTTONS = document.querySelectorAll(".usa-accordion__copy-button");

COPY_BUTTONS.forEach(button => {
  button.addEventListener("click", () => {
    // Set success state
    button.classList.add("usa-accordion__copy-button--success");
    button.textContent = "Copied!";

    // After timeout, reset to default state
    setTimeout(() => {
      button.classList.remove("usa-accordion__copy-button--success");
      button.textContent = "Copy";
    }, 3000);

    // Select section code and copy to clipboard
    const CONTENT =  button.parentNode;
    const CODE = CONTENT.querySelector("code");
    return navigator.clipboard.writeText(CODE.textContent);
  });
});

