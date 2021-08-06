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

const body = document.querySelector("body");
const progressIndicator = document.querySelector(".progress-content");

function pagePosition() {
  const pixelScrolled = window.scrollY;
  const viewPortHeight = window.innerHeight;
  const totalHeightScrollable = body.scrollHeight;

  const pixelsToPercent =
    (pixelScrolled / (totalHeightScrollable - viewPortHeight)) * 100;
  progressIndicator.style.width = `${Math.round(pixelsToPercent)}%`;
}

window.addEventListener("scroll", pagePosition);

function functionScroll() {
  var section = document.querySelectorAll("section"),
    sections = {},
    i = 0;

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });

  for (i in sections) {
    if (sections[i] <= window.pageYOffset + 100) {
      document.querySelector(".active").classList.remove("active");
      document.querySelector("a[href*=" + i + "]").classList.add("active");
    }
  }
}

window.addEventListener("scroll", functionScroll);
window.addEventListener("resize", functionScroll);
