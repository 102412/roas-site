const picker = document.getElementById("accentPick");
const popup = document.getElementById("accentPopup");
const closeBtn = document.getElementById("closePopup");

let popupShown = false;

// Use "pointerdown" instead of "input" just to guarantee mouse triggers
picker.addEventListener("input", () => {
  document.documentElement.style.setProperty("--accent-color", picker.value);

  if (!popupShown) {
    popup.classList.add("show");
    popupShown = true;
  }
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});

// Close popup if clicking outside the box
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("show");
  }
});

/* CURSOR GLOW */
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* SCROLL GLOW */
const scrollGlow = document.querySelector(".scroll-glow");
let scrollTimer;

window.addEventListener("scroll", () => {
  scrollGlow.style.opacity = ".25";
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    scrollGlow.style.opacity = "0";
  }, 180);
});

/* SHAPE PARALLAX */
const shapes = document.querySelectorAll(".shape");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  shapes.forEach((shape, i) => {
    let speed = (i + 1) * 0.18;
    shape.style.transform = `translateY(${scroll * speed}px) rotate(${scroll * 0.05}deg)`;
  });
});


/* =============================== */
/* GLASS RAIN EFFECT (NEW CODE) */
/* =============================== */

const ctaButton = document.querySelector(".cta");
const particleLayer = document.querySelector(".particle-layer");

let spawning = false;

function spawnParticle() {

  const particle = document.createElement("div");
  particle.classList.add("particle");

  const size = Math.random() * 20 + 10;
  const startX = Math.random() * window.innerWidth;

  particle.style.width = size + "px";
  particle.style.height = size + "px";
  particle.style.left = startX + "px";
  particle.style.top = "-40px";

  particle.style.transform = `rotate(${Math.random()*360}deg)`;

  particleLayer.appendChild(particle);

  let y = -40;
  let rotation = Math.random()*360;
  const speed = Math.random()*3 + 2;
  const rotateSpeed = Math.random()*2 - 1;

  function fall(){

    y += speed;
    rotation += rotateSpeed;

    particle.style.top = y + "px";
    particle.style.transform = `rotate(${rotation}deg)`;

    if(y < window.innerHeight + 40){
      requestAnimationFrame(fall);
    } else {
      particle.remove();
    }

  }

  fall();

}

function spawnLoop(){

  if(!spawning) return;

  spawnParticle();

  setTimeout(spawnLoop, 80);

}

ctaButton.addEventListener("mouseenter", () => {

  spawning = true;
  spawnLoop();

});

ctaButton.addEventListener("mouseleave", () => {

  spawning = false;

});
