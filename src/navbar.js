// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector("#nav-menu");
const navItems = document.querySelectorAll("#nav-menu");

const mediaQueryLg = window.matchMedia("(max-width: 1024px)");

const setToggleTrigger = (element) => {
    element.addEventListener("click", function () {
      if (mediaQueryLg.matches) {
          hamburger.classList.toggle("hamburger-active");
          navMenu.classList.toggle("hidden");
      }
    });
};

setToggleTrigger(hamburger);
navItems.forEach(navItem => setToggleTrigger(navItem));

// Navbar Fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    header.classList.remove('bg-transparent');
    header.classList.remove('absolute');
  } else {
    header.classList.remove('navbar-fixed');
    header.classList.add('bg-transparent');
    header.classList.add('absolute');
  }
}