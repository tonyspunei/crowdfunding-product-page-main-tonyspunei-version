const BookmarkFunc = ((_) => {
  //

  // cache the DOM
  const $bookmarkBtnEl = document.querySelector(".firstInp__bookmark");

  const init = (_) => {
    listeners();
  };

  const listeners = (_) => {
    $bookmarkBtnEl.addEventListener("click", (_) => {
      $bookmarkBtnEl.classList.toggle("bookmarked");
      if ($bookmarkBtnEl.classList.contains("bookmarked")) {
        $bookmarkBtnEl.lastElementChild.innerHTML = "Bookmarked";
      } else {
        $bookmarkBtnEl.lastElementChild.innerHTML = "Bookmark";
      }
    });
  };

  return {
    init,
  };
})();

export default BookmarkFunc;
