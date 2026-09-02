document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
menu?.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("show", !open);
});

document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("show");
  menu?.setAttribute("aria-expanded", "false");
}));

const lightbox = document.querySelector(".lightbox");
const lightImg = lightbox.querySelector("img");
document.querySelectorAll(".photo").forEach(btn => {
  btn.addEventListener("click", () => {
    lightImg.src = btn.querySelector("img").src;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden","false");
  });
});
lightbox.querySelector("button").addEventListener("click", () => {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden","true");
});
lightbox.addEventListener("click", e => {
  if(e.target === lightbox) lightbox.classList.remove("open");
});
document.addEventListener("keydown", e => {
  if(e.key === "Escape") lightbox.classList.remove("open");
});
