// Declarations
let typer1 = document.querySelector("#typer");
let txt1 = "Web Developer";
let txt2 = "Comptitive Programmer";
let theme = document.querySelector("#theme");
let navbar = document.querySelector("#navbar");
let changecolor = Array.from(document.querySelectorAll(".changecolor"));
let section = Array.from(document.querySelectorAll(".section"));
let intro_pts = Array.from(document.querySelectorAll(".intro-pts"));

// Header Scroll Effect
const ScrollHeader = () => {
  window.scrollY >= 50
    ? navbar.classList.add("scroll-navbar")
    : navbar.classList.remove("scroll-navbar");
};

// Typewriter
let typewriter = new Typewriter(".typed-cursor", {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(0)
  .typeString(txt1)
  .pauseFor(1000)
  .deleteChars(txt1.length)
  .pauseFor(1000)
  .typeString("")
  .typeString(txt2)
  .pauseFor(1000)
  .deleteChars(txt2.length)
  .typeString("")
  // .pauseFor(3000)
  .start();

// Light Theme
const lightTheme = () => {
  theme.classList.remove("bxs-sun");
  theme.classList.add("bxs-moon");
  section.forEach((element) => {
    element.style.background = "#f2f2f2";
  });
  changecolor.forEach((element) => {
    element.style.color = "black";
  });
};

// Dark Theme
const darkTheme = () => {
  theme.classList.remove("bxs-moon");
  theme.classList.add("bxs-sun");
  section.forEach((element) => {
    element.style.background = "#141414";
  });
  changecolor.forEach((element) => {
    element.style.color = "white";
  });
};

// Change Theme
const changeTheme = () => {
  theme.classList.contains("bxs-moon") ? darkTheme() : lightTheme();
};

// Event handling
window.addEventListener("scroll", ScrollHeader);

theme.addEventListener("click", changeTheme);
