import { initHeader } from "./components/header.js";

export function initApp() {
  const body = document.body;
  const root = $("#root");

  const [header, activeLinkHandler] = initHeader();
  body.insertBefore(header, body.firstChild);
  activeLinkHandler();

  const hamburger = $(".hamburger-menu");
  const menu = $("#menu");
  hamburger.addEventListener("click", () => {
    menu.removeEventListener("click", toggleClassList);

    menu.classList.toggle("show-menu");
    menu.addEventListener("click", toggleClassList);
  });

  function toggleClassList() {
    console.log(menu);
  }
}
