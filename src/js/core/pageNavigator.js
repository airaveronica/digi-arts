import { initAbout } from "../pages/about.js";
import { initDetails } from "../pages/details.js";
import { initGallery } from "../pages/gallery.js";
import { initHome } from "../pages/home.js";
import { initTeasers } from "../pages/teasers.js";
import { getURL } from "../utils/UrlManager.js";
export function initPageNavigator() {
  window.addEventListener("hashchange", render);
  render();
}

const root = document.getElementById("root");
function render() {
  const { baseParams, params } = getURL();
  // const prevContent = root.innerHTML;
  root.innerHTML = "";
  // document.body.style.backgroundImage = "";

  $("#menu").classList.remove("show-menu");

  switch (baseParams) {
    case "":
      const [home, homeCB] = initHome();
      root.innerHTML = home;
      homeCB();
      break;

    case "about":
      root.innerHTML = initAbout();
      $(".main-content picture img").src = "/src/public/assets/background.jpg";
      break;

    case "gallery":
      const [gallery, galleryCB] = initGallery();
      root.innerHTML = gallery;

      galleryCB();
      document.body.style.overflowY = "scroll";

      if (params.length === 3) {
        document.body.style.overflowY = "hidden";

        const details = $("#company-details");
        details.innerHTML += initDetails(params[2]);
        details.style.transform = "scale(1)";
        break;
      }
      // root.innerHTML = gallery;
      break;

    case "teasers":
      const [teasers, teasersCB] = initTeasers();
      root.innerHTML = teasers;
      teasersCB();
      break;

    default:
      const notFound = document.createElement("div");
      notFound.innerText = "404 Page Not Found!";
      root.appendChild(notFound);
      break;
  }
}
