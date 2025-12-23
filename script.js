const links = document.querySelectorAll("a[data-target]");
const nodes = document.querySelectorAll(".node");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = link.dataset.target;

    nodes.forEach(n => n.classList.remove("active"));

    const next = document.getElementById(target);
    if (next) {
      next.classList.add("active");
      window.scrollTo(0, 0);
    }
  });
});
