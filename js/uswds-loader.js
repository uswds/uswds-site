var loadJS = require("./vendor/loadjs.js");

// EDITABLE: path to USWDS js
var enhancedScriptPath = "../../assets/js/vendor/uswds.min.js";

// Don't edit below this line ----------------------------------------------
// Based on https://www.filamentgroup.com/lab/enhancing-optimistically.html
var docElem = window.document.documentElement;
var loadingClass = "usa-js-loading";
var loadedClass = "usa-js-present";
var defaultClass = "no-js";

function addLoadingClass() {
  docElem.className = docElem.className.replace(defaultClass, loadingClass);
}

function removeDefaultClass() {
  docElem.className = docElem.className.replace(defaultClass, "");
}

function revertClass() {
  docElem.className = docElem.className.replace(loadingClass, defaultClass);
}

function switchToLoadedClass() {
  docElem.className = docElem.className.replace(loadingClass, loadedClass);
}

if ("querySelector" in window.document && "addEventListener" in window) {
  addLoadingClass();

  var script = loadJS(enhancedScriptPath);

  var fallback = setTimeout(revertClass, 8000);

  script.onload = function () {
    clearTimeout(fallback);
    removeDefaultClass();
    // small timeout prevents FOUC
    setTimeout(switchToLoadedClass, 100);
  };
}
