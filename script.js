const openMenu = document.querySelector(".open__menu");
const closeMenu = document.querySelector(".close__menu");
const menu = document.querySelector(".nav__menu");
const navLink = document.querySelectorAll(".nav__link");
const nav = document.querySelector(".nav");

openMenu.addEventListener("click", () => {
  menu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
});

navLink.forEach((e) => {
  e.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

const navbar = () => {
  window.scrollY >= 50
    ? nav.classList.add("blur")
    : nav.classList.remove("blur");
};

window.addEventListener("scroll", navbar);

gsap.from(".img-1", 2, {
  opacity: 0,
  x: 400,
});
gsap.from(".img-2", 1, {
  opacity: 0,
  y: 400,
  delay: 0.5,
  ease: "back-out(1.5)",
});
gsap.from(".img-3", 1, {
  opacity: 0,
  y: 400,
  delay: 0.2,
  ease: "back-out(1.5)",
});
gsap.from(".img-4", 1, {
  opacity: 0,
  y: 200,
  delay: 1,
  ease: "back-out(1.5)",
});
gsap.from(".img-5", 1, {
  opacity: 0,
  y: 400,
  delay: 0.2,
  ease: "back-out(1.5)",
});
gsap.from(".img-6", 1, {
  opacity: 0,
  y: 200,
  delay: 0.1,
  ease: "back-out(1.5)",
});

gsap.from(".temple__details", 1.2, {
  opacity: 0,
  y: -100,
  delay: 1.5,
  ease: "back-out(1.5)",
});

gsap.from(".lantern-1", 1.2, {
  opacity: 0,
  x: 70,
  delay: 1.8,
  ease: "back-out(1.5)",
});

gsap.from(".lantern-2", 1.2, {
  opacity: 0,
  x: -70,
  delay: 2,
  ease: "back-out(1.5)",
});

const sakura = new Sakura(".sakura-petals");
