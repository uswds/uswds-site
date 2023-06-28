const COPY_CODE_CLASS = "copy-code";
const COPY_BUTTON_CLASS = `usa-button usa-button--outline ${COPY_CODE_CLASS}__button`;
const COPY_BUTTON_SUCCESS_CLASS = `${COPY_CODE_CLASS}__button--success`;
const COPY_WRAPPER_CLASS = `${COPY_CODE_CLASS}__wrapper`;
const SR_STATUS_MESSAGE_CLASS = `${COPY_CODE_CLASS}__sr-status`;

const COPY_CODE = document.querySelectorAll(`.${COPY_CODE_CLASS}`);
const COPY_WRAPPER = `.${COPY_WRAPPER_CLASS}`;
const SR_STATUS_MESSAGE = `.${SR_STATUS_MESSAGE_CLASS}`;

const SR_DEFAULT_MESSAGE = "Copy component code.";
const SR_SUCCESS_MESSAGE = "Code copied to clipboard.";

/**
 * Creates a wrapper for copy button.
 *
 * @return {HTMLDivElement} - A div for `copy-code__wrapper`.
 */
const createWrapper = () => {
  const wrapper = document.createElement("div");
  wrapper.classList.add(COPY_WRAPPER_CLASS);

  return wrapper;
};

/**
 * Creates a copy button component.
 *
 * @return {HTMLButtonElement} - A button for copying code `copy-code__button`.
 */
const createCopyButton = () => {
  const btn = document.createElement("button");
  const btnTxt = document.createElement("span");

  btnTxt.setAttribute("aria-hidden", "true");
  btnTxt.textContent = "Copy";
  btn.append(btnTxt);

  btn.className = COPY_BUTTON_CLASS;
  btn.setAttribute("type", "button");

  return btn;
};

/**
 * Creates a screen reader only div element for success text 
 * 
 * @return {HTMLDivElement} - A div for screen reader text
 */
const createSRStatus = () => {
  const srText = document.createElement("div");
  srText.classList.add("usa-sr-only", SR_STATUS_MESSAGE_CLASS);
  srText.setAttribute("aria-live", "polite");
  srText.textContent = SR_DEFAULT_MESSAGE;

  return srText;
};

/**
 * Copy <code> text content when copy code button is clicked.
 *
 * @param {Event} event - The click event from copy code button.
 * @return {Clipboard} - Code element contents written to clipboard.
 */
const copyOnClick = (event) => {
  const copyBtn = event.currentTarget;
  const btnWrapper = copyBtn.closest(COPY_WRAPPER);
  const labelVisual = copyBtn.querySelector("[aria-hidden]");
  const labelSR = btnWrapper.querySelector(SR_STATUS_MESSAGE);


  // Set success state
  copyBtn.classList.add(COPY_BUTTON_SUCCESS_CLASS);
  labelVisual.textContent = "Copied!";
  labelSR.textContent = SR_SUCCESS_MESSAGE;

  // After timeout, reset to default state
  setTimeout(() => {
    copyBtn.classList.remove(COPY_BUTTON_SUCCESS_CLASS);
    labelVisual.textContent = "Copy";
    labelSR.textContent = SR_DEFAULT_MESSAGE;
  }, 3000);

  // Select section code and copy to clipboard
  const copyComponent = copyBtn.closest(`.${COPY_CODE_CLASS}`);
  const codeElement = copyComponent.querySelector("code");
  return navigator.clipboard.writeText(codeElement.textContent);
};

/**
 * Initialize code component.
 *
 * Iterate through all code components and attach dynamically generated
 * button & wrapper to DOM. Copy code element contents when button is clicked.
 *
 */
const init = () => {
  COPY_CODE.forEach((copyCodeElement) => {
    const COPY_CODE_ID = copyCodeElement.id;
    const SCREEN_READER_ID = `${COPY_CODE_ID}__sr-label`;

    const copyWrapper = createWrapper();
    const copyButton = createCopyButton();
    const labelSROnly = createSRStatus();
    
    labelSROnly.setAttribute("id", SCREEN_READER_ID);
    copyButton.setAttribute("aria-labelledby", SCREEN_READER_ID);
    
    copyWrapper.appendChild(labelSROnly);
    copyWrapper.appendChild(copyButton);
    copyCodeElement.appendChild(copyWrapper);

    copyButton.addEventListener("click", copyOnClick);
  });
};

init();
