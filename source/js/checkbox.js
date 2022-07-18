const checkBox = document.querySelector('.request__checkbox')
const checkIcon = document.querySelector('.check-icon')

checkBox.addEventListener('click', () => {
  checkIcon.classList.toggle('--check-visible')
})
