let toggleBtn = document.getElementsByClassName("toggle-button")[0];
let navbar = document.getElementsByClassName("nav-list")[0];

toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Animation on scroll

AOS.init({});

// GSAP animations

let tl = gsap.timeline();
tl.from(".navbar", {
  opacity: 0,
  duration: 3,
  ease: "slow",
})
  .from(
    ".stagger",
    {
      opacity: 0,
      duration: 2,
      scale: 0.5,
      stagger: 1,
      ease: "back",
    },
    "-=2"
  )
  .from(
    "button",
    {
      opacity: 0,
      duration: 2,
      ease: "back",
    },
    "-=1"
  );
