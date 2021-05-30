const HamburgerEvents = ((_) => {
  // cache the DOM
  const hamburgerEl = document.querySelector(".hamburger");
  const menuContainerEl = document.querySelector(".menuContainer");
  const bodyEl = document.querySelector("body");

  const init = (_) => {
    listeners();
  };

  const listeners = (_) => {
    hamburgerEl.addEventListener("click", (_) => {
      hamburgerEl.classList.toggle("open");
      menuContainerEl.classList.toggle("visible");
      bodyEl.classList.toggle("bodyHidden");
    });
  };

  return {
    init,
  };
})();

export default HamburgerEvents;
