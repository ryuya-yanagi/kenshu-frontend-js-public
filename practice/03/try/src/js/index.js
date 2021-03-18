(function () {
  'use strict';

  const button = document.getElementById('button')
  const modalOverlay = document.getElementById('modal-overlay')
  const modalContent = document.getElementById('modal-content')
  const modalClose = document.getElementById('modal-close')

  // classList.add, removeを使用した実装
  button.addEventListener('click', () => {
    modalOverlay.classList.add('is-active')
    modalContent.classList.add('is-active')
  })
  
  modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('is-active')
    modalContent.classList.remove('is-active')
  })

  /*
  ** classList.toggleを使用した実装 **
  この実装の場合、コード量は減るが、切り替えスイッチのようなUIでは無いため、
  UIに対してセマンティックな実装ではない？
 
  const toggleActive = () => {
    modalOverlay.classList.toggle('is-active')
    modalContent.classList.toggle('is-active')
  }

  button.addEventListener('click', toggleActive)
  modalClose.addEventListener('click', toggleActive)
  */
})()