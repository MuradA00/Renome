const burger = document.querySelector('.burger')
const mobMenu = document.querySelector('.menu')
const closeIcon = document.querySelector('.menu__close')
const body = document.body
const menuLinks = document.querySelectorAll('.menu-nav__item')

burger.addEventListener('click', () => {
  burger.classList.toggle('--burger-active');
  menuOpen();
  body.classList.add('--body-locked')
  menuLinks.forEach(function(menuLinks) {
    menuLinks.classList.add('fade-up')
  })
})

closeIcon.addEventListener('click', () => {
  mobMenu.classList.remove('--open-menu')
  burger.classList.remove('--burger-active')
  body.classList.remove('--body-locked')
  menuLinks.forEach(function(menuLinks) {
    menuLinks.classList.remove('fade-up')
  })
})

function menuOpen () {
  mobMenu.classList.add('--open-menu')
  if (mobMenu.classList.contains('--open-menu')) {

  }
}


const menuMobLinks = document.querySelectorAll('.mob-menu__link');

if (menuMobLinks.length > 0) {
  menuMobLinks.forEach(function (menuMobLinks) {
    menuMobLinks.addEventListener("click", function (event) {
      mobMenu.classList.remove('--open-menu');
      body.classList.remove('--body-locked')
    });
  });
}
