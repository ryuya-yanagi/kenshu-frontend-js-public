(function () {
  "use strict";

  // getElementByを使用したDOM取得
  const button = document.getElementById("button")
  const textType = document.getElementsByClassName("text--type")[0]    // <-- 配列として取得される
  const textClass = document.getElementsByClassName("text--class")[0]  // <-- 配列として取得される

  /*
  ** querySelectorを使用したDOM取得 **
 
  const button = document.querySelector("#button");
  const textType = document.querySelector(".text--type")
  const textClass = document.querySelector(".text--class");
  */

  button.addEventListener("click", () => {
    textType.textContent = button.getAttribute('data-type')
    textClass.textContent = button.getAttribute('class')
  });
})();
