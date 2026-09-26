const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const filters = document.querySelectorAll(".filter");
const items = document.querySelectorAll(".menu-item");

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    items.forEach(item => {
      item.classList.toggle("hidden", filter !== "all" && item.dataset.category !== filter);
    });
  });
});
