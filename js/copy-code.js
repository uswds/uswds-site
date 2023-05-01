const COPY_CODE_CLASS = "usa-copy-code";
const COPY_BUTTON_CLASS = `usa-button usa-button--outline ${COPY_CODE_CLASS}__button`;
const COPY_WRAPPER_CLASS = `${COPY_CODE_CLASS}__wrapper`;

const COPY_CODE = document.querySelectorAll(`.${COPY_CODE_CLASS}`);

const createWrapper = () => {
  const wrapper = document.createElement("div");
  wrapper.classList.add(COPY_WRAPPER_CLASS);

  return wrapper;
};

const createCopyButton = () => {
  const btn = document.createElement("button");
  const btnText = `
    <span class="" aria-hidden="true">Copy</span>
    <span class="usa-sr-only">Copy component code</span>
  `;

  btn.className = COPY_BUTTON_CLASS;
  btn.setAttribute("type", "button");

  btn.insertAdjacentHTML("beforeend", btnText);

  return btn;
};

const buildHTML = () => {
  COPY_CODE.forEach((copyCodeElement) => {
    const copyWrapper = createWrapper();
    const copyButton = createCopyButton();

    copyWrapper.appendChild(copyButton);
    btnFunction(copyButton);

    copyCodeElement.appendChild(buttonWrapper);
  });
};

const btnFunction = (button) => {
  button.addEventListener("click", () => {
    // Set success state
    button.classList.add("usa-copy-code--button--success");
    button.querySelector("[aria-hidden]").textContent = "Copied!";
    button.querySelector(".usa-sr-only").textContent =
      "Code copied to clipboard";

    // After timeout, reset to default state
    setTimeout(() => {
      button.classList.remove("usa-copy-code--button--success");
      button.querySelector("[aria-hidden]").textContent = "Copy";
      button.querySelector(".usa-sr-only").textContent = "Copy component code";
    }, 3000);

    // Select section code and copy to clipboard
    const WRAPPER = button.parentNode;
    const CONTENT = WRAPPER.parentNode;
    const CODE = CONTENT.querySelector("code");
    return navigator.clipboard.writeText(CODE.textContent);
  });
};

buildHTML();
