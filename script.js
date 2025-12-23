const links = document.querySelectorAll("a[data-target]");
const nodes = document.querySelectorAll(".node");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("data-target");

    nodes.forEach(node => {
      node.classList.remove("active");
    });

    const targetNode = document.getElementById(targetId);
    if (targetNode) {
      targetNode.classList.add("active");
      window.scrollTo(0, 0);
    }
  });
});
