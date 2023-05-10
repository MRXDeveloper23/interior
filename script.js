const menuBtn = document.querySelector(".menu-btn");
const navSection = document.querySelector(".nav");
const items = document.querySelectorAll("li");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navSection.style.display = "flex";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navSection.style.display = "none";
    menuOpen = false;
  }
});

items.forEach((item, idx) => {
  item.addEventListener("click", () => {
    ToggleActive(item, idx);
  });
});

function ToggleActive(el, index) {
  el.classList.add("active");
  items.forEach((item, idx) => {
    if (idx !== index) {
      item.classList.remove("active");
    }
  });
}
