// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const navItems = document.querySelectorAll(".nav-item");
const toTop = document.querySelector("#to-top");
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

const mediaQueryLg = window.matchMedia("(max-width: 1024px)");

const setToggleTrigger = (element) => {
  element.addEventListener("click", function (event) {
    event.stopPropagation();
    if (mediaQueryLg.matches) {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    }
  });
};

window.addEventListener("click", function (event) {
  event.stopPropagation();
  if (
    mediaQueryLg.matches &&
    event.target != hamburger &&
    event.target != navMenu &&
    !event.target.closest("#dark-toggle-indicator")
  ) {
    console.log(event.target);
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

setToggleTrigger(hamburger);
navItems.forEach((navItem) => setToggleTrigger(navItem));

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    header.classList.remove("bg-transparent");
    header.classList.remove("absolute");
    toTop.classList.remove("translate-y-20");
  } else {
    header.classList.remove("navbar-fixed");
    header.classList.add("bg-transparent");
    header.classList.add("absolute");
    toTop.classList.add("translate-y-20");
  }
};
