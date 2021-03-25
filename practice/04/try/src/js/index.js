(function () {
  'use strict';

  const buttonList = document.querySelectorAll(".button")
  buttonList.forEach(btn => {
    btn.addEventListener('click', () => {
      const next = btn.nextElementSibling
      next.classList.toggle('is-active')
    })
  })
})()