(function () {
  'use strict';

  // 入力Element
  const form = document.getElementById('form')

  // 出力Element
  const textWrapper = document.getElementById('text-wrapper')
  const nameText = document.getElementById('name-text')
  const genderText = document.getElementById('gender-text')
  
  form.button.addEventListener('click', () => {
    textWrapper.classList.add('is-active')
    nameText.textContent = form.name.value
    genderText.textContent = form.gender.value
  })
})()