const hamburger = document.querySelector(".header__hamburger");
const menu = document.querySelector(".header__menu");

let show = false;

const handleSwitchMenu = (menu) => {
  if (show === false) {
    menu.classList.add("show-menu");
    menu.classList.remove("hide-menu");
    show = true;
  } else {
    menu.classList.add("hide-menu");
    menu.classList.remove("show-menu");
    show = false;
  }
};

const itemLinks = document.querySelectorAll(".item__link");
function itemLinkAction() {
  itemLinks.forEach((itemLink) => itemLink.classList.remove("active"));
  this.classList.add("active");
}

hamburger.addEventListener("click", () => handleSwitchMenu(menu));
itemLinks.forEach((itemLink) =>
  itemLink.addEventListener("click", itemLinkAction)
);

