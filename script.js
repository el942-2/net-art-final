const links = document.querySelectorAll("a[data-target]");
const panels = document.querySelectorAll(".panel");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = link.dataset.target;

    panels.forEach(p => p.classList.remove("active"));

    const next = document.getElementById(target);
    if (next) {
      next.classList.add("active");
      window.scrollTo(0, 0);
    }
  });
});
