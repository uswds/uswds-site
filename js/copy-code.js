const COPY_CODE_CLASS = "usa-copy-code";
const COPY_BUTTON_CLASS = `usa-button usa-button--outline ${COPY_CODE_CLASS}__button`;
const COPY_BUTTON_SUCCESS_CLASS = `${COPY_CODE_CLASS}__button--success`;
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

const copyOnClick = (event) => {
  const copyBtn = event.currentTarget;
  const labelVisual = copyBtn.querySelector("[aria-hidden]");
  const labelSROnly = copyBtn.querySelector(".usa-sr-only");

  // Set success state
  copyBtn.classList.add(COPY_BUTTON_SUCCESS_CLASS);
  labelVisual.textContent = "Copied!";
  labelSROnly.textContent = "Code copied to clipboard";

  // After timeout, reset to default state
  setTimeout(() => {
    copyBtn.classList.remove(COPY_BUTTON_SUCCESS_CLASS);
    labelVisual.textContent = "Copy";
    labelSROnly.textContent = "Copy component code";
  }, 3000);

  // Select section code and copy to clipboard
  const WRAPPER = copyBtn.parentNode;
  const CONTENT = WRAPPER.parentNode;
  const CODE = CONTENT.querySelector("code");
  return navigator.clipboard.writeText(CODE.textContent);
};

const buildHTML = () => {
  COPY_CODE.forEach((copyCodeElement) => {
    const copyWrapper = createWrapper();
    const copyButton = createCopyButton();

    copyWrapper.appendChild(copyButton);
    copyCodeElement.appendChild(copyWrapper);

    copyButton.addEventListener("click", copyOnClick);
  });
};

buildHTML();
