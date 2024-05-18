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
  const prevContent = root.innerHTML;
  root.innerHTML = "";
  document.body.style.backgroundImage = "";
  $("#menu").classList.remove("show-menu");

  switch (baseParams) {
    case "":
      root.appendChild(initHome());
      document.body.style.backgroundImage =
        "url(/src/public/assets/background.jpg)";
      break;

    case "about":
      document.body.style.background = "";
      root.appendChild(initAbout());
      $(".main-content picture img").src = "/src/public/assets/background.jpg";
      break;

    case "gallery":
      console.log(params[2]);
      const [gallery, handleShowDetails] = initGallery();
      root.innerHTML = gallery;
      handleShowDetails();
      if (params.length === 3) {
        const details = $("#company-details");
        details.appendChild(initDetails(params[2]));
        details.style.transform = "translateY(0)";
        break;
      }

      // root.innerHTML = gallery;
      break;

    case "teasers":
      const [teasers, callback] = initTeasers();
      root.innerHTML = teasers;
      callback();

      break;
    default:
      const notFound = document.createElement("div");
      notFound.innerText = "404 Page Not Found!";
      root.appendChild(notFound);
      break;
  }
}
