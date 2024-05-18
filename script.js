import { initGlobals } from "./src/js/core/globals.js";
import { initPageNavigator } from "./src/js/core/pageNavigator.js";
import { initApp } from "./src/js/app.js";

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded");
  location.href = "#/";
  initGlobals();
  initApp();
  initPageNavigator();
});
