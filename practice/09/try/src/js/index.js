(function () {
  "use strict";

  const thumbList = document.getElementsByClassName("thumb-item-img");
  const mainImg = document.getElementsByClassName("main-img")[0];

  function removeAllActiveClassName() {
    Array.prototype.forEach.call(thumbList, thumb => {
      thumb.classList.remove("is-active");
    });
  }

  function addActiveClassName(e) {
    e.classList.add("is-active");
  }

  Array.prototype.forEach.call(thumbList, thumb => {
    thumb.addEventListener("mouseover", e => {
      const thumbSrc = e.target.getAttribute("src");
      const mainSrc = thumbSrc.replace("_small", "_large");
      mainImg.setAttribute("src", mainSrc);
      removeAllActiveClassName();
      addActiveClassName(e.target);
    });
  });
})();
