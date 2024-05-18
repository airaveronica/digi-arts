import { initCard } from "../components/card.js";
import { data } from "../utils/data.js";

export function initGallery() {
  const gallery = `<main>
    <section class="gallery">
    ${data.map((data) => initCard(data)).join("")} 
      </section>
    </main>
    <div id="company-details"></div>
    `;

  return [gallery, addCardEvents];
}

function addCardEvents() {
  const logoCard = $all(".logo-card");
  logoCard.forEach((card) => {
    card.addEventListener("click", () => handleClick(card));
    // card.addEventListener("mouseenter", () => handleHover(card));
    // card.addEventListener("mouseleave", () => handleMouseLeave(card));
  });
}

// function handleHover(card) {
//   console.log(card);
// }
// function handleMouseLeave(card) {
//   console.log(card);
// }
function handleClick(card) {
  location.href = `#/gallery/${card.id}`;
}
