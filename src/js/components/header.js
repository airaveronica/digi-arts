import { getURL } from "../utils/UrlManager.js";

export function initHeader() {
  const header = createComponent({ tag: "header" });
  header.innerHTML = `
  <nav>
  <h1 id="logo" >DigiArts</h1>
    <ul id="menu">
      <li><a class="nav-links active" href="#/"> HOME </a></li>
      <li><a class="nav-links" href="#/gallery"> GALLERY </a></li>
      <li><a class="nav-links" href="#/teasers"> TEASERS </a></li>
      <li><a class="nav-links" href="#/about"> ABOUT </a></li>

    </ul>
   ${
     // <form class="search-bar">
     // <input type="text" placeholder="Search Digital Arts..." />
     // <button class="primary-btn">Search</button>
     // </form>
     ""
   }
   <button class="hamburger-menu" ">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>

`;
  return [header, activeLinkHandler];
}

function activeLinkHandler() {
  const menu = $("#menu");
  const menuItems = $all("#menu a");

  window.addEventListener("hashchange", (e) => {
    const { baseParams } = getURL();
    menuItems.forEach((item) => {
      console.log(item.href.split("#")[1] + " : " + baseParams);
      if (item.href.split("#")[1] == `/${baseParams}`) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
}
