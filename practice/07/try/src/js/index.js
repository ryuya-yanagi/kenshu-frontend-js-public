(function () {
  'use strict';

  const form = document.getElementById("form")
  const error = document.getElementById("error")

  const isValid = () => {
    if (form.name === "") return false
    if (form.mail === "") return false
    if (form.gender === "") return false
    if (form.age === "") return false
    if (!form.term.checked) return false
    return true
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (isValid()) {
      event.currentTarget.submit();
    } else {
      error.classList.add('is-active')
    }
  })
})()