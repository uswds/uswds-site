const COPY_CODE_CLASS = "usa-copy-code";
const COPY_BUTTON_CLASSNAME = `usa-button usa-button--outline ${COPY_CODE_CLASS}__button`;
const COPY_WRAPPER_CLASSNAME = `${COPY_CODE_CLASS}__wrapper`;
const COPY_CODE_SELECTOR = document.querySelectorAll(`.${COPY_CODE_CLASS}`);

const buildHTML = () => {
  COPY_CODE_SELECTOR.forEach(e => {
    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add(COPY_WRAPPER_CLASSNAME);
    const btn = document.createElement("button");
    btn.className = COPY_BUTTON_CLASSNAME;
    var buttonText = `
          <span aria-hidden="true">Copy</span>
          <span class="usa-sr-only">Copy component code</span>
    `;
    btn.insertAdjacentHTML("beforeend", buttonText);
    btnFunction(btn);
    buttonWrapper.appendChild(btn);
    
    e.appendChild(buttonWrapper);
  });
};

const btnFunction = (button) => {
  button.addEventListener("click", () => {
    // Set success state
    button.classList.add("usa-copy-code--button--success");
    button.querySelector("[aria-hidden]").textContent = "Copied!";
    button.querySelector(".usa-sr-only").textContent = "Code copied to clipboard";
    
    // After timeout, reset to default state
    setTimeout(() => {
      button.classList.remove("usa-copy-code--button--success");
      button.querySelector("[aria-hidden]").textContent = "Copy";
      button.querySelector(".usa-sr-only").textContent = "Copy component code";
    }, 3000);

    // Select section code and copy to clipboard
    const WRAPPER =  button.parentNode;
    const CONTENT = WRAPPER.parentNode;
    const CODE = CONTENT.querySelector("code");
    return navigator.clipboard.writeText(CODE.textContent);
  });
};

buildHTML();