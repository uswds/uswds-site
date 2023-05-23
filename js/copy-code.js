const COPY_CODE_CLASS = "copy-code";
const COPY_BUTTON_CLASS = `usa-button usa-button--outline ${COPY_CODE_CLASS}__button`;
const COPY_BUTTON_SUCCESS_CLASS = `${COPY_CODE_CLASS}__button--success`;
const COPY_WRAPPER_CLASS = `${COPY_CODE_CLASS}__wrapper`;

const COPY_CODE = document.querySelectorAll(`.${COPY_CODE_CLASS}`);

/**
 * Creates a wrapper for copy button.
 *
 * @return {HTMLElement} - A div for `copy-code__wrapper`.
 */
const createWrapper = () => {
  const wrapper = document.createElement("div");
  wrapper.classList.add(COPY_WRAPPER_CLASS);

  return wrapper;
};

/**
 * Creates a copy button component.
 *
 * @return {HTMLElement} - A button for copying code `copy-code__button`.
 */
const createCopyButton = () => {
  const btn = document.createElement("button");
  const btnText = `
    <span class="" aria-hidden="true">Copy</span>
    <span class="usa-sr-only">Copy component code</span>
  `;

  btn.className = COPY_BUTTON_CLASS;
  btn.setAttribute("type", "button");
  btn.setAttribute("aria-live", "polite");

  btn.insertAdjacentHTML("beforeend", btnText);

  return btn;
};

/**
 * Creates a screen reader only span element for success text 
 * 
 * @returns {HTMLElement} - A span for screen reader text
 */
const createSRStatus = () => {
  const srText = document.createElement("span");
  srText.className = "usa-sr-only";
  srText.setAttribute("aria-live", "polite");
  srText.innerHTML = "Code copied to clipboard";

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
  const copyWrapper = copyBtn.closest(`.${COPY_WRAPPER_CLASS}`);
  const labelVisual = copyBtn.querySelector("[aria-hidden]");
  const labelSROnly = createSRStatus();

  // Set success state
  copyBtn.classList.add(COPY_BUTTON_SUCCESS_CLASS);
  labelVisual.textContent = "Copied!";
  copyWrapper.appendChild(labelSROnly);

  // After timeout, reset to default state
  setTimeout(() => {
    copyBtn.classList.remove(COPY_BUTTON_SUCCESS_CLASS);
    labelVisual.textContent = "Copy";
    labelSROnly.remove();
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
    const copyWrapper = createWrapper();
    const copyButton = createCopyButton();

    copyWrapper.appendChild(copyButton);
    copyCodeElement.appendChild(copyWrapper);

    copyButton.addEventListener("click", copyOnClick);
  });
};

init();
