const main = () => {
  const panels = document.querySelectorAll(".accordion .accordion-panel");
  panels.forEach((p) => {
    p.onclick = ({ currentTarget }) => {
      panels.forEach((p1) => p1.classList.remove("active"));
      currentTarget.classList.toggle("active");
    };
  });
};

main();
