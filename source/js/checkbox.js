const checkBox = document.querySelectorAll('.request__checkbox')
const checkIcon = document.querySelectorAll('.check-icon')
const modalCheck = document.querySelector('.modal__checkbox')

modalCheck.addEventListener('click', () => {
  modalCheck.classList.toggle('--check-active')
})

checkBox.forEach(e => {
  e.addEventListener('click', function(){
    checkIcon.forEach(chckIcon => {
      chckIcon.classList.toggle('--check-visible')
    })
  })
})
