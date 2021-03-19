(function () {
  'use strict';

  const input = document.getElementById('input')
  const text = document.getElementById('text')

  input.addEventListener('input', e => {
    if (e.target.value.match(/yes/)) {
      text.textContent = e.target.value
    } else {
      text.textContent = ""
    }
  })
})()