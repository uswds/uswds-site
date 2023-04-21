const COPY_BUTTONS = document.querySelectorAll(".usa-accordion__copy-button");

COPY_BUTTONS.forEach(button => {
  button.addEventListener("click", () => {
    // Set success state
    button.classList.add("usa-accordion__copy-button--success");
    button.querySelector("[aria-hidden]").textContent = "Copied!";
    button.querySelector(".usa-sr-only").textContent = "Copied code to clipboard";
    
    // After timeout, reset to default state
    setTimeout(() => {
      button.classList.remove("usa-accordion__copy-button--success");
      button.querySelector("[aria-hidden]").textContent = "Copy";
      button.querySelector(".usa-sr-only").textContent = "Copy component code";
    }, 3000);

    // Select section code and copy to clipboard
    const WRAPPER =  button.parentNode;
    const CONTENT = WRAPPER.parentNode;
    const CODE = CONTENT.querySelector("code");
    return navigator.clipboard.writeText(CODE.textContent);
  });
});