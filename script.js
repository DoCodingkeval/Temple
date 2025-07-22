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

// =============GSAP Animation====================

const GSAPAnimations = () => {
  // ==========Links animation==============
  gsap.from(".nav li", 0.9, {
    opacity: 0,
    y: 100,
    delay: 0.4,
    ease: "back.out(1)",
    stagger: 0.3,
  });
  // ==========Logo animation===============
  gsap.from(".nav__logo", 1, {
    opacity: 0,
    x: -50,
    delay: 0.4,
    ease: "back.out(1)",
  });
  // =============Bg images animation==============
  gsap.from(".img-1", 1, {
    opacity: 0,
    x: 400,
    delay: 0.5,
    ease: "power3.out",
  });

  gsap.from(".img-2", 1, {
    opacity: 0,
    y: 400,
    delay: 0.7,
    ease: "power3.out",
  });

  gsap.from(".img-3", 1, {
    opacity: 0,
    y: 400,
    delay: 0.4,
    ease: "power3.out",
  });

  gsap.from(".img-4", 1, {
    opacity: 0,
    y: 400,
    delay: 1,
    ease: "power3.out",
  });

  gsap.from(".img-5", 1, {
    opacity: 0,
    y: 400,
    delay: 0.5,
    ease: "power3.out",
  });

  gsap.from(".img-6", 1, {
    opacity: 0,
    y: 400,
    delay: 0.1,
    ease: "power3.out",
  });

  gsap.from(".temple__details", 1, {
    opacity: 0,
    x: -150,
    delay: 0.8,
    ease: "power1.out",
  });

  gsap.from(".lantern-1", 1, {
    opacity: 0,
    y: -40,
    delay: 1,
    ease: "power1.out",
  });

  gsap.from(".lantern-2", 1, {
    opacity: 0,
    y: 40,
    delay: 1,
    ease: "power1.out",
  });
};

GSAPAnimations();

// ============Sakura Petals=============

const sakura = new Sakura(".sakura-petals");
