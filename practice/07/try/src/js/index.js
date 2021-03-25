(function () {
  "use strict";

  const form = document.getElementById("form");
  const error = document.getElementById("error");

  const formObject = {
    name: form.name,
    mail: form.mail,
    gender: form.gender,
    age: form.age,
    term: form.term
  };

  // Objectを配列に変換
  // [["name", input], ["mail", input], ["gender", RadioNodeList(3)] ...]
  const formArray = Object.entries(formObject);

  const isValid = () => {
    Array.prototype.filter.call(formArray, ([_, el]) => {
      if (el.type === "checkbox") {
        return el.checked === false;
      } else {
        return el.value === "";
      }
    }).length === 0;
  };

  form.addEventListener("submit", event => {
    event.preventDefault();

    if (isValid()) {
      event.currentTarget.submit();
    } else {
      error.classList.add("is-active");
    }
  });
})();
