const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn?.addEventListener("click", () => {
  const open = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("mobile-open", !open);
});

document.querySelectorAll(".nav a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("mobile-open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox?.querySelector("img");
const closeLightbox = () => {
  lightbox?.classList.remove("open");
  lightbox?.setAttribute("aria-hidden", "true");
};
document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = item.dataset.src;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});
document.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});
