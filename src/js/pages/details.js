import { data, URL } from "../utils/data.js";

export function initDetails(params) {
  console.log(params);
  const d = data.filter((item) => item.id === params);
  console.log(d);

  const memberImages = d[0].members
    .map((member) => {
      console.log(URL.members + member.imgURL);
      return `<div id="member">
        <img src="${URL.members}${member.imgURL}"></img>
        <h6>${member.name}</h6>
      </div>`;
    })
    .join("");

  const content = `
  <a href="#/gallery"><img src="/src/public/assets/close.svg"></img></a>
  <h1>${d[0].name}</h1>
  <h6>"${d[0].tagline}"</h6>
  <video controls autoplay>
  <source src=${URL.teasers}${d[0].teasers[0]} type="video/mp4">
  </video>

  <article>
    <h4>MEMBERS</h4>
    <div id="members">
      ${memberImages}
    </div>
    <h4>VISION</h4>
    <p>${d[0].vision}</p>
        <br/>
    <h4>MISSION</h4>
    <p>${d[0].mission}</p>
        <br/>
  </article>
  `;

  const details = createComponent({
    tag: "div",
    className: "wrapper",
    content: content,
  });

  return details;
}
