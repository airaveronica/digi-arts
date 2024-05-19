export function initHome() {
  const home = `
    <main>
      <section class="intro">
        <article>
          <h1 class="title" style="--i: 0;">
            Digital Arts <em text="Development">Development</em> Course
          </h1>
          <p style="--i: 1; ">
            Digital art, once called computer art or new media art. art made
            using software, computers, or other electronic devices. Anything
            produced or made on digital media, such as animations, photographs,
            illustrations, videos, digital paintings, and such can be classified
            as digital art.
          </p>
          <button style="--i: 2;" class="get-started primary-btn">
            <a href="#"></a>
            
            Get Started
            </button>
        </article>
        <!-- Possible Additional Info / Image at the right side --> 
      </section>
      <!-- In case there's a need to create another section -->
    </main>
 `;

  return [home, cb];
}

function cb() {
  document.body.style.backgroundImage =
    "url(/src/public/assets/background.jpg)";
}
