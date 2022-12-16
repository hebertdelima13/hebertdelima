/*Pegar a altura do header para quando o contéudo tocar no header. mude o background do header*/

const header = document.getElementById("header");
const headerHeight = header.offsetHeight;

const changeHeaderBg = () => {
  if (window.scrollY >= headerHeight) {
    header.classList.add("header-bg");
  } else {
    header.classList.remove("header-bg");
  }
};

window.addEventListener("scroll", function () {
  changeHeaderBg();
});

/*Menu Toggle*/

const nav = document.querySelector("#header");
const toggle = document.querySelectorAll(".toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/*Fechar o menu ao clicar no link*/

const links = document.querySelectorAll("ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/*Scroll para cada seção*/

const menuItems = document.querySelectorAll(".menu a[href^='#']");

const scrollToIdOnClick = (event) => {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to - 80,
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});
