(function () {
  "use strict";

  const listElement = document.getElementsByClassName("list")[0];
  const itemElements = document.getElementsByClassName("item");
  const prev = document.getElementsByClassName("prev")[0];
  const next = document.getElementsByClassName("next")[0];

  // Transition後の処理を行ったフラグ
  let prevAfterTransitionEnd = false;
  let nextAfterTransitionEnd = false;

  const listElementWidth = listElement.clientWidth;
  const itemElementWidth = itemElements[0].clientWidth;

  // 初期設定
  insertBeforeListItem();

  next.addEventListener("click", () => {
    addTransitionClass();
    listElement.style.marginLeft = `-${itemElementWidth}px`;
    nextAfterTransitionEnd = false;

    listElement.addEventListener("transitionend", () => {
      if (nextAfterTransitionEnd) return;

      listElement.appendChild(itemElements[0]);
      removeTransitionClass();
      nextAfterTransitionEnd = true;
    });
  });

  prev.addEventListener("click", () => {
    addTransitionClass();
    listElement.style.marginLeft = `${itemElementWidth}px`;
    prevAfterTransitionEnd = false;

    listElement.addEventListener("transitionend", () => {
      if (prevAfterTransitionEnd) return;

      listElement.insertBefore(
        itemElements[itemElements.length - 1],
        listElement.firstElementChild
      );
      removeTransitionClass();
      prevAfterTransitionEnd = true;
    });
  });

  function addTransitionClass() {
    listElement.classList.add("is-transition");
  }

  function removeTransitionClass() {
    listElement.style.marginLeft = "0px";
    listElement.classList.remove("is-transition");
  }

  function insertBeforeListItem() {
    const clonedItems = Array.from(
      listElement.cloneNode(true).getElementsByClassName("item")
    ).reverse();

    Array.prototype.forEach.call(clonedItems, item => {
      listElement.insertBefore(item, listElement.firstChild);
    });

    listElement.style.left = `-${listElementWidth}px`;
  }
})();
