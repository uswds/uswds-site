const COPY_BUTTONS = document.querySelectorAll(".usa-accordion__copy-button");

COPY_BUTTONS.forEach(button => {
  button.addEventListener("click", () => {
    // Set success state
    button.classList.add("usa-accordion__copy-button--success");
    button.querySelector(".usa-sr-only").textContent = "Code copied to clipboard";

    // After timeout, reset to default state
    setTimeout(() => {
      button.classList.remove("usa-accordion__copy-button--success");
      button.querySelector(".usa-sr-only").textContent = "Copy code";
    }, 3000);

    // Select section code and copy to clipboard
    const CONTENT =  button.parentNode;
    const CODE = CONTENT.querySelector("code");
    return navigator.clipboard.writeText(CODE.textContent);
  });
});

