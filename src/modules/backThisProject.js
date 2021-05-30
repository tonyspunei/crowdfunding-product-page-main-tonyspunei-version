const BackThisProject = ((_) => {
  const init = (_) => {
    listeners();
  };

  const listeners = (_) => {
    // cache the DOM
    const firstInpCtaEl = document.querySelector(".firstInp__cta");
    const backThisProjectLayerEl = document.querySelector(
      ".backThisProject__popUp-overlayer"
    );
    const headerCloseIconEl = document.querySelector(".header__closeIcon");

    firstInpCtaEl.addEventListener("click", (_) => {
      backThisProjectLayerEl.classList.toggle("visible");
    });

    headerCloseIconEl.addEventListener("click", (_) => {
      headerCloseIconEl.parentElement.parentElement.parentElement.classList.toggle(
        "visible"
      );
    });
  };

  return {
    init,
  };
})();

export default BackThisProject;
