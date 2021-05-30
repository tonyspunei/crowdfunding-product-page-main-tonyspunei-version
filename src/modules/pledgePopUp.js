const PledgePopUpEvent = ((_) => {
  // cache the DOM
  const pledgeSelectElems = document.querySelectorAll(".pledgeSelect");
  const supportPopUpBgEl = document.querySelector(".support__popUp-bg");
  const bodyEl = document.querySelector("body");
  const supportPopUpBtnEl = document.querySelector(".support__popUp-button");

  const init = (_) => {
    listeners();
  };

  const listeners = (_) => {
    pledgeSelectElems.forEach((elem) => {
      elem.addEventListener("click", (_) => {
        supportPopUpBgEl.classList.toggle("visible");
        bodyEl.classList.toggle("bodyHidden");
        window.scrollTo(0, 1300);
      });
    });

    supportPopUpBtnEl.addEventListener("click", (_) => {
      supportPopUpBgEl.classList.toggle("visible");
      bodyEl.classList.toggle("bodyHidden");
    });
  };

  return {
    init,
  };
})();

export default PledgePopUpEvent;
